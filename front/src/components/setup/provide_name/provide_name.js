import React from 'react';

const ProvideName = ({ InputStep, name, occupation, done }) => (
    <div className="box">
        <div className="set">
            <div className="question-container">
                <h3 className="question">Name:</h3>
            </div>
            <input type="text" name="name" onChange={InputStep} value={name} />
        </div>
        <div className="set">
            <div className="question-container">
                <h3 className="question">Occupation:</h3>
            </div>
            <input
                type="text"
                name="occupation"
                onChange={InputStep}
                value={occupation}
            />
        </div>
        <button onClick={name && occupation && done}>OK</button>
    </div>
);

export default ProvideName;
