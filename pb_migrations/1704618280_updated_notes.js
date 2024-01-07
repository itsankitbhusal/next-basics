/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vrudl58muje3njb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsmlgh08",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vrudl58muje3njb")

  // remove
  collection.schema.removeField("hsmlgh08")

  return dao.saveCollection(collection)
})
