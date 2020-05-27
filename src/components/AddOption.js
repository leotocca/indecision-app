import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddoption = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddoption(option);

    this.setState(() => ({ error }));

    if (!error) {
      event.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddoption}>
          <input
            className="add-option_input"
            type="text"
            name="option"
            placeholder="Submit a new option"
          ></input>
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
