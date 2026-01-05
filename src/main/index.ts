import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Clean Architecture Boilerplate'
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Clean Architecture Course!',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Clean Architecture Course - Ready to learn!`);
});