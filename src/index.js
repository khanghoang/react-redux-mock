import React from 'react';

const getState = jest.fn();
const dispatch = jest.fn();

const defaultMergeProps = (a = {}, b = {}, c = {}) => ({ ...a, ...b, ...c });
const normalizeMapDispatchToProps = (fn) => {
  if (!fn) {
    return x => x;
  }

  if (typeof fn === 'function') {
    return fn;
  }

  return (dispatch) => Object.keys(fn).reduce(
    (current, fnName) => ({
      ...current,
      [fnName]: (...params) => dispatch(fn[fnName](...params)),
    }),
    {}
  );
}

export const connect = (mapStateToProps, mapDispatchToProps, mergeProps = defaultMergeProps) => {
  return (Component) => (props) => (
    <Component
      {...mergeProps(
        mapStateToProps(getState()),
        normalizeMapDispatchToProps(mapDispatchToProps)(dispatch, props),
        props,
      )}
    />
  );
};

export { dispatch };
export const __resetState = () => { __setState({}); };
export const __setState = state => getState.mockReturnValue(state);
export const Provider = ({ children }) => children;
