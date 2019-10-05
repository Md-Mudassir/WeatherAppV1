//to display the celcius and farhenite option
let CF = `<sup id="C" onclick="convertTempC()"> &degC |</sup><sup id="F" onclick="convertTempF()">&degF</sup>`;

//function to retrieve the elements
class weatherForecast {
  weatherApp() {
    let cities = [
      { city: "Bangalore, Karnataka", Celcius: 25, emoji: "☀️", Data: "Sunny" },
      { city: "Chennai, Tamil Nadu", Celcius: 15, emoji: "🌧️", Data: "Rainy" },
      {
        city: "Adoni, Andhra Pradesh",
        Celcius: 30,
        emoji: "☁️",
        Data: "Cloudy"
      },
      { city: "Bellary, Karnataka", Celcius: 40, emoji: " 🌫️", Data: "Fog" }
    ];
    let city = document.getElementById("city");
    let data = document.getElementById("data");
    this.temp = document.getElementById("temp");
    this.t = 0;
    let input = document.getElementById("pick").value;
    let filtred = cities
      .filter(n => {
        if (n.city.includes(input)) {
          this.temprature = n.Celcius;
          this.emoji = n.emoji;
          return n;
        }
      })
      .map(v => {
        ((city.innerHTML = v.city),
        (this.temp.innerHTML = v.emoji + v.Celcius + CF)),
          (data.innerHTML = v.Data);
      });
  }
}

const myWeather = new weatherForecast();

// to convert C to F and viceversa
convertTempF = () => {
  let C = myWeather.temprature;
  let Fer = Math.round((C * 9) / 5 + 32);
  document.getElementById(
    "temp"
  ).innerHTML = `${myWeather.emoji}  ${Fer}  ${CF}`;
};

convertTempC = () => {
  let C = myWeather.temprature;
  document.getElementById("temp").innerHTML = `${myWeather.emoji}  ${C}  ${CF}`;
};

// day and time functions
addZero = i => {
  if (i < 10) {
    i = 0 + i;
  }
  return i;
};

Time = () => {
  let weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  let d = new Date();
  weekday_value = d.getDay();
  let x = document.getElementById("date");
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  x.innerHTML = weekdays[weekday_value] + ", " + h + ":" + m;
};
