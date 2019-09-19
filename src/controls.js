import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Controls extends Component {
  state = {
    title: "",
    body: ""
  };

  recordInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Material Ideabox</h1>
        <TextField
          variant="outlined"
          placeholder="..."
          label="Title"
          name="title"
          onChange={this.recordInput}
        />
        <TextField
          multiline
          variant="outlined"
          placeholder="..."
          label="Body"
          name="body"
          onChange={this.recordInput}
        />
        <div>
          <Button variant="contained" size="small">
            Save
          </Button>
        </div>
      </div>
    );
  }
}
