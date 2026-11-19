import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { CONTACT_FORM_ENDPOINT, SOCIALS } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeading } from '../shared/section-heading';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, ReactiveFormsModule, RevealDirective, SectionHeading],
  template: `
    <section id="contact" class="section bg-bg-soft overflow-hidden">
      <div class="orb -bottom-40 left-1/3 h-[360px] w-[360px] bg-violet-600/15" aria-hidden="true"></div>
      <div class="container-x relative">
        <app-section-heading
          index="06"
          eyebrow="Contact"
          title="Let's build something"
          highlight="together"
          subtitle="Have a role, a project or a question? Send a message and I will get back to you within a day or two."
        />

        <div class="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <!-- contact details -->
          <div appReveal class="flex flex-col gap-4">
            @for (c of channels; track c.label) {
              <a
                [href]="c.href"
                [attr.target]="c.external ? '_blank' : null"
                [attr.rel]="c.external ? 'noopener' : null"
                class="card card-hover group flex items-center gap-4 p-5"
              >
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent-1 transition-colors group-hover:border-accent-1/50">
                  <lucide-icon [name]="c.icon" [size]="20"></lucide-icon>
                </span>
                <div class="min-w-0">
                  <p class="text-xs text-muted">{{ c.label }}</p>
                  <p class="truncate text-sm font-medium text-fg">{{ c.value }}</p>
                </div>
                <lucide-icon name="arrow-right" [size]="16" class="ml-auto shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-1"></lucide-icon>
              </a>
            }
          </div>

          <!-- form -->
          <form appReveal [revealDelay]="120" [formGroup]="form" (ngSubmit)="submit()" class="card p-6 sm:p-8" novalidate>
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="mb-2 block text-sm font-medium text-fg">Name</label>
                <input id="name" type="text" formControlName="name" class="field" placeholder="Your name" autocomplete="name" />
                @if (invalid('name')) { <p class="mt-1.5 text-xs text-rose-500">Please enter your name.</p> }
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-fg">Email</label>
                <input id="email" type="email" formControlName="email" class="field" placeholder="you@company.com" autocomplete="email" />
                @if (invalid('email')) { <p class="mt-1.5 text-xs text-rose-500">Please enter a valid email address.</p> }
              </div>
              <div class="sm:col-span-2">
                <label for="subject" class="mb-2 block text-sm font-medium text-fg">Subject</label>
                <input id="subject" type="text" formControlName="subject" class="field" placeholder="Job opportunity, project, collaboration…" />
                @if (invalid('subject')) { <p class="mt-1.5 text-xs text-rose-500">Please add a subject.</p> }
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="mb-2 block text-sm font-medium text-fg">Message</label>
                <textarea id="message" rows="5" formControlName="message" class="field resize-y" placeholder="Tell me a little about what you have in mind…"></textarea>
                @if (invalid('message')) { <p class="mt-1.5 text-xs text-rose-500">Your message should be at least 10 characters.</p> }
              </div>
            </div>

            <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" class="btn btn-primary disabled:opacity-60" [disabled]="status() === 'sending'">
                @if (status() === 'sending') {
                  <span class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span> Sending…
                } @else {
                  <lucide-icon name="send" [size]="16"></lucide-icon> Send Message
                }
              </button>

              <p class="text-sm" aria-live="polite">
                @switch (status()) {
                  @case ('sent') { <span class="text-emerald-500">Thanks! Your message has been sent.</span> }
                  @case ('mailto') { <span class="text-muted">Your email app should open with the message ready to send.</span> }
                  @case ('error') { <span class="text-rose-500">Something went wrong. Please email me directly.</span> }
                }
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  protected readonly status = signal<Status>('idle');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.maxLength(150)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(4000)]],
  });

  protected readonly channels = [
    { icon: 'mail', label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}`, external: false },
    { icon: 'phone', label: 'Phone', value: SOCIALS.phone, href: `tel:${SOCIALS.phone.replace(/\s/g, '')}`, external: false },
    { icon: 'linkedin', label: 'LinkedIn', value: this.pretty(SOCIALS.linkedin), href: SOCIALS.linkedin, external: true },
    { icon: 'github', label: 'GitHub', value: this.pretty(SOCIALS.github), href: SOCIALS.github, external: true },
    { icon: 'map-pin', label: 'Location', value: SOCIALS.location, href: 'https://maps.google.com/?q=Pune', external: true },
  ];

  protected invalid(name: 'name' | 'email' | 'subject' | 'message'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, subject, message } = this.form.getRawValue();

    if (!CONTACT_FORM_ENDPOINT) {
      // No backend configured: hand the message to the visitor's email app.
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${SOCIALS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.status.set('mailto');
      return;
    }

    this.status.set('sending');
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }

  private pretty(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, '');
  }
}
