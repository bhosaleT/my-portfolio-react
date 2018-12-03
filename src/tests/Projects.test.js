import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Projects from '../components/Projects';

test('Render projects component without crashing', ()=>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Projects />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})