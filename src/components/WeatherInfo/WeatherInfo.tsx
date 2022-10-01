import React, { useEffect, useState } from 'react';
import './WeatherInfo.scss'
import classnames from 'classnames'

type Props = {
  weatherInfo: any;
}

export const WeatherInfo: React.FC<Props> = ({ weatherInfo }) => {
  const {
    temp,
  } = weatherInfo.main;
  const [rain, setRain] = useState('');
  const [storm, setStorm] = useState('');
  const [sun, setSun] = useState('');
  const [cloud, setCloud] = useState('');

  // console.log(weatherInfo.weather[0].main.toLowerCase());

  function weather() {

    switch (weatherInfo.weather[0].main.toLowerCase()) {
      case 'clouds':
        return setCloud(weatherInfo.weather[0].main);

      case ('rain'):
        return setRain(weatherInfo.weather[0].main);

      case ('thunderstorm'):
        return setRain(weatherInfo.weather[0].main);

      default:
        return setSun(weatherInfo.weather[0].main);
    }
  }

  const sunSet = weatherInfo.sys.sunset;
  const sunSetTime = new Date(sunSet * 1000);
  const sunSetHours = sunSetTime.getHours();
  const sunSetMinutes = sunSetTime.getMinutes();

  const sunRaise = weatherInfo.sys.sunrise;
  const sunRaiseTime = new Date(sunRaise * 1000);
  const sunRaiseHours = sunRaiseTime.getHours();
  const sunRaiseMinutes = sunRaiseTime.getMinutes();
  console.log(weatherInfo);


  useEffect(() => {
    weather()
  }, [])

  return (
    <>
      <div className='weatherInfo__info'>
        <div className="weatherInfo__wrapper-main-info">
          <p className='weatherInfo__temp'>{Math.floor(temp)}&#176;C</p>
          <div
            className={classnames(
              'photo',
              {
                'rain': rain,
                'storm': storm,
                'sun': sun,
                'cloud': cloud,
              },
            )} />
        </div>
        <div className="wrapper__sunTime">
          <p className='weatherInfo__sunTime'>Sunrise: {sunSetHours}:{sunSetMinutes}</p>
          <p className='weatherInfo__sunTime'>Sunset: {sunRaiseHours}:{sunRaiseMinutes}</p>
        </div>
      </div>
    </>
  );
};