import styled from 'styled-components';

import ICON_MOON from './assets/lua.svg';
import ICON_SUN from './assets/sol.svg';
import { useAppContext } from '../../contexts/hook';


const StyledLabel = styled.label<{$theme?: string}>`
    position: relative;
    display: inline-block;

    width: 40px;
    height: 20px;
    border-radius: 10px;


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
        background-color: ${props => props.$theme === 'light' ? 'black' : 'white'};
        border-radius: 10px;


    }

    span:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        border-radius: 50%;
        background-color: ${props => props.$theme === 'light' ? 'white' : 'black'};
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + span:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
        background-color: ${props => props.$theme === 'light' ? 'white' : 'black'};
    }
    
    input:checked + span {
        border-radius: 10px;
        background-color: ${props => props.$theme === 'light' ? 'black' : 'white'};
    }
`

const Div = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function iconSwitcher(selectedTheme: string) {
    return selectedTheme === 'light' ? 
    <img src={ICON_SUN} alt="light mode" /> : 
    <img src={ICON_MOON} alt="dark mode" />
}

export function Switcher() {
    const { state, toggleTheme } = useAppContext();


    return (
        <Div>
            <StyledLabel 
                htmlFor="modo-switcher"
                $theme={state.selectedTheme}
            >
                <input 
                    type="checkbox" 
                    id="modo-switcher" 
                    onChange={toggleTheme}
                />
                <span></span>
            </StyledLabel>
            <label htmlFor="modo-switcher">
                {iconSwitcher(state.selectedTheme)}
            </label>
        </Div>
    )
}