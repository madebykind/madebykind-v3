let filters;
let filterableItems;
let hiddenClasses = ["hidden"];
let activeClasses = ["active", "test"];

function initFilter(el, filter) {
  
  // Loop through all filters and remove active classes
  filters.forEach(function(el, i) {
    activeClasses.forEach(function(c) {
      el.classList.remove(c);
    });
  });
  

  // Loop through all items, hide / unhide depending on filtered topic
  filterableItems.forEach(function(el, i) {
    topics = el.dataset.topics.split(" ");
    

    if (topics.includes(filter)) {
      el.classList.remove(hiddenClasses);
    } else {
      el.classList.add(hiddenClasses);
    }
  });

  // Add active classes to the filter element
  activeClasses.forEach(function(c) {
    el.classList.add(c);
  });
}

function clearFilters() {
  // Loop through all filters and remove active classes
  filters.forEach(function(el, i) {
    activeClasses.forEach(function(c) {
      el.classList.remove(c);
    });
  });

  // Loop through all items and remove hidden classes
  filterableItems.forEach(function(el, i) {
    hiddenClasses.forEach(function(c) {
      el.classList.remove(c);
    });
  });
}

function Filters(el) {
  filters = el.querySelectorAll('[data-topic-filter]');
  filterableItems = document.querySelectorAll('[data-topics]');
  clearButton = el.querySelector('[data-topic-filter-clear]');

  filters.forEach(function(el, i) {
    el.addEventListener("click", function() {
      el.classList.remove(activeClasses);
      initFilter(el, el.dataset.topicFilter);
    })
  });

  clearButton.addEventListener("click", function() {
    clearFilters();
  });

}

export function bindFilters() {
  return [...document.querySelectorAll("[data-topic-filters]")].map((el) => Filters(el));
}
