type TAnimate = () => void
type TCancelInProgressAnimation = () => void

interface IAnimationMethods {
  animate: TAnimate
  cancelInProgressAnimation: TCancelInProgressAnimation
}

type TRAnimationMethods = Readonly<IAnimationMethods>

interface IIsAnimationInProgress {
  get isAnimationInProgress(): boolean
}

type TWithAnimation = IAnimationMethods & IIsAnimationInProgress

export type {
  IAnimationMethods,
  IIsAnimationInProgress,
  TAnimate,
  TCancelInProgressAnimation,
  TRAnimationMethods,
  TWithAnimation
}
