document.addEventListener('DOMContentLoaded', function() {
    const noteList = document.getElementById('noteList');
    const newNoteBtn = document.getElementById('newNoteBtn');
    const noteModal = document.getElementById('noteModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');

    newNoteBtn.addEventListener('click', () => {
        noteModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        noteModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == noteModal) {
            noteModal.style.display = 'none';
        }
    });

    saveNoteBtn.addEventListener('click', () => {
        const title = noteTitle.value;
        const content = noteContent.value;
        if (title && content) {
            const note = document.createElement('div');
            note.classList.add('note');
            note.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
            `;
            noteList.appendChild(note);
            noteTitle.value = '';
            noteContent.value = '';
            noteModal.style.display = 'none';
        } else {
            alert('Please enter a title and content for the note.');
        }
    });
});
