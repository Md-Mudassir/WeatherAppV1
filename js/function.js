//to display the celcius and farhenite option
let CF = `<sup id="C" onclick="myWeather.getconvertTempC()"> &degC |</sup><sup id="F" onclick="myWeather.getconvertTempF()">&degF</sup>`;

//function to retrieve the elements
class weatherForecast {
  weatherApp() {
    let cities = [
      { city: "Bangalore, Karnataka", Celcius: 25, Data: "Sunny ☀️" },
      { city: "Chennai, Tamil Nadu", Celcius: 15, Data: "Rainy 🌧️" },
      { city: "Adoni, Andhra Pradesh", Celcius: 30, Data: "Cloudy ☁️" },
      { city: "Bellary, Karnataka", Celcius: 10, Data: "Fog 🌫️" }
    ];
    let city = document.getElementById("city");
    let data = document.getElementById("data");
    let temp = document.getElementById("temp");
    let input = document.getElementById("pick").value;
    let filtred = cities
      .filter(n => n.city.includes(input))
      .map(v => {
        (city.innerHTML = v.city),(temp.innerHTML = v.Celcius + CF),(data.innerHTML = v.Data);
      });
  }
}
// to convert C to F and viceversa
weatherForecast.prototype.getconvertTempF = function() {
  let C = this.temp;
  let Fer = Math.round((C * 9) / 5 + 32);
  document.getElementById("temp").innerHTML = Fer + CF;
};

weatherForecast.prototype.getconvertTempC = function() {
  let C = this.temp;
  document.getElementById("temp").innerHTML = C + CF;
};

const myWeather = new weatherForecast();
console.log(this.temp);

// day and time functions
function addZero(i) {
  if (i < 10) {
    i = 0 + i;
  }
  return i;
}

function Time() {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  var d = new Date();
  weekday_value = d.getDay();
  var x = document.getElementById("date");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  x.innerHTML = weekdays[weekday_value] + ", " + h + ":" + m;
}
