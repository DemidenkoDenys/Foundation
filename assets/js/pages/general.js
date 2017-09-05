import '../libs/foundation/entries/foundation';

export default {
	init() {
		this.accordion();
		this.dropdown();
		this.offCanvas();
	},
	accordion() {
		// settings
        	Foundation.Accordion.defaults.multiExpand = true;
        	Foundation.Accordion.defaults.allowAllClosed = true;

		// create accordion
		new Foundation.Accordion($('.accordion'));

		// events
        $('.accordion').on({
            'down.zf.accordion': (e) => {
                // console.log(e.target, 'opened');
            },
            'up.zf.accordion': (e) => {
                // console.log('closed');
            },
			'deeplink.zf.accordion': () => {
            	// console.log('deeplinked');
			}
        });
    },

	dropdown(){
        var $dropdown = new Foundation.Dropdown($('#example-dropdown'));
        var $dropdown1 = new Foundation.Dropdown($('#example-dropdown-1'), { hover: true, hoverDelay: 2000 });

        $('.show-dropdown').on('click', () => {
            $dropdown.toggle();
		});


        $('#example-dropdown').on({
            'closeme.zf.dropdown': (e) => {
				console.log(e.target, 'closeme.zf.dropdown');
			},
			'show.zf.dropdown': (e) => {
				console.log('show.zf.dropdown');
			},
			'hide.zf.dropdown': () => {
				console.log('hide.zf.dropdown');
			}
    	});
	},

	offCanvas(){
        var $offCanvas = new Foundation.OffCanvas($('#offCanvas'));

		$('.open-canvas').on('click', (e) => {
            $offCanvas.open();
		});
	},


};