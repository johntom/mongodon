//? const cors = require('fastify-cors ;
// var _ = require('lodash ;
// result = await entity.updateMany(query, {$set: obj});
// fastify.io.sockets.emit('lobby', result);
// } else {
//  delete obj._id;
// result = await entity.updateOne(query, {$set: obj});

// async function savecontact(ctx, contact, counter) {

//     let tt, desc, foundit, foundit_ID
//     let updaterec = contact
//     let mid = updaterec.id
//     delete updaterec.id

//     // let up = await ctx.Contacts.update(mid, updaterec)

//     // let up = await fastify.mongo.mrg.db.collection('contacts').update(mid, updaterec)


//     return up

// }

// async function getGenres(ctx, item) {
//     // console.log('ctx ', ctx)
//     let ct = 0
//     for (const itemd of item.genres) {
//         // cant use await ctx
//         let id = itemd.GenreID
//         const genre = await codes.find({ id: id });
//         pairsstrg += genre[0].Description + '; '
//         console.log('pairsstrg ', pairsstrg)

//         ct++
//         console.log(ct, item.genres.length)
//         if (ct === item.genres.length) {
//             // newrec.genres = pairsstrg;
//             console.log('newrec.genres::: ', newrec.genres)
//             return await pairsstrg
//         }


//     }

// }
// async function getcontact(ctx, CID) {



//     await contacts.findOne({
//         'ID': CID
//     })
//         .then(code => {
//             //  console.log('code,', code)
//             if (code !== undefined) {
//                 return con
//             } else {
//                 return ''
//             }
//         })
// }
// async function loopContactscatsent(ctx, contacts, buildlist) {
//     console.log('in loopContactscatsent ', buildlist, contacts.length)//, inv[0])
//     // add all artists, genres, contacttypes and yn masterlist
//     let colen = contacts.length
//     let ct = 0
//     for (const item of contacts) {
//         let newrec = {}
//         ct++
//         newrec.listName = buildlist
//         console.log('in item.ContactID ', item.ContactID)//, inv[0])
//         let CID = item.ContactID * 1
//         let contact = await contacts.find({ ID: CID })//2178}) //CID})
//         //  let contact = await getcontact( ctx, CID)

//         console.log('in item.contact ', contact[0].LastName)//

//         newrec.contactid = contact.id
//         newrec.FirstName = contact.FirstName
//         newrec.LastName = contact.LastName
//         newrec.Salutation = contact.Salutation

//         let interests = []
//         let pairs = ''
//         let pairsstrc = ''
//         let pairsstra = ''
//         let pairsstrg = ''
//         let pairsstraddr = ''

//         if (item.addresses !== undefined) {
//             for (const itemd of item.addresses) {

//                 if (itemd.Primary === true) {
//                     pairsstraddr = itemd.address + ', ' + itemd.city + ', ' + itemd.state + ', ' + itemd.zip
//                     newrec.addr = itemd.address
//                     newrec.city = itemd.city
//                     newrec.state = itemd.state
//                     newrec.zip = itemd.zip
//                     newrec.country = itemd.Country

//                 }
//             }
//         }

//         newrec.types = pairsstrc;
//         newrec.artists = pairsstra;
//         newrec.genres = pairsstrg;
//         newrec.addresses = pairsstraddr;
//         // console.log('====================printFiles\n ',  newrec.LastName)//newrec.genres, newrec.artists)

//         await mailinglist.create(newrec)
//             .exec(function (err, modelu) {
//                 if (err) {
//                     return
//                 } else {

//                 }
//             })

//     }

// }
// async function loopContacts(ctx, contacts, buildlist) {
//     console.log('in loopContacts ')
//     console.log('in loopContacts ')
//     console.log('in loopContacts ')
//     console.log('in loopContacts ')
//     console.log('in loopContacts ', buildlist, contacts.length)//, inv[0])
//     let colen = contacts.length
//     let ct = 0
//     for (const item of contacts) {
//         let newrec = {}
//         ct++
//         newrec.listName = buildlist
//         newrec.contactid = item.id
//         newrec.FirstName = item.FirstName
//         newrec.LastName = item.LastName
//         newrec.Salutation = item.Salutation

//         let interests = []
//         let pairs = ''
//         let pairsstrc = ''
//         let pairsstra = ''
//         let pairsstrg = ''
//         let pairsstraddr = ''


//         let sav
//         if (item.genres !== undefined) {
//             for (const itemg of item.genres) {
//                 pairsstrg += itemg.Description + ';'
//             }
//         }
//         if (item.contacttypes !== undefined) {
//             for (const itemd of item.contacttypes) {
//                 pairsstrc += itemd + ';'
//             }
//         }
//         if (item.artists !== undefined) {
//             for (const itemd of item.artists) {
//                 pairsstra += itemd.ArtistName + ';'
//             }
//         }

//         if (item.addresses !== undefined) {
//             for (const itemd of item.addresses) {

//                 if (itemd.Primary === true) {
//                     pairsstraddr = itemd.address + ', ' + itemd.city + ', ' + itemd.state + ', ' + itemd.zip
//                     newrec.addr = itemd.address
//                     newrec.city = itemd.city
//                     newrec.state = itemd.state
//                     newrec.zip = itemd.zip
//                     newrec.country = itemd.Country

//                 }
//             }
//         }

//         newrec.types = pairsstrc;
//         newrec.artists = pairsstra;
//         newrec.genres = pairsstrg;
//         newrec.addresses = pairsstraddr;

//         // await mailinglist.create(newrec)
//         //   .exec(function (err, modelu) {
//         //     if (err) {
//         //       return
//         //     } else {

//         //     }
//         //   })

//     }
//     return 'done'
// }
// async function loopitem(item) {
//     for (const itemd of item.genres) {
//         let gid = itemd.GenreID
//         ct++
//     }
// }
// async function getGenredesc(ctx, genreid) {
//     let tt, desc
//     codes.findOne({
//         'ID': genreid
//     })
//         .then(code => {
//             //  console.log('code,', code)
//             if (code !== undefined) {
//                 desc = code.Description
//             } else {
//                 desc = ''
//             }
//         })
//     return await (desc);
//     // console.log('getGenredesc.ex', desc)
// }
