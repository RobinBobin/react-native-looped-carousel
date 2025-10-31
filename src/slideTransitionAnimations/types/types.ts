import type { ViewProps } from 'react-native'
import type { AnimatedProps } from 'react-native-reanimated'

type TAnimatedViewStyle = AnimatedProps<ViewProps>['style']
type TUseStyle = () => TAnimatedViewStyle

export type { TAnimatedViewStyle, TUseStyle }
