// // //https://github.com/fastify/fastify-multipart
const multipart = require('fastify-multipart');
const concat = require('concat-stream')
const pump = require('pump')
const fs = require('fs-extra')
//https://github.com/fastify/fastify/blob/master/docs/Request.md
module.exports = async function (fastify, opts, next) {
    fastify.register(require('fastify-multipart'))
    // fastify.log.info(`mongoOpts url ${process.env.MONGODB_URL}  ${process.env.MONGODB_URL2}`)

    fastify.post('/upload', (req, reply) => {

       console.log('============================req=/n/r',req.headers )
        let uploaded = false
        let mp = req.multipart(handler, function (err) {
            console.log('upload completed')
          
            reply.code(200).send('uploaded')
        })
        // mp is an instance of https://www.npmjs.com/package/busboy
        let dirval = 0
        // check if directory exits passed as part of form
        mp.on('field', function (key, value) {
            dirval = value;
            let pathcheck = `./uploads/${dirval}`
            fs.ensureDir(pathcheck)
                .then(() => {
                   
                })
                .catch(err => {
                    console.error(err)
                })
        })
        function handler(field, file, filename, encoding, mimetype) {
            pump(file, fs.createWriteStream(`./uploads/${dirval}/${filename}`))
            uploaded = true
            // be careful of permission issues on disk and not overwrite ${dirval}
            // sensitive files that could cause security risks
        }
    })
    next()
}

