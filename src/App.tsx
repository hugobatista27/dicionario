import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';
import { Footer} from './components/Footer/Footer.js'

import styled from 'styled-components';

import { getWord } from './routes/fetchWord.js'
import { useAppContext } from './contexts/hook.js';

const BodyStyle = styled.div`
    max-width: 740px;
	margin: auto;
	padding: 0 20px;
`

function App() {
	const { state } = useAppContext();

	console.log({state})
	
	return (
		<BodyStyle>
				<Header/>
				<Content/>
				<Footer/>
		</BodyStyle>
	)
}

export default App
