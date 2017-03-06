// src/app.js
import React from "react";
import ReactDOM from "react-dom";

var TextArea = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string.isRequired,
    onChanged: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {text: ""};
  },
  render: function() {
    return (
        <textarea rows="8" cols="80" placeholder={this.props.placeholder} autoFocus="true" onChange={this.props.onChanged}>
          {this.text}
        </textarea>
    );
  }
});

var WordCountBox = React.createClass({
  getInitialState: function() {
    return {text: ""};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  render: function() {
    return (
      <div className="wordCountBox">
        <h1>Hello, React!</h1>
        <TextArea placeholder="test1" onChanged={this.handleTextChange}/>
        <TextArea placeholder="test2" onChanged={this.handleTextChange}/>
        <p>Count: {this.state.text.length}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <WordCountBox />,
  document.getElementById("content")
);
