'use strict'


module.exports = async function (fastify, opts) {

    const ctx = fastify.mongo.mrg.db
    const mailinglist = ctx.collection('mailinglist')
    const _ = require('lodash');
    const { ObjectId } = fastify.mongo
    fastify.delete('/:id', {

    }, async function (request, reply) {
        const id = request.params.mailinglist
        const result = await mailinglist.deleteOne({
            // _id: new ObjectId(id)
            listName: id
        })
        if (!result.deletedCount) {
            return reply
                .code(404)
                .send({ status: 'catalog not found' })
        }
        return { status: 'ok' }
    })

    // http://localhost:9020/api/v1/mailinglist/9-18 Norman Lewis
    fastify.get('/deletelist/:id', {
    }, async function (request, reply) {
        // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 } project(project)
        const id = request.params.id

        fastify.log.info(`\n\r======mailinglist=========id====================== `, id)
        const result = await mailinglist.find({ listName: id }).sort({
            LastName: 1, FirstName: 1
        }).toArray()
        fastify.log.info(`\n\r======mailinglist=========result====================== `)
        return result
    })
 
    fastify.get('/', {
    }, async function (request, reply) {
        // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 } project(project)
        const id = request.params.mailinglist
        fastify.log.info(`\n\r======mailinglist=========id====================== `, id)
        const result = await mailinglist.find({ listName: '9-18 Norman Lewis' }).sort({
            LastName: 1, FirstName: 1
        }).toArray()
        fastify.log.info(`\n\r======mailinglist=========result====================== `)
        return result
    })

}
module.exports.autoPrefix = '/api/v1/mailinglist'



    // fastify.get('/', {

    // }, async function (req, reply) {
    //     // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 } project(project)
    //     let project = { "CodeType": 1, "Description": 1 }

    //     const result = await catalog.find({}).sort({

    //         CatalogTitle: 1
    //     }).toArray()


    //     fastify.log.info(`\n\r======catalog=========result====================== `)

    //     // fastify.log.info(`result title ${result[0].LastName} `)
    //     fastify.log.info(`n\r===============catalog====================== `)

    //     return result

    // })


    // }, async function (req, reply) {
    //     console.log('\n================== ')

    //     const { filter } = req.query;
    //     let validsearch = false
    //     //    let project = { "FirstName": 1, "LastName": 1, "Title": 1, "org": 1, "addresses": 1, "artists": 1, "BusIndivid": 1, "mailingStatus": 1 }//,"Salutation": 1, "contacttypes": 1 }
    //     let searchObj = {};
    //     let searchstrbj = ''
    //     let title = req.query.title;
    //     if ((title !== '0') && (title !== undefined)) {
    //         validsearch = true
    //         // var regexStr = '^' + title + '.*';
    //         var regexStr = '.*' + title + '.*';

    //         _.extend(searchObj, { CatalogTitle: new RegExp(regexStr, 'i') });
    //     }
    //     if (validsearch === false) {
    //         console.log('validsearch false ::', validsearch)
    //         res.json({ data: 0 })
    //     } else {
    //         // result = await catalog.find(searchObj).project(project).sort({
    //         let result = await catalog.find(searchObj).sort({
    //             CatalogTitle: 1
    //         }).toArray()
    //         console.log('contacts====length=== ', result.length)
    //         //   try {
    //         //     console.log('contacts====length=== ', contacts2.length)
    //         //   }
    //         //   catch (error) {
    //         //     console.error('error: ', error);
    //         //     // expected output: ReferenceError: nonExistentFunction is not defined
    //         //     // Note - error messages will vary depending on browser
    //         //   }
    //         return result
    //     }

    // })






    // fastify.get('/create',
    //     {

    //     },
    //     async (req, reply) => {
    //         fastify.log.info(`=======emulate==create============================ `)

    //         // var isodate = new Date(Date.now()).toISOString() //this inserts as string
    //         var isodate2 = new Date()// this inserts as isodate

    //         let dd = new Date();
    //         let obj = {
    //             "ID": 999999,
    //             "CodeType": 12,
    //             "Description": "test insert",
    //             "IntegerValue": null,
    //             "StringValue": null,
    //             "SortOrder": 0,
    //             "SecurityLevel": null,
    //             "Protected": "N",
    //             "CurrencyValue": null,
    //             "createdAt": isodate2,
    //             "updatedAt": isodate2
    //         }
    //         let result = await codes.insertOne(obj);
    //         //   fastify.io.sockets.emit('lobby', result.insertedId);
    //         return result.insertedId; //.createdAt//

    //         // return {database, collection};
    //     }
    // );


