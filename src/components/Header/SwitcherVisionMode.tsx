import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ICON_MOON from './assets/lua.svg';
import ICON_SUN from './assets/sol.svg';


const StyledLabel = styled.label<{$mode?: boolean}>`
    position: relative;
    display: inline-block;

    width: 40px;
    height: 20px;
    border-radius: 10px;

    background-color: ${props => props.$mode ? 'black': 'white'};

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: .4s;
        transition: .4s;
    }

    span:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        border-radius: 50%;
        background-color: ${props => props.$mode ? 'white': 'black'};
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + span:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
`

const Div = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export function Switcher({children} : {children: React.ReactNode}) {
    const [isNightMode, setIsNightMode] = useState<boolean>(true)

    return (
        <Div>
            <StyledLabel 
                htmlFor="modo-switcher"
                $mode={isNightMode}>
                <input type="checkbox" id="modo-switcher" onChange={() => setIsNightMode(!isNightMode)}/>
                <span></span>
            </StyledLabel>
            { isNightMode && (
                <img src={ICON_SUN} alt="light mode" />
            )} 
            { !isNightMode && (
                <img src={ICON_MOON} alt="dark mode" />
            )}
        </Div>
    )
}