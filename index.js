// Code your solution in this file!

// Function to return number of blocks from headquarters
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

// Function to return number of feet from headquarters
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

// Function to return number of feet travelled
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Function to return the fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 0 && distance <= 400)
    return 0;
  else if (distance > 400 && distance <= 2000)
    return (distance - 400) * 0.02;
  else if (distance > 2000 && distance <= 2500)
    return 25;
  else if (distance > 2500)
    return 'cannot travel that far';
}