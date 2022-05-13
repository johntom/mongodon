'use strict'

const fp = require('fastify-plugin');

module.exports = fp(async (fastify, opts) => {
  console.log('Registering databases...');

fastify  
.register(require('fastify-mongodb'), { url: process.env.MONGODB_URLmongodon, name: 'mongodon' })
console.log('...  ', process.env.MONGODB_URLmongodon, 'registered..MONGODB_URLmongodon\n\r');

  console.log('/pi 002===plugin================fastify mongodb======');



});
