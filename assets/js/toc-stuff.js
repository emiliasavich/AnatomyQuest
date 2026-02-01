document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("show-menu");
    const tocBtn = document.getElementById("show-toc");
    const sidebarContent = document.getElementById("sidebar-content");

    const siteMenuHTML = sidebarContent.innerHTML;
    const headings = Array.from(document.querySelectorAll("h2, h3, h4"));

    // H4 <li>
    function createH4Li(h4) {
        if (!h4.id) h4.id = h4.textContent.toLowerCase().replace(/[^\w]+/g, "-");
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + h4.id;
        a.textContent = h4.textContent;
        li.appendChild(a);
        return li;
    }

    function createH3Li(h3, h4s) {
        if (!h3.id) h3.id = h3.textContent.toLowerCase().replace(/[^\w]+/g, "-");

        const li = document.createElement("li");
        const details = document.createElement("details");
        details.classList.add("nav__children");
        details.open = false; // closed by default

        const summary = document.createElement("summary");

        const a = document.createElement("a");
        a.href = "#" + h3.id;
        a.textContent = h3.textContent;
        summary.appendChild(a);

        // Only add the plus class if there are H4 children
        if (h4s.length > 0) {
            summary.classList.add("nav__children_plus");
        }

        details.appendChild(summary);

        // Only add nested H4 <ul> if there are H4 children
        if (h4s.length > 0) {
            const ul = document.createElement("ul");
            h4s.forEach(h4 => ul.appendChild(createH4Li(h4)));
            details.appendChild(ul);
        }

        li.appendChild(details);
        return li;
    }


    function createH2Li(h2, h3s) {
        if (!h2.id) h2.id = h2.textContent.toLowerCase().replace(/[^\w]+/g, "-");

        const li = document.createElement("li");
        const details = document.createElement("details");
        details.open = false; // closed by default

        const summary = document.createElement("summary");

        const a = document.createElement("a");
        a.href = "#" + h2.id;
        a.textContent = h2.textContent;
        a.classList.add("nav__sub-title");
        summary.appendChild(a);

        // Only add the plus class if there are H3 children
        if (h3s.length > 0) {
            summary.classList.add("nav__children_plus");
        }

        details.appendChild(summary);

        if (h3s.length > 0) {
            const ul = document.createElement("ul");
            h3s.forEach(h3Li => ul.appendChild(h3Li));
            details.appendChild(ul);
        }

        li.appendChild(details);
        return li;
    }

    // Build TOC
    const tocRoot = document.createElement("nav");
    tocRoot.classList.add("nav__list");
    const tocUlRoot = document.createElement("ul");
    tocUlRoot.classList.add("nav__items");

    let i = 0;
    while (i < headings.length) {
        const h2 = headings[i];
        if (h2.tagName !== "H2") {
            i++;
            continue;
        }

        i++;
        // collect all H3s under this H2
        const h3Lis = [];
        while (i < headings.length && headings[i].tagName !== "H2") {
            const h3 = headings[i];
            if (h3.tagName !== "H3") {
                i++;
                continue;
            }
            i++;
            // collect H4s under this H3
            const h4s = [];
            while (i < headings.length && headings[i].tagName === "H4") {
                h4s.push(headings[i]);
                i++;
            }
            h3Lis.push(createH3Li(h3, h4s));
        }

        const liH2 = createH2Li(h2, h3Lis);
        tocUlRoot.appendChild(liH2);
    }

    tocRoot.appendChild(tocUlRoot);
    const tocHTML = tocRoot.outerHTML;

    // Button active state
    function setActive(btn) {
        menuBtn.classList.remove("active");
        tocBtn.classList.remove("active");
        btn.classList.add("active");
    }

    // Button handlers
    menuBtn.addEventListener("click", function () {
        sidebarContent.innerHTML = siteMenuHTML;
        setActive(menuBtn);
    });

    //   tocBtn.addEventListener("click", function () {
    //     sidebarContent.innerHTML = tocHTML;
    //     setActive(tocBtn);
    //   });
    tocBtn.addEventListener("click", function () {
        // Set sidebar content to TOC
        sidebarContent.innerHTML = tocHTML;
        setActive(tocBtn);

        // Now attach event listener for clicks inside the TOC
        const wipContent = document.getElementById("wip_content");
        const tocLinks = sidebarContent.querySelectorAll("a[href^='#']");

        // tocLinks.forEach(link => {
        //     link.addEventListener("click", function (e) {
        //     const targetId = this.getAttribute("href").substring(1);
        //     const targetEl = document.getElementById(targetId);
        //     if (!targetEl) return;

        //     // Remove hidden class if content is hidden
        //     if (wipContent.classList.contains("hidden")) {
        //         wipContent.classList.remove("hidden");
        //     }

        //     // Smooth scroll to target
        //     targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

        //     e.preventDefault(); // prevent default jump
        //     });
        // });
        tocLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href").substring(1);
                const targetEl = document.getElementById(targetId);
                if (!targetEl) return;

                // Remove hidden class from main content if needed
                const wipContent = document.getElementById("wip_content");
                if (wipContent.classList.contains("hidden")) {
                // wipContent.classList.remove("hidden");
                toggleWIP();
                }

                // Only do the parent toggle if this is an H4
                if (targetEl.tagName === "H4") {
                const parent = targetEl.closest(".content-toggle-content");
                if (parent && parent.style.display !== "block") {
                    const plus_box = parent.closest(".content-toggle-box");
                    if (plus_box) {
                    const icon = plus_box.querySelector(".content-toggle-plus");
                    if (icon) {
                        icon.textContent = icon.textContent === "+" ? "-" : "+";
                    }
                    }
                    parent.style.display = "block";
                }
                }

                // Scroll to the target
                targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

                e.preventDefault();
            });
            });

    });
});


