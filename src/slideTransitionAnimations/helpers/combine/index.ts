import type { TCombineReturnType } from './types'

export const combine = <
  T,
  S1,
  S2 = undefined,
  S3 = undefined,
  S4 = undefined,
  S5 = undefined,
  S6 = undefined,
  S7 = undefined,
  S8 = undefined,
  S9 = undefined
>(
  target: T,
  source1: S1,
  source2?: S2,
  source3?: S3,
  source4?: S4,
  source5?: S5,
  source6?: S6,
  source7?: S7,
  source8?: S8,
  source9?: S9
  // eslint-disable-next-line @typescript-eslint/max-params
): TCombineReturnType<T, S1, S2, S3, S4, S5, S6, S7, S8, S9> => {
  return [
    target,
    source1,
    source2,
    source3,
    source4,
    source5,
    source6,
    source7,
    source8,
    source9
  ]
    .filter(Boolean)
    .reduce((previous, current) => {
      return Object.defineProperties(
        previous,
        Object.getOwnPropertyDescriptors(current)
      )
    }, {}) as TCombineReturnType<T, S1, S2, S3, S4, S5, S6, S7, S8, S9>
}

// export const combine = <T1, T2>(target: T1, source: T2): T1 & T2 => {
//   return Object.defineProperties(
//     target,
//     Object.getOwnPropertyDescriptors(source)
//   ) as T1 & T2
// }
