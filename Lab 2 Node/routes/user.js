const express = require('express');
const {
  create,
  getAll,
  login,
  editbyId,
  deletbyId,
} = require('../controller/user');
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const user = await create(body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.post('/login', async (req, res, next) => {
  const { body } = req;
  try {
    const user = await login(body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await getAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
});
router.patch('/:id', async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const users = await editbyId(id, body);
    res.json(users);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await deletbyId(id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
