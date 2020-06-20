import React, { Component, Fragment } from 'react';
import Warning from './Warning';

class App extends Component{
  state = {
    warning: false
  }

  showWarning = () => {
    this.setState({
      warning: true
    })
  }

  render(){
    const { warning } = this.state;
    return (
      <Fragment>
        { 
          warning ? <Warning/> : null
        }
        <button data-testid="warning-button" onClick={this.showWarning}>Show Warning</button>
      </Fragment>
    )
  }
}

export default App;