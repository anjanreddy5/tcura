export function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function goBack() {
  window.history.back();
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

