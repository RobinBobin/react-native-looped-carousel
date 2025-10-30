import type { Instance } from 'mobx-state-tree'
import type { StyleProp, ViewStyle } from 'react-native'
import type {
  ICarouselModelDataRelatedVolatile,
  ICarouselModelVolatile,
  TCarouselModelDataRelatedActions,
  TRenderItem
} from './types'

import { types } from 'mobx-state-tree'
import { createElement, Fragment } from 'react'

const CarouselModel = types
  .model('CarouselModel')
  .volatile<ICarouselModelDataRelatedVolatile<unknown>>(() => ({
    data: [],
    renderItem: (): React.ReactElement => createElement(Fragment)
  }))
  .volatile<ICarouselModelVolatile>(() => ({}))
  .actions<TCarouselModelDataRelatedActions<unknown>>(self => ({
    setData(this: void, data: readonly unknown[]): void {
      self.data = data
    },
    setRenderItem(this: void, renderItem: TRenderItem<unknown>): void {
      self.renderItem = renderItem
    }
  }))
  .actions(self => ({
    setCarouselStyle(this: void, carouselStyle: StyleProp<ViewStyle>): void {
      self.carouselStyle = carouselStyle
    }
  }))

type TKeysToOmit =
  | keyof ICarouselModelDataRelatedVolatile<unknown>
  | keyof TCarouselModelDataRelatedActions<unknown>

type TOmittedInstance = Omit<Instance<typeof CarouselModel>, TKeysToOmit>

export interface ICarouselModelInstance<TItem>
  extends TOmittedInstance,
    TCarouselModelDataRelatedActions<TItem>,
    ICarouselModelDataRelatedVolatile<TItem> {}

export { CarouselModel }
