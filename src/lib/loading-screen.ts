export const LOADING_SCREEN_STORAGE_KEY = "shamStudioLoadingSeenAt";

/** Erneut anzeigen, wenn die Seite länger nicht geöffnet wurde (7 Tage) */
export const SHOW_AGAIN_AFTER_MS = 7 * 24 * 60 * 60 * 1000;

let loadingCompleteFlag = false;

function getLastSeenAt(): number | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(LOADING_SCREEN_STORAGE_KEY);
  if (!raw) return null;
  const timestamp = parseInt(raw, 10);
  return Number.isNaN(timestamp) ? null : timestamp;
}

/** true = Ladescreen überspringen (bereits kürzlich gesehen) */
export function shouldSkipLoadingScreen(): boolean {
  const lastSeen = getLastSeenAt();
  if (lastSeen === null) return false;
  return Date.now() - lastSeen < SHOW_AGAIN_AFTER_MS;
}

export function willShowLoadingScreen(): boolean {
  return !shouldSkipLoadingScreen();
}

export function isHeroReady(): boolean {
  return loadingCompleteFlag || shouldSkipLoadingScreen();
}

export function notifyLoadingComplete(): void {
  if (typeof window === "undefined") return;
  loadingCompleteFlag = true;
  window.dispatchEvent(new Event("loadingComplete"));
}

/** Hero & Co.: sofort ready wenn kein Ladescreen, sonst nach notifyLoadingComplete */
export function subscribeLoadingComplete(onReady: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  if (isHeroReady()) {
    onReady();
    return () => {};
  }

  const handler = () => onReady();
  window.addEventListener("loadingComplete", handler);
  return () => window.removeEventListener("loadingComplete", handler);
}

/** Nach Ladescreen oder Besuch einer Unterseite – Zeitstempel für Skip-Logik */
export function markLoadingScreenSeen(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOADING_SCREEN_STORAGE_KEY, String(Date.now()));
  notifyLoadingComplete();
}
