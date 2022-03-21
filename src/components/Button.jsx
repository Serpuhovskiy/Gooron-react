import React from 'react';
import classNames from 'classnames';

function Button({buttonClassNames, children}) {
  return (
    <button className={classNames('click-btn', buttonClassNames)}>{children}</button>
  );
}

export default Button;
