const InstituteController = require('./institute.controller');
const InstituteSchema = require('./institute.schema');
const ROUTE_METHODS = require('../../template/contants/route-methods.const');

const path = 'institutes';
const routes = [
    {
        path: `/${path}`,
        method: ROUTE_METHODS.POST,
        validation: {
            body: InstituteSchema.POST_INSTITUTE
        },
        handler: InstituteController.postInstitute
    },
    {
        path: `/${path}/:institute_id`,
        method: ROUTE_METHODS.PATCH,
        validation: {
            body: InstituteSchema.RESET_USER_PASSWORD
        },
        handler: InstituteController.patchInstitute
    },
    {
        path: `/${path}/:institute_id`,
        method: ROUTE_METHODS.GET,
        validation: {
            params: InstituteSchema.GET_INSTITUTE
        },
        handler: InstituteController.getInstitute
    }
]

module.exports = routes;