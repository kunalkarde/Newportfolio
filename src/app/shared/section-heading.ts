import { Component, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-section-heading',
  imports: [RevealDirective],
  template: `
    <div appReveal class="mb-12 max-w-2xl sm:mb-16" [class.mx-auto]="center()" [class.text-center]="center()">
      <span class="eyebrow">
        <span class="text-muted">{{ index() }}</span>
        <span class="h-px w-8 bg-accent-1/60"></span>
        {{ eyebrow() }}
      </span>
      <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {{ title() }} <span class="text-gradient">{{ highlight() }}</span>
      </h2>
      @if (subtitle()) {
        <p class="mt-4 text-base leading-relaxed text-muted">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly index = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly highlight = input('');
  readonly subtitle = input('');
  readonly center = input(false);
}
