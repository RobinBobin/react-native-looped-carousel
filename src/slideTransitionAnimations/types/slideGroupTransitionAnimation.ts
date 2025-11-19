import type { ReadonlyDeep } from 'type-fest'
import type { ICommonSlideTransitionAnimationParams } from './commonSlideTransitionAnimationParams'
import type { TBaseSlideTransitionAnimations } from './slideTransitionAnimation'
import type { IAnimationMethods, IIsAnimationInProgress } from './withAnimation'
import type { IWithGetBaseSlideTransitionAnimation } from './withGetBaseSlideTransitionAnimation'
import type { IWithPrepare } from './withPrepare'
import type { IWithSlideCount } from './withSlideCount'

type TRawSlideGroupTransitionAnimation = ICommonSlideTransitionAnimationParams &
  IIsAnimationInProgress &
  IWithGetBaseSlideTransitionAnimation &
  IWithPrepare &
  IWithSlideCount

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
