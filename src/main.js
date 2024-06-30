// remove section by ID
function removeSection(elemID) {
    let elem = document.getElementById(elemID);
    elem.remove();
    console.log("Element with ID " + "(" + elemID + ")" + " removed");
}

// create section & append to the bottom of the body
function createSection() {
    let section = document.createElement("section");
    let main = document.getElementById("main"); 

    // Create ID for new section based off 
    //number of child elements in the main section
    let newID = "section-" + main.childElementCount;
    console.log("Section created and given ID " + "(" + newID + ")");
    section.id = newID;
    
    //append to main section
    main.append(section);

    //return the ID of the new section 
    return newID;
}

function startBtnClick() {
    // remove btn section
    removeSection("start-section");

    // create new section
    let firstSection = createSection();

    console.log(firstSection);

    
}