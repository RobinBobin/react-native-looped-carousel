// Type 'ICarouselModelCommonActions' does not satisfy the constraint 'ModelActions'.

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TCarouselModelCommonActions = {
  setSlideData: () => void
}

type TRCarouselModel = Readonly<TCarouselModelCommonActions>

export type { TCarouselModelCommonActions, TRCarouselModel }
