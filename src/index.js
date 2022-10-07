import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Cards from "./Card"
import Top from "./Top"
import Data from "./Data"
import Bottom from "./Bottom"
import css from "./dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';

function App(){
  let school = Data.map(item=> {
    return(
      <Cards 
      key={item.id}
      schoolImg={item.schoolImg}
      schoolName={item.schoolName}
      aboutSchool={item.aboutSchool}
      />
    )
  })
  return(
    <div>
      <Header />
      <Top />
      {school}
      
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


