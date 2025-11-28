import type { objectify } from 'radashi'
import type { TSlideId } from '../../../mst'
import type { TSlideTransitionAnimation } from '../../types'

type TObjectify = typeof objectify<
  TSlideId,
  TSlideId,
  TSlideTransitionAnimation
>

type TGetValue = Parameters<TObjectify>[2]

export type TCreateSlideTransitionAnimation = Exclude<TGetValue, undefined>
