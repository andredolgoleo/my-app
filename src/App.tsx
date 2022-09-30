import React, { useEffect, useState } from "react";
import { getCountryCoords } from './api/api'
import { Header } from './components/Header'

export const App: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState(null);

  async function loadData() {
    const a = await getCountryCoords('kropyvnytskyi');

    setCurrentCountry(a[0]);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    currentCountry && <Header currentCountry={currentCountry} />
  );
}
