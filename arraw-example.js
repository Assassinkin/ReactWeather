var names = ['Ridha','Mehdi','Ala'];
//
// names.forEach(function(name){
//   console.log('for Each',name);
// });
//
// names.forEach((dd) => {
//   console.log('arrow names', dd);
//   console.log('hhhhhh');
// });
//
// names.forEach((dd) => console.log('noobs', dd));

// var returnMe = (name) => name+'!!';
//
// console.log(returnMe('ridha'));


// var person = {
//   name: 'Ridha',
//   greet: function(){
//     names.forEach((name)=>{
//       console.log(this.name + ' says hi to '+ name)
//     });
//   }
// };
//
// person.greet();

//challenge area

function add (a,b) {
  return a+b;
}

// console.log(add(1,3));
// console.log(add(9,0));

var addExpression = (a,b) => a+b;

console.log(addExpression(2,55));

var addStatement = (a,b) => {
  return a+b;
};

 console.log(addStatement(5,5));
