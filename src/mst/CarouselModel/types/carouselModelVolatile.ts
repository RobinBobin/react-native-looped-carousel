import type { StyleProp, ViewStyle } from 'react-native'
import type { TSlideGroupTransitionAnimation } from '../../../slideTransitionAnimations'
import type { TRenderCarouselPlaceholder, TTransitionDirection } from './types'

export interface ICarouselModelVolatile {
  carouselPlaceholderContainerStyle?: StyleProp<ViewStyle>
  carouselStyle?: StyleProp<ViewStyle>
  isAutoTransitionStarted: boolean
  isCarouselPlaceholderShown: boolean
  isTransitionRequested: boolean
  renderCarouselPlaceholder?: TRenderCarouselPlaceholder
  slideGroupTransitionAnimation: TSlideGroupTransitionAnimation
  transitionDirection: TTransitionDirection
}
