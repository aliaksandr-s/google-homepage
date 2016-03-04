window.onload = function(){
    var form = document.getElementsByClassName('inputs')[0];
    form.addEventListener("focus", function() {
      this.classList.add('focused');
    }, true);

    form.addEventListener("blur", function() {
      this.classList.remove('focused');
    }, true);
}
