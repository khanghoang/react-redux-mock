# redux-react-mock
Mock the `react-redux` package.

### Installation

```
yarn add --dev react-redux-mock
```

```
npm install --save-dev react-redux-mock
```

### Usage

Let's assume that you have an `connected` component with this structure.
```
import React from 'react';
import { connect } from 'react-react';

const Text = ({ content }) => <p>{content}</p>;
const contentSelector = state => state.content;

const ConnectedText = compose(
  connect(state => {
    content: contentSelector(state),
  }),
)(Text);

export default ConnectedText;
```

This is how you can test the component above with `react-redux-mock`?
```
jest.mock('react-redux', () => require('react-redux-mock'));
import { __setState } from 'react-redux';
import { mount } from 'enzyme';

describe('Text component', () => {
  it('renders correctly', () => {
    __setState({
      content: 'foo',
    });
    const component = mount(<ConnectedText />);
    expect(component).toMatchSnapshot();
  });
});
```

Notice that you can render the `connected` component itself without
defining what is the store and the `Provider` component.

### Have question?
I'm happy to answer all questions from you at [@khanght](https://twitter.com/khanght).   
Happy coding, forks!
