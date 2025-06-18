// api/index.ts
import express from 'express';
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'API is working' });
});

export default app;
