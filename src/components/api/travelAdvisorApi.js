/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
         'x-rapidapi-key': 'd2f6c9d2b4msh997e71489cf8b4ap12bf2fjsna598545633a0',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getWeatherData = async (lat, lng) => {
  try {
  

    if (lat && lng) {
      const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`, {
        
        headers: {
           'x-rapidapi-key': 'd2f6c9d2b4msh997e71489cf8b4ap12bf2fjsna598545633a0',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        },
      });
      console.log(data);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};


