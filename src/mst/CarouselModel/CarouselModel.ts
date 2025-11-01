import type { Instance } from 'mobx-state-tree'
import type { StyleProp, ViewStyle } from 'react-native'
import type { TRSlideGroupTransitionAnimation } from '../../slideTransitionAnimations/types'
import type {
  ICarouselModelDataRelatedVolatile,
  ICarouselModelVolatile,
  TCarouselModelDataRelatedActions,
  TRenderCarouselPlaceholder,
  TRenderItem,
  TTransitionDirection
} from './types'

import { getType, types } from 'mobx-state-tree'

import { createStubAnimation } from '../../slideTransitionAnimations/createStubAnimation'

const CarouselModel = types
  .model('CarouselModel')
  .volatile<ICarouselModelDataRelatedVolatile<unknown>>(() => ({
    data: []
  }))
  .volatile<ICarouselModelVolatile>(() => ({
    isAutoTransitionStarted: false,
    isCarouselPlaceholderShown: false,
    isTransitionRequested: false,
    slideGroupTransitionAnimation: createStubAnimation(),
    transitionDirection: 'next'
  }))
  .views(self => ({
    get canTransition(): boolean {
      return self.data.length > 1 && !self.isTransitionRequested
    },
    get isCarouselReady(): boolean {
      const isDataReady = Boolean(self.data.length)
      const isRenderItemSet = Boolean(self.renderItem)

      return isDataReady && isRenderItemSet && !self.isCarouselPlaceholderShown
    }
  }))
  .views(self => ({
    get canStartAutoTransition(): boolean {
      return !self.isAutoTransitionStarted && self.canTransition
    }
  }))
  .actions<TCarouselModelDataRelatedActions<unknown>>(self => ({
    setData(this: void, data: readonly unknown[]): void {
      self.data = data.map(datum => [datum, {}])
    },
    setRenderItem(this: void, renderItem: TRenderItem<unknown>): void {
      self.renderItem = renderItem
    }
  }))
  .actions(self => ({
    hideCarouselPlaceholder(this: void): void {
      self.isCarouselPlaceholderShown = false
    },
    move(this: void, transitionDirection: TTransitionDirection): boolean {
      if (!self.canTransition) {
        return false
      }

      self.isTransitionRequested = true
      self.transitionDirection = transitionDirection

      self.slideGroupTransitionAnimation.animate()

      return true
    },
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
    },
    setSlideGroupTransitionAnimation(
      this: void,
      slideGroupTransitionAnimation: TRSlideGroupTransitionAnimation
    ): void {
      self.slideGroupTransitionAnimation = slideGroupTransitionAnimation
    },
    showCarouselPlaceholder(this: void): void {
      if (!self.renderCarouselPlaceholder) {
        console.warn(
          `'${getType(self).name}.showCarouselPlaceholder()': 'self.renderCarouselPlaceholder' is not defined.`
        )
      }

      self.isCarouselPlaceholderShown = true
    },
    stopAutoTransition(this: void): void {
      self.isAutoTransitionStarted = false
    }
  }))
  .actions(self => ({
    startAutoTransition(
      this: void,
      transitionDirection: TTransitionDirection
    ): boolean {
      if (!self.canStartAutoTransition || !self.move(transitionDirection)) {
        return false
      }

      self.isAutoTransitionStarted = true

      return true
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
