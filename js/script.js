document.addEventListener(
	"DOMContentLoaded", () => {
		const menu = new Mmenu( "#my-menu",  {
               "extensions": [
                  "theme-dark",
                  "border-full",
                  "fx-menu-slide",
                  "fx-panels-slide-100",
                  "pagedim-black",
                  "position-back",
                  "position-right"
               ],
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  }
               ],
               "searchfield": {
                  "panel": true,
                  "showTextItems": true
               }
            }, {
               "searchfield": {
                  "clear": true
               }
            });
		const api = menu.API;

		document.querySelector( "#menu-button" )
		.addEventListener(
			"click", ( evnt ) => {
				evnt.preventDefault();
				api.open();
			}
		);
	}
);
/*
$(document).ready(function () {
	
});*/