import tripRepository from "../repositories/tripRepository.js";

export async function startTrip(email, startTime = new Date()) {
    return tripRepository.startTrip(email, startTime);
}

export async function stopTrip(tripId, { stopTime = new Date(), driveTimeSec } = {}) {
    return tripRepository.finishTripById(tripId, { stopTime, driveTimeSec });
}

export async function listTrips(email, options = {}) {
    return tripRepository.listByUser(email, options);
}


// TODO touchTrip, getTripById, listTrips

