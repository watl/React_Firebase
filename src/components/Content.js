import React, { Component } from 'react';
import firebase from '../data/Firebase';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MarketIcon from '@material-ui/icons/ShoppingCartTwoTone';



class Content extends Component {

  constructor(){
    super();
    this.ref=firebase.firestore().collection('markets');
    this.state = {
      nombre:'',
      apellido:'',
      cedula:'',
      telefono:''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
     const {nombre,apellido,cedula,telefono} = this.state;

    this.ref.add({
      nombre,
      apellido,
      cedula,
      telefono
    }).then((docRef) => {
      this.setState({
        nombre: '',
        apellido: '',
        cedula: '',
        telefono:''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}


   
  render(){
    const {nombre,apellido,cedula,telefono} = this.state;
   return (
    <div className="container">
      
    <div className="card shadow">
      <div className="card-header text-white bg-success mb-3">
        Registro
      </div>
       <div className="card-body">
       <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" name="nombre" value={nombre} placeholder="nombre" onChange={this.onChange} required/>
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input type="text" className="form-control" name="apellido" placeholder="Apellido" value={apellido} onChange={this.onChange} required/>
              </div>
              <div className="form-group">
                <label>Cedula</label>
                <input type="text" className="form-control" name="cedula" value={cedula} placeholder="Cedula" onChange={this.onChange} required/>
              </div>
              <div className="form-group">
                <label>Telefono</label>
                <input type="text" className="form-control" name="telefono" value={telefono}  placeholder="Telefono" onChange={this.onChange} required/>
              </div>

              <button type="submit" className="btn btn-success">Submit</button>
        </form>

       </div>
    </div>
         
 </div>
  );
 }

}

// Content.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Content;