// chrome://extensions/


let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  console.log("BUttON CLICKED USING addEventListner");
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads()
  console.log(localStorage.getItem(myLeads));
});

function renderLeads() {
  let listItems = "";
  for (i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   " ' >" +
    //   myLeads[i] +
    //   "</a></li>";

    listItems += 
    `<li>
      <a target='_blank' href='${myLeads[i]}' >
        ${myLeads[i]}
      </a>
    </li>`;
    //     const li = document.createElement("li");
    //     li.textContent = myLeads[i];
    //     ulEl.append(li);
  }

  ulEl.innerHTML = listItems;
}
