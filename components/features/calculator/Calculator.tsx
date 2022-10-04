import { useCallback, useEffect, useState } from 'react'
import Slider from 'react-input-slider'

import CalculatorGroup from '../../inputs/CalculatorGroup'
import { solidBlue, lightBlue } from '../../../utils/colors'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface ICalculator {
    xWorth: number
    xLoan: number
    xInterest: number
}

const Calculator = ({ xWorth, xInterest, xLoan }: ICalculator) => {
    const [state, setState] = useState({
        xValues: { worth: xWorth, loan: xLoan, interest: xInterest },
    })

    // Sum is the sum including the deductible tax
    const [sum, setSum] = useState(0)

    // sumWithoutTax is the sum excluding the deductible tax
    const [sumWithoutTax, setsumWithoutTax] = useState(0)

    const calcSum = useCallback(() => {
        const interestCost = state.xValues.loan * (state.xValues.interest / 100)

        const interestCostMonthly =
            (state.xValues.loan * (state.xValues.interest / 100)) / 12

        const amortization =
            state.xValues.loan / state.xValues.worth > 0.7
                ? 0.02
                : state.xValues.loan / state.xValues.worth < 0.5
                ? 0
                : 0.01

        const amortizationCostMonthly = (amortization * state.xValues.loan) / 12

        const deductibleTax =
            interestCost > 100000
                ? (0.21 * (interestCost - 100000) + 100000 * 0.3) / 12
                : (0.3 * interestCost) / 12

        setsumWithoutTax(deductibleTax)

        return Math.round(interestCostMonthly + amortizationCostMonthly)
    }, [state])

    useEffect(() => {
        setSum(calcSum())
    }, [state, calcSum])

    useEffect(() => {
        setSum(calcSum())
    }, [calcSum])

    return (
        <CalculatorGroup>
            <div className="bg-white w-1/3 flex flex-col justify-center items-center gap-2 px-14 rounded-md shadow-lg">
                <div className="border-b border-gray-200 p-8 flex justify-center items-center w-full flex-col">
                    <div className="text-xl font-bold">
                        {new Intl.NumberFormat().format(sum)} kr / månad *
                    </div>
                    <div className="text-sm pt-2">
                        <i>
                            {new Intl.NumberFormat().format(
                                Math.round(sum - sumWithoutTax)
                            )}
                            &nbsp;kr / månad efter skatteavdrag
                        </i>
                    </div>
                </div>

                <div className="pt-8 flex text-sm justify-between w-full items-center">
                    <div>Bostadens värde</div>
                    <div>
                        <input
                            className="text-right w-24 bg-transparent"
                            disabled
                            defaultValue={new Intl.NumberFormat().format(
                                state.xValues.worth
                            )}
                        />
                        &nbsp;kr
                    </div>
                </div>
                <Slider
                    axis="x"
                    xmin={500000}
                    xmax={20000000}
                    xstep={25000}
                    x={state.xValues.worth}
                    onChange={({ x }) =>
                        setState((prevState) => ({
                            ...prevState,
                            xValues: { ...prevState.xValues, worth: x },
                        }))
                    }
                    styles={{
                        track: {
                            backgroundColor: lightBlue,
                        },
                        active: {
                            backgroundColor: solidBlue,
                        },
                        disabled: {
                            opacity: 0.5,
                        },
                    }}
                />
                <div className="pt-8 flex text-sm justify-between w-full items-center">
                    <div>Lånebelopp</div>
                    <div>
                        <input
                            className="text-right w-20 bg-transparent"
                            disabled
                            defaultValue={new Intl.NumberFormat().format(
                                state.xValues.loan
                            )}
                        />
                        &nbsp;kr
                    </div>
                </div>
                <Slider
                    axis="x"
                    xmin={500000}
                    xmax={5000000}
                    xstep={25000}
                    x={state.xValues.loan}
                    onChange={({ x }) =>
                        setState((prevState) => ({
                            ...prevState,
                            xValues: { ...prevState.xValues, loan: x },
                        }))
                    }
                    styles={{
                        track: {
                            backgroundColor: lightBlue,
                        },
                        active: {
                            backgroundColor: solidBlue,
                        },
                        disabled: {
                            opacity: 0.5,
                        },
                    }}
                />
                <div className="pt-8 flex text-sm justify-between w-full items-center">
                    <div>Ränta</div>
                    <div>
                        <input
                            className="text-right w-20 bg-transparent"
                            defaultValue={state.xValues.interest.toFixed(2)}
                            disabled
                        />
                        &nbsp;%
                    </div>
                </div>
                <Slider
                    axis="x"
                    xmax={10}
                    xstep={0.01}
                    x={state.xValues.interest}
                    onChange={({ x }) =>
                        setState((prevState) => ({
                            ...prevState,
                            xValues: { ...prevState.xValues, interest: x },
                        }))
                    }
                    styles={{
                        track: {
                            backgroundColor: lightBlue,
                        },
                        active: {
                            backgroundColor: solidBlue,
                        },
                        disabled: {
                            opacity: 0.5,
                        },
                    }}
                />
                <Accordion
                    sx={{
                        boxShadow: 'none',
                        margin: '2rem 0 1rem',
                        paddingTop: '1rem',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            padding: '0',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                padding: '0',
                                fontSize: '0.8rem',
                                justifyContent: 'center',
                                color: 'rgba(0,0,0, 0.4)',
                            }}
                        >
                            Se hur vi har räknat *
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                fontSize: '0.8rem',
                                color: 'rgba(0,0,0, 0.4)',
                            }}
                        >
                            Storleken på amorteringen bestäms av belåningsgraden
                            (lånebelopp i förhållande till bostadens värde som
                            du anger i kalkylen). Lånebelopp som är över 50
                            procent upp till 70 procent av bostadens värde
                            amorteras med 1 procent per år. Lånebelopp över 70
                            procent av bostadens värde amorteras med 2 procent
                            per år.
                            <br />
                            <br />
                            Månadskostnaden räknas både före och efter
                            skatteavdrag. Vid beräkning av skatteavdrag antar
                            kalkylen att du/ni kan göra maximala avdrag, f.n. 30
                            procent för betalda räntor som inte är högre än 100
                            000 kr och 21 procent för räntor över 100 000 kr.
                            Avdragsbeloppen räknas årligen.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </CalculatorGroup>
    )
}

export default Calculator
