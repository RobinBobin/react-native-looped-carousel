import type { useAnimatedStyle } from 'react-native-reanimated'

type TAnimatedStyle = ReturnType<typeof useAnimatedStyle>

type TUseStyle = () => TAnimatedStyle

export type { TAnimatedStyle, TUseStyle }
