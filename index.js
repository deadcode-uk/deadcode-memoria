"use client"

import { useEffect, useState } from "react"

export function createState(value) {
    const listeners = new Set()

    return {
        get value() {
            return value
        },
        set value(next) {
            if (value === next) {
                return
            }

            value = next

            listeners.forEach((listener) => {
                listener(value)
            })
        },
        addListener(listener) {
            listeners.add(listener)
        },
        removeListener(listener) {
            listeners.delete(listener)
        }
    }
}

export function useStateValue(state) {
    const [value, setValue] = useState(state.value)

    useEffect(() => {
        state.addListener(setValue)

        return () => {
            state.removeListener(setValue)
        }
    }, [state])

    return value
}
