// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

 const { nextISSTimesForMyLocation } = require('./iss');

 const printPassTimes = function(passTimes) { 
  for (let pass of passTimes.response) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Nope. It didn't work!", error);
  }
  printPassTimes(passTimes);
});

/////////////////////////////////////////////////////////////////////////////

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Nope it didn't work" , error);
//     return;
//   }

//   console.log(ip);
// });

// fetchCoordsByIP('75.157.164.3',(error,data) => {
//   if (error) {
//     console.log("Nope it didn't work" , error);
//     return;
//   }

//   console.log(data);
// });

// const coords = { latitude: 49.2643, longitude: -123.0961 };

// fetchISSFlyOverTimes( coords, (error, passTimes) => {
//   if (error) {
//     console.log("Nope it didn't work")
//     return;
//   }

//   console.log(passTimes);
// });