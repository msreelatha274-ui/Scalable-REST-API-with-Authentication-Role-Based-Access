const Joi = require("joi");

exports.validateRegister = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};