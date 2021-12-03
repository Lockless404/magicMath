import PropTypes from 'prop-types';

const Button = ({ text, color, className }) => (
  <>
    <button type="button" className={className} style={{ backgroundColor: color }}>{text}</button>
  </>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
