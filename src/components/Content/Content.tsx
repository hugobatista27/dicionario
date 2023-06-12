import SearchBar from './components/SearchBar.tsx';
import Word from './components/Word.tsx';
import ResultFromSearch from './components/ResultFromSearch.tsx';

export function Content() {
    return (
        <main>
            <SearchBar/>
            <Word/>
            <ResultFromSearch/>
        </main>
    )
}

