import React from 'react';
import styled from 'styled-components';

function Button({children, ...props}) {
  return (
    <div>
        <StyledButton {...props}>{children}</StyledButton>
    </div>
  )
}

const StyledButton = styled.button`
  padding: 16px 80px;
  background: var(--light-color);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Button;
