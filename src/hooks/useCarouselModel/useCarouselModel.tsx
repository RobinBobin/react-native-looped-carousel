import type { ICarouselModelInstance } from '../../mst'
import type {
  IUseCarouselModelReturnType,
  TUseCarouselModelParams
} from './types'

import { useMemo } from 'react'

import { Carousel } from '../../components'
import { CarouselModel } from '../../mst'

export function useCarouselModel<TItem>({
  onPostCreateModel,
  onPreCreateModel
}: TUseCarouselModelParams<TItem>): IUseCarouselModelReturnType<TItem> {
  return useMemo(() => {
    onPreCreateModel?.()

    const carouselModel =
      CarouselModel.create() as ICarouselModelInstance<TItem>

    onPostCreateModel?.(carouselModel)

    return {
      carousel: <Carousel carouselModel={carouselModel} />,
      carouselModel
    }
  }, [onPostCreateModel, onPreCreateModel])
}
