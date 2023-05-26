import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import React from 'react';
import ShopProductCard from './ProductCard';

const ProductList = ({ products, ...other }) => (
  <Grid container spacing={3} {...other}>
    {products.map(product => (
      <Grid key={product.id} item xs={12} sm={6} md={3}>
        <ShopProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
