import { useAppContext } from '../../contexts/hook';
import LINK_ICON from './assets/link.svg'

import styled from 'styled-components';

const FooterStyle = styled.footer`
    margin-top: 40px;

    &:last-child{
        margin-bottom: 50px;
    }

    hr {
        width: 100%;
        background-color: #D9D9D9;
        height: 1px;
    }

    div {
        display: flex;
        gap: 16px;

        padding-top: 24px;

        p, a {
            font-weight: 400;
            font-size: var(--footer-font);
            color: var(--secondaryFontColor);
        }
        a {
            span {
                margin-right: 10px;
            }
        }
    }
    
    @media (max-width: 500px){
        a {
            span {
                display: none;
            }
        }
    }
`

export function Footer() {
    const { state } = useAppContext();

    return (
        <FooterStyle>
            <hr />
            {state.searchedWord.status === 'sucess' && (
                <div>
                    <p>Source:</p>
                    <a href={state.searchedWord.sourceUrls[0]} target='_blank'>
                        <span>
                            {state.searchedWord.sourceUrls[0]}
                        </span>
                        <img src={LINK_ICON}/>
                    </a>
                </div>
            )}
            <div>
                <p>By:</p>
                <a href={'https://github.com/hugobatista27'} target='_blank'>
                    <span>
                        {'Hugo Batista'}
                    </span>
                    <img src={LINK_ICON}/>
                </a>
            </div>
            
        </FooterStyle>
    )
}
