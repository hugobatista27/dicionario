import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';
import { Footer} from './components/Footer/Footer.js'
import { GlobalStyle } from './styles/styled-components.js';

import { useAppContext } from './contexts/hook.js';

function App() {
	const { state } = useAppContext();
	
	return (
		<>
			<GlobalStyle $fontFamily={state.selectedFont} $theme={state.selectedTheme}/>
			<Header/>
			<Content/>
			<Footer/>
		</>
	)
}

export default App
