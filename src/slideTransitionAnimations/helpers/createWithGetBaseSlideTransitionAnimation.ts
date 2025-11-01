import type { IWithGetBaseSlideTransitionAnimation } from '../types'
import type {
  IBaseSlideTransitionAnimation,
  TRBaseSlideTransitionAnimations
} from '../types/slideTransitionAnimation'

import { verify } from 'simple-common-utils'

// eslint-disable-next-line id-length
export const createWithGetBaseSlideTransitionAnimation =
  (): TRBaseSlideTransitionAnimations &
    IWithGetBaseSlideTransitionAnimation => {
    return {
      // eslint-disable-next-line id-length
      getBaseSlideTransitionAnimation(slideId): IBaseSlideTransitionAnimation {
        const animation = this[slideId]

        verify(
          animation,
          `'getBaseSlideTransitionAnimation()': no slide transition animation for '${slideId}'`
        )

        return animation
      }
    }
  }
