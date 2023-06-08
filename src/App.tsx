import MainContext from './contexts/MainContext.js';
import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';

import styled from 'styled-components';

const BodyStyle = styled.div`
	
    max-width: 740px;
	margin: auto;
`

function App() {
	const ValueContexts: any = [];

	return (
		<BodyStyle>
			<MainContext.Provider value={{ValueContexts}}>
				<Header/>
				<Content/>
			</MainContext.Provider>
		</BodyStyle>
	)
}

export default App
