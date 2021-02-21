//This is a string of JSON.  Not JSON
//const data = `{"ticker":{"base":"BTC","target":"USD","price":"57313.03083939","volume":"53853.00009241","change":"34.68809189"},"timestamp":1613923204,"success":true,"error":""}`;
//JSON.parse(data);

//For an Javascript Object - use JSON.stringify();


const req = new XMLHttpRequest();

req.onload = function () {
    console.log("All Done with Request!!");
    const data = JSON.parse(this.response);
    console.log(data.ticker.price);

}

req.onerror = function() {
    console.log("Error!!!");
    console.log(this);
}
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();