import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return (
    <div>
      <StyledInput type="text" {...props}/>
    </div>
  )
}

const StyledInput = styled.input`
  padding: 16px;
  background: transparent;
  outline: none;
  border: 2px solid #fff;
  color: #fff;
  font-size: 16px;

  &::placeholder {
    font-family: "Segoe UI";
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default Input;
