const cur = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
      cur.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;");
});

document.addEventListener('click', e => {
      cur.classList.add("expand");
      setTimeout(() => {
            cur.classList.remove("expand");
      }, 500)
});