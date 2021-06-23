import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import BackgroundLines from './BackgroundLines';
import Header from './Header';

function Layout(props) {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [lightMode]);

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add('light');
    } else {
      setLightMode(false);
      document.body.classList.remove('light');
    }
  };
  return (
    <div className="mi-wrapper">
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          type="button"
          className={
            lightMode ? 'light-mode-switch active' : 'light-mode-switch'
          }
          onClick={() => handleMode()}
        />
      </div>
      <BackgroundLines />
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
