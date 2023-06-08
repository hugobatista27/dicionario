import MainContext from './contexts/MainContext.js';
import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';

function App() {
	const ValueContexts: any = [];

	return (
		<MainContext.Provider value={{ValueContexts}}>
			<Header/>
			<Content/>
		</MainContext.Provider>
	)
}

export default App
