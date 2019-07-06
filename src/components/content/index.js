import React, { Component } from "react";
import { GridContext } from "../app";
import Provider from "../app";
import Navbar from "../navbar";
import SideMenu from "../sidemenu";
import JsonViewer from "../jsonviewer";
import "../style.css";

class DataGrid extends Component {
  render() {
    return (
      <Provider>
        <GridContext.Consumer>
          {props => (
            <div className='container-fluid'>
              <Navbar />
              <div className='row gridheights'>
                <div className='col-sm-3'>
                  <SideMenu />
                </div>
                <div className='col-sm-9 pl-0'>
                  <JsonViewer />
                </div>
              </div>
            </div>
          )}
        </GridContext.Consumer>
      </Provider>
    );
  }
}
export default DataGrid;
