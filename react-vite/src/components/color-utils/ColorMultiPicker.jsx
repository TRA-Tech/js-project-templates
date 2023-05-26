import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox } from '@mui/material';
import Icon from './Icon';

const ColorMultiPicker = ({ colors, selected, onChangeColor, sx, ...other }) => (
  <Box sx={sx}>
    {colors.map(color => {
      const whiteColor = color === '#FFFFFF' || color === 'white';

      return (
        <Checkbox
          key={color}
          size="small"
          value={color}
          color="default"
          checked={selected.includes(color)}
          onChange={() => onChangeColor(color)}
          icon={<Icon whiteColor={whiteColor} />}
          checkedIcon={<Icon checked whiteColor={whiteColor} />}
          sx={{
            color,
            '&:hover': { opacity: 0.72 },
            '& svg': { width: 12, height: 12 },
          }}
          {...other}
        />
      );
    })}
  </Box>
);

ColorMultiPicker.propTypes = {
  sx: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorMultiPicker;
