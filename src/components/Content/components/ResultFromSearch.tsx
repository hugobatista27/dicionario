import styled from 'styled-components';
import { useAppContext } from '../../../contexts/hook';

const Results = styled.div`
    .classification {
        display: flex;
        align-items: center;
        gap: 10px;

        margin: 38px 0;

        h2 {
            font-style: italic;
            font-weight: 700;
            font-size: 24px;
        }
        hr {
            width: 100%;
            background-color: #D9D9D9;
            height: 1px;
        }
    }
    .meaning {
        h3 {
            margin: 24px 0;

            font-weight: 400;
            font-size: 20px;
        }
        ul {
            li {
                display: flex;
                flex: 1;
                font-weight: 400;
                font-size: 20px;
                margin-bottom: 16px;
                span {
                    color: #A169C9;
                    font-size: 20px;
                    padding: 0 20px;
                }
            }
        }
    }
    .synonyms-antonyms {
        display: flex;
        flex-direction: column;
        margin-top: 62px;
        gap: 20px;
        div {
            display: flex;
            gap: 24px;

            h4, ul li{
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 26px;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                li {
                    color: #A169C9;
                }
            }
        }
    }
`

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
                <Results>
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
                </Results>
            )
        })
    }
    return <></>
}