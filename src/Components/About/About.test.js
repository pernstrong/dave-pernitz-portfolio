import React from 'react'
import About from './About'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('About', () => {
    it('displays the about info', () => {
        const { getByText } = render(<About />);

        expect(getByText("about")).toBeInTheDocument();
        expect(getByText("Interests")).toBeInTheDocument();
    })
})