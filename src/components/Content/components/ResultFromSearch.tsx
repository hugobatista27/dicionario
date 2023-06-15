import { Styles } from '../../../styles/styled-components';
import { useAppContext } from '../../../contexts/hook';


function listItens(array: string[]):any {
    return (
        <ul>
            {array.map((word, index) => {
                if (index + 1 == array.length) {
                    return <li>{word}.</li>
                }
                return <li>{word},</li>
            })}
        </ul> 
    )
}

export default function ResultFromSearch() {
    const { state } = useAppContext();

    if (state.searchedWord.status === 'sucess') {
        return state.searchedWord.meanings.map((meaning: any) => {
            return (
                <Styles.Results>
                    <div className='classification'>
                        <h2>{meaning.partOfSpeech}</h2> 
                        <hr />
                    </div>
                    <div className='meaning'>
                        <h3>Meaning</h3>
                        <ul>
                            {meaning.definitions.map((example: any) => <li><span>&#8226;</span>{example.definition}</li>)}
                        </ul>
                    </div>
                    <div className='synonyms-antonyms'>
                        {meaning.synonyms.length > 0 && (
                            <div>
                                <h4>Synonyms</h4>
                                {listItens(meaning.synonyms)}
                            </div>
                        )}
                        {meaning.antonyms.length > 0 && (
                            <div>
                                <h4>Antonyms</h4>                       
                                {listItens(meaning.antonyms)}                       
                            </div>
                        )}
                    </div>
                </Styles.Results>
            )
        })
    }
    return <></>
}