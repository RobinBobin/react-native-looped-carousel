import type { ReadonlyDeep } from 'type-fest'
import type { ICommonSlideTransitionAnimationParams } from './commonSlideTransitionAnimationParams'
import type { TBaseSlideTransitionAnimations } from './slideTransitionAnimation'
import type { IWithActiveSlideCount } from './withActiveSlideCount'
import type { TWithAnimation } from './withAnimation'
import type { IWithGetBaseSlideTransitionAnimation } from './withGetBaseSlideTransitionAnimation'
import type { IWithPrepare } from './withPrepare'

type TSlideGroupTransitionAnimation = ICommonSlideTransitionAnimationParams &
  IWithActiveSlideCount &
  IWithGetBaseSlideTransitionAnimation &
  IWithPrepare &
  TBaseSlideTransitionAnimations &
  TWithAnimation

type TRSlideGroupTransitionAnimation =
  ReadonlyDeep<TSlideGroupTransitionAnimation>

export type { TRSlideGroupTransitionAnimation, TSlideGroupTransitionAnimation }
