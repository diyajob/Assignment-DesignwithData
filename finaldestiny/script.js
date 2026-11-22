const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=wind_direction_10m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let wind = data.current.wind_direction_10m;

    let video = document.querySelector("#videodisplay");

    if (wind >= 315 || wind <45) {
        // https://joshmadison.com/2008/04/20/fortune-cookie-fortunes/
        document.querySelector("#message").textContent ="Fear and desire – two sides of the same coin.";
        video.src = "video/fortune1.mp4"
        document.querySelector(".container").style.backgroundColor = "rgba(89,27,12,0.598)";
        document.querySelector(".backgroundbox").style.backgroundColor = "rgba(121, 4, 4, 0.95)";

    } else if (wind <135) {
        document.querySelector("#message").textContent = "Change is happening in your life, so go with the flow!";
        video.src = "video/fortune2.mp4"
        document.querySelector(".container").style.backgroundColor = "rgba(120, 204, 3, 0.65)";
        document.querySelector(".backgroundbox").style.backgroundColor = "rgba(164, 188, 6, 0.74)";

    }else if (wind<225) {
        document.querySelector("#message").textContent = "Like the river flowing into the sea. Somethings are just meant to be.";
        video.src = "video/fortune3.mp4"
        document.querySelector(".container").style.backgroundColor ="rgba(3, 204, 184, 0.65)";
        document.querySelector(".backgroundbox").style.backgroundColor ="rgba(6, 133, 188, 0.8)";

    }else {
        document.querySelector("#message").textContent ="Remember to share good fortune as well as bad with your friends.";
        video.src = "video/fortune4.mp4"
        document.querySelector(".container").style.backgroundColor ="rgba(62, 15, 129, 0.75)";
        document.querySelector(".backgroundbox").style.backgroundColor ="rgba(80, 11, 208, 0.8)";
    }
  });
document.getElementById("btn1").addEventListener("click", () => {
    window.location.href = "../index.html";
});

