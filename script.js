var apiKey = "4bf83853119da89e87e7613f"
var currentDate;
var dateElement =  document.getElementById("date");

function getCurrencyData(){
    var currencyvalue = document.getElementById("currency").value;
    var comparisonCurrency = document.getElementById("currency2").value;
    var settings = {
        "url": `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyvalue.trim()}`,
        "method": "GET",
        "timeout": 0,
    };

    try{
        $.ajax(settings).done(function (response) {
            currentDate = response.time_last_update_utc;
            console.log(currentDate);
            var comparisonRate = response.conversion_rates[comparisonCurrency];
            console.log(comparisonRate);
            document.getElementById("result").innerHTML = `1 ${currencyvalue} = ${comparisonRate} ${comparisonCurrency}`;
            dateElement.innerHTML = currentDate;
        });
    }catch(error){
        alert(error)
    }
}
