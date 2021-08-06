const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", onButtonClick);

async function onButtonClick(e) {
    e.preventDefault();
    document.querySelector("#list-1").innerHTML = "";
    let input = document.getElementById("text-input").value;
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=` + input);
    const data = await response.json();
    console.log(input);
    console.log(data);
    const {0: {show: {summary}}} = data;
    console.log(summary);
    const newListItem = document.createElement("li");
    newListItem.innerHTML = summary;
    const myList = document.querySelector("#list-1");
    myList.appendChild(newListItem);
}