import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
    const {name, type, variant, onClick}= props

    return (
        <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
        {name}
      </button>
    )
}
Button.propTypes={
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button
