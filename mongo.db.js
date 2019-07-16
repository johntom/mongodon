'use strict'

const fp = require('fastify-plugin');

module.exports = fp(async (fastify, opts) => {
  console.log('Registering databases...');
  // fastify.register(require('fastify-mongodb'), {useNewUrlParser: true, url: process.env.MONGODB_URL, name: process.env.MONGODB_NAME });
fastify  
  .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.mrg, name: 'mrg' })
  .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLPOD, name: 'pod' })
  console.log('  ', process.env.mrg, 'registered...');
  console.log('  ', process.env.MONGODB_URLPOD, 'registered...');

  


  console.log('/pi 002===plugin================fastify mongodb======');
});
