import type { NativeMethods } from 'react-native'
import type { TCarouselModelInternalInstance } from '../../mst/CarouselModel'
import type {
  IUseCarouselModelReturnType,
  TUseCarouselModelParams
} from './types'

import { useMemo } from 'react'

import { Carousel } from '../../components'
import { CarouselModel } from '../../mst'

export function useCarouselModel<TItem, TComponent extends NativeMethods>({
  onPostCreateModel,
  onPreCreateModel
}: TUseCarouselModelParams<
  TItem,
  TComponent
> = {}): IUseCarouselModelReturnType<TItem, TComponent> {
  return useMemo(() => {
    onPreCreateModel?.()

    const carouselModel =
      CarouselModel.create() as unknown as TCarouselModelInternalInstance<
        TItem,
        TComponent
      >

    onPostCreateModel?.(carouselModel)

    return {
      carousel: <Carousel carouselModel={carouselModel} />,
      carouselModel
    }
  }, [onPostCreateModel, onPreCreateModel])
}
