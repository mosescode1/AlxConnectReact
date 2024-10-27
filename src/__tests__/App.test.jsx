import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock components used in the App
jest.mock('../compoents/LoadLogo/LoadLogo', () => () => <div>LogoLoad</div>);
jest.mock('../compoents/LoadingSpinner/LoadingSpinner', () => () => <div>LoadingSpinner</div>);
jest.mock('../compoents/Login/Login', () => () => <div>Login</div>);
jest.mock('../compoents/Register/Register', () => () => <div>Register</div>);
jest.mock('../compoents/pages/Home/Home', () => () => <div>Home</div>);
jest.mock('../compoents/pages/Profile/Profile', () => () => <div>Profile</div>);
jest.mock('../compoents/pages/search/UserSearch', () => () => <div>UserSearch</div>);

describe('App Component', () => {
    beforeEach(() => {
        // Set the window width for mobile testing
        window.innerWidth = 400; // Simulate a mobile width
        window.dispatchEvent(new Event('resize')); // Trigger a resize event
    });

    it('renders the loading logo when the viewport is mobile', () => {
        act(() => {
            render(
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/logoLoad/i)).toBeInTheDocument(); // Check if LogoLoad is rendered
    });

    it('renders the "Sorry, this app is only available on mobile" message when the viewport is not mobile', () => {
        window.innerWidth = 800; // Simulate a desktop width
        window.dispatchEvent(new Event('resize')); // Trigger a resize event

        act(() => {
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/sorry, this app is only available on mobile/i)).toBeInTheDocument();
        expect(screen.getByText(/please visit the site on a mobile device/i)).toBeInTheDocument();
    });

    it('navigates to the login page', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/login']}>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/login/i)).toBeInTheDocument(); // Check if Login component is rendered
    });

    it('navigates to the home page', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/home']}>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/home/i)).toBeInTheDocument(); // Check if Home component is rendered
    });

    it('navigates to the register page', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/register']}>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/register/i)).toBeInTheDocument(); // Check if Register component is rendered
    });


    it('navigates to the profile page', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/profile']}>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/profile/i)).toBeInTheDocument(); // Check if Profile component is rendered
    });

    it('navigates to the user search page', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/search']}>
                    <App />
                </MemoryRouter>
            );
        });

        expect(screen.getByText(/usersearch/i)).toBeInTheDocument(); // Check if UserSearch component is rendered
    });
});
