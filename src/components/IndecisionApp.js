import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleAddoption = (option) => {
    if (!option) {
      return "Enter a valid option";
    }
    if (this.state.options.includes(option)) {
      return "The option already exists on the list";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handeDeleteOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((element) => element !== option),
      };
    });
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  componentWillUnmount() {
    localStorage.setItem("options", JSON.stringify(this.state.options));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0 ? true : false}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handeDeleteOption={this.handeDeleteOption}
        />
        <AddOption handleAddoption={this.handleAddoption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
