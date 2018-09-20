// Code your solution in this file.

function lowerCaseDrivers(drivers){
  const lower=[];
  for(const drive of drivers){
    
    lower.push(drive.toLowerCase());
  }
  return lower;
}

function nameToAttributes(drivers){
  const names=[];
  for(const drive of drivers){
    
   
   Object.assign({}, drive, { firstName: '',lastName:'' });
  }
  return 
}