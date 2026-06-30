const city=document.querySelector("input");
const search=document.querySelector(".search-btn");
const resultBox=document.querySelector(".result");
//defining a function for fetching cityname
async function getWeather(cityname){
    //fetch api
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=API-KEY&units=metric`;
    try{
        const response=await fetch(url);
        const data=await response.json();
        if(data.cod!==200) throw new Error("City not found");
        const temp=data.main.temp;
        const humidity=data.main.humidity;
        const windspeed=data.wind.speed;
        const weatherdescription=data.weather[0].description;
        const icon=data.weather[0].icon;
         //feeding data into result box
        resultBox.innerHTML=`
            <p>Weather Description: ${weatherdescription}</p>
            <p>City: ${cityname}</p>
            <p>Temperature: ${temp}</p>
            <p>Humidity: ${humidity}</p>
            <p>WindSpeed: ${windspeed}</p>
            <p>Icon: <img src="https://openweathermap.org/img/wn/${icon}@2x.png"></p>
            `
        }
    catch(error){
        resultBox.innerHTML=`
        <p>City Not found.Invalid City Name try again later.</p>
        `
    }
}
search.addEventListener("click",()=>{
    const cityname=city.value;
    if(cityname==""){ 
        resultBox.innerHTML=`
            <p>Please enter a city name.</p>
        `
        // console.log("No valid input");
    }
    else{
        getWeather(cityname);
        
    }
})
city.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        getWeather(city.value);
    }
})









// def6e5c2ed32a52bf6b4b6371f168e77  API KEY
