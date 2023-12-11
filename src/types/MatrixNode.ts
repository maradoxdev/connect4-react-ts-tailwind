export type Matrix = MatrixNode[][]

export type MatrixNode = {
  player: 0 | 1 | 2
  win?: boolean
}
