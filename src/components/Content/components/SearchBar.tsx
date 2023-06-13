import SEARCH_ICON from '../assets/lupa.svg';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
    const [isEditing, setIsEditing] = useState(false);
    const [search, setSearch] = useState<string>('');
    const { setSearchResult } = useAppContext()

    useEffect(() => {
        if (isEditing) {
            document.addEventListener('keydown', (event) => {
                if (event.key === "Enter") {
                    setIsEditing(false)
                }
            })
        } 
        if(search && !isEditing) {
            getWord(search, setSearchResult)
        }
    }, [isEditing])

    return (
        <SearchArea htmlFor="setSearchResult">
            <input type="text" id="setSearchResult" placeholder='Search' 
            onFocus={() => setIsEditing(true)}
            onChange={(e) => setSearch(e.target.value)}
            />
            <img src={SEARCH_ICON} alt="Search"/>
        </SearchArea>
    )
}