import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export const InputComponent = ({ label, type, id, placeholder, register, error, $width, $height }) => {
    const [showPassord, setShowPassword ] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassord);
    }

    return (
        <div className="InputGroup" $width={$width} $height={$height}>
            <label $color={error && 'danger'}  htmlFor={ id }>{ label }</label>

            { type !== 'textarea' && 
            <div className="InputContainer">
                <input 
                $height={$height}
                $width={$width}
                $color={error && 'danger'}
                type={ showPassord ? 'text' : type } 
                id={ id }
                placeholder={ placeholder }
                {...register}/>

                { type === 'password' &&
                
                <button $color={error && 'danger'} type='button' onClick={handleShowPassword}>
                    { !showPassord
                        ? <MdVisibility/>
                        : <MdVisibilityOff/>
                    }
                </button>
                }
            </div>
            }

            { type === 'textarea' &&
                <textarea $height={$height} $color={error && 'danger'} id={ id } placeholder={ placeholder } {...register}/>
            }
        </div>
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