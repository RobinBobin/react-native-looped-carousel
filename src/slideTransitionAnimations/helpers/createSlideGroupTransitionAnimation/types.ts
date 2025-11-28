import type { TRCarouselModel, TSlideId } from '../../../mst'
import type {
  TAxes,
  TRAnimationMethods,
  TRWithSlideCount,
  TSlideTransitionAnimation
} from '../../types'

interface ICommonParams {
  axes?: TAxes | undefined
  carouselModel: TRCarouselModel
}

type TCreateSlideTransitionAnimationParams = Readonly<
  ICommonParams & {
    slideId: TSlideId
    slideIndex: number
  }
>

type TCreateSlideTransitionAnimation = (
  params: TCreateSlideTransitionAnimationParams
) => TSlideTransitionAnimation

type TCreateSlideGroupTransitionAnimationParams = Readonly<
  ICommonParams & {
    animationMethods: TRAnimationMethods
    createSlideTransitionAnimation: TCreateSlideTransitionAnimation
    withSlideCount: TRWithSlideCount
  }
>

export type {
  TCreateSlideGroupTransitionAnimationParams,
  TCreateSlideTransitionAnimation,
  TCreateSlideTransitionAnimationParams
}
