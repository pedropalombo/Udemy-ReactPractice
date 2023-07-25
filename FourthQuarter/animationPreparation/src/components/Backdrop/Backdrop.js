import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

    //setting dynamic classes based on props state
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')}></div>
};

export default backdrop;