import React, { useEffect, useState } from 'react';
import { getCountryMetricData } from '../../api/api';
import { WeatherInfo } from '../WeatherInfo';
import './Main.scss'

type props2 = {
  city: any
}

type Props = {
  currentIp: props2;
}

export const Main: React.FC<Props> = ({ currentIp }) => {
  const {
    lat,
    lon,
  } = currentIp.city;

  const [currentCountryMetricData, setCurrentCountryMetricData] = useState<any>(null);

  async function loadData() {
    const metricData = await getCountryMetricData(lat, lon);

    setCurrentCountryMetricData(metricData)
  }

  useEffect(() => {
    loadData();
  }, []);

  return (<>
    <main>
      {currentCountryMetricData && (
        <div className="card">
          <h1 className='card__title'>
            {currentCountryMetricData.name}
          </h1>
          <div className='card__weather-info'>
            <WeatherInfo weatherInfo={currentCountryMetricData}/>
          </div>
        </div>)}

    </main>
  </>);
};
