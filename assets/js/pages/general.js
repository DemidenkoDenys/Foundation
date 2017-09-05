// import '../libs/foundation/entries/foundation';
import 'foundation-sites/dist/js/foundation';

export default {
	init() {

		$(document).foundation();

        this.offCanvas();

		// this.accordion();
		// this.dropdown();
		// this.reveal();
		// this.tooltips();
		// this.equalizer();
		// this.interchange();

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

		let dropdowns = {};

        $('.dropdown-pane').each((i, e) => {
        	let id = $(e).attr('id');
            dropdowns[`${id}`] = new Foundation.Dropdown($(e));
		});

        $('.show-dropdown').on('click', (e) => {
        	let id = $(e.target).attr('data-toggle');
            	dropdowns[`${id}`].toggle();
		});

        $('.dropdown-pane').on({
            'closeme.zf.dropdown': (e) => {
				// console.log(e.target, 'closeme.zf.dropdown');
			},
			'show.zf.dropdown': (e) => {
				// console.log('show.zf.dropdown');
			},
			'hide.zf.dropdown': () => {
				// console.log('hide.zf.dropdown');
			}
    	});
	},

	offCanvas(){
        var $offCanvas = new Foundation.OffCanvas($('#offCanvas'));

		$('.open-canvas').on('click', (e) => {
            $offCanvas.open();
		});

		$('.close-off-canvas').on('click', () => {
            $offCanvas.close();
		});
	},

	reveal(){
        var $reveal = new Foundation.Reveal($('#modal'));

        $('.show-modal').on('click', () => {
            $reveal.open();
		});

        $('.close-modal').on('click', () => {
            $reveal.close();
		});
	},

	tooltips(){
		$('.has-tip').each((i, e) => {
            let tooltip = new Foundation.Tooltip($(e));

            $(e).on('click', () => {
                tooltip.show();
                setTimeout(() => {
                    tooltip.hide();
				}, 3000);
			});
		});
	},

    equalizer(){
        new Foundation.Equalizer($('#test-eq'));
	},

	interchange(){
        let interchange = new Foundation.Interchange($('#interchange'));

        $(document).on('replace', 'img', function (e, new_path, original_path) {
            $(window).trigger('resize');
        });
	},


};