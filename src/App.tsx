import React, { useEffect, useState } from "react";
import { getCountryCoords } from './api/api';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Loader } from "./components/Loader";
// import { Battery } from "./Battery/Battery";

import './main.scss';

export const App: React.FC = () => {
  const [currentIp, setCurrentIp] = useState<any>(null);
  const [value, setValue] = useState('');


  async function loadData() {
    const ip = await fetch('https://api.sypexgeo.net/').then(res => res.json()).then(res => res);

    setCurrentIp(ip)
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      {currentIp ? (localStorage.getItem('name') ? (
        currentIp
          ? (
            <>
              <Header userName={localStorage.getItem('name') || ''} />
              <Main currentIp={currentIp} />
            </>
          )
          : (<Loader />)
      ) : (
        <>
          <h1>Hello! Enter your name!</h1>
          <form
            onSubmit={event => {
              event.preventDefault();
              localStorage.setItem('name', value);
              setValue('')
            }}
            action="">
            <input type="text" value={value} onInput={((event: any) => setValue(event.target.value))} />
            <button>Click</button>
          </form>
        </>
      )) : (<Loader />)
}
    </>
  );
}
