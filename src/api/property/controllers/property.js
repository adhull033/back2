'use strict';

/**
 * property controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::property.property', ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async getfeatured(ctx) {
    const { city } = ctx.params
    try {
      const response = await strapi.entityService.findMany('api::property.property', {
        populate: ["id", "title", "address", "price", "type", "location_city", "locality", "brand_icon", "status", "createdAt", "updatedAt", "sqft", "images", "amenities", "features"],
        filters: {
          location_city: { $containsi: city },
        },
        sort: { createdAt: 'desc' },
      })
      if (response.length == 0) {
        throw new Error("Empty response")
      }
      return this.transformResponse(response)
    }
    catch (e) {
      ctx.response.status = 404
      ctx.response.body = e
    }
  },

  async getlisting(ctx) {
    const city = ctx.params.city
    const query = { ...ctx.query['filters'] }
    console.log(query)
    try {
      const result = await strapi.entityService.findMany('api::property.property', {
        populate: ["id", "title", "address", "price", "type", "location_city", "locality", "status", "createdAt", "updatedAt", "sqft", "images", "amentities", "features"],
        filters: {

          location_city: city,
          // price:{$gte: minPrice},
          // price:{$lte: maxPrice},
          ...query,

        },
      })
      //console.log(result)
      if (result.length == 0) {
        throw new Error("Empty response ")
      }
      const sanitized = await this.sanitizeOutput(result, ctx)
      return this.transformResponse(sanitized)
    }
    catch (e) {
      ctx.response.status = 404
      ctx.response.body = {
        "status": ctx.response.status,
        "message": e.message
      }
    }
  },

  async search(ctx) {

    const { location, searchQuery } = ctx.query
    let filters = {
      location_city: { $containsi: location },
    };


    if (searchQuery) {
      filters = {
        $or: [
          {
            description: { $containsi: searchQuery.toLowerCase() },
          },
          {
            title: { $containsi: searchQuery.toLowerCase() },
          },
          {
            bhk: { $containsi: searchQuery.toLowerCase() },
          },
          {
            type: { $containsi: searchQuery.toLowerCase() },
          },
          {
            address: { $containsi: searchQuery.toLowerCase() },
          },
          {
            locality: { $containsi: searchQuery.toLowerCase() },
          },
        ],
      };
    }





    try {

      if (location !== undefined) {
        const result = await strapi.entityService.findMany('api::property.property', {
          populate: ["id", "title", "address", "price", "type", "location_city", "locality", "status", "createdAt", "updatedAt", "sqft", "images", "amenities", "features"],
          filters
        });

        if (result.length === 0) {
          throw new Error("Empty response ")
        }

        const sanitized = await this.sanitizeOutput(result, ctx)
        return this.transformResponse(sanitized)

      } else {
        ctx.response.body = {
          "status": ctx.response.status,
          "message": "Expected a valid Location, got undefined"
        }
      }

    }
    catch (e) {
      ctx.response.status = 404,
        ctx.response.body = {
          "status": ctx.response.status,
          "message": e.message
        }
    }
  }


}));