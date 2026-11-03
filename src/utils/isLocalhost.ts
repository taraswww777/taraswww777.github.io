export const isLocalhost = (): boolean => {
  if (typeof window === 'undefined') {
    return true;
  }
  if (typeof window !== "undefined") {
    return window?.location?.host.includes('localhost')
  }

  return false;
}
