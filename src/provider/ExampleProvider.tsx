import { createContext, useCallback, useContext, useMemo, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'

type Example = number

export type ExampleData = {
    currentExample: Example
    setCurrentExample: (v: Example) => void
}

const ExampleContext = createContext<ExampleData | undefined>(undefined)

export { ExampleContext }

export const ExampleProvider = ({ children }: PropsWithChildren) => {
    const [currentExample, setCurrentExample] = useState<Example>(0)


    const data: ExampleData = useMemo(() => {
        return {
            currentExample, setCurrentExample,
        }
    }, [currentExample])

    return (
        <ExampleContext.Provider value={data}>
            {children}
        </ExampleContext.Provider>
    )
}

export const useExampleData = () => {
    const data = useContext(ExampleContext)
    if (!data) {
        throw new Error('useExampleData must be used within a ExampleProvider')
    }
    return data
}
