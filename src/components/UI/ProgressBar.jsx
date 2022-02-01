import React from 'react';
import styled from 'styled-components';

function ProgressBar() {
  return (
    <Wrapper>
      {/*TODO: Implement progress bar that decrease animation speed until request isn't done*/}
      {/*NOTE: https://github.com/42BV/react-fetch-progressbar/blob/master/src/index.tsx*/}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 315px;
  height: 22px;
  background: var(--dark-color);
`;

export default ProgressBar;
