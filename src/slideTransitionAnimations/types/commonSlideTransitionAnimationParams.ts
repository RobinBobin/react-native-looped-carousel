interface ICommonSlideTransitionAnimationParams {
  get duration(): number
  set duration(duration: number)
  get preTransitionDelay(): number
  set preTransitionDelay(preTransitionDelay: number)
}

type TCommonSlideTransitionAnimationParam =
  keyof ICommonSlideTransitionAnimationParams

type TRCommonSlideTransitionAnimationParams =
  Readonly<ICommonSlideTransitionAnimationParams>

export type {
  ICommonSlideTransitionAnimationParams,
  TCommonSlideTransitionAnimationParam,
  TRCommonSlideTransitionAnimationParams
}
