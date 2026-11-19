import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  ArrowRight,
  ArrowUp,
  Briefcase,
  Calendar,
  CircleCheck,
  Cloud,
  CodeXml,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Linkedin,
  LucideAngularModule,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Server,
  Sparkles,
  Sun,
  Terminal,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-angular';

/** Every icon used by name (e.g. <lucide-icon name="mail">) must be listed here. */
const ICONS = {
  ArrowRight, ArrowUp, Briefcase, Calendar, CircleCheck, Cloud, CodeXml, Database, Download,
  ExternalLink, FolderGit2, Github, GraduationCap, Layers, LayoutDashboard, Linkedin, Mail, MapPin,
  Menu, Moon, Phone, Send, Server, Sparkles, Sun, Terminal, Users, Wrench, X, Zap,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick(ICONS)),
  ],
};
