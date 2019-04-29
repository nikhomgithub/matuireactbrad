import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    
    render() {
    

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h1>Thanks</h1>
                    <p>Get Email for further instruction</p>

                </React.Fragment>
            </MuiThemeProvider>
        );
  }
}


export default Success;
