

export const getSession = () =>{
  fetch(`http://partners.api.skyscanner.net/apiservices/pricing/v1.0`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
       'Accept': 'application/json'
    },
    body: JSON.stringify({
     apiKey: 'cr875483709897975877477133746240',
     country: 'US',
     currency: 'USD',
     locale: 'en-US',
     originplace: 'SFO',
     destinationplace: 'VIE',
     outbounddate: '2017-02-04',
     inbounddate: '2017-02-07'
   })
 })
 .then((detail) => console.log(detail))
 .then((detailJson) => {
   console.log(detailJson);
   return detailJson;
 })
 .catch((error) => {
   console.log(error);
 });
};

export const getIndex = (returnDate) =>{
  let leaveDate = new Date();
  console.log("leave", leaveDate);
  leaveDate.setHours(leaveDate.getHours() + 48);
  leaveDate = leaveDate.toJSON().slice(0,10);
  console.log("leaveDate", leaveDate);

  let budget = 1000;
  destinations = [];
    fetch(`http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/anywhere/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },

    })
    .then((detail) => detail.json())
    .then((detailJson) => {

      console.log("detail", detailJson);

        destinations.push("hi",detailJson);

      console.log(destinations);

      return detailJson;
    })
    .catch((error) => {
      console.log(error);
    });
  // return destinations;
};
