import React from 'react';

const ProvideSM = ({ InputStep, sm, done, BackStep }) => (
    <div>
        <h3>Provide your profile names for any of the following websites:</h3>

        <form onSubmit={sm ? done : ''}>
            <div className="box">
                <div className="set">
                    <div className="question-container">
                        <h3 className="question">LinkedIn</h3>
                    </div>
                    <input
                        type="text"
                        name="linkedin"
                        onChange={InputStep}
                        value={sm.linkedin}
                    />
                </div>
                <div className="set">
                    <div className="question-container">
                        <h3 className="question">Facebook</h3>
                    </div>
                    <input
                        type="text"
                        name="facebook"
                        onChange={InputStep}
                        value={sm.facebook}
                    />
                </div>
                <div className="set">
                    <div className="question-container">
                        <h3 className="question">Twitter</h3>
                    </div>
                    <input
                        type="text"
                        name="twitter"
                        onChange={InputStep}
                        value={sm.twitter}
                    />
                </div>
                <div className="set">
                    <div className="question-container">
                        <h3 className="question">Instagram</h3>
                    </div>
                    <input
                        type="text"
                        name="instagram"
                        onChange={InputStep}
                        value={sm.instagram}
                    />
                </div>
                <button className="back_button" onClick={BackStep}>
                    Back
                </button>
                <input type="submit" value="OK" />
            </div>
        </form>
    </div>
);

export default ProvideSM;
