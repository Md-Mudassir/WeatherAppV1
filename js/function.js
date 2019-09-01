//to display the celcius and farhenite option
let CF = `<sup id="C" onclick="myWeather.getconvertTempC()"> &degC |</sup><sup id="F" onclick="myWeather.getconvertTempF()">&degF</sup>`;
let city = document.getElementById("city");
let data = document.getElementById("data");
let temp = document.getElementById("temp");
let input = document.getElementById("pick").value;
//function to retrieve the elements
class WeatherForecast {
  constructor() {
    this.city = city;
    this.temp = temp;
    this.data = data;
  }
  weatherApp() {
    let cities = [
      { city: "Bangalore, Karnataka", Celcius: 25, Data: "Sunny ☀️" },
      { city: "Chennai, Tamil Nadu", Celcius: 15, Data: "Rainy 🌧️" },
      { city: "Adoni, Andhra Pradesh", Celcius: 30, Data: "Cloudy ☁️" },
      { city: "Bellary, Karnataka", Celcius: 10, Data: "Fog 🌫️" }
    ];

    let filtred = cities
      .filter(n => n.city.includes(input))
      .map(v => {
        (city.innerHTML = v.city),
          (temp.innerHTML = v.Celcius + CF),
          (data.innerHTML = v.Data);
      });
  }
}

const myWeather = new WeatherForecast();
console.log(this);

class Myweather2 extends WeatherForecast {
  constructor() {
    super();
    console.log(this.temp);
  }
}
// to convert C to F and viceversa
WeatherForecast.prototype.getconvertTempF = function() {
  let C = temp;
  let Fer = Math.round((C * 9) / 5 + 32);
  document.getElementById("temp").innerHTML = Fer + CF;
};

WeatherForecast.prototype.getconvertTempC = function() {
  let C = temp;
  document.getElementById("temp").innerHTML = C + CF;
};

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
