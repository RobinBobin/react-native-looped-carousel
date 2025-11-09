import type { TRSlideIds } from '../../mst'

interface IWithActiveSlideCount {
  get activeSlideCount(): number
  set activeSlideCount(activeSlideCount: number)
  get maxActiveSlideCount(): number
  get minActiveSlideCount(): number
  get slideIds(): TRSlideIds
}

type TRWithActiveSlideCount = Readonly<IWithActiveSlideCount>

export type { IWithActiveSlideCount, TRWithActiveSlideCount }
