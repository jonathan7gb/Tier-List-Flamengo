const draggable = document.querySelectorAll('draggable')
const dropzone = document.querySelectorAll('dropzone')

draggable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
  draggable.classList.add('dragging'); // Adiciona uma classe de estilo enquanto arrasta
  console.log('Drag iniciado');
});

// Evento dragend - finaliza o arrasto
draggable.addEventListener('dragend', () => {
  draggable.classList.remove('dragging');
  console.log('Drag finalizado');
});

// Evento dragenter - elemento entra na área de drop
dropzone.addEventListener('dragenter', (event) => {
  event.preventDefault();
  dropzone.classList.add('over');
  console.log('Entrou na área de drop');
});

// Evento dragover - elemento está sobre a área de drop
dropzone.addEventListener('dragover', (event) => {
  event.preventDefault(); // Necessário para permitir o drop
  console.log('Elemento sobre a área de drop');
});

// Evento dragleave - elemento deixa a área de drop
dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('over');
  console.log('Saiu da área de drop');
});

// Evento drop - elemento é solto na área de drop
dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropzone.classList.remove('over');
  dropzone.appendChild(draggable); // Move o elemento arrastável para dentro da área de drop
  console.log('Elemento solto na área de drop');
});