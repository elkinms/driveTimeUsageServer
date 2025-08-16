import Trip from "../models/tripModel.js";

class TripRepository {
    #key(email) {
        return String(email).trim().toLowerCase();
    }

    async startTrip(email, startTime = new Date()) {
        return Trip.create({
            userId: this.#key(email),
            startTime,
            status: "active",
            driveTimeSec: 0,
            touchCount: 0,
        });
    }

    async incTouchById(tripId, step = 1) {
        return Trip.findByIdAndUpdate(
            tripId,
            { $inc: { touchCount: step } },
            { new: true }
        );
    }

    async finishTripById(tripId, { stopTime = new Date(), driveTimeSec } = {}) {
        const $set = { stopTime, status: "completed" };
        if (typeof driveTimeSec === "number") $set.driveTimeSec = driveTimeSec;
        return Trip.findOneAndUpdate(
            { _id: tripId, status: "active" },
            { $set },
            { new: true }
        );
    }

    async findById(tripId) {
        return Trip.findById(tripId);
    }

    async listByUser(email, { page = 1, limit = 20, sort = -1 } = {}) {
        const skip = (page - 1) * limit;
        return Trip.find({ userId: this.#key(email) })
            .sort({ startTime: sort })
            .skip(skip)
            .limit(limit);
    }

    // async deleteById(tripId) {
    //     return Trip.findByIdAndDelete(tripId);
    // }
}

export default new TripRepository();