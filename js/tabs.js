//window.onload = () => TabsJS.tab()

let TabsJS = {
    options: {
        tabsContainer: "#tabs"
    },
    tabsContainer: (data) => { return (!!data) ? document.querySelector(TabsJS.options.tabsContainer + "[data-tabs=" + data + "]") : document.querySelector(TabsJS.options.tabsContainer) },
    tab: (data, to) => {
        if (!!TabsJS.tabsContainer()) {
            let list = document.createElement('ul'), contentDiv = document.createElement('div'), content = document.createElement('p');
            contentDiv.classList.add("content");
            contentDiv.appendChild(content);
            content.innerHTML = Object.values(data)[0];
            for (let i = 0; i < Object.keys(data).length; i++) list.innerHTML += "<li data-content=\"" + Object.keys(data)[i].toLowerCase().replace(" ", "-") + "\">" + Object.keys(data)[i] + "</li>";
            TabsJS.tabsContainer(to).appendChild(list);
            TabsJS.tabsContainer(to).appendChild(contentDiv);
            TabsJS.tabsContainer(to).querySelector("ul li:first-of-type").classList.add("active");

            TabsJS.tabsContainer(to).querySelectorAll("ul li").forEach(el => {
                el.addEventListener("click", () => {
                    var dataContent = el.getAttribute("data-content")
                    var values = data[Object.keys(data).filter(x => x.toLowerCase().replace(" ", "-") == dataContent)];
                    TabsJS.tabsContainer(to).querySelectorAll("ul li").forEach(el => {
                        el.classList.remove("active");
                    })
                    el.classList.add("active");
                    TabsJS.tabsContainer(to).querySelector(".content p").innerHTML = values;
                });
            })
        } else {
            console.warn("[Tabs.js] Not found '" + TabsJS.options.tabsContainer + "' on window");
        }
    }
}