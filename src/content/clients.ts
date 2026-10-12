export interface ClientLogoItem {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  permissionGranted: boolean;
}

/**
 * Single source of truth for verified client company logos.
 * Rules:
 * - Render ONLY logos where permissionGranted === true.
 * - Suppressed from DOM if array has 0 permitted items.
 */
export const clientLogos: ClientLogoItem[] = [
  // Intentionally empty until client gives written permission to publish their logo.
];

export function getPermittedClientLogos(): ClientLogoItem[] {
  return clientLogos.filter((c) => c.permissionGranted);
}
