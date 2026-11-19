import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { PROFILE, SOCIALS } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  template: `
    <section id="home" class="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <!-- background -->
      <div class="bg-grid absolute inset-0" aria-hidden="true"></div>
      <div class="orb -top-24 -left-24 h-[420px] w-[420px] bg-violet-600/25 dark:bg-violet-600/30" aria-hidden="true"></div>
      <div class="orb top-1/3 -right-32 h-[380px] w-[380px] bg-blue-500/20 dark:bg-blue-600/25 [animation-delay:-6s]" aria-hidden="true"></div>

      <div class="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <!-- copy -->
        <div class="min-w-0">
          <div class="enter inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur" style="--d: 50ms">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            {{ profile.availability }} · {{ socials.location.split(',')[0] }}
          </div>

          <p class="enter mt-7 font-mono text-sm text-accent-1" style="--d: 150ms">Hello, I'm</p>
          <h1 class="enter mt-2 font-display text-5xl leading-[1.05] font-bold tracking-tight text-fg sm:text-6xl lg:text-7xl" style="--d: 220ms">
            {{ profile.name }}
          </h1>
          <p class="enter mt-4 font-display text-2xl font-semibold text-muted sm:text-3xl" style="--d: 300ms">
            <span class="text-gradient">.NET</span> Full Stack Developer
          </p>

          <p class="enter mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style="--d: 380ms">
            {{ profile.intro }}
          </p>

          <p class="enter mt-5 font-mono text-sm text-muted" style="--d: 440ms">
            <span class="text-accent-2">&gt;</span> currently building
            <span class="caret text-fg">{{ typed() }}</span>
          </p>

          <div class="enter mt-9 flex flex-wrap gap-3" style="--d: 520ms">
            <a href="#projects" (click)="scrollTo($event, 'projects')" class="btn btn-primary group">
              View My Projects
              <lucide-icon name="arrow-right" [size]="16" class="transition-transform group-hover:translate-x-1"></lucide-icon>
            </a>
            <a [href]="profile.resumeUrl" download class="btn btn-ghost">
              <lucide-icon name="download" [size]="16"></lucide-icon> Download Resume
            </a>
          </div>

          <div class="enter mt-9 flex items-center gap-3" style="--d: 600ms">
            <a [href]="socials.linkedin" target="_blank" rel="noopener" class="icon-btn" aria-label="LinkedIn profile">
              <lucide-icon name="linkedin" [size]="18"></lucide-icon>
            </a>
            <a [href]="socials.github" target="_blank" rel="noopener" class="icon-btn" aria-label="GitHub profile">
              <lucide-icon name="github" [size]="18"></lucide-icon>
            </a>
            <a [href]="'mailto:' + socials.email" class="icon-btn" aria-label="Send email">
              <lucide-icon name="mail" [size]="18"></lucide-icon>
            </a>
            <span class="ml-2 h-px w-10 bg-line-strong"></span>
            <span class="font-mono text-xs text-muted">{{ profile.yearsOfExperience }}+ yrs shipping .NET</span>
          </div>
        </div>

        <!-- illustration: code window -->
        <div class="enter relative mx-auto w-full max-w-md min-w-0 lg:max-w-none" style="--d: 420ms">
          <div class="bg-gradient-accent absolute -inset-1 rounded-3xl opacity-25 blur-2xl" aria-hidden="true"></div>

          <div class="float relative overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/20">
            <div class="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
              <span class="h-3 w-3 rounded-full bg-rose-400/80"></span>
              <span class="h-3 w-3 rounded-full bg-amber-400/80"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400/80"></span>
              <span class="ml-3 font-mono text-xs text-muted">DeveloperController.cs</span>
            </div>
            <pre class="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]" aria-label="Code snippet describing Kunal"><code><span class="text-violet-500 dark:text-violet-400">[ApiController]</span>
<span class="text-violet-500 dark:text-violet-400">[Route</span>(<span class="text-emerald-600 dark:text-emerald-400">"api/developer"</span>)<span class="text-violet-500 dark:text-violet-400">]</span>
<span class="text-blue-600 dark:text-blue-400">public class</span> <span class="text-amber-600 dark:text-amber-300">DeveloperController</span> : <span class="text-amber-600 dark:text-amber-300">ControllerBase</span>
{{ '{' }}
  [<span class="text-violet-500 dark:text-violet-400">HttpGet</span>]
  <span class="text-blue-600 dark:text-blue-400">public</span> <span class="text-amber-600 dark:text-amber-300">IActionResult</span> <span class="text-sky-600 dark:text-sky-300">Get</span>() =&gt; <span class="text-sky-600 dark:text-sky-300">Ok</span>(<span class="text-blue-600 dark:text-blue-400">new</span>
  {{ '{' }}
    Name = <span class="text-emerald-600 dark:text-emerald-400">"{{ profile.name }}"</span>,
    Stack = [<span class="text-emerald-600 dark:text-emerald-400">"C#"</span>, <span class="text-emerald-600 dark:text-emerald-400">"ASP.NET Core"</span>,
             <span class="text-emerald-600 dark:text-emerald-400">"Angular"</span>, <span class="text-emerald-600 dark:text-emerald-400">"SQL Server"</span>],
    Cloud = <span class="text-emerald-600 dark:text-emerald-400">"Azure"</span>,
    CleanCode = <span class="text-blue-600 dark:text-blue-400">true</span>
  {{ '}' }});
{{ '}' }}</code></pre>
          </div>

          <!-- floating badges -->
          <div class="float absolute -bottom-12 -left-3 flex items-center gap-3 rounded-xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8 [animation-delay:-2s]">
            <span class="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/15 text-emerald-500">
              <lucide-icon name="circle-check" [size]="18"></lucide-icon>
            </span>
            <div>
              <p class="text-xs text-muted">Build</p>
              <p class="font-mono text-sm font-medium text-fg">200 OK · deployed</p>
            </div>
          </div>
          <div class="float absolute -top-5 -right-2 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:flex sm:-right-6 [animation-delay:-4s]">
            <lucide-icon name="cloud" [size]="16" class="text-accent-2"></lucide-icon>
            <span class="font-mono text-xs text-fg">Azure · CI/CD</span>
          </div>
        </div>
      </div>

      <a href="#about" (click)="scrollTo($event, 'about')" class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-fg md:flex" aria-label="Scroll to About section">
        <span class="font-mono">scroll</span>
        <span class="flex h-8 w-5 justify-center rounded-full border border-line-strong pt-1.5">
          <span class="h-1.5 w-1 animate-bounce rounded-full bg-accent-1"></span>
        </span>
      </a>
    </section>
  `,
})
export class Hero implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;
  protected readonly typed = signal('');

  private timer?: ReturnType<typeof setTimeout>;
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.typed.set(this.profile.rotatingRoles[0]);
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private tick(): void {
    const word = this.profile.rotatingRoles[this.roleIndex];
    this.charIndex += this.deleting ? -1 : 1;
    this.typed.set(word.slice(0, this.charIndex));

    let delay = this.deleting ? 35 : 70;
    if (!this.deleting && this.charIndex === word.length) {
      delay = 1800;
      this.deleting = true;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.profile.rotatingRoles.length;
      delay = 350;
    }
    this.timer = setTimeout(() => this.tick(), delay);
  }

  protected scrollTo(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
