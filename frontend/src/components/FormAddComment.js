import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid/v1";

class FormAddComment extends Component {
  state = {
    body: '',
    author: '',
  };

  handleBodyChange = e => this.setState({ body: e.target.value });

  handleAuthorChange = e => this.setState({ author: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { handleSubmit, postId } = this.props;
    const { body, author } = this.state;
    this.setState({ body: '', author: '' });
    handleSubmit({
      ...{ body, author },
      ...{
        id: uuid(),
        timestamp: Date.now(),
        parentId: postId,
      }
    });
  };

  render () {
    const { handleCancel } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>Novo Comentário</h3>
          <div>
            <textarea
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder='Autor'
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </div>
          <div className="buttons">
            <button onClick={() => handleCancel(false) }>CANCELAR</button>
            <button
              type="submit"
              disabled={this.state.body === '' || this.state.author === '' ? true : false}>
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormAddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default FormAddComment;
