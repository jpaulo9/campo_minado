import {StyleSheet} from 'react-native';

const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_,row)  => {
            return Array (columns).fill(0).map((_, column) => {

                return {
                    row,
                    column,
                    opened: false,
                    flagged: false,
                    mined: false,
                    exploded: false,
                    nearMines: 0,
                }

            })
        })
}


const spreadMines = (board, minesAmount) =>{

            const rows = board.length
            const columns = board[0].length
            let minesPlanted = 0


            while (minesPlanted < minesAmount){

                const linhaSel = parseInt(Math.random()* rows, 10)
                const colunaSel = parseInt(Math.random()*columns, 10) 

                if(!board[linhaSel][colunaSel].mined){

                    board[linhaSel][colunaSel].mined = true
                    minesPlanted++

                }
            }
}

const createMineBoard = (rows, columns, minesPlanted) =>
{
    const board = createBoard(rows, columns)
    spreadMines(board, minesPlanted)
    return board
}

export { createMineBoard }