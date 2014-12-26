$(function() {
  var email1 = "moc.liamg";
  var email2 = "@grebdnasat";
  var addr = email2.split('').reverse().join('');
  addr += email1.split('').reverse().join('');

  $('span.contact').html(
    "<a href=mailto:" + addr + ">Contact</a>"
  );
});
