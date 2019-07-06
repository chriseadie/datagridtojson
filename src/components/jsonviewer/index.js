import React, { Component } from "react";
import { GridContext } from "../app";
import "./style.css";

class JsonViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GridContext.Consumer>
        {props => (
          <div className='p-3 jsoncontainer'>
            <pre>{JSON.stringify(props.json, null, 3)}</pre>
          </div>
        )}
      </GridContext.Consumer>
    );
  }
}
export default JsonViewer;
