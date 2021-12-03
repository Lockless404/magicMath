import PropTypes from 'prop-types';

const Button = ({ text, color, className, onClick }) => (
  <>
    <button type="button" className={className} style={{ backgroundColor: color }} onClick={onClick}>{text} </button>
  </>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
