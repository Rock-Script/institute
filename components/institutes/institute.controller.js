const InstituteService = require('./institutes.service');

module.exports.postInstitute = async (req, res, next) => {
    const data = await InstituteService.addInstitute(req.body);
    return {
        status: 201,
        data,
        message: 'Successfully created institute'
    }
}

module.exports.getInstitute = async (req, res, next) => {
    const data = await InstituteService.getInstitute(req.params.institute_id);
    return {
        status: 200,
        data,
        message: 'Successfully retrieved institute'
    }
}

module.exports.patchInstitute = async (req, res, next) => {
    const data = await InstituteService.updateInstitute(req.params.institute_id, req.body);
    return {
        status: 200,
        data,
        message: 'Successfully created institute'
    }
}