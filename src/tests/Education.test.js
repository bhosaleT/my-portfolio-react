import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Education from '../components/Education';

test('Education component should render properly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Education />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})