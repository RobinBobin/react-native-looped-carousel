import type { ReadonlyDeep } from 'type-fest'
import type { ICommonSlideTransitionAnimationParams } from './commonSlideTransitionAnimationParams'
import type { TBaseSlideTransitionAnimations } from './slideTransitionAnimation'
import type { IWithActiveSlideCount } from './withActiveSlideCount'
import type { TWithAnimation } from './withAnimation'
import type { IWithPrepare } from './withPrepare'

type TSlideGroupTransitionAnimation = TBaseSlideTransitionAnimations &
  ICommonSlideTransitionAnimationParams &
  IWithActiveSlideCount &
  TWithAnimation &
  IWithPrepare

type TRSlideGroupTransitionAnimation =
  ReadonlyDeep<TSlideGroupTransitionAnimation>

export type { TRSlideGroupTransitionAnimation, TSlideGroupTransitionAnimation }
