let btn = document.createElement("BUTTON");
btn.innerHTML = "Заказать монтаж";
btn.classList.add("_customer-order");

var items = document.getElementsByClassName("_customer-item");
var model = document.getElementsByClassName("_customer-model");
var forms = document.getElementsByClassName("item-wrap");
var button =  document.getElementsByClassName("_customer-order");
var onHover = function(event) {
  for (var i = 0; i < items.length; i++) {
    event.currentTarget.style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    event.currentTarget.style.padding = "20px";
    event.currentTarget.style.borderRadius = "10px";
    event.currentTarget.style.transition = "ease 0.3s";
    if(event.currentTarget.className == "_customer-item")
    {
    event.currentTarget.insertBefore(btn, items.lastElementChild);
  }

  }

};

var onHoverOut = function(event) {
  for (var i = 0; i < items.length; i++) {
    event.currentTarget.style.boxShadow = "none";
    event.currentTarget.style.padding = "0px";
    event.currentTarget.style.borderRadius = "0px";
    }
    if(event.relatedTarget.className == '_customer-items' || event.relatedTarget.className == '_customer-container'){
      btn.remove();
    }

};


for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", onHover, true);
}

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseout", onHoverOut, true);
}
