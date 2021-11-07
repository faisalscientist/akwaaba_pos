import rootReducer from "store/rootReducer"

export * from "types/auth"
export type RootState = ReturnType<typeof rootReducer>
