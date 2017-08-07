import React, { Component } from 'react'

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {
    if (this.props.inline){
    CKEDITOR.inline(this.props.ckid, {
      customConfig: '/js/itemBodyConfig.js'
    })}
    else {
         CKEDITOR.replace(this.props.ckid, {
      customConfig: '/js/itemBodyConfig.js'
    })}
  }

  render() {
    return (
      <textarea id={this.props.ckid} cols="20" rows="2" ></textarea>
    )
  }
}

