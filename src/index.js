import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div className="yes">
              <div className="header">
                Hello {this.props.name}
              </div>
            </div>    
        );
    }
}

ReactDOM.render(<App name='Joanna'/>, document.getElementById("index"));

// add script to start server
