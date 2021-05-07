const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, printPassTimes } = require('./iss_promised');



fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(printPassTimes)
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });