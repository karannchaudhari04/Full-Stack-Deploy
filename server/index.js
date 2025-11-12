import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

//API Routes
app.get('/api/message', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT  = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});