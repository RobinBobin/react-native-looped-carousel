import type { StyleProp, ViewStyle } from 'react-native'
import type { TSlideGroupTransitionAnimation } from '../../../slideTransitionAnimations'
import type { TRenderCarouselPlaceholder } from './types'

export interface ICarouselModelVolatile {
  carouselPlaceholderContainerStyle?: StyleProp<ViewStyle>
  carouselStyle?: StyleProp<ViewStyle>
  isCarouselPlaceholderShown: boolean
  renderCarouselPlaceholder?: TRenderCarouselPlaceholder
  slideGroupTransitionAnimation: TSlideGroupTransitionAnimation
}
