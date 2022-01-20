import React from 'react';
import { useState, useEffect } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

import moment from 'moment';

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

    const date = new Date();

    setLocalNyc(
      formatInTimeZone(date, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz XXX')
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
      <div className="clocks-container">
        <header className="App-header">
          <h1>Time Converter</h1>
        </header>
        <div>
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
            <div>{localTimeShanghai}</div>
            Shanghai
          </div>
          <div>
            <div>{localTimeTokyo}</div>
            Tokyo
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
