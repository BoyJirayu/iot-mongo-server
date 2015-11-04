angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var vm = this

    getIot()
    $interval(function () {
      getIot()
    }, 5000)

    vm.submit = function (input) {
      saveIot(input)
    }

    vm.toThaiDateTime = function (date) {
      return moment(date).fromNow()
    }

    function getIot () {
      $http.get('/api/iot')
        .then(function success (response) {
          vm.iots = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveIot (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getIot()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
  })
