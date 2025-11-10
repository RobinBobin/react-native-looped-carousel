import type { TSlideId } from '../../mst'
import type { ICommonSlideTransitionAnimationParams } from './commonSlideTransitionAnimationParams'
import type { TUseStyle } from './types'
import type { TWithAnimation } from './withAnimation'
import type { IWithPrepare } from './withPrepare'

interface IBaseSlideTransitionAnimation
  extends ICommonSlideTransitionAnimationParams {
  useStyle: TUseStyle
}

type TBaseSlideTransitionAnimations = Record<
  TSlideId,
  IBaseSlideTransitionAnimation
>

type TRBaseSlideTransitionAnimations = Readonly<TBaseSlideTransitionAnimations>

type TSlideTransitionAnimation = IBaseSlideTransitionAnimation &
  TWithAnimation &
  IWithPrepare

type TSlideTransitionAnimations = Record<TSlideId, TSlideTransitionAnimation>

type TRSlideTransitionAnimations = Readonly<TSlideTransitionAnimations>

export type {
  IBaseSlideTransitionAnimation,
  TBaseSlideTransitionAnimations,
  TRBaseSlideTransitionAnimations,
  TRSlideTransitionAnimations,
  TSlideTransitionAnimation
}
