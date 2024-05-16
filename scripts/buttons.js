//Next and Back buttons
//Homepage
/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/index.html";
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    // Attach click event listeners to all buttons with data-target attributes
    document.querySelectorAll("button[data-target]").forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = button.getAttribute("data-target");
        });
    });
});

/*//Blogs
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("blogHome1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/index.html";
    });

    document.getElementById("blogHome2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog1.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog1-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/index.html";
    });

    document.getElementById("Blog1-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog2.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog2-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog1.html";
    });

    document.getElementById("Blog2-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog3.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog3-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog2.html";
    });

    document.getElementById("Blog3-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog4.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog4-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog3.html";
    });

    document.getElementById("Blog4-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog5.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog5-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog4.html";
    });

    document.getElementById("Blog5-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog6.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog6-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog5.html";
    });

    document.getElementById("Blog6-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog7.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog7-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog6.html";
    });

    document.getElementById("Blog7-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog8.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog8-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog7.html";
    });

    document.getElementById("Blog8-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog9.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog9-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog8.html";
    });

    document.getElementById("Blog9-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog10.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog10-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog9.html";
    });

    document.getElementById("Blog10-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog11.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog11-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog10.html";
    });

    document.getElementById("Blog11-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog12.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Blog12-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog11.html";
    });

    document.getElementById("Blog12-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/critical-reflection.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("criticalReflection1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/blog12.html";
    });

    document.getElementById("criticalReflection2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/index.html";
    });
});

//Design
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("designHome1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/blogs/critical-reflection.html";
    });

    document.getElementById("designHome2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/wireframes.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wireframes1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/index.html";
    });

    document.getElementById("wireframes2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/ixd.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ixd1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/wireframes.html";
    });

    document.getElementById("ixd2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/style-guide.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("styleGuide1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/ixd.html";
    });

    document.getElementById("styleGuide2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/essays/index.html";
    });
});

//Essays
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("essaysHome1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/design/style-guide.html";
    });

    document.getElementById("essaysHome2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/essays/essay1.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("essay1-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/essays/index.html";
    });

    document.getElementById("essay1-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/essays/essay2.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("essay2-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/essays/essay1.html";
    });

    document.getElementById("essay2-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/index.html";
    });
});

//Portfolio
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("portfolioHome1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/essays/essay2.html";
    });

    document.getElementById("portfolioHome2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/profile.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("profile1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/index.html";
    });

    document.getElementById("profile2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/portfolio1.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("portfolio1-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/profile.html";
    });

    document.getElementById("portfolio1-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/portfolio2.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("portfolio2-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/portfolio1.html";
    });

    document.getElementById("portfolio2-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/portfolio3.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("portfolio3-1").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/portfolio/portfolio2.html";
    });

    document.getElementById("portfolio3-2").addEventListener("click", function() {
    window.location.href = "/WSOA3028A_2562617/index.html";
    });
});*/





