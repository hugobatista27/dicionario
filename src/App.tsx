import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';
import { Footer} from './components/Footer/Footer.js'

import {createGlobalStyle } from 'styled-components';

import { useAppContext } from './contexts/hook.js';

const BodyStyle = createGlobalStyle<{$fontFamily: string, $theme: string}>`
	:root {
		--fontColor: ${props => props.$theme === 'light' ? 'black': 'white'};
		--bgColor: ${props => props.$theme === 'light' ? 'white': '#161616'};
		--secondaryColor: ${props => props.$theme === 'light' ? '#D9D9D9': '#000000'};
		--secondaryFontColor: ${props => props.$theme === 'light' ? '#9b9b9b': '#D9D9D9 '};

		--titleFont-size: 50px;
		--h2Font-size: 20px;
		--h3Font-size: 18px;
		--mainFont-size: 16px;
		--footer-font: 12px;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: 0;
		list-style: none;
		font-family: ${props => props.$fontFamily};
		background-color: var(--bgColor);
		color: var(--fontColor);
	}
	
	body {
		max-width: 740px;
		margin: auto;
		padding: 0 20px;
	}
`

function App() {
	const { state } = useAppContext();
	
	return (
		<>
			<BodyStyle $fontFamily={state.selectedFont} $theme={state.selectedTheme}/>
			<Header/>
			<Content/>
			<Footer/>
		</>
	)
}

export default App
