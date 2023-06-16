import { Styles } from '../../styles/styled-components';

import ICON_MOON from './assets/lua.svg';
import ICON_SUN from './assets/sol.svg';
import { useAppContext } from '../../contexts/hook';


function iconSwitcher(selectedTheme: string) {
    return selectedTheme === 'light' ? 
    <img src={ICON_SUN} alt="light mode" /> : 
    <img src={ICON_MOON} alt="dark mode" />
}

export function Switcher() {
    const { state, toggleTheme } = useAppContext();

    return (
        <Styles.ContainerSwitcher>
            <Styles.Switcher 
                htmlFor="modo-switcher"
                $theme={state.selectedTheme}
            >
                <input 
                    type="checkbox" 
                    id="modo-switcher" 
                    onChange={toggleTheme}
                />
                <span></span>
            </Styles.Switcher>
            <label htmlFor="modo-switcher">
                {iconSwitcher(state.selectedTheme)}
            </label>
        </Styles.ContainerSwitcher>
    )
}