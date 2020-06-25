import React from 'react'
import Projects from './Projects'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Projects', () => {
    it('should display project info', () => {
        const { getByText } = render(<Projects />);

        expect(getByText("Overlook")).toBeInTheDocument();
        expect(getByText("What's New")).toBeInTheDocument();
    })
    // it('should display project pictures', () => {
    //     const { getByText } = render(<Projects />);

    //     expect(getByText("dave")).toBeInTheDocument();
    // })
})