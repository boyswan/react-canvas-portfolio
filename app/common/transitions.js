let transitions = {
	// Forcefeeding: property order = [after, before]

	'slide-forward': {
		duration: 100,
		enter: {
			translateX: [ '0%', '50%' ],
		},
		leave: {
			translateX: [ '-100%', '0%' ],
		},
		easing: {
			enter: 'easeInCubic',
			leave: 'easeOutCubic'
		}
	},
	'slide-back': {
		duration: 200,
		enter: {
			translateX: [ '0%', '-100%' ],
		},
		leave: {
			translateX: [ ['-85%', [0,100]], '0%' ],
		}
	},
	'slideover-forward': {
		duration: 500,
		enter: {
			translateX: [ '0%', '100%' ],
			zIndex: [ 1, 1 ]
		},
		leave: {
			// translateX: [ '0%', '0%' ],
			zIndex: [ 0, 0 ]
		}
	},
	'slideover-back': {
		duration: 200,
		enter: {
			// translateX: [ '0%', '0%' ],
			zIndex: [ 0, 0 ]
		},
		leave: {
			translateX: [ '100%', '0%' ],
			zIndex: [ 1, 1 ]
		}
	},
	default: {
		duration: 200,
		enter: {
			opacity: [ 1, 0 ],
		},
		leave: {
			opacity: [ 0, 1 ],
		}
	}
};

export default transitions;