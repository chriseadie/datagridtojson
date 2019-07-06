import React, { Component } from "react";

export const GridContext = React.createContext();

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: [],
      setNewProperty: this.setNewProperty,
      updateObject: this.updateObject,
      updateCheckBox: this.updateCheckBox,
      addObjectName: this.addObjectName
    };
  }
  setNewProperty = data => {
    const arr = this.state.json;
    arr.push(data);
    this.setState({
      json: arr
    });
  };

  updateObject = (data, name) => {
    var arr = this.state.json;
    const itemToChange = arr.find(item => {
      return item.guid === data;
    });
    itemToChange.displayName = name;
    this.setState({ ...this.state, json: [...this.state.json], itemToChange });
  };

  addObjectName = (data, name) => {
    var arr = this.state.json;
    const itemToChange = arr.find(item => {
      return item.guid === data;
    });
    if (name.length > 0) {
      Object.assign(itemToChange, { name: name });
      this.setState({
        ...this.state,
        json: [...this.state.json],
        itemToChange
      });
    } else {
      delete itemToChange.name;
      this.setState({
        ...this.state,
        json: [...this.state.json],
        itemToChange
      });
    }
  };

  updateCheckBox = (e, data) => {
    var arr = this.state.json;
    const itemToChange = arr.find(item => {
      return item.guid === data;
    });
    if (e.target.checked) {
      Object.assign(itemToChange, { filterable: true });
      this.setState({
        ...this.state,
        json: [...this.state.json],
        itemToChange
      });
    } else {
      delete itemToChange.filterable;
      this.setState({
        ...this.state,
        json: [...this.state.json],
        itemToChange
      });
    }
  };

  render() {
    return (
      <>
        <GridContext.Provider value={this.state}>
          {this.props.children}
        </GridContext.Provider>
      </>
    );
  }
}
export default Provider;
