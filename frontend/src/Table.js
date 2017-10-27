import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 

 

export default class TablePahlawan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {pahlawan: []};
  }

  componentDidMount() {
    this.TablePahlawan();
  }

  TablePahlawan() {
    $.getJSON('http://localhost:8080/api/pahlawan')
      .then(({ results }) => this.setState({ results }));
  }

  render() {
    const pahlawans = this.state.pahlawan.map((item) => (
      <div>
        <tr>
          <td>{ item.name }</td>
          <td>{ item.area }</td>
          <td>{ item.die } </td>
          <td>{ item.senjata } </td>
        </tr>
      </div>
    ));

    return (
      <div id="app-table-body">
        <div className="app-table-body">{ pahlawans }</div>
      </div>
    );
  }
}