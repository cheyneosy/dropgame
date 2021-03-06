/**
 * The Drop class is a blueprint for each raindrop we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Drop(){
	this.x; //starts empty, will keep track of each drop's left-right position as a #
	this.y; //starts empty, will keep track of each drop's up-down position as a #
	this.width = 50;
	this.height = 50;
	this.item_on_page; //represents drop's physical presence on the screen
	/** 
	*	The create method does lots of things when a drop gets created on the page
	*/
	this.create = function(){
		//make a section tag in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//give it a class which styles it in CSS to resemble a drop
		this.item_on_page.className = "raindrop";
		//store a random x and y position, different for each drop. I'm using screen width or 500, height of 300:
		this.x = Math.floor(Math.random()*500);
		this.y = -50;
		//use those x and y coordinates in the CSS to position the drop:
		this.setpos();
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** 
	*   The destroy function does lots of cleaning up when a drop is removed from the page
	*/
	this.destroy = function(){
		//clear all splashing images first
		for (var j=0; j < document.getElementsByClassName("splash").length; j++){
			var thatsplash = document.getElementsByClassName("splash")[j];
			document.getElementsByTagName("body")[0].removeChild(thatsplash);
		}
		//create an image to hold splash animation
		var newsplash = document.createElement("img");
		//set its source and other styling
		
		newsplash.src = "img/splash-anim.gif?" + Math.random();
		newsplash.className = "splash";
		newsplash.style.position = "absolute";
		newsplash.style.left = this.x + "px";
		newsplash.style.top = this.y + "px";
		//attach the splashing image to our HTML hierarchy
		document.getElementsByTagName("body")[0].appendChild(newsplash);
		//remove this drop from the array. First, look up and store current the current drop's index number in the array
		var this_drops_index_num = dropArray.indexOf(this);
		//remove exactly one drop from the array, starting at the current drop's index number
		dropArray.splice(this_drops_index_num, 1);
		//remove it from the page
		document.getElementsByTagName("body")[0].removeChild(this.item_on_page);
	}
	
	/* The set position function takes the x, y properties stored with the object, and applies them to the CSS styling
	left & top properties. */

	this.setpos=function(){
		//apply the current x and y properties to the item's CSS to position the item:
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
	}

} //close the Drop class