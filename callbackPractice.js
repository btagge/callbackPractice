/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
var first = function(array, callback) {
  callback(array[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for 
  
var last = function(array, callback) {
  callback(array[array.length-1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, callback) {
  var multiplied = num1 * num2;
  callback(multiplied);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

function contains(array, testName, callback) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === testName) {callback(true);}
  } callback(false);
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

// function uniq(array) {
//   for(var i = 0; i < array.length; i++) {
//     var test = array[i];
//     for(var j = i + 1; j <= array.length; j++) {
//       if(test === array[j]) {array.splice(j,1);}
//     }
//   } return array;
// }

// function uniq(array,callback) {
//   var newArray = array.sort();
//   for(var i = 0; i < newArray.length; i++) {
//     var test = newArray[i];
//     for(var j = 0; j <= newArray.length; j++) {
//       if(test === newArray[j]) {newArray.splice(j,1);}
//   } callback(newArray);
// }
// }

function uniq(array,callback) {
    var seen = {};
    var newArray = array.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
    callback(newArray);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

function each(array, callback) {
  array.forEach(function(element,index) {
    callback(element, index);
  })
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

 function getUserById(objArray, value, callback) {
    for(var i = 0; i < objArray.length; i++) {
      if(objArray[i].id === value) {
        callback(objArray[i])
      }
    }
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});


