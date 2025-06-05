const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 新しいユーザーを作成
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ユーザー一覧を取得
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
