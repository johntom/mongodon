'use strict'

module.exports = async function (fastify, opts) {
   
    const ctx = fastify.mongo.clientbase.db
    const clients = ctx.collection('clients')
    // catalogcontactsent
    const _ = require('lodash');
    fastify.delete('/clients/:id', {

    }, async function (request, reply) {
        const id = request.params.clientsid
        const result = await clients.deleteOne({
            _id: new ObjectId(id)
        })
        if (!result.deletedCount) {
            return reply
                .code(404)
                .send({ status: 'clients not found' })
        }
        return { status: 'ok' }
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
    /////////////////////////////
    let companyname = req.query.companyname;
    let detailLast = req.query.detailLast;//
    let detailFirst = req.query.detailFirst;
    let notes = req.query.notes;
    let address = req.query.address;
    let city = req.query.city;
    let state = req.query.state;
    let zip = req.query.zip;
    let phone =req.query.phone;
    let email = req.query.email;//the program converts 1=5,2=10,3=25
    let companyexact = req.query.companyexact;
    if (companyexact === undefined) {
        companyexact = false
    } else companyexact = true

    console.log('in find companyexact', detailLast,companyexact,companyname)
    // http://localhost:8080/api/v1/inventory/findcontent?title=the%20d&artist=andrews        
    var pagesize = 30;
     if ((companyname !== '0') && (companyname !== undefined)) {
        //    _.extend(searchObj, { DATE_OF_LOSS: dol });
        validsearch=true
        if (companyexact) {
            _.extend(searchObj, { CompanyName: companyname });
        } else {
            var regexStr = '.*' + companyname + '.*';
            _.extend(searchObj, { CompanyName: new RegExp(regexStr, 'i') });
        }
    }
    if ((detailLast !== '0') && (detailLast !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + detailLast + '.*';
        _.extend(searchObj, { "LastName": new RegExp(regexStr1, 'i') });
    }
    if ((detailFirst !== '0') && (detailFirst !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + detailFirst + '.*';
        _.extend(searchObj, { "FirstName": new RegExp(regexStr1, 'i') });
    }

    if ((notes !== '0') && (notes !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + notes + '.*';
        _.extend(searchObj, { "Notes": new RegExp(regexStr1, 'i') });
    }

    if ((address !== '0') && (address !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + address + '.*';
        _.extend(searchObj, { "Address": new RegExp(regexStr1, 'i') });
    }
    if ((city !== '0') && (city !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + city + '.*';
        _.extend(searchObj, { "City": new RegExp(regexStr1, 'i') });
    }
    if ((state !== '0') && (state !== undefined)) {
        validsearch=true
        var regexStr1 = '*.' + state + '.*';
        _.extend(searchObj, { "State": new RegExp(regexStr1, 'i') });
     }
    if ((zip !== '0') && (zip !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + zip + '.*';
        _.extend(searchObj, { "Zip": new RegExp(regexStr1, 'i') });
    }
    if ((phone !== '0') && (phone !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + phone + '.*';
        _.extend(searchObj, { "Phone": new RegExp(regexStr1, 'i') });
    }
    if ((email !== '0') && (email !== undefined)) {
        validsearch=true
        var regexStr1 = '.*' + email + '.*';
        _.extend(searchObj, { "email": new RegExp(regexStr1, 'i') });
    }

    /////////////////////////////

        if (validsearch === false) {
            console.log('validsearch false ::', validsearch)
            res.json({ data: 0 })
        } else {
             let result = await clients.find(searchObj).sort({

                CompanyName: 1,LastName: 1
            }).toArray()
            console.log('clients====length=== ', result.length)
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

  
    fastify.get('/', {

    }, async function (req, reply) {
        // let project = { "CodeType": 1, "Description": 1 }
       const result = await clients.find({}).sort({
        CompanyName: 1,LastName: 1
        }).toArray()
        fastify.log.info(`\n\r======clients=========result====================== `)
        return result
    })

    fastify.get('/clientsall', {

    }, async function (req, reply) {
        // let project = { "CodeType": 1, "Description": 1 }
       const result = await clients.find({}).sort({
        CompanyName: 1,LastName: 1
        }).toArray()
        fastify.log.info(`\n\r======clients=========result====================== `)
        return result
    })

    

    // fastify.get('/findone/:id', {
        fastify.get('/:id', {
    }, async function (req, reply) {
        // let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 } project(project)
        //let project = { "CodeType": 1, "Description": 1 }
        // let id =req.query.id;
        let id =req.params.id;
        fastify.log.info(`\n\r======client findone=========id====================== `,id)
       
        const _id = require('mongodb').ObjectId(id);
        fastify.log.info(`\n\r======client findone=========id====================== `,_id)
     
        fastify.log.info(`\n\r======client findone=========result====================== `)
        const result = await clients.find({ _id: _id}).toArray()
        fastify.log.info(`\n\r======client findone=========result====================== `)
        return result
    })

    fastify.post('/create',{},
        async (req, reply) => {
            fastify.log.info(`=======emulate==create============================ `)
            // var isodate = new Date(Date.now()).toISOString() //this inserts as string
            let model = req.body
            let result = await clients.insertOne(model);
            return {data:[{'model':model,'res':result}]} //result.insertedId; //.createdAt//
        }
    );


    fastify.put('/update',
    {

    },
    async (req, reply) => {
        fastify.log.info(`=======emulate==update============================ `)

        // var isodate = new Date(Date.now()).toISOString() //this inserts as string
        let obj = req.body
        const _id = require('mongodb').ObjectId(obj._id);// cant use reviver here as param
  
        // let query = {_id:_id} //obj._id};
        let query = {_id: require('mongodb').ObjectId(obj._id)} //obj._id};

        delete obj._id;
        // query = JSON.parse(filter
        // let result = await codes.insertOne(model);
        let result = await clients.updateOne(query, {$set: obj});
      
        // return result;

        return {data:[{id:_id},query,obj,result]};

    }
);

    // real
    //  http://localhost:9020/api/v1/codes
    //  http://localhost:9020/api/v1/contact/create  //?keywords=Collector&genres=Abstraction&contactl=s&contactf=a&deceased=0&tabname=Contactsearch


}

module.exports.autoPrefix = '/api/v1/client'
//  gail
// http://localhost:9020/api/v1/client/clientsall
// http://localhost:9020/api/v1/client/5a4fb66a5edd4dbecb1e2f7e
// http://localhost:9020/api/v1/client/
// http://localhost:9020/api/v1/client/findcontent?detailLast=tomaselli

//   { method: ['get'], path: '/api/v1/clientsall', handler: 'ClientsController.findclients' },
//   { method: ['put'], path: '/api/v1/client/update', handler: 'ClientsController.update' },
//   { method: ['post'], path: '/api/v1/client/create', handler: 'ClientsController.create' },
//   { method: ['get'], path: '/api/v1/client/:id', handler: 'ClientsController.findone' },
//   { method: ['get'], path: '/api/v1/clientcontent', handler: 'ClientsController.findcontent' },

// http://localhost:9020/api/v1/clientbase/clientsall 

// http://localhost:9020/api/mrg/catalogcontactsent?filter={"CatalogID":6}