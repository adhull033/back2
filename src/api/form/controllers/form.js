'use strict';

/**
 * form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { parseMultipartData } = require("@strapi/utils")

module.exports = createCoreController('api::form.form', ({ strapi }) => ({
    async enquire(ctx) {
        try {
        const { data } = parseMultipartData(ctx)

        const entry = await strapi.entityService.create('api::form.form', {
            data: {
                name:data.name,
                mobile: data.mobile,
                email: data.email,
                message: data.message,
                pageURL:data.pageURL
            }
        })

            return ctx.send({ message: 'Form created successfully',data });

        } catch (e) {
            ctx.response.status = 500
            ctx.response.body = e.message

        }
    }

}));





