import PropTypes from 'prop-types';
import { Box, Card, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import numeral from 'numeral';
import Label from '../../../components/label/Label';
import { ColorPreview } from '../../../components/color-utils';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const ShopProductCard = ({ product }) => {
  const { name, cover, price, colors, status, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Button color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Button>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && numeral(priceSale).format('$0,0.00')}
            </Typography>
            &nbsp;
            {numeral(price).format('$0,0.00')}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

ShopProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShopProductCard;
