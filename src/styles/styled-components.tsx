import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{$fontFamily: string, $theme: string}>`
    :root {
        --fontColor: ${props => props.$theme === 'light' ? 'black': 'white'};
        --bgColor: ${props => props.$theme === 'light' ? 'white': '#161616'};
        --secondaryColor: ${props => props.$theme === 'light' ? '#D9D9D9': '#000000'};
        --secondaryFontColor: ${props => props.$theme === 'light' ? '#9b9b9b': '#D9D9D9 '};

        --titleFont-size: 50px;
        --h2Font-size: 20px;
        --h3Font-size: 18px;
        --mainFont-size: 16px;
        --footer-font: 14px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        list-style: none;
        font-family: ${props => props.$fontFamily};
        background-color: var(--bgColor);
        color: var(--fontColor);
    }

    body {
        max-width: 740px;
        margin: auto;
        padding: 0 20px;
    }
`

const Styles = {
    // header
    StyledHeader: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 150px;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            gap: 25px;
            select {
                border: none;
                font-size: 16px;
            }
        }
    `,

    Divider: styled.div`
        height: 100%;
        width: 1px;
        background-color: var(--fontColor);
    `,

    // content
    WordAreaStyle: styled.div`
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
    `,

    AdviceParagraph: styled.p<{$alertColor?: string }>`
        color: ${props => !props.$alertColor ? '' : props.$alertColor}; 
        margin: 16px 0 0 10px;
        font-size: var(--footer-font);
    `,

    SearchArea: styled.label`
        width: 100%;
        display: flex;
        align-items: center;
        background-color: var(--secondaryColor);
        border-radius: 12px;
        padding: 18px 24px;

        input {
            flex: 1;
            color: var(--secondaryFontColor);
            background-color: transparent;
            font-size: var(--h3Font-size);
            background-color: transparent !important;
        }
        input:focus {
            outline: none;
        }
        img{
            background-color: var(--secondaryColor);
        }
        @media (max-width: 600px) {
            padding: 12px 20px;
        }
    `,

    Results: styled.div`
        .classification {
            display: flex;
            align-items: center;
            gap: 10px;

            margin: 38px 0;

            h2 {
                font-style: italic;
                font-weight: 700;
                font-size: var(--h2Font-size);
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
                font-size: var(--h3Font-size);
            }
            ul {
                li {
                    display: flex;
                    flex: 1;
                    font-weight: 400;
                    font-size: var(--mainFont-size);
                    margin-bottom: 16px;
                    span {
                        color: #A169C9;
                        font-size: 24px;
                        padding: 0 20px;
                    }
                }
            }
            @media (max-width: 600px) {
                ul {
                    li {
                        span {
                            padding: 0 10px;
                        }
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
                    font-size: var(--mainFont-size);
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
    `,

    FooterStyle: styled.footer`
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
}

export { GlobalStyle, Styles }