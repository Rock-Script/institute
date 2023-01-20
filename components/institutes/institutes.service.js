const InstituteModel = require('./institute.model');
const HTTP_RESPONSES = require('../../template/contants/http-responses');

module.exports.addInstitute = async(params) => {
    const insert_response = await InstituteModel.insertInstitute(params);
    return this.getInstitute(insert_response?.insertedId);
}

module.exports.updateInstitute = async(_id, params) => {
    const institute = await InstituteModel.getInstitute(_id);
    if (!institute) {
        throw HTTP_RESPONSES.NOT_FOUND('institute', _id);
    }
    const update_response = await InstituteModel.updateInstitute(institute._id, params);
    if (update_response.modifiedCount === 0) {
        throw HTTP_RESPONSES.INTERNAL_SERVER_ERROR();
    }
    return this.getInstitute(institute._id);
}

module.exports.getInstitute = async(_id) => {
    if (!_id) return null;
    const institute = await InstituteModel.getInstitute(_id);
    return institute;
}