// remove section by ID
function removeSection(elemID) {
    let elem = document.getElementById(elemID);
    elem.remove();
    console.log("Element with ID " + "(" + elemID + ")" + " removed");
}

function showCMDContainer() {
    cmd = document.getElementById("cmd-container");
    let classNames = cmd.className.replace("hidden", "")
    cmd.className = classNames
}


function createChildElements(elementType = "div", parentElementID = "main" ,elementCount = 1, eClassNames = "", eStyles = "", eAttributes = {}) {
    
    // Find the parent element 
    let parentElement = document.getElementById(parentElementID);   //add error handling if the element is not found

    // Start Loop to create the new element/s
    let elementArray = new Array;
    let elem;
    for (let i = 0; i < elementCount; i++) {
       elem = document.createElement(elementType);
       console.log(elem);
       console.log(elementArray);
       elementArray.push(elem);
        
    }

    // Add ClassNames, Styles, Attributes to all elements.
    for (let element of elementArray) {
        element.setAttribute("class", eClassNames);
        element.setAttribute("style", eStyles);
    }

    // add way to pass object of attributes in and add them like this:
    // attr = {
    //     name: "mainBtn",
    //     src: "http://example.com",
    //     href: "http://example.com",
    //     width: "69",
    //     height: "69"
    // }

    // Append each element to the parent element.
    let newID = "";
    for (let element of elementArray) {
        console.log(element);
        parentElement.appendChild(element);
        newID = elementType +"-"+ parentElement.childElementCount;
        console.log("Section created and given ID " + "(" + newID + ")");
        element.id = newID;
        element.innerText = "hello";
    }

    

    return elementArray;
    
}

function updateChatHistory(newChat) {
    let chat = document.getElementById("chatHistory");
    chat.innerHTML = chat.innerHTML + "\n" + newChat;

    console.log(chat.innerHTML)
}

function startBtnClick() {
    // remove btn section
    removeSection("start-section");

    
    
    //cmd-container
    showCMDContainer();
    
    // start listening to the form ******** THIS WILL STOP AND WAIT FOR THIS CODE TO RETURN
    let form = document.getElementById("search-form");
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let search = event.target.children[1].children[0];
        
        console.log(search.value);
        updateChatHistory(search.value);


        search.value = "";
    })

    createChildElements(
        "div",
        "main",
        1,
        "display-1",
        "color: red; font-size: 5rem;"  
    )










    // createChildElements(
    //     "h1",
    //     firstSection,
    //     2,
    //     "display-1",
    //     "color: red; font-size: 5rem;"  
    // )
}