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
            font-size: var(--titleFont-size);
        }
        p {
            color: #A169C9; // add variável
            font-weight: 400;
            font-size: var(--h2Font-size);
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

    @media (max-width: 600px) {
        div {
            h1 {
                font-weight: 700;
                font-size: 35px;
            }
        }
        button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--secondaryColor);
            img {
                background-color: transparent;
            }
        }
    }
`

const AdviceParagraph = styled.p<{$alertColor?: string }>`
    color: ${props => !props.$alertColor ? '' : props.$alertColor}; 
    margin: 16px 0 0 10px;
`

export default function Word() {
    const { state } = useAppContext();
    
    const playAudio = () => {
        const audio = new Audio(state.searchedWord.phonetics[0].audio);
        audio.play();
    };

    if ( state.searchedWord.status === 'sucess') {
        return (
            <WordAreaStyle>
                <div>
                    <h1>{state.searchedWord.word}</h1>
                    <p>{state.searchedWord.phonetic}</p>  
                </div>
                <button
                    onClick={playAudio}>
                    <img src={PLAYER_IMG} alt="Listen word" />
                </button>
            </WordAreaStyle>
        )
    }
    if (state.searchedWord.status === 'erro') {
        return <AdviceParagraph $alertColor={'red'}>Busca inválida, tente novamente</AdviceParagraph>
    }

    return (
        <AdviceParagraph>Pesquise por um palavra</AdviceParagraph>
    )
}