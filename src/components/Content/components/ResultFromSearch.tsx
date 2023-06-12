import React from 'react';
import styled from 'styled-components';

const Results = styled.div`
    .classification {
        display: flex;
        align-items: center;
        gap: 10px;

        margin: 38px 0;

        strong {
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
        h2 {
            margin: 24px 0;

            font-weight: 400;
            font-size: 20px;
        }
        ul {
            li {
                font-weight: 400;
                font-size: 20px;
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
                gap: 12px;
                li {
                    color: #A169C9;
                }
            }
        }
    }
`

const antonyms: string[] = [
    'bye',
    'goodbye'
]

const synonyms: string[] = [
    'hey',
    'hi'
]

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
    return (
        <Results>
            <div className='classification'>
                {/* classificação da palavra, pode ter várias classificações colocar um .map*/}
                <strong>noun</strong> 
                <hr />
            </div>
            <div className='meaning'>
                <h2>Meaning</h2>
                <ul>
                    {/* array.map return li */}
                    <li><span>&#8226;</span> (etc)</li>
                    <li><span>&#8226;</span> testee</li>
                </ul>
            </div>
            <div className='synonyms-antonyms'>
                {synonyms.length != 0 && (
                    <div>
                        <h4>Synonyms</h4>
                        {listItens(synonyms)}
                    </div>
                )}
                {antonyms.length != 0 && (
                    <div>
                        <h4>Antonyms</h4>                       
                        {listItens(antonyms)}                       
                    </div>
                )}
            </div>
        </Results>
    )
}