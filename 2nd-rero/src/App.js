import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [items, setItems] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleAddItem = () => {
    setItems([...items, { title, content, isDone: false }]);
    setTitle('');
    setContent('');
  };

  const handleItemDone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isDone = true;
    setItems(updatedItems);
  };

  const handleItemUndone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isDone = false;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const workingItems = items.filter((item) => !item.isDone);
  const doneItems = items.filter((item) => item.isDone);

  return (
    <div className='listappand'>
      <Title />
      <Appand
        title={title}
        content={content}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
        handleAddItem={handleAddItem}
      />
      <Working
        items={workingItems}
        handleDeleteItem={handleDeleteItem}
        handleItemDone={handleItemDone}
      />
      <Done
        items={doneItems}
        handleDeleteItem={handleDeleteItem}
        handleItemUndone={handleItemUndone}
      />
    </div>
  );
}

function Title() {
  return (
    <div className='title'>
      <h3>My ToDo List</h3>
      <p>React</p>
    </div>
  );
}

function Appand({ title, content, handleTitleChange, handleContentChange, handleAddItem }) {
  return (
    <div className='appand'>
      제목<input type='text' value={title} onChange={handleTitleChange} />
      내용<input type='text' value={content} onChange={handleContentChange} />
      <button onClick={handleAddItem}>추가하기</button>
    </div>
  );
}

function Done({ items, handleDeleteItem, handleItemUndone }) {
  return (
    <div>
      <h3>Done..!</h3>
      <ul className='donelist'>
        {items.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <div className='버튼들'>
              <button id='삭제' onClick={() => handleDeleteItem(index)}>삭제하기</button>
              <button id='취소' onClick={() => handleItemUndone(index)}>취소</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Working({ items, handleDeleteItem, handleItemDone }) {
  return (
    <div>
      <h3>Working..</h3>
      <ul className='worklist'>
        {items.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <div className='버튼들'>
              <button className='button' id='삭제' onClick={() => handleDeleteItem(index)}>삭제하기</button>
              <button className='button' id='완료' onClick={() => handleItemDone(index)}>완료</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;