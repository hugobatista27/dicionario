import styled from 'styled-components';

const StyledLabel = styled.label`
    position: relative;
    display: inline-block;

    width: 40px;
    height: 20px;
    border-radius: 10px;

    background-color: black;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: .4s;
        transition: .4s;
    }

    span:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + & {
        background-color: #2196F3;
    }

    input:focus + & {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + span:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
`

export function Switcher() {
    return (
        <StyledLabel htmlFor="modo-switcher">
            <input type="checkbox" id="modo-switcher"/>
            <span></span>
        </StyledLabel>
    )
}