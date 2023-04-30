import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = useSelector((state) => state.items);
  const item = items.find((item) => item.id === id);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    item && (
      <div className='item-details'>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <button onClick={handleGoBack}>이전으로</button>
      </div>
    )
  );
}

export default ItemDetails;

const moreitem = styled.div`


`