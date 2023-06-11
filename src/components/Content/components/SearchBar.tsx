import SEARCH_ICON from '../assets/lupa.svg';

import styled from 'styled-components';

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

`

export default function SearchBar() {
    return (
        <SearchArea htmlFor="searchWord">
            <input type="text" id="searchWord" placeholder='Search' />
            <img src={SEARCH_ICON} alt="Search"/>
        </SearchArea>
    )
}