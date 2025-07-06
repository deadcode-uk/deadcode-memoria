# Memoria

A simple, fast state management solution for use with React

## Client-side

This library provides a React hook to access and observe state, so any components that use the hook need to be rendered client-side

## Creating State

State is created using the `createState` function

```js
import { createState } from "@deadcode-uk/memoria"

const menuVisibleState = createState(false)
```

You can be explicit about the state value type if needed

```ts
const menuOptionsState = createState<MenuOption[] | null>(null)
```

## Accessing and Observing State

State objects provide a `value` property that can be used to read and update state

```js
import { menuVisibleState } from "my-app/state"

console.log(menuVisibleState.value) // false
menuVisibleState.value = true
console.log(menuVisibleState.value) // true
```

This by itself is not very useful, but components can observe state changes when the `useStateValue` hook is used

```jsx
"use client"

import { createState, useStateValue } from "@deadcode-uk/memoria"

const counterState = createState(0)

export function MyComponent() {
    const counter = useStateValue(counterState)

    const increaseCounter = () => {
        counterState.value += 1
    }

    return (
        <div>
            <p>counter value is {counter}</p>
            <button onClick={increaseCounter}>increase counter</button>
        </div>
    )
}
```
