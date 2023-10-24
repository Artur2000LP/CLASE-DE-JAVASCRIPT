const zona = document.querySelector(".zona-arrastre");
zona.addEventListener("dragover", (e) => {
    changeStyle(e.target, "#444"); // antiguo e.srcElement
});

zona.addEventListener("dragleave", (e) => {
    e.preventDefault();
    changeStyle(e.target, "#888"); // antiguo e.srcElement
});

zona.addEventListener("drop", (e) => {
    e.preventDefault();
    changeStyle(e.target, "#888"); // antiguo e.srcElement
    cargarArchivo(e.dataTransfer.files[0]);
});

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
};

const cargarArchivo = (ar) => {
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load", (e) => {
        document.querySelector(".resultado").textContent = e.currentTarget.result;
    });
};
