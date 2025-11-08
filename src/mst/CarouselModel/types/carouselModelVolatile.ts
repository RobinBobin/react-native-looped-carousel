import type { StyleProp, ViewStyle } from 'react-native'
import type { TSlideGroupTransitionAnimation } from '../../../slideTransitionAnimations'
import type {
  TCarouselPlaceholder,
  TSlideData,
  TTransitionDirection
} from './types'

export interface ICarouselModelVolatile {
  CarouselPlaceholder?: TCarouselPlaceholder
  carouselContainerStyle?: StyleProp<ViewStyle>
  isAutoTransitionStarted: boolean
  isCarouselPlaceholderShown: boolean
  isTransitionRequested: boolean
  slideData: TSlideData
  slideGroupTransitionAnimation: TSlideGroupTransitionAnimation
  transitionDirection: TTransitionDirection
}
