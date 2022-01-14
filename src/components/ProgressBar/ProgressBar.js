/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      '--border-radius': 4 + 'px',
      '--height': 8 + 'px',
    },
    medium: {
      '--border-radius': 4 + 'px',
      '--height': 12 + 'px',
    },
    large: {
      '--border-radius': 8 + 'px',
      '--height': 24 + 'px',
    },
  };

  return (
  <>
    <VisuallyHidden>
      <span>
        Progress bar
      </span>
    </VisuallyHidden>
    <Wrapper style={SIZES[size]}>
        <Progress role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" />
    </Wrapper>
  </>);
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
`;

const Progress = styled.div`
  width: ${props => props["aria-valuenow"] + '%'};
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: ${props => props["aria-valuenow"] === '100' ? 'var(--border-radius)' : 'var(--border-radius) 0 0 var(--border-radius)'};
`;

export default ProgressBar;
