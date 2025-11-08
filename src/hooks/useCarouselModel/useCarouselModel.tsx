import type { ICarouselModelInstance } from '../../mst'
import type {
  IUseCarouselModelReturnType,
  TUseCarouselModelParams
} from './types'

import { useMemo } from 'react'

import { Carousel } from '../../components'
import { CarouselModel } from '../../mst'
import { createStubAnimation } from '../../slideTransitionAnimations/createStubAnimation'

export function useCarouselModel<TItem>({
  onPostCreateModel,
  onPreCreateModel
}: TUseCarouselModelParams<TItem> = {}): IUseCarouselModelReturnType<TItem> {
  return useMemo(() => {
    onPreCreateModel?.()

    const carouselModel =
      CarouselModel.create() as ICarouselModelInstance<TItem>

    carouselModel.setSlideGroupTransitionAnimation(createStubAnimation())

    onPostCreateModel?.(carouselModel)

    return {
      carousel: <Carousel carouselModel={carouselModel} />,
      carouselModel
    }
  }, [onPostCreateModel, onPreCreateModel])
}
