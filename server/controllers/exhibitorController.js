import Exhibitor from "../models/Exhibitor.js";

// CREATE EXHIBITOR
export async function createExhibitor(req, res) {
  try {
    const {
      companyName,
      industry,
      website,
      headquarters,
      fullName,
      jobTitle,
      email,
      phone,
      boothFormat,
      boothSize,
      notes,
      assignedManager,
    } = req.body;

    const exhibitor = await Exhibitor.create({
      companyName,
      industry,
      website,
      headquarters,
      fullName,
      jobTitle,
      email,
      phone,
      boothFormat,
      boothSize,
      notes,
      assignedManager,
    });

    res.status(201).json({
      success: true,
      message: "Exhibitor registered successfully",
      exhibitor,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET ALL EXHIBITORS
export async function getExhibitors(req, res) {
  try {
    const exhibitors = await Exhibitor.find()
      .populate("assignedManager", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: exhibitors.length,
      exhibitors,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET SINGLE EXHIBITOR
export async function getExhibitorById(req, res) {
  try {
    const exhibitor = await Exhibitor.findById(req.params.id)
      .populate("assignedManager", "name email role");

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    res.status(200).json({
      success: true,
      exhibitor,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// UPDATE EXHIBITOR
export async function updateExhibitor(req, res) {
  try {
    const exhibitor = await Exhibitor.findById(req.params.id);

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    const updatedExhibitor = await Exhibitor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Exhibitor updated successfully",
      exhibitor: updatedExhibitor,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE EXHIBITOR
export async function deleteExhibitor(req, res) {
  try {
    const exhibitor = await Exhibitor.findById(req.params.id);

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    await exhibitor.deleteOne();

    res.status(200).json({
      success: true,
      message: "Exhibitor deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}