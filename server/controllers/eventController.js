import Event from "../models/Event.js";

// CREATE EVENT
export async function createEvent(req, res) {
  try {
    const {
      eventName,
      description,
      eventType,
      capacity,
      bannerImage,
      venueName,
      venueAddress,
      startDate,
      endDate,
      visibility,
      registrationOpen,
      organizerNotes,
    } = req.body;

    const event = await Event.create({
      eventName,
      description,
      eventType,
      capacity,
      bannerImage,
      venueName,
      venueAddress,
      startDate,
      endDate,
      visibility,
      registrationOpen,
      organizerNotes,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET ALL EVENTS
export async function getEvents(req, res) {
  try {
    const events = await Event.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET SINGLE EVENT
export async function getEventById(req, res) {
  try {
    const event = await Event.findById(req.params.id)
      .populate("createdBy", "name email role");

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// UPDATE EVENT
export async function updateEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE EVENT
export async function deleteEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}