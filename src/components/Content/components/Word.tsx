import PLAYER_IMG from '../assets/play.svg';

import { useState } from 'react';

import styled from 'styled-components';
import { useAppContext } from '../../../contexts/hook';

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
    const { state } = useAppContext();

    if ( Object.keys(state.searchedWord).length !== 0) {
        return (
            <WordAreaStyle>
                <div>
                    <h1>{state.searchedWord.word}</h1>
                    <p>{state.searchedWord.phonetics[1].text}</p>  
                </div>
                <button>
                    <img src={PLAYER_IMG} alt="Listen word" />
                </button>
            </WordAreaStyle>
        )
    }

    return (
        <p>Pesquise por um palavra</p>
    )
}