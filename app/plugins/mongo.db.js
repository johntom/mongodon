'use strict'

const fp = require('fastify-plugin');

module.exports = fp(async (fastify, opts) => {
  console.log('Registering databases...');
  // fastify.register(require('fastify-mongodb'), {useNewUrlParser: true, url: process.env.MONGODB_URL, name: process.env.MONGODB_NAME });
fastify  
  // .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.mrg, name: 'mrg' })
  // .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLmrg, name: 'mrg' })
  // .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLPOD, name: 'pod' })
  // console.log('  ', process.env.MONGODB_URLmrg, 'registered...');
  // console.log('  ', process.env.MONGODB_URLPOD, 'registered...');
 
  
  // .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLGallery, name: 'gallerynm' })
  // .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLpod, name: 'pod' })
 
  .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLmas, name: 'mas' })
  .register(require('fastify-mongodb'), {  useNewUrlParser: true,url: process.env.MONGODB_URLpod, name: 'pod' })

 
  console.log('mas  ', process.env.MONGODB_URLmas, 'registered...');
  console.log('pod  ', process.env.MONGODB_URLpod, 'registered...');
  

  console.log('/pi 002===plugin================fastify mongodb======');
});
