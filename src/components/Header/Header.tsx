import styled from 'styled-components';
import { useAppContext } from '../../contexts/hook';

import LOGO_BOOK from './assets/livro.svg';
import { FONTS_OPTIONS } from '../../styles/fonts';

import { Switcher } from './SwitcherVisionMode';


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
	const { changeFont } = useAppContext();

    return (
        <StyledHeader>
            <img src={LOGO_BOOK} alt="logo" />
            <select onChange={(e) => changeFont(e.target.value)}>
                {FONTS_OPTIONS.map(
                    (font, index) => 
                    <option 
                        key={font.fontName + index} 
                        value={font.fontName}>
                            {font.style}
                    </option>)}
            </select>
            <Switcher/>
        </StyledHeader>
    )
}