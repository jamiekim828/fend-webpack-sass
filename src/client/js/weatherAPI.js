function weatherData(event) {
  event.preventDefault();

  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  const apiKey = '1862b1e2691580e29648e17d562981f8';
  const zip = '10010';

  // check what text was put into the form field

  console.log('::: weather data fetched:::');
  fetch(baseUrl + zip + '&appid=' + apiKey)
    .then(res => {
      return res.json();
    })
    .then(function(data) {
      document.getElementById('').addEventListener('click');
    })
    .then(function(data) {
      document.getElementById('apires').innerHTML = 'This is API result';
    });
}

export { weatherData };
