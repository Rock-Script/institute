const Mongo = require('../../template/tools/mongo.tool');
const Validation = require('../../template/tools/db-validation.tool');
const InstituteSchema = require('./institute.schema');
const COLLECTION_NAME = "institutes";

module.exports.insertInstitute = async(payload) => {
    payload._id = Mongo.id();
    payload.is_active = true;
    payload.created_at = new Date();
    payload.modified_at = new Date();

    payload = Validation.validate(InstituteSchema.INSERT_INSTITUE, payload);
    const data = await Mongo.insertOne(COLLECTION_NAME, payload);
    return data;
}

module.exports.updateInstitute = async(user_id, payload) => {
    payload._id = Mongo.id();
    payload.modified_at = new Date();

    payload = Validation.validate(InstituteSchema.UPDATE_INSTITUE, payload);
    const data = await Mongo.updateOne(COLLECTION_NAME, { _id: Mongo.id(user_id)}, { $set: payload});
    return data;
}

module.exports.getInstitute = async(_id) => {
    const data = await Mongo.findOne(COLLECTION_NAME, { _id: Mongo.id(_id)}, { password: 0 });
    return data;
}
