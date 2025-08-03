import React from 'react'

function GameGrid() {
    // Player 1 Starts playing the game first
    // 1 -> X turn , 0 -> O Turn
    let turn = 1;
    // -1 in a box means it's not yet assigned either X or O
    const playState = [-1, -1, -1, -1, -1, -1, -1, -1, -1];


    function boxClick(index) {
        if (playState[index] === -1) {
            turn === 1 ? playState[index] = 1 : playState[index] = 0
            fillBox(index);

            turn = 1 - turn;
        }

        console.log(playState)
    }

    function fillBox(index) {
        const cells = document.querySelectorAll('.gameGrid div');
        const cell = cells[index];
        cell.textContent = playState[index] === 1 ? 'X' : 'O';
    }

    return (
        <>
            <div className='gameGrid'>
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
                <button className='resetBtn'>Reset</button>

            </div>
        </>
    )
}

export default GameGrid