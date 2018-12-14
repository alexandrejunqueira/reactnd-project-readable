import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

class FormAddPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: '',
  };

  handleTitleChange = e => this.setState({ title: e.target.value });

  handleBodyChange = e => this.setState({ body: e.target.value });

  handleAuthorChange = e => this.setState({ author: e.target.value });

  handleCategoryChange = e => this.setState({ category: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { title, body, author, category } = this.state;
    this.setState({ title: '', body: '', author: '', category: '' });
    handleSubmit({
      ...{ title, body, author, category },
      ...{
        id: uuid(),
        timestamp: Date.now()
      }
    });
  };

  isSubmitDisabled = () => {
    const { title, body, author, category } = this.state;
    return title === '' || body === '' || author === '' || category === '';
  };

  render () {
    const { categories, handleCancel } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>Novo post</h3>
          <div>
            <input
              type="text"
              placeholder="Título"
              value={this.state.title}
              onChange={this.handleTitleChange} />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleBodyChange} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Autor"
              value={this.state.author}
              onChange={this.handleAuthorChange} />
          </div>
          <div>
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option value="">Categoria</option>
              {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <div className="buttons">
            <button onClick={() => handleCancel(false)}>CANCELAR</button>
            <button type="submit" disabled={this.isSubmitDisabled()}>ENVIAR</button>
          </div>
        </form>
      </div>
    );
  }
}

FormAddPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default FormAddPost;
