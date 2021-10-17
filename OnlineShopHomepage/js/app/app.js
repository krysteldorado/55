
var app = angular.module("myModule", [])
			.controller("myController", function($scope){
				$scope.carts=[];

				$scope.products = [

					{p_id: "1", 
					p_name: "Lush Trench Coat with Faded Blue Skinny Pants and Tank White Top",
					p_image: "Store_Items/Item1.png",
				    p_price: 8000},

					{p_id: "2", 
					p_name: "Knitted Hand-Made Sweater and Hip-hugging Pants",
					p_image: "Store_Items/Item3.jpg",
				    p_price: 4599},



					{p_id: "3", 
					p_name: "White Shirt, Jeans, and Black Ankle Strap Heels",
					p_image: "Store_Items/Item2.jpg",
					 p_price: 5000},

					{p_id: "4",
					 p_name: "Checkered Patterned Suit, Cream Top & Black Pointed Heels",
					 p_image: "Store_Items/Item4.jpg",
					 p_price: 9000},

					{p_id: "5",
					 p_name: "KD's Gold Tumbled Leather Sneakers",
					 p_image: "Store_Items/Item5.jpg",
					 p_price: 9000},

					{p_id: "6",
				    p_name: "Patterned Running Shoes Air3000",
				    p_image: "Store_Items/Item6.jpg", 
					p_price: 9013},

					{p_id: "7",
					 p_name: "Airmax Fashion Sports Black Sneakers",
					 p_image: "Store_Items/Item7.jpeg",
					 p_price: 1999},

					{p_id: "8",
					 p_name: "Adidas Fashion Air Max Black Origina",
					 p_image: "Store_Items/Item8.jpg",
					 p_price: 3999},

					{p_id: "9", 
					p_name:"Black Waterproof LED Digital Watch Fashion Sports Relo",
					p_image: "Store_Items/Item9.jpg",
					 p_price: 2000},

					{p_id: "10",
					 p_name: "KD's Over-Ear Wireless Headphone",
					 p_image: "Store_Items/Item10.jpg",
					   p_price: 1499},

					{p_id: "11",
					 p_name: "Colorful LED Mechanical Keyboard",
					 p_image: "Store_Items/Item11.jpg",
				     p_price: 1788},

					{p_id: "12",
					 p_name: "Puma Painted LED Mechanical Mouse",
					 p_image: "Store_Items/Item12.jpg",
					 p_price: 1299}
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});