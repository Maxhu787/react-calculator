import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


class ControlledInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  reset() {
    this.setState(state => ({
      count: 0
    }))
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
reportWebVitals();