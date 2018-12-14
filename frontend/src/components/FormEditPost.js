import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormEditPost extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount () {
    const { post } = this.props;
    this.setState({
      title: post.title,
      body: post.body,
    });
  };

  handleTitleChange = e => this.setState({ title: e.target.value });

  handleBodyChange = e => this.setState({ body: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { title, body } = this.state;
    handleSubmit({ title, body });
  };

  render () {
    const { title, body } = this.state;
    const { handleCancel } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>Editar post</h3>
          <div>
            <input
              type="text"
              value={title}
              placeholder='Título'
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              value={body}
              onChange={this.handleBodyChange}
            />
          </div>
          <div className="buttons">
            <button onClick={() => handleCancel(false)}>CANCELAR</button>
            <button
              type="submit"
              disabled={this.state.title === '' || this.state.body === '' ? true : false}>
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormEditPost.propTypes = {
  post: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default FormEditPost;
