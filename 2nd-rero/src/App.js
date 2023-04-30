import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, toggleItemDone, deleteItem } from './store/itemsDuck';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemDetails from './detail/detail';
import { v4 as todo } from 'uuid';
import './App.css';
import styled from 'styled-components';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleAddItem = () => {
    dispatch(addItem({ id: todo(), title, content, isDone: false }));
    setTitle('');
    setContent('');
  };

  const handleItemDone = (id) => {
    dispatch(toggleItemDone(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  ;

  const workingItems = items.filter((item) => !item.isDone);
  const doneItems = items.filter((item) => item.isDone);

  return (
    <Router>
      <div className='listappand'>
        <Title />
        <Routes>
          <Route path='/'
            element={<>
              <Appand title={title}
                content={content}
                handleTitleChange={handleTitleChange}
                handleContentChange={handleContentChange}
                handleAddItem={handleAddItem} />
              <Working
                items={workingItems}
                handleDeleteItem={handleDeleteItem}
                handleItemDone={handleItemDone} />
              <Done
                items={doneItems}
                handleDeleteItem={handleDeleteItem}
                handleItemDone={handleItemDone} />
            </>} />
          <Route path='/details/:id' element={<ItemDetails />} />
        </Routes>
        <nav>
          <ul>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

function Title() {
  return (
    <Titlestyle>
      <h3>My ToDo List</h3>
      <p>React</p>
    </Titlestyle>
  );
}

function Appand({ title, content, handleTitleChange, handleContentChange, handleAddItem }) {
  return (
    <Appandstyle>
      제목<AppandInputstyle type='text' value={title} onChange={handleTitleChange} />
      내용<AppandInputstyle type='text' value={content} onChange={handleContentChange} />
      <Appandbtnstyle onClick={handleAddItem}>추가하기</Appandbtnstyle>
    </Appandstyle>
  );
}
function Done({ items, handleDeleteItem, handleItemDone }) {
  return (
    <div>
      <h3>Done..!</h3>
      <Ulstyle>
        {items.map((item) => (
          <DListyle key={item.id}>
            <Btnstyle>
              <Link to={`/details/${item.id}`}>상세보기</Link>
            </Btnstyle>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <div className='버튼들'>
              <Delatebtnstyle onClick={() => handleDeleteItem(item.id)}>삭제하기</Delatebtnstyle>
              <Donebtnstyle onClick={() => handleItemDone(item.id)}>취소</Donebtnstyle>
            </div>
          </DListyle>
        ))}
      </Ulstyle>
    </div>
  );
}

function Working({ items, handleDeleteItem, handleItemDone }) {
  return (
    <div>
      <h3>Working..</h3>
      <Ulstyle>
        {items.map((item) => (
          <Listyle key={item.id}>
            <Btnstyle>
              <Link to={`/details/${item.id}`}>상세보기</Link>
            </Btnstyle>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <div className='버튼들'>
              <Delatebtnstyle onClick={() => handleDeleteItem(item.id)}>삭제하기</Delatebtnstyle>
              <Donebtnstyle onClick={() => handleItemDone(item.id)}>완료</Donebtnstyle>
            </div>
          </Listyle>
        ))}
      </Ulstyle>
    </div>
  );
}

export default App;

const Titlestyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: gainsboro;
border: 1px solid black;
padding: 20px;
margin-bottom: 30px;
`;

const Appandstyle = styled.div`
font-size: 20px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
background-color: rgb(185, 238, 255);
border: 1px solid #ccc;
border-radius: 10px;
padding: 10px;
`;

const AppandInputstyle = styled.input`
width: 300px;
height: 25px;
margin-right: 10px;
padding: 10px;
border: none;
border-radius: 14px;
box-shadow: none;
font-size: 16px;
`

const Appandbtnstyle = styled.button`
padding: 10px;
border: none;
border-radius: 13px;
box-shadow: none;
background-color: rgb(255, 195, 255);
color: cornflowerblue;
font-size: 16px;
cursor: pointer;
`

const Ulstyle = styled.ul`
width: auto;
list-style: none;
padding: 0;
display: flex;
flex-direction: row;
gap: 1%;
flex-wrap: wrap;
`

const Listyle = styled.li`
width: 300px;
height: 200px;
background-color: white;
border: 8px solid lightseagreen;
border-radius: 20px;
padding: 10px;
margin-bottom: 5px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Btnstyle = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 15px;
border-radius: 8px;
`

const Delatebtnstyle = styled.button`
background-color: red;
color: white;
margin-right: 5px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 15px;
border-radius: 8px;
`

const Donebtnstyle = styled.button`
background-color: green;
color: white;
margin-right: 5px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 15px;
border-radius: 8px;
`

const DListyle = styled.li`
width: 300px;
height: 200px;
background-color: white;
border: 8px solid blueviolet;
border-radius: 20px;
padding: 10px;
margin-bottom: 5px;
display: flex;
flex-direction: column;
align-items: flex-start;
`
