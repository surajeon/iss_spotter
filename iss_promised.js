const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  // console.log("ip: ", ip)
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  
  const times = JSON.parse(body);

  const url = `http://api.open-notify.org/iss-pass.json?lat=${times.latitude}&lon=${times.longitude}`;
  
  return request(url);
};

const printPassTimes = function(passTimes) { 
  const times = JSON.parse(passTimes)
  for (let pass of times.response) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};



module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, printPassTimes };
