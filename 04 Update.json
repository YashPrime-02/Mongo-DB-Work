db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true }
    }
 ) // to update one document Where item is paper and  update uom under size to cm and status to P and currentDate to lastModified as true

 db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )
 // to update many documents Where qty is less than 50 and  update uom under size to in and status to P and currentDate to lastModified as true

 db.inventory.replaceOne(
    { item: "paper" },
    { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
 )
 // to replace one document Where item is paper and  update instock to warehouse A and qty 60 and warehouse B and qty 40