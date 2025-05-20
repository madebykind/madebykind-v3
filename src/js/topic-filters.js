let filters;
let filterableItems;
let clearButton;
let hiddenClasses = ["hidden"];
let activeClasses = ["active", "before:bg-orange", "text-blue"];
let filterContainerId = "js--filters";

function initFilter(el, filter) {
  
  // Loop through all filters and remove active classes
  filters.forEach(function(el, i) {
    activeClasses.forEach(function(c) {
      el.classList.remove(c);
    });
  });
  

  // Loop through all items, hide / unhide depending on filtered topic
  filterableItems.forEach(function(el, i) {
    let topics = el.dataset.topics.split(" ");
    

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

  // remove active classes from clear button
  activeClasses.forEach(function(c) {
    clearButton.classList.remove(c);
  });

  // scroll to filters
  document.getElementById(filterContainerId).scrollIntoView();
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

  // add active classes from clear button
  activeClasses.forEach(function(c) {
    clearButton.classList.add(c);
  });
}

function Filters(el) {
  filters = el.querySelectorAll('[data-topic-filter]');
  filterableItems = document.querySelectorAll('[data-topics]');
  clearButton = el.querySelector('[data-topic-filter-clear]');

  if (window.location.hash) {

    // Check if element exists
    if (!document.getElementById(window.location.hash.replace("#",""))){
      const filterName = window.location.hash.replace("#","");
      const filterElement = document.querySelector(`[data-topic-filter=${filterName}]`);
      initFilter(filterElement, filterName);
    }
  }

  filters.forEach(function(item, i) {
    item.addEventListener("click", function() {
      this.classList.remove(activeClasses);
      initFilter(this, item.dataset.topicFilter);
    })
  });

  clearButton.addEventListener("click", function() {
    clearFilters();
  });

}

export function bindFilters() {
  return [...document.querySelectorAll("[data-topic-filters]")].map((el) => Filters(el));
}
