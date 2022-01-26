/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const TextWrapper = styled('span')(
  ({ theme }) => `

      &.MuiText {

        &-black {
          color: ${theme.palette.common.black}
        }

        &-primary {
          color: ${theme.palette.primary.main}
        }

        &-secondary {
          color: ${theme.palette.secondary.main}
        }

        &-success {
          color: ${theme.palette.success.main}
        }

        &-warning {
          color: ${theme.palette.warning.main}
        }

        &-error {
          color: ${theme.palette.error.main}
        }

        &-info {
          color: ${theme.palette.info.main}
        }
      }
`
);

const Text = ({ className = '', color = 'secondary', children, ...rest }) => {
  return (
    <TextWrapper className={`MuiText-${  color}`} {...rest}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
    'info',
    'black'
  ])
};

export default Text;
