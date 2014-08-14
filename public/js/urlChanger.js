var urlChanger = (function(){
	//itens que têm o atributo data-url
	var items = document.querySelectorAll( '[data-url]' );

	//distância do topo onde o container 'bate' para trocar a url
	var hitPoint = 150;

	// item atual, inicia no primeiro
	var selectedIdx = 0;

	var scrollTop = window.scrollY;

	// altura do viewport
	var viewHeight = Math.max( document.documentElement.clientHeight, window.innerHeight || 0 );

	// Lógica para saber quando e para qual url deve mudar
	var chooseUrl = function( e ){
		if ( getScrollDirection() == 'down' ) {
			if ( selectedIdx < items.length - 1 ) {
				var nextItemIdx = selectedIdx + 1;

				if ( items[ nextItemIdx ].getBoundingClientRect().top < hitPoint ) {
					changeUrl( nextItemIdx );
				}
			}
		} else {
			if ( selectedIdx > 0 ) {
				var nextItemIdx = selectedIdx - 1;

				if ( items[ nextItemIdx ].getBoundingClientRect().bottom > hitPoint ) {
					changeUrl( nextItemIdx );
				}
			}
		}

	}

	// retorna a direção do scroll para saber qual o lado que atingira a área de impácto
	var getScrollDirection = function(){
		var direction = window.scrollY > scrollTop ? 'down' : 'up';
		scrollTop = window.scrollY;
		return direction;
	}

	// Muda a url baseada no attributo data-url do elemento passado por parâmetro
	var changeUrl = function( index ){
		var selected = items[ index ];
		selectedIdx = index;
		window.history.pushState( selected.innerText, selected.innerText, selected.dataset.url );
	}

	//só para facilitar a depuração da lógica desta bagaça
	var debug = function(){
		var hpDiv = document.createElement( 'div' );

		hpDiv.setAttribute( 'style', 'background-color: red; width: 100%; height: 1px; position: fixed; top: '+hitPoint + 'px;');

		document.body.appendChild( hpDiv );

		for (var i = items.length - 1; i >= 0; i--) {
			items[i].style.border = 'blue 1px solid';
		};

	}

	return {
		init: function( dbg ){
			if ( dbg ) debug();
			changeUrl( selectedIdx );
			window.addEventListener( 'scroll', chooseUrl );
		}
	}
})();

urlChanger.init();