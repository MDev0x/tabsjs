# Tabsjs
tabsjs create multiple tab with your json data
![alt-text](https://s.put.re/zskcP4RV.png)

# Setup
```html
<link rel="stylesheet" href="css/tabs.css">
<script src="js/tabs.js"></script>
```

# Docs
- TabsJS - JSON
    - tab - function
        - data - JSON
        - to - target "data-tabs" attr

# Quick Start
first, Add div having id tags and data-tabs attr because we will use.

```html
<div id="tabs" data-tabs="test"></div>
```

```javascript
var data = {
    Home: "home page",
    About: "about page",
    Contact: "contact page"
}

TabsJS.tab(data, "test")
```

## Result
![alt-text](https://s.put.re/ow2WEshe.PNG)