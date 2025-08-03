const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/budget', (req, res) => {
  const { income, fixed, variable, goal, months } = req.body;

  // Placeholder logic
  const message = `Received income: ₹${income}, fixed: ₹${fixed}, variable: ₹${variable}, goal: ₹${goal}, months: ${months}`;
  res.json({ result: message });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
