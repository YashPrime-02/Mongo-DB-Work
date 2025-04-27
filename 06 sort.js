db.inventory.find().limit(1); // to display upto first document element
db.inventory.find().limit(2); // to display upto first 2 document element
db.inventory.find().skip(1); // to skip first document element
db.inventory.find().skip(2); // to skip first 2 document element
db.inventory.find().sort({ qty: -1 }); // to sort  qty in descending order
db.inventory.find().sort({ qty: 1 }); // to sort  qty in ascending order


//Achieving Pagination using MongoDB and find limit
no=8
db.inventory.find().skip((pageNo-1)*10).limit(no);
//EXAMPLE
pageno=1 db.inventory.find().skip(0).limit(8);
pageno=2 db.inventory.find().skip(8).limit(8);
