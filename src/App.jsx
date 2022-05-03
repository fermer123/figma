import React from 'react';
import style from './App.module.scss';
import Benefits from './benefits/benefits';
import Header from './header/header';
import Main from './main/main';
import Places from './places/places';
import Top from './top/top';
import Tour from './tour/tour';
import Video from './video/video';

const App = () => {
  return (
    <div className={style.App_wrapper}>
      <Header />
      <Main />
      <Benefits />
      <Places />
      <Tour />
      <Top />
      <Video />
    </div>
  );
};

export default App;
