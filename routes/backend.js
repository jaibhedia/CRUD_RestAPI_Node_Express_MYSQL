const express = require('express');
const router = express.Router();
const backend= require('../services/backend');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await backend.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
/* POST programming language */
router.post('/', async function(req, res, next) {
    try {
      res.json(await backend.create(req.body));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  });
  /* PUT programming language */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await backend.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating programming language`, err.message);
      next(err);
    }
  });
  /* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await backend.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting programming language`, err.message);
      next(err);
    }
  });
  router.get('/:id', async function(req, res, next) {
    try {
      res.json(await backend.search(req.params.id));
    } catch (err) {
      console.error(`Error while searching programming languages `, err.message);
      next(err);
    }
  });