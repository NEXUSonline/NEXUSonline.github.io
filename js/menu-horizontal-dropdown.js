var horizontalDropdownMenu = {
	"items": {
		"content": {
			"hover_in": {
				"animate": true,
				"duration": 200,
				"child:0": {
					"properties" : {
						"background-color": "rgba(0,0,0,0)", "border-color": "rgba(255,255,255,0.7)"
					}
				},
				"child:1": {
					"tag": "span",
					"properties" : {
						"color": "rgb(255,255,255)"
					}
				}
			},
			"hover_out": {
				"animate": true,
				"duration": 200,
				"child:0": {
					"properties" : {
						"background-color": "rgba(0,0,0,0)", "border-top-color": "rgba(0,0,0,0)", "border-right-color": "rgba(103,122,133,0.99)", "border-bottom-color": "rgba(0,0,0,0)", "border-left-color": "rgba(103,122,133,0.99)"
					}
				},
				"child:1": {
					"tag": "span",
					"properties" : {
						"color": "rgb(255,255,255)"
					}
				}
			}
		},
		"hover_in": {
			"content": {
				"event": "hover_in"
			},
			"submenu": {
				"event": "show",
				"delay": 0
			}
		},
		"hover_out": {
			"content": {
				"event": "hover_out",
				"delay": 0
			},
			"submenu": {
				"event": "hide"
			}
		}
	}
}

registerMenuClass('menu-horizontal-dropdown', horizontalDropdownMenu);