import rootReducer from "store/rootReducer"

export * from "types/auth"
export * from "types/component"
export * from "types/admin"

export type RootState = ReturnType<typeof rootReducer>
