import type { ICarouselModelInstance } from '../../mst'
import type { TUseCarouselModelParams } from './types'

import { useMemo } from 'react'

import { CarouselModel } from '../../mst'

export const useCarouselModel = <TItem>({
  onPostCreateModel,
  onPreCreateModel
}: TUseCarouselModelParams<TItem>): ICarouselModelInstance<TItem> => {
  return useMemo(() => {
    onPreCreateModel?.()

    const carouselModel =
      CarouselModel.create() as ICarouselModelInstance<TItem>

    onPostCreateModel?.(carouselModel)

    return carouselModel
  }, [onPostCreateModel, onPreCreateModel])
}
