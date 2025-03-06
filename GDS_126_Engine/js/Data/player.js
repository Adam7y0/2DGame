/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/NinjaSpritesW.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:102, height:162, startX:0, startY:0},
				{width:102, height:162, startX:106, startY:0}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:96, height:162, startX:841, startY:0},
				{width:90, height:162, startX:936, startY:0},
				{width:90, height:162, startX:1028, startY:0},
				{width:85, height:162, startX:1127, startY:0},
				{width:104, height:162, startX:1212, startY:4}
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:106, height:162, startX:734, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:78, height:162, startX:655, startY:0},
				{width:78, height:162, startX:655, startY:0},
				{width:78, height:162, startX:655, startY:0},
				{width:78, height:162, startX:655, startY:0},
				{width:78, height:162, startX:655, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:86, height:162, startX:212, startY:0},
				{width:125, height:162, startX:296, startY:0},
				{width:117, height:162, startX:426, startY:0},
				{width:111, height:162, startX:543, startY:0},
				{width:111, height:162, startX:543, startY:0},
				{width:86, height:162, startX:212, startY:0},
				//Extra animations {width:128, height:162, startX:534, startY:0}
				
			]
		},
		Projectile:
		{
			fps:3,
			cycle:true,
			//width:300,
			frames:
			[
				{width:40, height:40, startX:1390, startY:70},
				{width:40, height:40, startX:1330, startY:70},
				//Extra animations {width:128, height:162, startX:534, startY:0}
				
			]
		}
	}
		
}