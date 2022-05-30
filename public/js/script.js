// const p_tag = document.createElement('p');
// p_tag.appendChild(document.createTextNode('text p tag'));
// p_tag.classList.add('class');

// console.log(p_tag);

// const day = new Date(),
// option = {
//      weekday : 'long',
//      year : 'numeric',
//      month: 'long',
//      day
//
// }

counter();
function counter() {
  let More = document.querySelectorAll(".More"),
    Less = document.querySelectorAll(".less"),
    counters = document.querySelector("#counter");

  More.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (counters.value < 99) {
        counters.value++;
      }
    });
  });
  Less.forEach((element) => {
    element.addEventListener("click", () => {
      if (counters.value > 0) {
        counters.value--;
      }
    });
  });
}
