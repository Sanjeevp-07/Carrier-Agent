import { Profile } from "../types/profile";

const KEY = "career-agent-profile";

export function saveProfile(profile: Profile) {
  localStorage.setItem(KEY, JSON.stringify(profile));
}

export function loadProfile(): Profile | null {
  const data = localStorage.getItem(KEY);

  if (!data) return null;

  return JSON.parse(data);
}