import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NAV_LINKS, PROFILE } from '../data/portfolio.data';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      [class]="scrolled() || menuOpen() ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'"
    >
      <nav class="container-x flex h-16 items-center justify-between sm:h-18" aria-label="Main navigation">
        <a href="#home" (click)="go($event, 'home')" class="group flex items-center gap-2.5" aria-label="Back to top">
          <span class="bg-gradient-accent grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-transform group-hover:rotate-6">KK</span>
          <span class="hidden font-display text-base font-semibold text-fg sm:block">{{ profile.name }}</span>
        </a>

        <ul class="hidden items-center gap-1 lg:flex">
          @for (link of links; track link.id) {
            <li>
              <a
                [href]="'#' + link.id"
                (click)="go($event, link.id)"
                class="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                [class]="active() === link.id ? 'text-fg' : 'text-muted hover:text-fg'"
              >
                {{ link.label }}
                <span
                  class="bg-gradient-accent absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-300"
                  [class]="active() === link.id ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-2">
          <button type="button" class="icon-btn" (click)="theme.toggle()" [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <lucide-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" [size]="18"></lucide-icon>
          </button>
          <a [href]="profile.resumeUrl" download class="btn btn-primary hidden px-4 py-2.5 sm:inline-flex">
            <lucide-icon name="download" [size]="16"></lucide-icon> Resume
          </a>
          <button
            type="button"
            class="icon-btn lg:hidden"
            (click)="menuOpen.set(!menuOpen())"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <lucide-icon [name]="menuOpen() ? 'x' : 'menu'" [size]="18"></lucide-icon>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        class="grid overflow-hidden transition-all duration-300 lg:hidden"
        [class]="menuOpen() ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="min-h-0">
          <ul class="container-x flex flex-col gap-1 pt-2 pb-5">
            @for (link of links; track link.id; let i = $index) {
              <li>
                <a
                  [href]="'#' + link.id"
                  (click)="go($event, link.id)"
                  class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors"
                  [class]="active() === link.id ? 'bg-surface text-fg' : 'text-muted hover:bg-surface hover:text-fg'"
                >
                  {{ link.label }}
                  <span class="font-mono text-xs text-muted">0{{ i + 1 }}</span>
                </a>
              </li>
            }
            <li class="pt-2 sm:hidden">
              <a [href]="profile.resumeUrl" download class="btn btn-primary w-full">
                <lucide-icon name="download" [size]="16"></lucide-icon> Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
})
export class Navbar implements OnInit, OnDestroy {
  protected readonly theme = inject(ThemeService);
  protected readonly links = NAV_LINKS;
  protected readonly profile = PROFILE;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('home');

  private spy?: IntersectionObserver;

  ngOnInit(): void {
    // Scroll-spy: highlight the link for the section in the middle of the viewport.
    setTimeout(() => {
      this.spy = new IntersectionObserver(
        (entries) => {
          for (const e of entries) if (e.isIntersecting) this.active.set(e.target.id);
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      ['home', ...this.links.map((l) => l.id)].forEach((id) => {
        const el = document.getElementById(id);
        if (el) this.spy!.observe(el);
      });
    });
  }

  ngOnDestroy(): void {
    this.spy?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }

  protected go(event: Event, id: string): void {
    event.preventDefault();
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`);
  }
}
