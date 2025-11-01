import type { TSlideId } from '../../mst'

export interface IWithActiveSlideCount {
  get activeSlideCount(): number
  set activeSlideCount(activeSlideCount: number)
  get maxActiveSlideCount(): number
  get minActiveSlideCount(): number
  get slideIds(): readonly TSlideId[]
}
