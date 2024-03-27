import Joi from "joi";

const kanbanSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
});

export default kanbanSchema;
