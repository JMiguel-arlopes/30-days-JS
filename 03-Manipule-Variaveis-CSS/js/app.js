const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const sufflex = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufflex)
}

inputs.forEach(input =>  input.addEventListener('change', handleUpdate))
inputs.forEach(input =>  input.addEventListener('mousemove', handleUpdate))

