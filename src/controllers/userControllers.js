import * as userService from '../services/userServices.js';

export const registerUser = async (req, res) => {
    try {
        const userAccount = await userService.register(req.body);
        res.status(201).json(userAccount);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message || 'server error' });
    }
};

export const loginUser = async (req, res) => {
    // TODO
};

export const deleteUser = async (req, res) => {
    // TODO
};

export const updateUser = async (req, res) => {
    // TODO
};

export const changePassword = async (req, res) => {
    // TODO
};

export const getUser = async (req, res) => {
    // TODO
};