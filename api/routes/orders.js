const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Ordered were fetched',
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: 'Ordered was created',
    order,
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order details',
    orderId: req.params.orderId,
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order delete',
    orderId: req.params.orderId,
  });
});

module.exports = router;
