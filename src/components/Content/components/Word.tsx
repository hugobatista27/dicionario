import PLAYER_IMG from '../assets/play.svg';

import { Styles } from '../../../styles/styled-components';
import { useAppContext } from '../../../contexts/hook';


export default function Word() {
    const { state } = useAppContext();
    
    const playAudio = () => {
        const audio = new Audio(state.searchedWord.phonetics[0].audio);
        audio.play();
    };

    if ( state.searchedWord.status === 'sucess') {
        return (
            <Styles.WordAreaStyle>
                <div>
                    <h1>{state.searchedWord.word}</h1>
                    <p>{state.searchedWord.phonetic}</p>  
                </div>
                {
                   (state.searchedWord.phonetics.length != 0 && state.searchedWord.phonetics[0].audio) && (
                    <button
                        onClick={playAudio}>
                        <img src={PLAYER_IMG} alt="Listen word" />
                    </button>
                   )
                }
            </Styles.WordAreaStyle>
        )
    }
}