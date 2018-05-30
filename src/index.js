import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler() {
      console.log('I was clicked');
        // when called with a click, then fetch request to localhost at specified route
        // on server side, listen to the specific route 
    }

    render() {
        return (
            <div className="yes">
              <div className="header">
                Hello {this.props.name}
              </div>
              <button onClick={this.eventHandler}>Click</button>
            </div>    
        );
    }
}

ReactDOM.render(<App name='Joanna'/> , document.getElementById("index"));

// add script to start server



