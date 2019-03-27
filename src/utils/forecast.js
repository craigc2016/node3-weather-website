const request = require('request')

const forecast = (latitude,longtidue,callback) => {
   const url = `https://api.darksky.net/forecast/3eeca0510b35ffee56c2424ea2daebfa/${latitude},${longtidue}?units=si`
   
   request({url,json:true}, (error,{body}) =>{
       if(error){
           callback('Unable to connect to weather service!',undefined)
       }else if(body.error){
           callback('Unable to find location!',undefined)
       }else{
           callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipIntensity}% chance of rain. Highest temperature today of ${body.daily.data[0].temperatureHigh}. Lowest temperature today of ${body.daily.data[0].temperatureLow}`)
       }
   })
}

module.exports = forecast