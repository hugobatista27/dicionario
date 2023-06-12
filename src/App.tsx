import { useEffect } from 'react';

//import MainContext from './contexts/MainContext.js';
import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';
import { Footer} from './components/Footer/Footer.js'

import styled from 'styled-components';
//import { useState } from 'react';

import { getWord } from './routes/fetchWord.js'

const BodyStyle = styled.div`
    max-width: 740px;
	margin: auto;
	padding: 0 20px;
`

function App() {
	//const [selectedFont, setSelectedFont] = useState<string>('serif');
	
	/* const ValueContexts = {
		selectedFont: selectedFont,
		setSelectedFont: setSelectedFont
	}; */

	useEffect(() => {
		/* adicionar a mudança de estado  no callback */
		getWord('hello', console.log)
	}, [])

	return (
		<BodyStyle>
			{/* <MainContext.Provider value={ValueContexts}> */}
				<Header/>
				<Content/>
				<Footer/>
			{/* </MainContext.Provider> */}
		</BodyStyle>
	)
}

export default App
