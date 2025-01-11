vkBridge.send("VKWebAppInit", {});

/* YANDEX FUNCTIONS DONT NEED NOW
					function initPlayer() {
							    return ysdk.getPlayer().then(_player => {
							            player = _player;
							            return player;
							        });
							}


					function initLB() {
							return ysdk.getLeaderboards()
							  .then(_lb => lb = _lb);
					}
*/

					function getColor(ch){
						switch(ch){
					//	"""MORE FUCKING LEGACY"""


							case "A":
							case "А":
							case "а":
							case "a":
								document.getElementById('ask_value').style.color = "#ff3166";
								break;

							case "Б":
							case "б":
							case "B":
							case "b":
								document.getElementById('ask_value').style.color = "#3a8191";
								break;
							case "В":
							case "в":
							case "V":
							case "v":
								document.getElementById('ask_value').style.color = "#3a8191";
								break;
							case "Г":
							case "г":
							case "G":
							case "g":
								document.getElementById('ask_value').style.color = "#7f1988";
								break;
							case "Д":
							case "д":
							case "D":
							case "d":
								document.getElementById('ask_value').style.color = "#0a8a1a";
								break;
							case "Е":
							case "е":
							case "E":
							case "e":
							case "Э":
							case "э":
								document.getElementById('ask_value').style.color = "#10958b";
								break;
							case "ё":
							case "Ё":
								document.getElementById('ask_value').style.color = "#0a8a1a";
								break;	
							case "Ж":
							case "ж":
							case "J":
							case "j":
								document.getElementById('ask_value').style.color = "#6a229b";
								break;		
							case "З":
							case "з":
							case "Z":
							case "z":
							case "Y":
							case "y":
							case "X":
							case "X":
								document.getElementById('ask_value').style.color = "#1a497e";
								break;
							case "И":
							case "и":
							case "I":
							case "i":
							case "Я":
							case "я":
								document.getElementById('ask_value').style.color = "#5f7e7f";
								break;
							case "Й":
							case "й":
								document.getElementById('ask_value').style.color = "#acaa40";
								break;
							case "К":
							case "к":
							case "K":
							case "k":
								document.getElementById('ask_value').style.color = "#d2ce04";
								break;	
							case "Л":
							case "л":
							case "L":
							case "l":
								document.getElementById('ask_value').style.color = "#49afb6";
								break;		
							case "М":
							case "м":
							case "M":
							case "m":
								document.getElementById('ask_value').style.color = "#9f232a";
								break;		
							case "Н":
							case "н":
							case "N":
							case "n":
								document.getElementById('ask_value').style.color = "#eeb30b";
								break;	
							case "О":
							case "о":
							case "O":
							case "o":
								document.getElementById('ask_value').style.color = "#055aa9";
								break;	
							case "П":
							case "п":
							case "P":
							case "p":
								document.getElementById('ask_value').style.color = "#b9239c";
								break;	
							case "Р":
							case "р":
							case "R":
							case "r":
								document.getElementById('ask_value').style.color = "#790101";
								break;	
							case "С":
							case "с":
							case "S":
							case "s":
								document.getElementById('ask_value').style.color = "#6b9c01";
								break;	
							case "Т":
							case "т":
							case "T":
							case "t":
								document.getElementById('ask_value').style.color = "#3f3f3c";
								break;	
							case "У":
							case "у":
							case "U":
							case "u":
							case "Ю":
							case "ю":
								document.getElementById('ask_value').style.color = "#00d106";
								break;		
							case "Ф":
							case "ф":
							case "F":
							case "f":
								document.getElementById('ask_value').style.color = "#484d54";
								break;		
							case "Х":
							case "х":
							case "H":
							case "h":
								document.getElementById('ask_value').style.color = "#8a9b79";
								break;			
							case "Ц":
							case "ц":
							case "C":
							case "c":
								document.getElementById('ask_value').style.color = "#ead121";
								break;			
							case "Ч":
							case "ч":
								document.getElementById('ask_value').style.color = "#15a089";
								break;	
							case "Ш":
							case "ш":
								document.getElementById('ask_value').style.color = "#ead121";
								break;	
							case "Щ":
							case "щ":
							case "Q":
							case "q":
								document.getElementById('ask_value').style.color = "#c5c96b";
								break;	
							case "Ъ":
							case "ъ":
								document.getElementById('ask_value').style.color = "#aaaf4c";
								break;
							case "Ь":
							case "ь":
								document.getElementById('ask_value').style.color = "#b01aaa";
								break;		
							case "Ы":
							case "ы":
							case "W":
							case "w":
								document.getElementById('ask_value').style.color = "#421152";
								break;		
		

															
							default:
								
								document.getElementById('ask_value').style.color = "#15a089";
								break;

						}
					}

					function initSound(letter){

						createjs.Sound.registerSound(`./audio_ru/${letter}.mp3`,'letterSound',4)
						console.log(`./audio_ru/${letter}.mp3`)
						//createjs.Sound.play('letterSound')
					}






				    

				    //let ysdk;

					var letterSound = "Thunder";
					
					document.getElementById("ask_value").onclick = function () {
						createjs.Sound.play('letterSound')
						
					}

					document.getElementById("ask_value").style.cursor = 'pointer'

					document.getElementById("sound").onclick = () => {
						document.getElementById('sound').innerText = "🔊"
						createjs.Sound.play('letterSound')
					}



					function initGame(params) {
							  YaGames
							  .init(params)
							  .then(_sdk => {
							    ysdk = _sdk;
							    	//player = initPlayer()
							    	
							    	//const ₽ = "" 

							    	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
							  		

							  		document.getElementById('sound').innerText = "🔊"

									

									let buttons = document.getElementsByClassName("button");
									let cryllic = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяабвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890";
									const latin = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
									let alphabet = [cryllic,latin]
									const level = [1.5]

									const apporved = ["❎","✅","👍","😻"];
									const eject = ["🤔","❌","😲","😱"];
									const font_style  = ["ABC","kablammo", "blup", "yunga", "iamblock","UNOVIS100"]


									const locale_state = ["🇷🇺 ","🇬🇧"];
									const text_score = ["Счёт: ","Count: "]
									const text_best_score = ["Рекорд: ","Record: "]



									let rw_lamp = document.getElementById("rw_lamp");

									function hide_this(element){
										element.style.display = "none";
									}

									function show_this(element){
										element.style.display = "flex";
									}
									function show_adv (){
										
									
									


										document.getElementById("adv_block_flex").style.display = "flex";								
										setTimeout(function(){
											document.getElementById("adv_block").innerText = adv_text + "3";
										},1)
										setTimeout(function(){
											document.getElementById("adv_block").innerText = adv_text + "2";
										},1000)
										setTimeout(function(){
											document.getElementById("adv_block").innerText = adv_text + "1";
										},2000)
										setTimeout(function(){
											document.getElementById("adv_block").innerText = adv_text + "0";
											ysdk.adv.showFullscreenAdv({
																    callbacks: {
																    	onOpen: () => {

																    		
			

																    	},
																        onClose: () => {

																			 console.log('ad closed.');
																          // some action after close
																        },
																        onError: function(error) {
																          // some action on error
																        }
																    }
																})
										},3000)
										setTimeout(function(){
												document.getElementById("adv_block").innerText = ""
												document.getElementById("adv_block_flex").style.display = "none";

											}, 4000

											)
									

							
						}












									
									
									 




									let locale_btn = document.getElementById("locale");
									let reward_btn = document.getElementById("skip_rewarded");
									let cancel_btn = document.getElementById("cancel_btn");




							
									
									
											
											
								


							  		//ysdk.adv.showFullscreenAdv({callbacks:{}})

							  		function show_load_screen(time){
							  			document.getElementById('LOL').style.display = 'flex';
							  			setTimeout(function(){document.getElementById('LOL').style.display = 'none';},time);

							  		}


							  		show_load_screen(5000)
									
									let count = localStorage.count;

									if (count === undefined || isNaN(score)){
										count = 0;
									}

									let best_score = localStorage.best_score;
									
									if (best_score === undefined || isNaN(best_score) ){
										best_score = 0;
									}
							    	/*ysdk.getLeaderboards().then(lb => {
							    		lb.setLeaderboardScore('lb', count);
							    	});*/

									let count_view = document.getElementById("count");

									count_view.animate(
														  [
														    // keyframes
														    { transform: "rotate(-0.03turn)" },
														    { transform: "rotate(+0.03turn)" },
														    { transform: "rotate(-0.03turn)" },
														  ],
														  {
														    // timing options
														    duration: 800,
														    iterations: Infinity,
														  }
														);








									//let btns = document.querySelectorAll('button');
									


									let locale_bool = Boolean(Number(localStorage.locale_bool));//JS IS AWESOME
									//console.log(typeof localStorage.locale_bool)
									if(localStorage.locale_bool === undefined){
										locale_bool = false;
									}
									
									getLocale()


							  		random_ch = next_ch();
							  		ads();


							  		function ads() {

							  			/*

												GOVNOKOD

							  			*/



							  			
							  		}

							  		function switch_locale(){
							  			switch(locale_bool){
							  				case true:
							  					
							  					setStyle()
							  					locale_bool = false;
							  					localStorage.locale_bool = 1;
							  					cryllic = alphabet[0];
							  					//REFACTOR THIS
							  					for (var i = buttons.length - 1; i >= 0; i--) {
							  						buttons[i].style.backgroundColor = "#fff";
							  						buttons[i].disabled = false;
							  					}
							  					reward_btn.innerText = "Продолжить с рекламой ▶";
							  					cancel_btn.innerText = "Начать заново";
							  					adv_text = "Реклама покажется через "
							  					document.getElementById("score").innerText = text_score[0]  + count
							  					document.getElementById("best_score").innerText = text_best_score[0] + best_score
							  					//REFACTOR THIS
							  					
							  					break;
							  				case false:
							  					
							  					document.getElementById("score").innerText = text_score[1] + " " + count
							  					document.getElementById("best_score").innerText = text_best_score[1] + best_score
							  					adv_text = "Ads will show "

							  					locale_bool = true;
							  					localStorage.locale_bool = 0;
							  					setStyle()
							  					//REFACTOR THIS
							  					for (var i = buttons.length - 1; i >= 0; i--) {
							  						buttons[i].style.backgroundColor = "#fff";
							  						buttons[i].disabled = false;
							  					}
							  					//REFACTOR THIS
							  					cryllic = alphabet[1];
							  					reward_btn.innerText = "Continue with ad ▶";
							  					cancel_btn.innerText = "Back to start";
							  					break;
							  				default:
							  					console.log(locale_bool)
							  					locale_bool = true;
							  					localStorage.locale_bool = 0;
							  					getLocale()
							  					
							  				}
							  			return locale_bool, cryllic;
							  			  			
							  		}


							  		function setAskStyle(font){
							  			document.getElementById("ask_value").style.fontFamily = font;
							  		}



							  		function getLocale(){
							  				switch_locale()

										 	
											locale_btn.innerText = locale_state[Number(locale_bool)];
							  				random_ch = next_ch();		  					


										 

							  		}




							  		locale_btn.addEventListener("onclick", () => {
										})



							  		locale_btn.onclick = function (){getLocale();}









							  		function setStyle(){
							  			if (count<= 30){

							  				if (locale_bool== true){
							  					setAskStyle(font_style[0]);
							  				}else{
							  					setAskStyle(font_style[1]);
							  				}

											document.getElementById("ask_value").style.background = "#fff";
							  			}else if(count > 30 && count <= 60){
							  				
											document.getElementById("ask_value").style.background = "#b5d6b2";
							  				setAskStyle(font_style[1]);
							  			}else if(count > 60 && count <= 75){
							  				
											document.getElementById("ask_value").style.background = "#ebeba7";
							  				setAskStyle(font_style[2]);

							  			}else if(count > 75 && count <= 100){
							  				
											document.getElementById("ask_value").style.background = "#ed8166";
							  				setAskStyle(font_style[3]);

							  			}else if(count >= 100 && locale_bool === true && count < 125){
							  				
							  				setAskStyle(font_style[4]);
											document.getElementById("ask_value").style.background = "#d6c7f8";


							  			}else if (count >= 125 && count < 150){
							  				
							  				setAskStyle(font_style[5]);
											document.getElementById("ask_value").style.background = "#d6c7f8";

							  			}else{
							  				let rand_style = getRandomInt(font_style.length - 1)
							  			
							  				if (locale_bool === true) {

											  				setAskStyle( font_style[rand_style]);
															document.getElementById("ask_value").style.background = "#C0C0C0";
														}else if(rand_style !== 0 && rand_style !== 4){
											  				setAskStyle( font_style[rand_style]);
															document.getElementById("ask_value").style.background = "#C0C0C0";

														}else{
											  				setAskStyle( font_style[3]);

														}

							  			}

							  		}






									




									function getRandomInt(max) {
							  			return Math.floor(Math.random() * max);
							  		}




							  		function match_ch(ch,btn){
										//let answer_value = document.getElementById("answer").value;
										let answer_value = ch;
										setStyle()
										document.getElementById("ask_value").style.color = "#df2e08";
	

							  			if (random_ch.toLowerCase() === answer_value.toLowerCase()) {
							  				count++;
							  				localStorage.count = count;

							  				count_view.animate(
												[
													{transform: "translateY(0px)"},
													{transform: "translateY(-10vh)"},
													{transform: "transform: scale(2, 0.8);"},

													],
												{
													duration: 1000,
												}

										);
							  				
							  				
											 
											//document.getElementById('ask_value').style.background = "#32CD32";
											btn.style.backgroundColor = "#32CD32"; 
											setTimeout(function(){
												//document.getElementById('ask_value').style.background = "rgb(118, 111, 111)";
												btn.style.backgroundColor = "#FFF"; 
												
							  											;}, 100)
														
							  				
							  				//ads()
							  				setTimeout(function(){
								  				for (var i = buttons.length - 1; i >= 0; i--) {
								  					buttons[i].style.backgroundColor = "#fff";
								  				}
							  				},300)


							  				

//let lb;				
/*yandex functions dont need now
							  				if (count % 10 === 0) {
									  				ysdk.isAvailableMethod('leaderboards.getLeaderboardPlayerEntry')
									  					.then(auth =>{
									  						
									  						if(auth){
																ysdk.getLeaderboards()
																			  .then(lb => {

																			  
																			  	lb.getLeaderboardPlayerEntry('lb').then(a => {
																			  		if (parseInt(a.score) < count){ 
																			  			lb.setLeaderboardScore('lb', count);
																			  		}

																			  } ).catch(err => {
																					    if (err.code === 'LEADERBOARD_PLAYER_NOT_PRESENT') {
																			  					
																				    			 lb.setLeaderboardScore('lb', count);
																					      // Срабатывает, если у игрока нет записи в лидерборде
																					    }
																		  
														});;
													
																			  });
																		}
									  					})
																			  	
															}	
																
*/


											

							  		
							  			
							  				random_ch = next_ch()
							  				return random_ch;
							  			}else{
							  				
							  				temp_count = count;
							  				count = 0;
							  				localStorage.count = 0;
							  				
							  				
											btn.style.backgroundColor="#f44336";
											setTimeout(function(){
												btn.style.backgroundColor = "#FFF"; 
													
								  											;}, 100)

													
											
												setTimeout(function(){
													//reward_btn.style.backgroundColor = "#555555"; 
														
									  											;}, 100)
												
											
							  				//reward_btn.style.display = "flex";
							  				cancel_btn.style.display = "flex";

							  				 
											for (const j in buttons){
												
												buttons[j].disabled = true;
											};

/* YANDEX FUNCTIONS DONT NEED NOW
											reward_btn.onclick = function(){
														ysdk.adv.showRewardedVideo({
														    callbacks: {
														        onOpen: () => {
														          console.log('Video ad open.');
														        },
														        onRewarded: () => {
														        	for (const j in buttons){
																		buttons[j].disabled = false;
																	}

																	cancel_btn.style.display = "none"; 
																	reward_btn.style.display = "none";
																	localStorage.count = temp_count;
																	count = temp_count;
														          console.log('Rewarded!');
														        },
														        onClose: () => {
														          console.log('Video ad closed.');
														        }, 
														        onError: (e) => {
														          console.log('Error while open video ad:', e);

														        }
														    }
														})												
											}

*/

											cancel_btn.onclick = function cancel(){
												count = 0;
							  					
							  					for (const j in buttons){
													buttons[j].disabled = false;
												}
												cancel_btn.style.display = "none"; 
												reward_btn.style.display = "none";

												random_ch = next_ch()
											}
											


							  				
							  				localStorage.count = count
																	
							  				count_view.innerText = eject[getRandomInt(eject.length-1)]
							  			
							  			}

							  		}

							  		function next_ch(){
							  			if (best_score <= count){
							  				localStorage.best_score = count
							  				best_score = count
							  			}


							  			document.getElementById('score').innerText = text_score[Number(locale_bool)] + count
							  			document.getElementById('best_score').innerText = text_best_score[Number(locale_bool)] + best_score

							  			setStyle()

							  			reward_btn.style.display = "none";
										cancel_btn.style.display = "none"; 

										let random_ch = cryllic[getRandomInt(32)];
							  			getColor(random_ch)

							  			initSound(random_ch)
										let ask_value = document.getElementById("ask_value");
										document.getElementById("ask_value").innerText = random_ch;
										if (count == 0 || count == NaN  || count == undefined) {		
											count_view.innerText = apporved[0];
										}else if(count > 0 && count < 10){
											count_view.innerText = apporved[1];
										}else if(count >= 10 && count < 20 ){
											count_view.innerText = apporved[2];
										}else if(count == 20){
											count_view.innerText = apporved[3];
										}else if(count % 10 == 0){
											

											count_view.innerText = text_score[Number(locale_bool)]+ ": " + count + " " + apporved[2];
										}
										else{
											count_view.innerText = apporved[getRandomInt(3)+1];
											
											//clearInterval(shit)
											
											
											
										}


						


									

										let answer_rand =  getRandomInt(buttons.length);
										console.log(answer_rand)
										


										buttons[answer_rand].textContent = random_ch;
										let arr = [random_ch];


					//
					//REFACTORING THIS
					//
										while(arr.length < 3){
											let char = cryllic[getRandomInt(32)];

											if(char !== random_ch){
												if (arr.length < 2) {
													arr.push(char);
													
												}else if(arr.length == 2){
													if(char !== arr[1]){
														arr.push(char);

													}
												}

											}
											
										}





										arr.shift();
								

					//
					//REFACTORING THIS
					//
										for (let i = 0 ;i <= buttons.length-1;i++){
										
											if (i !== answer_rand) {							


												buttons[i].textContent = arr[0];
												arr.shift();
												
											

											}
											buttons[i].onclick = function (){match_ch(buttons[i].textContent,buttons[i])};

										}







										
										return random_ch; 



							  		}

							  	setTimeout(
							  		function ()
							  		{
							    		ysdk.features.LoadingAPI?.ready(); // Показываем SDK, что игра загрузилась и можно начинать играть

							  		}, 5000

							  				)

							  })
							  .catch(console.error);
							}

							


					

							



/*
https://www.gnu.org/licenses/agpl-3.0.en.html
*/		

				initGame()