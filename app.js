const title = document.querySelector("#main-ward");
let newTitle = " I AM A FRANT-AND DEVELOPER";
let index = 1;

const changeWard = () => {
  let newname = newTitle.slice(0, index);
  title.innerText = newname;

  index > newTitle.length ? (index = 0) : index++;

  setTimeout(() => changeWard(), 200);
};
changeWard();
