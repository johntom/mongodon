
'use strict'

module.exports = async function (fastify, opts) {
  const ts = fastify.timestamp()// get a plugin

  console.log('/nin hello===================io======')//,io) // Socket.io instance

  // const mysqlprojects = fastify.mysqlconnection;
  // console.log('/ mysqlprojects===================io======',mysqlprojects)

  let tt = new Date(ts)
  fastify.get('/hello', async function (request, reply) {
    // io.sockets.emit('hi', 'everyone');
    // console.log('/n hello 01===================hi======') // Socket.io instance
    // io.sockets.emit('an event sent to all connected clients'); // main namespace

    // const chat = io.of('/chat');
    // chat.emit('an event sent to all connected clients in chat namespace');

    // // is equivalent to
    // // io.of('/').emit('hi', 'everyone');
    const mysql = fastify.mysql;
  console.log('/ mysqlprojects===================io======',mysql)

    return 'hello, world! ' + tt + mysql
  })
  fastify.get('/projects', {
  }, async function (request, reply) {
    // const result = { data: 'info' }
    // fastify.log.info(`===================================== `)
    // return result

     fastify.mysql.nbuildingweb.connection.query('SELECT Floors , BCSNumber , Description, Address,ProjectStatus  FROM `nbuildingweb`.`v_projectdetail` where BCSNumber="131953"').then(result => {
       console.log(result);
       reply.send( result[0])
     }).catch(err => {
       console.log(err);
       reply.send( err)
     });

          // "SELECT Floors , BCSNumber , Description, Address,ProjectStatus  FROM `nbuildingweb`.`v_projectdetail` where BCSNumber='131953'",
    // fastify.mysql.getConnection(onConnect)

  //   function onConnect (err, client) {
  //     if (err) return reply.send(err)
  //     // where BCSNumber='131953'",
  //     client.query(
  //       // 'SELECT id, username, hash, salt FROM users WHERE id=?', [req.params.id],
  //       "SELECT Floors , BCSNumber , Description, Address,ProjectStatus  FROM `nbuildingweb`.`v_projectdetail` where BCSNumber=?", ['131953'],

  //       function onResult (err, result) {
  //         client.release()
  //         reply.send(err || result)
  //       }
  //     )
  //   }
  })     
       
}

module.exports.autoPrefix = '/mysql'