import type { NativeMethods } from 'react-native'
import type { ICarouselModelInstance } from '../../mst'
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
      CarouselModel.create() as unknown as ICarouselModelInstance<
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
