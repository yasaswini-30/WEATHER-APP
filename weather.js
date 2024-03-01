function check() {
    let input = document.getElementById("in").value;
    let place = document.getElementById("name");
    let degree = document.getElementById("deg");
    let speed = document.getElementById("speed");
    let percent = document.getElementById("percent");
    let sunrise = document.getElementById("sunr");
    let sunset = document.getElementById("suns");
  
    let apiKey = "0c270ecf3b4e2bd536f02c18eb9a24af";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        place.innerHTML = data.name;
        degree.innerHTML = Math.floor(data.main.feels_like - 273) + "°C";
        speed.innerHTML = data.wind.speed +"km/h";
        percent.innerHTML=data.main.humidity+ "%"
        sunrise.innerHTML=data.sys.sunrise
        sunset.innerHTML=data.sys.sunset
      });
  }