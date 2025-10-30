import type { UndefinedOnPartialDeep } from 'type-fest'
import type { TWithCarouselModel } from '../../../mst'
import type { TCarouselSetupCallback } from './carouselSetupCallback'

interface IUseCarouselModelReturnType<TItem> extends TWithCarouselModel<TItem> {
  carousel: React.ReactElement<TWithCarouselModel<TItem>>
}

type TUseCarouselModelParams<TItem> = Readonly<
  UndefinedOnPartialDeep<{
    onPostCreateModel?: TCarouselSetupCallback<TItem>
    onPreCreateModel?: () => void
  }>
>

export type { IUseCarouselModelReturnType, TUseCarouselModelParams }
