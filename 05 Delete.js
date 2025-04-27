db.inventory.deleteMany({})
//to delete all documents (use it carefully)
db.inventory.deleteMany({ qty: { $lt: 50 } })
//to delete all documents where qty is less than 50 (delete many based on filters)
db.inventory.deleteMany({ status : "A" })
//to delete all documents where status is A
db.inventory.deleteOne( { status: "D" } )
//to delete one by one (first then second and so on) document where status is D