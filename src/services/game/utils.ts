import { Matrix, MatrixNode } from "src/types"
import { COLS, ROWS } from "./constants"

export function getMatrix(rows = ROWS, cols = COLS): Matrix {
  const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const cell: MatrixNode = { player: 0 }
      matrix[row][col] = cell
    }
  }
  return matrix
}

export function drawWinCombination(
  matrix: Matrix,
  row: number,
  col: number,
  path: number[][]
) {
  matrix[row][col].win = true
  for (const [row, col] of path) {
    matrix[row][col].win = true
  }
}
export function getNextPlayer(player: number) {
  return player === 1 ? 2 : 1
}
