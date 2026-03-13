// Simple className merge helper
export function cn(...args: any[]) {
  return args.filter(Boolean).join(' ')
}
