import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 150,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={{"--width": width+"px", "--border-size": size === "small" ? "1px" : "2px"}}>
      <VisuallyHidden><label for={label}>{label}</label></VisuallyHidden>
      <NativeInput size={size} placeholder={placeholder} id={label}>
      </NativeInput>
      <InputIcon id={icon} inputSize={size} size={size === "small" ? 16 : 24}/>
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  width: var(--width);
  position: relative;
  border-bottom: var(--border-size) solid black;

  &:hover { 
    color: black;
   }
  color: ${COLORS.gray500};
`;

const NativeInput = styled.input`
  
  width: 100%;
  padding: 4px;
  border: 0px solid transparent;
  border-left-width: ${props => props.size === "small" ? 24/16 : 36/16}rem;
  outline-offset: 4px;

  font-size: ${props => props.size === "small" ? 14/16 : 18/16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};

  &:hover { 
    color: black;
   }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 2px;
  left: 4px;
  margin: auto;
  height: ${props => props.inputSize === "small" ? 16/16 : 24/16}rem;
  pointer-events: none;
  color: inherit;
`;