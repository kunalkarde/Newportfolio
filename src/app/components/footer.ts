import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NAV_LINKS, PROFILE, SOCIALS } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  template: `
    <footer class="border-t border-line">
      <div class="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div class="text-center md:text-left">
          <p class="font-display font-semibold text-fg">{{ profile.name }}</p>
          <p class="mt-1 text-sm text-muted">{{ profile.title }} · Built with Angular & Tailwind CSS</p>
        </div>
        <nav class="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Footer navigation">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" class="text-sm text-muted transition-colors hover:text-fg">{{ l.label }}</a>
          }
        </nav>
        <div class="flex gap-2">
          <a [href]="socials.linkedin" target="_blank" rel="noopener" class="icon-btn" aria-label="LinkedIn"><lucide-icon name="linkedin" [size]="16"></lucide-icon></a>
          <a [href]="socials.github" target="_blank" rel="noopener" class="icon-btn" aria-label="GitHub"><lucide-icon name="github" [size]="16"></lucide-icon></a>
          <a [href]="'mailto:' + socials.email" class="icon-btn" aria-label="Email"><lucide-icon name="mail" [size]="16"></lucide-icon></a>
        </div>
      </div>
      <p class="pb-8 text-center font-mono text-xs text-muted">© {{ year }} {{ profile.name }}. All rights reserved.</p>
    </footer>

    <button
      type="button"
      (click)="toTop()"
      aria-label="Scroll to top"
      class="bg-gradient-accent fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full text-white shadow-xl shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 sm:right-8 sm:bottom-8"
      [class]="showTop() ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'"
    >
      <lucide-icon name="arrow-up" [size]="20"></lucide-icon>
    </button>
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
  protected readonly showTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showTop.set(window.scrollY > 600);
  }

  protected toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
