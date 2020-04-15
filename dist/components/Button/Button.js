import 'core-js/modules/es.object.assign';
import React from 'react';
import { root } from './Button.module.css.js';

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$elementType = _ref.elementType,
      ButtonElement = _ref$elementType === void 0 ? "button" : _ref$elementType,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonElement, Object.assign({
    className: root,
    onClick: onClick
  }, ButtonElement === "button" ? {
    type: "button"
  } : {}), children);
};

export { Button };
//# sourceMappingURL=Button.js.map
