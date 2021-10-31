import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
      <div>
        {isAuth ? <button className="btn-primary" onClick={onLogOut}>Выйти из системы</button>
            : <button className="btn-primary" onClick={onLogin}>Войти</button>}
      </div>
  );
};

SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func,
  isAuth: PropTypes.bool
};

export default SimpleComponent;
