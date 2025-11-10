import type {
  IBaseSlideTransitionAnimation,
  IWithGetBaseSlideTransitionAnimation,
  TRBaseSlideTransitionAnimations
} from '../../types'

import { getBaseSlideTransitionAnimation } from '../getBaseSlideTransitionAnimation'

// eslint-disable-next-line id-length
export const createWithGetBaseSlideTransitionAnimation =
  (): TRBaseSlideTransitionAnimations &
    IWithGetBaseSlideTransitionAnimation => {
    return {
      // eslint-disable-next-line id-length
      getBaseSlideTransitionAnimation(slideId): IBaseSlideTransitionAnimation {
        return getBaseSlideTransitionAnimation(this, slideId)
      }
    }
  }
