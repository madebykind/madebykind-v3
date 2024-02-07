function SubscribeForm(el) {
  const action = el.getAttribute('action');
  const form = el.querySelector("[data-form]");
  const message = el.querySelector("[data-message]");


  el.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(document.getElementById('email').value);

    try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", action);
      xhr.send(JSON.stringify({
        email: document.getElementById('email').value,
        from: document.getElementById('from').value
      }));
      message.innerHTML = "Thanks, you're signed up!"
      form.remove();
    } catch(e) {
      message.innerHTML = "Sorry, there was an error. Please try again or email "
    }

  });
}


export function bindSubscribeForm() {
  return [...document.querySelectorAll("[data-subscribe-form]")].map((el) => SubscribeForm(el));
}