var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

const getState = jest.fn();
const dispatch = jest.fn();

const defaultMergeProps = (a = {}, b = {}, c = {}) => _extends({}, a, b, c);
const normalizeMapDispatchToProps = fn => {
  if (!fn) {
    return x => x;
  }

  if (typeof fn === 'function') {
    return fn;
  }

  return dispatch => Object.keys(fn).reduce((current, fnName) => _extends({}, current, {
    [fnName]: (...params) => dispatch(fn[fnName](...params))
  }), {});
};

export const connect = (mapStateToProps, mapDispatchToProps, mergeProps = defaultMergeProps) => {
  return Component => props => React.createElement(Component, mergeProps(mapStateToProps(getState()), normalizeMapDispatchToProps(mapDispatchToProps)(dispatch, props), props));
};

export { dispatch };
export const __resetState = () => {
  __setState({});
};
export const __setState = state => getState.mockReturnValue(state);
export const Provider = ({ children }) => children;