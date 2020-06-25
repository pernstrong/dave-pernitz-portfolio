import React from 'react'
import Home from './Home'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Home', () => {
    it('should display dave\'s name', () => {
        const { getByText } = render(<Home />);

        expect(getByText("dave")).toBeInTheDocument();
        expect(getByText("pernitz")).toBeInTheDocument();
    })
})