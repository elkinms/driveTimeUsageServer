import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        _id: { type: String, lowercase: true, trim: true }, // email as id
        name: { type: String, trim: true },
        passwordHash: { type: String, required: true, select: false },
    },
    { timestamps: true }
);

userSchema.set("toJSON", {
    transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.passwordHash;
        return ret;
    }
});

export default mongoose.model("User", userSchema, "users");
