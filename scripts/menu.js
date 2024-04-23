const menuItems = 
[
    {name: "Home", href: "/index.html"},
    {name: "Blog Posts", href: "/blogs/index.html"},
    {name: "Design Process", href: "/design/index.html"},
    {name: "Essays", href: "/essays/index.html"},
    {name: "Portfolio", href: "/portfolio/index.html"},
];

export function initialise(currentPage) 
{
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");

    for (let menuItem of menuItems) 
    {
        const li = document.createElement("li");
        const a = document.createElement("a");
        if (currentPage != menuItem.name) 
        {
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
        } else 
        
        {
            a.innerText = menuItem.name;
            a.setAttribute("href", currentPage === "Home" ? "/index.html" : `/${currentPage.toLowerCase()}/index.html`);
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}


