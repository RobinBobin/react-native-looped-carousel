import type { TAxis } from '../../../slideTransitionAnimations'
import type { TSlideId } from './types'

// Type 'ICarouselModelCommonActions' does not satisfy the constraint 'ModelActions'.

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TCarouselModelCommonActions = {
  getSlideOffset: (axis: TAxis, slideId: TSlideId) => number
  setSlideData: () => void
}

type TRCarouselModel = Readonly<TCarouselModelCommonActions>

export type { TCarouselModelCommonActions, TRCarouselModel }
