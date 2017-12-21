import React from 'react';

const PickPW = ({ InputStep, BackStep, password, done }) => (
    <div>
        <form onSubmit={done}>
            <div className="box">
                <div className="set">
                    <div className="question-container">
                        <h3>Email</h3>
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="hello"
                        onChange={InputStep}
                        required
                    />
                </div>
                <div className="set">
                    <div className="question-container">
                        <h3>Password</h3>
                    </div>
                    <input
                        type="password"
                        name="password"
                        onChange={InputStep}
                        value={password}
                        required
                    />
                </div>
            </div>
            <div className="box">
                <button className="back_button" onClick={BackStep}>
                    Back
                </button>
                <input type="submit" value="OK" />
            </div>
        </form>
    </div>
);

export default PickPW;
