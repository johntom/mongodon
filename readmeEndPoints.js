
// idiot's guide to mongodon
// http://localhost:3000/documentation
// http://localhost:3000/api/mrg/inventory?filter=Title=.*the.*&artist.lastName=seliger
http://localhost:3000/api/mrg/artist?filter={%22FirstName%22:%22Paul%22}&fo=true
http://localhost:3000/api/mrg/artist?filter={%22FirstName%22:%22Paul%22}
http://localhost:3000/api/mrg/artist?filter={"FirstName":"/Pa/"}   NG
http://localhost:3000/api/mrg/artist?filter={"FirstName": new RegExp('.*Jo.*), 'i'}  
http://localhost:3000/api/mrg/inventory?filter= {"createdAt":{"$gte":"7/1/2019","$lte":"8/1/2019"}}
http://localhost:3000/api/mrg/inventory?filter=%20{%22createdAt%22:{%22$gte%22:%227/1/2019%22,%22$lte%22:%228/1/2019%22}}
http://localhost:3000/api/mrg/inventory?filter={"LastName":{"$regex":"sel","$options":"i"}}  // find anywhere case insensitive
http://localhost:3000/api/mrg/inventory?filter={"LastName":{"$regex":"^sel","$options":"i"}} // find starting with case insensitive
http://localhost:3000/api/mrg/inventory?filter={"LastName":{"$regex":"ger$","$options":"i"}} // find ending with case insensitive
http://localhost:3000/api/mrg/inventory?filter={"LastName":{"$regex":"^seliger$","$options":"i"}}  // find exact with case insensitive
http://localhost:3000/api/mrg/inventory?filter={"LastName":{"$regex":"sel"}} // find anywhere
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"^sel%","$options":"i%"}
http://localhost:3000/api/mrg/inventory?filter={"keywords":["Painting","Collage"]}
http://localhost:3000/api/mrg/inventory?filter={"createdAt":{"$gte":"7/1/2019","$lte":"8/1/2019"}} // find date rance
http://localhost:3000/api/mrg/collections
http://localhost:3000/api/databases
//runCommand
http://localhost:3000/api/mrg/runCommand?command={"count":"artist"}  // works
http://localhost:3000/api/mrg/runCommand?command={"count":"artist","query": {"LastName":"Seliger"}} // works
http://localhost:3000/api/mrg/runCommand?command={"aggregate":"inventory","pipeline":[{"$project":{"InventoryCode":1}},{"$unwind":"$InventoryCode"},{"$group":{"_id":"$OwnedBy","count":{"$sum":1}}}],"cursor":{}}
http://localhost:3000/api/mrg/runCommand?command={"count":"artist","query":{"LastName":{"$regex":"sel","$options":"i"}}}
http://localhost:3000/api/mrg/runCommand?command={"count":"artist","query":{"createdAt":{"$lt":"7/11/2019"}}}
http://localhost:3000/api/mrg/runCommand?command={"aggregate":"inventory","pipeline":[{"$match":{"InvYear" :"1970"}},{"$sort":{"Title":1}},{"$group":{"_id":{"ownername":"$ownername"},"count":{"$sum":1}}}],"cursor":{}}



//   var regexStr = '.*' + title + '.*';

//   Object.assign(searchObj, { Title: new RegExp(regexStr, 'i') });

// ,cursor:{}}
s3t

let ct = db.runCommand({ count: "artist", "query": { "LastName": "Seliger" } })
let ct = db.runCommand({ count: "artist", "query": { "LastName": /sel/i } })
// {'LastName':{'$regex':/sel/i}}    // find anywhere case insensitive
// {'LastName':{'$regex':/^sel/i}}    // find starting with case insensitive
// {'LastName':{'$regex':/ger$/i}} // find ending with case insensitive
// {'LastName':{'$regex':/^seliger$/i}}    // find exact withase insensitive
// { createdAt:{ $gte: new Date('7/1/2019') , $lte: new Date('8/1/2019')}  } // find date rance
// {'LastName':{'$regex':'sel'} } // find anywhere
// {'LastName': {'$regex':'.*Sel.*'}} ng


http://localhost:3000/api/mrg/artist?filter={"createdAt": {"$gte: new Date('7/1/2019'),$lte: new Date('8/1/2019')"}}

http://localhost:3000/api/mrg/artist?filter={'LastName':{'$regex':/sel/i}}

http://localhost:3000/api/mrg/inventory?filter={Title=.*the.*}

http://localhost:3000/api/mrg/artist?filter={"FirstName":/Jo/) 


db.collection.find({ name: { '$regex': 'string', '$options': 'i' } })

b.users.find({ "name": /^m/ })

new RegExp(regexStr, 'i')
  , artist.lastName = seliger

  //http://localhost:3000/api/mrg/inventory?InventoryCode=GROSSM0029
     // http://localhost:3000/api/gofer/mrg/inventory/title/content?Title=.*the.*&artist.lastName=sel.*
   //  http://localhost:3000/api/gofer/mrg/inventory/title/content?Title=.*the.*&artist.lastName=sel.*&ModifiedDate={ $gte: new Date('1/1/2017'), $lte: new Date('1/1/2018') }

  // http://localhost:3000/api/gofer/mrg/inventory/title/content?Title=.*the.*&artist.lastName=sel.*&keywords={ $in: ['Painting','Ceramic'] }
