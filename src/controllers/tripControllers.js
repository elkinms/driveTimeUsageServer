import * as tripService from "../services/tripServices.js";

export const startTrip = async (req, res) => {
    try {
        const { startTime } = req.body;
        const email = req.email || req.user?.email || req.body.email;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const trip = await tripService.startTrip(email, startTime);
        res.status(201).json(trip);
    } catch (err) {
        console.error("Start trip error:", err);
        res.status(500).json({ message: "Failed to start trip" });
    }
};

export const touchTrip = async (req, res) => {
    // TODO
};

export const stopTrip = async (req, res) => {
    try {
        const tripId = req.params.id;
        const { stopTime, driveTimeSec } = req.body;

        const trip = await tripService.stopTrip(tripId, { stopTime, driveTimeSec });

        if (!trip) {
            return res.status(404).json({ message: "Active trip not found" });
        }

        res.json(trip);
    } catch (err) {
        console.error("Stop trip error:", err);
        res.status(500).json({ message: "Failed to stop trip" });
    }
};

export const getTripById = async (req, res) => {
    // TODO
};

export const listTrips = async (req, res) => {
    // TODO
};

export const deleteTrip = async (req, res) => {
    // TODO
};
