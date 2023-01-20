const Joi = require('joi');
const { ObjectId } = require('../../template/tools/db-validation.tool');

module.exports.GET_INSTITUTE = {
    institute_id: ObjectId()
}

module.exports.POST_INSTITUTE = {
    name: Joi.string().required().min(3).max(100),
    address: Joi.string().required().min(3).max(100)
}

module.exports.INSERT_INSTITUE = {
    ...this.POST_INSTITUTE,
    _id: ObjectId(),
    created_at: Joi.date().required(),
    modified_at: Joi.date().required(),
    is_active: Joi.boolean().default(true).optional()
}

module.exports.PATCH_INSTITUTE = {
    name: Joi.string().optional().min(3).max(100),
    address: Joi.string().optional().min(3).max(100)
}

module.exports.UPDATE_INSTITUE = {
    ...this.PATCH_INSTITUTE,
    modified_at: Joi.date().required()
}
