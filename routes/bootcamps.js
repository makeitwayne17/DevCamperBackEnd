const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp); //For ones that doesn't need the id

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp); //For ones that require the id

module.exports = router;

// //create main route
// router.get('/', (req, res) => {
//   res.status(200).json({ success: true, msg: 'Show all bootcamps' });
// });

// router.get('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
// });

// router.post('/', (req, res) => {
//   res.status(200).json({ success: true, msg: 'Create new bootcamp' });
// });

// router.put('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
// });

// router.delete('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
// });
