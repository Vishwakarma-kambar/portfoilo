import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkSamples from '../WorkSamples';

describe('WorkSamples', () => {
  it('renders work samples sections', () => {
    const { container } = render(<WorkSamples />);
    
    expect(container.textContent).toContain('Work Samples');
    expect(container.textContent).toContain('Webflow Projects');
    expect(container.textContent).toContain('WordPress Development');
    expect(container.textContent).toContain('React & Next.js Applications');
  });

  it('displays project cards with technologies', () => {
    const { container } = render(<WorkSamples />);
    
    expect(container.textContent).toContain('Automation Tools Integration');
    expect(container.textContent).toContain('NGO Project');
    expect(container.textContent).toContain('Custom Theme Development');
  });

  it('shows technology badges', () => {
    const { container } = render(<WorkSamples />);
    
    expect(container.textContent).toContain('React.js');
    expect(container.textContent).toContain('Next.js');
    expect(container.textContent).toContain('WordPress');
    expect(container.textContent).toContain('Webflow');
  });
});