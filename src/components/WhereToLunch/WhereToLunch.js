import React from 'react';

const WhereToLunch = (props) => {

    const {
        lunchLotto,
        currentLunchLocation
    } = props;

    return (
        <>
            <h2>
                {currentLunchLocation}
            </h2>
            <button onClick={() => { lunchLotto() }} style={{ backgroundColor: 'purple', color: 'white' }}>Where to Lunch?</button>
        </>
    )
}

export default WhereToLunch;
