import type { ReadonlyDeep } from 'type-fest'
import type { ICommonSlideTransitionAnimationParams } from './commonSlideTransitionAnimationParams'
import type { TBaseSlideTransitionAnimations } from './slideTransitionAnimation'
import type { IWithActiveSlideCount } from './withActiveSlideCount'
import type { TWithAnimation } from './withAnimation'
import type { IWithGetBaseSlideTransitionAnimation } from './withGetBaseSlideTransitionAnimation'
import type { IWithPrepare } from './withPrepare'

type TRawSlideGroupTransitionAnimation = ICommonSlideTransitionAnimationParams &
  IWithActiveSlideCount &
  IWithGetBaseSlideTransitionAnimation &
  IWithPrepare

type TSlideGroupTransitionAnimation = TRawSlideGroupTransitionAnimation &
  TBaseSlideTransitionAnimations &
  TWithAnimation

type TRSlideGroupTransitionAnimation =
  ReadonlyDeep<TSlideGroupTransitionAnimation>

export type {
  TRawSlideGroupTransitionAnimation,
  TRSlideGroupTransitionAnimation,
  TSlideGroupTransitionAnimation
}
