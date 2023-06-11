import styled from 'styled-components';

//imgs
import LOGO_BOOK from './assets/livro.svg';

// components 
import { Switcher } from './SwitcherVisionMode';

import MainContext from '../../contexts/MainContext';
import { useContext } from 'react';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 150px;

    select {
        border: none;
    }
`;

export function Header() {
    const { selectedFont, setSelectedFont } = useContext(MainContext);

    return (
        <StyledHeader>
            <img src={LOGO_BOOK} alt="logo" />
            <select name="" id="">
                <option value="serif">Serif</option>
                <option value="noserif">San Serif</option>
                <option value="mono">Mono</option>
            </select>
            <Switcher/>
        </StyledHeader>
    )
}