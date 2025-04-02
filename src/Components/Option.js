// Option.js

import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        return (
            <div className='options'>
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                        <label className="form-check-label">{option}
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            className="form-check-input"
                        />
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}

export default Options;
