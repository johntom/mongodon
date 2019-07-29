
// const fs = require('fs')
//https://github.com/fastify/fastify/blob/master/docs/Request.md
const util = require('util')
const fs = require('fs-extra')
const path = require('path')
// fs.readFile(path.join(filepath, template + '/' + filename), 'binary', function (error, file) {
module.exports = async function (fastify, opts) {

    fastify.get('/getonepdf/:template/:filename', async function (request, reply) {
        const template = request.params.template
        const filename = request.params.filename
        let filepath = path.resolve(__dirname, '../../../uploads')
        let extname = path.extname(filename)
        const stream = fs.createReadStream(path.join(`${filepath}/${template}`, `${filename}`))
        fs.createReadStream(path.join(`${filepath}/${template}`, `${filename}`), function (error, stream) {


            switch (extname) {
                case '.pdf':
                    reply.header('Content-Type', 'application/pdf')
                    reply.send(stream)
                    break
                case '.jpg':
                    reply.header('Content-Type', 'image/jpeg')
                    reply.send(stream)
                    //// reply.type('image/jpeg').send(stream) // this works
                    break
                case '.tiff':
                    reply.header('Content-Type', 'image/tif')
                    reply.send(stream)
                    break
                case '.docx':
                    reply.header('Content-Type', 'application/docx')
                    reply.send(stream)
                    break
                case '.doc':
                    reply.header('Content-Type', 'application/doc')
                    reply.send(stream)
                default:
                    reply.header('Content-Type', 'application/pdf')
                    reply.send(stream)
                    break
            }

        })

    })


}


module.exports.autoPrefix = '/gallery';


// { method: ['get'], path: '/api/v1/downloadonepdf/:template/:filename', handler: 'PdfController.downloadonepdf' },
// { method: ['get'], path: '/api/v1/onepdf/:template/:filename', handler: 'PdfController.getonePdf' },
// { method: ['get'], path: '/api/v1/oneadjpdf/:template/:filename', handler: 'PdfController.getoneadjPdf' },
//         if (error) {
        //     console.log(' error ',error.path)
        //     reply.header('x-foo', 'foo')
        //     // reply.writeHead(500, {
        //     //     "Content-Type": "text/plain"
        //     // })
        //     reply.write(error + "\n")
        //     reply.end()
        // } else {
     //console.log('PdfController getonePdf  $template:%s filename:%s.. ', template, filename)

  //   console.log('\r rr ', filepath)
        //   console.log('\r\n')



