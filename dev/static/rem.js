(function(){
    var docEl = document.documentElement;

    function setRemUint(){
        var rem = docEl.clientWidth / 10; //docEl.clientWidth =>rem的基准值
        docEl.style.fontSize = rem + 'px';
    }

    setRemUint();

    window.addEventListener('resize', setRemUint);
})();