//Menu for all pages
const root = "/WSOA3028A_2562617"

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blog Posts", href: `${root}/blogs/index.html` },
    { name: "Design Process", href: `${root}/design/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` },
]

export function initialiseMenu (currentPage) {
const nav = document.querySelector ("header > nav")
const ul = document.createElement ("ul")

for (let menuItem of menuItems) {
    const li = document.createElement("li")
        if(currentPage !=menuItem.name){
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { li.innerText=menuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

//Menu for all the blog pages
const blogMenuItems = [
    { name: "Week 1", href: `${root}/blogs/week1.html` },
    { name: "Week 2", href: `${root}/blogs/week2.html` },
    { name: "Week 3", href: `${root}/blogs/week3.html` },
    { name: "Week 4", href: `${root}/blogs/week4.html` },
    { name: "Week 6", href: `${root}/blogs/week6.html` },
    { name: "Week 8", href: `${root}/blogs/week8.html` },
    { name: "Week 9", href: `${root}/blogs/week9.html` },
    { name: "Week 10", href: `${root}/blogs/week10.html` },
    { name: "Week 11", href: `${root}/blogs/week11.html` },
    { name: "Week 12", href: `${root}/blogs/week12.html` },
    { name: "Week 13", href: `${root}/blogs/week13.html` },
    { name: "Week 14", href: `${root}/blogs/week14.html` },
]

export function initialiseBlogMenu (currentBlog) {
const nav = document.querySelector ("main > nav")
const ul = document.createElement ("ul")

for (let blogMenuItem of blogMenuItems) {
    const li = document.createElement("li")
        if(currentBlog !=blogMenuItem.name){
            const a = document.createElement("a")
            a.innerText = blogMenuItem.name
            a.setAttribute("href", blogMenuItem.href)
            li.appendChild(a)
        } else { li.innerText=blogMenuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

