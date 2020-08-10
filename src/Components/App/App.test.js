import React from 'react'
import App from './App'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';


describe('App', () => {
    // issue with Google Analytics and testing...do we need to mock it?
    xit('should render ', () => {

        const { getByText } = render(<MemoryRouter><App /></MemoryRouter>);
        expect(getByText("about")).toBeInTheDocument();
    })
})