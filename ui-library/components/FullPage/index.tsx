import React, { FC } from 'react';

import { Wrapper } from './styles';

/**
 * @author Mahmoud
 * @desc a wrapper component that takes full size of the page
 */
const FullPage: FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}


export default FullPage;