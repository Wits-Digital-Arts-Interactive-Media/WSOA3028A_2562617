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
    { name: "Blog 1", href: `${root}/blogs/blog1.html` },
    { name: "Blog 2", href: `${root}/blogs/blog2.html` },
    { name: "Blog 3", href: `${root}/blogs/blog3.html` },
    { name: "Blog 4", href: `${root}/blogs/blog4.html` },
    { name: "Blog 5", href: `${root}/blogs/blog5.html` },
    { name: "Blog 6", href: `${root}/blogs/blog6.html` },
    { name: "Blog 7", href: `${root}/blogs/blog7.html` },
    { name: "Blog 8", href: `${root}/blogs/blog8.html` },
    { name: "Blog 9", href: `${root}/blogs/blog9.html` },
    { name: "Blog 10", href: `${root}/blogs/blog10.html` },
    { name: "Blog 11", href: `${root}/blogs/blog11.html` },
    { name: "Blog 12", href: `${root}/blogs/blog12.html` },
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

