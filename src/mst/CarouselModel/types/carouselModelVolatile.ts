import type { StyleProp } from 'react-native'
import type { TSlideGroupTransitionAnimation } from '../../../slideTransitionAnimations'
import type { TAnimatedViewStyle } from '../../../slideTransitionAnimations/types'
import type {
  TCarouselPlaceholderComponent,
  TSlideData,
  TTransitionDirection
} from './types'

export interface ICarouselModelVolatile {
  CarouselPlaceholder?: TCarouselPlaceholderComponent
  _slideGroupTransitionAnimation?: TSlideGroupTransitionAnimation
  carouselContainerStyle?: StyleProp<TAnimatedViewStyle>
  isAutoTransitionStarted: boolean
  isCarouselPlaceholderShown: boolean
  isTransitionRequested: boolean
  slideData: TSlideData
  transitionDirection: TTransitionDirection
}
