import type { Instance } from 'mobx-state-tree'
import type { StyleProp, ViewStyle } from 'react-native'
import type { TRSlideGroupTransitionAnimation } from '../../slideTransitionAnimations/types'
import type {
  ICarouselModelDataRelatedVolatile,
  ICarouselModelVolatile,
  TCarouselModelDataRelatedActions,
  TCarouselPlaceholder,
  TItemComponent,
  TTransitionDirection
} from './types'

import { types } from 'mobx-state-tree'

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
      const isItemComponentSet = Boolean(self.Item)

      return (
        isDataReady && isItemComponentSet && !self.isCarouselPlaceholderShown
      )
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
    setItemComponent(this: void, Item: TItemComponent<unknown>): void {
      self.Item = Item
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
    setCarouselContainerStyle(
      this: void,
      carouselContainerStyle: StyleProp<ViewStyle>
    ): void {
      self.carouselContainerStyle = carouselContainerStyle
    },
    setCarouselPlaceholderComponent(
      this: void,
      CarouselPlaceholder: TCarouselPlaceholder
    ): void {
      self.CarouselPlaceholder = CarouselPlaceholder
    },
    setSlideGroupTransitionAnimation(
      this: void,
      slideGroupTransitionAnimation: TRSlideGroupTransitionAnimation
    ): void {
      self.slideGroupTransitionAnimation = slideGroupTransitionAnimation
    },
    showCarouselPlaceholder(this: void): void {
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
