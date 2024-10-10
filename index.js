function getRandomColour() {
    const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  }
  
  
  
  const addToStickyNotes = document.querySelector('.sticky-notes');
  const addNote = document.querySelector('#new-note');
  const addButtonClass = document.querySelector('.add-button');
  
  addButtonClass.addEventListener('click', () => {
    if (addNote.value === "") return;
    const noteCard = document.createElement('div');
    noteCard.classList.add('sticky-note');
  
    const noteTextArea = document.createElement('textarea');
    noteTextArea.value = addNote.value;
    noteTextArea.style.cssText = "box-shadow:none;background-color:transparent";
    noteCard.appendChild(noteTextArea);
  
    const noteNewButton = document.createElement('button');
    noteNewButton.innerText = "X";
    noteNewButton.classList.add('delete-button');
  
    noteNewButton.addEventListener('click', () => {
      noteCard.remove();
    });
  
    noteCard.append(noteTextArea, noteNewButton);
    noteCard.style.background = getRandomColour();
    addToStickyNotes.appendChild(noteCard);
  
    addNote.value = "";
  
  });
  
  
