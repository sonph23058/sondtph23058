var app = angular.module("myapp", []);
app.controller("bai2", function ($scope) {
  $scope.student = {
    photo: "anh1.png",
    ten: "Nguyễn Văn Tèo",
    tuoi: "20-15-1995",
    gioitinh: "Nam",
    diemtb: 8.5,
  };
});
