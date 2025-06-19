import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup', () => {
  test('renders welcome message', () => {
    render(<WelcomePopup />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  test('renders close button', () => {
    render(<WelcomePopup />);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  test('closes popup when close button is clicked', () => {
    render(<WelcomePopup />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    // Assuming the popup is removed from the DOM after