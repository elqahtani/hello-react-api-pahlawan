import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BackgroundPahlawan from './img/pahlawan.png'


import Header from './Header';
import TablePahlawan from './Table';



class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className="container">

         <div className="card">
         <img src={BackgroundPahlawan} alt="Card image" className="BackgroundPahlawan" />
          </div>



        <TablePahlawan />


        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>

      <div className="footer">
          <footer> Copyright &copy; Al-Fatih Code &copy; 2017</footer>
      </div>

     </div> 
    </div>



    );
  }
}

export default App;
