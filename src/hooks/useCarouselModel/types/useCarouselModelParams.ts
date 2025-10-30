import type { UndefinedOnPartialDeep } from 'type-fest'
import type { TCarouselSetupCallback } from './carouselSetupCallback'

export type TUseCarouselModelParams<TItem> = Readonly<
  UndefinedOnPartialDeep<{
    onPostCreateModel?: TCarouselSetupCallback<TItem>
    onPreCreateModel?: () => void
  }>
>
