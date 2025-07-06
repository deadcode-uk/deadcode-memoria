export type State<T> = {
    value: T
    readonly addListener: (listener: StateListener<T>) => void
    readonly removeListener: (listener: StateListener<T>) => void
}

export type StateListener<T> = (value: T) => void

export function createState<T>(initialValue: T): State<T>

export function useStateValue<T>(state: State<T>): T
