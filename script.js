const apiKey = "6539028e777bac113443ce886277e49a";
const langage = "fr";
const counter = 7;
const liege = {
  latitude: 50.6333,
  longitude: 5.56667,
};

const template = document;
// api.openweathermap.org/data/2.5/forecast?lat=50.65333&lon=5.56667&appid=6539028e777bac113443ce886277e49a&cnt=7&lang=fr&units=metric
const weatherUrl = `api.openweathermap.org/data/2.5/forecast?units=metric&lat=${liege.latitude}&lon=${liege.longitude}&appid=${apiKey}&cnt=${counter}&lang=${langage}&units=metric`;
console.log(weatherUrl);

fetch(weatherUrl)
  .then((response) => response.json())
  .then((response) => console.log(response));
