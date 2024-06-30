# HTML Element Generator

A lightweight JavaScript library for dynamically generating and managing HTML elements.

## Features

- **Create Sections**: Dynamically create new `<section>` elements and append them to a specified parent element.
- **Remove Sections**: Easily remove sections by their ID.
- **Automated ID Assignment**: New sections are automatically assigned unique IDs based on the number of existing child elements.

## Getting Started

### Installation

To use the HTML Element Generator library, you can simply include the JavaScript file in your project:

```html
<script src="path/to/html-element-generator.js"></script>
```
### Usage
#### Create a New Section
To create a new section and append it to the main element, use the createSection function:

```javascript
let newSectionID = createSection();
console.log("New section created with ID: " + newSectionID);

```

#### Remove a Section by ID
To remove an existing section by its ID, use the removeSection function:

```javascript
removeSection("section-1");
console.log("Section with ID 'section-1' removed");
```

#### Example
Here's a basic example of how to use the library:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Element Generator Example</title>
    <script src="path/to/html-element-generator.js"></script>
</head>
<body>
    <div id="main">
        <button onclick="startBtnClick()">Start</button>
    </div>

    <script>
        function startBtnClick() {
            // Remove button section
            removeSection("start-section");

            // Create new section
            let firstSection = createSection();
            console.log("First section created with ID: " + firstSection);
        }
    </script>
</body>
</html>
```
## Development
If you want to contribute to the development of this library, follow these steps:

### Clone the repository:

```sh
git clone https://github.com/your-username/html-element-generator.git
Navigate to the project directory:
```

```sh
cd html-element-generator
```
Open the project in your favorite code editor and start hacking!

## Future Plans
Add more functions to generate different types of HTML elements.
Provide options to customize the attributes of generated elements.
Improve error handling and add more comprehensive logging.
License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Thanks to everyone who will contribute to this project!
Feel free to reach out if you have any questions or suggestions. Happy coding!