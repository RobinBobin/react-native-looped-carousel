import type { TRAnimationConfig } from './animationConfig'

interface ICommonSlideTransitionAnimationParams {
  get animationConfig(): TRAnimationConfig
  set animationConfig(animationConfig: TRAnimationConfig)
  get preTransitionDelay(): number
  set preTransitionDelay(preTransitionDelay: number)
}

type TCommonSlideTransitionAnimationParamKey =
  keyof ICommonSlideTransitionAnimationParams

type TCommonSlideTransitionAnimationParamValue =
  ICommonSlideTransitionAnimationParams[TCommonSlideTransitionAnimationParamKey]

type TRCommonSlideTransitionAnimationParams =
  Readonly<ICommonSlideTransitionAnimationParams>

export type {
  ICommonSlideTransitionAnimationParams,
  TCommonSlideTransitionAnimationParamKey,
  TCommonSlideTransitionAnimationParamValue,
  TRCommonSlideTransitionAnimationParams
}
