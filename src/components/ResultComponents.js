import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    render = (result) => (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default Result;
