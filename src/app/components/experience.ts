import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { EXPERIENCE } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-experience',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  template: `
    <section id="experience" class="section">
      <div class="container-x">
        <app-section-heading
          index="03"
          eyebrow="Work experience"
          title="My professional"
          highlight="journey"
          subtitle="Enterprise platforms I have designed, built and supported across three business domains."
        />

        @for (job of jobs; track job.company) {
          <div appReveal class="card mb-8 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-center gap-4">
              <span class="bg-gradient-accent grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white">
                <lucide-icon name="briefcase" [size]="22"></lucide-icon>
              </span>
              <div>
                <h3 class="font-display text-xl font-semibold text-fg">{{ job.role }}</h3>
                <p class="text-sm text-muted">{{ job.company }} · {{ job.location }}</p>
              </div>
            </div>
            <span class="chip self-start sm:self-auto">
              <lucide-icon name="calendar" [size]="12" class="mr-1.5"></lucide-icon>{{ job.period }}
            </span>
          </div>
          <p appReveal class="mb-10 max-w-3xl text-muted">{{ job.summary }}</p>

          <ol class="relative ml-2 border-l border-line-strong sm:ml-4">
            @for (p of job.projects; track p.name; let i = $index) {
              <li appReveal [revealDelay]="i * 80" class="relative pb-10 pl-7 last:pb-0 sm:pl-10">
                <span class="absolute top-1.5 -left-[7px] grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-bg bg-accent-1 ring-4 ring-accent-1/15"></span>

                <div class="card card-hover p-6">
                  <div class="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span class="font-mono text-xs tracking-wider text-accent-2 uppercase">{{ p.domain }}</span>
                      <h4 class="mt-1 font-display text-lg font-semibold text-fg sm:text-xl">{{ p.name }}</h4>
                    </div>
                    <span class="chip">{{ p.period }}</span>
                  </div>
                  <p class="mt-3 text-sm leading-relaxed text-muted">{{ p.summary }}</p>

                  <ul class="mt-5 space-y-2.5">
                    @for (h of visibleHighlights(i, p.highlights); track h) {
                      <li class="flex gap-3 text-sm leading-relaxed text-fg/90">
                        <lucide-icon name="circle-check" [size]="16" class="mt-0.5 shrink-0 text-accent-1"></lucide-icon>
                        <span>{{ h }}</span>
                      </li>
                    }
                  </ul>
                  @if (p.highlights.length > 2) {
                    <button type="button" (click)="toggle(i)" class="mt-3 text-sm font-medium text-accent-1 hover:underline" [attr.aria-expanded]="expanded().has(i)">
                      {{ expanded().has(i) ? 'Show less' : 'Show all contributions' }}
                    </button>
                  }

                  <div class="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                    @for (t of p.stack; track t) {
                      <span class="chip">{{ t }}</span>
                    }
                  </div>
                </div>
              </li>
            }
          </ol>
        }
      </div>
    </section>
  `,
})
export class Experience {
  protected readonly jobs = EXPERIENCE;
  protected readonly expanded = signal(new Set<number>([0]));

  protected visibleHighlights(i: number, all: string[]): string[] {
    return this.expanded().has(i) ? all : all.slice(0, 2);
  }

  protected toggle(i: number): void {
    const next = new Set(this.expanded());
    if (next.has(i)) next.delete(i);
    else next.add(i);
    this.expanded.set(next);
  }
}
