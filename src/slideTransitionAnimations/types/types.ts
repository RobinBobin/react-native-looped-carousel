import type { ViewStyle } from 'react-native'
import type { useAnimatedStyle } from 'react-native-reanimated'

type TAnimatedViewStyle = ReturnType<typeof useAnimatedStyle<ViewStyle>>

type TUseStyle = () => TAnimatedViewStyle

export type { TAnimatedViewStyle, TUseStyle }
