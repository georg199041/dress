exports.index = function(req, res){  
	res.render('index', { 
		title: 'Dress интернет магазин',
		mainMenu: [{
			link: 'woman', name: 'женщина'
		},{
			link: 'underwear', name: 'нижнее белье'
		},{
			link: 'man', name: 'мужчина'
		},{
			link: 'kid', name: 'ребенок'
		},{
			link: 'shoes', name: 'обувь и аксессуары'
		},{
			link: 'home', name: 'дом'
		},{
			link: 'sale', name: 'sale'
		}],
		headerMenu: [{
			link: 'service', name: 'Сервис',
		},{
			link: 'order_blank', name: 'Бланк заказа',
		},{
			link: 'Sending', name: 'Рассылка',
		},{
			link: 'my_profile', name: 'Мой профиль/Мои желания ',
		}],
		pickUp: {
			title: 'Подбери что-нибудь для себя:',
			list: [{
				img: 'images/1.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'	
			},{
				img: 'images/2.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/3.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/4.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/5.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/5.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},]
		},

	});
};
exports.categoryList = function(req, res){  
	res.render('category/index', { 
		title: 'category',
		list: [{
				img: 'images/1.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'	
			},{
				img: 'images/2.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/3.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/4.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/5.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},{
				img: 'images/5.jpg',
				title: 'Платье',
				desc: 'bpc bonprix collection',
				price: '139 грн',
				id: 1,
				category: 'dresses'		
			},]
	});
};	
exports.categoryItem = function(req, res){  
	res.render('category-item/index', { 
		title: 'category-item',
		id: req.params.id
	});
};
exports.unAvailable = function(req, res){  
	res.render('404', { 
		title: 'This page is temporary unavailable',
		img: 'images/404.jpg'
	});
};