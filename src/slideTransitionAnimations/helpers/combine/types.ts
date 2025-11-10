type TPartialReturnType<T1, T2> = T1 & (T2 extends undefined ? T1 : T2)

export type TCombineReturnType<T, S1, S2, S3, S4, S5, S6, S7, S8, S9> = T &
  TPartialReturnType<
    S1,
    TPartialReturnType<
      S2,
      TPartialReturnType<
        S3,
        TPartialReturnType<
          S4,
          TPartialReturnType<
            S5,
            TPartialReturnType<
              S6,
              TPartialReturnType<S7, TPartialReturnType<S8, S9>>
            >
          >
        >
      >
    >
  >
