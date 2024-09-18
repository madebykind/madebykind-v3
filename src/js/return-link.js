
function ReturnLink(el) {
  const currentUrl = window.location.href;
  const prevUrl = document.referrer;
  const host = window.location.host;
  const origin = window.location.origin;

  if (prevUrl == currentUrl || prevUrl.includes("newsletter") || !prevUrl.includes(host)) {
    el.href = origin;
  } else {
    el.href = prevUrl;
  }
}

export function bindReturnLink() {
  return [...document.querySelectorAll("[data-return-link]")].map((el) => ReturnLink(el));
}
