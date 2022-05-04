(()=> {
  let index = 0;
  setInterval(() => {
      let children = document.getElementsByClassName("controller dots")[0].children;
      children[index % children.length].click();
      index++;
    }, 3000); // 3000ms

})();
