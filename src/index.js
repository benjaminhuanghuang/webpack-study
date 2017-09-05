const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = () => {
  console.log("Click...");
  System.import("./image_viewer").then(module => {
    module.default();
  });
};

document.body.appendChild(button);