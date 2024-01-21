import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';

//
// interface WeatherForecast {
//   date: Date;
//   temperatureC: number;
//   summary: string;
// }

const WeatherComponent: React.FC = () => {
  useEffect(() => {
    axios<string>(`/weatherforecast`)
    .then(res =>{
      console.log(res.data)
    })
    .catch(error => console.log(error))
  }, [])
  
  return (
    <div>
      <h1>Client working!</h1>
    </div>
  );
};

export default WeatherComponent;
