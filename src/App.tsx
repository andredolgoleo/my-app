import React, { useEffect, useState } from "react";
import { getCountryCoords } from './api/api';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Loader } from "./components/Loader";
// import { Battery } from "./Battery/Battery";

import './main.scss';
fetch('https://api.sypexgeo.net/').then(res => res.json()).then(res => console.log(res))


export const App: React.FC = () => {
  const [currentIp, setCurrentIp] = useState<any>(null);

  async function loadData() {
    const ip = await fetch('https://api.sypexgeo.net/').then(res => res.json()).then(res => res);

    setCurrentIp(ip)
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      {currentIp
        ? (
          <>
            <Header />
            <Main currentIp={currentIp} />
          </>
        )
        : (<Loader />)}

    </>
  );
}
