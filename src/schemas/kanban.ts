import Joi from "joi";

const kanbanSchema = Joi.object({
  hashId: Joi.string().required(),
  name: Joi.string().required(),
});

export default kanbanSchema;
