import { Matrix } from "src/types"
import { isWinMove } from "./is-win-move"
import { searchForOptions } from "./search-for-options"

export function curPlayer(turn: number): number {
  return 1 + (turn % 2)
}

export function nextPlayer(turn: number): number {
  return 2 - (turn % 2)
}

export function isInbound(
  m: number[][] | Matrix,
  row: number,
  col: number
): boolean {
  return row >= 0 && row < m.length && col >= 0 && col < m[0].length
}
export function evaluatePosition(m: number[][], turn: number): number {
  let winMoves = 0
  const opts = searchForOptions(m)

  for (const [row, col] of opts) {
    m[row][col] = curPlayer(turn)
    if (isWinMove(m, row, col)) {
      winMoves += 1
    }

    m[row][col] = nextPlayer(turn)
    if (isWinMove(m, row, col)) {
      winMoves -= 1
    }

    m[row][col] = 0
  }

  return winMoves
}
