import React from 'react'
import WorkEducation from './WorkEducation'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('WorkEducation', () => {
    it('should display education info', () => {
        const { getByText } = render(<WorkEducation />);

        expect(getByText("Turing School of Software & Design / Front-End Engineering")).toBeInTheDocument();
        expect(getByText("University of Wisconsin - Madison")).toBeInTheDocument();
    })
    it('should display work info', () => {
        const { getByText } = render(<WorkEducation />);

        expect(getByText("Enterprise Holdings Inc")).toBeInTheDocument();
        expect(getByText("College Pro Painters")).toBeInTheDocument();
    })
})