import type { IWithGetBaseSlideTransitionAnimation } from '../../types'
import type {
  IBaseSlideTransitionAnimation,
  TRBaseSlideTransitionAnimations
} from '../../types/slideTransitionAnimation'

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
