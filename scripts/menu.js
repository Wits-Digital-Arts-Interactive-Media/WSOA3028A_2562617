//Menu for all pages done in class 
const root = "/WSOA3028A_2562617"

//An array of all the menu tabs
const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blog Posts", href: `${root}/blogs/index.html` },
    { name: "Design Process", href: `${root}/design/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` },
]

//Function for the nav menu 
export function initialiseMenu (currentPage) {
const nav = document.querySelector ("header > nav")
const ul = document.createElement ("ul")
ul.classList.add("menu");

for (let menuItem of menuItems) {
    const li = document.createElement("li")
    li.classList.add("menu-item");
        if(currentPage !=menuItem.name){
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { 
            li.innerText=menuItem.name 
            li.classList.add("active");
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}


