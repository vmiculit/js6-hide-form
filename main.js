
angular.module("js6",[])

angular.module("js6")
	.controller("js6Troller",["$scope", function($scope) {

		$scope.user = [
			{
				imageURL : "http://placehold.it/200x300",
				name : "John Doe",
				bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit enim nulla, pellentesque sagittis massa lacinia sed. Vivamus tellus nibh, lacinia eu vestibulum a, scelerisque vel urna. In mattis elit odio, vel rutrum ligula elementum a. Phasellus in tellus vitae orci interdum hendrerit.",
				favoriteBooks : "Book1, Book2, Book3",
				favoriteJSLibraries : "Library 1, Library 2, Library 3"
			}
		]

		$scope.updateUser = [
			{
				imageURL : "",
				name : "",
				bio : "",
				favoriteBooks : "",
				favoriteJSLibraries : ""
			}
		]

		$scope.formSwitch = false
		$scope.editButtonLabel = "Show Edit Form"

		$scope.showEditForm = function() {
			if ($scope.formSwitch === false) {
				$scope.editButtonLabel = "Hide Edit Form"
			} else {
				$scope.editButtonLabel = "Show Edit Form"
			}
			$scope.formSwitch = !$scope.formSwitch
		}

		$scope.updateProfile = function() {
			$scope.user[0].imageURL = $scope.updateUser[0].imageURL
			$scope.user[0].name = $scope.updateUser[0].name
			$scope.user[0].bio = $scope.updateUser[0].bio
			$scope.user[0].favoriteBooks = $scope.updateUser[0].favoriteBooks
			$scope.user[0].favoriteJSLibraries = $scope.updateUser[0].favoriteJSLibraries

			$scope.updateUser = [
				{
					imageURL : "",
					name : "",
					bio : "",
					favoriteBooks : "",
					favoriteJSLibraries : ""
				}
			]
		}

	}])