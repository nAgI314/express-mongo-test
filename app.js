const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// ルーティング設定
app.use('/api/users', userRoutes);

// MongoDB 接続
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.error(err));
