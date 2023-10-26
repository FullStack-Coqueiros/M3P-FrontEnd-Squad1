import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


export const InputComponent = ({ label, type, id, placeholder, register, error, $width, $height }) => {
    const [ showPassword, setShowPassword ] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
        
        </>
    )
}

InputComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    register: PropTypes.any,
    error: PropTypes.any,
    $height: PropTypes.string,
    $width: PropTypes.string,
    $color: PropTypes.string,
}