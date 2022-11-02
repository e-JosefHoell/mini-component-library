/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  "large": {
    height: 24,
    padding: 4,
    "border-radius": 8
  },
  "medium": {
    height: 12,
    padding: 0,
    "border-radius": 4
  },
  "small": {
    height: 8,
    padding: 0,
    "border-radius": 4
  }
};

const ProgressBar = ({ value, size }) => {
  const sanValue = Math.max(0, Math.min(100, value));
  const innerRadius = SIZES[size]["border-radius"]-SIZES[size]["padding"];
  return ( 
    <Wrapper size={size} role="progressbar" aria-valuenow={sanValue}>
      <InnerWrapper style={{"--radius": innerRadius+"px"}}>
        <Bar size={size} value={sanValue}></Bar>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  height: ${props => SIZES[props.size].height+"px"};
  padding: ${props => SIZES[props.size].padding+"px"};
  border-radius: ${props => SIZES[props.size]["border-radius"]+"px"};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  overflow: hidden;

`;
const Bar = styled.div`
  width: ${props => props.value + "%"};
  height: 100%;
  background-color: ${COLORS.primary};

`;