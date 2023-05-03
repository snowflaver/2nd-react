import React, { useState } from 'react';
import styled from 'styled-components';

export const Select = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <StyledSelect value={selected} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
width: 300px;
margin: 10px;
font-size: 1rem;
padding: 0.5em;
border: 1px solid #ccc;
border-radius: 4px;
outline: none;
box-sizing: border-box;
appearance: none;
`;