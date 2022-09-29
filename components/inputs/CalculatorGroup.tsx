import { ReactNode } from 'react'

export interface ICalculatorGroup {
    children?: ReactNode
}

const CalculatorGroup = ({ children }: ICalculatorGroup) => {
    return (
        <div className="flex flex-col items-center gap-4 py-14 justify-center">
            {children}
        </div>
    )
}

export default CalculatorGroup
