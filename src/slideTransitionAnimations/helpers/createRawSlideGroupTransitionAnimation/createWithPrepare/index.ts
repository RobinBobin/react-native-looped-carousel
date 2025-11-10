import type { TRSlideIds } from '../../../../mst'
import type { IWithPrepare, TRSlideTransitionAnimations } from '../../../types'

import { getSlideTransitionAnimation } from './getSlideTransitionAnimation'

export const createWithPrepare = (
  slideIds: TRSlideIds
): IWithPrepare & TRSlideTransitionAnimations => {
  return {
    prepare(): void {
      slideIds.forEach(slideId => {
        getSlideTransitionAnimation(this, slideId).prepare()
      })
    }
  }
}
