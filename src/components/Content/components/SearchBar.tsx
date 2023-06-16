import SEARCH_ICON from '../assets/lupa.svg';

import { Styles } from '../../../styles/styled-components'; 
import { useState, KeyboardEvent } from 'react';
import { useAppContext } from '../../../contexts/hook';
import { getWord } from '../../../routes/fetchWord';


export default function SearchBar() {
    const [search, setSearch] = useState<string>('');
    const { setSearchResult } : any = useAppContext()

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getWord(search, setSearchResult)
        }
    }

    return (
        <Styles.SearchArea htmlFor="setSearchResult">
            <input 
                type="text" 
                id="setSearchResult" 
                placeholder='Search'
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete='off'
                />
            <img src={SEARCH_ICON} alt="Search"/>
        </Styles.SearchArea>
    )
}