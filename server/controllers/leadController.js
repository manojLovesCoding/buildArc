// controllers/leadController.js

import Lead from "../models/Lead.js";

// CREATE LEAD
export async function createLead(req, res) {
  try {
    const {
      fullName,
      company,
      leadType,
      source,
      email,
      phone,
      notes,
      assignedUser,
      tags,
      followUpRequired,
      sendWelcomeEmail,
      notifyRegionalManager,
    } = req.body;

    // Create lead
    const lead = await Lead.create({
      fullName,
      company,
      leadType,
      source,
      email,
      phone,
      notes,
      assignedUser,
      tags,
      followUpRequired,
      sendWelcomeEmail,
      notifyRegionalManager,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET ALL LEADS
export async function getLeads(req, res) {
  try {
    const leads = await Lead.find()
      .populate("assignedUser", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      leads,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET SINGLE LEAD
export async function getLeadById(req, res) {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate("assignedUser", "name email role");

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      lead,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// UPDATE LEAD
export async function updateLead(req, res) {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      lead: updatedLead,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE LEAD
export async function deleteLead(req, res) {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    await lead.deleteOne();

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}