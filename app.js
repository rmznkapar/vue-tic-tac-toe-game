var note = new Vue({
	el: "#appBox",
	data:{
		now:1,
		board:{
			0:"",
			1:"",
			2:"",
			3:"",
			4:"",
			5:"",
			6:"",
			7:"",
			8:""
		},
		luckNumber:[
			[0, 1, 2],
		    [3, 4, 5],
		    [6, 7, 8],
		    [0, 3, 6],
		    [1, 4, 7],
		    [2, 5, 8],
		    [0, 4, 8],
		    [2, 4, 6]
		],
		isPlaying:true
	},
	methods:{
		boxClick(keyNum){
			if (this.board[keyNum] === "" && this.isPlaying) {
				if (this.now) {
					this.board[keyNum] = "X";
				} else {
					this.board[keyNum] = "O";
				}
				this.now = !this.now;
			}
			this.isWin();
		},
		isWin(){
			for (var i = 0; i < this.luckNumber.length; i++) {
				var [a,b,c] = this.luckNumber[i];
				if (this.board[a] === this.board[b] && this.board[b] === this.board[c] && !(this.board[a] === '')) {
					console.log("ms");
					this.win();
				}			
			}
		},
		win(){
			this.isPlaying = false;
		}
	}
})