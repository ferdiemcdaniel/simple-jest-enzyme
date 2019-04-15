import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './FormContainer';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});