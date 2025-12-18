import { body } from "express-validator";

export const userValidation = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('email must be a valid email'),
]