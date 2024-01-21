import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const WeatherComponent: React.FC = () => {
  const [weather, setWeather] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    //for one host
    //axios<string>(`/weatherforecast`)
    axios<string>(`${process.env.REACT_APP_BACK_URL}/weatherforecast`)
    .then(res =>{
      console.log(res.data)
      var castedData = res.data as unknown as WeatherForecast[];
      if(castedData != null)
        setWeather(castedData)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Client working!</h1>
      <table className="fixed">
                    <thead>
                    <tr>
                        <td>Сообщение</td>
                        <td>Дата и время (БД Сервер)</td>
                        <td>Дата и время (ПЛК)</td>
                    </tr>
                    </thead>
                    <tbody>
                    {weather?.map((el: WeatherForecast) => {
                        return (
                            <tr>
                                <td>{new Date(el.date).toDateString()}</td>
                                <td>{el.summary}</td>
                                <td>{el.temperatureC}</td>
                                <td>{el.temperatureF}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
    </div>
  );
};

export default WeatherComponent;
