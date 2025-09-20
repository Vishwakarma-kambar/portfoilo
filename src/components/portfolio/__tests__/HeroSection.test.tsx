import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the hero section with correct name', () => {
    const { container } = render(<HeroSection />);
    
    expect(container.textContent).toContain('Vishwakarma');
    expect(container.textContent).toContain('Kambar');
  });

  it('displays contact information', () => {
    const { container } = render(<HeroSection />);
    
    expect(container.textContent).toContain('8970139581');
    expect(container.textContent).toContain('vishwakarmaplc@gmail.com');
    expect(container.textContent).toContain('Madiwala, Bengaluru');
  });

  it('shows professional description', () => {
    const { container } = render(<HeroSection />);
    
    expect(container.textContent).toContain('Software Developer specializing in');
    expect(container.textContent).toContain('2+ years of experience');
  });

  it('renders action buttons', () => {
    const { container } = render(<HeroSection />);
    
    expect(container.textContent).toContain('Download Resume');
    expect(container.textContent).toContain('View Projects');
  });
});