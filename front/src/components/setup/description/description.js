import React from 'react';

const Description = ({ InputStep, BackStep, description, done }) => (
    <div>
        <h3>
            A small message from you to the site's visitors. This will be shown
            next to your profile picture.
        </h3>
        <textarea
            type="text"
            className="qdescription"
            name="description"
            onChange={InputStep}
            value={description}
            rows="5"
            cols="20"
        />
        <div className="box">
            <button className="back_button" onClick={BackStep}>
                Back
            </button>
            <button onClick={description && done}>OK</button>
        </div>
    </div>
);

export default Description;
