let crossBtns = document.querySelectorAll(".crossBtn");
let ul = document.querySelector("ul");
let li = document.querySelector("ul li");
let listItems = document.querySelectorAll("ul li");
let inputs = document.querySelectorAll("ul li input");
let addBtn = document.querySelector(".addBtn");
let sortArrow = document.querySelector(".sortArrow");
let r = 0;

let sortedInputValues = [];

let sortState = 0;

addBtn.onclick = () => {
  crossBtns = document.querySelectorAll("ul li .crossBtn");
  inputs = document.querySelectorAll("ul li input");
  listItems = document.querySelectorAll("ul li");
  let liNew = li.cloneNode(true);
  ul.append(liNew);
  liNew.childNodes[1].value = "";
  crossBtns = document.querySelectorAll("ul li .crossBtn");
  inputs = document.querySelectorAll("ul li input");
  listItems = document.querySelectorAll("ul li");

  crossBtns.forEach((item, index) => {
    item.onclick = () => {
      listItems = document.querySelectorAll("ul li");

      if (listItems.length != 1) {
        if (index == 0) {
          listItems[index].remove();
        } else {
          listItems[index - r].remove();
        }
        sortedInputValues.splice(index, index);

        listItems = document.querySelectorAll("ul li");
        r++;
      }
    }
  })
}


// crossBtns[0].onclick = () => {
//   listItems[0].children[0].value="";
//   listItems = document.querySelectorAll("ul li");
// }


sortArrow.onclick = () => {

  listItems = document.querySelectorAll("ul li");
  inputs = document.querySelectorAll("ul li input");

  sortState++;

  if (sortState % 2 == 1) {
    //sort
    sortArrow.classList.remove("sortUp");
    sortArrow.classList.add("sortDown");
    inputs.forEach((item, index) => {
      sortedInputValues[index] = item.value;
    });

    sortedInputValues.sort();

    inputs.forEach((item, index) => {
      item.value = sortedInputValues[index];
    });

  } else if (sortState % 2 == 0) {
    //sort reverse
    sortArrow.classList.remove("sortDown");
    sortArrow.classList.add("sortUp");
    inputs.forEach((item, index) => {
      sortedInputValues[index] = item.value;
    });

    sortedInputValues.sort().reverse();

    inputs.forEach((item, index) => {
      item.value = sortedInputValues[index];
    });

  }
  console.log(sortedInputValues);

}
