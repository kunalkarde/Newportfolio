import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ABOUT, PROFILE } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, RevealDirective, SectionHeading],
  template: `
    <section id="about" class="section">
      <div class="container-x">
        <app-section-heading index="01" eyebrow="About me" title="Engineering software that" highlight="teams can trust" />

        <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div class="space-y-5">
            @for (p of about.paragraphs; track $index) {
              <p appReveal [revealDelay]="$index * 80" class="text-base leading-relaxed text-muted sm:text-lg">{{ p }}</p>
            }

            <div appReveal [revealDelay]="240" class="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              @for (s of about.stats; track s.label) {
                <div class="card p-4">
                  <p class="text-gradient font-display text-3xl font-bold">{{ s.value }}</p>
                  <p class="mt-1 text-xs leading-snug text-muted">{{ s.label }}</p>
                </div>
              }
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            @for (item of about.strengths; track item.title) {
              <div appReveal [revealDelay]="$index * 90" class="card card-hover group flex gap-4 p-5">
                <span class="bg-gradient-accent grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-lg shadow-violet-500/20 transition-transform group-hover:scale-110">
                  <lucide-icon [name]="item.icon" [size]="20"></lucide-icon>
                </span>
                <div>
                  <h3 class="font-display text-base font-semibold text-fg">{{ item.title }}</h3>
                  <p class="mt-1 text-sm leading-relaxed text-muted">{{ item.text }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly about = ABOUT;
  protected readonly profile = PROFILE;
}
