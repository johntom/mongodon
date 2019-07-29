
//mrg=mongodb://johntom:nm5800@ds245927.mlab.com:45927/mrg
// mongodb://admin:yHO6ACcBA6dyQkoD@SG-Brookbridge-22047.servers.mongodirector.com:48815,SG-Brookbridge-22048.servers.mongodirector.com:48815,SG-Brookbridge-22049.servers.mongodirector.com:48815/admin?ssl=true&replicaSet=RS-Brookbridge-0&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1


// idiot's guide to mongodon
// http://localhost:3000/documentation
// http://localhost:3000/api/mrg/inventory?filter=Title=.*the.*&artist.lastName=seliger
http://localhost:3000/api/mrg/artist?filter={"FirstName":"Paul"}&fo=true
http://localhost:3000/api/mrg/artist?filter={"FirstName":"Paul"}

http://localhost:3000/api/mrg/artist?filter={"FirstName": new RegExp('.*Jo.*), 'i'}  
http://localhost:3000/api/mrg/inventory?filter= {"createdAt":{"$gte":"7/1/2019","$lte":"8/1/2019"}}
http://localhost:3000/api/mrg/inventory?filter={"createdAt":{"$gte":"7/1/2019","$lte":"8/1/2019"}}
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"sel","$options":"i"}}  // find anywhere case insensitive
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"sel","$options":"i"}}
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"^sel","$options":"i"}} // find starting with case insensitive
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"ger$","$options":"i"}} // find ending with case insensitive
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"^seliger$","$options":"i"}}  // find exact with case insensitive

// orgs on contact
http://localhost:3000/api/mrg/contacts?filter={"org.ID":3142}  // no quote ard int


//artbased 'https://artbased.com/api/mrg'
https://artbased.com/api/mrg/inventory?filter={"artist.lastName":{"$regex":"sel","$options":"i"}} 
/////////////////////////////////////////////////////////////////////////////////////////////////


//MONGODB_URLgallerynm=mongodb://johntom:nm5800@ds153380.mlab.com:53380/?connectTimeoutMS=10000&authSource=gallerynm&authMechanism=SCRAM-SHA-1                            
// gallerynm
//9020', '74.114.164.20 or gallery.meledandri.com
http://74.114.164.20:9020/api/gallerynm/collections
http://74.114.164.20:9020/api/gallerynm/posts
http://74.114.164.20:9020/api/gallerynm/posts/570af6b633d1f26013b37c7d
http://74.114.164.20:9020/api/gallerynm/posts?filter={"author":"nm"}
http://74.114.164.20:9020/api/gallerynm/posts?filter={"author":"nm","tags": ["vitae"]}
http://74.114.164.20:9020/api/gallerynm/posts?filter={"author":"nm","tags": ["vitae","private1"]}
http://74.114.164.20:9020/api/gallerynm/posts?filter={"postTitle":{"$regex":"pri"}}
http://74.114.164.20:9020/api/gallerynm/posts?filter={"postTitle":"home"}





// private insurance etc
http://gallery.meledandri.com:9020/api/gallerynm/posts?filter={"postTitle":"private"}
http://127.0.0.1:3000/api/gallerynm/posts?filter={%22postTitle%22:%22private%22}
http://127.0.0.1:3000/gallery/getonepdf/noteworthy/DELANE0042.jpg
http://gallery.meledandri.com:9020/gallery/getonepdf/noteworthy/DELANE0042.jpg


http://127.0.0.1:3000/api/gallerynm/gallery/getonepdf/noteworthy/DELANE0042.jpg

// { method: ['get'], path: '/api/v1/onepdf/:template/:filename', handler: 'PdfController.getonePdf' },
// C:\Frameworks\Fastify\mongodon\uploads\noteworthy  DELANE0042.jpg DELANE0059.jpg
http://gallery.meledandri.com:9020/gallery/getonepdf/noteworthy/DELANE0042.jpg

gallery.meledandri.com:9020/api/gallerynm/posts?filter={"_id":"5cc5db6b4b56ad12ac88c4bc"}

async getpost(posttitle) {
  // var url = `${this.baseweb}posts/${posttitle}`;
  // var url = `${this.baseweb}posts?filter={"postTitle":{"$regex":"${posttitle}"`;
  var url = `${this.baseweb}posts?filter={"postTitle":"${posttitle}"}`;
  // http://74.114.164.20:9020/api/gallerynm/posts?filter={"postTitle":"home"}
  return await fetch(url).then((res) => res.json())
}

// for upload
http://gallery.meledandri.com:9020/upload
// needleman

// needleman end
//gallerynm end//////////////////////////////////////////////


http://74.114.164.20:9020/api/gallerynm/categories
https://74.114.164.21api/gallerynm/posts?filter={"artist.lastName":{"$regex":"sel","$options":"i"}} 


//////////////////////////////////////////////////////////////////////////////////////////////

http://localhost:3000/api/mrg/inventory?filter={"LastName":{"$regex":"sel"}} // find anywhere
http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":"Seliger"}

http://localhost:3000/api/mrg/inventory?filter={"artist.lastName":{"$regex":"^sel%","$options":"i"}
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

// bad
http://localhost:3000/api/mrg/artist?filter={"FirstName":"/Pa/"}   NG

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
