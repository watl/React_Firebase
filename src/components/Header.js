import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';

const styles = theme => ({
  container: {
    display:'Flex',
    flexwrap:'wrap',
  },
  textField:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit, 
  },
  dense:{
      marginTop: 19,
  },
  menu:{
      width:200,
  },
});

class Header extends Component {
  render() {
    return (
  
        <div className="">
         <TextField 
         id="txt1"
         label="Bombero"
         style= {{ margin: 8,width:300 }}
         placeholder="Ingrese nombre del Bombero"
         margin="normal"
         InputLabelProps={{
             shrink:true,
         }}
         />
         
        </div>
 

  

    );
  }
}

export default Header;