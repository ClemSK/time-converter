import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import { DateTime } from 'luxon';

function App() {
  const [localTime, setLocalTime] = useState('');
  const [localDay, setLocalDay] = useState('');
  const [localTimeZone, setLocalTimeZone] = useState('');

  const [localNyc, setLocalNyc] = useState('');
  const [localTimeParis, setLocalTimeParis] = useState('');
  const [localTimeShanghai, setLocalTimeShanghai] = useState('');
  const [localTimeTokyo, setLocalTimeTokyo] = useState('');

  const getLocalTime = () => {
    setLocalDay(moment().format('dddd'));
    setLocalTime(moment().format('LTS'));
    setLocalTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    const nyc = new DateTime.local().setZone('America/New_York');
    const paris = new DateTime.local().setZone('Europe/Paris');
    const shanghai = new DateTime.local().setZone('Asia/Shanghai');
    const tokyo = new DateTime.local().setZone('Asia/Tokyo');

    setLocalNyc(
      nyc.toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
      })
    );
    setLocalTimeParis(
      paris.toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
      })
    );
    setLocalTimeShanghai(
      shanghai.toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
      })
    );
    setLocalTimeTokyo(
      tokyo.toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
      })
    );
  };

  //   ? how to compare UTC to the local time

  //  TODO 5 different locations to display, show the difference between them and GMT dynamically

  //   TODO 5 simultaneous dynamic clocks

  //  ? calculate difference between each clock

  useEffect(() => {
    setInterval(getLocalTime, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Time Converter</h1>
      <div>Local Time is: {localTime}</div>
      <div>Time in NYC: {localNyc}</div>
      <div>Time in Paris: {localTimeParis}</div>
      <div>Time in Shanghai: {localTimeShanghai}</div>
      <div>Time in Tokyo: {localTimeTokyo}</div>
    </div>
  );
}

export default App;
