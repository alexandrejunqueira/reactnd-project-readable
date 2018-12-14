import React from 'react';
import PropTypes from 'prop-types';

const PostListSorter = ({ handler, value, disabled }) => (
  <select value={value} onChange={(e) => handler(e.target.value)} disabled={disabled}>
    <option value="title">Ordenado por título</option>
    <option value="-voteScore">Ordenado por pontuação</option>
  </select>
);

PostListSorter.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PostListSorter;
