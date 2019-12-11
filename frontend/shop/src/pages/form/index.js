import propTypes from 'prop-types'
import React from 'react'

import { Formik, Form as FormikForm, Field } from 'formik'

import './styles.css'

const Form = ({ handleSubmit, initialValues }) => (
  <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
    { () => {
      <div className="edit-cadastro container">
        <h4 className="center-align">Edição de Formulário</h4>
        <FormikForm className="Form">
          <div className="row">
            <div className="input-field col s8 offset-s2" >
              <Field type="text" name="name"  />
              <label>Título</label>
            </div>
            <div className="input-field col s8 offset-s2" placeholder="Descrição" required>
              <Field type="text" name="job" />
              <label>Descrição</label>
            </div>
            <div className="input-field col s8 offset-s2" required>
              <Field type="text" name="color" />
              <label>Valor</label>
            </div>
            <div className="col s12 offset-s6">
              <button className="waves-effect waves-light orange darken-4 btn" type="submit">Salvar</button>            
            </div>
          </div>
        </FormikForm>
      </div>
    } }
  </Formik>
)

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  initialValues: propTypes.object.isRequired
}

export default Form;