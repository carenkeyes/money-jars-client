import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './select-input.css';

SelectInput.defaultProps = {
    multi: false,
    className: "",
}

SelectInput.propTypes = {
    input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    }).isRequired,
    options: PropTypes.array.isRequired,
    multi: PropTypes.bool,
    className: PropTypes.string,
};


export default function SelectInput({input, options, multi, className}){

    const {name, value, onBlur, onChange, onFocus} = input;
    const transformedValue = transformValue(value, options, multi);

    return(
        <Select
            valueKey='value'
            name={name}
            value={transformedValue}
            multi={multi}
            options={options}
            onChange={multi
                ?multiChangeHandler(onChange)
                : singleChangeHandler(onChange)
            }
            onBlur={() => onBlur(value)}
            onFocus={onFocus}
            className={className}
        />
    );
}


function multiChangeHandler(e){
    return function handleMultiHandler(values) {
        e(values.map(value => value.value));
    };
}

function singleChangeHandler(e){
    return function handleSingleChange(value){
        e(value ? value.value : '');
    }
}

function transformValue(value, options, multi){
    if (multi && typeof value === 'string') return [];

    const filteredOptions = options.filter(option => {
        return multi
            ? value.indexOf(option.value) !== -1
            : option.value === value;
    });

    return multi ? filteredOptions: filteredOptions[0];
}
