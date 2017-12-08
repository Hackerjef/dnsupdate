//things
var cache = require('memory-cache');
var request = require("request");
var validateip = require('validate-ip')


//start of application
getpublicip();
console.log(cache.get('publicip'))






//functions
function getpublicip() {
  request("http://checkip.dyndns.org", function(error, response, body) {
    cache.put('uncleanip', body);
  });
  console.log(cache.get('uncleanip'))
  var uncleanip = cache.get('uncleanip');
  var publicip = uncleanip.replace('Current IP Address: ', '');
  if(validateip(publicip)) {
    cache.put('publicip', publicip);
  } else {
    console.log("Ip not found");
    process.exit();
  }
}

^.... DOES NOT WORK (MAYBE THE REQUEST IS NOt working
