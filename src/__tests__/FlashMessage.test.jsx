import React from 'react';
import { render, screen } from '@testing-library/react';
import FlashMessage from '../compoents/FlashMessage.jsx/FlashMessage';


describe('FlashMessage Component', () => {
    const mockSetOpen = jest.fn(); // Creates a mock(copy) function to simulate setOpen prop

    beforeEach(() => {
        // Render the component before each test
        render(
            <FlashMessage
                open={true}
                setOpen={mockSetOpen}
                message="Test Message"
                severity="success"
            />
        );
    });

    it('renders Snackbar and Alert components', () => {
       // Test that the Snackbar component is rendered inside FlashMessage
       expect(screen.getByRole('alert')).toBeInTheDocument(); // Checks for the Alert component
       expect(screen.getByText('Test Message')).toBeInTheDocument(); // Checks for the message text
    });

});