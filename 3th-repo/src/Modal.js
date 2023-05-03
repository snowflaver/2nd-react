import React from 'react';
import styled from 'styled-components';

export const Modal = ({ open, onClose, children, cancelButton }) => {
  if (!open) return null;

  const handleClickOverlay = () => {
    if (!cancelButton) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClickOverlay}>
      <Content onClick={(e) => e.stopPropagation()}>
        {children}
        {cancelButton && (
          <ButtonWrapper>
            <button onClick={onClose}>취소</button>
            <button onClick={onClose}>확인</button>
          </ButtonWrapper>
        )}
        {!cancelButton && <button onClick={onClose}>닫기</button>}
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;