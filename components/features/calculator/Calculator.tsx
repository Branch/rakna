import { useState } from 'react'
import Slider from 'react-input-slider'

import CalculatorGroup from '../../inputs/CalculatorGroup'
import { solidBlue } from '../../../utils/colors'

export interface ICalculator {
    title?: string
    x: number
}

const Calculator = ({ title, x }: ICalculator) => {
    const [state, setState] = useState({ x: x })

    return (
        <CalculatorGroup>
            <div>{title}</div>
            <Slider
                axis="x"
                x={state.x}
                onChange={({ x }) => setState((state) => ({ ...state, x }))}
                styles={{
                    active: {
                        backgroundColor: solidBlue,
                    },
                    disabled: {
                        opacity: 0.5,
                    },
                }}
            />
        </CalculatorGroup>
    )
}

export default Calculator
