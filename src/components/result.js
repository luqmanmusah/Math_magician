import React from 'react';
import { render } from 'react-dom';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         result: ""
    };

    render() => {
        return (
            <div className="result">
              <p>{result}</p>
            </div>
          );
    }
  }
}

export default Result;
