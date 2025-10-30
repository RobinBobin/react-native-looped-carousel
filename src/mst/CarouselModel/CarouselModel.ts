import type { Instance } from 'mobx-state-tree'
import type { StyleProp, ViewStyle } from 'react-native'
import type {
  ICarouselModelDataRelatedVolatile,
  ICarouselModelVolatile,
  TCarouselModelDataRelatedActions,
  TRenderCarouselPlaceholder,
  TRenderItem
} from './types'

import { types } from 'mobx-state-tree'

const CarouselModel = types
  .model('CarouselModel')
  .volatile<ICarouselModelDataRelatedVolatile<unknown>>(() => ({
    data: []
  }))
  .volatile<ICarouselModelVolatile>(() => ({
    isCarouselPlaceholderShown: false
  }))
  .views(self => ({
    get isCarouselReady(): boolean {
      const isDataReady = Boolean(self.data.length)
      const isRenderItemSet = Boolean(self.renderItem)

      return isDataReady && isRenderItemSet && !self.isCarouselPlaceholderShown
    }
  }))
  .actions<TCarouselModelDataRelatedActions<unknown>>(self => ({
    setData(this: void, data: readonly unknown[]): void {
      self.data = data
    },
    setRenderItem(this: void, renderItem: TRenderItem<unknown>): void {
      self.renderItem = renderItem
    }
  }))
  .actions(self => ({
    setCarouselPlaceholderContainerStyle(
      this: void,
      carouselPlaceholderContainerStyle: StyleProp<ViewStyle>
    ): void {
      self.carouselPlaceholderContainerStyle = carouselPlaceholderContainerStyle
    },
    setCarouselStyle(this: void, carouselStyle: StyleProp<ViewStyle>): void {
      self.carouselStyle = carouselStyle
    },
    setRenderCarouselPlaceholder(
      this: void,
      renderCarouselPlaceholder: TRenderCarouselPlaceholder
    ): void {
      self.renderCarouselPlaceholder = renderCarouselPlaceholder
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
