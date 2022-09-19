1.Find all the information about each products
>db.users.find()
{ _id: ObjectId("63275d4a27e2afb2ce17dec2"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec3"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec4"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec5"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec6"),
  id: '5',
  product_name: 'Sleek Cotton Chair',
  product_price: 33,
  product_material: 'Fresh',
  product_color: 'black' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec7"),
  id: '6',
  product_name: 'Awesome Wooden Towels',
  product_price: 474,
  product_material: 'Plastic',
  product_color: 'orange' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec8"),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec9"),
  id: '8',
  product_name: 'Incredible Steel Hat',
  product_price: 78,
  product_material: 'Rubber',
  product_color: 'violet' }
{ _id: ObjectId("63275d4a27e2afb2ce17deca"),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure' }
{ _id: ObjectId("63275d4a27e2afb2ce17decb"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo' }
{ _id: ObjectId("63275d4a27e2afb2ce17decc"),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black' }
{ _id: ObjectId("63275d4a27e2afb2ce17decd"),
  id: '12',
  product_name: 'Unbranded Plastic Salad',
  product_price: 89,
  product_material: 'Wooden',
  product_color: 'pink' }
{ _id: ObjectId("63275d4a27e2afb2ce17dece"),
  id: '13',
  product_name: 'Gorgeous Cotton Keyboard',
  product_price: 37,
  product_material: 'Concrete',
  product_color: 'sky blue' }
{ _id: ObjectId("63275d4a27e2afb2ce17decf"),
  id: '14',
  product_name: 'Incredible Steel Shirt',
  product_price: 54,
  product_material: 'Metal',
  product_color: 'white' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded0"),
  id: '15',
  product_name: 'Ergonomic Cotton Hat',
  product_price: 43,
  product_material: 'Rubber',
  product_color: 'mint green' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded1"),
  id: '16',
  product_name: 'Small Soft Chair',
  product_price: 47,
  product_material: 'Cotton',
  product_color: 'teal' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded2"),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded3"),
  id: '18',
  product_name: 'Licensed Plastic Bacon',
  product_price: 88,
  product_material: 'Steel',
  product_color: 'yellow' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded4"),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded5"),
  id: '20',
  product_name: 'Handcrafted Wooden Bacon',
  product_price: 36,
  product_material: 'Concrete',
  product_color: 'lime' }

2.Find the product price which are between 400 to 800
>db.users.find({product_price : {$gt: 400, $lt : 800}})
{ _id: ObjectId("63275d4a27e2afb2ce17dec2"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec4"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec5"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec7"),
  id: '6',
  product_name: 'Awesome Wooden Towels',
  product_price: 474,
  product_material: 'Plastic',
  product_color: 'orange' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec8"),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink' }

3.Find the product price which are not between 400 to 600


4.List the four product which are grater than 500 in price 
>db.users.find({product_price : {$gt: 500}}).limit(4)
{ _id: ObjectId("63275d4a27e2afb2ce17dec2"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec3"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo' }
{ _id: ObjectId("63275d4a27e2afb2ce17dec4"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold' }

5.Find the product name and product material of each products
>db.users.find().map(function(e){return e.product_name + " = " + e.product_material})
'Intelligent Fresh Chips = Concrete'
'Practical Fresh Sausages = Cotton'
'Refined Steel Car = Rubber'
'Gorgeous Plastic Pants = Soft'
'Sleek Cotton Chair = Fresh'
'Awesome Wooden Towels = Plastic'
'Practical Soft Shoes = Rubber'
'Incredible Steel Hat = Rubber'
'Awesome Wooden Ball = Soft'
'Generic Wooden Pizza = Frozen'
'Unbranded Wooden Cheese = Soft'
'Unbranded Plastic Salad = Wooden'
'Gorgeous Cotton Keyboard = Concrete'
'Incredible Steel Shirt = Metal'
'Ergonomic Cotton Hat = Rubber'
'Small Soft Chair = Cotton'
'Incredible Metal Car = Fresh'
'Licensed Plastic Bacon = Steel'
'Intelligent Cotton Chips = Soft'
'Handcrafted Wooden Bacon = Concrete'

6.Find the product with a row id of 10
>db.users.find({id : {$eq :"10"}})
{ _id: ObjectId("63275d4a27e2afb2ce17decb"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo' }
  
7.Find only the product name and product material
>db.users.find().map(function(e){return e.product_name + " = " + e.product_material})
'Intelligent Fresh Chips = Concrete'
'Practical Fresh Sausages = Cotton'
'Refined Steel Car = Rubber'
'Gorgeous Plastic Pants = Soft'
'Sleek Cotton Chair = Fresh'
'Awesome Wooden Towels = Plastic'
'Practical Soft Shoes = Rubber'
'Incredible Steel Hat = Rubber'
'Awesome Wooden Ball = Soft'
'Generic Wooden Pizza = Frozen'
'Unbranded Wooden Cheese = Soft'
'Unbranded Plastic Salad = Wooden'
'Gorgeous Cotton Keyboard = Concrete'
'Incredible Steel Shirt = Metal'
'Ergonomic Cotton Hat = Rubber'
'Small Soft Chair = Cotton'
'Incredible Metal Car = Fresh'
'Licensed Plastic Bacon = Steel'
'Intelligent Cotton Chips = Soft'
'Handcrafted Wooden Bacon = Concrete'

8.Find all products which contain the value of soft in product material 
>db.users.find({product_material :{$eq : "Soft"}})
{ _id: ObjectId("63275d4a27e2afb2ce17dec5"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum' }
{ _id: ObjectId("63275d4a27e2afb2ce17deca"),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure' }
{ _id: ObjectId("63275d4a27e2afb2ce17decc"),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black' }
{ _id: ObjectId("63275d4a27e2afb2ce17ded4"),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure' }
  
9.Find products which contain product color indigo  and product price 492.00
>db.users.find({product_color :{$eq :"indigo"}})


10.Delete the products which product price value are same