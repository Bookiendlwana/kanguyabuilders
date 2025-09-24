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

// API route for quote requests
app.post('/api/quote', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Basic validation
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // In a real app, you would save to database and send email
  console.log('Quote request received:', { name, email, phone, service, message });
  
  res.json({ 
    success: true, 
    message: 'Quote request received. We will contact you within 24 hours.' 
  });
});

// Development mode - use Vite dev server
if (process.env.NODE_ENV !== 'production') {
  try {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
      root: join(__dirname, '../client'),
      configFile: join(__dirname, '../vite.config.ts')
    });
    
    app.use(vite.ssrFixStacktrace);
    app.use(vite.middlewares);
    
    console.log('✅ Vite dev server integrated successfully');
  } catch (error) {
    console.error('❌ Failed to start Vite dev server:', error);
    // Fallback: serve static files
    app.use(express.static(join(__dirname, '../client')));
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, '../client/index.html'));
    });
  }
} else {
  // Production mode - serve built files
  app.use(express.static(join(__dirname, '../dist/public')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/public/index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving from: ${process.env.NODE_ENV === 'production' ? 'dist/public' : 'client'}`);
});