import SEARCH_ICON from '../assets/lupa.svg';

import styled from 'styled-components';
import { useState, KeyboardEvent } from 'react';
import { useAppContext } from '../../../contexts/hook';
import { getWord } from '../../../routes/fetchWord';

const SearchArea = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #D9D9D9; // cor padrão, adicionar a variável
    border-radius: 12px;
    padding: 18px 24px;

    input {
        flex: 1;
        background-color: transparent;
        font-size: 20px;
    }
    input:focus {
        outline: none;
    }
    img{
        background-color: #D9D9D9;
    }

`

export default function SearchBar() {
    const [search, setSearch] = useState<string>('');
    const { setSearchResult } : any = useAppContext()

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getWord(search, setSearchResult)
        }
    }

    return (
        <SearchArea htmlFor="setSearchResult">
            <input 
                type="text" 
                id="setSearchResult" 
                placeholder='Search'
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={handleKeyDown}
                />
            <img src={SEARCH_ICON} alt="Search"/>
        </SearchArea>
    )
}