document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})
//as a side note i realise now looking at both programs this one is very similar to the
//solution for the reading list one as i used that as a reference, don't worry i know what
//everything does, the inner html = '' to delete was pretty cool cos i tried to puzzle that solution
//without checking it but it is very nice and clean
const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const dinoListItem = createdinoListItem(event.target);
  const dinoList = document.querySelector('#dinosaur-list');
  dinoList.appendChild(dinoListItem);

  event.target.reset();
}

const createdinoListItem = function (form) {
  const dinoListItem = document.createElement('li');
  dinoListItem.classList.add('dinosaur-list-item');

  const species = document.createElement('h2');
  species.textContent = form.species.value;
  dinoListItem.appendChild(species);

  const survival = document.createElement('p');
  survival.textContent = form.survival.value;
  dinoListItem.appendChild(survival);

  const diet = document.createElement('p');
  diet.textContent = form.diet.value;
  dinoListItem.appendChild(diet);

  const size = document.createElement('p');
  size.textContent = form.size.value;
  dinoListItem.appendChild(size);

  return dinoListItem;
}

const handleDeleteAllClick = function (event) {
  const dinoList = document.querySelector('#dinosaur-list');
  dinoList.innerHTML = '';
}
