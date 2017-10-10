import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      validPoem: false
    };
  }

  poemChecker(text) {
    let lines = text.split(`\n`);
    if (
      lines.length === 3 &&
      lines[0].trim().split(" ").length === 5 &&
      lines[1].trim().split(" ").length === 3 &&
      lines[2].trim().split(" ").length === 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  onChange = event => {
    const text = event.target.value;
    this.setState({
      text,
      validPoem: this.poemChecker(text)
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.onChange}
        />

        {!this.state.validPoem && (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
