'use strict'
const fp = require('fastify-plugin')
const path = require('path')
const join = require('path').join;

// module.exports = fp(async (fastify, opts) => {
//     fastify.register(require('fastify-favicon'), { path: './' })

// })
module.exports = fp(async (fastify, opts) => {
    fastify.register(require("point-of-view"), {
        engine: {
            nunjucks: require('nunjucks'),                     
        },
       
       
        templates: path.resolve('../../../views/'),
        // templates: path.resolve('./views/') ,
   
 

    })

})
