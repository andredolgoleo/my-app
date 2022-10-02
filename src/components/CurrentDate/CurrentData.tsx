import React, { useState } from 'react';
import './CurrentTime.scss';

const currentDate = new Date().toLocaleDateString().split('.');
const currentTime1 = new Date().toLocaleTimeString().split(':');


export const CurrentData: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString().split(':'));

  setTimeout(() => {
    if (currentTime[2] !== new Date().toLocaleTimeString().split(':')[2]) {
      setCurrentTime(new Date().toLocaleTimeString().split(':'))
    }
  }, 1000)

  return (
    <section className="currentTime">
      <article>{currentDate[0]}\{currentDate[1]}\{currentDate[2]}</article>
      <article>{currentTime[0]}:{currentTime[1]}:{currentTime[2]}</article>
    </section>
  );
}