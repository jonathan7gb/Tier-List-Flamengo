const draggables = document.querySelectorAll('.draggable')
const dropzones = document.querySelectorAll('.dropzone')


draggables.forEach(img => {
  img.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.src);
    e.target.classList.add('opacity-50');
  });

  img.addEventListener('dragend', e => {
    e.target.classList.remove('opacity-50');
  });
});

dropzones.forEach(dropzone => {
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
     dropzone.addEventListener('drop', event => {
        event.preventDefault();
        dropzone.classList.remove('over');

        const draggedId = event.dataTransfer.getData('id');
        const draggedElement = document.getElementById(draggedId);
        dropzone.appendChild(draggedElement);
    });
})