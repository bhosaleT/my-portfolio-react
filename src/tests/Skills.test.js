import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Skills from '../components/Skills';

test('The skills component should render without crashing', ()=>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Skills />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})