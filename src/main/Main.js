import React from 'react';
import FirstSection from './firstSection/FirstSection';
import SecondSection from './secondSection/SecondSection';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__row">
          <FirstSection />
          <SecondSection />
        </div>
      </div>
    </main>
  );
};

export default Main;
