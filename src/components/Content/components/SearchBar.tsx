import SEARCH_ICON from '../assets/lupa.svg';

import { Styles } from '../../../styles/styled-components'; 
import { useState, KeyboardEvent, useEffect } from 'react';
import { useAppContext } from '../../../contexts/hook';
import { getWord } from '../../../routes/fetchWord';


export default function SearchBar() {
    const [search, setSearch] = useState<string>('');
    const [showMessageError, setShowMessageError] = useState(false)
    const { state } = useAppContext()
    const { setSearchResult } : any = useAppContext();

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getWord(search, setSearchResult)
        }
    }

    useEffect(() => {
        if (state.searchedWord.status === 'erro') {
            setShowMessageError(true)
        }
    }, [state.searchedWord])

    useEffect(() => {
        setShowMessageError(false)
    }, [search])

    return (
        <>
            <Styles.SearchArea htmlFor="setSearchResult">
                <input 
                    type="text" 
                    id="setSearchResult" 
                    placeholder='Search'
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                    onKeyDown={handleKeyDown}
                    autoComplete='off'
                    />
                <img src={SEARCH_ICON} alt="Search"/>
            </Styles.SearchArea>
            {showMessageError && (
                <Styles.AdviceParagraph $alertColor={'red'}>
                    Invalid search, try again...
                </Styles.AdviceParagraph>
            )}
            {!showMessageError && (
                <Styles.AdviceParagraph>
                    Search for a word...
                </Styles.AdviceParagraph>
            )}
        </>
    )
}