import Joi from "joi";

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const userAddSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  accessToken: Joi.string().default(""),
  refreshToken: Joi.string().default(""),
});

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing field 'email'",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing field 'password'",
  }),
});

async function validate(schema, obj, next) {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (error) {
    next({
      status: 400,
      message: error.details[0].message,
    });
  }
}

export const validateUser = (req, res, next) => {
  const { userPayLoad } = req.body;
  return validate(userAddSchema, userPayLoad, next);
};

export const validateLogin = (req, res, next) => {
  const { userPayLoad } = req.body;
  return validate(userLoginSchema, userPayLoad, next);
};
