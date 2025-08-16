import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, lowercase: true, trim: true }, // email of user
        startTime: { type: Date, default: Date.now },
        stopTime: { type: Date, default: null },
        driveTimeSec: { type: Number, default: 0 },
        touchCount: { type: Number, default: 0 },          // incremented on touch
        status: { type: String, enum: ["active", "completed"], default: "active" },
    },
    { timestamps: true }
);

tripSchema.set("toJSON", {
    transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

export default mongoose.model("Trip", tripSchema, "trips");
