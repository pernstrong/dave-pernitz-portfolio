import React from 'react'
import Talks from './Talks'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Projects', () => {
    it('should talk project info', () => {
        const { getByText } = render(<Talks />);

        expect(getByText("Selling the JAMstack")).toBeInTheDocument();
    })
 
})