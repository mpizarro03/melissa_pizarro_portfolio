$(document).ready(function() {
  //RB popup Modal
  $(".rb-action").on("click", function() {
    $("#rbModal").modal("show");
    $("#rbModal").modal("handleUpdate");
  });

  //XG popup Modal
  $(".xg-action").on("click", function() {
    $("#xgModal").modal("show");
    $("#xgModal").modal("handleUpdate");
  });

  //KTG popup Modal
  $(".ktg-action").on("click", function() {
    $("#ktgModal").modal("show");
    $("#ktgModal").modal("handleUpdate");
  });

  //Zathom popup Modal
  $(".zathom-action").on("click", function() {
    $("#zathomModal").modal("show");
    $("#zathomModal").modal("handleUpdate");
  });
});
