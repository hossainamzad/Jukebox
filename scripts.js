
document.getElementById("play").addEventListener("click", function(){
	// document.getElementById("song").play();
	myJukebox.play();
});

document.getElementById("stop").addEventListener("click", function(){
	// document.getElementById("song").stop();
	myJukebox.stop();
});
document.getElementById("pause").addEventListener("click", function(){
	// document.getElementById("song").play();
	myJukebox.pause();
});
document.getElementById("next").addEventListener("click", function(){
	// document.getElementById("song").play();
	myJukebox.next();
});

document.getElementById("previous").addEventListener("click", function(){
	// document.getElementById("song").play();
	myJukebox.previous();
});

document.getElementById("shuffle").addEventListener("click", function(){
	// document.getElementById("song").play();
	myJukebox.shuffle();
});

// document.getElementById("load").addEventListener("click", function(){
// 	// document.getElementById("song").play();
// 	myJukebox.load();
// });





function Jukebox(){
	var x = document.getElementById("song");
	var i = 0;

	// this.el = document.getElementById("song")

	this.songs = []

	// this.preload = function(input){
	// 	this.songs.push(input)
	// }

	this.addSongs = function(input){
		this.songs.push(input)
	};

	this.listSongs = function(){
		for (var i = 0; i < this.songs.length; i++)
			console.log(this.songs);
		return this.songs;
	};

	this.setAttribute = function(){
		document.getElementById("song").setAttribute("src", this.songs[i].url)
	}

	this.play = function(){
		x.play();
	};
	this.stop = function(){
		x.load();
	}

	this.pause = function(){
		x.pause();
	}

	this.load = function(title, artist, url){
		console.log('helllllllo');
		var title = document.getElementById("title").value;
		var artist = document.getElementById("artist").value;
		var url = document.getElementById("url").value;

		var banana = new Song(title,artist,url)
		console.log(banana);
			this.songs.push(banana)
		console.log(myJukebox.songs);
	}

	this.next = function(){
		// document.getElementById("song")
		if(i == this.songs.length -1){
			i = 0
		} else {
			i+=1;
		}
		console.log(i)
		x.pause();
		this.setAttribute();
		x.play();
	}

	this.shuffle = function(){
		// if(i ==0){
		// 	this.songs.length-1
		// }
		// this.stop();
		var i =  Math.floor(Math.random() * this.songs.length);
		document.getElementById("song").setAttribute("src",this.songs[i].url);
		// this.setAttribute();
		x.play();
	}

	this.previous = function(){
		// 
		if (i == this.songs.length-1){
			i = 0
		}	else {
			i -= 1;
		}
			console.log(i)
			x.pause();
			this.setAttribute();
			x.play();
	}

};

function Song(title,artist,url){
	this.title = title,
	this.artist = artist,
	this.url = url
};

var myJukebox = new Jukebox();

var stSong = new Song("Dream on", "Steven Tylor", "Dream_On_by_Aerosmith.mp3")
var bwSong = new Song("Aint no sunshine", "Bil Withers", "Ain't_No_Sunshine_by_Bill_Withers.mp3")
var rtSong = new Song("Rabindra", "instrumental", "Amar_Paran_Jaha_Chaay.mp3")
var mmSong = new Song("Aint no mountain high", "Micheal McDonald", "Ain`t_no_mountain_high_enough_by_Michael McDonald.mp3")
var pocoSong = new Song("Heart of the night", "Poco", "HEART_OF_THE_NIGHT_by_POCO.mp3")
var mSong = new Song("Nothing else matters", "Metallica", "Nothing_Else_Matters_by_Metallica.mp3")



// myJukebox.preload(stSong)
// myJukebox.preload(bwSong)
// myJukebox.preload(rtSong)
// myJukebox.preload(mmSong)
// myJukebox.preload(pocoSong)
// myJukebox.preload(mSong)



myJukebox.addSongs(stSong);
myJukebox.addSongs(bwSong);
myJukebox.addSongs(rtSong);
myJukebox.addSongs(mmSong);
myJukebox.addSongs(pocoSong);
myJukebox.addSongs(mSong);

myJukebox.setAttribute()




// var songs =[new Audio("Amar_Paran_Jaha_Chaay.mp3"), new Audio("Ain't_No_Sunshine_by_Bill_Withers.mp3"), new Audio("Ain`t_no_mountain_high_enough_by_Michael McDonald.mp3"),new Audio("HEART_OF_THE_NIGHT_by_POCO.mp3"),new Audio("Dream_On_by_Aerosmith.mp3"),new Audio("Nothing_Else_Matters_by_Metallica.mp3")];






