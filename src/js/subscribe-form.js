function SubscribeForm(el) {
  const honeypotField = el.querySelector("input.h0n");

  el.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!honeypotField.value) {
      el.submit();
    }

  });
}


export function bindSubscribeForm() {
  return [...document.querySelectorAll("[data-subscribe-form]")].map((el) => SubscribeForm(el));
}