"use strict";

caches.open("archivos-estaticos-1").then(caches => {
    caches.addAll(["index.html","script.js","StylePropertyMap.css"])
})