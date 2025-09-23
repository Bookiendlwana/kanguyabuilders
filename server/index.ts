import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

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
    // Production: serve static files
    app.use(express.static(join(__dirname, 'public')));
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, 'public/index.html'));
    });
  } else {
    // Development: integrate with Vite
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa'
      });
      
      app.use(vite.ssrFixStacktrace);
      app.use(vite.middlewares);
    } catch (error) {
      console.error('Vite server error:', error);
      // Fallback to serving client directory directly
      app.use(express.static(join(__dirname, '../client')));
      app.get('*', (req, res) => {
        res.sendFile(join(__dirname, '../client/index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);