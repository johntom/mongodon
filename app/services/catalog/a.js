async update(req, res) {

    console.log('update catalog')
    let model = req.body

    let id = model.id;
    if (id !== undefined) {
        delete model.id
        //console.log('update 1  model',model["catalog"]);
        let catalog = await this.app.orm.Catalog.update(id, model)
        res.json(catalog)
    } else res.json("update Catalog failed")

}
async create(req, res) {
     let model = req.body
     console.log('create catalog ',model)

    delete model.id
    let cat = await this.app.orm.Catalog.create(model)
    console.log('create cat ',cat[0])
    res.json({ data:cat[0] })

}
async getcatalogsent(req, res) {
    //     //  const Case = this.app.orm['Case']
    let id = req.param('id') * 1;
    console.log('getcatalogsent  ', id)
    let catalog = await this.app.orm.Catalogcontactsent.find({ ContactID: id });

    //  let catalog = await this.app.orm.Catalogcontactsent.find({ CatalogID: id });
    console.log('id:findone artist 202 ', catalog[0].ID)
    res.json({ data: catalog })
}

async getcatalogsenttocontact(req, res) {
    //     //  const Case = this.app.orm['Case']
    let id = req.param('id')//*1;
    console.log('id getcatalogsenttocontact ', id)
    let catalog = await this.app.orm.Catalogcontactsent.find({ CatalogID: id });

    // let catalog = await this.app.orm.Catalogcontactsent.find({ ContactID: id });
    console.log('id:findone catalog getcatalogsenttocontact 191 ', catalog[0].ID)
    res.json({ data: catalog })
}

async findone(req, res) {
    //     //  const Case = this.app.orm['Case']
    let id = req.param('id')//*1;
    console.log('id::::findone Catalog Controller ', id)

    // let catalog = await this.app.orm.Catalog.find({"CatalogTitle": id });
    let catalog = await this.app.orm.Catalog.find({ "id": id });

    console.log('id:findone Catalog  ', catalog[0])// catalog. _values )//catalog[0].CatalogTitle)
    res.json({ data: catalog })
}
// findcontent(req, res) {
async findcontent(req, res) {
    var title = req.param('title');
    console.log('CatalogController:findcontent')
    let validsearch = false
    var pagesize = 30;
    var searchObj = {};
    if ((title !== '0') && (title !== undefined)) {
        validsearch = true
        // var regexStr = '^' + title + '.*';
        var regexStr = '.*' + title + '.*';

        _.extend(searchObj, { CatalogTitle: new RegExp(regexStr, 'i') });
    }
    console.log('searchObj:findcontent', searchObj)
    let catalog = await this.app.orm.Catalog.find(searchObj).sort({ CatalogTitle: 1 });
     console.log('catalog', catalog.length)
   res.json({ data: catalog })

}
async findcatalog(req, res) {

    //.find({CatalogTitle:1} )
    let catalog = await this.app.orm.Catalog.find().sort({ CatalogTitle: 1 });

    console.log('CatalogController:findcatalog ', catalog[0].CatalogTitle)
    res.json({ data: catalog })
   



}