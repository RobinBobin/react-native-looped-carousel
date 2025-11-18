import type { NativeMethods } from 'react-native'
import type { UndefinedOnPartialDeep } from 'type-fest'
import type { TWithCarouselModel } from '../../../mst'
import type { TCarouselSetupCallback } from './carouselSetupCallback'

interface IUseCarouselModelReturnType<TItem, TComponent extends NativeMethods>
  extends TWithCarouselModel<TItem, TComponent> {
  carousel: React.ReactElement<TWithCarouselModel<TItem, TComponent>>
}

type TUseCarouselModelParams<
  TItem,
  TComponent extends NativeMethods
> = Readonly<
  UndefinedOnPartialDeep<{
    onPostCreateModel?: TCarouselSetupCallback<TItem, TComponent>
    onPreCreateModel?: () => void
  }>
>

export type { IUseCarouselModelReturnType, TUseCarouselModelParams }
