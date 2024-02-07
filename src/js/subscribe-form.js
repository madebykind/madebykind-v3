function SubscribeForm(el) {
  const action = el.getAttribute('action');
  const form = el.querySelector("[data-form]");
  const message = el.querySelector("[data-message]");
  const honeypotField = el.querySelector("input.h0n")


  el.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!honeypotField.value) {

      let formData = new FormData(e.target);

      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", action);
        xhr.send(JSON.stringify(
          Object.fromEntries(formData)
        ));
        message.innerHTML = "Thanks, you're signed up!"
        form.remove();
        message.classList.remove('hidden');
      } catch(e) {
        message.innerHTML = `Sorry, there was an error. Please try again or email us at <a href="mailto:hello@madebykind.com">hello@madebykind.com</a>.`
        message.classList.remove('hidden');
      }
    }

  });
}


export function bindSubscribeForm() {
  return [...document.querySelectorAll("[data-subscribe-form]")].map((el) => SubscribeForm(el));
}