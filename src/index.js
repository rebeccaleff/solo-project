import React from "react";
import ReactDOM from "react-dom";
import View from './client/components/View.js';


class App extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler() {
      console.log('Send');
      //this.setState = text input
      fetch('http://localhost:3000/api')
      .then(function(res) {
          return res.json();
      })
      .catch((err) => {
          throw err;
      });
        // when called with a click, then fetch request to localhost at specified route
        // on server side, listen to the specific route 
    }

    render() {
        return (
            <div className="yes">
              <div className="header">
                <h1>Add an email template!</h1>
                  <input type="text"  />
              </div>
              <button onClick={this.eventHandler}>Submit</button>
              < View />
            </div>    
        );
    }
}




ReactDOM.render(<App />, document.getElementById("index"));
