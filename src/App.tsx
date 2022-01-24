import React from 'react';
import { useState, useEffect } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

import moment from 'moment';

function App() {
  const [localTime, setLocalTime] = useState<string | undefined>(undefined);
  const [localDay, setLocalDay] = useState<string | undefined>(undefined);
  const [localTimeZone, setLocalTimeZone] = useState<string | undefined>(
    undefined
  );

  const [localNyc, setLocalNyc] = useState<string | undefined>(undefined);
  const [localChicago, setLocalChicago] = useState<string | undefined>(
    undefined
  );
  const [localDenver, setLocalDenver] = useState<string | undefined>(undefined);
  const [localLosAngeles, setLocalLosAngeles] = useState<string | undefined>(
    undefined
  );
  const [localTimeParis, setLocalTimeParis] = useState<string | undefined>(
    undefined
  );
  const [localTimeShanghai, setLocalTimeShanghai] = useState<
    string | undefined
  >(undefined);
  const [localTimeTokyo, setLocalTimeTokyo] = useState<string | undefined>(
    undefined
  );

  const getLocalTime = () => {
    setLocalDay(moment().format('dddd'));
    setLocalTime(moment().format('LTS'));
    setLocalTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    const date = new Date();

    setLocalNyc(
      formatInTimeZone(date, 'America/New_York', 'HH:mm:ss dd-MM-yyyy zzz XXX')
    );
    setLocalChicago(
      formatInTimeZone(date, 'America/Chicago', 'HH:mm:ss dd-MM-yyyy zzz XXX')
    );
    setLocalDenver(
      formatInTimeZone(date, 'America/Denver', 'HH:mm:ss dd-MM-yyyy zzz XXX')
    );
    setLocalLosAngeles(
      formatInTimeZone(
        date,
        'America/Los_Angeles',
        'HH:mm:ss XXX'
        // 'dd-MM-yyyy',
        // 'zzz XXX'
      )
    );
    setLocalTimeParis(
      formatInTimeZone(date, 'Europe/Paris', 'HH:mm:ss dd-MM-yyyy zzz XXX')
    );
    setLocalTimeShanghai(
      formatInTimeZone(date, 'Asia/Shanghai', 'HH:mm:ss dd-MM-yyyy zzz XXX')
    );
    setLocalTimeTokyo(
      formatInTimeZone(date, 'Asia/Tokyo', 'HH:mm:ss dd-MM-yyyy zzz XXX')
    );
  };

  useEffect(() => {
    setInterval(getLocalTime, 1000);
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>Time Converter</h1>
      </header>
      <article>
        <h3>How this app was made</h3>
        <p>Thi app is built using React, TypeScript and Moment.js</p>
      </article>
      <hr />
      <section className="clocks-container">
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
      </section>
      <hr />
      <footer>
        <ul>
          <li>
            <a>GitHub</a>
          </li>
          <li>
            <a>LinkedIn</a>
          </li>
        </ul>
        <p>Made by Clem &copy;</p>
      </footer>
    </>
  );
}

export default App;
