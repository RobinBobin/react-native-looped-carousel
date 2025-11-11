import type { ICommonSlideTransitionAnimationParams } from '../types'

// eslint-disable-next-line id-length
export const createCommonSlideTransitionAnimationParams =
  (): ICommonSlideTransitionAnimationParams => {
    return {
      animationConfig: {
        duration: 1000
      },
      preTransitionDelay: 1000
    }
  }
