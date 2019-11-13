'use strict'
//////////////////////
module.exports = async function (fastify, opts) {
    // fastify.addHook('onRequest', async (request, reply) => {
    //   try {
    //     await request.jwtVerify()
    //   } catch (err) {
    //     reply.send(err)
    //   }
    // })

    // Hardcoded
    // from mongo.db.js 
    // MRG
    // .register(require('fastify-mongodb , {  useNewUrlParser: true,url: process.env.MONGODB_URLmrg, name: 'mrg' })
    // const contacts = fastify.mongo.mrg.db.collection('contacts')
    const ctx = fastify.mongo.mrg.db
    const orgs = ctx.collection('orgs')
    const contacts = ctx.collection('contacts')
    // const codes = ctx.collection('codes')
    // const mailinglist = ctx.collection('mailinglist')
    //const entity = fastify.mongo[database].db.collection(collection);
    const _ = require('lodash');
    console.log('contacts/n C:-fastify-mongodon-app-services-contacts')
    const { ObjectId } = fastify.mongo
    //fastify.use(cors())
    // fastify.opts('*', (request, reply) => { reply.send() })

    fastify.delete('/orgs/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    ticketId: {
                        description: 'The id to delete',
                        summary: 'The id to delete',
                        type: 'string'
                    }
                }
            },
            response: {
                '200': {
                    description: 'clients deleted',
                    summary: 'clients deleted',
                    type: 'object',
                    properties: {
                        status: {
                            description: 'Ok if all done',
                            summary: 'Ok if all done',
                            type: 'string'
                        }
                    }
                },
                '404': {
                    description: 'clients not found',
                    summary: 'clients not Found',
                    type: 'object',
                    properties: {
                        status: {
                            description: 'Status message',
                            summary: 'Status message',
                            type: 'string'
                        }
                    }
                }
            }
        }
    }, async function (request, reply) {
        const id = request.params.clientsid
        const result = await clients.deleteOne({
            _id: new ObjectId(id)
        })
        if (!result.deletedCount) {
            return reply
                .code(404)
                .send({ status: 'contacts not found' })
        }
        return { status: 'ok' }
    })

    fastify.get('/:id', {
    }, async function (req, reply) {
        // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 } project(project)
        //let project = { "CodeType": 1, "Description": 1 }
        // let id =req.query.id;
        let id = req.params.id;

        const _id = require('mongodb').ObjectId(id);
        fastify.log.info(`\n\r======client findone=========id====================== `, _id)

        fastify.log.info(`\n\r======client findone=========result====================== `)
        const result = await orgs.find({ _id: _id }).toArray()
        fastify.log.info(`\n\r======client findone=========result====================== `)
        return result
    })

    ///////////1
    //http://localhost:9020/api/v1/orgs/findorgs
    fastify.get('/findorgs', {
    },
        //async function (req, reply) {
        async (req, reply) => {
            let project = { OrgName: 1, Addess: 1, City: 1, State: 1, BusIndivid: 1, _id: 1 }

            // let results = await orgs.find({}).sort({ 'OrgName': 1 }).project(project).toArray(function (err, results) {
            //     if (err) res.status(500).end()
            //     console.log('\n\r results ==========', results.length)
            //     fastify.log.info(`\n\r======results=========result====================== `,results.length)
            // })

            // let results = await orgs.find({}).sort({ 'OrgName': 1 }).project(project).toArray(function (err, results) {
            //     if (err) res.status(500).end()
            //     console.log('\n\r results ==========', results.length)
            //     fastify.log.info(`\n\r======results=========result====================== `, results.length)
            // })


            const results = await orgs.find({}).sort({ 'OrgName': 1 }).project(project).toArray();
            if (results) {
                console.log('\n\r get contacts 1 ==========')

                console.log('\n\r get contacts 2 ==========', results.length)
            }
            let rezarray = []
            let rec
            console.log('\nresult ', results.length)
            let cproject = { LastName: 1, FirstName: 1, _id: 1 }
            let cresults = await contacts.find({}).project(cproject).toArray();
            console.log('\nr cresults ', cresults.length)
            let x=0
            for (const item of cresults) {
                let crec = {}
                crec._id = item._id
                x++
           
                // if (item.LastName !== '' && item.LastName !== undefined && item.BusIndivid !== undefined) {
                     if (item.LastName !== '' && item.LastName !== undefined ) {
                    crec.OrgName = item.LastName + ', ' + item.FirstName
                    crec.BusIndivid = 'C'
                    crec.Addess = ''
                    crec.City = ''
                    crec.State = ''
                  
                    // console.log(' crec ',x, crec.OrgName)
                    console.log(' crec ',x, crec._id ,item.LastName ,item.BusIndivid )

                    results.push(crec)
                }
            }
         
            // 
            // do a delete all records from aggregate table then bulk insert to display in grid
            // await gymaggregate.remove()
            //   await gymaggregate.deleteMany()

            //   // await gymaggregate.insertMany(rezarray)// 3.2 up
            console.log('final ',results.length)
            return results
        }


    )


    // let cresults = await contacts.find({}).project(cproject).toArray(function (err, results) {
    //     if (err) res.status(500).end()
    // })
    // if (cresults !== undefined) {
    //     console.log('\n\r cresults =======', cresults.length)
    //     fastify.log.info(`\n\r======results=========cresults====================== `,cresults.length)

    //     for (const item of cresults) {
    //         let crec = {}
    //         crec._id = item._id
    //         if (item.LastName !== '' && item.LastName !== undefined && item.BusIndivid !== undefined) {
    //             crec.OrgName = item.LastName + ', ' + item.FirstName
    //             crec.BusIndivid = 'C'
    //             crec.Addess = ''
    //             crec.City = ''
    //             crec.State = ''
    //             results.push(crec)
    //         }
    //     }
    // }
    // res.json({ data: results })
    //     return results


    // })


    ///////////1







    fastify.get('/findall', {

    }, async function (req, reply) {
        console.log('\n================== ')
        console.log('\n================== ')
        console.log('\n================== ')
        console.log('\n======start======= ')
        // console.log('\n=====params============= ', req.params)
        console.log('\n=====query============= ', req.query)
        console.log('\n=============contactl===== ', req.query.orgname)
        console.log('\n=============contactf===== ', req.query.address)
        //console.log('\n=========params========= ',req.query.params)

        console.log('\n================== ')
        console.log('\n================== ')

        const { filter } = req.query;
        let validsearch = false
        // console.log('\n=====findcontent============= ')
        // console.log('\n=======filter================', filter)
        let project = { "FirstName": 1, "LastName": 1, "Title": 1, "org": 1, "addresses": 1, "artists": 1, "BusIndivid": 1, "mailingStatus": 1 }//,"Salutation": 1, "contacttypes": 1 }
        let searchObj = {};
        let searchstrbj = ''
        // filter is new json oject

        let trailslegacy = true
        // if (trailslegacy != true) {
        //   // let query = JSON.parse(filter)
        //    // let contactl = query.contactl;
        // }

        // console.log('\n=======legacy================')

        // trails legacy

        //console.log('findall orgs ',req.query["orgname"] )
        let orgname = req.query.orgname;//*1;
        var address = req.query.address;
        var city = req.query.city;//the program converts 1=5,2=10,3=25
        var state = req.query.state;
        var zip = req.query.zip;
        //  console.log('orgname=========== ', orgname, city, state)
        let BusIndivid = 'B';
        //    "OrgName" : "Michael Rosenfeld Gallery, LLC", 
        // "Notes" : "", 
        // "BusIndivid" : "B", 
        // "Address" : "24 West 57th Street, 7th floor", 
        // "City" : "New York", 
        // "State" : "NY", 
        // "Zip" : "10011", 

        var pagesize = 30;

        _.extend(searchObj, { BusIndivid: 'B' });

        if ((orgname !== '0') && (orgname !== undefined)) {
            validsearch = true
            var regexStr = '.*' + orgname + '.*';
            _.extend(searchObj, { OrgName: new RegExp(regexStr, 'i') });
        }

        if ((address !== '0') && (address !== undefined)) {
            validsearch = true
            var regexStr = '.*' + address + '.*';
            _.extend(searchObj, { Address: new RegExp(regexStr, 'i') });
        }

        if ((city !== '0') && (city !== undefined)) {
            validsearch = true
            var regexStr1 = '.*' + city + '.*';
            _.extend(searchObj, { City: new RegExp(regexStr1, 'i') });
        }
        if ((state !== '0') && (state !== undefined)) {
            validsearch = true
            var regexStr1 = '.*' + state + '.*';
            _.extend(searchObj, { State: new RegExp(regexStr1, 'i') });
        }
        if ((zip !== '0') && (zip !== undefined)) {
            validsearch = true
            var regexStr1 = '.*' + zip + '.*';
            _.extend(searchObj, { Zip: new RegExp(regexStr1, 'i') });
        }

        let result
        // let contactres
        if (validsearch === false) {
            console.log('validsearch false ::', validsearch)
            res.json({ data: 0 })

        } else {
            //project(project).
            result = await orgs.find(searchObj).sort({
                OrgName: 1
            }).toArray()
            console.log('contacts====length=== ', result.length)


        }

        console.log('result====length=== ', result.length)
        return result
    })


}



module.exports.autoPrefix = '/api/v1/orgs'
// http://localhost:9020/api/v1/orgs/findorgs
//   //OrgsController
//   { method: ['get'], path: '/api/v1/orgs', handler: 'OrgsController.findorgs' },
//   { method: ['get'], path: '/api/v1/orgs/:id', handler: 'OrgsController.findone' },
//   { method: ['get'], path: '/api/v1/orgs/findcontacts/:id', handler: 'OrgsController.findcontacts' },
//   { method: ['get'], path: '/api/v1/orgs/findall', handler: 'OrgsController.findall' },
//   { method: ['get'], path: '/api/v1/orgs/findonemongo/:id', handler: 'OrgsController.findonemongo' },
//   { method: ['put'], path: '/api/v1/orgs/update', handler: 'OrgsController.update' },
//   { method: ['post'], path: '/api/v1/orgs/create', handler: 'OrgsController.create' },
//   { method: ['get'], path: '/api/v1/publisher', handler: 'OrgsController.publisher' },




  // // http://localhost:9020/api/contact/findcontent?filter={%22contactl%22:%22sm%22,%22contactf%22:%22ro%22,%22artistl%22:%22s%22,%22keywords%22:%22Collector%22}
    // 
    //     http://localhost:9020/api/contact/findcontent?filter={%22contactl%22:%22sm%22,%22contactf%22:%22ro%22,%22artistl%22:%22s%22,%22keywords%22:%22Curator%22}

    // "http://localhost:9020/api/v1/contactcontent?keywords=&genres=&contactl=sm&contactl2=ro&deceased=0&tabname=Contactsearch&buildlist=0"
    // real
    //  http://localhost:9020/api/v1/contact/findcontent?keywords=&genres=&contactl=sm&contactf=ro&deceased=0&tabname=Contactsearch&buildlist=0
    //  http://localhost:9020/api/v1/contact/findcontent?keywords=Collector&genres=Abstraction&contactl=s&contactf=a&deceased=0&tabname=Contactsearch

/*
 findcontacts(req, res) {
        //     //  const Case = this.app.orm['Case']
        // this uese legacy not id
        // let id = req.param('id') * 1; //FID
        let mid = req.param('id'); //mongo id

        console.log('id:findone org ', mid)
        this.app.orm.Contacts.find({
            "org._id": mid

        }).sort({ LastName: 1 })
            .then(contacts => {
                console.log('id:LastName ', contacts[0].LastName, contacts)
                res.json({
                    data: contacts
                })
            })
            .catch(err => res.status(500).end())

    }
     async update(req, res) {
        // console.log('update Contact')
        let model = req.body
        //   console.log('update  contact', model.id, model.org.OrgName)//.contact)//transport)
        console.log('update  contact', model.id)//, model.LastName)//, model.artists[0].ArtistName)//.contact)//transport)
        let id = model.id;
        if (id === undefined || id === '') id = 0;
        delete model._id
        delete model.id
        let umodel = await this.app.orm.Orgs.update(id, model)
        //console.log('update umodel ', umodel._values)
        res.json({ data: model })// umodel._values })
        //   this.app.orm.Orgs.update(id, model).exec(function update(err, umodel) {
        //     if (err) {
        //         console.log('err', err)
        //         return //
        //     } else {
        //         console.log('success uodated ')
        //         res.json(umodel)
        //     }
        // })
    }
    async  create(req, res) {
        // // user.email user.password user.lastName firstName valuetemp-template town-value user.Admin
        let model = req.body
        delete model.id
        console.log('create org model ', model)
        let org = await this.app.orm.Orgs.create(model)
        console.log('create org ', org)
        res.json({ data: org })
        // console.log('create Contact ')
        // this.app.orm.Orgs.create(model)
        //     .exec(function (err, umodel) {
        //         if (err) {
        //             return
        //         } else {
        //             console.log('umodel Contact ', umodel)
        //             res.json(umodel)
        //         }
        //     })
    }
       publisher
        (req, res) {
        this.app.orm.Orgs.find({ OrgType: 'P' }).sort({ "OrgName": 1 })

            .then(pubs => {
                res.json({
                    data: pubs
                })

            })

    }

 findcontacts(req, res) {
        //     //  const Case = this.app.orm['Case']
        // this uese legacy not id
        // let id = req.param('id') * 1; //FID
        let mid = req.param('id'); //mongo id

        console.log('id:findone org ', mid)
        this.app.orm.Contacts.find({
            "org._id": mid

        }).sort({ LastName: 1 })
            .then(contacts => {
                console.log('id:LastName ', contacts[0].LastName, contacts)
                res.json({
                    data: contacts
                })
            })
            .catch(err => res.status(500).end())

    }

*/