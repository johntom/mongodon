// create(req, res) {
//     // // user.email user.password user.lastName firstName valuetemp-template town-value user.Admin
//     let model = req.body

//     let id = model.id;
//     delete model.id
//     delete model._id
//     // this.app.orm.Claim.create(id, model).exec(function update(err, model) {
//     //     if (err) {
//     //         console.log('err', err)
//     //         return //  
//     //     } else {
//     //         console.log('success uodated ')
//     //         res.json(model)
//     //     }
//     // })
//     console.log('create client ', model);
//     this.app.orm.Clients.create(model)
//         .exec(function (err, modelu) {
//             if (err) {
//                 return
//             } else {
//                 console.log('create client ', modelu);
//                 var newmess = { 'mess': 'thanks for submitting your request' };

//                 res.json(newmess)
//             }
//         })



// }
// findclients(req, res) {

//     console.log('ClientsController')
//     //db.codes.find({"CodeType":{$lt:50}}) //"Code Type" : 1,     "Description" : "home",
//     // this.app.orm.Clients.find({"CodeType":{$lt:50}}).sort({"CodeType":1,   "Description":1})
//     this.app.orm.Clients.find().sort({ "CompanyName": 1 })

//         .then(clients => {

//             res.json({ data: clients }) // for kendo templating

//         })
//         .catch(err => res.status(500).end())



// }

// findcontent(req, res) {
//     let companyname = req.param('companyname');
//     let detailLast = req.param('detailLast');//the program converts 1=5,2=10,3=25
//     let detailFirst = req.param('detailFirst');

//     let notes = req.param('notes');
//     let address = req.param('address');
//     let city = req.param('city');
//     let state = req.param('state');
//     let zip = req.param('zip');
//     let phone = req.param('phone');
//     let email = req.param('email');//the program converts 1=5,2=10,3=25
//     let companyexact = req.param('companyexact');

//     if (companyexact === undefined) {
//         companyexact = false
//     } else companyexact = true


//     console.log('in find companyexact', companyexact,companyname)
//     // http://localhost:8080/api/v1/inventory/findcontent?title=the%20d&artist=andrews        
//     var pagesize = 30;
//     var searchObj = {};
   
//     if ((companyname !== '0') && (companyname !== undefined)) {
//         //    _.extend(searchObj, { DATE_OF_LOSS: dol });
//         if (companyexact) {
//             _.extend(searchObj, { CompanyName: companyname });

//         } else {
//             var regexStr = '.*' + companyname + '.*';
//             _.extend(searchObj, { CompanyName: new RegExp(regexStr, 'i') });
//         }
//     }

//     // Anywhere in a string:

//     if ((detailLast !== '0') && (detailLast !== undefined)) {

//         var regexStr1 = '.*' + detailLast + '.*';
//         _.extend(searchObj, { "LastName": new RegExp(regexStr1, 'i') });
//     }
//     if ((detailFirst !== '0') && (detailFirst !== undefined)) {

//         var regexStr1 = '.*' + detailFirst + '.*';

//         _.extend(searchObj, { "FirstName": new RegExp(regexStr1, 'i') });
//     }



//     if ((notes !== '0') && (notes !== undefined)) {

//         var regexStr1 = '.*' + notes + '.*';
//         _.extend(searchObj, { "Notes": new RegExp(regexStr1, 'i') });
//     }

//     if ((address !== '0') && (address !== undefined)) {

//         var regexStr1 = '.*' + address + '.*';
//         _.extend(searchObj, { "Address": new RegExp(regexStr1, 'i') });
//     }
//     if ((city !== '0') && (city !== undefined)) {

//         var regexStr1 = '.*' + city + '.*';
//         _.extend(searchObj, { "City": new RegExp(regexStr1, 'i') });
//     }
//     if ((state !== '0') && (state !== undefined)) {

//         var regexStr1 = '*.' + state + '.*';
//         _.extend(searchObj, { "State": new RegExp(regexStr1, 'i') });
//   x   }
//     if ((zip !== '0') && (zip !== undefined)) {

//         var regexStr1 = '.*' + zip + '.*';
//         _.extend(searchObj, { "Zip": new RegExp(regexStr1, 'i') });
//     }
//     if ((phone !== '0') && (phone !== undefined)) {

//         var regexStr1 = '.*' + phone + '.*';
//         _.extend(searchObj, { "Phone": new RegExp(regexStr1, 'i') });
//     }
//     if ((email !== '0') && (email !== undefined)) {

//         var regexStr1 = '.*' + email + '.*';
//         _.extend(searchObj, { "email": new RegExp(regexStr1, 'i') });
//     }

   

//     console.log('searchObj=====================', searchObj)
//     this.app.orm.Clients.find(searchObj)
//         .then(inv => {
//             console.log('find clients ', inv.length)//, inv[0])
//             res.json({
//                 data: inv
//             })
//         })
//         .catch(err => res.status(500).end())

// }


// // http://localhost:8080/api/v1/inventory
// // http://localhost:8080/api/v1/inventory/DILLER0256E
// findone(req, res) {
//     //     //  const Case = this.app.orm['Case']
//     let id = req.param('id');
//     //  console.log('id:InventoryCode ', id)
//     this.app.orm.Clients.find({
//         id: id
//     })
//         .then(claim => {
//             console.log('id:1 client ', claim[0].CompanyName)
//             res.json({
//                 data: claim
//             })
//         })
//         .catch(err => res.status(500).end())

// }


// update(req, res) {
//     let model = req.body
    
//     let id = model.id;
//     delete model.id
//     delete model._id
//     console.log(' update client _id ', model.id)
//     this.app.orm.Clients.update(id, model).exec(function update(err, umodel) {


//         if (err) {
//             console.log('err', err)
//             return //  
//         } else {
//             console.log('success uodated ')
//             res.json(umodel)
//         }
//     })
// }