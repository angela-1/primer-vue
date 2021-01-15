export enum PaginationType {
  Prev,
  Num,
  Break,
  Next
}

export interface PaginstionModel {
  type: PaginationType
  num: number
  disabled?: boolean
  selected?: boolean
}
