var app = angular.module("myapp", []);
app.controller("bai3", function ($scope) {
  $scope.student = [
    {
      photo: "anh1.png",
      ten: "Nguyễn Văn Tèo",
      tuoi: "20-15-1995",
      gioitinh: "Nam",
      diemtb: 8.5,
    },
    {
      photo: "anh2.png",
      ten: "Phạm Thị Nở",
      tuoi: "11-12-1995",
      gioitinh: "Nữ",
      diemtb: 5.5,
    },
    {
      photo: "anh3.png",
      ten: "Trần NgỌC Quang",
      tuoi: "31-12-1980",
      gioitinh: "Nam",
      diemtb: 7,
    },
  ];
});
