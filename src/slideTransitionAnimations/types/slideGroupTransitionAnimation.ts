import type { ReadonlyDeep } from 'type-fest'
import type { ICommonSlideTransitionAnimationParams } from './commonSlideTransitionAnimationParams'
import type { TBaseSlideTransitionAnimations } from './slideTransitionAnimation'
import type { IWithActiveSlideCount } from './withActiveSlideCount'
import type { IAnimationMethods, IIsAnimationInProgress } from './withAnimation'
import type { IWithGetBaseSlideTransitionAnimation } from './withGetBaseSlideTransitionAnimation'
import type { IWithPrepare } from './withPrepare'

type TRawSlideGroupTransitionAnimation = ICommonSlideTransitionAnimationParams &
  IIsAnimationInProgress &
  IWithActiveSlideCount &
  IWithGetBaseSlideTransitionAnimation &
  IWithPrepare

type TSlideGroupTransitionAnimation = IAnimationMethods &
  TBaseSlideTransitionAnimations &
  TRawSlideGroupTransitionAnimation

type TRSlideGroupTransitionAnimation =
  ReadonlyDeep<TSlideGroupTransitionAnimation>

export type {
  TRawSlideGroupTransitionAnimation,
  TRSlideGroupTransitionAnimation,
  TSlideGroupTransitionAnimation
}
