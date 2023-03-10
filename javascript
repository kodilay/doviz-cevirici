function convertCurrency() {
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;
  var amount = document.getElementById("amount").value;
  
  fetch('https://api.exchangeratesapi.io/latest?base=' + fromCurrency)
    .then(response => response.json())
    .then(data => {
      var exchangeRate = data.rates[toCurrency];
      var result = amount * exchangeRate;
      document.getElementById("result").innerHTML = result.toFixed(2) + ' ' + toCurrency;
    })
    .catch(error => console.log(error));
}
