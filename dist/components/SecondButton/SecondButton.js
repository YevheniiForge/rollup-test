import 'core-js/modules/es.object.assign';
import React$1 from 'react';
import { rootSecond } from './SecondButton.module.scss.js';

var SecondButton = function SecondButton(_ref) {
  var children = _ref.children,
      _ref$elementType = _ref.elementType,
      ButtonElement = _ref$elementType === void 0 ? "button" : _ref$elementType,
      onClick = _ref.onClick;
  return /*#__PURE__*/React$1.createElement(ButtonElement, Object.assign({
    className: rootSecond,
    onClick: onClick
  }, ButtonElement === "button" ? {
    type: "button"
  } : {}), children);
};

export { SecondButton };
//# sourceMappingURL=SecondButton.js.map
