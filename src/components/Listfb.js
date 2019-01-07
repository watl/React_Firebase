import React, { Component } from 'react';
import firebase from '../data/Firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



class Listfb extends Component {
    
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('markets');
    this.unsubscribe = null;
    this.state = {
      markets: []
    };

  }

  onCollectionUpdate = (querySnapshot) => {
    const markets = [];
    querySnapshot.forEach((doc) => {
      const { nombre, apellido, cedula, telefono } = doc.data();
      markets.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nombre,
        apellido,
        cedula,
        telefono,
      });
    });
    this.setState({
      markets
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
         
   return (
    <div className="container">
      
      <div className="card shadow">
        <div className="card-header text-white bg-success mb-3">
          Historial
        </div>
         <div className="card-body">
            <table className="table table-stripe table-dark">
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>apellido</th>
                              <th>Telefono</th>
                              <th>Cedula</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.markets.map(dt =>
                              <tr>
                                <td>{dt.nombre}</td>
                                <td>{dt.apellido}</td>
                                <td>{dt.telefono}</td>
                              <td>{dt.cedula}</td>

                              </tr>
                            )}
                          </tbody>
                        </table>
         </div>
      </div>
           
   </div>


    );
  }
}

export default Listfb;