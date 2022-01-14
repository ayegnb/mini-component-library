/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderRadius: 4,
    height: 8,
    padding: 0,
  },
  medium: {
    borderRadius: 4,
    height: 12,
    padding: 0,
  },
  large: {
    borderRadius: 8,
    height: 24,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknow size passed to ProgressBar: ${size}`);
  }
  return (
  <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{
    '--padding': styles.padding + 'px',
    '--border-radius': styles.borderRadius + 'px',
  }}>
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
      <Bar style={{ 
        '--width': value + '%',
        '--height': styles.height + 'px',
      }} />
    </BarWrapper>
  </Wrapper>);
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: var(--border-radius);
  /* trim off corners when the progress bar is near-full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: var(--border-radius) 0 0 var(--border-radius);
`;

export default ProgressBar;
