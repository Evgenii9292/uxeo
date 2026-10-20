// Auth must wait for the active account's pending progress before removing its token.
let flush: (() => Promise<boolean>) | null = null;
export function registerProgressFlush(handler: () => Promise<boolean>): () => void {
  flush = handler;
  return () => { if (flush === handler) flush = null; };
}
export async function flushProgressBeforeSignOut(): Promise<boolean> {
  return flush ? flush() : true;
}
