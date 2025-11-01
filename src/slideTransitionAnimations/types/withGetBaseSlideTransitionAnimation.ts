import type { TSlideId } from '../../mst'
import type { IBaseSlideTransitionAnimation } from './slideTransitionAnimation'

export interface IWithGetBaseSlideTransitionAnimation {
  getBaseSlideTransitionAnimation: (
    slideId: TSlideId
  ) => IBaseSlideTransitionAnimation
}
