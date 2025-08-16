import User from "../models/userModel.js";

class UserRepository {
    #key(email) {
        return String(email).trim().toLowerCase();
    }

    async createUser(user) {
        return User.create(user);
    }

    async findUserByIdWithPassword(email) { // email as _id
        return User.findById(this.#key(email)).select("+passwordHash");
    }

    async deleteUserById(email) {
        return User.findByIdAndDelete(this.#key(email));
    }

    async updateUserById(email, data) {
        return User.findByIdAndUpdate(this.#key(email), data, { new: true });
    }

    async changePasswordById(email, passwordHash) {
        return User.findByIdAndUpdate(this.#key(email), { passwordHash }, { new: true });
    }

    async findUserById(email) {
        return User.findById(this.#key(email));
    }
}

export default new UserRepository();
