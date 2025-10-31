import type { ICommonSlideTransitionAnimationParams } from '../types'

// eslint-disable-next-line id-length
export const createCommonSlideTransitionAnimationParams =
  (): ICommonSlideTransitionAnimationParams => {
    return {
      duration: 1000,
      preTransitionDelay: 1000
    }
  }
