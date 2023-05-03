import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const Select = ({ options, selectedOption, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <StyledSelect ref={dropdownRef} onClick={() => setIsOpen(!isOpen)}>
            <SelectedValue>{selectedOption || '선택하세요'}</SelectedValue>
            {isOpen && (
                <Dropdown>
                    {options.map((option, index) => (
                        <Option key={index} onClick={() => handleChange(option)}>
                            {option}
                        </Option>
                    ))}
                </Dropdown>
            )}
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
  position: relative;
  cursor: pointer;
`;

const SelectedValue = styled.div``;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Option = styled.div`
  padding: 0.5em;
  &:hover {
    background-color: #f1f1f1;
  }
`;