export const waitFor = (duration: number, signal?: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timeout = globalThis.setTimeout(resolve, duration);

    signal?.addEventListener(
      "abort",
      () => {
        globalThis.clearTimeout(timeout);
        reject(new DOMException("The request was aborted.", "AbortError"));
      },
      { once: true },
    );
  });
