import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
    it('should display the nav options', () => {
        const { getByText } = render(<MemoryRouter><Header /></MemoryRouter>);

        expect(getByText("home")).toBeInTheDocument();
        expect(getByText("about")).toBeInTheDocument();
    })
})