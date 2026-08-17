import { body , validationResult } from "express-validator"


function validate(req, res, next) {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
}




export const validatorRegisterUser = [
    body("email")
        .isEmail().withMessage("invalid email format"),
    body("contact")
        .notEmpty().withMessage("contact is required")
        .matches(/^\d{10}$/).withMessage("contact must contain 10 digits"),
    body("password")
        .isLength({ min:5 , max:15 }).withMessage("password must contain character between 5 to 15"),
    body("fullName")
        .notEmpty().withMessage("full name is required")
        .isLength({ min:5 }).withMessage("full name must have at least 5 characters"),
    body("isSeller")
        .isBoolean().withMessage("isSeller must be a boolean value"),

    validate
]