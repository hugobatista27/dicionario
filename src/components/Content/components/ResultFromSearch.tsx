import { Styles } from '../../../styles/styled-components';
import { useAppContext } from '../../../contexts/hook';
import { useState } from 'react';
import { styled } from 'styled-components';


function listItens(array: string[]):any {
    return (
        <ul>
            {array.map((word, index) => {
                if (index + 1 == array.length) {
                    return <li key={word + index}>{word}.</li>
                }
                return <li key={word + index}>{word},</li>
            })}
        </ul> 
    )
}

export default function ResultFromSearch() {
    const { state } = useAppContext();

    if (state.searchedWord.status === 'sucess') {
        return state.searchedWord.meanings.map((meaning: any, ind: number) => {
            return (
                <Styles.Results key={meaning + ind}>
                    <div className='classification'>
                        <h2>{meaning.partOfSpeech}</h2> 
                        <hr />
                    </div>
                    <Meanings meaning={meaning}/>
                    <SynonymsAntonymsArea meaning={meaning}/>
                </Styles.Results>
            )
        })
    }
    return <></>
}

const ExampleStyle = styled.li<{$show: boolean}>`
    display: ${props => props.$show ? 'flex' : 'none'} !important;
`

function Meanings ({meaning}: any) {
    const definitions: string[] = meaning.definitions;
    const numbeOfExamples = 3;
    const [seeMoreExamples, setSeeMoreExamples] = useState<boolean>(false);

    const toggleMoreExamples = () => {
        !seeMoreExamples ? setSeeMoreExamples(true) : setSeeMoreExamples(false);
    }

    return (
        <div className='meaning'>
            <h3>Meaning</h3>
            <ul>
                {definitions.map((example: any, index: number) => {
                    if(index < numbeOfExamples) {
                        return (
                            <ExampleStyle $show={true}
                                key={example.definition + index}>
                                <span>&#8226;</span>
                                {example.definition}
                            </ExampleStyle>
                        )
                    } else {
                        return (
                            <ExampleStyle $show={seeMoreExamples}
                                key={example.definition + index}>
                                <span>&#8226;</span>
                                {example.definition}
                            </ExampleStyle>
                        )
                    }
                })}
            </ul>
            {definitions.length > numbeOfExamples && (
                <button 
                    onClick={toggleMoreExamples}>
                    {seeMoreExamples ? 'See less examples...' : 'See more examples...'}
                </button>)
            }
        </div>
    )
}

function SynonymsAntonymsArea ({meaning}: any) {
    const synonyms : string[] = meaning.synonyms;
    const antonyms : string[] = meaning.antonyms;

    if (synonyms.length > 0 || antonyms.length > 0) {
        return (
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
        )
    }
}