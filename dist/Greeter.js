"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// From the TypeScript docs: https://www.typescriptlang.org/docs/handbook/classes.html
var Greeter = /*#__PURE__*/function () {
  function Greeter(message) {
    _classCallCheck(this, Greeter);

    this.greeting = message;
  }

  _createClass(Greeter, [{
    key: "greet",
    value: function greet() {
      return "Hello, " + this.greeting;
    }
  }]);

  return Greeter;
}();

var _default = Greeter;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9HcmVldGVyLnRzIl0sIm5hbWVzIjpbIkdyZWV0ZXIiLCJtZXNzYWdlIiwiZ3JlZXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxPO0FBR0osbUJBQVlDLE9BQVosRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFDRDs7OztXQUVELGlCQUFRO0FBQ04sYUFBTyxZQUFZLEtBQUtDLFFBQXhCO0FBQ0Q7Ozs7OztlQUdZRixPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRnJvbSB0aGUgVHlwZVNjcmlwdCBkb2NzOiBodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9jbGFzc2VzLmh0bWxcbmNsYXNzIEdyZWV0ZXIge1xuICBncmVldGluZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuZ3JlZXRpbmcgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ3JlZXQoKSB7XG4gICAgcmV0dXJuIFwiSGVsbG8sIFwiICsgdGhpcy5ncmVldGluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmVldGVyOyJdfQ==