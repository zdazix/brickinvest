import type { MouseEvent } from "react";

export const scrollCurrentHomeToTop = (
  event: MouseEvent<HTMLAnchorElement>,
  pathname: string,
) => {
  if (pathname !== "/") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  const resetScroll = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  };

  resetScroll();
  window.requestAnimationFrame(() => {
    resetScroll();
    window.requestAnimationFrame(() => {
      resetScroll();
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
  });
};
