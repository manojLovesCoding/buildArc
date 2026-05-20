// controllers/dealController.js

import Deal from "../models/Deal.js";

// CREATE DEAL
export async function createDeal(req, res) {
  const cleanPayload = {
    ...req.body,
    assignedUser: req.body.assignedUser || null,
    exhibitor: req.body.exhibitor || null,
    lead: req.body.lead || null,
  };
  try {
    const deal = await Deal.create({
      ...cleanPayload,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Deal created successfully",
      deal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET ALL DEALS
export async function getDeals(req, res) {
  try {
    const deals = await Deal.find()
      .populate("assignedUser", "name email")
      .populate("createdBy", "name email")
      .populate("lead", "name email")
      .populate("exhibitor", "companyName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: deals.length,
      deals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET SINGLE DEAL
export async function getDealById(req, res) {
  try {
    const deal = await Deal.findById(req.params.id)
      .populate("assignedUser", "name email")
      .populate("createdBy", "name email")
      .populate("lead", "name email")
      .populate("exhibitor", "companyName");

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    res.status(200).json({
      success: true,
      deal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// UPDATE DEAL
export async function updateDeal(req, res) {
  try {
    const deal = await Deal.findById(req.params.id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    const updatedDeal = await Deal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Deal updated successfully",
      deal: updatedDeal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE DEAL
export async function deleteDeal(req, res) {
  try {
    const deal = await Deal.findById(req.params.id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    await deal.deleteOne();

    res.status(200).json({
      success: true,
      message: "Deal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
