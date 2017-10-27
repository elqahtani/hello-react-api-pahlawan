import React from 'react';
import {componentWillAppendToBody} from "react-append-to-body"

export default class PahlawanList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {pahlawan: []};
  }

  componentDidMount() {
    this.PahlawanList();
  }

  PahlawanList() {
    $.getJSON('http://localhost:8080/api/pahlawan')
      .then(({ results }) => this.setState({ pahlawan: results }));
  }

  render() {
    const pahlawans = this.state.pahlawan.map((item, i) => (
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
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ pahlawans }</div>
      </div>
    );
  }
}