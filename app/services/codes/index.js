'use strict'


module.exports = async function (fastify, opts) {

    const ctx = fastify.mongo.mrg.db
    const codes = ctx.collection('codes')


    fastify.delete('/codes/:id', {

    }, async function (request, reply) {
        const id = request.params.clientsid
        const result = await codes.deleteOne({
            _id: new ObjectId(id)
        })

        if (!result.deletedCount) {
            return reply
                .code(404)
                .send({ status: 'contacts not found' })
        }

        return { status: 'ok' }

    })


    fastify.get('/', {

    }, async function (request, reply) {
        // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 }
        let project = { "CodeType": 1, "Description": 1 }

        const result = await codes.find({ "CodeType": { $gt: 0, $lt: 42 } }).project(project).sort({

            "CodeType": 1, "Description": 1
        }).toArray()


        fastify.log.info(`===============result====================== `)

        // fastify.log.info(`result title ${result[0].LastName} `)
        fastify.log.info(`===================================== `)

        return result

    })

   
    

    // fastify.post('create', {

    // }, async function (request, reply) {
    //     let dd = new Date();
    //     let obj = {
    //         "ID": NumberInt(999999),
    //         "CodeType": NumberInt(12),
    //         "Description": "test insert",
    //         "IntegerValue": null,
    //         "StringValue": null,
    //         "SortOrder": NumberInt(0),
    //         "SecurityLevel": null,
    //         "Protected": "N",
    //         "CurrencyValue": null,
    //         "createdAt": ISODate(dd),
    //         "updatedAt": ISODate(dd)
    //     }
    //     result = await codes.insertOne(obj);

    //     fastify.log.info(`===============result.insertedId====================== `,result.insertedId)
    //     fastify.log.info(`===================================== `)
    //     return result.insertedId;

    //     // return result

    // })


    fastify.post('/create',
    {
    
    },
    async (req, reply) => {
        fastify.log.info(`=========create============================ `)
    

    let dd = new Date();
    let obj = {
        "ID": NumberInt(999999),
        "CodeType": NumberInt(12),
        "Description": "test insert",
        "IntegerValue": null,
        "StringValue": null,
        "SortOrder": NumberInt(0),
        "SecurityLevel": null,
        "Protected": "N",
        "CurrencyValue": null,
        "createdAt": dd,
        "updatedAt": dd
    }
      result = await codes.insertOne(obj);
      fastify.io.sockets.emit('lobby', result.insertedId);
      return result.insertedId;

      // return {database, collection};
    }
  );
fastify.get('/create',
    {
    
    },
    async (req, reply) => {
        fastify.log.info(`=======emulate==create============================ `)
    //   const { database, collection } = req.params;
    //   const entity = getEntity(database, collection);
    //   const obj = JSON.parse(req.body, reviver);
    //   let result;
    //   if (Array.isArray(obj)) {
    //     result = await entity.insertMany(obj);
    //     fastify.io.sockets.emit('lobby', result.insertedIds);
    //     return result.insertedIds;
    //   } else {
    //     result = await entity.insertOne(obj);
    //     fastify.io.sockets.emit('lobby', result.insertedId);
    //     return result.insertedId;
    //   }
    // database.collection('expensemaster').insert({date: new Date(Date.now()).toISOString()}, function(err, r) {

    //     console.log("query executed");
    //     });
    // var isodate = new Date(Date.now()).toISOString() //this inserts as string
    var isodate2 = new Date()// this inserts as isodate
   
    let dd = new Date();
    let obj = {
        "ID": 999999,
        "CodeType": 12,
        "Description": "test insert",
        "IntegerValue": null,
        "StringValue": null,
        "SortOrder": 0,
        "SecurityLevel": null,
        "Protected": "N",
        "CurrencyValue": null,
        "createdAt": isodate2,
        "updatedAt": isodate2
    }
     let result = await codes.insertOne(obj);
    //   fastify.io.sockets.emit('lobby', result.insertedId);
      return result.insertedId; //.createdAt//

      // return {database, collection};
    }
  );


    // real
    //  http://localhost:9020/api/v1/codes
    //  http://localhost:9020/api/v1/contact/create  //?keywords=Collector&genres=Abstraction&contactl=s&contactf=a&deceased=0&tabname=Contactsearch


}

module.exports.autoPrefix = '/api/v1/codes'
