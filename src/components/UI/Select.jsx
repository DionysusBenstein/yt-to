import { React, useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';

function Select({defaultValue, options}) {
  const [ isOpened, setIsOpened ] = useState(false);
  const [ currentValue, setCurrentValue ] = useState('');
  
  useEffect(() => {
    document.addEventListener('click', () => setIsOpened(false));
    setCurrentValue(options[defaultValue].name);

    return () => {
      document.removeEventListener('click');
    }
  }, []);

  function setValue(e) {
    setCurrentValue(e.target.innerText);
    setIsOpened(false);
  }

  function toggleList(e) {
    setIsOpened(!isOpened);
    e.stopPropagation();
  }

  return (
    <div>
      <Wrapper>
        <SelectButton onClick={toggleList}>
          {currentValue}
          <BiChevronDown />
        </SelectButton>
        {isOpened && 
        <List>
          {options.map((option, index) => 
            <ListItem key={index} onClick={setValue}>{option.name}</ListItem>
          )}
        </List>}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 200px;
`;

const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  text-align: left;
  background: transparent;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background: #fff;
`;

const ListItem = styled.button`
  padding: 16px;
  text-align: center;
  border: none;
  text-align: left;
  color: var(--dark-color);
  background: transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: var(--gray-color);
  }
`;

export default Select;
