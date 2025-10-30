import type { ICarouselModelInstance } from '../mst/CarouselModel'

import { useMemo } from 'react'

import { CarouselModel } from '../mst/CarouselModel'

export const useCarouselModel = <TItem>(
  data: readonly TItem[]
): ICarouselModelInstance<TItem> => {
  return useMemo(() => {
    const carouselModel = CarouselModel.create()

    carouselModel.setData(data)

    return carouselModel as ICarouselModelInstance<TItem>
  }, [data])
}
