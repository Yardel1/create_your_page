import React from 'react';

const PickType = ({ InputStep, BackStep }) => (
    <div>
        <h3>
            What would you rather display, more pictures of yours or links to
            works of yours?
        </h3>
        <button
            id="pickPictures"
            name="profile_type"
            value="pictures"
            onClick={InputStep}
        >
            Pictures
        </button>
        <button
            id="picklinks"
            name="profile_type"
            value="links"
            onClick={InputStep}
        >
            links
        </button>
        <button className="back_button" onClick={BackStep}>
            Back
        </button>
    </div>
);

export default PickType;
