import React from 'react';

import { Content } from './routing';
import { HashRouter } from 'react-router-dom';

export const View = () => {
    return (
        <HashRouter basename="/">
            <div className='root-element'>
                {Content}
            </div>
        </HashRouter>
    );
}
