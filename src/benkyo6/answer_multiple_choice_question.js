import ReactDOM from "react-dom";

var React = require("react");
var AnswerRadioInput = require('./answer_radio_input');
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

var AnswerMultipleChoiceQuestion = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    choices: React.PropTypes.array.isRequired,
    onCompleted: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      id: uniqueId('multiple-choice-'),
      value: this.props.value
    };
  },
  handleChanged: function(value) {
    this.setState({value: value});
    this.callMethodOnProps('onCompleted', value);
  },
  renderChoices: function() {
    return this.props.choices.map(function(choice, i) {
      return AnswerRadioInput({
        id: "choice-" + i,
        name: this.state.id,
        label: choice,
        value: choice,
        checked: this.state.value === choice,
        onChanged: this.handleChanged
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div className="form-group">
        <label className="survey-item-label" htmlFor={this.state.id}>{this.props.label}</label>
        <div className="survey-item-content">
          <div>aiueo</div>
          {this.renderChoices()}
        </div>
      </div>
    );
  }
});

module.exports = AnswerMultipleChoiceQuestion;

ReactDOM.render(
  <AnswerMultipleChoiceQuestion choices={["aa"]} onCompleted={true}/>,
  document.getElementById("content")
);
