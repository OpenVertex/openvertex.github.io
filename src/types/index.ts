export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  tags?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  github: string;
  bio?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TypingAnimationConfig {
  text: string;
  speed: number;
  cursorBlinkSpeed: number;
}

export interface ParticleConfig {
  count: number;
  speed: number;
  color: string;
  opacity: number;
}
