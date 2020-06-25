import React from 'react'
import Contact from './Contact'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Contact', () => {
    it('displays the contact info', () => {
        const { getByText } = render(<Contact />);

        expect(getByText("contact")).toBeInTheDocument();
        expect(getByText("Email: pernitz@uwalumni.com")).toBeInTheDocument();
    })
})