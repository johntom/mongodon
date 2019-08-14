
  'use strict'

  const fp = require('fastify-plugin');
  
  module.exports = fp(async (fastify, opts) => {
    console.log('Registering mysql databases...');


// const options = Object.assign({}, opts.mysql, {connectionString: 'mysql://remoteuser:y?#m^t3rW&yBLE@108.60.136.131/nbuildingweb'});

 fastify.register(require('fastify-mysql'), { 
   type: 'connection',
   name: 'nbuildingweb',
    promise: true,
    host: '108.60.136.131',
    user: 'remoteuser',
    password: 'y?#m^t3rW&yBLE',
    database: 'nbuildingweb',
    connectionLimit: 10,
    waitForConnections: true,
  });
});
 
//  {
//  connectionString: 'mysql://remoteuser:y?#m^t3rW&yBLE@108.60.136.131/nbuildingweb'
//  })
//   const mysql = await 
// let mysql
  // fastify.register(require('fastify-mysql'), { 
      
  //   promise: false,
  //   host: '108.60.136.131',
  //   user: 'remoteuser',
  //   password: 'y?#m^t3rW&yBLE',
  //   database: 'nbuildingweb',
  //   connectionLimit: 10,
  //   waitForConnections: true,
  // })
//  console.dir('fastify.mysql--',mysql+'----');


/// });
