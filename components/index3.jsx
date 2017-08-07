import React from 'react'
import ReactDOM from 'react-dom'
import Editor from './Editor.jsx'
ReactDOM.render(<Editor ckid="first" inline="true" />, document.getElementById('div1'));
ReactDOM.render(<Editor ckid="second" />, document.getElementById('div2'));