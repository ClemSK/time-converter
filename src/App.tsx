import React from 'react';
import { useState, useEffect } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

import moment from 'moment';

interface localTime {
  localTime: string;
}

function App() {
  const [localTime, setLocalTime] = useState('');
  const [localDay, setLocalDay] = useState('');
  const [localTimeZone, setLocalTimeZone] = useState('');

  const [localNyc, setLocalNyc] = useState('');
  const [localChicago, setLocalChicago] = useState('');
  const [localDenver, setLocalDenver] = useState('');
  const [localLosAngeles, setLocalLosAngeles] = useState('');
  const [localTimeParis, setLocalTimeParis] = useState('');
  const [localTimeShanghai, setLocalTimeShanghai] = useState('');
  const [localTimeTokyo, setLocalTimeTokyo] = useState('');

  const getLocalTime = () => {
    setLocalDay(moment().format('dddd'));
    setLocalTime(moment().format('LTS'));
    setLocalTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    const date = new Date();

    setLocalNyc(
      formatInTimeZone(date, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz XXX')
    );
    setLocalChicago(
      formatInTimeZone(date, 'America/Chicago', 'yyyy-MM-dd HH:mm:ss zzz XXX')
    );
    setLocalDenver(
      formatInTimeZone(date, 'America/Denver', 'yyyy-MM-dd HH:mm:ss zzz XXX')
    );
    setLocalLosAngeles(
      formatInTimeZone(
        date,
        'America/Los_Angeles',
        'yyyy-MM-dd HH:mm:ss zzz XXX'
      )
    );
    setLocalTimeParis(
      formatInTimeZone(date, 'Europe/Paris', 'yyyy-MM-dd HH:mm:ss zzz XXX')
    );
    setLocalTimeShanghai(
      formatInTimeZone(date, 'Asia/Shanghai', 'yyyy-MM-dd HH:mm:ss zzz XXX')
    );
    setLocalTimeTokyo(
      formatInTimeZone(date, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss zzz XXX')
    );
  };

  useEffect(() => {
    setInterval(getLocalTime, 1000);
  }, []);

  return (
    <section className="section-container">
      <div className="container">
        <header className="App-header">
          <h1>Time Converter</h1>
        </header>

        <aside>
          <h2>Other things</h2>
          <p>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est.
          </p>
        </aside>
        <div className="clocks-container">
          <div>
            <div>{localTime}</div>
            London
          </div>
          <div>
            <div>{localTimeParis}</div>
            Paris
          </div>
          <div>
            <div>{localNyc}</div>
            NYC
          </div>
          <div>
            <div>{localChicago}</div>
            Chicago
          </div>
          <div>
            <div>{localDenver}</div>
            Denver
          </div>
          <div>
            <div>{localLosAngeles}</div>
            Los Angeles
          </div>
          <div>
            <div>{localTimeShanghai}</div>
            Shanghai
          </div>
          <div>
            <div>{localTimeTokyo}</div>
            Tokyo
          </div>
        </div>
      </div>
      <footer>Link to source code</footer>
    </section>
  );
}

export default App;