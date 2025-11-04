interface IItemComponentProps<TItem> {
  index: number
  item: TItem
}

type TItemComponent<TItem> = React.ComponentType<IItemComponentProps<TItem>>

export type { IItemComponentProps, TItemComponent }
