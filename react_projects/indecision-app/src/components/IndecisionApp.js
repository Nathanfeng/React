import React from 'react'
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: []}))
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(el => el !== option)
    }));
  };

  handleSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  handlePick = () => {
    let options = this.state.options
    let pick = options[Math.floor(Math.random() * options.length)];
    this.setState(() => ({
      selectedOption: pick
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid input';
    } else if (this.state.options.indexOf(option) > -1) {
      return "already entered";
    }

    this.setState((prevState)=> ({
      options: prevState.options.concat(option)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      //do nothing
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle}/>
      <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
        <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        </div>
        <OptionModal
         selectedOption={this.state.selectedOption }
         handleSelectedOption= {this.handleSelectedOption}
        />
      </div>
    );
  }
};

export default IndecisionApp;
