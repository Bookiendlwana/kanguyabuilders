import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';

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
    app.use(express.static(join(__dirname, 'public')));
    
    // Serve the React app for all non-API routes in production
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, 'public/index.html'));
    });
  } else {
    // Development mode - integrate with Vite
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        root: join(__dirname, '../client'),
        configFile: join(__dirname, '../vite.config.ts'),
      });

      app.use(vite.ssrFixStacktrace);
      app.use(vite.middlewares);
    } catch (error) {
      console.error('Failed to create Vite server:', error);
      // Fallback: serve static files if Vite fails
      app.use(express.static(join(__dirname, '../client')));
      app.get('*', (req, res) => {
        res.sendFile(join(__dirname, '../client/index.html'));
      });
    }
  }

  const server = createServer(app);

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Local: http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);

export default app;