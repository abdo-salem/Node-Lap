const express = require('express');
const {
  create,
  getAll,
  getbyId,
  editbyId,
  deletbyId,
} = require('../controller/todo');
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const todo = await create(body);
    res.json(todo);
  } catch (e) {
    next(e);
  }
});
router.get('/', async (req, res, next) => {
  try {
    const todo = await getAll();
    res.json(todo);
  } catch (e) {
    next(e);
  }
});
router.get('/:id', async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const todo = await getbyId(id);
    res.json(todo);
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
    const todo = await editbyId(id, body);
    res.json(todo);
  } catch (e) {
    next(e);
  }
});
router.delete('/:id', async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const todo = await deletbyId(id);
    res.json(todo);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
