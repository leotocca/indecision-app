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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddoption}>
          <input
            type="text"
            name="option"
            placeholder="Submit a new option"
          ></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
