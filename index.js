const headquaters = 42
//Return distance in blocks
//Calculate distance below 42nd street
function distanceFromHqInBlocks(street){
    console.log(street-headquaters)    
    let distance = street-headquaters
    if (distance<0){
      distance= distance * -1
    }
    return distance
  }
  //Return distance in feet
  //Calculate distance below 42nd street
  function distanceFromHqInFeet(street){
    console.log(street-headquaters)
    let distance = street-headquaters
    if (distance < 0){
      distance=distance * -1
    }
    return distance * 264
  }
function distanceTravelledInFeet(streetNumber, streetNumber1){
  console.log(streetNumber-streetNumber1)
  let distance = streetNumber-streetNumber1
  if (distance < 0){
    distance =distance * -1
  }
  return distance * 264
}
function calculatesFarePrice(streetNumber,streetNumber1){
  let feet =distanceTravelledInFeet(streetNumber,streetNumber1)
  let test  = 400
  if (feet < 400){
    return 0
  }else if(feet >=400 && feet < 2000){
    return (feet - test) *0.02
  }else if (feet >= 2000 && feet < 2500){
    return 25
  }else{
    return 'cannot travel that far'
  }
}