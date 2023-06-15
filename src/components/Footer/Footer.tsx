import { useAppContext } from '../../contexts/hook';
import LINK_ICON from './assets/link.svg'

import { Styles } from '../../styles/styled-components';


export function Footer() {
    const { state } = useAppContext();

    return (
        <Styles.FooterStyle>
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
            
        </Styles.FooterStyle>
    )
}
