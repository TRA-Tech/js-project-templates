import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@mui/material';
import React from 'react';

const BlogPostsSort = ({ options, onSort }) => (
  <TextField select size="small" value="latest" onChange={onSort}>
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

BlogPostsSort.propTypes = {
  options: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default BlogPostsSort;
