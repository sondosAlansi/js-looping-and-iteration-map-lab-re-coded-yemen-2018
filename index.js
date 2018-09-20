// Code your solution in this file.

function lowerCaseDrivers(drivers){
  const lower=[];
  for(const drive of drivers){
    
    lower.push(drive.toLowerCase());
  }
  return lower;
}

function nameToAttributes(drivers){
  return drivers.map(function (drive){
    const firstName = drive.split(' ')[0]
    const lastName = drive.split(' ')[1]
     return {firstName: firstName, lastName: lastName }
  });
  }



function attributesToPhrase(drivers){
  return drivers.map(function(drive){
     return `${drive.name} is from ${drive.hometown}`;
  })
}