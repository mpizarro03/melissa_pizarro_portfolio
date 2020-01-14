$(document).ready(function() {
  //RB popup Modal
  $(".rb-action").on("click", function() {
    console.log("click worked");
    $("#rbModal").modal("show");
    $("#rbModal").modal("handleUpdate");
  });

  //XG popup Modal
  $(".xg-action").on("click", function() {
    console.log("xg click worked");

    $("#xgModal").modal("show");
    $("#xgModal").modal("handleUpdate");
  });

  //KTG popup Modal
  $(".ktg-action").on("click", function() {
    console.log("xg click worked");

    $("#ktgModal").modal("show");
    $("#ktgModal").modal("handleUpdate");
  });

  //Zathom popup Modal
  $(".zathom-action").on("click", function() {
    console.log("zathom click worked");

    $("#zathomModal").modal("show");
    $("#zathomModal").modal("handleUpdate");
  });
});
