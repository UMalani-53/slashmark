function GetInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=fff8dd0cb185362b870d4e4c7413ce3f')
    .then(response => response.json())
    .then(data => {
        // Getting the min and max values for each day
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 288.26).toFixed(1) + "°";
        }

        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 289.18).toFixed(2) + "°";
        }
        // Getting Weather Icons
        for (i = 0; i < 5; i++) {
            var iconCode = data.list[i].weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + ".png";
            document.getElementById("img" + (i + 1)).src = iconUrl;
        }
    })
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"));
}
