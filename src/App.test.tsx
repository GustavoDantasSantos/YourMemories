import '@testing-library/jest-dom';

import App from './App';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe("App", () => {
    test("Should be render app and see text in the screen", () => {
        const { getByText } = render(<App />);
        
        expect(getByText("Hey, it's work")).toBeInTheDocument();
    });
});