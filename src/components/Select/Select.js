import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  border: none;
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  padding: 12px;
  border-radius: 8px;
  width: min-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
