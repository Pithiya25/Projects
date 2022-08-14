const text = document.getElementById("text");
const counts = document.getElementById("counts");
const remaining = document.getElementById("remaining");

text.addEventListener("input", () => {
  updateData();
});
updateData();

function updateData() {
  counts.innerHTML = `Total Characters : ${text.value.length}`;
  remaining.innerHTML = `Remaining:${text.getAttribute("maxlength") - text.value.length}`;
}
