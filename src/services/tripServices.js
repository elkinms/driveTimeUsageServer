import tripRepository from "../repositories/tripRepository.js";

export async function startTrip(email, startTime = new Date()) {
    return tripRepository.startTrip(email, startTime);
}

export async function stopTrip(tripId, { stopTime = new Date(), driveTimeSec } = {}) {
    return tripRepository.finishTripById(tripId, { stopTime, driveTimeSec });
}

// TODO touchTrip, getTripById, listTrips

