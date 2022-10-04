import { ReactNode } from 'react'

export interface ICalculatorGroup {
    children?: ReactNode
}

const CalculatorGroup = ({ children }: ICalculatorGroup) => {
    return (
        <div className="flex items-center py-14 justify-center bg-solidBlue-50">
            {children}
        </div>
    )
}

export default CalculatorGroup
