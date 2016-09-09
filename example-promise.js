/*function getTempCallback (location, callback){
  callback(undefined,78);
  callback('City not found');
}

getTempCallback ('Philadelphia', function(err,temp){
  if(err){
    console.log('error',err);
  } else {
    console.log('success',temp)
  }
});

function getTempPromise (location){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(79);
      reject('City was not found');
    }, 3000);
  });
}

getTempPromise('philadelphia').then(function(temp){
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});*/


//challenge area

function addPromise (a,b){
  return new Promise(function(resolve,reject){
    if (typeof a==="number"&& typeof b==="number"){
      var x=a+b;
      resolve(x);
    } else {
      reject(err);
    }
  });
}

addPromise (5,6).then(function(x){
  console.log('the sum is : ',x);
},function(err){
  console.log('errrrrr');
});
