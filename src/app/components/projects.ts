import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { PROJECTS, SOCIALS } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  template: `
    <section id="projects" class="section bg-bg-soft">
      <div class="container-x">
        <app-section-heading
          index="04"
          eyebrow="Featured projects"
          title="Things I have"
          highlight="built"
          subtitle="Selected applications covering HR, ERP, e-commerce and payments, built on the .NET and Angular stack."
        />

        <div class="grid gap-6 md:grid-cols-2">
          @for (p of projects; track p.title; let i = $index) {
            <article appReveal [revealDelay]="(i % 2) * 100" class="card card-hover group relative flex flex-col overflow-hidden">
              <!-- header band -->
              <div class="relative overflow-hidden border-b border-line bg-surface-2 px-6 py-5">
                <div class="bg-gradient-accent absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-35"></div>
                <div class="relative flex items-start justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <span class="bg-gradient-accent grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-lg shadow-violet-500/20">
                      <lucide-icon [name]="p.icon" [size]="20"></lucide-icon>
                    </span>
                    <div>
                      <p class="font-mono text-[11px] tracking-wider text-muted uppercase">{{ p.tag }}</p>
                      <h3 class="font-display text-lg leading-snug font-semibold text-fg">{{ p.title }}</h3>
                    </div>
                  </div>
                  <span class="font-mono text-2xl font-bold text-line-strong">0{{ i + 1 }}</span>
                </div>
              </div>

              <div class="flex flex-1 flex-col p-6">
                <p class="text-sm leading-relaxed text-muted">{{ p.overview }}</p>

                <div class="mt-5 rounded-xl border border-line bg-surface-2/60 p-4">
                  <p class="flex items-center gap-2 text-xs font-semibold tracking-wide text-accent-1 uppercase">
                    <lucide-icon name="terminal" [size]="14"></lucide-icon> My role
                  </p>
                  <p class="mt-1.5 text-sm leading-relaxed text-fg/90">{{ p.role }}</p>
                </div>

                <ul class="mt-5 grid gap-2 sm:grid-cols-2">
                  @for (f of p.features; track f) {
                    <li class="flex gap-2 text-sm leading-snug text-fg/90">
                      <lucide-icon name="sparkles" [size]="14" class="mt-0.5 shrink-0 text-accent-2"></lucide-icon>
                      <span>{{ f }}</span>
                    </li>
                  }
                </ul>

                <div class="mt-5 flex flex-wrap gap-1.5">
                  @for (t of p.stack; track t) {
                    <span class="chip">{{ t }}</span>
                  }
                </div>

                <div class="mt-auto flex flex-wrap gap-3 pt-6">
                  @if (p.github) {
                    <a [href]="p.github" target="_blank" rel="noopener" class="btn btn-ghost px-4 py-2.5" [attr.aria-label]="p.title + ' source code on GitHub'">
                      <lucide-icon name="github" [size]="16"></lucide-icon> Code
                    </a>
                  }
                  @if (p.demo) {
                    <a [href]="p.demo" target="_blank" rel="noopener" class="btn btn-primary px-4 py-2.5" [attr.aria-label]="p.title + ' live demo'">
                      <lucide-icon name="external-link" [size]="16"></lucide-icon> Live demo
                    </a>
                  } @else {
                    <span class="btn cursor-default border border-dashed border-line-strong px-4 py-2.5 text-muted" title="Live demo available on request">
                      <lucide-icon name="external-link" [size]="16"></lucide-icon> Demo on request
                    </span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <div appReveal class="mt-12 text-center">
          <a [href]="socials.github" target="_blank" rel="noopener" class="btn btn-ghost">
            <lucide-icon name="folder-git-2" [size]="16"></lucide-icon> More on GitHub
            <lucide-icon name="arrow-right" [size]="16"></lucide-icon>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly socials = SOCIALS;
}
