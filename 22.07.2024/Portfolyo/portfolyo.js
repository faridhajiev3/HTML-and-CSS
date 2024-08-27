// const homeElements = document.querySelectorAll(".home")
// const title = document.querySelectorAll(".title")
// const port = document.querySelectorAll(".port")


// const handleClick = () => {
//     if (title.classList.contains("hello")) {
//         title.classList.remove("hello");
//     } else {
//         title.classList.add("hello");
//     }
//     homeElements.forEach(element => {
//         element.addEventListener("click", handleClick);
//     });
// };

// homeElements.addEventListener("click", handleClick);
// port.addEventListener("click", handleClick);


const homeElements = document.querySelectorAll(".home");
const titleElements = document.querySelectorAll(".title");
const portElements = document.querySelectorAll(".port");

const handleClick = () => {
    titleElements.forEach(element => {
        if (element.classList.contains("hello")) {
            element.classList.remove("hello");
        } else {
            element.classList.add("hello");
        }
    });
};


// homeElements.forEach(element => {
//     element.addEventListener("click", handleClick);
// });

for (const element of homeElements) {
    element.addEventListener("click", handleClick)
}

// portElements.forEach(element => {
//     element.addEventListener("click", handleClick);
// });

for (const element of portElements) {
    element.addEventListener("click", handleClick)
}