import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { EDUCATION } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-education',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  template: `
    <section id="education" class="section">
      <div class="container-x">
        <app-section-heading index="05" eyebrow="Education" title="Academic" highlight="foundation" />

        <div class="grid gap-6">
          @for (e of education; track e.degree) {
            <article appReveal class="card card-hover relative overflow-hidden p-6 sm:p-8">
              <div class="bg-gradient-accent absolute inset-y-0 left-0 w-1"></div>
              <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
                <span class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-line bg-surface-2 text-accent-1">
                  <lucide-icon name="graduation-cap" [size]="30"></lucide-icon>
                </span>
                <div class="flex-1">
                  <h3 class="font-display text-xl font-semibold text-fg sm:text-2xl">{{ e.degree }}</h3>
                  <p class="mt-1 text-muted">{{ e.institution }}</p>
                  <p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{{ e.notes }}</p>
                </div>
                <div class="flex flex-row gap-2 sm:flex-col sm:items-end">
                  <span class="chip"><lucide-icon name="calendar" [size]="12" class="mr-1.5"></lucide-icon>{{ e.year }}</span>
                  <span class="chip"><lucide-icon name="map-pin" [size]="12" class="mr-1.5"></lucide-icon>{{ e.location }}</span>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Education {
  protected readonly education = EDUCATION;
}
