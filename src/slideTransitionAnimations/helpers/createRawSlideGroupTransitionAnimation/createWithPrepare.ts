import type { TRSlideIds } from '../../../mst'
import type { IWithPrepare, TRSlideTransitionAnimations } from '../../types'

import { getSlideTransitionAnimation } from './helpers'

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
