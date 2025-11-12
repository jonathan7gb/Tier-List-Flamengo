const draggables = document.querySelectorAll('.draggable')
const dropzones = document.querySelectorAll('.dropzone')
const dropzone2 = document.querySelector('.dropzone2')

draggables.forEach((img, index) => {
  img.id = `player-${index}`;

  img.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id); 
    e.target.classList.add('opacity-50');
  });

  img.addEventListener('dragend', e => {
    e.target.classList.remove('opacity-50');
  });
});

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', event => {
    event.preventDefault();
    dropzone.classList.add('over');
  });

  dropzone.addEventListener('dragover', event => {
    event.preventDefault();
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('over');
  });

  dropzone.addEventListener('drop', event => {
    event.preventDefault();
    dropzone.classList.remove('over');

    const draggedId = event.dataTransfer.getData('id');
    const draggedElement = document.getElementById(draggedId);

    if (draggedElement) {
        dropzone.appendChild(draggedElement);
        draggedElement.classList.add('inDropzone')
    }
  });
});

dropzone2.addEventListener('dragenter', event => {
    event.preventDefault();
    dropzone2.classList.add('over');
  });

  dropzone2.addEventListener('dragover', event => {
    event.preventDefault();
  });

  dropzone2.addEventListener('dragleave', () => {
    dropzone2.classList.remove('over');
  });

  dropzone2.addEventListener('drop', event => {
    event.preventDefault();
    dropzone2.classList.remove('over');

    const draggedId = event.dataTransfer.getData('id');
    const draggedElement = document.getElementById(draggedId);

    if (draggedElement) {
        dropzone2.appendChild(draggedElement);
        draggedElement.classList.add('inDropzone2')
    }
  });