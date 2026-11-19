import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  );

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#070a14' : '#f6f7fb');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable; the theme still applies for this visit */
    }
  }
}
