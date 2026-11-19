import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SKILL_GROUPS } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-skills',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  template: `
    <section id="skills" class="section bg-bg-soft">
      <div class="container-x">
        <app-section-heading
          index="02"
          eyebrow="Technical skills"
          title="The stack I"
          highlight="build with"
          subtitle="From the database to the browser, the tools I use to ship and maintain production software."
        />

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          @for (group of groups; track group.title; let i = $index) {
            <article
              appReveal
              [revealDelay]="i * 90"
              class="card card-hover group relative overflow-hidden p-6"
              [class]="i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'"
            >
              <div class="bg-gradient-accent pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"></div>

              <div class="relative flex items-start justify-between gap-4">
                <div class="flex items-center gap-3">
                  <span class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2 text-accent-1 transition-colors group-hover:border-accent-1/50">
                    <lucide-icon [name]="group.icon" [size]="20"></lucide-icon>
                  </span>
                  <div>
                    <h3 class="font-display text-lg font-semibold text-fg">{{ group.title }}</h3>
                    <p class="text-xs text-muted">{{ group.blurb }}</p>
                  </div>
                </div>
                <span class="font-mono text-xs text-muted">{{ group.skills.length }}</span>
              </div>

              <ul class="relative mt-6 flex flex-wrap gap-2">
                @for (skill of group.skills; track skill) {
                  <li
                    class="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1/60 hover:text-accent-1"
                  >
                    {{ skill }}
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
