import PropTypes from 'prop-types'

export const Button = ({ text, color, className }) => {
  return (
    <>
      <button className={className} style={{backgroundColor: color}}>{text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}