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

/*fetch(weatherUrl)
  .then((response) => response.json())
  .then((response) => console.log(response));*/

function fetchingDatas() {
  return fetch(weatherUrl).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then((error) => {
        console.log(error);
        throw new Error("Something went wrong - server-side");
      });
    }
  });
}

async function displayDatas() {
  const calls = (await fetchingDatas()) || [];
  const callList = calls.list;
  callList.forEach((call) => {
    const templateElement = document.importNode(
      document.querySelector("template").content,
      true
    );
    templateElement.getElementById("date").textContent = call.dt_txt;
    // templateElement.getElementById("icon").textContent = call.weather[0].icon;
    templateElement.getElementById("maxTemp").textContent = call.main.temp_max;
    templateElement.getElementById("minTemp").textContent = call.main.temp_min;
    templateElement.getElementById("windSpeed").textContent = call.wind.speed;
    templateElement.getElementById("description").textContent =
      call.weather[0].description;

    document.querySelector("main").appendChild(templateElement);
  });
}
displayDatas();
