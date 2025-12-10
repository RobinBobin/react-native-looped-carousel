import type { Instance } from 'mobx-state-tree'
import type { NativeMethods, StyleProp } from 'react-native'
import type {
  TAnimatedViewStyle,
  TRSlideGroupTransitionAnimation,
  TSlideGroupTransitionAnimation
} from '../../slideTransitionAnimations/types'
import type {
  ICarouselModelDataRelatedVolatile,
  ICarouselModelVolatile,
  TCarouselModelCommonActions,
  TCarouselModelDataRelatedActions,
  TCarouselPlaceholderComponent,
  TItemComponent,
  TItemDimensions,
  TSlideDatum,
  TSlideId,
  TTransitionDirection
} from './types'

import { types } from 'mobx-state-tree'
import { assert, objectify } from 'radashi'
import { MstNullishError } from 'simple-common-utils'

import { createStubAnimation } from '../../slideTransitionAnimations/createStubAnimation'

const CarouselModel = types
  .model('CarouselModel', {
    itemDimensions: types.array(types.frozen<TItemDimensions>())
  })
  .volatile<ICarouselModelDataRelatedVolatile<unknown, NativeMethods>>(() => ({
    data: []
  }))
  .volatile<ICarouselModelVolatile>(() => ({
    isAutoTransitionStarted: false,
    isCarouselPlaceholderShown: false,
    isTransitionRequested: false,
    slideData: {},
    transitionDirection: 'next'
  }))
  .views(self => ({
    get isCarouselReady(): boolean {
      const requirements = [
        self.Item,
        self.data.length,
        !self.isCarouselPlaceholderShown,
        self._slideGroupTransitionAnimation
      ]

      return requirements.every(Boolean)
    }
  }))
  .views(self => ({
    get canTransition(): boolean {
      const requirements = [
        self.data.length > 1,
        self.isCarouselReady,
        !self.isTransitionRequested
      ]

      return requirements.every(Boolean)
    }
  }))
  .views(self => ({
    get canStartAutoTransition(): boolean {
      return !self.isAutoTransitionStarted && self.canTransition
    },
    get slideGroupTransitionAnimation(): TSlideGroupTransitionAnimation {
      assert(
        self._slideGroupTransitionAnimation,
        new MstNullishError({
          entityName: 'slideGroupTransitionAnimationVerified',
          model: self
        })
      )

      return self._slideGroupTransitionAnimation
    },

    getSlideDatum(slideId: TSlideId): TSlideDatum {
      const slideDatum = self.slideData[slideId]

      assert(
        slideDatum,
        new MstNullishError({ entityName: 'getSlideDatum()', model: self })
      )

      return slideDatum
    }
  }))
  .actions<TCarouselModelCommonActions>(self => ({
    setSlideData(): void {
      if (!self.data.length) {
        self.slideData = {}

        return
      }

      const { activeSlideCount, previousSlideCount, slideIds } =
        self.slideGroupTransitionAnimation

      self.slideData = objectify(
        slideIds,
        slideId => slideId,
        (_, slideIndex) => {
          const isPreviousSlide = slideIndex < previousSlideCount.count

          if (isPreviousSlide) {
            const itemIndex =
              Math.abs(
                self.data.length - previousSlideCount.count + slideIndex
              ) % self.data.length

            return {
              itemIndex,
              slideType: 'previous'
            }
          }

          const isActiveSlide =
            slideIndex < previousSlideCount.count + activeSlideCount.count

          const itemIndex =
            (slideIndex - previousSlideCount.count) % self.data.length

          return {
            itemIndex,
            slideType: isActiveSlide ? 'active' : 'next'
          }
        }
      )
    }
  }))
  .actions<TCarouselModelDataRelatedActions<unknown, NativeMethods>>(self => ({
    setData(this: void, data: readonly unknown[]): void {
      self.data = data

      self.setSlideData()
    },
    setItemComponent(
      this: void,
      Item: TItemComponent<unknown, NativeMethods>
    ): void {
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
      carouselContainerStyle: StyleProp<TAnimatedViewStyle>
    ): void {
      self.carouselContainerStyle = carouselContainerStyle
    },
    setCarouselPlaceholderComponent(
      this: void,
      CarouselPlaceholder: TCarouselPlaceholderComponent
    ): void {
      self.CarouselPlaceholder = CarouselPlaceholder
    },
    setSlideGroupTransitionAnimation(
      this: void,
      slideGroupTransitionAnimation: TRSlideGroupTransitionAnimation
    ): void {
      self._slideGroupTransitionAnimation = slideGroupTransitionAnimation

      self.setSlideData()
    },
    showCarouselPlaceholder(this: void): void {
      self.isCarouselPlaceholderShown = true
    },
    stopAutoTransition(this: void): void {
      self.isAutoTransitionStarted = false
    }
  }))
  .actions(self => ({
    afterCreate(): void {
      self.setSlideGroupTransitionAnimation(createStubAnimation(self))
    },
    setItemDimensions(
      this: void,
      dimensions: TItemDimensions,
      index: number
    ): void {
      self.itemDimensions[index] = dimensions
    },
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
  | keyof ICarouselModelDataRelatedVolatile<unknown, NativeMethods>
  | keyof TCarouselModelDataRelatedActions<unknown, NativeMethods>
  | '_slideGroupTransitionAnimation'
  | 'afterCreate'

type TOmittedInstance = Omit<Instance<typeof CarouselModel>, TKeysToOmit>

type TCarouselModelInternalInstance<
  TItem,
  TComponent extends NativeMethods
> = TOmittedInstance &
  TCarouselModelDataRelatedActions<TItem, TComponent> &
  ICarouselModelDataRelatedVolatile<TItem, TComponent>

type TCarouselModelInstance<TItem, TComponent extends NativeMethods> = Omit<
  TCarouselModelInternalInstance<TItem, TComponent>,
  'setItemDimensions' | 'slideGroupTransitionAnimation' | 'slideData'
>

export type { TCarouselModelInstance, TCarouselModelInternalInstance }

export { CarouselModel }
