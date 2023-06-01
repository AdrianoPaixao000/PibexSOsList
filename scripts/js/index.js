const systemList = [
    {
        name: "Windows 3.1",
        img: "https://cdn.discordapp.com/attachments/762700251312029706/1113708502066667610/211540.png",
        link: "https://www.pcjs.org/software/pcx86/sys/windows/3.10/"
    },
    {
        name: "Windows 95",
        img: "https://cdn.discordapp.com/attachments/762700251312029706/1113707277812240464/2022-10-20-image-17-j_1100.png",
        link: "https://archive.org/details/win95_in_dosbox",
    },
    {
        name: "Windows 98",
        img: "https://cdn.discordapp.com/attachments/762700251312029706/1113707857980968991/i332439.png",
        link: "https://98.js.org/",
    }
];

const divList = document.querySelector(".list");

systemList.forEach((so) => {
    const { img, link, name } = so;

    const soElement = document.createElement("div");
    soElement.classList.add("soElement");

    const soImg = document.createElement("img");
    soImg.src = img;

    const soOverlay = document.createElement("div");
    soOverlay.classList.add("soOverlay");
    soOverlay.innerText = name;

    soElement.appendChild(soImg);
    soElement.appendChild(soOverlay);
    divList.appendChild(soElement);

    soElement.addEventListener("mouseenter", () => {
        soOverlay.innerText = name;
        soOverlay.classList.add("active");
    });

    soElement.addEventListener("mouseleave", () => {
        soOverlay.classList.remove("active");
    });

    soElement.addEventListener("click", () => {
        window.open(link, "_blank");
    });
});
