'use strict'

//? const cors = require('fastify-cors ;
// var _ = require('lodash ;
// result = await entity.updateMany(query, {$set: obj});
// fastify.io.sockets.emit('lobby', result);
// } else {
//  delete obj._id;
// result = await entity.updateOne(query, {$set: obj});

async function loopdupcontacts(ctx, contacts) {
  console.log('5loopdupcontacts')
  let sav
  var counter = 0;
  for (var i = 0; i < contacts.length; i++) {
    let dummy = []
    sav = await savecontact(ctx, contacts[i], counter)
    counter++;
    if (counter === contacts.length) {
      return await (contacts.length)
    }
  }
}
async function savecontact(ctx, contact, counter) {

  let tt, desc, foundit, foundit_ID
  let updaterec = contact
  let mid = updaterec.id
  delete updaterec.id

  // let up = await ctx.Contacts.update(mid, updaterec)

  // let up = await fastify.mongo.mrg.db.collection('contacts').update(mid, updaterec)


  return up

}

async function getGenres(ctx, item) {
  // console.log('ctx ', ctx)
  let ct = 0
  for (const itemd of item.genres) {
    // cant use await ctx
    let id = itemd.GenreID
    const genre = await codes.find({ id: id });
    pairsstrg += genre[0].Description + '; '
    console.log('pairsstrg ', pairsstrg)

    ct++
    console.log(ct, item.genres.length)
    if (ct === item.genres.length) {
      // newrec.genres = pairsstrg;
      console.log('newrec.genres::: ', newrec.genres)
      return await pairsstrg
    }


  }

}
async function getcontact(ctx, CID) {



  await contacts.findOne({
    'ID': CID
  })
    .then(code => {
      //  console.log('code,', code)
      if (code !== undefined) {
        return con
      } else {
        return ''
      }
    })
}
async function loopContactscatsent(ctx, contacts, buildlist) {
  console.log('in loopContactscatsent ', buildlist, contacts.length)//, inv[0])
  // add all artists, genres, contacttypes and yn masterlist
  let colen = contacts.length
  let ct = 0
  for (const item of contacts) {
    let newrec = {}
    ct++
    newrec.listName = buildlist
    console.log('in item.ContactID ', item.ContactID)//, inv[0])
    let CID = item.ContactID * 1
    let contact = await contacts.find({ ID: CID })//2178}) //CID})
    //  let contact = await getcontact( ctx, CID)

    console.log('in item.contact ', contact[0].LastName)//

    newrec.contactid = contact.id
    newrec.FirstName = contact.FirstName
    newrec.LastName = contact.LastName
    newrec.Salutation = contact.Salutation

    let interests = []
    let pairs = ''
    let pairsstrc = ''
    let pairsstra = ''
    let pairsstrg = ''
    let pairsstraddr = ''

    if (item.addresses !== undefined) {
      for (const itemd of item.addresses) {

        if (itemd.Primary === true) {
          pairsstraddr = itemd.address + ', ' + itemd.city + ', ' + itemd.state + ', ' + itemd.zip
          newrec.addr = itemd.address
          newrec.city = itemd.city
          newrec.state = itemd.state
          newrec.zip = itemd.zip
          newrec.country = itemd.Country

        }
      }
    }

    newrec.types = pairsstrc;
    newrec.artists = pairsstra;
    newrec.genres = pairsstrg;
    newrec.addresses = pairsstraddr;
    // console.log('====================printFiles\n ',  newrec.LastName)//newrec.genres, newrec.artists)

    await mailinglist.create(newrec)
      .exec(function (err, modelu) {
        if (err) {
          return
        } else {

        }
      })

  }

}
async function loopContacts(ctx, contacts, buildlist) {
  console.log('in loopContacts ')
  console.log('in loopContacts ')
  console.log('in loopContacts ')
  console.log('in loopContacts ')
  console.log('in loopContacts ', buildlist, contacts.length)//, inv[0])
  let colen = contacts.length
  let ct = 0
  for (const item of contacts) {
    let newrec = {}
    ct++
    newrec.listName = buildlist
    newrec.contactid = item.id
    newrec.FirstName = item.FirstName
    newrec.LastName = item.LastName
    newrec.Salutation = item.Salutation

    let interests = []
    let pairs = ''
    let pairsstrc = ''
    let pairsstra = ''
    let pairsstrg = ''
    let pairsstraddr = ''


    let sav
    if (item.genres !== undefined) {
      for (const itemg of item.genres) {
        pairsstrg += itemg.Description + ';'
      }
    }
    if (item.contacttypes !== undefined) {
      for (const itemd of item.contacttypes) {
        pairsstrc += itemd + ';'
      }
    }
    if (item.artists !== undefined) {
      for (const itemd of item.artists) {
        pairsstra += itemd.ArtistName + ';'
      }
    }

    if (item.addresses !== undefined) {
      for (const itemd of item.addresses) {

        if (itemd.Primary === true) {
          pairsstraddr = itemd.address + ', ' + itemd.city + ', ' + itemd.state + ', ' + itemd.zip
          newrec.addr = itemd.address
          newrec.city = itemd.city
          newrec.state = itemd.state
          newrec.zip = itemd.zip
          newrec.country = itemd.Country

        }
      }
    }

    newrec.types = pairsstrc;
    newrec.artists = pairsstra;
    newrec.genres = pairsstrg;
    newrec.addresses = pairsstraddr;

    // await mailinglist.create(newrec)
    //   .exec(function (err, modelu) {
    //     if (err) {
    //       return
    //     } else {

    //     }
    //   })

  }
  return 'done'
}
async function loopitem(item) {
  for (const itemd of item.genres) {
    let gid = itemd.GenreID
    ct++
  }
}
async function getGenredesc(ctx, genreid) {
  let tt, desc
  codes.findOne({
    'ID': genreid
  })
    .then(code => {
      //  console.log('code,', code)
      if (code !== undefined) {
        desc = code.Description
      } else {
        desc = ''
      }
    })
  return await (desc);
  // console.log('getGenredesc.ex', desc)
}





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
  const contacts = ctx.collection('contacts')
  const codes = ctx.collection('codes')
  const mailinglist = ctx.collection('mailinglist')


  //const entity = fastify.mongo[database].db.collection(collection);
  const _ = require('lodash');
  console.log('contacts/n C:-fastify-mongodon-app-services-contacts')
  const { ObjectId } = fastify.mongo
  //fastify.use(cors())
  // fastify.opts('*', (request, reply) => { reply.send() })

  fastify.delete('/contacts/:id', {
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
      let id =req.params.id;
      
      const _id = require('mongodb').ObjectId(id);
      fastify.log.info(`\n\r======client findone=========id====================== `,_id)
   
      fastify.log.info(`\n\r======client findone=========result====================== `)
      const result = await contacts.find({ _id: _id}).toArray()
      fastify.log.info(`\n\r======client findone=========result====================== `)
      return result
  })


  // fastify.get('/LastName/:clientsId', {
  //   schema: {
  //     params: {
  //       type: 'object',
  //       properties: {
  //         ticketId: {
  //           description: 'The id to get',
  //           summary: 'The id to get',
  //           type: 'string'
  //         }
  //       }
  //     },
  //     response: {
  //       '200': {
  //         description: 'contacts deleted',
  //         summary: 'clients deleted',
  //         type: 'object',
  //         properties: {
  //           _id: {
  //             description: 'The clients Id',
  //             summary: 'The clients Id',
  //             type: 'string'
  //           },
  //           LastName: {
  //             description: 'The clients LastName',
  //             summary: 'The clients LastName',
  //             type: 'string'
  //           },
  //           FirstName: {
  //             description: 'The clients FirstName',
  //             summary: 'The clients FirstName',
  //             type: 'string'
  //           }
  //         }
  //       },
  //       '404': {
  //         description: 'clients not found',
  //         summary: 'Ticket not Found',
  //         type: 'object',
  //         properties: {
  //           status: {
  //             description: 'Status message',
  //             summary: 'Status message',
  //             type: 'string'
  //           }
  //         }
  //       }
  //     }
  //   }
  // }, async function (request, reply) {
  //   const id = request.params.ticketId
  //   const result = await clients.findOne({
  //     _id: new ObjectId(id)
  //   })

  //   if (!result) {
  //     return reply
  //       .code(404)
  //       .send({ status: 'ticket not found' })
  //   }
  //   fastify.log.info(`result title ${result._id}  ${result.LastName}`)
  //   return result
  // })
  //_hc= hardcoded 
  fastify.get('/contacts', {

  }, async function (request, reply) {
    let project = { "FirstName": 1, "LastName": 1, "Salutation": 1 }

    const result = await contacts.find({ "LastName": "Smith" }).project(project).sort({

      LastName: 1
    }).toArray()

    // let rez = {'data':result}
    //  fastify.log.info(`result title ${rez.data[0].title}  ${rez}`)
    fastify.log.info(`===============result====================== `)

    fastify.log.info(`result title ${result[0].LastName} `)
    fastify.log.info(`===================================== `)

    return result
    // or if you want to loop
    // for (const item of result) {
    //   rec = {}
    //   rec.tenant = item._id.tenant
    //   rec.month = item._id.month
    //   rec.year = item._id.year
    //   rec.count = item.count
    //   await gymaggregate.insert(rec)/
    //     fastify.log.info(rec)

    //   rezarray.push(rec)
    // }
    // // 
    // // do a delete all records from aggregate table then bulk insert to display in grid
    // // await gymaggregate.remove()
    // await gymaggregate.deleteMany()

    // // await gymaggregate.insertMany(rezarray)// 3.2 up
    // console.log('rezarray ',rezarray.length)
    // return rezarray
  })
  // // http://localhost:9020/api/contact/findcontent?filter={%22contactl%22:%22sm%22,%22contactf%22:%22ro%22,%22artistl%22:%22s%22,%22keywords%22:%22Collector%22}
  // 
  //     http://localhost:9020/api/contact/findcontent?filter={%22contactl%22:%22sm%22,%22contactf%22:%22ro%22,%22artistl%22:%22s%22,%22keywords%22:%22Curator%22}

  // "http://localhost:9020/api/v1/contactcontent?keywords=&genres=&contactl=sm&contactl2=ro&deceased=0&tabname=Contactsearch&buildlist=0"
  // real
  //  http://localhost:9020/api/v1/contact/findcontent?keywords=&genres=&contactl=sm&contactf=ro&deceased=0&tabname=Contactsearch&buildlist=0
  //  http://localhost:9020/api/v1/contact/findcontent?keywords=Collector&genres=Abstraction&contactl=s&contactf=a&deceased=0&tabname=Contactsearch

  fastify.get('/findcontent', {

  }, async function (req, reply) {
    console.log('\n================== ')
    console.log('\n================== ')
    console.log('\n================== ')
    console.log('\n======start======= ')
    console.log('\n=====params============= ', req.params)
    console.log('\n=====query============= ', req.query)
    console.log('\n=============contactl===== ', req.query.contactl)
    console.log('\n=============contactf===== ', req.query.contactf)
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

    console.log('\n=======legacy================')

    // trails legacy
    let contactl = req.query.contactl;//*1;
    let contactf = req.query.contactf;
    let contactl2 = req.query.contactl2;//*1;
    let contactf2 = req.query.contactf2;
    let contactemail = req.query.contactemail;//the program converts 1=5,2=10,3=25
    // let orgcity = query.orgcity ;
    // let orgstate = query.orgstate ; query.  query.
    let orgname = req.query.org;
    let artistl = req.query.artistl;//*1;
    let artistf = req.query.artistf;

    // let mailings = query.mailings ;
    // let nomailings = query.nomailings ;
    // let noinfo = query.noinfo ;
    // let email = query.email ;
    let nolongerherecatalogssent = req.query.nolongerherecatalogssent;
    let deceased = req.query.deceased;
    //if (deceased===undefined) deceased=false
    console.log('\deceased=========', deceased)
    let holidaylist = req.query.holidaylist;
    let masterlist = req.query.masterlist;
    let international = req.query.international;
    let notinternational = req.query.notinternational;//domestic
    let city = req.query.city;
    let state = req.query.state;
    let artists = req.query.artists; // array of Last, First csv
    let keywords = req.query.keywords; // array of Description csv
    let genres = req.query.genres; // array of Description csv
    // let buildlist = query.mailinglist ; // array of Description csv o if just sezch on contact
    let buildlist = req.query.buildlist;
    let catalogid = req.query.catalogid * 1;
    let mailingStatus = req.query.mailingStatus
    console.log('\n\n============buildlist===catalogid==', buildlist, catalogid)
    console.log('\n\rquery===1=====contactl===============', contactl)
    console.log('\n\rquery===1=====contactf===============', contactf)

    if ((contactl !== '0') && (contactl !== undefined)) {
      validsearch = true
      // var regexStr = '^' + contactl + '.*';
      var regexStr = '.*' + contactl + '.*';
      searchstrbj += 'LastName:' + regexStr + ','
      _.extend(searchObj, { LastName: new RegExp(regexStr, 'i') });
      console.log(' searchObj======= ', searchObj)
    }

    if ((contactf !== '0') && (contactf !== undefined)) {
      validsearch = true
      var regexStr = '.*' + contactf + '.*';
      searchstrbj += 'FirstName:' + regexStr + ','
      _.extend(searchObj, { FirstName: new RegExp(regexStr, 'i') });
      console.log(' searchObj======= ', searchObj)
    }

    if ((orgname !== '0') && (orgname !== undefined)) {
      validsearch = true
      var regexStr1 = '.*' + orgname + '.*';
      _.extend(searchObj, { "org.OrgName": new RegExp(regexStr1, 'i') });
    }
    if ((contactemail !== '0') && (contactemail !== undefined)) {
      validsearch = true
      var regexStr1 = '.*' + contactemail + '.*';
      _.extend(searchObj, { "phones.ext": new RegExp(regexStr1, 'i') });
    }
    if ((mailingStatus !== 0) && (mailingStatus !== '0') && (mailingStatus !== '') && (mailingStatus !== undefined)) {
      validsearch = true
      // var regexStr1 = '.*' + nomailings + '.*';
      // searchstrbj += 'nomailings:true,'
      _.extend(searchObj, { "mailingStatus": mailingStatus * 1 });
      console.log('ms searchObj  mailingStatus', searchObj)
    }

    if ((notinternational !== '0') && (notinternational !== undefined)) {
      validsearch = true
      // {international:{$exists:false}}
      _.extend(searchObj, { "international": { $exists: false } });
      console.log('ms not international ', searchObj)
    }

    // 
    // if ((deceased !== 0) && (deceased !== undefined)) {
    console.log('deceased ', deceased)
    if ((deceased === '0')) {

      //    validsearch = true
      // {international:{$exists:false}}

      //  _.extend(searchObj, { "deceased": { $exists: true } });
      console.log('deceased ', searchObj)
    } else {
      // if ((deceased !== '0')
      validsearch = true
      console.log('deceased ml ', searchObj)
      _.extend(searchObj, { "deceased": { $exists: false } });
    }


    if ((international !== '0') && (international !== undefined)) {
      validsearch = true
      _.extend(searchObj, { "international": true });
    }
    if ((masterlist !== '0') && (masterlist !== undefined)) {
      validsearch = true

      _.extend(searchObj, { "ynMasterlist": true });
    }
    if ((holidaylist !== '0') && (holidaylist !== undefined)) {
      validsearch = true

      _.extend(searchObj, { "ynHolidaylist": true });
    }

    if ((artistl !== '0') && (artistl !== undefined)) {
      validsearch = true
      var regexStr = '.*' + artistl + '.*';
      // console.log('artistl == ', artistl)
      _.extend(searchObj, { "artists.ArtistName": new RegExp(regexStr, 'i') });
    }


    if ((city !== '0') && (city !== undefined) && (city !== '')) {

      // console.log('city == ', city)
      validsearch = true
      var regexStr = '.*' + city + '.*';
      searchstrbj += 'addresses.city:' + regexStr + ','
      _.extend(searchObj, { "addresses.city": new RegExp(regexStr, 'i') });
    }
    if ((state !== '0') && (state !== undefined) && (state !== '') && (state !== 'null')) {

      // console.log('city == ', city)
      validsearch = true
      var regexStr = '.*' + state + '.*';
      searchstrbj += 'addresses.state:' + regexStr + ','
      _.extend(searchObj, { "addresses.state": new RegExp(regexStr, 'i') });
    }
    // delete Description from array
    // this is contacttypes $in using or { 'contacttypes' : { $in: ["Billionaire","Major Collector"] }  }
    // must use  $all for and condition { 'contacttypes' : { $all: ["Billionaire","Major Collector"] }  }
    let cts = []
    if ((keywords !== '0') && (keywords !== undefined) && (keywords !== '')) {
      validsearch = true
      let array2 = keywords.split(",");
      // console.log('keywords array2 ', array2)
      for (const item of array2) {
        //  _.extend(searchObj, { "contacttypes": item })
        // _.extend(searchObj, { "contacttypes":'Press'})
        //  searchstrbj += 'contacttypes:' + item + ','

        cts.push(item)
      }
      _.extend(searchObj, { "contacttypes": { $all: cts } })
    }


    cts = []
    if ((genres !== '0') && (genres !== undefined) && (genres !== '')) {
      validsearch = true
      // cant use $in and place single quotes around each peice
      // console.log('genres ', genres)
      let array2 = genres.split(",");
      // console.log('array2 ', array2)
      for (const item of array2) {
        // let lugenreid = this.app.orm.Contacts.find(searchObj)
        // let lookuprec = await this.app.orm.Codes.find({ Description: item })
        searchstrbj += 'genres:' + item + ','
        // console.log('lookuprec ', lookuprec)
        // cts.push(lookuprec[0].id)
        cts.push(item)
        //   genres      "Description" : "20th Century Modernism"
        // _.extend(searchObj, { "genres.GenreID": lookuprec[0].id })
        // console.log('\n\rsearchObj ===========', searchObj)
      }
      //  _.extend(searchObj, { "genres.GenreID": lookuprec[0].id })
      // _.extend(searchObj, { "genres.GenreID": { $all: cts } })
      _.extend(searchObj, { "genres.Description": { $all: cts } })
    }

    cts = []
    if ((artists !== '0') && (artists !== undefined) && (artists !== '')) {
      validsearch = true
      let array2 = artists.split(",");
      //  get every artist pair artists="Bellows, George,Lewis, Norman"
      let artname, ln, fn
      let act = 0
      let aname = ''
      for (const item of array2) {
        // if (act === 1 || act === 3 || act === 5 || act === 7 || act === 9) {
        if (act === 1) {
          cts.push(`${aname},${item}`)
          aname = ''
          act = 0
        } else {
          aname = item
          act++
        }
      }
      // console.log('cts ::', cts)
      // _.assignIn(searchObj, { "artists.ArtistName": { "$all": cts } })
      _.extend(searchObj, { "artists.ArtistName": { "$all": cts } })
    }
    console.log('\n\n=====111==========================  buildlist=== 0 ', buildlist)
   
    let result
    // let contactres
    if (validsearch === false) {
      console.log('validsearch false ::', validsearch)
      res.json({ data: 0 })
    }
    if (buildlist === '0' || buildlist === undefined) {
      console.log('\n\n===222============================  buildlist=== 0 ', buildlist)
   
      result = await contacts.find(searchObj).project(project).sort({
        LastName: 1
      }).toArray()
      fastify.log.info('')
      fastify.log.info(`===result.length=====a222============================= `,result.length)
      console.log('\n\n===b222============================  result.length=== 0 ', result.length)
      // contactres=result
    } else {
      console.log('\n\n====333===========================  buildlist', buildlist)
      console.log('\n\n=====333========================== searchObj ', searchObj)


      result = await contacts.find(searchObj).project(project).sort({
        LastName: 1
      }).toArray()
      console.log('contacts====length=== ', result.length)
      // let contacts2 = await loopContacts(res, ctx, result, buildlist)
      result = await loopContacts(ctx, result, buildlist)


    }

    // fastify.log.info(`result title ${result[0].LastName} `)
    fastify.log.info(`===result.length================================== `,result.length)
    let cp = { "CodeType": 1, "Description": 1 }
    let coderesult = await codes.find({ 'ID': 4473 }).project(cp).sort({
      Description: 1
    }).toArray()
    console.log('coderesult= ', coderesult)
   
    // let contacts = result
    // console.log('contacts= ', contacts)
    let contacts2 = await loopContacts(ctx, result, buildlist)

    try {
      console.log('contacts====length=== ', contacts2.length)
    }
    catch (error) {
      console.error('error: ', error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }

    //   result = await entity.insertMany(obj);
    //   fastify.io.sockets.emit('lobby', result.insertedIds);
    //   return result.insertedIds;
    // } else {
    //   result = await entity.insertOne(obj);
    console.log('result====length=== ', result.length)
    return result
  })
}

module.exports.autoPrefix = '/api/v1/contact'
