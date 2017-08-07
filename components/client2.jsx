import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var CKEditor = require('react-ckeditor-wrapper');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'content',
    }
  }

  updateContent(value) {
    this.setState({ content: value })
  }

  render() {
    return (<CKEditor
      value={this.state.content}
      onChange={this.updateContent.bind(this)}
      //
      //config={ {mathJaxLib : '/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML3'}}/>)
      config= {{customConfig:'/js/itemBodyConfig.js'}}
    />)
  }
}

ReactDOM.render(<App />, document.getElementById('div1'));
ReactDOM.render(<App />, document.getElementById('div2'));