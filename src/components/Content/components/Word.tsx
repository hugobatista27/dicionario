import PLAYER_IMG from '../assets/play.svg';

import { useState } from 'react';

import styled from 'styled-components';

const WordAreaStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 40px 0;

    div {
        flex: 1;
        h1 {
            font-weight: 700;
            font-size: 65px;
        }
        p {
            color: #A169C9; // add variável
            font-weight: 400;
            font-size: 24px;
        }
    }
    
    button {
        width: 75px;
        height: 75px;
        border-radius: 50%;

    }

`

export default function Word() {
    const [searchedWord, setSearchedWord] = useState<string>('Keyboard');
    const [phonetic, setPhonetic] = useState<string>(`/'ki:b:d/`)

    return (
        <WordAreaStyle>
            <div>
                <h1>{searchedWord}</h1>
                <p>{phonetic}</p>  
            </div>
            <button>
                <img src={PLAYER_IMG} alt="Listen word" />
            </button>
        </WordAreaStyle>
    )
}