import React, { Component } from 'react';

import './styles.css';
import 'materialize-css/dist/css/materialize.min.css'

class Edit extends Component {
  constructor(props){
    super(props);

    this.initialState={
      title: "",
      description: "",
      url: ""
    }
    this.state = this.initialState;
  }
  handleChange = event => {
    const { title, value } = event.target;

    this.setState({
      [title] : value
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render(){
    const { title, description , url } = this.state;
    return (
      <div className="edit-cadastro container">
        <h4 className="center-align">Edição de Formulário</h4>
        <form className="col s12" onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="input-field col s8 offset-s2" autofocus>
              <input type="text" name="name" value={title} onChange={this.handleChange}/>
              <label>Título</label>
            </div>
            <div className="input-field col s8 offset-s2" placeholder="Descrição" required>
              <input type="text" name="job" value={description} onChange={this.handleChange} />
              <label>Descrição</label>
            </div>
            <div className="input-field col s8 offset-s2" required>
              <input type="text" name="color" value={description} onChange={this.handleChange} />
              <label>Valor</label>
            </div>
            <div className="col s12 offset-s6">
              <button className="waves-effect waves-light orange darken-4 btn" type="submit">Salvar</button>            
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;