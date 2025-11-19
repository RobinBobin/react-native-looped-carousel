import type { ReadonlyDeep } from 'type-fest'
import type { TRSlideIds } from '../../mst'

interface ISlideCount {
  get count(): number
  set count(count: number)
  get maxCount(): number
  get minCount(): number
}

interface IWithSlideCount {
  activeSlideCount: ISlideCount
  createSlideIds: () => void
  nextSlideCount: ISlideCount
  previousSlideCount: ISlideCount
  get slideIds(): TRSlideIds
}

type TRWithSlideCount = ReadonlyDeep<IWithSlideCount>

export type { ISlideCount, IWithSlideCount, TRWithSlideCount }
