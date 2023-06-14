import PLAYER_IMG from '../assets/play.svg';

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
        background-color: var(--secondaryColor);
        img {
            background-color: transparent;
        }
    }

`

export default function Word() {
    const { state } = useAppContext();
    console.log(state.searchedWord)

    if ( state.searchedWord.status === 'sucess') {
        return (
            <WordAreaStyle>
                <div>
                    <h1>{state.searchedWord.word}</h1>
                    <p>{state.searchedWord.phonetic}</p>  
                </div>
                <button>
                    <img src={PLAYER_IMG} alt="Listen word" />
                </button>
            </WordAreaStyle>
        )
    }
    if (state.searchedWord.status === 'erro') {
        return <p>Busca inválida, tente novamente</p>
    }

    return (
        <p>Pesquise por um palavra</p>
    )
}