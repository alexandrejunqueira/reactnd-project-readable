import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormEditComment extends Component {
  state = {
    body: '',
  };

  componentDidMount () {
    const { comment } = this.props;
    this.setState({
      body: comment.body,
    });
  };

  handleBodyChange = e => this.setState({ body: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { handleSubmit, comment } = this.props;
    const { body } = this.state;
    handleSubmit(comment.id, body, Date.now());
  };

  handleCancel = () => {
    const { handleCancel } = this.props;
    handleCancel(null);
  };

  render () {
    const { body } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>Editar comentário</h3>
          <div>
            <textarea onChange={this.handleBodyChange} value={body} cols="30" rows="10"/>
          </div>
          <div className="buttons">
            <button onClick={this.handleCancel}>CANCELAR</button>
            <button type="submit" disabled={body === ''}>ENVIAR</button>
          </div>
        </form>
      </div>
    );
  }
}

FormEditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default FormEditComment;
