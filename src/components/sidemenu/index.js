import React, { Component } from "react";
import { GridContext } from "../app";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProperty = this.addProperty.bind(this);
    this.mapperfunction = this.mapperfunction.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleInputChange = (e, data) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name.indexOf("input") > -1) {
      this.context.updateObject(data, e.target.value);
    } else {
      this.context.addObjectName(data, e.target.value);
    }
  };

  addProperty = () => {
    if (this.state.input.length > 0) {
      const date = new Date();
      const obj = {
        displayName: this.state.input,
        guid: date.getTime()
      };
      this.context.setNewProperty(obj);
      this.setState({
        input: ""
      });
    }
  };

  mapperfunction = () => {
    let values = this.context.json;
    const test = values.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <button
            className='btn btn-light btn-block mt-1'
            type='button'
            data-toggle='collapse'
            data-target={`#item-${item.guid}`}
            aria-expanded='false'
            aria-controls={`item-${item.guid}`}
          >
            {item.displayName}
          </button>
          <div className='collapse' id={`item-${item.guid}`}>
            <div className='card card-body'>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Display Name</label>
                <input
                  type='text'
                  className='form-control'
                  id={`inputOne${item.guid}`}
                  placeholder='enter name for object'
                  name={`input${item.guid}`}
                  onChange={e => this.handleInputChange(e, item.guid)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id={`inputOne${item.guid}`}
                  placeholder='enter name for object'
                  name={`name${item.guid}`}
                  onChange={e => this.handleInputChange(e, item.guid)}
                />
              </div>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id={`checked${item.guid}`}
                  defaultChecked={false}
                  onChange={e => this.context.updateCheckBox(e, item.guid)}
                />
                <label
                  className='form-check-label'
                  htmlFor={`checked${item.guid}`}
                >
                  filterable
                </label>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
    return test;
  };

  render() {
    return (
      <GridContext.Consumer>
        {props => (
          <div>
            <div className='form-group d-flex'>
              <input
                type='text'
                className='form-control'
                id='objectinput'
                aria-describedby='objectgenerator'
                placeholder='enter display name of grid object'
                value={this.state.input}
                onChange={this.handleChange}
              />
              <button
                type='button'
                className='btn btn-dark'
                onClick={() => this.addProperty()}
              >
                Add
              </button>
            </div>
            <div className='mt-3 button-container'>{this.mapperfunction()}</div>
          </div>
        )}
      </GridContext.Consumer>
    );
  }
}

SideMenu.contextType = GridContext;

export default SideMenu;
