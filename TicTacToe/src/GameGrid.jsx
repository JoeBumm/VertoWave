import React, { useState } from 'react';
import Message from './Message';

function GameGrid() {
    // Player 1 Starts playing the game first
    // 1 -> X turn , 0 -> O Turn
    let turn = 1;
    // How many times have we played
    let plays = 0;
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6]           // diagonals
    ]

    // -1 in a box means it's not yet assigned either X or O
    const playState = [-1, -1, -1, -1, -1, -1, -1, -1, -1];


    function boxClick(index) {
        if (playState[index] === -1) {
            turn === 1 ? playState[index] = 1 : playState[index] = 0
            fillBox(index);
            plays++;
            turn = 1 - turn;
            if (plays > 2) {
                checkwin();
            }
        }
    }

    function fillBox(index) {
        const cells = document.querySelectorAll('.gameGrid div');
        const cell = cells[index];
        cell.textContent = playState[index] === 1 ? 'X' : 'O';
    }

    function checkwin() {
        for (const combo of winningCombos) {
            if (combo.every(idx => playState[idx] === 1)) {
                showMsg("X Won The Game");
                return reset()
            }
            if (combo.every(idx => playState[idx] === 0)) {
                showMsg("O Won The Game");
                return reset()
            }
        }
        if (plays === 9) {
            showMsg("That's a Draw")
            return reset()
        }
    }

    function showMsg(text) {
        setMessage(text);
        setShowMessage(true);
    }

    function reset() {
        const grid = document.getElementById("gameGrid");
        grid.classList.add("explode");

        setTimeout(() => {
            grid.classList.remove("explode");

            const cells = document.querySelectorAll('.gameGrid div');
            playState.fill(-1);
            cells.forEach(cell => (cell.textContent = ''));
            turn = 1;
            plays = 0;
        }, 500);
    }


    return (
        <>
            <div className='gameGrid' id="gameGrid">
                <div onClick={() => boxClick(0)}></div>
                <div onClick={() => boxClick(1)}></div>
                <div onClick={() => boxClick(2)}></div>
                <div onClick={() => boxClick(3)}></div>
                <div onClick={() => boxClick(4)}></div>
                <div onClick={() => boxClick(5)}></div>
                <div onClick={() => boxClick(6)}></div>
                <div onClick={() => boxClick(7)}></div>
                <div onClick={() => boxClick(8)}></div>
            </div>
            <div className='reset'>
                <button onClick={() => reset()} className='resetBtn'>Reset</button>

            </div>
            {showMessage && (
                <Message text={message} onClose={() => setShowMessage(false)} />
            )}
        </>
    )
}

export default GameGrid