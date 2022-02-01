import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
  height: 74px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 500;
  color: #fff;

  & span {
    color: var(--light-color);
  }
`
function Header() {
  return (
    <div>
        <StyledHeader>YouTube to&nbsp;<span>WAV</span></StyledHeader>
    </div>
  )
}

export default Header;
