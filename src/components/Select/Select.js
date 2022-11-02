import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Selector value={value} onChange={onChange}>
        {children}
      </Selector>
      <SelectIcon id="chevron-down"/>
    </Wrapper>
    
  );
};

export default Select;

const Wrapper = styled.div`
  isolation: isolate;
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
  `;

const Selector = styled.select`
  
  
  width: fit-content;
  appearance: none;
  padding: 12px;
  padding-right: 48px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border-style: none;
  font-size: 1rem;
  color: inherit;
  `;

  const SelectIcon = styled(Icon)`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 12px;
    height: 24px;
    margin: auto;
    z-index: -1;
  `;