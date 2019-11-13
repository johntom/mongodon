  //mailinglist
  { method: ['get'], path: '/api/v1/mailinglistparam', handler: 'MailinglistController.findone' },
  { method: ['get'], path: '/api/v1/mailinglist/:id', handler: 'MailinglistController.findone' },
  { method: ['get'], path: '/api/v1/mailinglistid/:id', handler: 'MailinglistController.findoneid' },
  { method: ['delete'], path: '/api/v1/mailinglist/delete', handler: 'MailinglistController.delete' },

//////////////////

'use strict'

const Controller = require('trails/controller')

/**
 * @module MailinglistController
 * @description TODO document Controller.
 */
module.exports = class MailinglistController extends Controller {
    getnext(req, res) {

        this.app.orm.Batch.find({
            type: 'Action'
        }).then(rec => {
            console.log('rec ', rec[0], rec[0].nextavail)
            let id = rec.id
            //delete rec.id
            //nextavail
            let nextavail = rec[0].nextavail + 1
            console.log(' nextavail', nextavail)
            let newm = { "type": "Action", "nextavail": nextavail }
            console.log('rec nextavail', newm)
            this.app.orm.Batch.update(id, newm).exec(function update(err, model) {
                if (err) {
                    console.log('err', err)
                    return //  
                } else {
                    console.log('success ', model)
                    res.json(model)
                }
            })
        })
            .catch(err => res.status(500).end())
    }

    async  findoneid(req, res) {
        console.log('Mailinglist findoneidd')

        let id = req.param('id')//*1;
        console.log('id:findone mailinglist ', id)

        let mlist = await this.app.orm.Mailinglist.find({ "id": id });
        console.log('id:findoneid mlist ', mlist.length, mlist[0].LastName)

        res.json({ data: mlist })
    }
    async  findone(req, res) {
        console.log('MailinglistController')

        let id = req.param('id')//*1;
        console.log('id:findone mailinglist ', id)

        let mlist = await this.app.orm.Mailinglist.find({ "listName": id });
        // console.log('id:findone mlist ', mlist.length, mlist[0].LastName)

        res.json({ data: mlist })
    }
    async delete(req, res) {
        console.log('MailinglistController delete')

        // let pid = req.param('id')
        let model = req.body
        // console.log(' deletecase ', pid,model.id)//  modelpid)
        this.app.orm.Mailinglist.destroy({ id: model.id })

            .exec(function (err, model) {
                if (err) {
                    return
                }
                else {
                    res.json(model)
                }
            })
    }
}

