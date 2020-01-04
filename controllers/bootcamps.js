const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @description: Get all bootcamps
// @route:  GET /api/v1/bootcamps
// @access:  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  //   try {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, msg: bootcamps });
  //   } catch (error) {
  //     // res.status(400).json({ success: false });
  //     next(error);
  //   }
});

// @description: Get a single bootcamp
// @route:  GET /api/v1/bootcamps/:id
// @access:  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  //   try {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, msg: bootcamp });
  //   } catch (error) {
  //     // res.status(400).json({ success: false });
  //     next(error);
  //   }
});

// @description: Create a new bootcamp
// @route:  POST /api/v1/bootcamps/
// @access:  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  //   try {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp
  });
  //   } catch (error) {
  //     // res.status(400).json({
  //     //   success: false
  //     // });
  //     next(error);
  //   }
});

// @description: Update a bootcamp
// @route:  PUT /api/v1/bootcamps/:id
// @access:  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  //   try {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    //   return res.status(400).json({ success: false });
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: bootcamp });
  //   } catch (error) {
  //     // return res.status(400).json({ success: false });
  //     next(error);
  //   }
});

// @description: Delete a bootcamp
// @route:  DELETE /api/v1/bootcamps/:id
// @access:  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  //   try {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    //   return res.status(400).json({ success: false });
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, msg: {} });
  //   } catch (error) {
  //     // return res.status(400).json({ success: false });
  //     next(error);
  //   }
});
