import React, { useState } from 'react';
import Block from './Block';

import './index.css';

const defaultState = [
  [15, 2, 1, 12],
  [8, 5, 6, 11],
  [4, 9, 10, 7],
  [3, 14, 13, null],
];

export default function Board() {
  const [blocks, setBlock] = useState(defaultState);

  const handleClick = (index, row) => {
    let emptySpace;
    blocks.forEach((v, i) => {
      return v.forEach((block, j) => {
        if (!block) {
          emptySpace = [i, j];
        }
      });
    });

    const blockYouCanMove = [
      [emptySpace[0], emptySpace[1] - 1],
      [emptySpace[0], emptySpace[1] + 1],
      [emptySpace[0] - 1, emptySpace[1]],
      [emptySpace[0] + 1, emptySpace[1]],
    ];

    let canMove = false;

    blockYouCanMove.forEach((rule) => {
      if (row === rule[0] && index === rule[1]) {
        canMove = true;
      }
    });

    if (canMove) {
      const nextBlocks = [...blocks];

      const blockToMove = nextBlocks[row][index];

      nextBlocks[row][index] = null;

      nextBlocks[emptySpace[0]][emptySpace[1]] = blockToMove;

      console.log(nextBlocks);
      setBlock(nextBlocks);
    } else {
      alert("You can't move this block");
    }
  };

  return (
    <div className='board'>
      {blocks.map((v, i) =>
        v.map((block, j) => (
          <Block
            key={block}
            handleClick={handleClick}
            number={block}
            row={i}
            index={j}
          />
        )),
      )}
    </div>
  );
}
