import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    borderBottom: `1px solid ${COLORS.black}`,
    fontSize: 14 / 16,
    iconSize: 16,
  },
  large: {
    height: 36,
    borderBottom: `2px solid ${COLORS.black}`,
    fontSize: 18 / 16,
    iconSize: 24,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknow size passed to IconInput: ${size}`);
  }

  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{ '--icon-size': styles.iconSize + 'px' }}>
      <Icon id={icon} strokeWidth={1} size={styles.iconSize}/>
    </IconWrapper>
    <TextInput style={{ 
      '--height': styles.height + 'px',
      '--border-bottom': styles.borderBottom,
      '--padding-left': styles.paddingLeft + 'px',
      '--width': width + 'px',
      '--font-size': styles.fontSize + 'rem',
      }}
      {...delegated}
    />
  </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  width: var(--icon-size);
  height: var(--icon-size);
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border-bottom);
  padding-left: var(--height);
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
