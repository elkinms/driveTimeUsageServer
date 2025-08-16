import express from 'express';
import {deleteTrip, getTripById, listTrips, startTrip, stopTrip, touchTrip} from "../controllers/tripControllers.js";

const router = express.Router();

router.post('/start', startTrip);
router.patch('/:id/touch', touchTrip);
router.patch('/:id/stop', stopTrip);
router.get('/', listTrips);
router.get('/:id', getTripById);
router.delete('/:id', deleteTrip);

export default router;
