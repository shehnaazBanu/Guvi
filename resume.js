//for loop
var json = [{
    "id" : "Shehnaaz", 
    "msg"   : "Hi",
    "task" : "Run",
  },
  {
    "id" : "Matt", 
    "msg"   : "Hello",
    "task" : "Jump",
  }];
  //for loop
  for(var i = 0; i < json.length; i++) {
    var obj = json[i];
  
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
  }




  //For in loop
  jsonData ={
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
 }
 
 var json = {
  jsonData:  [
      {one: [11, 12, 13, 14, 15]},
      {two: [21, 22, 23]},
      {three: [31, 32]}
  ]
}; 
for (var i=0; i<json.jsonData.length; i++) {
  for (var key in json.jsonData[i]) {
      for (var j= 0; j<json.jsonData[i][key].length; j++) {
          console.log(json.jsonData[i][key][j])
      }
  }
}


//For of

let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);



 //For each
 json.forEach(function(obj) { console.log(obj.msg); });



//JSON resume

let myResume= {
    
    "Personal Information": [
        {
      "name": "Shehnaaz Banu T",
      "email": "shehnaaz.sb052@gamil.com",
      "phone": 9844936387,
        "address": "Thanisandra main road",
        "postalCode": 560077,
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
    },
],
    "work": [
      {
        "company": "Amazon",
        "position": "Risk Analyst",
        "startDate": "2019 september",
      },
    ],
    "education": [
      {
        "institution": "ACS College of Engineering",
        "department": "Computer Science",
        "batch start year": 2015,
        "batch end year": 2019,
        "gpa": 7.5,
      }
    ],
    "Technical skills": [
      {
        "name": "Java,javascript, HTML, CSS, Data structures and algorithm, Bootstrap,SQL",
        "level": "Intermediate",
        
      }
    ],
    "languages": [
      {
        "language": "Hindi, Kannada, Urdu, English",
      }
    ],
    
  }
  console.log(myResume);
  