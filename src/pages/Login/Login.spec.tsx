import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LoginPage } from './Login';
import { describe, test, expect } from 'vitest';

describe("Login Page", () => {
    
    test("Should be able to see the OLÁ in the login page", () => {
        const screen = render(<LoginPage />);
        expect(screen.getByText('Olá')).toBeInTheDocument();
    });
});