var btn = document.createElement("BUTTON");
btn.innerHTML = "Заказать монтаж";
btn.classList.add("_customer-order");

var items = document.getElementsByClassName("_customer-item");

var onHover = function(event) {
  for (var i = 0; i < items.length; i++) {
    event.currentTarget.style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    event.currentTarget.style.padding = "20px";
    event.currentTarget.style.borderRadius = "10px";
    event.currentTarget.style.transition = "ease 0.3s";
    event.currentTarget.append(btn);
  }
};

var onHoverOut = function(event) {
  for (var i = 0; i < items.length; i++) {
    event.currentTarget.style.boxShadow = "none";
    event.currentTarget.style.padding = "0px";
    event.currentTarget.style.borderRadius = "0px";
    event.currentTarget.removeChild(btn)
  }
};

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", onHover, false);
}

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseout", onHoverOut, false);
}
