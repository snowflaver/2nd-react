import React, { useState } from 'react';
import { Modal } from './Modal';
import { Input, CommaInput } from './Input';
import { Select } from './Select';
import styled from 'styled-components';
import './App.css';

function App() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    alert(`{name: '${name}', price: '${price.replace(/,/g, '')}'}`)
  }

  const handleCommaInput = (e) => {
    const value = e.target.value.replace(/,/g, '');
    if (!isNaN(value)) {
      setPrice(value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','));
    }
  };

  const handleClick = () => {
    alert('버튼을 만들어보세요')
  }

  const handleAlert = () => {
    const userInput = window.prompt('어렵나요?')
    if (userInput !== null) {
      alert(`입력한 내용: ${userInput}`)
    }
  };

  return (
    <div>
      <div>
        <h1>Button</h1>
        <form onSubmit={onSubmit}></form>
        <ButtonWrapper>
          <Btnstyle1 size="large" onClick={handleClick}>큰 기본버튼 &gt;</Btnstyle1>
          <BtnStyle3 size="medium">중간</BtnStyle3>
          <BtnStyle4 size="small">작은</BtnStyle4>
        </ButtonWrapper>
        <ButtonWrapper>
          <Btnstyle2 size="large" onClick={handleAlert}>큰 거부버튼</Btnstyle2>
          <BtnStyle5 size="medium">중간</BtnStyle5>
          <BtnStyle6 size="small">작은</BtnStyle6>
        </ButtonWrapper>
      </div>
      <div>
        <h1>Input</h1>
        <section>
          <Inputer>
            이름<Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </Inputer>
          <Inputer>
            가격<CommaInput type='text' value={price} onChange={handleCommaInput} />
          </Inputer>
          <Inputer>
            <BtnStyle4 size="small" type="submit">저장</BtnStyle4>
          </Inputer>
        </section>
      </div>
      <div>
        <h1>Modal</h1>
        <ButtonWrapper>
          <BtnStyle7 onClick={() => setModal1(true)}>모달 열기1</BtnStyle7>
          <BtnStyle8 onClick={() => setModal2(true)}>모달 열기2</BtnStyle8>
        </ButtonWrapper>
        <Modal open={modal1} onClose={() => setModal1(false)} cancelButton>
          <p>여기는 모달1입니다.</p>
        </Modal>
        <Modal open={modal2} onClose={() => setModal2(false)}>
          <p>여기는 모달2입니다.</p>
        </Modal>
      </div>
      <SelectStyle>
        <h1>Select</h1>
        <SelectWrapper>
          <FirstSelectWrapper>
            <div style={{ position: "relative" }}>
              <button>${Select}</button>
              <Select options={['리액트', '자바', '스프링', '리액트네이티브']} />
            </div>
          </FirstSelectWrapper>
          <SecondSelectWrapper>
            <div style={{ position: "relative" }}>
              <Select options={['리액트', '자바', '스프링', '리액트네이티브']} />
            </div>
          </SecondSelectWrapper>
        </SelectWrapper>
      </SelectStyle>
    </div>
  );
}

export default App;

const SelectStyle = styled.div`
width: 100%;
height: 200px;
margin: 10px;
border: 3px solid lightgray;
overflow: hidden;
`

const SelectWrapper = styled.div`
margin: 10px;
display: flex;
align-items: center;
gap: 10px;
position: relative;
`

const FirstSelectWrapper = styled(SelectWrapper)`
`;

const SecondSelectWrapper = styled(SelectWrapper)`
`;

const ButtonWrapper = styled.div`
margin: 10px;
display: flex;
align-items: start;
gap: 10px;
`

const Btnstyle1 = styled.button`
width: 200px;
height : 50px;
margin: 10px;
font-size: 1rem;
padding: 0.5em 1em;
border-radius: 4px;
background-color: white;
border: 3px solid Yellowgreen;
&:active {
  background-color: rgba(154, 205, 50, 0.7);
}
`

const Btnstyle2 = styled.button`
width: 200px;
height : 50px;
margin: 10px;
font-size: 1rem;
padding: 0.5em 1em;
border-radius: 4px;
background-color: white;
border: 3px solid red;
&:active {
  background-color: rgba(255, 0, 0, 0.7);
}
`

const BtnStyle3 = styled.button`
width: 150px;
height : 40px;
margin: 10px;
background-color: lightgreen;
border: 3px solid lightgreen;
border-radius: 4px;
&:active {
  background-color: rgba(144, 238, 144, 0.7);
}
`

const BtnStyle4 = styled.button`
width: 100px;
height : 30px;
margin: 10px;
background-color: lightgreen;
border: 3px solid lightgreen;
border-radius: 4px;
&:active {
  background-color: rgba(144, 238, 144, 0.7);
}
`

const BtnStyle5 = styled.button`
width: 150px;
height : 40px;
margin: 10px;
background-color: red;
border: 3px solid red;
border-radius: 4px;
&:active {
  background-color: rgba(255, 0, 0, 0.7);
}
`

const BtnStyle6 = styled.button`
width: 100px;
height : 30px;
margin: 10px;
background-color: red;
border: 3px solid red;
border-radius: 4px;
&:active {
  background-color: rgba(255, 0, 0, 0.7);
}
`

const Inputer = styled.div`
margin: 10px;
`

const BtnStyle7 = styled.button`
width: 100px;
height : 30px;
margin: 10px;
background-color: lightgreen;
border: 3px solid lightgreen;
border-radius: 4px;
&:active {
  background-color: rgba(144, 238, 144, 0.7);
}
`

const BtnStyle8 = styled.button`
width: 200px;
height : 50px;
margin: 10px;
padding: 0.5em 1em;
border-radius: 4px;
background-color: white;
border: 3px solid red;
&:active {
  background-color: rgba(255, 0, 0, 0.7);
}
`

