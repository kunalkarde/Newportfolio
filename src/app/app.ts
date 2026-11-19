import { Component } from '@angular/core';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Education } from './components/education';
import { Experience } from './components/experience';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects';
import { Skills } from './components/skills';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer],
  template: `
    <a href="#main" class="sr-only z-[60] rounded-lg bg-surface px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3">Skip to content</a>
    <app-navbar />
    <main id="main">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {}
