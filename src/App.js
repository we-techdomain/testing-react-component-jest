import React, { Component, Fragment } from 'react';

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
          warning ? <div data-testid="warning-text">This is warning text</div> : null
        }
        <button data-testid="warning-button" onClick={this.showWarning}>Show Warning</button>
      </Fragment>
    )
  }
}

export default App;