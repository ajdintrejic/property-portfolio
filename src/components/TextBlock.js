import React, { Component } from 'react';
import './TextBlock.css';

export default class TextBlock extends Component {
  render() {
    return (
      <div className="ui grid paddingTop paddingBottom">
        <div class="ten wide column">
          <h1 className="ui center">  Welcome to Fiji</h1>
          <p className="biggerFont paddingTop alignJustify" >Tincidunt nunc pulvinar sapien et ligula. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Urna duis convallis convallis tellus id. Mi proin sed libero enim sed faucibus turpis in. Tortor consequat id porta nibh venenatis. Lobortis elementum nibh tellus molestie nunc non blandit massa.</p>
        </div>
        <div className="six wide column address paddingTop">
          <p>Naviyago, Fiji </p>
          <p>Fiji rd. 12</p>
          <p>12345</p>
        </div>
      </div>
    )
  }
}