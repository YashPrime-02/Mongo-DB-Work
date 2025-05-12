db.inventory.find(); // to display all documents

db.inventory.find({ item: 'journal' }); // to display documents with a specific value
db.inventory.find({ qty: 25 }); // to display documents with a specific value remember to use double quotes in string no quotes in numbers
db.inventory.find( { qty: { $in: [ 25, 100 ] } } )  // to display documents with a specific value remember to use double quotes in string no quotes in numbers
db.inventory.find( { item: "canvas", qty: { $lt: 101 } } ) // AND Operations to find documents with both specific values her $lt is used for Less than 100
db.inventory.find( { item: "canvas", qty: { $gt: 24 } } )// AND Operations to find documents with both specific values her $lt is used for greater than 24
db.inventory.find( { item: "canvas", qty: { $lt: 101, $gt: 24 } } ) // AND Operations to find documents with both specific values her greater than 24 and less than 101
db.inventory.find( { item: "canvas", qty:100}  )// AND Operations to find documents with both specific values equal to values

//notes to be added from here tomorrow

//OR Operations
db.inventory.find( { $or: [ {item: "canvas" }, { qty: { $lt: 101 } } ] } ) // same format for greater or lesser or equal like AND


db.inventory.findOne( { $or: [ {item: "canvas" }, { qty: { $lt: 101 } } ] } ) // to find document instead of array values, same for AND OR  NOT anything 

db.inventory.find( {
    item: "canvas",
    $or: [ { qty: { $lt: 101 } }, { tags: /^c/ } ]  
} ) //  if item is canvas then either qty is less than 101 or if the tag starts with c or c/