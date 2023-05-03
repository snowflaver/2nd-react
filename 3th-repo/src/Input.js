import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  width: 200px;
`;

export const CommaInput = (props) => {
  const { value, onChange, ...rest } = props;

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    onChange(e, formattedValue);
  };

  return <Input value={value} onChange={handleChange} {...rest} />;
};