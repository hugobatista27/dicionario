import { Styles } from '../../styles/styled-components';
import { useAppContext } from '../../contexts/hook';

import LOGO_BOOK from './assets/livro.svg';
import { FONTS_OPTIONS } from '../../styles/fonts';

import { Switcher } from './SwitcherVisionMode';

export function Header() {
	const { changeFont } = useAppContext();

    return (
        <Styles.StyledHeader>
            <img src={LOGO_BOOK} alt="logo" />
            <div>
                <select onChange={(e) => changeFont(e.target.value)}>
                    {FONTS_OPTIONS.map(
                        (font, index) =>
                        <option
                            key={font.fontName + index}
                            value={font.fontName}>
                                {font.style}
                        </option>)}
                </select>
                <Styles.Divider/>
                <Switcher/>
            </div>
        </Styles.StyledHeader>
    )
}