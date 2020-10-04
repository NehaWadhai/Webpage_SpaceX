import React from 'react';
import RenderData from './components/RenderData'
import './App.css';

function App() {
//calling RenderData to retrieve data on web page
const name = "Neha Wadhai"
  return (
    <div className="list-data">
       <header className="header">SpaceX   Launch   Programs</header>
      <RenderData />
  <footer style={{textAlign:"center", fontWeight:"bold", padding:"10px"}} > Developed by : {name}</footer>
    </div>
    
  );
}

export default App;
