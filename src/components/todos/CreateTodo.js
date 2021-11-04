import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
          <input type="text" 
          placeholder="add todo"
           onChange={(event) => this.handleChange(event)}
          value={this.state.text}
           />  
          <input type="submit" />
          </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
