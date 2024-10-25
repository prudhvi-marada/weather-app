const request=require("request")
const openWeather={
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY:"e52811ff2e0aac9246ee21f4aa1293cd"
}

const weatherData=(address,callback)=>{
    const url=openWeather.BASE_URL+encodeURIComponent(address)+"&APPID="+ openWeather.SECRET_KEY;
    console.log(url);
    request({url,json:true},(error,data)=>{
        if (error){
            callback(true,"unable to fetch data."+error)
        }
        callback(false,data?.body)
    })
}

module.exports= weatherData;