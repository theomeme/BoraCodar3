function loading(event) {
  const button = event.currentTarget
  button.classList.add("loading")
  const Text = button.textContent
  button.innerHTML = `
  <i class="ph-circle"></i>
  ${Text}  `
}
