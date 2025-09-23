import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from the client build directory in production
    app.use(express.static(join(__dirname, '../dist/public')));
    
    // Serve the React app for all non-API routes in production
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, '../dist/public/index.html'));
    });
  } else {
    // Development mode - integrate with Vite
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.ssrFixStacktrace);
    app.use(vite.middlewares);
  }

  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Development server: http://localhost:${PORT}`);
    }
  });
}

startServer().catch(console.error);

export default app;