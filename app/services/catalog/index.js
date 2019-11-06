'use strict'


module.exports = async function (fastify, opts) {

    const ctx = fastify.mongo.mrg.db
    const catalog = ctx.collection('catalog')
    // catalogcontactsent
    const _ = require('lodash');

    fastify.delete('/catalog/:id', {

    }, async function (request, reply) {
        const id = request.params.clientsid
        const result = await codes.deleteOne({
            _id: new ObjectId(id)
        })

        if (!result.deletedCount) {
            return reply
                .code(404)
                .send({ status: 'catalog not found' })
        }

        return { status: 'ok' }

    })

    // best to use http://localhost:9020/api/mrg/catalog
    //or http://localhost:9020/api/mrg/catalog?orderBy={"CatalogTitle":1}
    fastify.get('/', {

    }, async function (req, reply) {
        // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 } project(project)
        let project = { "CodeType": 1, "Description": 1 }

        const result = await catalog.find({}).sort({

            CatalogTitle: 1
        }).toArray()


        fastify.log.info(`\n\r======catalog=========result====================== `)

        // fastify.log.info(`result title ${result[0].LastName} `)
        fastify.log.info(`n\r===============catalog====================== `)

        return result

    })

    // http://localhost:9020/api/v1/catalog/findcontent?title=dom
    fastify.get('/findcontent', {

    }, async function (req, reply) {
        console.log('\n================== ')

        const { filter } = req.query;
        let validsearch = false
        //    let project = { "FirstName": 1, "LastName": 1, "Title": 1, "org": 1, "addresses": 1, "artists": 1, "BusIndivid": 1, "mailingStatus": 1 }//,"Salutation": 1, "contacttypes": 1 }
        let searchObj = {};
        let searchstrbj = ''
        let title = req.query.title;
        if ((title !== '0') && (title !== undefined)) {
            validsearch = true
            // var regexStr = '^' + title + '.*';
            var regexStr = '.*' + title + '.*';

            _.extend(searchObj, { CatalogTitle: new RegExp(regexStr, 'i') });
        }
        if (validsearch === false) {
            console.log('validsearch false ::', validsearch)
            res.json({ data: 0 })
        } else {
            // result = await catalog.find(searchObj).project(project).sort({
            let result = await catalog.find(searchObj).sort({
                CatalogTitle: 1
            }).toArray()
            console.log('contacts====length=== ', result.length)
            //   try {
            //     console.log('contacts====length=== ', contacts2.length)
            //   }
            //   catch (error) {
            //     console.error('error: ', error);
            //     // expected output: ReferenceError: nonExistentFunction is not defined
            //     // Note - error messages will vary depending on browser
            //   }
            return result
        }

    })






    fastify.get('/create',
        {

        },
        async (req, reply) => {
            fastify.log.info(`=======emulate==create============================ `)

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

module.exports.autoPrefix = '/api/v1/catalog'


 //CatalogController
//  { method: ['get'], path: '/api/v1/catalog', handler: 'CatalogController.findcatalog' },
//  { method: ['get'], path: '/api/v1/catalog/find/:id', handler: 'CatalogController.findone' },
//  { method: ['get'], path: '/api/v1/catalog/find', handler: 'CatalogController.findcontent' },
//  { method: ['get'], path: '/api/v1/catalog/getcatalogsent/:id', handler: 'CatalogController.getcatalogsent' },
//  { method: ['get'], path: '/api/v1/catalog/getcatalogsenttocontact/:id', handler: 'CatalogController.getcatalogsenttocontact' },
//  { method: ['put'], path: '/api/v1/catalog/update', handler: 'CatalogController.update' },
//  { method: ['post'], path: '/api/v1/catalog/create', handler: 'CatalogController.create' },
//  { method: ['get'], path: '/api/v1/testAA', handler: 'CatalogController.testAA' },

// all catalog can use generic api except content must change in fornt end


// http://localhost:9020/api/mrg/catalogcontactsent
// http://localhost:9020/api/mrg/catalogcontactsent?filter={"CatalogID":6}