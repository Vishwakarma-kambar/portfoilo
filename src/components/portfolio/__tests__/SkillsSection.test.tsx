import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillsSection from '../SkillsSection';

describe('SkillsSection', () => {
  it('renders skills section with categories', () => {
    const { container } = render(<SkillsSection />);
    
    expect(container.textContent).toContain('Skills & Expertise');
    expect(container.textContent).toContain('Frontend Technologies');
    expect(container.textContent).toContain('CMS & No-Code');
    expect(container.textContent).toContain('Backend & Tools');
  });

  it('displays programming languages and skills', () => {
    const { container } = render(<SkillsSection />);
    
    expect(container.textContent).toContain('React JS');
    expect(container.textContent).toContain('JavaScript');
    expect(container.textContent).toContain('TypeScript');
    expect(container.textContent).toContain('WordPress');
  });

  it('shows language proficiencies', () => {
    const { container } = render(<SkillsSection />);
    
    expect(container.textContent).toContain('English');
    expect(container.textContent).toContain('Kannada');
    expect(container.textContent).toContain('Hindi');
  });
});