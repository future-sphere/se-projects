import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

const initialState = [
  {
    title: 'Todo',
    todos: ['hello', 'foo'],
    color: 'bg-blue-500',
    input: '',
  },
  {
    title: 'In Progress',
    todos: ['hello', 'foo'],
    color: 'bg-red-500',
    input: '',
  },
  {
    title: 'Code Review',
    todos: ['hello', 'foo'],
    color: 'bg-green-500',
    input: '',
  },
  {
    title: 'Done',
    todos: ['hello', 'foo'],
    color: 'bg-purple-500',
    input: '',
  },
];

const KanbanBoard = () => {
  const [col, setCol] = React.useState(initialState);

  const handleInputChange = (value, colIndex) => {
    const nextCol = [...col];
    nextCol[colIndex].input = value;
    setCol(nextCol);
  };

  const handleAddTodo = (colIndex) => {
    const nextCol = [...col];
    if (nextCol[colIndex].input) {
      nextCol[colIndex].todos.push(nextCol[colIndex].input);
      nextCol[colIndex].input = '';
      setCol(nextCol);
    }
  };

  const handleShift = (itemIndex, fromCol, toCol) => {
    const nextCol = [...col];
    const temp = nextCol[fromCol].todos[itemIndex];
    nextCol[fromCol].todos.splice(itemIndex, 1);
    nextCol[toCol].todos.push(temp);
    setCol(nextCol);
  };

  const handleDeleteItem = (colIndex, itemIndex) => {
    const nextCol = [...col];
    nextCol[colIndex].todos.splice(itemIndex, 1);
    setCol(nextCol);
  };

  return (
    <div className='grid max-w-5xl grid-cols-4 py-20 mx-auto gap-x-4'>
      {col.map((v, i) => (
        <Column
          index={i}
          handleInputChange={handleInputChange}
          data={v}
          key={i}
          handleAddTodo={handleAddTodo}
          handleShift={handleShift}
          handleDeleteItem={handleDeleteItem}
          isFirst={i === 0}
          isLast={i === col.length - 1}
        />
      ))}
    </div>
  );
};

function Column({
  data,
  handleInputChange,
  index,
  handleAddTodo,
  handleShift,
  isFirst,
  isLast,
  handleDeleteItem,
}) {
  return (
    <div className='relative w-full'>
      <div
        className={`flex items-center justify-center w-full py-2.5 px-4 rounded-t-xl shadow-2xl ${data.color}`}
      >
        <h3 className='text-lg font-extrabold text-center text-white'>
          {data.title}
        </h3>
      </div>
      <div className='px-2 py-2 space-y-2 bg-gray-100 h-96'>
        {data.todos.map((v, i) => (
          <Item
            handleDeleteItem={handleDeleteItem}
            key={i}
            itemTitle={v}
            isFirst={isFirst}
            isLast={isLast}
            handleShift={handleShift}
            index={i}
            colIndex={index}
          />
        ))}
      </div>

      <div className='relative'>
        <input
          className='w-full p-2.5 rounded-b-xl shadow-2xl'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo(index);
            }
          }}
          onChange={(e) => handleInputChange(e.target.value, index)}
          value={data.input}
          placeholder='Enter some value'
        />
        <ArrowRightIcon className='absolute h-5 text-gray-400 bottom-3 right-2' />
      </div>
    </div>
  );
}

function Item({
  handleShift,
  itemTitle,
  isFirst,
  isLast,
  index,
  colIndex,
  handleDeleteItem,
}) {
  return (
    <div className='flex w-full hover:space-x-2 group'>
      <div className='bg-white w-full rounded-xl py-2.5 px-4 flex justify-between items-center text-base font-bold hover:bg-gray-50 duration-200 cursor-pointer group-hover:w-3/4'>
        <ChevronLeftIcon
          className={`w-5 ${isFirst ? 'text-gray-300 cursor-not-allowed' : ''}`}
          onClick={() => handleShift(index, colIndex, colIndex - 1)}
        >
          Prev
        </ChevronLeftIcon>

        <span>{itemTitle}</span>

        <ChevronRightIcon
          className={`w-5 ${isLast ? 'text-gray-300 cursor-not-allowed' : ''}`}
          onClick={() => handleShift(index, colIndex, colIndex + 1)}
        >
          Next
        </ChevronRightIcon>
      </div>
      <div className='flex items-center justify-center w-0 duration-75 bg-red-500 cursor-pointer rounded-xl group-hover:w-1/4 hover:bg-red-700'>
        <TrashIcon
          onClick={() => handleDeleteItem(colIndex, index)}
          className='h-5 text-white'
        />
      </div>
    </div>
  );
}

export default KanbanBoard;
