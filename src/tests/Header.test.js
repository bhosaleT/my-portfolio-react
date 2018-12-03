import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../components/Header';

test('The skills component should render without crashing', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})