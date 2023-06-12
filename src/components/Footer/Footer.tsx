import LINK_ICON from './assets/link.svg'

import styled from 'styled-components';

const FooterStyle = styled.footer`
    margin-top: 40px;
    hr {
        width: 100%;
        background-color: #D9D9D9;
        height: 1px;
    }

    div {
        display: flex;
        gap: 16px;

        padding: 24px 0;
        margin-bottom: 50px;

        p, a {
            font-weight: 400;
            font-size: 16px;
            color: #5E5E5E;
        }
        a {
            span {
                margin-right: 10px;

            }
        }
    }
`

export function Footer() {
    return (
        <FooterStyle>
            <hr />
            <div>
                <p>Source:</p>
                <a href={`https://en.wiktionary.org/wiki/${'hello'}`}>
                    <span>
                        {`https://en.wiktionary.org/wiki/${'hello'}`}
                    </span>
                    <img src={LINK_ICON}/>
                </a>
            </div>
        </FooterStyle>
    )
}