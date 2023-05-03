import styled from "styled-components";

export const SelectStyle = styled.div`
  width: 100%;
  height: 200px;
  margin: 10px;
  border: 3px solid lightgray;
`;

export const SelectWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const FirstSelectWrapper = styled(SelectWrapper)`
  position: relative;
  flex-direction: column;
  z-index: 2;

  .options-modal {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid black;
    z-index: -1;
  }
`;

export const SecondSelectWrapper = styled(SelectWrapper)`
  position: relative;
  flex-direction: column;
`;

export const FirstSelect = styled.button`
  width: 400px;
  height: auto;
  font-size: 15px;
  background-color: white;
  border: 1px solid black;
`;

export const SecondSelect = styled.button`
  width: 400px;
  height: auto;
  font-size: 15px;
  background-color: white;
  border: 1px solid black;
  z-index: 5;
`;

export const OptionItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ButtonWrapper = styled.div`
margin: 10px;
display: flex;
align-items: start;
gap: 10px;
`

export const BtnStyle1 = styled.button`
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

export const BtnStyle2 = styled.button`
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

export const BtnStyle3 = styled.button`
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

export const BtnStyle4 = styled.button`
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

export const BtnStyle5 = styled.button`
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

export const BtnStyle6 = styled.button`
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

export const Inputer = styled.div`
margin: 10px;
`

export const BtnStyle7 = styled.button`
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

export const BtnStyle8 = styled.button`
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