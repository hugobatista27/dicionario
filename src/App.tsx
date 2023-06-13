import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';
import { Footer} from './components/Footer/Footer.js'

import {createGlobalStyle } from 'styled-components';

import { useAppContext } from './contexts/hook.js';

const BodyStyle = createGlobalStyle<{$fontFamily: string, $theme: string}>`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: 0;
		list-style: none;
		font-family: ${props => props.$fontFamily};
		background-color: ${props => props.$theme === 'light' ? 'white': 'black'};
		color: ${props => props.$theme === 'light' ? 'black': 'white'};
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
