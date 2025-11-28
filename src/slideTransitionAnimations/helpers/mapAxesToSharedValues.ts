import type { TAxes, TRAxisSharedValues } from '../types'

export const mapAxesToSharedValues = <T>(
  axes: TAxes | undefined
): TRAxisSharedValues<T> => (axes ?? ['x']).map(axis => ({ axis }))
