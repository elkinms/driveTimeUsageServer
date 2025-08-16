import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';

export async function register({email, name, password}) {
    if (!email || !password) {
        const e = new Error('Email and password are required');
        e.status = 400;
        throw e;
    }

    const key = String(email).trim().toLowerCase();

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser({_id: key, name, passwordHash});
        return {
            id: user.id,
            email: user.id,
            name: user.name,
        };
    } catch (err) {
        if (err?.code === 11000) {
            const e = new Error('user already exists');
            e.status = 409;
            throw e;
        }
        throw err;
    }
}

export async function login({ email, password }) {
    if (!email || !password) {
        const e = new Error('email and password are required');
        e.status = 400;
        throw e;
    }

    const key = String(email).trim().toLowerCase();

    const user = await userRepository.findUserByIdWithPassword(key);
    const correctPassword = user && await bcrypt.compare(password, user.passwordHash);
    if (!user || !correctPassword) {
        const e = new Error('invalid credentials');
        e.status = 401;
        throw e;
    }

    user.passwordHash = undefined; // if use .lean()
    return {
        id: user.id,
        email: user.id,
        name: user.name,
    };
}