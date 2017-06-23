var axios = require('axios');

//02d145691da8f836b16c4e7410f16e15

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=02d145691da8f836b16c4e7410f16e15&units=Metric';

module.exports ={
	getTemp : function(location)
	{
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {

			if(res.data.cod && res.data.message){
				
				throw new Error(res.data.message);
			}
			else{

				return res.data.main.temp;
			}

		}, function(res){

			throw new Error(res.data.message);

		});
	}
}