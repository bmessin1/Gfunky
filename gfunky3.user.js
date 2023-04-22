// ==UserScript==
// @name gfunky3
// @namespace www.tampermonkey.com
// @version 3.2.1.4.21
// @description gfunky3
// @author Greety
// @match https://*.crownofthegods.com/*
// @include https://*.crownofthegods.com/?s=*
// @grant none
// @updateURL https://raw.githubusercontent.com/bmessin1/Gfunky/master/gfunky3.user.js
// @downloadURL https://raw.githubusercontent.com/bmessin1/Gfunky/master/gfunky3.user.js
// ==/UserScript==
/*

Version:  3.2.1.4.21
Last Modified:  April 21,2023


 */
(function() {





  $(() => {
	const startupWindowContent = `
	  <div id='startwinDiv' class='popUpBox ui-draggable'>
		<div class='ppbwinbgr ui-draggable'>
		  <div class='ppbwintop ui-draggable'></div>
		  <div class='ppbwincent ui-draggable'></div>
		  <div class='ppbwinbott ui-draggable'></div>
		</div>
		<div class='ppbwincontent ui-draggable'>
		  <div class='popUpBar ui-draggable-handle'>
			<span class='smppspan'>Gfunky+ By Fact and Greety </span>
			<button id='gfunkyX' class='xbutton' onclick=$('#startwinDiv').remove()>
			  <div id='xbuttondiv'>
				<div>
				  <div id='centxbuttondiv'></div>
				</div>
			  </div>
			</button>
		  </div>
		  <div id='announcWindow' style='overflow-y:auto;'>
			<div style='text-align:center;'>
			  <span style='margin-left: 5%;'>
				<h1 style='text-align:center;'>
				  <img src='https://cotgopt.com/images/icons/Gfunkylogo21a.png'>
				  <br> By Fact and Greety
				</h1>
			  </span>
			  <br>
			  <div id='bottomcrownpic'></div>
			  <span style='margin-left: 5%;'>
				<h4 style='text-align:center;color:green;'>Update 3.2.1</h4>
				<br>
				<h4 style='text-align:center;color:green;'>Apr 21, 2023</h4>
			  </span>
			  <br>
			  <br>
			  <span style='margin-left: 5%;'>
				<h5 style='text-align:center;'>Special Thanks to Everyone who continues to support this project </h5>
				<ul style='margin-left: 6%;font-size:14px !important;'></ul>
			  </span>
			</div>
		  </div>
		</div>
	  </div>
	`;
	$('body').append(startupWindowContent);
	setTimeout(function() {
			var options = {};
			$('#startwinDiv').hide(500);
		}, 5000);
	const popupBox = $('#startwinDiv');
	popupBox.css('top', '50%');
	popupBox.css('left', '50%');
	popupBox.css('transform', 'translate(-50%, -50%)');
  });





	// added styles for our Popup  we can probably remove these now that the changelog is seperate
	$("<style>").prop("type", "text/css").html(".gfadded {color : blue}").appendTo("head");
	$("<style>").prop("type", "text/css").html(".gffixed {color : lime}").appendTo("head");
	$("<style>").prop("type", "text/css").html(".gfremoved {color : red ; font-weight: 700}").appendTo("head");
	$("<style>").prop("type", "text/css").html(".gfupdated {color : yellow}").appendTo("head");


	//Changing "edit" to City Manager Button, and makes it appear like a button
	$('#editspncn').css({
		"color": "#cebca0",
		"float": "none",
		"padding": "9px",
		"border-radius": "10px"
	});
	$('#editspncn').text("City Manager");
	$('#editspncn').addClass("greenb");

	//editing the text size and name of the name and remark area on the left nav pane to accomodate the refreshed look button and coordinates
	$('#citnamqcont').css("margin-left", "10px");
	$('#citremspq').css("font-size", "10px");
	$('#topIRsecd1').removeAttr('style');
	$('#citnamspq').css("font-size", "10px");
	$('#rqitemss').appendTo('#recruitmentQueueWindow');
	$('#bqitemss').appendTo('#buildQueueWindow');
	$('#tbnwbbtbl').appendTo('#resInfo');

	/*


	END POPUP MESSAGE and header changes


	START OF QUICKBUILD SCRIPT


	*/



	(function QuickBuild0Script() {
		const QB_DIV = "qbDiv";
		const BUTTON_CITY_INFO_SELECTOR = `#${QB_DIV}>div:nth-child(2)>button`;
		const SELECT_CITY_MOVE_ID = "qbCityMove";
		const SELECT_CITY_ADD_ID = "qbCityAdd";
		const CSS_FIRST_BUTTON = "width:24%;font-size:10px !important;";
		const CSS_NEXT_BUTTON = "width:24%;font-size:10px !important;";
		const CLASS_AND_CSS_FIRST_BUTTON = `style="${CSS_FIRST_BUTTON}" class="regButton greenb"`;
		const CLASS_AND_CSS_NEXT_BUTTON = `style="${CSS_NEXT_BUTTON}" class="regButton greenb"`;

		const QB = {
			_version: "3.2.0"
		};



		// Facility to have building informations
		QB.BUILDINGS = function() {

			// Inner data to characterise buildings
			QB._DETAILS = {



				// Resources getters
				foresters_hut: {
					id: [448],
					buildable: true,
					schedule: "2",
					shortcut: "f",
					movable: true
				},
				stone_mine: {
					id: [461],
					buildable: true,
					schedule: "3",
					shortcut: "s",
					movable: true
				},
				farm_estate: {
					id: [447],
					buildable: true,
					schedule: "1",
					shortcut: "a",
					movable: true
				},
				iron_mine: {
					id: [465],
					buildable: true,
					schedule: "4",
					shortcut: "i",
					movable: true
				},

				// Resources helpers
				sawmill: {
					id: [460],
					buildable: true,
					schedule: "L",
					shortcut: "l",
					movable: true
				},
				masons_hut: {
					id: [462],
					buildable: true,
					schedule: "A",
					shortcut: "h",
					movable: true
				},
				grain_mill: {
					id: [463],
					buildable: true,
					schedule: "M",
					shortcut: "g",
					movable: true
				},
				smelter: {
					id: [477],
					buildable: true,
					schedule: "D",
					shortcut: "z",
					movable: true
				},

				// Others
				storehouse: {
					id: [464],
					buildable: true,
					schedule: "S",
					shortcut: "r",
					movable: true
				},
				cabin: {
					id: [446],
					buildable: true,
					schedule: "C",
					shortcut: "c",
					movable: true
				},
				hideaway: {
					id: [479],
					buildable: true,
					schedule: "H",
					shortcut: "q",
					movable: true
				},
				villa: {
					id: [481],
					buildable: true,
					schedule: "U",
					shortcut: "v",
					movable: true
				},

				//DO Not build
				basilica: {
					id: [455],
					buildable: false,
					schedule: "T"
				},
				castle: {
					id: [467],
					buildable: false,
					schedule: "X",
					movable: true
				},
				temple: {
					id: [1000],
					buildable: false
				},

				// Trade
				port: {
					id: [488, 489, 490],
					buildable: true,
					schedule: "R",
					shortcut: "o",
					movable: true
				},
				forum: {
					id: [449],
					buildable: true,
					schedule: "P",
					shortcut: "m",
					movable: true
				},

				// Military
				guardhouse: {
					id: [504],
					buildable: true,
					schedule: "K",
					shortcut: "u",
					movable: true
				},
				barracks: {
					id: [445],
					buildable: true,
					schedule: "B",
					shortcut: "b",
					movable: true
				},
				training_arena: {
					id: [483],
					buildable: true,
					schedule: "G",
					shortcut: "t",
					movable: true
				},
				stable: {
					id: [466],
					buildable: true,
					schedule: "E",
					shortcut: "e",
					movable: true
				},
				sorcerers_tower: {
					id: [500],
					buildable: true,
					schedule: "J",
					shortcut: "w",
					movable: true
				},
				academy: {
					id: [482],
					buildable: true,
					schedule: "Z",
					shortcut: "y",
					movable: true
				},
				blacksmith: {
					id: [502],
					buildable: true,
					schedule: "Y",
					shortcut: "k",
					movable: true
				},
				shipyard: {
					id: [491, 496, 498],
					buildable: true,
					schedule: "V",
					shortcut: "p",
					movable: true
				},

				// Resources
				forest: {
					id: [454],
					buildable: false,
					schedule: "."
				},
				stone: {
					id: [451],
					buildable: false,
					schedule: ":"
				},
				iron: {
					id: [452],
					buildable: false,
					schedule: ","
				},
				lake: {
					id: [453],
					buildable: false,
					schedule: ";"
				},


				wall: {
					id: [809],
					buildable: true,
					moveable: false
				},
				sentinel_post: {
					id: [547, 548, 549, 550],
					buildable: true,
					shortcut: "1",
					//movable: true
				},
				ranger_post: {
					id: [543, 544, 545, 546],
					buildable: true,
					shortcut: "2",
					//movable: true
				},
				snag_barricade: {
					id: [567, 568, 569, 570],
					buildable: true,
					shortcut: "6",
					//movable: true
				},
				triari_post: {
					id: [539, 540, 541, 542],
					buildable: true,
					shortcut: "3",
					//movable: true
				},
				equine_barricade: {
					id: [559, 560, 561, 562],
					buildable: true,
					shortcut: "7",
					//movable: true
				},
				priestess_post: {
					id: [551, 552, 553, 554],
					buildable: true,
					shortcut: "4",
					//movable: true
				},
				rune_barricade: {
					id: [563, 564, 565, 567],
					buildable: true,
					shortcut: "8",
					//movable: true
				},
				ballista_post: {
					id: [555, 556, 557, 558],
					buildable: true,
					shortcut: "5",
					//movable: true
				},
				veiled_barricade: {
					id: [571, 572, 573, 574],
					buildable: true,
					shortcut: "9",
					//movable: true
				},

			};

			// Same as _DETAILS but in a list.
			QB._LIST = [];


			// Hash buildings from city planner letter.
			QB._FromMapLetter = {};

			Object.keys(QB._DETAILS).forEach(function(key) {
				QB._DETAILS[key].name = key;
				QB._LIST.push(QB._DETAILS[key]);
				if (QB._DETAILS[key].schedule) {
					QB._FromMapLetter[QB._DETAILS[key].schedule] = QB._DETAILS[key];
				}
			});




			// Is a building type buildable. For information, due to dangerousness of building castles, the operation has to be manual.
			QB.isBuildable = function(btype) {
				return QB._LIST.filter(function(item) {
					return (item.id.indexOf(btype) >= 0) && (item.buildable);
				}).length > 0;
			};




			// Return building from a btype (if known)
			QB.buildingFromId = function(btype) {
				return QB._LIST.find(function(item) {
					return (item.id.indexOf(btype) >= 0);
				});
			};



			// Searching for Basilica

			QB.isBasilica = function(btype) {
				return QB._DETAILS.basilica.id[0] === btype;
			};




			// Return true if has farm or lakes in plan => i.e. food city.
			QB.needToClearAllResources = function(scheduleMap) {
				if (scheduleMap.length === 0) return false;
				return scheduleMap.some(function(building) {
					return (building === QB._DETAILS.farmhouse) ||
						//(building === that._DETAILS.windmill) ||
						(building === QB._DETAILS.lake);
				});
			};



			// Update curentBuilding status regarding schedule

			QB.updateStatus = function(curentBuilding, scheduleBuilding, needToClearAllResources) {
				curentBuilding.error = false;
				curentBuilding.toDestroy = false;
				curentBuilding.toMove = false;
				curentBuilding.toAdd = false;
				if (scheduleBuilding) {
					if (scheduleBuilding.id.indexOf(curentBuilding.btype) >= 0) {
						// Good building !
					} else if (scheduleBuilding === QB._DETAILS.forest ||
						scheduleBuilding === QB._DETAILS.stone ||
						scheduleBuilding === QB._DETAILS.iron ||
						scheduleBuilding === QB._DETAILS.lake) {
						// Resource planed but not in curent
						curentBuilding.error = true;
					} else if (curentBuilding.btype === QB._DETAILS.forest.id[0] ||
						curentBuilding.btype === QB._DETAILS.stone.id[0] ||
						curentBuilding.btype === QB._DETAILS.iron.id[0] ||
						curentBuilding.btype === QB._DETAILS.lake.id[0]) {
						curentBuilding.toDestroy = !curentBuilding.demolishing; // Something else to build
					} else if (!curentBuilding.building) {
						if (scheduleBuilding.buildable) {
							curentBuilding.toAdd = true;
							curentBuilding.buildingToAdd = scheduleBuilding;
						}
					} else if (curentBuilding.building.movable) {
						// Potentially to move
						curentBuilding.toMove = !curentBuilding.demolishing;
					}
					return false;
				}




				if (curentBuilding) {
					// Current but not planned buildings
					if (!curentBuilding.building) {
						return; // Unknown building type.
					} else if (curentBuilding.btype === QB._DETAILS.forest.id[0] ||
						curentBuilding.btype === QB._DETAILS.stone.id[0] ||
						curentBuilding.btype === QB._DETAILS.iron.id[0] ||
						curentBuilding.btype === QB._DETAILS.lake.id[0]) {
						curentBuilding.toDestroy = needToClearAllResources && (!curentBuilding.demolishing);
					} else if (curentBuilding.building.movable) {
						// Potentially to move
						curentBuilding.toMove = !curentBuilding.demolishing;
					} else if (!curentBuilding.building.buildable) {
						// RAS
					}
					return false;
				}
				return false;
			};



			// Count the number of building and transforming to move in to destroy for spare buildings.
			QB.checkMove = function(curentMap, scheduleMap) {



				// Counting in the map per type
				const nbOfBuildingScheduledPerType = scheduleMap.reduce(function(pv, cv) {
					if (cv) {
						pv[cv.name] = pv[cv.name] ? pv[cv.name] + 1 : 1;
					}
					return pv;
				}, {});




				// Removing already ok buildings
				for (const buildingIndex in curentMap) {
					const curent = curentMap[buildingIndex];
					const schedule = scheduleMap[buildingIndex];

					if (curent && schedule && (curent.building === schedule) && nbOfBuildingScheduledPerType[schedule.name] > 0) {
						nbOfBuildingScheduledPerType[schedule.name]--;
					}
				}




				// Checking to move
				curentMap.forEach(function(curent) {
					if (curent.toMove) {
						if ((!nbOfBuildingScheduledPerType[curent.building.name]) ||
							(nbOfBuildingScheduledPerType[curent.building.name] === 0)) {
							curent.toMove = false;
							curent.toDestroy = !curent.demolishing;
						} else {
							nbOfBuildingScheduledPerType[curent.building.name]--;
						}
					}
				});
			};





			// Return the building from a plan letter.
			QB.buildingFromMapLetter = function(letter) {
				return QB._FromMapLetter[letter];
			};

			return QB;
		}();





		// Build manager constructor
		QB.buildManager = function() {




			// Id to identify curent city (cid in CoTG)
			QB.data = {
				id: null
			};


			// CoTG city data parser
			QB.parseCurentCityData = function(cdata) {
				let updatedData = false;

				if (QB.data.id !== cdata.cid) {
					updatedData = true;
					QB.data = {
						id: cdata.cid,
						curentMap: [],
						scheduleMap: [],
						quickModeActivated: QB.data.quickModeActivated
					};
					QB.message = {
						map: "You don't have a layout applied"
					};
				}

				// Current map
				if (cdata.bd) {
					updatedData = true;
					// Updating buildings count for city
					QB.data.basilicaLevel = 1;
					QB.data.curentMap = [];

					// Filling curentMap
					for (const buildingIndex in cdata.bd) {
						const btype = Number(cdata.bd[buildingIndex].bid);
						QB.data.curentMap.push({
							btype,
							index: buildingIndex,
							building: QB.BUILDINGS.buildingFromId(btype)
						});
						if (QB.BUILDINGS.isBasilica(btype)) {
							QB.data.basilicaLevel = cdata.bd[buildingIndex].bl;
						}
					}
				}

				if (cdata.bq) {
					updatedData = true;



					// Processing building queue
					cdata.bq.forEach(function(buildQueueItem) {
						const index = buildQueueItem.bspot;
						if (QB.data.curentMap[index]) {
							if (buildQueueItem.elvl === 0) {
								QB.data.curentMap[index].demolishing = true;
							} else if (buildQueueItem.slvl === 0) {
								// New building in queue
								const btype = buildQueueItem.brep;
								QB.data.curentMap[index].btype = btype;
								QB.data.curentMap[index].building = QB.BUILDINGS.buildingFromId(btype);
							}
						}
					});
				}




				// Schedule map.
				if (cdata.sts) {
					updatedData = true;
					QB.data.scheduleMap = [];
					const stsFormat = cdata.sts.substring(0, 18);
					if (stsFormat == ("[ShareString.1.3]:") || stsFormat == "[ShareString.1.3];") {
						QB.message.map = "";
						const stsData = cdata.sts.substring(18, 441).split(""); // to char array
						for (let index = 0; index < stsData.length; index++) {
							const letter = stsData[index];
							if ("#-_".indexOf(letter) >= 0) { // RAS no building
								QB.data.scheduleMap.push(null);
							} else {
								var building = QB.BUILDINGS.buildingFromMapLetter(letter);
								if (!building) {
									QB.message.map = `Unknown type of building '${letter}'. Please report the bug.`;
									QB.data.scheduleMap = [];
									break;
								}
								QB.data.scheduleMap.push(building);
							}
						}
					} else {
						QB.message.map = "Unknown layout format. Please report to Greety or Fact.";
					}
				}

				QB.onCityDataUpdated(updatedData);
			};





			// Utilities
			QB.utils = {
				// DOM operation on object:
				// jquery selector,
				// remove some classes
				// add some classes
				// set a title
				classSwitch(buttonSelector, classToRemove, classToAdd, title) {
					buttonSelector.removeClass(classToRemove);
					buttonSelector.addClass(classToAdd);
					buttonSelector.attr("title", title);
				},
				// display a message in bottom rigth
				errorMsg: {
					display(errormessage1) {
						this._id++;
						const ident = this._idKey + this._id;
						const errormsgs = `<tr ID = "${ident}"><td><div class = "errBR">${errormessage1}<div></td></tr>`;
						$("#errorBRpopup").append(errormsgs);
						// Show
						$(`#${ident}`).show();
						$(`#${ident} div`).animate({
							opacity: 1,
							bottom: "+10px"
						}, 'slow');
						// Hide
						setTimeout(function() {
							$(`#${ident} div`).animate({
								opacity: 0,
								bottom: "-10px"
							}, 'slow');
							$(`#${ident}`).fadeOut("slow");
						}, 5000);
						setTimeout(function() {
							$(`#${ident}`).remove();
						}, 6000);
					},
					_idKey: "qbErrBR",
					_id: 0
				}
			};







			// Building added data (re computed ones) & update HMI
			QB.previousViewData = {};
			QB.onCityDataUpdated = function(updatedData) {
				if (updatedData) {
					QB.addedData = {
						needToClearResources: QB.BUILDINGS.needToClearAllResources(QB.data.scheduleMap),
						pureNavy: false,
						pureTrade: false
					};




					// Case of warship & stingers
					const partialMap = QB.data.scheduleMap.filter(function(item) {
						return item && item.buildable;
					}).length <= 60;
					if (partialMap && QB.data.scheduleMap.filter(function(item) {
							return item === QB.BUILDINGS._DETAILS.shipyard;
						}).length === 8) {
						QB.addedData.pureNavy = true;
					}
					if (QB.data.scheduleMap.filter(function(item) {
							return item === QB.BUILDINGS._DETAILS.forum;
						}).length >= 20) {
						QB.addedData.pureTrade = true;
					}





					// Post processing data regarding scheduledMap
					if (QB.data.scheduleMap.length > 0 && QB.data.curentMap.length > 0) {
						for (const buildingIndex in QB.data.scheduleMap) {
							if (QB.data.scheduleMap[buildingIndex]) {
								QB.data.curentMap[buildingIndex].schedule = QB.data.scheduleMap[buildingIndex];
							}
							QB.BUILDINGS.updateStatus(
								QB.data.curentMap[buildingIndex],
								QB.data.scheduleMap[buildingIndex],
								QB.addedData.needToClearResources);
						}



						// 2nd check to move
						QB.BUILDINGS.checkMove(QB.data.curentMap, QB.data.scheduleMap);
					}
				}





				// Building new view data
				const mapSetOk = (QB.data.scheduleMap.length !== 0 && QB.data.curentMap.length !== 0);
				const infoMsg = QB.message.map;
				const buildingsToDestroy = QB.data.curentMap.filter(function(item) {
					return item.toDestroy;
				});
				const buildingsToMove = QB.data.curentMap.filter(function(item) {
					return item.toMove;
				});
				const buildingsToAdd = QB.data.curentMap.filter(function(item) {
					return item.toAdd;
				});
				const divButtons = mapSetOk ? [{ // Button info
					title: infoMsg,
					removeClass: "redb greenb",
					addClass: QB.data.quickModeActivated ? "redb" : "greenb",
					text: QB.data.quickModeActivated ? "Activated" : "Disabled"
				}, { // Selector Clear
					title: buildingsToDestroy.length > 0 ? "" : "Nothing to Destroy",
					removeClass: "disable greenb",
					addClass: buildingsToDestroy.length > 0 ? "greenb" : "Disable",
					options: buildingsToDestroy.length === 0 ? [{
						text: "Clean !"
					}] : [{
						text: `${buildingsToDestroy.length} Clear`
					}].concat(
						buildingsToDestroy.reduce(function(pv, cv) {
							return pv.concat([{
								index: cv.index,
								text: cv.building.name
							}]);
						}, []))
				}, { // Move selector
					title: buildingsToMove.length > 0 ? "" : "Nothing to Move",
					removeClass: "disable greenb",
					addClass: buildingsToMove.length > 0 ? "greenb" : "disable",
					options: buildingsToMove.length === 0 ? [{
						text: "In Place !"
					}] : [{
						text: `${buildingsToMove.length} Move`
					}].concat(
						buildingsToMove.reduce(function(pv, cv) {
							return pv.concat([{
								index: cv.index,
								text: cv.building.name
							}]);
						}, []))
				}, { // Add selector
					title: buildingsToAdd.length > 0 ? "" : "Nothing to Add",
					removeClass: "disable greenb",
					addClass: buildingsToAdd.length > 0 ? "greenb" : "disable",
					options: buildingsToAdd.length === 0 ? [{
						text: "Complete !"
					}] : [{
						text: `${buildingsToAdd.length} Add`
					}].concat(
						buildingsToAdd.reduce(function(pv, cv) {
							return pv.concat([{
								index: cv.index,
								text: cv.buildingToAdd.name
							}]);
						}, []))
				}] : [];

				const currentViewData = {
					children: [{ // Div info
						visible: !mapSetOk,
						text: 'Add a layout to use Gfunky Quickbuild!',
						title: infoMsg
					}, { // Div button bar
						visible: mapSetOk,
						children: divButtons
					}]
				};

				if (JSON.stringify(QB.previousViewData) === JSON.stringify(currentViewData)) {
					return;
				}
				// Updating HMI.
				QB.previousViewData = currentViewData;
				var updateItem = function(selector, data) {
					Object.keys(data).forEach(function(key) {
						let classes = false;
						switch (key) {
							case "children": {
								const childrenSelector = selector.children();
								data[key].forEach(function(childData, index) {
									updateItem(childrenSelector.eq(index), childData);
								});
							}
							break;
							case "visible": {
								if ((selector.css('display') !== 'none') !== data[key]) {
									selector.toggle();
								}
							}
							break;
							case "text": {
								selector.html(data[key]);
							}
							break;
							case "title": {
								selector.attr("title", data[key]);
							}
							break;
							case "removeClass":
							case "addClass": {
								classes = true;
							}
							break;
							case "options": {
								selector.html(data[key].reduce(
									function(pv, cv) {
										const index = cv.index ? `index='${cv.index}'` : "";
										return `${pv}<option ${index}>${cv.text}</option>`;
									}, ""));
							}
							break;
							default:
								//console.error("Todo " + key);

						}
						if (classes) {
							selector.removeClass(data.removeClass);
							selector.addClass(data.addClass);
						}
					});

				};
				updateItem($(`#${QB_DIV}`), currentViewData);
			};

			$('#citadelResTable table').css({
				"width": "95%",
				"margin-left": "auto",
				"margin-right": "auto"
			});





			// What to do with current building
			QB.processBuilding = function() {
				if (QB.data.quickModeActivated) {
					const selectedBuilding = $("#city_map .hoverbuild").attr("data");
					if ((selectedBuilding) && QB.data.curentMap[selectedBuilding]) {
						const curentBuilding = QB.data.curentMap[selectedBuilding];
						let toAdd = null;
						if (curentBuilding.toDestroy) {
							QB.utils.errorMsg.display("Destroying this resource or building");
							$("#buildingDemolishButton").trigger({
								type: "click",
								originalEvent: "1"
							});
						} else if (curentBuilding.toMove) {
							// Searching a free space.
							const curentBuildingIndex = curentBuilding.index;
							let found = false;
							for (const searchingBuildingIndex in QB.data.curentMap) {
								if (searchingBuildingIndex !== curentBuildingIndex) {
									var searchingCurent = QB.data.curentMap[searchingBuildingIndex];
									var searchingSchedule = QB.data.scheduleMap[searchingBuildingIndex];
									if (searchingCurent &&
										searchingSchedule &&
										(searchingCurent.btype === 0) &&
										(searchingSchedule === curentBuilding.building)) {
										// Found!
										found = true;
										QB.utils.errorMsg.display("Moving this building");
										$.ajax({
											url: 'includes/mBu.php',
											type: 'POST',
											async: false,
											data: `a=${curentBuildingIndex}&b=${searchingBuildingIndex}&c=${QB.data.id}`
										});
										break;
									}
								}
							}
							if (!found) {
								QB.utils.errorMsg.display("Error. Don't know where to move this building. Please report the bug with current and planned Layout");
							}
						} else if (curentBuilding.toAdd) {
							toAdd = QB.data.scheduleMap[selectedBuilding];
						} else if (curentBuilding.btype === 0) {
							// Have click on empty & nothing planed
							if (QB.data.curentMap.filter(function(item) {
									return item.building && item.building.buildable;
								}).length < 50) {
								// Adding a cabin
								toAdd = QB.BUILDINGS._DETAILS.cabin;
							} else if (QB.addedData.pureNavy) {
								// Adding a barrack
								toAdd = QB.BUILDINGS._DETAILS.barracks;
							} else if (QB.addedData.pureTrade) {
								// Adding a forum
								toAdd = QB.BUILDINGS._DETAILS.forum;
							}
						}
						if (toAdd) {
							if (toAdd.shortcut) {
								QB.utils.errorMsg.display(`Creating  ${toAdd.name}`);
								const eventData = {
									type: "keypress",
									keyCode: toAdd.shortcut.charCodeAt()
								};
								$("body").trigger(eventData);
							} else {
								QB.utils.errorMsg.display(`Error. Don't know how to Create  ${toAdd.name}. Please report the bug`);
							}
						}
					}
				}
			};





			// Toggle Quickmode
			QB.toggleQuickMode = function() {
				QB.data.quickModeActivated = !QB.data.quickModeActivated;
				QB.onCityDataUpdated(false);
				QB.utils.errorMsg.display("QUICK BUILD MODE IS NOW " +
					(QB.data.quickModeActivated ? "ACTIVE" : "DISABLED"));
			};
			return QB;
		}();








		// Adding buttons once game loaded
		var waitForGameLoaded = function() {
			if ($("#incAttacksDiv").length > 0) {
				////console.log("Game Loaded.");





				// Add'on starting.
				if ($(`#${QB_DIV}`).length > 0) {
					// Removing current
					$(`#${QB_DIV}`).remove();
				}


				// Buttons for building in left bar
				$("#incAttacksDiv").before(
					`<div id="${QB_DIV}" style="text-align: center; width:295px" class="commandinndiv">` +
					'<div style="text-align:center ;font-size: 12px;">Only Works With A Layout</div>' +
					'<div style="display:none;">' +
					'<button ' + CLASS_AND_CSS_FIRST_BUTTON + '>Info</button>' +
					'<select title="Remove Building or Resource" ' + CLASS_AND_CSS_NEXT_BUTTON + '><option>Clear</option></select>' +
					'<select id="' + SELECT_CITY_MOVE_ID + '" title="Move a building " ' + CLASS_AND_CSS_NEXT_BUTTON + '><option>Move</option></select>' +
					'<select id="' + SELECT_CITY_ADD_ID + '" title="Add a building" ' + CLASS_AND_CSS_NEXT_BUTTON + '><option>Add</option></select>' +
					'</div></div>');

				/*




				// TODO: add buildtooltip tooltipstered & tooltip for BUTTON_CITY_CLEAR_ID





				*/
				$(BUTTON_CITY_INFO_SELECTOR).click(function() {
					QB.buildManager.toggleQuickMode();
				});

				$("#city_map").click(function() {
					QB.buildManager.processBuilding();
				});
			} else {
				setTimeout(waitForGameLoaded, 1000);
			}

			////console.log("Quickbuild Script Loading");
		};
		waitForGameLoaded();


		// Adding for clearing the chat
		var waitForChat = function() {
			if ($("#clbleft").length > 0) {

				// Adding clear button to chat
				$("#clbleft").append('<button id="clbclear" class="greenb">Clear</button>');
				$("#clbclear").click(function() {
					$("#chatDisplay").html(""); // World
					$("#chatDisplaya").html(""); // Alliance
					$("#chatDisplayo").html(""); // Officer
					$("#chatDisplayw").html(""); // Wisper
				});
				$("#chlinkbuts").attr("style", `${$("#chlinkbuts").attr("style")};height: 125px;`);
				$("#clbright").attr("style", "height: 120px;");
			} else {
				setTimeout(waitForChat, 1000);
			}
			////console.log("Quickbuild Script Loaded");
		};
		waitForChat();





		// Overriding some responses
		setTimeout(function() {
			(function(open) {
				XMLHttpRequest.prototype.open = function() {
					this.addEventListener("readystatechange", function() {
						if (this.readyState != 4) {
							return;
						}
						const url = this.responseURL;
						let cdata;
						if (url.indexOf('gC.php') != -1) {
							// Changing city response.
							try {
								cdata = JSON.parse(this.response);
								QB.buildManager.parseCurentCityData(cdata);
							} catch (e) {
								//console.error(e);
							}
						} else if (url.indexOf('poll2.php') != -1) {
							// Poll2 response: Updating curent city
							try {
								const poll2 = JSON.parse(this.response);
								cdata = poll2.city;
								QB.buildManager.parseCurentCityData(cdata);
							} catch (e) {
								//console.error(e);
							}
						}
					}, false);
					open.apply(this, arguments);
				};
			})(XMLHttpRequest.prototype.open);
			////console.log("Chat Loaded");
		}, 4000);

	})();

	/*







	END OF QUICKBUILD SCRIPT





	*/
	/*


	START OF CORE FUNKY

		Layouts

*/

cotgsubscribe.subscribe( "regional", function( data ) {});
 // run the function every 5 seconds

		const gfunkyLayouts = {
					"Land Offense": [{
						layoutName: " 1s (180K) Vanqs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##GBGBG##-----##----##BGBGBGB##----##----#GBGBGBGBG#----##----#GBGBGBGBG#----#######GBGBTBGBG#######S--X#GBGBGBGBG#----##----#GBGBGBGBG#----##----##BGBGBGB##----##GGGGG##GBGBG##-----##BBBBBB#######------##GGGGGGJ--#---------##BBBBBB---#---------###GGGGZ---#--------#####B------#-------########################",
						layoutRemark: "Vanqs",
						layoutNote: "180000 Vanqs @ 2 days",
						layoutTroops: [0, 0, 0, 0, 0, 179_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_002, 250_002, 200_002, 400_002],
					}, {
						layoutName: " 2s (256k) Vanqs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBBTBBGB#######SSPX#BGBGBGBGB#----##MDPJ#BGBGBGBGB#----##S---##BBGBGBB##----##-----##BBBBB##-----##-BBBBB#######------##-ZBGGB---#---------##-BBBBB---#---------###-BGGB---#--------#####BBBB---#-------########################",
						layoutRemark: "vanqs",
						layoutNote: "256000 vanqs @ 6 days",
						layoutTroops: [0, 0, 0, 0, 0, 255_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_001, 250_001, 200_000, 400_000],
					}, {
						layoutName: " 3s (292K) Vanqs Raiding",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######SSPX#BGBBBBBGB#----##MDP-#BBBGBGBBB#----##S---##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BGGBGB#---------###--BBBBBB#--------#####-JBZBBB#-------########################",
						layoutRemark: "vanqs",
						layoutNote: "292000 vanqs @ 10 days",
						layoutTroops: [0, 0, 0, 0, 0, 291_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 4s (308K) Vanqs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBBBBBBB#----##----#BGBGBGBGB#----#######BBBBTBBGB#######SMSX#BGBGBGBGB#----##SDPP#BBBBBBBBB#----##----##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BBBBBB#---------###--BBBBBB#--------#####-BBJBZB#-------########################",
						layoutRemark: "vanqs",
						layoutNote: "308000 vanqs @ 14.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 307_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 4s (110K) Horsemen",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##-BEBEB-##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######SM-X#BEBEBEBEB#----##S---#BEBEBEBEB#----##----##-BEBEB-##----##-BBBB##BEBEB##-----##ZEEEE-#######------##BBBBBBBB-#---------##JEEEEEEE-#---------###BBBBBBB-#--------#####-------#-------########################",
						layoutRemark: "horses",
						layoutNote: "110000 horses @ 5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109_999, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 5s (120K) Horsemen",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEBEBEB##----##----#-BEBEBEB-#----##----#-BEBEBEB-#----#######-BEBTBEB-#######SSPX#-BEBEBEB-#----##MDP-#-BEBEBEB-#----##S---##BEBEBEB##----##-----##BBBBB##-----##--BBBB#######------##--BEEEEEB#---------##-ZBBBBBBB#---------###JBEEEEEB#--------#####BBBBBBB#-------########################",
						layoutRemark: "horses",
						layoutNote: "120000 horses @ 7 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120_000, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 6s (134K) Horsemen Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######SSPX#BEBBBBBEB#----##MDPJ#BEBEBEBEB#----##----##BBEBEBB##----##-----##BBBBB##-----##--BBBZ#######------##--BEBBB--#---------##--BBBEB--#---------###-BEBEB--#--------#####BBBBB--#-------########################",
						layoutRemark: "horses",
						layoutNote: "134000 horses @ 9.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133_999, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 4s (180K) Sorcs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#-JBJBJBJ-#----##----#-JBJBJBJ-#----#######-JBJTJBJ-#######S--X#-JBJBJBJ-#----##M---#-JBJBJBJ-#----##----##JBJBJBJ##----##-JBJB##BJBJB##-----##BJBJBJ#######------##BJBJBJBJ-#---------##BJBJBJBJ-#---------###JBJBJBJ-#--------#####BJBJBZ-#-------########################",
						layoutRemark: "sorc",
						layoutNote: "180000 sorc @ 8.3 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 179_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 5s (228K) Sorcs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######SMPX#BJBJBJBJB#----##----#BJBJBJBJB#----##----##BBJBJBB##----##-BBBB##BJBJB##-----##-BJBJB#######------##-BJBJB---#---------##ZBJBJB---#---------###BJBJB---#--------#####BBB----#-------########################",
						layoutRemark: "sorc",
						layoutNote: "228000 sorc @ 14.8 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 227_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 6s (240K) Sorcs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BJBJBJB##----##----#-BJBJBJB-#----##----#-BJBJBJB-#----#######-BJBTBJB-#######SMSX#-BJBJBJB-#----##SDPP#-BJBJBJB-#----##----##BJBJBJB##----##BBBBB##BBBBB##-----##BJJJJZ#######------##BBBBBBBB-#---------##BJJJJJJJ-#---------###BBBBBBB-#--------#####-------#-------########################",
						layoutRemark: "sorc",
						layoutNote: "240000 sorc @ 17 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 239_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 10s (102K) Druids",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######SM-X#BJBJBJBJB#----##----#BJBJBJBJB#----##BBBB##JBJBJBJ##----##JJJJJ##BJBJB##-----##BBBBBB#######------##JJJJJJ---#---------##BBBBB----#---------###JJZ-----#--------#####-------#-------########################",
						layoutRemark: "druids",
						layoutNote: "102000 druids @ 11.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101_999, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 11s (108K) Druids",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######SDPX#BJBJBJBJB#----##M---#BJBJBJBJB#----##----##JBJBJBJ##----##-----##BJBJB##-----##-----Z#######------##BBBBBBBBB#---------##BJJJJJJJJ#---------###BBBBBBBB#--------#####-------#-------########################",
						layoutRemark: "druids",
						layoutNote: "108000 druids @ 13.8 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107_999, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 14s (124K) Druids Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BJBJBJB##----##----#-BJBJBJB-#----##----#-BJBJBJB-#----#######-BBBTBJB-#######SMPX#-BJBJBJB-#----##SDP-#-BJBJBJB-#----##----##BJBJBJB##----##BBBBB##BBBBB##-----##BJJJJZ#######------##BBBBBBBB-#---------##BJJJJJJJB#---------###BBBBBBB-#--------#####-------#-------########################",
						layoutRemark: "druids",
						layoutNote: "124000 druids @ 20 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123_999, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 18s (150K) Druids Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BJBJB-##----##----#BBBJBJBBB#----##----#BJBJBBBJB#----#######BBBJTJBJB#######----#BJBBBBBBB#S--X##----#BBBJBJB--#M---##----##-BJBJB-##----##-----##BBBBB##BBB--##------#######BBJB--##---------#BBBBBJB--##---------#BJBJBBB--###--------#BJBJBJB-#####-------#BBBBBBB########################",
						layoutRemark: "druids",
						layoutNote: " 300kTS 150k druids @ 31.25 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150_000, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 32s/20s (15680/3920) Scorp Rams",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##YBYBY##-----##----##BYBYBYB##----##----#-BYBYBYB-#----##----#YBYBYBYBY#----#######YBYBTBYBY#######SS-X#YBYBYBYBY#----##MD--#YBYBYBYBY#----##-BBB##BYBYBYB##----##-YYY-##YBYB-##-----##BBBBBB#######------##YYYYYY---#---------##BBBBBB---#---------###YYYZ----#--------#####BB-----#-------########################",
						layoutRemark: "scorp/rams",
						layoutNote: "3920 rams / 15680 scorps @ 6.7 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3920, 15_680, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 39s/24s (18880/4720) Scorp Rams",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBYB##-----##----##BBYBYBY##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######SMSX#BYBYBYBYB#----##SD--#BYBYBYBYB#----##----##BBYBYBY##----##-BBBB##BBBBB##-----##BYYYYB#######------##BBBBBB---#---------##BYYYYB---#---------###BBBB----#--------#####-------#-------########################",
						layoutRemark: "Scorp/Rams",
						layoutNote: "4720 rams / 18880 scorps @ 9.8 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4720, 18_880, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 44s/28s (20800/5200) Scorp Rams",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BYBYBYB##----##----#-BYBYBYB-#----##----#-BYBYBYB-#----#######-BBBTBYB-#######----#-BYBYBYB-#SDSX##----#-BYBYBYB-#SM--##----##BYBYBYB##----##-----##BBBBB##BBBBB##------#######-BYYYB##---------#BBBBBBBBB##---------#BYYYYYYYB###--------#BBBBBBBB#####-------#-------########################",
						layoutRemark: "scorp/rams",
						layoutNote: "5200 rams / 20800 scorps @ 12.3 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5200, 20_800, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 48s (28.4K) Scorps Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##YBYBYBY##----##----#BBBYBYBBB#----##----#BYBBBBBYB#----#######BYBYTYBYB#######----#BYBBBBBYB#SS-X##----#BBBYBYBBB#----##----##YBYBYBY##----##-----##BBBBB##BBB--##------#######-BYB--##---------#--BBBYB--##---------#-BBYBYB--###--------#-BBYBYB-#####-------#-BBBBBB########################",
						layoutRemark: "Scorps",
						layoutNote: "284kTS 28,400 scorps @ 16 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28_400, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}],
					"Land Defense": [{
						layoutName: " 2s (228K) rangers",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######SSPX#BGBGBGBGB#----##MLPJ#BGBGBGBGB#----##S---##BBGBGBG##----##-----##BBBGB##-----##--BBBB#######------##-BGGGG---#---------##-BBBBBB--#---------###-GGGG---#--------#####BBBB---#-------########################",
						layoutRemark: "Rangers",
						layoutNote: "228000 inf @ 5.2 days",
						layoutTroops: [0, 0, 228_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 220_000, 350_000, 350_000],
					}, {
						layoutName: " 3s (276K) Rangers",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##GBGBGBG##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######SSPX#BGBBBBBGB#----##MLPJ#BBBGBGBBB#----##S---##GBGBGBG##----##-----##BBBBB##-----##--BBBB#######------##--BGBGB--#---------##--BBBBB--#---------###-BGBGB--#--------#####BBBB---#-------########################",
						layoutRemark: "Rangers",
						layoutNote: "276000 inf @ 9.3 days",
						layoutTroops: [0, 0, 276_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 350_000, 220_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 450_000, 220_000, 150_000, 350_000],
					}, {
						layoutName: " 2s 3s (152K/76K) Rangers Triari",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######SSPX#BGBGBGBGB#----##MLPJ#BGBGBGBGB#----##S---##BBGBGBG##----##-----##BBBGB##-----##--BBBB#######------##-BGGGG---#---------##-BBBBBB--#---------###-GGGG---#--------#####BBBB---#-------########################",
						layoutRemark: "rangers/triari",
						layoutNote: "228000 inf @ 6.2 days",
						layoutTroops: [0, 0, 152_000, 76_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 220_000, 350_000, 350_000],
					}, {
						layoutName: " 3s 3s (168K 84K) Rangers Triari",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BGBGBB##----##----#BBBGBGBGB#----##----#BGBGBGBGB#----#######BGBBTGBGB#######SLSX#BGBGBGBGB#----##SMPP#BGBGBGBGB#----##----##BBGBGBB##----##-----##BBBBB##-----##--BBBB#######------##--BGBGB--#---------##--BGBGB--#---------###JBGBGB--#--------#####BBBBB--#-------########################",
						layoutRemark: "rangers/triari",
						layoutNote: "252000 inf @ 6.2 days",
						layoutTroops: [0, 0, 168_000, 84_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 220_000, 350_000, 350_000],
					}, {
						layoutName: " 3s (228K) Priestess",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######SMSX#BZBZBZBZB#----##SDPP#BZBZBZBZB#----##----##BBZBZBB##----##-BBBB##BBBBB##-----##-ZZZZ-#######------##BBBBBB---#---------##JZZZZB---#---------###BBBB----#--------#####-------#-------########################",
						layoutRemark: "priests",
						layoutNote: "228000 Priestess @ 7.9 days",
						layoutTroops: [0, 0, 0, 0, 228_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 4s (256K) Priestess",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##ZBZBZBZ##----##----#BBBZBZBBB#----##----#BZBZBZBZB#----#######BZBBTBBZB#######SMSX#BZBZBZBZB#----##SDPP#BBBZBZBBB#----##--PP##ZBZBZBZ##----##-----##BBBBB##-----##----BB#######------##----BJBBB#---------##----BBBZB#---------###---BZBZB#--------#####--BBBBB#-------########################",
						layoutRemark: "priests",
						layoutNote: "256000 Priestess @ 12.2 days",
						layoutTroops: [0, 0, 0, 0, 256_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 5s (288K) Priestess",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBBB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######SMSX#-BZBZBZB-#----##SDPP#-BBBBBZB-#----##----##BZBZBZB##----##-----##BBBBB##-----##BBBBB-#######------##BZBZB----#---------##BBBBBBBBB#---------###JBZBZBZB#--------#####BBBBBBB#-------########################",
						layoutRemark: "priests",
						layoutNote: "288000 Priestess @ 16.7 days",
						layoutTroops: [0, 0, 0, 0, 288_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 6s (112K) Praetors",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-BZB-##-----##----##BZBZBZB##----##----#-BZBZBZB-#----##----#-BZBZBZB-#----#######-BZBTBZB-#######SMPX#-BZBZBZB-#----##S-P-#-BZBZBZB-#----##----##BZBZBZB##----##-----##BBZB-##-----##BBBBBB#######------##ZZZZZZZBJ#---------##BBBBBBBBB#---------###ZZZZZZZZ#--------#####BBBBBBB#-------########################",
						layoutRemark: "praetors",
						layoutNote: "112000 praetors @ 7.75 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 112_000, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 150_000, 220_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 150_000, 220_000, 150_000, 350_000],
					}, {
						layoutName: " 7s (120k) Praetors",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBZBB##-----##----##BZBZBZB##----##----#-BZBZBZB-#----##----#-BZBZBZB-#----#######-BZBTBZB-#######SSPX#-BZBZBZB-#----##MDPJ#-BZBZBZB-#----##S---##BZBZBZB##----##-----##BBZBB##-----##-BBBBB#######------##-BZBZBZB-#---------##BBZBZBZB-#---------###BZBZBZB-#--------#####BBBBBB-#-------########################",
						layoutRemark: "praetors",
						layoutNote: "120000 praetors @ 9.7 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 120_000, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 150_000, 220_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 150_000, 220_000, 150_000, 350_000],
					}, {
						layoutName: " 5s (110K) Arbs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######MSLX#BEBEBEBEB#----##--PP#BEBEBEBEB#----##----##BBEBEBB##----##-JBBB##BEBEB##-----##-BEBEB#######------##-BEBEB---#---------##-BEBEB---#---------###BEBEB---#--------#####BB-----#-------########################",
						layoutRemark: "arbs",
						layoutNote: "110000 arbs @ 6.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 110_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000],
					}, {
						layoutName: " 6s (120k) Arbs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEBEBEB##----##----#-BEBEBEB-#----##----#-BEBEBEB-#----#######-BEBTBEB-#######SMSX#-BEBEBEB-#----##SLPP#-BEBEBEB-#----##----##BEBEBEB##----##-BBBB##BBBBB##-----##-EEEEJ#######------##BBBBBBBBB#---------##BEEEEEEEB#---------###BBBBBBB-#--------#####-------#-------########################",
						layoutRemark: "arbs",
						layoutNote: "120000 arbs @ 8.3 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 124_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000],
					}, {
						layoutName: " 7s (130k) Arbs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######SMSX#BEBBBBBEB#----##SLPP#BEBEBEBEB#----##----##BBEBEBB##----##-----##BBBBB##-----##------#######------##---BBBBBJ#---------##--BEBEBEB#---------###-BEBEBEB#--------#####--BBBB-#-------########################",
						layoutRemark: "arbs",
						layoutNote: "130000 arbs @ 10.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 130_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000],
					}, {
						layoutName: " 8s (138K) Arbs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BEBEBJ##----##----#BBBEBEBBB#----##----#BEBBBBBEB#----#######BEBETEBEB#######SMSX#BEBBBBBEB#----##SLPP#BBBEBEBBB#----##----##-BEBEB-##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##--BEBEBEB#---------###-BEBEBEB#--------#####BBBBBBB#-------########################",
						layoutRemark: "Arbs",
						layoutNote: "138000 arbs @ 12.8 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 138_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000],
					}, {
						layoutName: "(25.6K) Ballista",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBYBYBB##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######MSDX#BYBYBYBYB#----##----#BYBYBYBYB#----##----##BBYBYBB##----##-BBBB##BBBBB##-----##-BYBYB#######------##-BYBYB---#---------##-BYBYB---#---------###BYBYB---#--------#####BBBB---#-------########################",
						layoutRemark: "ballista",
						layoutNote: "25600 siege engines @ 10.5 days",
						layoutTroops: [0, 25_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 150_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 150_000, 220_000, 250_000, 350_000],
					}],
					"Water Offense": [{
						layoutName: " 2s (194K/387) Vanq Galley+Senator",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BGBGB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#---H#######BGBGTGBGB#######----#BGBGBGBGB#JSPX##----#BGBGBGBGB#----##----##BBGBGBB##---B##-----##BGBGB##BBBBZ##------#######BBVVBB##---------#---BV##VB##---------#---BV###V###--------#---BBV#######-------#--BBBBV########################",
						layoutRemark: "vanq+galley+senator",
						layoutNote: "193299 inf and 387 galley @ 14 days",
						layoutTroops: [0, 0, 0, 0, 0, 193_299, 0, 0, 0, 0, 0, 0, 0, 0, 387, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 3s (216.6K/434) Vanq Galley+Senator",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBBBBBGB#----##----#BBBGBGBBB#----#######BGBBTBBGB#######----#BGBGBGBGB#SDPX##----#BGBGBGBGB#SMP-##----##BBGBGBB##----##-----##BBBBB##BBBBZ##------#######BBVVBB##---------#---BV##VB##---------#---BV###V###--------#---BBV#######-------#---JBBV########################",
						layoutRemark: "vanq+galley+senator",
						layoutNote: "216600 inf and 434 galley @ 16.4 days",
						layoutTroops: [0, 0, 0, 0, 0, 216_599, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 4s (233K/467) Vanq Galley+Senator",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBBBBBBB#----##----#BGBGBGBGB#----#######BBBBTBBGB#######----#BGBGBGBGB#----##----#BBBBBBBBB#----##----##BBGBGB-##----##-----##BBBBB##BBBBB##------#######BBVVBB##---------#SS-BV##VB##---------#DM-BV###V###--------#SP-BBV#######-------#XP-ZBBV########################",
						layoutRemark: "vanq+galley+senator",
						layoutNote: "233299 inf and 467 galley @ 22 days",
						layoutTroops: [0, 0, 0, 0, 0, 233_299, 0, 0, 0, 0, 0, 0, 0, 0, 467, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 5s (90K/360) Horsemen Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#---H#######BEBETEBEB#######----#BEBEBEBEB#JSPX##----#BEBEBEBEB#-M--##----##EBEBEBB##----##-----##BEBEB##BBBB-##------#######BBVVBB##---------#---BV##VB##---------#---BV###V###--------#--BBBV#######-------#--BEBBV########################",
						layoutRemark: "horses/galley",
						layoutNote: "90000 cav and 360 galley @ 10.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90_000, 0, 0, 0, 360, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " 6s( 95K/380) Horsemen/Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##EBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SDPP##----##EBEBEBB##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################",
						layoutRemark: "horses/galley",
						layoutNote: "95000 cav and 380 galley @ 16 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95_000, 0, 0, 0, 380, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " 7s (103.3K/414) Horsemen Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##BBBBBBB##----##----#BEEEEEEEB#----##----#BBBBBBBBB#----#######EEEETEEEB#######----#BBBBBBBBB#BBZ-##----#BEEEEEEEB#BBBB##----##BBBBBBB##BEBB##-----##-----##BBBBB##------#######BBVVBB##---------#SS-BV##VB##---------#M--BV###V###--------#PP-BBV#######-------#X--JBBV########################",
						layoutRemark: "horses/galley",
						layoutNote: "103299 cav and 414 galley @ 18.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103_299, 0, 0, 0, 414, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " 5s (156.6K/314) Sorc Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##JBJBJ##-----##----##BJBJBJB##----##----#JBJBJBJBJ#----##----#JBJBJBJBJ#---H#######JBJBTBJBJ#######----#JBJBJBJBJ#-S-X##----#JBJBJBJBJ#----##----##BJBJBJB##JJ--##-----##JBJBJ##BBBBJ##------#######BBVVBB##---------#--JBV##VB##---------#--JBV###V###--------#---BBV#######-------#---JBBV########################",
						layoutRemark: "sorc/galley",
						layoutNote: "156600 sorc and 314 galley @ 13.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 156_600, 0, 0, 0, 0, 0, 0, 0, 314, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " 6s (176K/354) Sorc Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##JJJJJJJ##----##----#BBBBBBBBB#----##----#JJJJJJJJJ#----#######BBBBTBBBB#######----#JJJJJJJJJ#----##----#BBBBBBBBB#----##----##JJJJJJJ##BJ--##-----##BBBBB##BBBBB##------#######BBVVBB##---------#SS-BV##VB##---------#M--BV###V###--------#P--BBV#######-------#X--ZBBV########################",
						layoutRemark: "sorc/galley",
						layoutNote: "176599 sorc and 354 galley @ 25 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 176_599, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " 7s (186.6K/374) Sorc Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######---X#BJBJBJBJB#----##-SS-#BJBJBJBJB#----##-MD-##JBJBJBJ##----##-S---##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###-------P#---BBVTT#####------P#B---BBV########################",
						layoutRemark: "sorc/galley",
						layoutNote: "186600 sorc and 374 galley @ 20.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 186_599, 0, 0, 0, 0, 0, 0, 0, 374, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " 3s (264K) Vanqs Ports & Senator",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######----#BGBBBBBGB#PPJX##----#BGBGBGBGB#BBBB##----##BBGBGBB##BBBB##-----##BBBBB##BBBBB##------#######-BRRBB##---------#----R##RZ##---------#----R###R###--------#----SR#######-------#----MSR########################",
						layoutRemark: "vanqs+senator+ports",
						layoutNote: "264k infantry @ 10 days",
						layoutTroops: [0, 0, 0, 0, 0, 263_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000],
					}, {
						layoutName: " (819) Warships",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#---------#----##----#---------#----#######-SS-TP---#######-XBB#-ML--P---#BBBB##--BB#-S-------#BBBB##--BB##-------##BBBB##--BBB##-----##BBBBB##--BBBB#######BBVVBB##--BBBBBBB#BBBBV##VB##-BBJBZBBB#BBBBV###V###BBBBBBBB#BBBBBV#######BBBBBBB#BBBBBBV########################",
						layoutRemark: "warships",
						layoutNote: "819 warships @ 42 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 819],
						layoutResources: [0, 0, 0, 0, 1, 500_000, 500_000, 500_000, 500_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 500_000, 500_000, 500_000, 500_000],
					}],
					"Water Defense": [{
						layoutName: " 2/3s (73.25K/73.25K/293)  RT Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-GBG-##-----##----##GBGBGBG##----##----#BGBGBGBG-#----##----#BGBGBGBGB#----#######BGBGTGBGB#######---X#BGBGBGBGB#----##-SS-#-GBGBGBG-#----##-MD-##GBGBGBG##GGG-##-S---##-GBG-##BBBBG##------#######BBVVBB##---------#--GBVTTVB##--------J#--GBVTTTV###-------P#---BBVTT#####------P#---GBBV########################",
						layoutRemark: "RT/galley",
						layoutNote: "146500 inf and 293 galley @ 10 days",
						layoutTroops: [0, 0, 73_250, 73_250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 293, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000],
					}, {
						layoutName: " 3/3s (88.3K/88.3K/354)  RT Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BGBGB##-----##----##GBGBGBG##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######---X#BGBGBGBGB#----##-SS-#BGBGBGBGB#----##-MD-##GBGBGBG##----##-S---##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##--------J#---BVTTTV###-------P#---BBVTT#####------P#----BBV########################",
						layoutRemark: "RT/galley",
						layoutNote: "176000 inf and 354 galley @ 15 days",
						layoutTroops: [0, 0, 88_300, 88_300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000],
					}, {
						layoutName: " 2s (166K/334)  Ranger Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BGBGB##-----##----##GBGBGBG##----##----#BGBGBGBGB#----##----#BGBGBGBGB#---H#######BGBGTGBGB#######----#BGBGBGBGB#JSPX##----#BGBGBGBGB#----##----##GBGBGBG##G---##-----##BGGGB##BBBBG##------#######BBVVBB##---------#--GBV##VB##---------#--GBV###V###--------#---BBV#######-------#----BBV########################",
						layoutRemark: "Ranger/galley",
						layoutNote: "166600 inf and 334 galley @ 10 days",
						layoutTroops: [0, 0, 166_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000],
					}, {
						layoutName: " 3s (196.6K/394) Ranger Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-BBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#SMSX##----#BGBGBGBGB#SLPP##----##BBGBGBB##----##-----##BBBBB##BBBBJ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---BBBV########################",
						layoutRemark: "Ranger/galley",
						layoutNote: "196600 inf and 394 galley @ 16 days",
						layoutTroops: [0, 0, 196_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 394, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000],
					}, {
						layoutName: " 4s (216.6K/434) Ranger Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBBBBBGB#----##----#BBBGBGBBB#----#######BGBBTBBGB#######----#BGBGBGBGB#SMSX##----#BGBGBGBGB#SLPP##----##BBGBGBB##----##-----##BBBBB##BBBBJ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#----BBV########################",
						layoutRemark: "Ranger/galley",
						layoutNote: "216600 inf and 434 galley @ 20.5 days",
						layoutTroops: [0, 0, 216_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000],
					}, {
						layoutName: " 3s (166.6K/334) Priestess/Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##ZBZBZBZ##----##----#BZBZBZBZB#----##----#BZBZBZBZB#---H#######BZBZTZBZB#######----#BZBZBZBZB#JSPX##----#BZBZBZBZB#----##----##ZBZBZBZ##-Z--##-----##BZZZB##BBBBZ##------#######BBVVBB##---------#---BV##VB##---------#--ZBV###V###--------#---BBV#######-------#---ZBBV########################",
						layoutRemark: "priestess/galley",
						layoutNote: "166600 inf and 334 galley @ 11 days",
						layoutTroops: [0, 0, 0, 0, 166_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 4s (190K/380) Priestess Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SMPX##----#BZBZBZBZB#SDPJ##----##BBZBZBB##----##-----##BZBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---BBBV########################",
						layoutRemark: "priestess/galley",
						layoutNote: "189999 inf and 380 galley @ 18 days",
						layoutTroops: [0, 0, 0, 0, 189_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 5s (210K/420) Priestess Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BBBZBZBBB#----#######BZBZTZBZB#######----#BBBZBZBBB#SMPX##----#BZBZBZBZB#SDPJ##----##BBZBZBB##----##-----##BZBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---BBBV########################",
						layoutRemark: "priestess/galley",
						layoutNote: "209999 inf and 420 galley @ 22 days",
						layoutTroops: [0, 0, 0, 0, 209_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 420, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 6s (220K/440) Priestess Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBBBBBZB#----##----#BBBZBZBBB#----#######BZBBTBBZB#######----#BZBZBZBBB#SMSX##----#BZBZBZBZB#SDPP##----##BBZBZBB##----##-----##BBBBB##BBBBJ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#----BBV########################",
						layoutRemark: "priestess/galley",
						layoutNote: "219999 inf and 440 galley @ 22 days",
						layoutTroops: [0, 0, 0, 0, 219_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 440, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 6s (81.65K/327) Arbs Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SLPP##----##EBEBEBE##----##-----##-EBE-##BBBBE##------#######BBVVBB##---------#--JBVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---EBBV########################",
						layoutRemark: "arbs/galley",
						layoutNote: "81650 inf and 327 galley @ 13.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 81_650, 0, 0, 0, 0, 0, 327, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 150_000, 1_350_000],
					}, {
						layoutName: " 7s (91.65K/367) Arbs Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SLPP##----##EBEBEBE##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################",
						layoutRemark: "arbs/galley",
						layoutNote: "91650 inf and 367 galley @ 16.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 91_650, 0, 0, 0, 0, 0, 367, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 150_000, 1_350_000],
					}, {
						layoutName: " 8s (98.3K/394) Arbs Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SLPP##----##BBEBEBB##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################",
						layoutRemark: "arbs/galley",
						layoutNote: "98300 inf and 394 galley @ 16.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 98_300, 0, 0, 0, 0, 0, 394, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 150_000, 1_350_000],
					}, {
						layoutName: " 7s (86.65K/347) Praetor Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##ZBZBZBZ##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SPJX##----#BZBZBZBZB#MH--##----##ZBZBZBZ##----##-----##BZBZB##BBBBZ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#--BZBBV########################",
						layoutRemark: "praetors/galley",
						layoutNote: "86650 praetors and 347 galley @ 12 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 86_650, 0, 0, 0, 0, 347, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 8s (90K/360) Praetor Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBZB##-----##----##ZBZBZBZ##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SMSX##----#BZBZBZBZB#SDPP##----##ZBZBZBZ##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################",
						layoutRemark: "praetors/galley",
						layoutNote: "89999 praetors and 360 galley @ 17 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 89_999, 0, 0, 0, 0, 360, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " 9s (96.65K/387) Praetor Galley",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SMSX##----#BZBZBZBZB#SDPP##----##ZBZBZBB##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################",
						layoutRemark: "praetors/galley",
						layoutNote: "96649 praetors and 387 galley @ 19.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 96_649, 0, 0, 0, 0, 387, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000],
					}, {
						layoutName: " (3198)Stingers",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#---------#----##----#---------#----#######-SS-TPP--#######-XBB#-ML--PP--#BBBB##--BB#-S-------#BBBB##--BB##-------##BBBB##--BBB##-----##BBBBB##--BBBB#######BBVVBB##--BBBBBBB#BBBBV##VB##--BJBZBBB#BBBBV###V###-BBBBBBB#BBBBBV#######BBBBBBB#BBBBBBV########################",
						layoutRemark: "stingers",
						layoutNote: "3198 stingers @ 49days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3198, 0],
						layoutResources: [0, 0, 0, 0, 1, 500_000, 500_000, 500_000, 500_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 500_000, 500_000, 500_000, 500_000],
					}],
					"Hub": [{
						layoutName: " Cluster Hub 9K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#SASMSDSLS#----##----#SASMSDSLS#----#######SASMTDSLS#######----#SASMSDSLS#PPPP##----#SASMSDSLS#PPPP##----##-------##PPPP##-----##-----##PPPPP##------#######PPRRPP##--------P#PPPPR##RP##-------ZP#PPPPR###R###------BP#PPPPPR#######-----JP#PPPPPPR########################",
						layoutRemark: "Hub",
						layoutNote: "9K Carts, 15375000 W/S, 14175000 I/F ",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 15_375_000, 15_375_000, 14_175_000, 14_175_000],
					}, {
						layoutName: " Cluster Hub 6.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##MSMSM##-----##----##SSSSSSS##----##----#-AAAAAAM-#----##----#-SSSSSSS-#----#######-MMMTDDD-#######----#-SSSSSSS-#PPPP##----#-LLLLLLD-#PPPP##----##SSSSSSS##PPPP##-----##DSDSD##PPPPP##------#######PPRRPP##---------#J-PPR##RP##---------#B-PPR###R###--------#Z--PPR#######-------#---PPPR########################",
						layoutRemark: "Hub",
						layoutNote: "6200K Carts, 20,175,000 W/S, 19,175,000 I/F ",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 20_175_000, 20_175_000, 19_175_000, 19_175_000],
					}, {
						layoutName: " Cluster Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASLS##-----##----##DSASLSM##----##----#SDSASLSMS#----##----#SDSASLSMS#----#######SDSATLSMS#######----#SDSASLSMS#PPPP##----#SDSASLSMS#PPPP##----##DSASLSM##PPPP##-----##SASLS##PPPPP##------#######-PRRPP##---------#Z---R##RP##---------#B---R###R###--------#J----R#######-------#------R########################",
						layoutRemark: "Hub",
						layoutNote: "4200K Carts, 26,175,000 W/S, 21,175,000 I/F use cluster transport with this ",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 26_175_000, 26_175_000, 21_175_000, 21_175_000],
					}, {
						layoutName: " Maj Hub Land 14.2K",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##PPPPP##-----##----##-PPPPP-##----##----#---SLS---#----##----#ZSLSMSAS-#----#######BSDSTSDS-#######----#JSLSMSAS-#PPPP##----#---SAS---#PPPP##----##-------##PPPP##-----##PPPPP##PPPPP##------#######PPPPPP##---------#PPPPPPPPP##---------#PPPPPPPPP###--------#PPPPPPPP#####-------#PPPPPPP########################",
						layoutRemark: "Hub",
						layoutNote: "14200K Carts, 8,975,000 W/S, 8,175,000",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8_975_000, 8_975_000, 8_175_000, 8_175_000],
					}, {
						layoutName: " Maj Hub Water 12.6K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##PPPPP##-----##----##-PPPPP-##----##----#---SLS---#----##----#ZSLSMSAS-#----#######BSDSTSDS-#######----#JSLSMSAS-#PPPP##----#---SAS---#PPPP##----##PPPPPPP##PPPP##-----##PPPPP##PPPPP##------#######PPRRPP##---------#PPPPR##RP##---------#PPPPR###R###--------#PPPPPR#######-------#PPPPPPR########################",
						layoutRemark: "Hub",
						layoutNote: "12600K Carts, 8,975,000 W/S, 8,175,000 I/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8_975_000, 8_975_000, 8_175_000, 8_175_000],
					}, {
						layoutName: " Cluster transport 12.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##MMM--PP##----##----#SSSS--PPP#----##----#AAAAMJPPP#----#######SSSSTBPPP#######----#LLLLDZPPP#PPPP##----#SSSS--PPP#PPPP##----##DDD--PP##PPPP##-----##----P##PPPPP##------#######PPRRPP##---------#PPPPR##RP##---------#PPPPR###R###--------#PPPPPR#######-------#PPPPPPR########################",
						layoutRemark: "Hub",
						layoutNote: "12,200K Carts, 10,575,000 W/S, 6,575,000 I/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 10_575_000, 10_575_000, 6_575_000, 6_575_000],
					}, {
						layoutName: " Temple Storage",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SLSAS##-----##----##LSLSASA##----##----#SLSLSASAS#----##----#SLSLSASAS#----#######SLSLTASAS#######----#SLSLSASAS#JBZ-##----#SLSLSASAS#----##----##LSLSASA##----##-----##SLSAS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################",
						layoutRemark: "Temple Storage",
						layoutNote: "4200K Carts, 40,575,000 W/S, 7,375,000 I/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 40_575_000, 7_375_000, 7_375_000],
					}, {
						layoutName: " Temple Hub",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#SASASLSLS#----##----#SASASLSLS#----#######SASATLSLS#######----#SASASLSLS#PPPP##----#SASASLSLS#PPPP##----##-------##PPPP##-----##-----##PPPPP##------#######PPRRPP##--------P#PPPPRTTRP##-------ZP#PPPPRTTTR###------BP#PPPPPRTT#####-----JP#PPPPPPR########################",
						layoutRemark: "Temple Hub",
						layoutNote: "9000K Carts, 24,575,000 W/S, 4,975,000 I/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 24_575_000, 24_575_000, 4_975_000, 4_975_000],
					}, {
						layoutName: " Temple Transport",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##--PPP##-----##----##JBZPPPP##----##----#-SS-PPPP-#----##----#AAAAPPPP-#----#######SSSSTPPP-#######----#LLLLPPPP-#PPPP##----#-SS-PPPP-#PPPP##----##---PPP-##PPPP##-----##--PPP##PPPPP##------#######PPRRPP##---------#PPPPR##RP##---------#PPPPR###R###--------#PPPPPR#######-------#PPPPPPR########################",
						layoutRemark: "Temple Transport",
						layoutNote: "14,600 Carts, 8,175,000 W/S, 1,775,000 I/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8_175_000, 8_175_000, 1_775_000, 1_775_000],
					}, {
						layoutName: " Food Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SMSMS##-----##----##MSMSMSM##----##----#SMSMSMSMS#----##----#SMSMSMSMS#----#######SMSMTMSMS#######----#SMSMSMSMS#JBZ-##----#SMSMSMSMS#----##----##MSMSMSM##----##-----##SMSMS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################",
						layoutRemark: "Food Hub",
						layoutNote: "4200K Carts, 7,375,000 W/S/I, 73,775,000 Food",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 7_375_000, 7_375_000, 73_775_000],
					}, {
						layoutName: " Iron Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SDSDS##-----##----##DSDSDSD##----##----#SDSDSDSDS#----##----#SDSDSDSDS#----#######SDSDTDSDS#######----#SDSDSDSDS#JBZ-##----#SDSDSDSDS#----##----##DSDSDSD##----##-----##SDSDS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################",
						layoutRemark: "Iron Hub",
						layoutNote: "4200K Carts, 7,375,000 W/S/F, 73,775,000 Iron",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 7_375_000, 73_775_000, 7_375_000],
					}, {
						layoutName: " Stone Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASAS##-----##----##ASASASA##----##----#SASASASAS#----##----#SASASASAS#----#######SASATASAS#######----#SASASASAS#JBZ-##----#SASASASAS#----##----##ASASASA##----##-----##SASAS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################",
						layoutRemark: "Stone Hub",
						layoutNote: "4200K Carts, 7,375,000 W/I/F, 73,775,000 Stone",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 73_775_000, 7_375_000, 7_375_000],
					}, {
						layoutName: " Wood Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SLSLS##-----##----##LSLSLSL##----##----#SLSLSLSLS#----##----#SLSLSLSLS#----#######SLSLTLSLS#######----#SLSLSLSLS#JBZ-##----#SLSLSLSLS#----##----##LSLSLSL##----##-----##SLSLS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################",
						layoutRemark: "Wood Hub",
						layoutNote: "4200K Carts, 7,375,000 S/I/F, 73,775,000 Wood",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 73_775_000, 7_375_000, 7_375_000, 7_375_000],
					}, {
						layoutName: " Wood/Stone Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASLS##-----##----##ASASLSL##----##----#SASASLSLS#----##----#SASASLSLS#----#######SASATLSLS#######----#SASASLSLS#----##----#SASASLSLS#----##----##ASASLSL##PPPP##-----##SASLS##PPPPP##------#######PPRRPP##---------#---PR##RP##---------#Z--PR###R###--------#B--PPR#######-------#J--PPPR########################",
						layoutRemark: "Wood/Stone Hub",
						layoutNote: "4200K Carts, 40,575,000 W/S, 7,375,000 I/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 40_575_000, 7_375_000, 7_375_000],
					}, {
						layoutName: " Stone/Food Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASMS##-----##----##ASASMSM##----##----#SASASMSMS#----##----#SASASMSMS#----#######SASATMSMS#######----#SASASMSMS#PPPP##----#SASASMSMS#PPPP##----##ASASMSM##PPPP##-----##SASMS##PPPPP##------#######-PRRPP##---------#----R##RP##-------Z-#----R###R###------B-#-----R#######-----J-#------R########################",
						layoutRemark: "Stone/Food Hub",
						layoutNote: "4200K Carts, 40,575,000 S/F, 7,375,000 W/I",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 40_575_000, 7_375_000, 40_575_000],
					}, {
						layoutName: " Stone/Iron Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASDS##-----##----##ASASDSD##----##----#SASASDSDS#----##----#SASASDSDS#----#######SASATDSDS#######----#SASASDSDS#PPPP##----#SASASDSDS#PPPP##----##ASASDSD##PPPP##-----##SASDS##PPPPP##------#######-PRRPP##---------#----R##RP##---------#Z---R###R###--------#B----R#######-------#J-----R########################",
						layoutRemark: "Stone/Iron Hub",
						layoutNote: "4200K Carts, 40,575,000 S/I, 7,375,000 W/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 40_575_000, 40_575_000, 7_375_000],
					}, {
						layoutName: " Iron/Wood Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SDSLS##-----##----##DSDSLSL##----##----#SDSDSLSLS#----##----#SDSDSLSLS#----#######SDSDTLSLS#######----#SDSDSLSLS#PPPP##----#SDSDSLSLS#PPPP##----##DSDSLSL##PPPP##-----##SDSLS##PPPPP##------#######-PRRPP##---------#----R##RP##-------Z-#----R###R###------B-#-----R#######-----J-#------R########################",
						layoutRemark: "Iron/Wood Hub",
						layoutNote: "4200 Carts, 40,575,000 I/W, 7,375,000 S/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 7_375_000, 40_575_000, 7_375_000],
					}, {
						layoutName: " Food/Wood Hub 4.2K",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SLSMS##-----##----##LSLSMSM##----##----#SLSLSMSMS#----##----#SLSLSMSMS#----#######SLSLTMSMS#######----#SLSLSMSMS#PPPP##----#SLSLSMSMS#PPPP##----##LSLSMSM##PPPP##-----##SLSMS##PPPPP##------#######-PRRPP##---------#----R##RP##---------#Z---R###R###--------#B----R#######-------#J-----R########################",
						layoutRemark: "Food/Wood Hub",
						layoutNote: "4200K Carts, 40,575,000\nI/W 7,375,000 S/F",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 7_375_000, 7_375_000, 40_575_000],
					}],
					"Shipper": [{
						layoutName: "  3s/4s (126k/126k) R/T Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBGB#----##----#BGBGBGBBB#----#######BGBGTGBGB#######----#BGBGBGBBB#SMSX##----#BGBGBGBGB#S---##----##BBGBGBB##----##-----##BBBBB##-----##---BBB#######--RR--##---JBBBBB#----RTTR-##----BGBGB#----RTTTR###---BBBBB#-----RTT#####-------#------R########################",
						layoutRemark: "252K 3/4s R/T Shipper",
						layoutNote: "252KTS 126K Rangers 126K Triari @ 10 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate",
						layoutTroops: [0, 0, 126_000, 126_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 256K 4sec Ranger Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBBBBBGB#----##----#BBBGBGBBB#----#######BGBBTBBGB#######----#BGBGBGBGB#PP-X##----#BGBGBGBGB#----##----##BBGBGBB##----##-----##BBBB-##BBBB-##------#######BBRRBB##---------#-D-BR##RB##---------#SASBR###R###--------#SL-BBR#######-------#---JBBR########################",
						layoutRemark: "256K 4S Ranger Shipper",
						layoutNote: "256KTS 256K Rangers 126K Triari @ 12.8 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate",
						layoutTroops: [0, 0, 256_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 3s/4s (120K/120K) R/T +Sen Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBBB#----##----#BGBBBBBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#SLPX##----#BGBGBGBGB#SDPJ##----##BBGBGBB##----##-----##BBBBB##-----##------#######--RR--##---------#BBBBRTTR-##---------#BGBZRTTTR###--------#BGBB-RTT#####-------#BBBB--R########################",
						layoutRemark: "240K 3/4s R/T +Sen Shipper",
						layoutNote: "240KTS 120K Rangers 120K Triari @ 10 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate",
						layoutTroops: [0, 0, 120_000, 120_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 3/3s (112K/112K) R/T Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#SLPX##----#BGBGBGBGB#S-P-##----##BBGBGBG##----##-----##BBBGB##-----##--BBBB#######--RR--##--BGBJ---#----RTTR-##--BGBB---#----RTTTR###-BGB----#-----RTT#####BBB----#------R########################",
						layoutRemark: "224K 3/3s R/T Shipper",
						layoutNote: "224KTS 112K Rangers 112K Triari @ 8 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate",
						layoutTroops: [0, 0, 112_000, 112_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 3s (248K) Ranger Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BGGGGGB##----##----#BBBBBBBBB#----##----#BGGGBGGGB#----#######BBBBTBBBB#######----#BGGGBGGGB#SLPX##----#BBBBBBBBB#S-PJ##----##BGGBGGB##----##-----##BBBBB##-----##------#######--RR--##---------#BBBBRTTR-##---------#BGBBRTTTR###--------#BGBB-RTT#####-------#BBBBB-R########################",
						layoutRemark: "248K 3s Ranger Shipper",
						layoutNote: "248KTS 248K Rangers @ 9 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate",
						layoutTroops: [0, 0, 248_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 4s (264K) Ranger Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BGB-TGBBB#######----#BGBBBBBGB#SSPJ##----#BBBGBGBBB#MLPX##----##BBGBGBB##S---##-----##BBBBB##-----##------#######--RR--##---BBBBB-#----R##R-##---BGGGBB#----R###R###--BBBBB-#-----R#######-------#------R########################",
						layoutRemark: "264K 3s Ranger Shipper",
						layoutNote: "264KTS 264K Rangers @ 12 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate",
						layoutTroops: [0, 0, 264_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 6s (260K) Priest Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#BBZBBBZBB#----##----#BBZBZBZBB#----#######BBZBTBZBB#######----#BBZBZBZBB#DAPX##----#BBBBBBZBB#SSP-##----##BZBZBZB##ML--##-----##BBBBB##-----##------#######--RR--##---------#BBB-RTTR-##---------#BBBJRTTTR###--------#BBBB-RTT#####-------#BBBB--R########################",
						layoutRemark: "260K 6s Priestess Shipper",
						layoutNote: "260KTS 260K Priestess @ 18 days ",
						layoutTroops: [0, 0, 0, 0, 260_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 6s (248K) Priest Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBZB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######----#-BZBZBZB-#-AD-##----#-BBBBBZB-#SSSS##----##BZBZBZB##-LM-##BBBB-##BBBBB##-----##BZBZB-#######--RR--##BBBBB----#X---R##R-##BJBZB----#----R###R###BBBB----#-----R#######-------#PP----R########################",
						layoutRemark: "248K 6s Priestess Shipper",
						layoutNote: "248KTS 260K Priestess @ 17.2 days ",
						layoutTroops: [0, 0, 0, 0, 248_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 5s (248K) Priest Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBBB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######----#-BZBZBZB-#SSPX##----#-BBBBBZB-#MDP-##----##BZBZBZB##S---##-----##BBBBB##-----##BBBBB-#######--RR--##BZZZB----#----R##R-##BBBBBB---#----R###R###JBZZZ---#-----R#######BBBB---#------R########################",
						layoutRemark: "248K 5s Priestess Shipper",
						layoutNote: "248KTS 248K Priestess @ 14.5 days ",
						layoutTroops: [0, 0, 0, 0, 248_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 4s (228K) Priest Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SS-X##----#BZBZBZBZB#LD-P##----##BBZBZBB##SS-P##-----##BBBBB##-----##------#######--RR--##---------#BBB-R##R-##---------#BZBBR###R###--------#BZBB-R#######-------#BBBB--R########################",
						layoutRemark: "228K 4s Priestess Shipper",
						layoutNote: "228KTS 228K Priestess @ 12.2 days ",
						layoutTroops: [0, 0, 0, 0, 228_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 7s (98K) Praetor Ship",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##ZBZBB##-----##----##BZBZBZB##----##----#-BZBZBZB-#----##----#-BZBZBZB-#----#######-BZBTBZB-#######----#-BZBZBZB-#SSJX##----#-BZBZBZB-#M---##----##BZBZBZB##----##-----##BBZBB##-----##---BBB#######--RR--##-BZBZBZB-#----RTTR-##-BZBZBZBJ#----RTT#R###BZBZBZB-#-----RT######BBBB---#------R########################",
						layoutRemark: "7s (98K) Praetor Shipper",
						layoutNote: "196KTS 98000 Praetor @ 8.75 days ",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 98_000, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 5s (188K) Priest Mini Hub",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBBTBBBB#######----#BZBZBZBZB#SASM##----#BZBZBZBZB#SLSD##----##BBZBZBB##----##-----##BBBBB##PPPP-##------#######PPRRPP##---------#X--PRTTRP##---------#---PRTTTR###--------#---PPRTT#####-------#----JPR########################",
						layoutRemark: "188K 5s Priest Mini Hub",
						layoutNote: "2800 carts, 188KTS 188000 Priest @ 11 days ",
						layoutTroops: [0, 0, 0, 0, 188_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}, {
						layoutName: " 3s/4s (88K/88K) R/T Mini Hub",
						layoutString: "[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#----##----#BGBGBGBGB#----##----##BBGBGBB##----##-----##BBBBB##PPPP-##------#######PPRRPP##---------#AL-PRTTRP##---------#SS-PRTTTR###--------#MD-PPRTT#####-------#XJZ-PPR########################",
						layoutRemark: "176K 3/4sec R/T Mini Hub",
						layoutNote: "3000 carts, 176KTS 88K rangers, 88K Triari @ 7 days ",
						layoutTroops: [0, 0, 88_000, 88_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000],
					}],

					"Portal": [{
						layoutName: " 3s (292K) Vanqs",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######SSPX#BGBBBBBGB#----##MDP-#BBBGBGBBB#----##S---##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BGGBGB#---------###--BBBBBB#--------#####-JBZBBB#-------########################",
						layoutRemark: "vanqs",
						layoutNote: "292000 vanqs @ 10 days",
						layoutTroops: [0, 0, 0, 0, 0, 291_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 4s (308k) Vanqs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBBBBBBB#----##----#BGBGBGBGB#----#######BBBBTBBGB#######SMSX#BGBGBGBGB#----##SDPP#BBBBBBBBB#----##----##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BBBBBB#---------###--BBBBBB#--------#####-BBJBZB#-------########################",
						layoutRemark: "vanqs",
						layoutNote: "308000 vanqs @ 14.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 307_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 6s (256K) Sorcs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBJBJBB##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######----#BJBJBJBJB#SPJX##----#BJBJBJBJB#SP--##----##BBJBJBB##BBBB##-----##BBBBB##BJBJB##------#######-BJBJB##---------#----BJBJB##---------#----BBBBB###--------#-----B-B#####-------#-------########################",
						layoutRemark: "Sorcs",
						layoutNote: "256000 Sorcs @ 17.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 256_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 5s (130k) Horsemen Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEEEEEB##----##----#BBBBBBBBB#----##----#BEEEEEEEB#----#######BBBBTBBBB#######----#BEEEEEEEB#SPJX##----#BBBBBBBBB#S---##----##BEEEEEB##BBB-##-----##BBBBB##BBBBB##------#######-BEEEB##---------#----BBBBB##---------#----BEEEB###--------#----BBBB#####-------#-------########################",
						layoutRemark: "Horse",
						layoutNote: "260KTS 130,000 Horse @ 7.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130_000, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 6s (136K) Horsemen Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######----#BEBBBBBEB#SMPX##----#BEBEBEBEB#SDPJ##----##BBEBEBB##----##-----##BBBBB##-----##------#######BBBBB-##---------#---BEBEB-##---------#---BBBBB-###--------#---BEBEB#####-------#---BBBB########################",
						layoutRemark: "Horse",
						layoutNote: "272KTS 136,000 Horse @ 9.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136_000, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 10s (106K) Druids Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######----#BJBJBJBJB#SS-X##----#BJBJBJBJB#----##----##JBJBJBJ##----##-----##BJBJB##BBBBB##------#######JJJJJJ##---------#--BBBBBBB##---------#--JJJJJJ-###--------#--BBBBB-#####-------#-------########################",
						layoutRemark: "Druids",
						layoutNote: "212KTS 106,000 Druids @ 12.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106_000, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 11s (118K) Druids Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######----#BJBJBJBJB#---X##----#BJBJBJBJB#----##----##JBJBJBJ##----##-----##BJBJB##-----##------#######BBBBB-##---------#BBBBBBBBB##---------#JJJJJJJJB###--------#BBBBBBBB#####-------#-------########################",
						layoutRemark: "Druids",
						layoutNote: "236KTS 118,000 Druids @ 15 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118_000, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 14s (124K) Druids Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BJBJBJB##----##----#-BJBJBJB-#----##----#-BJBJBJB-#----#######-BBBTBJB-#######SDSX#-BJBJBJB-#----##SMPP#-BJBJBJB-#----##----##BJBJBJB##----##BBBBB##BBBBB##-----##BJJJJ-#######------##BBBBBBBB-#---------##BJJJJJJJ-#---------###BBBBBBBB#--------#####-------#-------########################",
						layoutRemark: "Druids",
						layoutNote: "248KTS 124,000 Druids @ 22.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124_000, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 18s (150K) Druids Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BJBJB-##----##----#BBBJBJBBB#----##----#BJBJBBBJB#----#######BBBJTJBJB#######----#BJBBBBBBB#S--X##----#BBBJBJB--#M---##----##-BJBJB-##----##-----##BBBBB##BBB--##------#######BBJB--##---------#BBBBBJB--##---------#BJBJBBB--###--------#BJBJBJB-#####-------#BBBBBBB########################",
						layoutRemark: "Druids",
						layoutNote: "300KTS 150k Druids @ 31.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150_000, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 40s (25.2K) Scorpions Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BYBYB##-----##----##BBYBYBB##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######----#BYBYBYBYB#SS-X##----#BYBYBYBYB#----##----##BBYBYBB##----##-----##BYBYB##-----##------#######------##---------#-BBBBBB--##---------#BYBYBYBB-###--------#BYBYBYBB#####-------#BBBBBBB########################",
						layoutRemark: "Scorps",
						layoutNote: "252KTS 25,200 Scorps @ 11.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25_200, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 48s (28.4K) Scorpions Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##YBYBYBY##----##----#BBBYBYBBB#----##----#BYBBBBBYB#----#######BYBYTYBYB#######----#BYBBBBBYB#SS-X##----#BBBYBYBBB#----##----##YBYBYBY##----##-----##BBBBB##BBB--##------#######-BYB--##---------#--BBBYB--##---------#-BBYBYB--###--------#-BBYBYB-#####-------#-BBBBBB########################",
						layoutRemark: "Scorps",
						layoutNote: "284KTS 28,400 Scorps @ 16 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28_400, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 25s (25.6K) Rams Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BYBYB##-----##----##BBYBYBB##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######----#BYBYBYBYB#SS-X##----#BYBYBYBYB#----##----##BBYBYBB##----##-----##BBBYB##-----##------#######------##---------#-BBBBBB--##---------#BYBYBYBB-###--------#BYBYBYBB#####-------#BBBBBBB########################",
						layoutRemark: "Battering Rams",
						layoutNote: "256KTS 25,600 Scorps @ 7.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25_600, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 30s (28.4K) Rams Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##YBYBYBY##----##----#BBBYBYBBB#----##----#BYBBBBBYB#----#######BYBYTYBYB#######----#BYBBBBBYB#SS-X##----#BBBYBYBBB#----##----##YBYBYBY##----##-----##BBBBB##BBB--##------#######-BYB--##---------#--BBBYB--##---------#-BBYBYB--###--------#-BBYBYB-#####-------#-BBBBBB########################",
						layoutRemark: "Battering Rams",
						layoutNote: "284KTS 28,400 Rams @ 10 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28_400, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 3s/3s (132K/132K) RT Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##GBGBGBG##----##----#BBBGBGBBB#----##----#BGBGBGBGB#----#######BBBGTGBGB#######----#BGBGBGBGB#S-PX##----#BBBGBGBBB#S-P-##----##GBGBGBG##----##-----##BBBBB##-----##------#######BBBB--##---------#--BGBGBB-##---------#--BBBGBJ-###--------#--BGBGBB#####-------#--BBBBB########################",
						layoutRemark: "R/T",
						layoutNote: "264KTS 132000 Ranger, 132000 Triari @ 9 days",
						layoutTroops: [0, 0, 132_000, 132_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 3s/4s (138K/138K) RT Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##GBGBGBG##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######----#BGBBBBBGB#SSPJ##----#BBBGBGBBB#MLPX##----##GBGBGBG##----##-----##BBBBB##-----##------#######------##---------#BBBBBB---##---------#BGGGBB---###--------#BGGBBB--#####-------#BBBBBB-########################",
						layoutRemark: "RT",
						layoutNote: "276KTS 138000 Ranger, 138000 Triari @ 11 days",
						layoutTroops: [0, 0, 138_000, 138_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 4s/4s (142K/142K) R/T Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGB-##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BGBBTBBBB#######----#BGBGBGBGB#SSPJ##----#BBBGBGBBB#MLPX##----##-BGBGB-##----##-----##BBBBB##-----##------#######-BBB--##---------#----BGB--##---------#BBBBBBB--###--------#BGGGGGB-#####-------#BBBBBBB########################",
						layoutRemark: "RT",
						layoutNote: "284KTS 142000 Ranger, 142000 Triari @ 13 days",
						layoutTroops: [0, 0, 142_000, 142_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " (134K) Scouts Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMJX##----#BEBEBEBEB#S---##----##BBEBEBB##----##-----##BBBBB##BBBBB##------#######-BEBEB##---------#----BBBBB##---------#----BEBEB###--------#----BBBB#####-------#----BBB########################",
						layoutRemark: "Scouts",
						layoutNote: "268KTS 134000 Scouts @ 4.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 134_000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 6s (120K) Arbs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEBEBEB##----##----#-BEBEBEB-#----##----#-BEBEBEB-#----#######-BEBTBEB-#######----#-BEBEBEB-#SSPJ##----#-BEBEBEB-#MLPX##----##BEBEBEB##S---##-----##BBBBB##BBBB-##------#######-EEEE-##---------#BBBBBBBBB##---------#BEEEEEEEB###--------#-BBBBBBB#####-------#-------########################",
						layoutRemark: "Arbs",
						layoutNote: "240KTS 120,000 Arbs @ 8.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 120_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 7s (132K) Arbs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBBBBBEB#SMPX##----#BEBEBEBEB#SDPJ##----##BBEBEBB##----##-----##BBBBB##-----##------#######BBBBB-##---------#---BEBEB-##---------#---BBBBB-###--------#---BEBEB#####-------#---BBBB########################",
						layoutRemark: "Arbs",
						layoutNote: "264KTS 130,000 Arbs @ 10.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 132_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 8s (140K) Arbs Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BEBEB-##----##----#BBBEBEBBB#----##----#BEBBBBBEB#----#######BEBETEBEB#######----#BEBBBBBEB#SSPJ##----#BBBEBEBBB#MLPX##----##-BEBEB-##----##-----##BBBBB##-----##------#######------##---------#BBBBBBB--##---------#BEBEBEB--###--------#BEBEBEB-#####-------#BBBBBBB########################",
						layoutRemark: "Arbs",
						layoutNote: "280KTS 140,000 Arbs @ 13 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 140_000, 0, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}, {
						layoutName: " 8s (136K) Praetor Portal",
						layoutString: "[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBBBBBZB#----#######BZBZTZBZB#######----#BZBBBBBZB#SPJX##----#BZBZBZBZB#SP--##----##BBZBZBB##----##-----##BBBBB##-----##------#######BBBBBB##---------#---BZZZZB##---------#---BBBBBB###--------#---BZZB-#####-------#---BBBB########################",
						layoutRemark: "Praetor",
						layoutNote: "272KTS 136,000 Praetor @ 12.5 days",
						layoutTroops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 136_000, 0, 0, 0, 0, 0, 0, 0],
						layoutResources: [0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000],
					}]

				};




	// GLOBAL VARIABLES
	const TroopScoreIndex = [1, 10, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 10, 10, 100, 100, 400, 1]; //ts per unit
	const troopmessage = "Not enough TS to kill this boss!";
	const ForestHillLootIndex = [360, 1050, 4500, 16_000, 33_000, 58_500, 118_400, 200_450, 300_000, 450_400]; //forest, hill loot
	const MountainLootIndex = [360, 1050, 4500, 16_000, 33_000, 58_500, 118_400, 200_450, 300_000, 450_400]; //mountain loot
	const CavernLootIndex = [0, 400, 1050, 4500, 15_000, 342_500, 60_000, 125_000, 210_000, 320_000, 462_000]; //cavern loot per lvl
	const BossDefenseLandIndex = [625, 3750, 25_000, 50_000, 125_000, 187_500, 250_000, 375_000, 562_500, 750_000]; //bosses defense value
	const BossDefenseWaterIndex = [425, 2500, 17_000, 33_000, 83_000, 125_000, 170_000, 250_000, 375_000, 500_000]; // bosses defense value for weakness type
	const BossMinimumTSIndex = [6, 20, 100, 500, 2000, 3500, 5000, 8000, 12_000, 15_000]; //minimum TS to send to a boss
	const numbs = [0, 0, 0];
	const TroopLootIndex = [0, 0, 10, 20, 10, 10, 5, 0, 15, 20, 15, 10, 0, 0, 0, 1500, 3000]; //troop loot
	const TroopAttackIndex = [10, 50, 30, 10, 25, 50, 70, 10, 40, 60, 90, 120, 50, 150, 3000, 1200, 12_000]; //troops attack value
	const isCavalry = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]; //which troop number is cav
	const isInfantry = [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //which troop number is inf
	const isMagic = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; //which troop number is magic
	const isArtillery = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]; //which troop number is artillery
	const ResearchBonusIndex = [0, 0.01, 0.03, 0.06, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5]; // res bonus to attack power per res rank
	const Res = [0, 1, 3, 6, 10, 15, 20, 25, 30, 35, 40, 45, 50]; //Research
	const TroopSpeedIndex = [0, 30, 20, 20, 20, 20, 20, 8, 10, 10, 10, 10, 30, 30, 5, 5, 5, 40];
	const FaithAttackIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	const FaithSpeedIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	const TS_type = [0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 0, 100, 400, ]; //Im confused by this
	const CombatResearchIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	const tpicdiv = ["guard32 trooptdcm", "bally32 trooptdcm", "ranger32 trooptdcm", "triari32 trooptdcm", "priest32 trooptdcm", "vanq32 trooptdcm", "sorc32 trooptdcm", "scout32 trooptdcm", "arbal32 trooptdcm", "praet32 trooptdcm", "horsem32 trooptdcm", "druid32 trooptdcm", "ram32 trooptdcm", "scorp32 trooptdcm", "galley32 trooptdcm", "sting32 trooptdcm", "wship32 trooptdcm", "senat32 trooptdcm"];
	const tpicdiv20 = ["guard20 trooptdcm", "bally20 trooptdcm", "ranger20 trooptdcm", "triari20 trooptdcm", "priest20 trooptdcm", "vanq20 trooptdcm", "sorc20 trooptdcm", "scout20 trooptdcm", "arbal20 trooptdcm", "praet20 trooptdcm", "horsem20 trooptdcm", "druid20 trooptdcm", "ram20 trooptdcm", "scorp20 trooptdcm", "galley20 trooptdcm", "sting20 trooptdcm", "wship20 trooptdcm", "senat20 trooptdcm"];
	//research lvl
	const TroopNameIndex = ["Guards", "Ballistas", "Rangers", "Triari", "Priestess", "Vanquishers", "Sorcerers", "Scouts", "Arbalists", "Praetors", "Horsemans", "Druids", "Rams", "Scorpions", "Galleys", "Stingers", "Warships", "Senator"];
	const buildings = {
		name: ["forester", "cottage", "storehouse", "quarry", "hideaway", "farmhouse", "cityguardhouse", "barracks", "mine", "trainingground", "marketplace", "townhouse", "sawmill", "stable", "stonemason", "mage_tower", "windmill", "temple", "smelter", "blacksmith", "castle", "port", "port", "port", "shipyard", "shipyard", "shipyard", "townhall", "castle"],
		bid: [448, 446, 464, 461, 479, 447, 504, 445, 465, 483, 449, 481, 460, 466, 462, 500, 463, 482, 477, 502, "467", 488, 489, 490, 491, 496, 498, 455, 467]
	};
	const bosses = {
		name: ["Cyclops", "Andar's Colosseum Challenge", "Dragon", "Romulus and Remus", "Gorgon", "GM Gordy", "Triton"],
		pic: ["cyclops32 mauto bostooltip tooltipstered", "andar32 mauto bostooltip tooltipstered", "dragon32 mauto bostooltip tooltipstered", "romrem32 mauto bostooltip tooltipstered", "gorgon32 mauto bostooltip tooltipstered", "gmgordy32 mauto bostooltip tooltipstered", "triton32 mauto bostooltip tooltipstered"]
	};

	let ibriafaith = 0;
	let ylannafaith = 0;
	let naerafaith = 0;
	let cyndrosfaith = 0;
	let domdisfaith = 0;
	let vexifaith = 0;
	let meriusfaith = 0;
	let evarafaith = 0; //alliance faiths
	let naera = 0;
	let vexemis = 0;
	let cyndros = 0;
	let ylanna = 0;


	let citytc;
	const today = new Date();
	const hidespf = false;
	let sum = true;
	let bdcountshow = true;
	let qbcshow = true;
	let cdata; //city data return
	let wdata; //world data
	let gwdata; // gfunky wolrd display data

	let pldata; //players list on server
	let poll2; //poll2data
	let pD;

	let city = {
		cid: 0,
		x: 0,
		y: 0,
		th: [0],
		cont: 0
	}; //current city data

	let bossinfo = {
		x: [],
		y: [],
		lvl: [],
		data: [],
		name: [],
		cont: [],
		distance: []
	};
	const key = "_`abcdefgh";



	const emptyspots = ",.;:#-T";
	
	let beentoworld = false;
	let dhruvboss = 0;
	let shrinePlayers = {
		name: [],
		ally: [],
		cities: []
	};
	let shrineCities = [];
	let buildingdata = [];
	let coofz;
	let coon;
	let cotgsettings;




		const options = {};


	setTimeout(function() {
		(function(open) {
			XMLHttpRequest.prototype.open = function() {
				this.addEventListener("readystatechange", function() {
					if (this.readyState != 4) {
						return;
					}
					const url = this.responseURL;

					if (url.indexOf('gWrd.php') != -1) {
						wdata = JSON.parse(this.response);
						gwdata = wdata.b;
						beentoworld = true;
						wdata = DecodeWorldData(wdata.a);
						bossnumber = wdata.bosses.length;
						if (bossnumber != dhruvboss) {
							dhruvboss = bossnumber;
							if (bossnumber > 60) {
								alert(`Bosses Spawned:${bossnumber} left`);

							}
						}
						getbossinfo();
					}
					if (url.indexOf('gPlA.php') != -1) {
						pldata = JSON.parse(this.response);
					}
					if (url.indexOf('plOp.php') != -1) {
						cotgsettings = JSON.stringify(this.response);
						////console.log(cotgsettings);
					}
					/*
                    if (url.indexOf('pD.php') != -1) {
                        const responseObject = JSON.parse(this.response);
                        const clc = responseObject.clc;
						////console.log(clc);
                    }
					*/

					if (url.indexOf('gFFc.php') != -1) {
						gFFc = JSON.parse(this.response);
					}
					if (url.indexOf('poll2.php') != -1) {


						if (poll2) {
							var saveclc = poll2.player.clc;
							var saveoga = poll2.OGA;
							var saveopt = poll2.player.OPT;
							clc = poll2.player.clc;
						}
						poll2 = JSON.parse(this.response);
						city.x = Number(poll2.city.x);
						city.y = Number(poll2.city.y);
						city.sts = poll2.city.sts;
						////console.log("poll2 STS",city.sts);
						city.cont = Number(poll2.city.co);
						coonoff = Number(poll2.city.coof);
						coonvalue();
						city.x = Number(poll2.city.cid % 65536);
						city.y = Number((poll2.city.cid - city.x) / 65536);
						city.cont = Number(Math.floor(city.x / 100) + 10 * Math.floor(city.y / 100));
						city.th = poll2.city.th;
						city.tc = poll2.city.tc;
						city.tt = poll2.city.tt;
						city.mo = poll2.city.mo;
						city.cid = poll2.city.cid;

						if ('opt' in poll2.player) {} else {
							poll2.player.opt = saveopt;
						}
						if ('OGA' in poll2) {

						} else {
							poll2.OGA = saveoga;
						}
						if ('bd' in poll2.city) {
							buildingdata= poll2.city.bd;
							makebuildcount();
						}
						if ('clc' in poll2.player) {

						} else {
							poll2.player.clc = saveclc;
						}
						cityCoords();
						checkPoll2Layout();
						updateattack();
						updatedef();
					}
					if (url.indexOf('gC.php') != -1) {
						cdata = JSON.parse(this.response);
						city = {};
						city.cid = cdata.cid;
						city.th = cdata.th;
						city.cg = cdata.cg;
						citytc = cdata.th;
						city.sts = cdata.sts;
						////console.log("GC STS",city.sts);
						buildingdata = cdata.bd;
						city.x = Number(cdata.x);
						city.y = Number(cdata.y);
						city.cont = Number(cdata.co);

						//////console.log('Coords: ' + city.x + ':' + city.y );
						city.mo = cdata.mo;
						setTimeout(function() {
							updateattack();
							updatedef();
							makebuildcount();
						}, 2000);

						coonvalue();

					}
					
				}, false);
				open.apply(this, arguments);
			};
		})(XMLHttpRequest.prototype.open);
		////console.log("Gfunky+ Has Loaded. Presented by Greety and Fact ");
	}, 8000);



	function cityCoords() {
	  const leftover = document.getElementById('citcoordspq');
	  const cityName = document.getElementById('qb23');
	  const cityCoordsSpan = document.createElement('SPAN');
	  const cityCoords = document.createTextNode(`${city.x}:${city.y}`);

	  if (typeof(leftover) != 'undefined' && leftover != null) {
		leftover.remove();
	  }

	  cityCoordsSpan.setAttribute('id', 'citcoordspq');
	  cityCoordsSpan.setAttribute('style', 'font-size: 12px; line-height: 28px;');
	  cityCoordsSpan.appendChild(cityCoords);
	  cityName.appendChild(cityCoordsSpan);

	  city.x = Number(city.cid % 65_536);
	  city.y = Number((city.cid - city.x) / 65_536);
	  city.cont = Number(Math.floor(city.x / 100) + 10 * Math.floor(city.y / 100));
	}


	function removeNonAlphaNumericCharacters(str) {
  // replace all non-alphanumeric characters with whitespace
  return str.replace(/[^a-zA-Z0-9\s]/g, " ");
}

function checkPoll2Layout() {
	if (poll2.city) {
		if (poll2.city && poll2.city.sts) {
			// remove the trailing [/ShareString] from poll2.city.sts and remove special characters
			const poll2String = removeNonAlphaNumericCharacters(poll2.city.sts.replace("[/ShareString]", ""));

  // iterate over each category in the gfunkyLayouts object
			for (const category in gfunkyLayouts) {
				if (gfunkyLayouts.hasOwnProperty(category)) {
				  // iterate over each object in the current category
					for (const layout of gfunkyLayouts[category]) {
						// remove special characters from the layoutString property
						const layoutString = removeNonAlphaNumericCharacters(layout.layoutString);

						// check if the poll2String matches the current object's layoutString property
						if (poll2String === layoutString) {
						  // create a new <span> element to display the layout name
						  const layoutSpan = document.createElement("span");
						  layoutSpan.style.fontSize = "10px"; // set the font size to 10px
						  layoutSpan.style.paddingLeft = "5px"; // add 5px padding to the left
						  layoutSpan.style.paddingRight = "5px"; // add 5px padding to the right
						  layoutSpan.style.float = "left"; // float the element to the left
						  layoutSpan.style.border = "3px inset tan"; // set the border to 3px inset tan
						  layoutSpan.style.borderRadius = "6px"; // set the border radius to 6px
						  layoutSpan.style.background = "#f3d298"; // set the background color to #f3d298
						  layoutSpan.textContent = layout.layoutName; // set the textContent to the layout name

						  // get the existing layoutSpan element, if it exists
						  const existingLayoutSpan = document.querySelector("#layoutNameSpan");
							if (existingLayoutSpan) {
								// update the textContent of the existing element
								if (existingLayoutSpan.textContent !== layoutSpan.textContent) {
									existingLayoutSpan.textContent = layoutSpan.textContent;
									////console.log(`Updated layout name to "${layout.layoutName}"`);
								}
							} else {
								// get the openOVLinplanner element and insert the layoutSpan before it
								const openOVLinplanner = document.querySelector("#openOVLinplanner");
								if (openOVLinplanner && openOVLinplanner.parentNode) {
									layoutSpan.id = "layoutNameSpan"; // set the ID of the new element
									openOVLinplanner.parentNode.insertBefore(layoutSpan, openOVLinplanner);
								////console.log(`Added layout name "${layout.layoutName}" before openOVLinplanner`);
								} else {
								//console.error(`Could not find element with id "openOVLinplanner" or its parent node`);
								}
							}
							return;
						} else {
						  // get the existing layoutSpan element, if it exists
						  const existingLayoutSpan = document.querySelector("#layoutNameSpan");
						  if (existingLayoutSpan) {
							// remove the existing layoutSpan element
								existingLayoutSpan.textContent = "Unknown Layout";
							////console.log(`Removed layout name "${existingLayoutSpan.textContent}"`);
						  }
						}
					}
				}
			}
		////console.log(`No match found between poll2String "${poll2String}" and gfunkyLayouts`);
		} else {
		  // get the existing layoutSpan element, if it exists
		  const existingLayoutSpan = document.querySelector("#layoutNameSpan");
		  if (existingLayoutSpan) {
			// remove the existing layoutSpan element
			existingLayoutSpan.textContent = "No Layout";
			////console.log(`Removed layout name "${existingLayoutSpan.textContent}"`);
		  }
		}
	}
}
// calls checkPoll2Layout every 5 seconds
	/*
	function alert(message) {
	  const alertEl = $('<div class="custom-alert"></div>').css({
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: '1rem',
		backgroundColor: '#fff',
		border: '1px solid #ccc',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
		display: 'none'
	  });
	  alertEl.text(message);
	  $('body').append(alertEl);

	  alertEl.fadeIn(500);

	  setTimeout(function() {
		alertEl.fadeOut(500, function() {
		  alertEl.remove();
		});
	  }, 5000);
	}
	*/





	//decoding world data in the new format
	function DecodeWorldData(data) {
		const DecodedData = {
			bosses: [],
			cities: [],
			ll: [],
			cavern: [],
			portals: [],
			shrines: []
		};
		const WorldDataFunky = data.split("|");
		const Index = WorldDataFunky[1].split("l");
		let CitiesIndex = Index[0]; //cities
		let ShrinesIndex = Index[1]; // Shrines
		let BossesIndex = Index[2]; // Bosses
		let LawlessIndex = Index[3]; //Lawless
		let CavernsIndex = Index[4]; //caverns
		let PortalsIndex = Index[5]; //portals
		const cities = WorldDataFunky[0].split("l");
		const shrines = WorldDataFunky[2].split("l");
		const bosses = WorldDataFunky[3].split("l");
		const lawless = WorldDataFunky[4].split("l");
		const caverns = WorldDataFunky[5].split("l");
		const portals = WorldDataFunky[6].split("l");
		let dat = 0;
		for (var i in bosses) {
			dat = `${Number(bosses[i]) + Number(BossesIndex)}`;
			BossesIndex = dat;
			DecodedData.bosses.push(`1${dat}`);
		}
		for (var i in cities) {
			dat = `${Number(cities[i]) + Number(CitiesIndex)}`;
			CitiesIndex = dat;
			DecodedData.cities.push(`2${dat}`);
			//	////console.log(dat);
		}
		for (var i in lawless) {
			dat = `${Number(lawless[i]) + Number(LawlessIndex)}`;
			LawlessIndex = dat;
			DecodedData.ll.push(`3${dat}`);
		}
		for (var i in caverns) {
			dat = `${Number(caverns[i]) + Number(CavernsIndex)}`;
			CavernsIndex = dat;
			DecodedData.cavern.push(`7${dat}`);
		}
		for (var i in portals) {
			dat = `${Number(portals[i]) + Number(PortalsIndex)}`;
			PortalsIndex = dat;
			DecodedData.portals.push(`8${dat}`);
		}
		for (var i in shrines) {
			dat = `${Number(shrines[i]) + Number(ShrinesIndex)}`;
			ShrinesIndex = dat;
			DecodedData.shrines.push(`9${dat}`);
		}
		return DecodedData;
	}
	//getting date
	function getFormattedDate(date) {
		const year = date.getFullYear();
		let month = (1 + date.getMonth()).toString();
		month = month.length > 1 ? month : `0${month}`;
		let day = date.getDate().toString();
		day = day.length > 1 ? day : `0${day}`;
		return `${month}/${day}/${year}`;
	}

	function roundToTwo(num) {
		return +(`${Math.round(`${num}e+2`)}e-2`);
	}

	function errormsgBR(a, b) {
		$(a).show();
		$(b).animate({
			opacity: 1,
			bottom: '+10px'
		}, 'slow');
		errormsgBRhide(a, b);
	}

	function errormsgBRhide(a, b) {
		setTimeout(function() {
			$(b).animate({
				opacity: 0,
				bottom: "-10px"
			}, 'slow');
			$(a).fadeOut('slow');
		}, 5000);
		setTimeout(function() {
			$(a).remove();
		}, 6000);
	}
	let errmBR = 0;
	const errormessage1 = 'Error, you need at least ';
	let errz = 0;

	function errorgo(errorMessage) {
		errz++;
		const b = `errBR${errz}`;
		const c = `#${b}`;
		const d = `#${b} div`;
		const errorHTML = `<tr ID = "${b}"><td><div class = "errBR">${errorMessage}<div></td></tr>`;
		$("#errorBRpopup").append(errorHTML);
		$(c).show();
		$(d).animate({
			opacity: 1,
			bottom: "+10px"
		}, 'slow');
		setTimeout(function() {
			$(d).animate({
				opacity: 0,
				bottom: "-10px"
			}, 'slow');
			$(c).fadeOut("slow");
		}, 5000);
		setTimeout(function() {
			$(c).remove();
		}, 6000);
	}

	function errorgo(errorMessage) {
		errmBR++;
		const b = `errBR${errmBR}`;
		const c = `#${b}`;
		const d = `#${b} div`;
		const errorHTML = `<tr ID = "${b}"><td><div class = "errBR">${errorMessage}<div></td></tr>`;
		$("#errorBRpopup").append(errorHTML);
		$(c).show();
		$(d).animate({
			opacity: 1,
			bottom: "+10px"
		}, 'slow');
		setTimeout(function() {
			$(d).animate({
				opacity: 0,
				bottom: "-10px"
			}, 'slow');
			$(c).fadeOut("slow");
		}, 5000);
		setTimeout(function() {
			$(c).remove();
		}, 6000);
	}
	String.prototype.replaceAt = function(index, char) {
		return this.substr(0, index) + char + this.substr(index + char.length);
	};
	String.prototype.decrypt = function() {
		let a = this;
		for (const i in a) {
			for (const j in key) {
				if (a.charAt(i) === key.charAt(j)) {
					a = a.replaceAt(i, j);
				}
			}
		}
		return a;
	};
	$("#ui-id-79").text("My Items");
	//getting faith and research bonuses
	$().ready(function() {
		$.ajax({
			url: 'includes/gaLoy.php',
			type: 'POST',
			async: true,
			success(data) {
				const ldata = JSON.parse(data);
				setloyal(ldata);
			}
		});

		function setloyal(ldata) {
			const faithValues = {
				1: evarafaith,
				2: vexifaith,
				3: domdisfaith,
				4: cyndrosfaith,
				5: meriusfaith,
				6: ylannafaith,
				7: ibriafaith,
				8: naerafaith
			};
			$.each(ldata.t, function(key, value) {
				switch (key) {
					case 1:
						$.each(this, function(key, value) {
							faithValues[1] += this.f;
						});
						break;
					case 2:
						$.each(this, function(key, value) {
							faithValues[2] += this.f;
						});
						break;
					case 3:
						$.each(this, function(key, value) {
							faithValues[3] += this.f;
						});
						break;
					case 4:
						$.each(this, function(key, value) {
							faithValues[4] += this.f;
						});
						break;
					case 5:
						$.each(this, function(key, value) {
							faithValues[5] += this.f;
						});
						break;
					case 6:
						$.each(this, function(key, value) {
							faithValues[6] += this.f;
						});
						break;
					case 7:
						$.each(this, function(key, value) {
							faithValues[7] += this.f;
						});
						break;
					case 8:
						$.each(this, function(key, value) {
							faithValues[8] += this.f;
						});
						break; // ... and so on for all the other Index
				}
			});
			ylannafaith = Math.min(faithValues[6], 100);
			naerafaith = Math.min(faithValues[8], 100);
			vexifaith = Math.min(faithValues[2], 100);
			cyndrosfaith = Math.min(faithValues[4], 100);
			domdisfaith = Math.min(faithValues[3], 100);
			ibriafaith = Math.min(faithValues[7], 100);
			evarafaith = Math.min(faithValues[1], 100);
			meriusfaith = Math.min(faithValues[5], 100);
			const research = cotg.player.research();
			//attack power faith bonuses
			setTimeout(function() {
				FaithAttackIndex[0] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[29]]) / 100); //guards
				FaithAttackIndex[1] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[42]]) / 100); //ballista
				FaithAttackIndex[2] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[30]]) / 100); //ranger
				FaithAttackIndex[3] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[31]]) / 100); //triari
				FaithAttackIndex[4] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[32]]) / 100); //priestess
				FaithAttackIndex[5] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[33]]) / 100); //vanq
				FaithAttackIndex[6] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[34]]) / 100); //sorc
				FaithAttackIndex[7] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[46]]) / 100); //scout
				FaithAttackIndex[8] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[35]]) / 100); //arb
				FaithAttackIndex[9] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[36]]) / 100); //pra
				FaithAttackIndex[10] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[37]]) / 100); //horse
				FaithAttackIndex[11] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[38]]) / 100); //druid
				FaithAttackIndex[12] += ((Number(cyndrosfaith) * 0.5) / 100) + (Number(Res[research[39]]) / 100); //ram
				FaithAttackIndex[13] += ((Number(cyndrosfaith) * 0.5) / 100) + (Number(Res[research[41]]) / 100); //scorp
				FaithAttackIndex[14] += ((Number(ylannafaith) * 0.5) / 100) + (Number(Res[research[44]]) / 100); //galley
				FaithAttackIndex[15] += ((Number(ylannafaith) * 0.5) / 100) + (Number(Res[research[43]]) / 100); //stinger
				FaithAttackIndex[16] += ((Number(cyndrosfaith) * 0.5) / 100) + (Number(Res[research[45]]) / 100); //warship
				//faith travel speed bonuses
				FaithSpeedIndex[1] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[12]]) / 100);
				FaithSpeedIndex[2] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				FaithSpeedIndex[3] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				FaithSpeedIndex[4] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				FaithSpeedIndex[5] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				FaithSpeedIndex[6] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				FaithSpeedIndex[7] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[11]]) / 100);
				FaithSpeedIndex[8] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				FaithSpeedIndex[9] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				FaithSpeedIndex[10] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				FaithSpeedIndex[11] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				FaithSpeedIndex[12] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[12]]) / 100);
				FaithSpeedIndex[13] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[12]]) / 100);
				FaithSpeedIndex[14] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[13]]) / 100);
				FaithSpeedIndex[15] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[13]]) / 100);
				FaithSpeedIndex[16] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[13]]) / 100);
				FaithSpeedIndex[17] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[14]]) / 100);
			}, 2000);
		}
		setTimeout(function() {
			const cid = $("#cityDropdownMenu").val();
			const dat = {
				a: cid
			};
			$.ajax({
				url: 'includes/gC.php',
				type: 'POST',
				async: true,
				data: dat
			});
		}, 5000);
	});
	/* War Councillors Pages and CSS Changes */
	/* $(function () {

        // Create the export button element
        var gexportButton = $("<button>", {
            "class": "greenb regButton",
            "style": "font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 60px;",
            html: "<div class='button'><a href='#' id='grankingsexportbutton' role='button' style='color:#c7e2e7;'>Export</a></div>"
        });
        // Insert the export button before the rankingsXbutton element
        $("#rankingsXbutton").before(gexportButton);
    });
	*/
	$().ready(function() {
		function hidecities() {
			$("#shrineTab tr").each(function() {
				if ($(this).attr("data") == "city") {
					$(this).hide();
				}
			});
		}
		//showing cities in shrine planner
		function showcities() {
			$("#shrineTab tr").each(function() {
				if ($(this).attr("data") == "city") {
					$(this).show();
				}
			});
		}
		//Shrine Section 2
		const shrinebut = "<button class='regButton greenb' id='shrineP' style='width: 98%;margins: 1%;'>Shrine Planner</button>";
		$("#inactiveshrineInfo").before(shrinebut);
		$("#shrineP").click(function() {
			if (beentoworld) {

				const players = [];
				const coords = $("#coordstochatGo3").attr("data");
				const shrinex = parseInt(coords);
				const shriney = Number(coords.match(/\d+$/)[0]);
				const shrineContinent = Number(Math.floor(shrinex / 100) + 10 * Math.floor(shriney / 100));
				for (var i in wdata.cities) {
					var tempx = Number(wdata.cities[i].substr(8, 3)) - 100;
					var tempy = Number(wdata.cities[i].substr(5, 3)) - 100;
					const cont = Number(Math.floor(tempx / 100) + 10 * Math.floor(tempy / 100));
					if (cont == shrineContinent) {
						var dist = Math.sqrt((tempx - shrinex) * (tempx - shrinex) + (tempy - shriney) * (tempy - shriney));
						//////console.log("dist");
						if (dist < 10) {
							var l = Number(wdata.cities[i].substr(11, 1));

							var pid = Number(wdata.cities[i].substr(12, l));
							var pname = pldata[pid];
							////console.log(pname);
							//////console.log(shrinePlayers.name.indexOf(pname), pname, shrinePlayers.name);
							var csn = [3, 4, 7, 8];
							if (csn.indexOf(Number(wdata.cities[i].charAt(4))) > -1) {
								shrineCities.push(["castle", pname, 0, tempx, tempy, dist, "0", 0, 0, 0]);
							} else {
								shrineCities.push(["city", pname, 0, tempx, tempy, dist, "0", 0, 0, 0]);
							}
						}
					}
				}
				shrineCities.sort(function(a, b) {
					return a[5] - b[5];
				});
				let gfunkyplanwin = `<div id='gfunkyshrinePopup' class='longmenu ui-draggable ui-resizable' style=' width:70% !important; left: 360px; z-index: 3000;'>
				<div class='longwindowbgr'>
				<div class='lngwinbgtop'></div>
				<div class='lngwinbgcent'></div>
				<div class='lngwinbgbott'></div>
				</div>
				<div class='longwindowcontent' style='height:98%; width:98%;'>
				<div class='popUpBar ui-draggable-handle'>
				<span class='ppspan'>Gfunky's Shrine Planner</span>
				<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 100px;'>
				<div class='button'>
				<a id ='hidec' role='button' style='color:#e1c190;'>Hide Cities</a>
				</div>
				</button>
				<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 100px;'>
				<div class='button'>
				<a id ='addcity' role='button' style='color:#e1c190;'>Add Cities</a>
				</div>
				</button>
				<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 100px;'>
				<div class='button'>
				<a id ='exportshrine' role='button' style='color:#c7e2e7;'>Export</a>
				</div>
				</button>
				<button id='sumX' class='xbutton' onclick=$('#gfunkyshrinePopup').remove()>
				<div id='xbuttondiv'>
				<div>
				<div id='centxbuttondiv'></div>
				</div>
				</div>
				</button>
				</div>
				<div id='shrinediv' class='beigemenutable scroll-pane' style='background:none;border: none;padding: 0px;height: AUTO !important;max-height: 85%; margin-left: auto; margin-right:right; border-radius: 6px;border: ridge #99805D;'></div>
				</div>
				</div>`;
				for (var i in shrineCities) {
					if (i < 101) {
						var pname = shrineCities[i][1];
						if (players.indexOf(pname) == -1) {
							players.push(pname);
							$.ajax({
								url: 'includes/gPi.php',
								type: 'POST',
								async: false,
								data: {
									a: pname
								},
								success(data) {
									var pinfo = JSON.parse(data);
									shrinePlayers.name.push(pinfo.player);
									shrinePlayers.ally.push(pinfo.a);
									shrinePlayers.cities.push(pinfo.h);
									//////console.log(pinfo.a,pinfo.h,pinfo.player);
								}
							});
						}
					}
				}
				setTimeout(function() {
					$("#reportsViewBox").after(gfunkyplanwin);
					$('#shrinePopup').draggable({
						handle: '.popUpBar',
						containment: 'window',
						scroll: false,
					});
					$('#shrinePopup').resizable();
					if (!localStorage.getItem('hidecities')) {
						localStorage.setItem('hidecities', '0');
					}
					if (localStorage.getItem('hidecities') === '1') {
						$('#hidec').html('Show Cities');
					}
					$("#hidec").click(function() {
						if (localStorage.getItem("hidecities") == "0") {
							hidecities();
							localStorage.setItem("hidecities", "1");
							$("#hidec").html("Show Cities");
						} else if (localStorage.getItem("hidecities") == "1") {
							showcities();
							localStorage.setItem("hidecities", "0");
							$("#hidec").html("Hide Cities");
						}
					});
					updateshrine();
					let addcitypop = `<div id='addcityPopup' class='popUpBox ui-resizable ui-draggable' style='z-index:200002; width:80%;!important'>
					<div class='ppbwinbgr' >
					<div class='ppbwintop' style='position: relative !important; height:150px !important;'></div>
					<div class='ppbwincent' style='position: relative !important; height:auto !important;'></div>
					<div class='ppbwinbott' style='position: relative !important; height:150px !important;'></div>
					</div>
					<div class='ppbwincontent' style='width: auto;'>
					<div class='popUpBar ui-draggable-handle' style='margin-top:7px !Important;'>
					<span class='ppspan'>Add  Cities</span>
					<button id='sumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#addcityPopup').remove()>
					<div id='xbuttondiv'>
					<div>
					<div id='centxbuttondiv'></div>
					</div>
					</div>
					</button>
					</div>
					<div class='popUpWindow' style='margin-left: auto; margin-right:auto;'>
					<div>
					<table>
					<td>X: <input id='addx' type='number' style='width: 35px;height: 22px;font-size: 10px;'></td>
					<td>Y: <input id='addy' type='number' style='width: 35px;height: 22px;font-size: 10px;'></td>
					<td>Score: <input id='addscore' type='number' style='width: 45px;height: 22px;font-size: 10px;'></td>
					<td>Type:
					<select id='addtype' class='greensel' style='font-size: 15px !important;height:30px;'>
					<option value='city'>City</option>
					<option value='castle'>Castle</option>
					</select>
					</td>
					<td>
					<button id='addadd' class='greenb'>Add</button>
					</td>
					</table>
					</div>
					</div>
					</div>`;
					$("#addcity").click(function() {
						$("body").append(addcitypop);
						$("#addcityPopup").draggable({
							handle: ".popUpBar",
							containment: "window",
							scroll: false
						});
						$("#addadd").click(function() {
							tempx = $("#addx").val();
							tempy = $("#addy").val();
							dist = Math.sqrt((tempx - shrinex) * (tempx - shrinex) + (tempy - shriney) * (tempy - shriney));
							const temp = [$("#addtype").val(), "Poseidon", "Atlantis", tempx, tempy, dist, "1", $("#addscore").val(), "Hellas", "1"];
							shrineCities.push(temp);
							shrineCities.sort(function(a, b) {
								return a[5] - b[5];
							});
							updateshrine();
							$("#addcityPopup").remove();
						});
					});


				}, 2000);
				return;
			}
			alert("Press World Button");
		});
		//updating shrine enlightment list
		function updateshrine() {
			let shrinetab = "<table id='shrineTab'>";
			shrinetab += "<thead>";
			shrinetab += "<th colspan='3'>Change</th>";
			shrinetab += "<th>Rank</th>";
			shrinetab += "<th >%</th>";
			shrinetab += "<th>Dist.</th>";
			shrinetab += "<th colspan='2'>Player</th>";
			shrinetab += "<th colspan='2'>City</th>";
			shrinetab += "<th>Coords</th>";
			shrinetab += "<th colspan='3'>Alliance</th>";
			shrinetab += "<th>Score</th>";
			shrinetab += "<th>Type</th>";
			shrinetab += "</thead>";
			shrinetab += "<tbody>";
			var ccounter = 0;
			const w = [];
			let wtot = 0;
			for (var i in shrineCities) {
				if (i > 0) {
					var k = shrinePlayers.name.indexOf(shrineCities[i][1]);
					//////console.log(k, shrinePlayers);
					for (const j in shrinePlayers.cities[k]) {
						if (shrineCities[i][3] == shrinePlayers.cities[k][j].b && shrineCities[i][4] == shrinePlayers.cities[k][j].c) {
							shrineCities[i][2] = shrinePlayers.cities[k][j].h;
							if (shrineCities[i][9] == 0) {
								shrineCities[i][7] = shrinePlayers.cities[k][j].a;
							}
							shrineCities[i][8] = shrinePlayers.ally[k];
						}
					}
					if (shrineCities[i][0] == "castle") {
						ccounter++;
						if (ccounter < 17) {
							w[ccounter] = shrineCities[i][7] / shrineCities[i][5];
							wtot += shrineCities[i][7] / (shrineCities[i][5]);
						}
					}
				}
			}
			for (var i in w) {
				w[i] = Math.round(w[i] / wtot * 100);
			}
			//////console.log(shrineCities);
			var ccounter = 0;
			for (var i in shrineCities) {
				if (i > 0) {
					var cid = shrineCities[i][4] * 65_536 + Number(shrineCities[i][3]);
					if (shrineCities[i][0] == "castle") {
						ccounter++;
						if (ccounter < 17) {
							if (shrineCities[i][6] == "0") {
								shrinetab += "<tr style='color:purple;'>";
								shrinetab += "<td colspan='3'>";
								shrinetab += "<button data='" + i + "' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>";
								shrinetab += "<button id='" + i + "' data='castle' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding-top: 3px;border-radius: 4px;'>City</button>";
								shrinetab += "<button data='" + i + "' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>";
								shrinetab += "<button data='" + i + "' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>";
								shrinetab += "</td>";
								shrinetab += "<td>" + ccounter + "</td>";
								shrinetab += "<td>" + w[ccounter] + "% " + "</td>";

							} else {
								shrinetab += "<tr style='color:green;'>";
								shrinetab += "<td colspan='3'>";
								shrinetab += "<button data='" + i + "' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>";
								shrinetab += "<button id='" + i + "' data='castle' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding-top: 3px;border-radius: 4px;'>City</button>";
								shrinetab += "<button data='" + i + "' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>";
								shrinetab += "<button data='" + i + "' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>";
								shrinetab += "</td>";
								shrinetab += "<td>" + ccounter + "</td>";
								shrinetab += "<td>" + w[ccounter] + "% " + "</td>";

							}
						} else if (ccounter >= 17 && ccounter < 21) {
							shrinetab += "<tr>";
							shrinetab += "<td colspan='3'>";
							shrinetab += `<button data='${i}' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>`;
							shrinetab += `<button id='${i}' data='castle' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding-top: 3px;border-radius: 4px;'>City</button>`;
							shrinetab += `<button data='${i}' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>`;
							shrinetab += `<button data='${i}' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>`;
							shrinetab += "</td>";
							shrinetab += `<td>${ccounter}</td>`;
							shrinetab += "<td></td>";
						}
					} else {
						if (shrineCities[i][6] == "0") {
							shrinetab += "<tr style='color:grey;' data='city'>";
							shrinetab += "<td colspan='3'>";
							shrinetab += "<button data='" + i + "' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>";
							shrinetab += "<button id='" + i + "' data='city' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding: 3px;border-radius: 4px;width:45px;'>Castle</button>";
							shrinetab += "<button data='" + i + "' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>";
							shrinetab += "<button data='" + i + "' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>";
							shrinetab += "</td>";
							shrinetab += "<td></td>";
							shrinetab += "<td></td>";

						} else {
							shrinetab += "<tr style='color:#74A274;'>";
							shrinetab += "<td colspan='3'>";
							shrinetab += "<button data='" + i + "' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>";
							shrinetab += "<button id='" + i + "' data='city' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding: 3px;border-radius: 4px;width:45px;'>Castle</button>";
							shrinetab += "<button data='" + i + "' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>";
							shrinetab += "<button data='" + i + "' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>";
							shrinetab += "</td>";
							shrinetab += "<td></td>";
							shrinetab += "<td></td>";

						}
					}
					shrinetab += "<td>" + roundToTwo(shrineCities[i][5]) + "</td>";
					shrinetab += "<td colspan='2' class='playerblink'>" + shrineCities[i][1] + "</td>";
					shrinetab += "<td colspan='2'>" + shrineCities[i][2] + "</td>";
					shrinetab += "<td class='coordblink shcitt' data='" + cid + "'>" + shrineCities[i][3] + ":" + shrineCities[i][4] + "</td>";
					shrinetab += "<td colspan='3' class='allyblink'>" + shrineCities[i][8] + "</td>";
					shrinetab += "<td>" + shrineCities[i][7] + "</td>";
					shrinetab += "<td>" + shrineCities[i][0] + "</td>";

					shrinetab += "</tr>";
					if (ccounter === 20) {
						break;
					}
				}
			}
			shrinetab += "</tbody>";
			shrinetab += "</table>";
			$("#shrinediv").html(shrinetab);
			$("#shrineTab td").css("text-align", "center");
			if (localStorage.getItem("hidecities") == "1") {
				hidecities();
				//////console.log("hiding");
			}
			$(".shrinechange").click(function() {
				if ($(this).attr("data") == "castle") {
					shrineCities[$(this).attr("id")][0] = "city";
				} else {
					shrineCities[$(this).attr("id")][0] = "castle";
				}
				if (shrineCities[$(this).attr("id")][6] == "0") {
					shrineCities[$(this).attr("id")][6] = 1;
				} else {
					shrineCities[$(this).attr("id")][6] = 0;
				}
				updateshrine();
			});
			$(".shrineremove").click(function() {
				shrineCities.splice($(this).attr("data"), 1);
				updateshrine();
			});
			$(".shrine7pt").click(function() {
				if (shrineCities[$(this).attr("data")][7] != 7) {
					shrineCities[$(this).attr("data")][7] = 7;
					shrineCities[$(this).attr("data")][9] = 1;
					shrineCities[$(this).attr("data")][6] = 1;
				} else {
					shrineCities[$(this).attr("data")][9] = 0;
					shrineCities[$(this).attr("data")][6] = 0;
				}
				updateshrine();
			});
			$(".shrine10k").click(function() {
				if (shrineCities[$(this).attr("data")][7] != 10000) {
					shrineCities[$(this).attr("data")][7] = 10000;
					shrineCities[$(this).attr("data")][9] = 1;
					shrineCities[$(this).attr("data")][6] = 1;
				} else {
					shrineCities[$(this).attr("data")][9] = 0;
					shrineCities[$(this).attr("data")][6] = 0;
				}
				updateshrine();
			});
			// export shrine planner
			$("#exportshrine").click(function(event) {
				//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
				const outputFile = `ShrinePlanner${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
				// CSV
				exportTableToCSV(document.getElementById('shrineTab'), outputFile);
			});
			const shrinetabsort = document.getElementById('shrineTab');
			sorttable.makeSortable(shrinetabsort);
		}
		/*


        WAR COUNC Section - Primary


			WAR COUNC BUTTONS
				buttons
        */
		const returnAllbut = "<button id='returnAllb' style='right: 35.6%; margin-top: 55px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Return All</button>";
		const raidbossbut = "<button id='raidbossGo' style='left: 65%;margin-left: 10px;margin-top: 15px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Boss Hunter</button>";
		const attackbut = "<button id='attackGo' style='margin-left: 25px;margin-top: 55px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Attack Scheduler</button>";
		const defbut = "<button id='defGo' style='left: 65%;margin-left: 10px;margin-top: 55px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Defense Scheduler</button>";
		const quickdefbut = "<button id='quickdefCityGo' style='width:96%; margin-top:2%; margin-left:2%;' class='regButton greenbuttonGo greenb'> Quick Reinforcements</button>";
		const neardefbut = "<button id='ndefGo' style='left: 4%;margin-left: 3px;margin-top: 95px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'> Nearest Defense</button>";
		const totaloffbut = "<button id='toffGo' style='right: 35.6%; margin-top: 95px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'> Offensive list</button>";
		const totaldefbut = "<button id='tdefGo' style='left: 65%;margin-top: 95px;margin-left: 10px;width: 150px;height: 30px !important;font-size: 12px !important;position: absolute;' class='regButton greenb'> Defensive list</button>";
		const addtoatt = "<button id='addtoAtt' style='margin-left: 7%;margin-top: -5%;width: 40%;height: 26px !important; font-size: 9px !important;' class='regButton greenb'>Add to Attack Scheduler</button>";
		const addtodef = "<button id='addtoDef' style='margin-left: 7%;width: 40%;height: 26px !important; font-size: 9px !important;' class='regButton greenb'>Add to Defense Scheduler</button>";
		//Boss Tab
		const wartabs = [{
    id: 'bosshuntab',
    ariaControls: 'warBossmanager',
    text: 'Boss Hunter',
    href: '#warBossmanager'
  },
  {
    id: 'attacktab',
    ariaControls: 'warAttackmanager',
    text: 'Attack Scheduler',
    href: '#warAttackmanager'
  },
  {
    id: 'deftab',
    ariaControls: 'warDefmanager',
    text: 'Defense Scheduler',
    href: '#warDefmanager'
  },
  {
    id: 'neardeftab',
    ariaControls: 'warNdefmanager',
    text: 'Nearby Def',
    href: '#warNdefmanager'
  },
  {
    id: 'totalofftab',
    ariaControls: 'warToffmanager',
    text: 'Offensive TS',
    href: '#warToffmanager'
  },
  {
    id: 'totaldeftab',
    ariaControls: 'warTdefmanager',
    text: 'Defensive TS',
    href: '#warTdefmanager'
  },
];

let tabsHTML = '';

// Split the wartabs array into two arrays
const firstThreeTabs = wartabs.slice(0, 2);
const lastThreeTabs = wartabs.slice(2);

// Generate HTML for the first 3 tabs
firstThreeTabs.forEach(({
  id,
  ariaControls,
  text,
  href
}) => {
  tabsHTML += `
        <li id="${id}" class="ui-state-default" role="tab" tabindex="-1" aria-controls="${ariaControls}" aria-labeledby="ui-id-20" aria-selected="false" aria-expanded="false" style='height:21px;'>
          <a href="${href}" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-20">${text}</a>
        </li>
    `;
});

// Add a line break
tabsHTML += '<br>';

// Generate HTML for the last 3 tabs
lastThreeTabs.forEach(({
  id,
  ariaControls,
  text,
  href
}) => {
  tabsHTML += `
        <li id="${id}" class="ui-state-default" role="tab" tabindex="-1" aria-controls="${ariaControls}" aria-labeledby="ui-id-20" aria-selected="false" aria-expanded="false" style='height:21px;'>
          <a href="${href}" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-20">${text}</a>
        </li>
    `;
});


		let bosstabbody = `
		  <div id='warBossmanager' aria-labeledby='ui-id-21' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none; overflow:auto;'>
			<div id='fpdcdiv3' style='margin-left: auto;margin-right: auto;font-family: trojan;font-style: italic; font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;'>Gfunky's Boss Hunter</div>
			<br>
			<div id='bossbox' class='beigemenutable scroll-pane' style='width: 96%; height: AUTO !important;max-height: 50%; margin-left: auto; margin-right: auto; border: 3px ridge #886f53; border-radius: 6px;'></div>
			<br>
			<div id='idletroops' class='beigemenutable scroll-pane' style='width: 80%; margin-left: auto; margin-right: auto; border-radius: 6px; border: 3px ridge #99805D;'></div>
			<br>
			<div style='text-align:center;'>
			  <button id='refreshboss' class='regButton greenb' style='border-radius:6px; width:30%;'>Refresh Bosses</button>
			</div>
		  </div>
		`;




		//Attack Page body

       const attackTabBody = `
		  <div id='warAttackmanager' aria-labeledby='ui-id-22' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none;overflow:auto;'>
			<div id='fpdcdiv4'  style='margin-left: auto;margin-right: auto;font-family: trojan;font-style: italic; font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;'>Gfunky's Attack Scheduler</div>
			<div id='orders' class='beigemenutable scroll-pane' style='width: 53%;; float:left; margin-left: auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D;'></div>
			<div id='attackbox' class='beigemenutable scroll-pane' style='width: 53%; height: 57%; float:left; margin-left: auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D;'>
			  <table>
				<thead>
				  <th>Target #</th>
				  <th>X</th>
				  <th>Y</th>
				  <th>Type</th>
				</thead>
				<tbody>
				  ${Array.from({ length: 15 }, (_, i) => i).map(i => `
					<tr>
					  <td>Target ${i + 1}</td>
					  <td><input id='t${i+1}x' type='number' style='width: 85%'></td>
					  <td><input id='t${i+1}y' type='number' style='width: 85%'></td>
					  <td>
						<select id='type${i+1}' class='greensel' style='font-size: 12px !important;width:95%; border-radius:6px;'>
						  <option value='0'>Fake</option>
						  <option value='1'>Real</option>
						</select>
					  </td>
					</tr>
				  `).join('')}
				</tbody>
			  </table>
			</div>
			<div id='picktype' class='beigemenutable scroll-pane' style='width: 43%;height: 35%;border-radius: 6px;border: 3px ridge #99805D; margin-left: auto;margin-right: auto; '></div>
			<table style='font-size: 16px;margin-left: auto;margin-right: auto;border: 3px ridge #886f53;border-radius: 6px;width: 44%;background: #e2cbac;'>
			<th colspan='2' style='font-size:12;font-weight: bold;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;color: #e1c190;border: 3px ridge #45392a;border-radius: 9px;font-family: trojan;font-style: italic;'> Attack Settings: </th>

			 <tr>
			  <td style='text-align:center;'>
				  <span>% of Troops:</span>
				</td>
				<td><input id='perc' type='number' style='width: 70%;text-align: center;font-size: 15px;'> %</td>
				</tr>
			  <tr>

				<td style='text-align:center;'>
				 <span>Set Reals as: </span>
				</td>
				<td>
				  <select id='realtype' class='greensel' style='text-align: center; font-size: 12px !important;width:95%;height:30px; border-radius:6px'>
					<option value='0'>Assault</option>
					<option value='1'>Siege</option>
					<option value='2'>Plunder</option>
					<option value='3'>Scout</option>
				  </select>
				</td>
				</tr>
				   <tr>
				   <td style='text-align:center;'>
				 <span>Set Fakes as: </span>
				</td>
				 <td>
				  <select id='faketype' class='greensel' style='text-align: center;font-size: 12px !important;width:95%;height:30px; border-radius:6px'>
					<option value='0'>Assault</option>
					<option value='1' selected>Siege</option>
					<option value='2'>Plunder</option>
					<option value='3'>Scout</option>
				  </select>
				</td>
			   </tr>

			</table>

			  <div style="width:99%;">

			<table style="float:left;width:54.5%;font-size: 16px;margin-left: auto;margin-right: auto;border: 3px ridge #886f53;border-radius: 6px;background: #f3d298;">
			<th colspan='2' style='font-size:12;font-weight: bold;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;color: #e1c190;border: 3px ridge #45392a;border-radius: 9px;font-family: trojan;font-style: italic;'>Pre Attack Settings</th>
			<tr style='text-align:center; font-size:12px;'>
			  <td style='text-align: center;'><input id='retcheck' class='clsubopti' type='checkbox' checked > Return Troops</td>
			  <td style='text-align: center;'><input id='retHr' type='number' style='width: 20px' value='2'> Hrs Before</td>
			</tr>
		  </table>

		  <table style="float:right;width:44.5%;font-size: 16px;margin-left: auto;margin-right: auto;border: 3px ridge #886f53;border-radius: 6px;background: #ebdfc5;">
			<th colspan='5' style='font-size:12;font-weight: bold;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;color: #e1c190;border: 3px ridge #45392a;border-radius: 9px;font-family: trojan;font-style: italic;'>Attack Time</th>
			<tr style='text-align:center; font-size:12px;'>
			  <td style='text-align: center;'>Hr</td>
			  <td style='text-align: center;'>Min</td>
			  <td style='text-align: center;'>Sec</td>
			  <td style='text-align: center;' colspan='2'>Date</td>
			</tr>
			<tr style='text-align:center; font-size:12px;'>
			  <td style='text-align: center;'><input id='attackHr' type='number' style='width: 35px;height: 22px;font-size: 10px;' value='10'></td>
			  <td style='text-align: center;'><input id='attackMin' style='width: 35px;height: 22px;font-size: 10px;' type='number' value='00'></td>
			  <td style='text-align: center;'><input style='width: 35px;height: 22px;font-size: 10px;' id='attackSec' type='number' value='00'></td>
			  <td colspan='2' style='text-align: center;'><input style='width:90px;height: 22px;text-align: center;' id='attackDat' type='text' value='00/00/0000'></td>
			</tr>
		  </table>
		</div>
		<br>
		<br>
		<br>
			<table style='width: 98%;margin-left: auto; margin-right: auto;'>
				<tr>
				  <td style='width: 20%'>
					<button id='Attack' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Set Attack</button>
				  </td>
				  <td style='width: 20%'>
					<button id='ClearAttack' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Clear Data</button>
				  </td>
				  <td style='width: 20%'>
					<button id='Aexport' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Export Orders</button>
				  </td>
				  <td style='width: 20%'>
					<button id='Aimport' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Import Orders</button>
				  </td>
				</tr>

			</table>
		  </div>
		</div>`;


			var deftabbbody = `
  <div id='warDefmanager' aria-labeledby='ui-id-21' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none; overflow:auto;'>
    <div id='fpdcdiv5' style='margin-left: auto;margin-right: auto;font-family: trojan;font-style: italic; font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;'>
      Gfunky's Defense Sender
    </div>
    <div>
      <p style='font-size: 10px;'>Defense Sender will split all the troops you choose to send according to the number of targets you input.</p>
    </div>
    <div id='defbox' class='beigemenutable scroll-pane' style='width: 48%; height: AUTO !important;max-height: 85%; float:left; margin-left: auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D'>
      <table>
        <thead>
          <th></th>
          <th>X</th>
          <th>Y</th>
        </thead>
        <tbody>
          ${Array.from({ length: 14 }, (_, i) =>
            `<tr>
              <td>Target ${i + 1} </td>
              <td><input id='d${i + 1}x' type='number' style='width: 85%'></td>
              <td><input id='d${i + 1}y' type='number' style='width: 85%'></td>
            </tr>`
          ).join('')}
        </tbody>
      </table>
    </div>
    <div id='dpicktype' class='beigemenutable scroll-pane' style='border-radius: 6px; border: 3px ridge #99805D; height: auto !important; max-height: 85%; width: 49%; margin-left: auto; margin-right:'></div>
			<div>
			<table  class='beigemenutable scroll-pane' style='font-size: 16px;margin-left: auto;margin-right: auto;border: 3px ridge #886f53;border-radius: 6px;width: 48%;background: #e2cbac;'>
			<th colspan='2' style='font-size:12;font-weight: bold;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;color: #e1c190;border: 3px ridge #45392a;border-radius: 9px;font-family: trojan;font-style: italic;'> Defense Settings:</th>
			  <tr>
				<td style='text-align:center;'>
				  <span>% of Troops:</span>
				</td>
				<td style='text-align:center;'><input id='defperc' type='number' style='width: 30%; text-align: center;font-size: 12px;'> %</td>
			  </tr>
			  <tr>
				<td style='text-align:center;'>
				  <span>Select Departure:</span>
				</td>
				<td style='text-align: center;'>
				  <select id='defdeparture' class='greensel' style='text-align: center;border-radius: 6px;font-size: 12px !important;height: 30px;width: 95%;'>
					<option value='0'>Now</option>
					<option value='1'>Departure time</option>
					<option value='2'>Arrival time</option>
				  </select>
				</td>
			  </tr>
			</table>

		</div>
		<div style="text-align:center;">
		<table id='defpreset' style="width:49%;font-size: 16px;margin-left: auto;margin-right: auto;border: 3px ridge #886f53;border-radius: 6px;background: #f3d298;">

			<th colspan='2' style='font-size:12;font-weight: bold;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;color: #e1c190;border: 3px ridge #45392a;border-radius: 9px;font-family: trojan;font-style: italic;'> Pre Defense Settings: </th>
			<tr id='dret' style="text-align:center;">
				<td style='text-align: center;'><input id='dretcheck' class='clsubopti' type='checkbox' checked> Return Troops</td>
				<td><input id='dretHr' type='number' style='width: 20px' value='2'> Hrs Before</td>
			</tr>
		</table>
		<table id='deftime' style="width:49%;font-size: 16px;margin-left: auto;margin-right: auto;border: 3px ridge #886f53;border-radius: 6px;background: #ebdfc5;">
		  <th colspan='5' style='font-size:12;font-weight: bold;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;color: #e1c190;border: 3px ridge #45392a;border-radius: 9px;font-family: trojan;font-style: italic;'>Defense Time</th>
			<tr style='text-align:center;'>
			  <td style='text-align: center;'>Hr</td>
			  <td style='text-align: center;'>Min</td>
			  <td style='text-align: center;'>Sec</td>
			  <td style='text-align: center;' colspan='2'>Date</td>
			</tr>
		 	<tr>
			  <td style='text-align: center;'><input id='defHr' type='number' style='text-align: center; width: 35px;height: 22px;font-size: 10px;' value='10'></td>
			  <td style='text-align: center;'><input id='defMin' style='text-align: center; width: 35px;height: 22px;font-size: 10px;' type='number' value='00'></td>
			  <td style='text-align: center;'><input style='text-align: center; width: 35px;height: 22px;font-size: 10px;' id='defSec' type='number' value='00'></td>
			  <td  style='text-align: center;'colspan='2'><input style='text-align: center; width:90px;' id='defDat' type='text' value='00/00/0000'></td>
			</tr>
		  </table>
		  <button id='Defend' style='width: 35%;height: 30px; font-size: 12px; margin:10px; border-radius:6px;' class='regButton greenb'>Send Defense</button>
		  </div>

		</div>`




		//Near Defense Body
		let ndeftabbody = `<div id='warNdefmanager' class='ui-tabs-panel' role='tabpanel' style='display: none; overflow:auto;'>
		<div id='fpdcdiv6'  style='margin-left: auto;margin-right: auto; font-family: trojan;font-style: italic; font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' >GFunky's Nearby Defense:</div>
		<table>
		<td>Choose city:</td>
		<td><input style='width: 30px;height: 22px;font-size: 10px;' id='ndefx' type='number'> : <input style='width: 30px;height: 22px;font-size: 10px;' id='ndefy' type='number'></td>
		<td>Showing For:</td><td id='asdfgh' class='coordblink shcitt'></td>
		<td>
		<button class='regButton greenb' id='ndefup' style='height:30px; width:70px; border-radius:6px'>Update</button>
		</td>
		</table>
		<div id='Ndefbox' class='beigemenutable scroll-pane' style='width: 96%;height: AUTO !important;max-height: 85%;margin-right: auto;margin-left: auto;border: 3px ridge #99805D;border-radius: 6px;'></div>
		</div>
		</div>`

		// Offensive List Body
		let tofftabbody = `
		  <div id="warToffmanager" class="ui-tabs-panel" role="tabpanel" style="display: none; overflow:auto;">
			<div id="fpdcdiv7" style="margin-left: auto;margin-right: auto; font-family: trojan;font-style: italic; font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;">Gfunky's Offensive TS</div>
			<table>
			  <td colspan="2">Continent(99 for navy):</td>
			  <td><input style="width: 30px;height: 22px;font-size: 10px;" id="toffx" type="number" value="0"></td>
			  <td>
				<button class="regButton greenb" id="toffup" style="height:30px; width:70px; border-radius:6px;">Update</button>
			  </td>
			  <td id="asdfg" style="width:10% !important;"></td>
			  <td>
				<button class="regButton greenb" id="mailoff" style="height:30px; width:50px; border-radius:6px;">Mail</button>
			  </td>
			  <td><input style="width: 100px;height: 22px;font-size: 10px;" class="mailtit ui-autocomplete-input" id="mailname" autocomplete="on" maxlength="1500" type="text" value=""></td>
			</table>
			<div id="toffbox" class="beigemenutable scroll-pane" style=" width: 96%;height: auto!important; max-height: 80%;margin-right: auto;margin-left: auto;border: 3px ridge #99805D;border-radius: 6px;"></div>
		  </div>
		</div>`;

		// Defensive List Body
		let tdeftabbody = `<br> <div id='warTdefmanager' class='ui-tabs-panel' role='tabpanel' style='display: none; overflow:auto;'>
		 <div id='fpdcdiv8'  style='margin-left: auto;margin-right: auto;font-family: trojan;font-style: italic; font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' > Gfunky's Defensive TS</div>
		<table>
		<td colspan='2'> Continent(99 for navy):</td>
		<td><input style='width: 30px;height: 22px;font-size: 10px;' id='tdefx' type='number' value='0'></td>
		<td>
		<button class='regButton greenb' id='tdefup' style='height:30px; width:70px; border-radius:6px;'>Update</button>
		</td>
		<td id='asdfgd' style='width:10% !important;'></td>
		<td>
		<button class='regButton greenb' id='maildef' style='height:30px; width:50px; border-radius:6px;'>Mail</button>
		</td>
		<td><input style='width: 100px;height: 22px;font-size: 10px;' class='mailtit ui-autocomplete-input'; id='mailname2' autocomplete='on' maxlength='1500' type='text' value=''></td>
		</table>
		<div id='Tdefbox' class='beigemenutable scroll-pane' style='width: 96%;height: AUTO !important;max-height: 80%;margin-right: auto;margin-left: auto;border: 3px ridge #99805D;border-radius: 6px;;'></div>
		</div>
		</div>`;
		// Import Export
		let gfunkyexpwin = `<div id='ExpImp' class='popUpBox ui-resizable ui-draggable' style='z-index:200003; width:80% !important; max-width: 544px'>
		<div class='ppbwinbgr' >
		<div class='ppbwintop' style='position: relative !important; height:150px !important;'></div>
		<div class='ppbwincent' style='position: relative !important; height:auto !important;'></div>
		<div class='ppbwinbott' style='position: relative !important; height:150px !important;'></div>
		</div>
		<div class='ppbwincontent' style='height: auto;'>
		<div class='popUpBar ui-draggable-handle' style='margin-top:7px !Important;'>
		<span class='ppspan' style='font-family: trojan;font-style: italic;'>Import Attack Order</span>
		<button id='sumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#ExpImp').remove()>
		<div>
		<div id='xbuttondiv'>
		<div id='centxbuttondiv'></div>
		</div>
		</div>
		</button>
		</div>
		<div id='expbody' style='margin-left:auto; margin-right: auto; text-align:center'>
		<textarea style='font-size:11px;width:90%;margin-left:auto; margin-right:auto;height:150px;' id='expstring'></textarea>
		<br></br><button id='applyExp' style='width: 100px;height: 30px !important; font-size: 12px !important; float: right; margin-right:2%;' class='regButton greenb'>Apply</button>
		</div>
		</div>
		</div>
		</div>`;
		//BUTTONS  on War Council Tab
		const tabs = $("#warcouncTabs").tabs();
		const ul = tabs.find("ul");
		//$( fpdcdiv2 ).prepend ('<br>');
		$('div#warCidlemanager').attr('style', 'margin-top: 26px');
		$('div#warCidledi').attr('style', 'height: 80% !important');
		$('div#warCraidtable').attr('style', 'height: 55% !important');
		$('div#warCraidtable').css({
			'border-radius': '6px'
		});
		$(warCidledi).css({
			"border": "3px ridge #99805D",
			"border-radius": "6px"
		});
		$(ul).append(tabsHTML);
		$("#warcouncbox").css("width", "700px !important");
		tabs.tabs("refresh");
		$('#warCidlemanager').after(bosstabbody, attackTabBody, deftabbbody, ndeftabbody, tofftabbody, tdeftabbody);
		$("#senddefCityGo").after(quickdefbut);
		$("#deftime").hide();
		$("#defpreset").hide();

		$("#dret").hide();
		$("#warCounc").append(returnAllbut, attackbut, defbut, neardefbut, totaloffbut, totaldefbut)
		$("#coordstochatGo1").after(addtoatt);
		$("#addtoAtt").after(addtodef);
		$("#loccavwarconGo").css("right", "65%");
		$("#idluniwarconGo").css("left", "34%");
		$("#idluniwarconGo").after(raidbossbut);
		$('#CheckResHora').css("right", "");
		$('#CheckResHora').css("margin-top", "135px");
		$('#CheckResHora').css("left", "35.9%");
		$('#defdeparture').change(function() {
			($('#defdeparture').val() === '0') ? $('#deftime, #dret, #defpreset').hide(): $('#deftime, #dret, #defpreset').show();
		});
		$("#perc").val(localStorage.getItem('attperc') || 99);
		$("#defperc").val(localStorage.getItem('defperc') || 99);
		$("#retcheck").prop("checked", localStorage.getItem('retcheck') == 1);
		$("#dretcheck").prop("checked", localStorage.getItem('dretcheck') == 1);
		$("#retHr").val(localStorage.getItem('retHr') || "");
		$("#dretHr").val(localStorage.getItem('dretHr') || "");
		$("#attackDat").datepicker();
		$("#defDat").datepicker();
		$('#refreshboss').click(function() {
			if (beentoworld) {
				openbosswin();
			} else {
				alert("Press World Button");
			}
		});
		$('#returnAllb').click(function() {
			$.ajax({
				url: 'includes/gIDl.php',
				type: 'POST',
				async: true,
				success(data) {
					const thdata = JSON.parse(data);
					$("#gfunkyReturnall").remove();
					openreturnwin(thdata);
				}
			});
		});
		$('#raidbossGo').click(function() {
			if (beentoworld) {
				$("#warcouncbox").show();
				tabs.tabs("option", "active", 2);
				$("#refreshboss").click();
				return;
			}
			alert("Press World Button");
		});
		$("#Attack").click(function() {
			localStorage.setItem('attperc', $("#perc").val());
			localStorage.setItem('retHr', $("#retHr").val());
			localStorage.setItem('retcheck', $("#retcheck").prop("checked") ? 1 : 0);
			sendAttack();
		});
		$("#Defend").click(function() {
			localStorage.setItem('defperc', $("#defperc").val());
			localStorage.setItem('dretHr', $("#dretHr").val());
			const defobj = {
				targets: {
					x: [],
					y: [],
					dist: [],
					numb: 0,
					cstr: []
				},
				t: {
					tot: [],
					home: [],
					type: [],
					use: [],
					speed: [],
					amount: []
				},
				perc: $("#defperc").val(),
				dep: $("#defdeparture").val(),
				ret: 1,
				rettime: $("#dretHr").val(),
				hr: $("#defHr").val(),
				min: $("#defMin").val(),
				sec: $("#defSec").val(),
				date: $("#defDat").val(),
				dat: $("#defDat").datepicker('getDate')
			};
			if ($("#dretcheck").prop("checked") == true) {
				localStorage.setItem('dretcheck', 1);
				defobj.ret = 1;
			}
			if ($("#dretcheck").prop("checked") == false) {
				localStorage.setItem('dretcheck', 0);
				defobj.ret = 0;
			}
			let tempx;
			let tempy;
			for (var i = 1; i < 15; i++) {
				if ($(`#d${i}x`).val()) {
					tempx = $(`#d${i}x`).val();
					tempy = $(`#d${i}y`).val();
					defobj.targets.x.push(tempx);
					defobj.targets.y.push(tempy);
					defobj.targets.cstr.push(`${tempx}:${tempy}`);
					defobj.targets.dist.push(Math.sqrt((tempx - city.x) * (tempx - city.x) + (tempy - city.y) * (tempy - city.y)));
					defobj.targets.numb++;
				}
			}
			for (var i in poll2.city.tc) {
				if (poll2.city.tc[i]) {
					defobj.t.tot.push(Math.ceil(poll2.city.tc[i] * Number($("#defperc").val()) / 100));
					defobj.t.home.push(Math.ceil(poll2.city.th[i] * Number($("#defperc").val()) / 100));
					defobj.t.type.push(Number(i));
					if ($(`#usedef${i}`).prop("checked") == true) {
						defobj.t.speed.push(TroopSpeedIndex[i] / FaithSpeedIndex[i]);
						defobj.t.use.push(1);
					} else {
						defobj.t.speed.push(0);
						defobj.t.use.push(0);
					}
					defobj.t.amount.push(0);
				}
			}
			SendDef(defobj);
		});
		$('#attackGo').click(function() {
			$("#warcouncbox").show();
			tabs.tabs("option", "active", 3);
			$("#attacktab")[0].click();
		});
		$('#defGo').click(function() {
			$("#warcouncbox").show();
			tabs.tabs("option", "active", 4);
			$("#deftab").click();
		});
		$('#ndefGo').click(function() {
			cotgsubscribe.subscribe("regional", function(data) {
				//do something with chat
				const x = data.x;
				const y = data.y;
				const info = data.info;
				$("#ndefx").val(x);
				$("#ndefy").val(y);
			});
			$("#warcouncbox").show();
			tabs.tabs("option", "active", 5);
			$("#neardeftab").trigger({
				type: "click",
				originalEvent: "1"
			});
		});
		$('#neardeftab').click(function() {
			cotgsubscribe.subscribe("regional", function(data) {
				//do something with chat
				const x = data.x;
				const y = data.y;
				const info = data.info;
				$("#ndefx").val(x);
				$("#ndefy").val(y);
			});
		});
		// Looks to be doing something with crowns won? I think this changed as it used to be ranking....
		$('#ui-id-115').click(function() {
			cotgsubscribe.subscribe("regional", function(data) {
				//do something with chat
				const x = data.x;
				const y = data.y;
				const info = data.info;
				$("#ndefx").val(x);
				$("#ndefy").val(y);
			});
		});
		$('#toffGo').click(function() {
			$("#warcouncbox").show();
			tabs.tabs("option", "active", 6);
			$("#totalofftab").trigger({
				type: "click",
				originalEvent: "1"
			});
		});
		$('#tdefGo').click(function() {
			$("#warcouncbox").show();
			tabs.tabs("option", "active", 7);
			$("#totaldeftab").trigger({
				type: "click",
				originalEvent: "1"
			});
		});
		$("#addtoAtt").click(function() {
			for (let i = 1; i < 16; i++) {
				if (!$(`#t${i}x`).val()) {
					var tid = Number($("#showReportsGo").attr("data"));
					var tempx;
					var tempy;
					tempx = Number(tid % 65_536);
					tempy = Number((tid - tempx) / 65_536);
					$(`#t${i}x`).val(tempx);
					$(`#t${i}y`).val(tempy);
					break;
				}
			}
		});
		$("#addtoDef").click(function() {
			for (let i = 1; i < 16; i++) {
				if (!$(`#d${i}x`).val()) {
					var tid = Number($("#showReportsGo").attr("data"));
					var tempx;
					var tempy;
					tempx = Number(tid % 65_536);
					tempy = Number((tid - tempx) / 65_536);
					$(`#d${i}x`).val(tempx);
					$(`#d${i}y`).val(tempy);
					break;
				}
			}
		});
		$("#quickdefCityGo").click(function() {
			const tid = Number($("#showReportsGo").attr("data"));
			let tempx;
			let tempy;
			tempx = Number(tid % 65_536);
			tempy = Number((tid - tempx) / 65_536);
			const defobj = {
				targets: {
					x: [tempx],
					y: [tempy],
					dist: [],
					numb: 1
				},
				t: {
					home: [],
					type: [],
					use: [],
					speed: [],
					amount: []
				},
				perc: 100,
				dep: 0,
				ret: 0,
				rettime: 0,
				hr: 0,
				min: 0,
				sec: 0,
				dat: 0
			};
			defobj.targets.dist.push(Math.sqrt((tempx - city.x) * (tempx - city.x) + (tempy - city.y) * (tempy - city.y)));
			for (const i in city.th) {
				if (city.th[i]) {
					defobj.t.home.push(Math.ceil(city.th[i] * Number($("#defperc").val()) / 100));
					defobj.t.type.push(Number(i));
					defobj.t.speed.push(TroopSpeedIndex[i] / FaithSpeedIndex[i]);
					defobj.t.use.push(1);
					defobj.t.amount.push(0);
				}
			}
			SendDef(defobj);
		});
		$("#ndefup").click(function() {
			const tempxs = Number($("#ndefx").val());
			const tempys = Number($("#ndefy").val());
			const tids = tempxs + (tempys * 65_536);
			$("#asdfgh").data(tids);
			$("#asdfgh").text(`${tempxs}:${tempys}`);
			$.ajax({
				url: 'overview/trpover.php',
				type: 'POST',
				async: true,
				success(data) {
					const t = JSON.parse(data);
					neardeftable(t);
				}
			});
		});
		$("#toffup").click(function() {
			$.ajax({
				url: 'overview/trpover.php',
				type: 'POST',
				async: true,
				success(data) {
					const t = JSON.parse(data);
					let tableBody = '';
					totaloffensetable(t);
				}
			});
		});
		$("#tdefup").click(function() {
			$.ajax({
				url: 'overview/trpover.php',
				type: 'POST',
				async: true,
				success(data) {
					let tableBody = '';
					const t = JSON.parse(data);
					totaldeftable(t);
				}
			});
		});
		//Updated 4.10.23 Allows the imports/mails to include the attack strings inside tables

	 $("#Aexport").click(function () {
            const Aexp = {
                x: [],
                y: [],
                type: [],
                time: []
            };
            for (let i = 1; i < 16; i++) {
                if ($(`#t${i}x`).val()) {
                    Aexp.x.push($(`#t${i}x`).val());
                    Aexp.y.push($(`#t${i}y`).val());
                    Aexp.type.push($(`#type${i}`).val());
                }
            }
            Aexp.time[0] = $("#attackHr").val();
            Aexp.time[1] = $("#attackMin").val();
            Aexp.time[2] = $("#attackSec").val();
            Aexp.time[3] = $("#attackDat").val();
            const attackorderexport = prompt("Attack Orders Export", JSON.stringify(Aexp));
        });
        $("#Aimport").click(function () {
            $("body").append(gfunkyexpwin);
            $("#ExpImp").draggable({
                handle: ".popUpBar",
                containment: "div",
                scroll: true
            });
            $("#applyExp").click(function () {
                Aimp($("#expstring").val());
                $("#ExpImp").remove();
            });
        });

    $(document).ready(function () {
		//Mail Filter Search Added 4.11.23
		const searchMail = $('<input type="text" id="searchInput" placeholder="Search Mail...">');
		const mailsTabs = $('#mailsTabs');

		searchMail.appendTo(mailsTabs.find('ul').css('text-align', 'center'));

		const searchInput = document.getElementById('searchInput');
		const mailTable = document.getElementById('mailTable');
		const outboxTable = document.getElementById('outboxTable');

		searchInput.addEventListener('keyup', function () {
		  const searchTerm = searchInput.value.toLowerCase();

		  const mailSenderCells = mailTable.querySelectorAll('#mailTable #mtBody td#mailSender');
		  const mailTitleCells = mailTable.querySelectorAll('#mailTable #mtBody td#mailTitle');
		  for (let i = 0; i < mailSenderCells.length; i++) {
			const senderCell = mailSenderCells[i];
			const titleCell = mailTitleCells[i];
			const row = senderCell.parentNode;
			const senderText = senderCell.innerText.toLowerCase();
			const titleText = titleCell.innerText.toLowerCase();
			if (senderText.includes(searchTerm) || titleText.includes(searchTerm)) {
			  row.style.display = '';
			} else {
			  row.style.display = 'none';
			}
		  }

		  const outboxSenderCells = outboxTable.querySelectorAll('#outboxTable #outbBody td#mailTo');
		  const outboxTitleCells = outboxTable.querySelectorAll('#outboxTable #outbBody td#mailTitle');
		  for (let i = 0; i < outboxSenderCells.length; i++) {
			const senderCell = outboxSenderCells[i];
			const titleCell = outboxTitleCells[i];
			const row = senderCell.parentNode;
			const senderText = senderCell.innerText.toLowerCase();
			const titleText = titleCell.innerText.toLowerCase();
			if (senderText.includes(searchTerm) || titleText.includes(searchTerm)) {
			  row.style.display = '';
			} else {
			  row.style.display = 'none';
			}
		  }
		});
		
		
	  // Define a function to check the value of #mailrSub and toggle the visibility of #scheduleDiv
	  function checkMailrSub() {
		var mailrSub = $("#mailrSub").text().toLowerCase();
		if (mailrSub.includes("order")) {
		  $("#scheduleButton").show();
		} else {
		  $("#scheduleButton").hide();
		}
	  }

	  // Call the checkMailrSub function every 2 seconds
	  setInterval(checkMailrSub, 2000);

		$("<span>", {
			css: {
				"float": "left",
				"text-align": "center",
				"padding-top": "6px",
				"margin-left": "50px"
		}
		}).append($("<button>", {
			id: "scheduleButton",
			text: "Add To Scheduler",
			class: "greenb",
			css: {
				"margin-top": "auto",
				"border-radius": "9px",
				"padding": "0px 30px",
				"height": "40px",
				"display": "inline-block"
			}
		})).insertBefore("#mailViewXbutton");

		// Add a click event listener to the #scheduleButton element
		$("#scheduleButton").click(function() {
			// Call the function to reset the attack orders
			resetAttackOrders();
			var content = "";
			$("#mailrMess p, #mailrMess td").each(function() {
			  content += $(this).html().replace(/<br\s*[\/]?>/gi, "\n") + "\n";
			});
			Aimp(content);
			alert("Any previous orders have been cleared. New orders have been imported to the Attack Scheduler and are ready to be used!");
			setTimeout(function() {
				// Remove the alert after 5 seconds
				$('.alert').remove();
			}, 2000);
		});
	});


let jsonStrings = [];
let orderCounts = {};

function Aimp(str) {
  // Remove HTML tags and trim the string
  const cleanStr = str.replace(/<\/?[^>]+(>|$)/g, "").trim();

  const lines = cleanStr.split("\n");
  for (let line of lines) {
    const match = line.match(/{.*}/);
    if (match) {
      const orderName = line.split(":")[0].trim();
      if (!orderCounts[orderName]) {
        orderCounts[orderName] = 0;
      }
      orderCounts[orderName]++;
      const nameWithCount = `${orderName} #${orderCounts[orderName]}`;
      jsonStrings.push({ name: nameWithCount, json: match[0] });
      $(`#orders-dropdown`).append(`<option value=${jsonStrings.length - 1}>${nameWithCount}</option>`);
      console.log(nameWithCount);
    }
  }

  // regenerate the dropdown options
  $("#orders-dropdown").empty();
  $("#orders-dropdown").append(`<option value="">Choose Your Attack Order </option>`);

  // set the default selection to the first string if there is only one string
  if (jsonStrings.length === 1) {
    $("#orders-dropdown").append(`<option value="0" selected>${jsonStrings[0].name}</option>`);
    updateForm(0);
  } else {
    // add other strings to the dropdown
    for (let i = 0; i < jsonStrings.length; i++) {
      if (i !== 0 || jsonStrings.length > 1) {
        $(`#orders-dropdown`).append(`<option value=${i}>${jsonStrings[i].name}</option>`);
      }
    }
  }
}

function updateForm(selectedIndex) {
  // Check if the orderName string contains the type of attack
  const attackType = ["Assault", "Siege", "Plunder", "Scout"];
  const jsonString = jsonStrings[selectedIndex].json;
  const name = jsonStrings[selectedIndex].name;
  for (let i = 0; i < attackType.length; i++) {
    if (name.includes(attackType[i])) {
      $(`#realtype`).val(i).change();
      break;
    }
  }
  const Aexp = JSON.parse(jsonString);
  for (let i = 1; i <= Aexp.x.length; i++) {
    $(`#t${i}x`).val(Aexp.x[i - 1]);
    $(`#t${i}y`).val(Aexp.y[i - 1]);
    $(`#type${i}`).val(Aexp.type[i - 1]).change();
  }
  $("#attackHr").val(Aexp.time[0]);
  $("#attackMin").val(Aexp.time[1]);
  $("#attackSec").val(Aexp.time[2]);
  $("#attackDat").val(Aexp.time[3]);
}

// create the dropdown
$("#orders").append(`<select id="orders-dropdown" class='greenb' style='width:100%; height:30px; font-size:12px; font-family:trojan; text-align:center'><option>No Attack Orders</option></select>`);

// handle the change event of the dropdown
$("#orders-dropdown").change(function () {
  const selectedIndex = $(this).val();
  updateForm(selectedIndex);
});


$("#ClearAttack").click(function() {
 // Call the function to reset the attack orders
resetAttackOrders();
});
 function resetAttackOrders() {
  // Reset the x, y, type, and time values
  for (let i = 1; i <= 20; i++) {
    $(`#t${i}x`).val("");
    $(`#t${i}y`).val("");
    $(`#type${i}`).val("");
  }

  // Reset the attack hour, minute, second, and date values
  $("#attackHr").val("10");
  $("#attackMin").val("00");
  $("#attackSec").val("00");
  $("#attackDat").val("");

  // Reset the JSON strings and order counts
  jsonStrings = [];
  orderCounts = {};

  // Regenerate the dropdown options
  $("#orders-dropdown").empty();
  $("#orders-dropdown").append(`<option value="">No Attack Orders</option>`);
}

		// Near Defense Table
		function neardeftable(t) {
			const cx = $("#ndefx").val();
			const cy = $("#ndefy").val();
			const cont = Number(Math.floor(cx / 100) + 10 * Math.floor(cy / 100));
			const cit = [
				[]
			];
			for (var i in t) {
				const tid = t[i].id;
				const tempx = Number(tid % 65_536);
				const tempy = Number((tid - tempx) / 65_536);
				const tcont = Number(Math.floor(tempx / 100) + 10 * Math.floor(tempy / 100));
				if (cont == tcont && (t[i].Ballista_total > 0 || t[i].Ranger_total > 0 || t[i].Triari_total > 0 || t[i].Priestess_total || t[i].Arbalist_total > 0 || t[i].Praetor_total > 0)) {
					var tdist = (Math.sqrt((tempx - cx) * (tempx - cx) + (tempy - cy) * (tempy - cy)));
					var tempt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					tempt[1] = t[i].Ballista_total;
					tempt[2] = t[i].Ranger_total;
					tempt[3] = t[i].Triari_total;
					tempt[4] = t[i].Priestess_total;
					tempt[8] = t[i].Arbalist_total;
					tempt[9] = t[i].Praetor_total;
					var temph = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					temph[1] = t[i].Ballista_home;
					temph[2] = t[i].Ranger_home;
					temph[3] = t[i].Triari_home;
					temph[4] = t[i].Priestess_home;
					temph[8] = t[i].Arbalist_home;
					temph[9] = t[i].Praetor_home;
					var tempts = 0; //TS total
					for (var j in tempt) {
						tempts += tempt[j] * TroopScoreIndex[j];
					}
					var tempth = 0; //TS Home
					for (var h in temph) {
						tempth += temph[h] * TroopScoreIndex[h];
					}
					var tspeed = 0;
					for (var j in tempt) {
						if (tempt[j] > 0 && Number((TroopSpeedIndex[j] / FaithSpeedIndex[j]).toFixed(2)) > tspeed) {
							tspeed = Number((TroopSpeedIndex[j] / FaithSpeedIndex[j]).toFixed(2));
						}
					}
					cit.push([tempx, tempy, tdist, t[i].c, tempt, tempts, tempth, tid, tdist * tspeed]);
				}
				if ((cont != tcont || t[i].Galley_total > 0 || t[i].Stinger_total > 0) && (t[i].Stinger_total > 0 || t[i].Galley_total > 0)) {
					var tdist = roundToTwo(Math.sqrt((tempx - cx) * (tempx - cx) + (tempy - cy) * (tempy - cy)));
					var tempt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					tempt[1] = t[i].Ballista_total;
					tempt[2] = t[i].Ranger_total;
					tempt[3] = t[i].Triari_total;
					tempt[4] = t[i].Priestess_total;
					tempt[8] = t[i].Arbalist_total;
					tempt[9] = t[i].Praetor_total;
					tempt[14] = t[i].Galley_total;
					tempt[15] = t[i].Stinger_total;
					var temph = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					temph[1] = t[i].Ballista_home;
					temph[2] = t[i].Ranger_home;
					temph[3] = t[i].Triari_home;
					temph[4] = t[i].Priestess_home;
					temph[8] = t[i].Arbalist_home;
					temph[9] = t[i].Praetor_home;
					temph[14] = t[i].Galley_home;
					temph[15] = t[i].Stinger_home;
					var tempts = 0;
					for (var j in tempt) {
						tempts += tempt[j] * TroopScoreIndex[j];
					}
					var tempth = 0; //TS Home
					for (var h in temph) {
						tempth += temph[h] * TroopScoreIndex[h];
					}
					var tspeed = 0;
					for (var j in tempt) {
						if (tempt[j] > 0 && Number((TroopSpeedIndex[j] / FaithSpeedIndex[j]).toFixed(2)) > tspeed) {
							tspeed = Number((TroopSpeedIndex[j] / FaithSpeedIndex[j]).toFixed(2));
						}
					}
					var timetssp = (tdist * tspeed) + 60;
					cit.push([tempx, tempy, tdist, t[i].c, tempt, tempts, tempth, tid, timetssp]);
				}
			}
			cit.sort(function(a, b) {
				return a[8] - b[8];
			});
			let neardeftab = "<table id='ndeftable'><thead><th colspan='2'>City</th><th>Coords</th><th>TS Total</th><th>TS Home</th><th id='ndefdist'>Travel</th><th colspan='2'>type</th></thead><tbody>";
			for (var i in cit) {
				if (i > 0) {
					var h1 = Math.floor(cit[i][8] / 60);
					var m1 = Math.floor(cit[i][8] % 60);
					h1 = h1 < 10 ? `0${h1}` : h1;
					m1 = m1 < 10 ? `0${m1}` : m1;
					neardeftab += `<tr><td colspan='2' a='${cit[i][7]}' class='coordblink chcity'>${cit[i][3]}</td><td class='coordblink shcitt' data='${cit[i][7]}'>${cit[i][0]}:${cit[i][1]}</td>`;
					//style='font-size: 9px;border-radius: 10px;width: 85%;height: 22px;padding: 1;#c7e2e7-space: nowrap;'
					neardeftab += `<td>${cit[i][5]}</td><td>${cit[i][6]}</td><td>${h1}:${m1}</td><td colspan='2'><table>`;
					for (var j in cit[i][4]) {
						if (cit[i][4][j] > 0) {
							neardeftab += `<td><div class='${tpicdiv20[j]}'></div></td>`;
						}
					}
					neardeftab += "</table></td></tr>";
				}
			}
			neardeftab += "</tbody></table>";
			$("#Ndefbox").html(neardeftab);
			$("#ndeftable td").css("text-align", "center");
			$("#ndeftable td").css("height", "25px");
			const newTableObject = document.getElementById('ndeftable');
			sorttable.makeSortable(newTableObject);
			$("#ndefdist").trigger({
				type: "click",
				originalEvent: "1"
			});
			//      $("#ndefdist").trigger({type:"click",originalEvent:"1"});
		}

		//Updated 3.6.23 Fact
		//Near Offense Table






		 let troopmail = [[]];
		 let deftroopmail = [[]];
		function totaloffensetable(t) {

           let counteroff = 0;
           const contoff = Number($("#toffx").val());
           const cit = [[]];

            for (var i in t) {
                const tid = t[i].id;
                const tempx = Number(tid % 65_536);
                const tempy = Number((tid - tempx) / 65_536);
                const tcont = Number(Math.floor(tempx / 100) + 10 * Math.floor(tempy / 100));
                if (contoff == tcont && (t[i].Druid_total > 0 || t[i].Horseman_total > 0 || t[i].Sorcerer_total > 0 || t[i].Vanquisher_total > 0 || t[i].Scorpion_total > 0 || t[i].Ram_total > 0)) {
                    counteroff++;
                    var tempt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    tempt[5] = t[i].Vanquisher_total;
                    tempt[6] = t[i].Sorcerer_total;
                    tempt[10] = t[i].Horseman_total;
                    tempt[11] = t[i].Druid_total;
                    tempt[12] = t[i].Ram_total;
                    tempt[13] = t[i].Scorpion_total;
                    var tempts = 0;
                    for (var j in tempt) {
                        tempts += tempt[j] * TroopScoreIndex[j];
                    }
                    troopmail.push([tempt, tempts]);
                    cit.push([tempx, tempy, tempts, tempt, t[i].c, tid]);
                }
                if (contoff == "99" && (t[i].Warship_total > 0 || t[i].Galley_total > 0)) {
                    counteroff++;
                    var tempt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    tempt[5] = t[i].Vanquisher_total;
                    tempt[6] = t[i].Sorcerer_total;
                    tempt[10] = t[i].Horseman_total;
                    tempt[11] = t[i].Druid_total;
                    tempt[12] = t[i].Ram_total;
                    tempt[13] = t[i].Scorpion_total;
                    tempt[14] = t[i].Galley_total;
                    tempt[16] = t[i].Warship_total;
                    var tempts = 0;
                    for (var j in tempt) {
                        tempts += tempt[j] * TroopScoreIndex[j];
                    }
                    troopmail.push([tempt, tempts]);
                    cit.push([tempx, tempy, tempts, tempt, t[i].c, tid]);
                }
            }
            cit.sort(function (a, b) {
                return b[2] - a[2];
            });
            $("#asdfg").text(`Total:${counteroff}`);
            let totalofftab = "<table id='tofftable'>";
            totalofftab += "<thead>";
            totalofftab += "<th></th>";
            totalofftab += "<th>City</th>";
            totalofftab += "<th>Coords</th>";
            totalofftab += "<th>TS</th>";
            totalofftab += "<th>type</th>";
            totalofftab += "</thead>";
            totalofftab += "<tbody>";
            for (var i in cit) {
                if (i > 0) {
                    totalofftab += "<tr>";
                    totalofftab += "<td>";
                    totalofftab += `<button class='greenb chcity' id='cityGoTowm' a='${cit[i][5]}'>Go To</button>`;
                    totalofftab += "</td>";
                    totalofftab += `<td>${cit[i][4]}</td>`;
                    totalofftab += `<td class='coordblink shcitt' data='${cit[i][5]}'>${cit[i][0]}:${cit[i][1]}</td>`;
                    totalofftab += `<td>${cit[i][2].toLocaleString()}</td>`;
                    totalofftab += "<td>";
                    totalofftab += "<table>";
                    for (var j in cit[i][3]) {
                        if (cit[i][3][j] > 0) {
                            totalofftab += "<td>";
                            totalofftab += `<div class='${tpicdiv20[j]}'></div>`;
                            totalofftab += "</td>";
                        }
                    }
                    totalofftab += "</table>";
                    totalofftab += "</td>";
                    totalofftab += "</tr>";
                }
            }
            totalofftab += "</tbody>";
            totalofftab += "</table>";
            $("#toffbox").html(totalofftab);
            $("#tofftable td").css("text-align", "center");
            $("#tofftable td").css("height", "26px");
            const nearoffenseexport = document.getElementById('tofftable');
            sorttable.makeSortable(nearoffenseexport);
            troopmail.sort(function (a, b) {
                return b[1] - a[1];
            });
            $("#mailoff").click(function () {
				let tableBody = '';
				sendMail('off');
			});
        }

        function totaldeftable(t) {
         const contdef = Number($("#tdefx").val());
         const cit = [[]];
         let counterdef = 0;



           for (var i in t) {
				var tid=t[i].id;
				var tempx=Number(tid % 65536);
				var tempy=Number((tid-tempx)/65536);
				var tcont=Number(Math.floor(tempx/100)+10*Math.floor(tempy/100));
				if (contdef==tcont) {
					if (t[i].Ballista_total>0 || t[i].Ranger_total>0 || t[i].Triari_total>0 || t[i].Priestess_total || t[i].Arbalist_total>0 || t[i].Praetor_total>0 ) {
						counterdef+=1;
						var tempt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						tempt[1]=t[i].Ballista_total;
						tempt[2]=t[i].Ranger_total;
						tempt[3]=t[i].Triari_total;
						tempt[4]=t[i].Priestess_total;
						tempt[8]=t[i].Arbalist_total;
						tempt[9]=t[i].Praetor_total;
						var tempts=0;
						for (var j in tempt) {
							tempts+=tempt[j]*TroopScoreIndex[j];
						}
						deftroopmail.push([tempt,tempts]);
						cit.push([tempx,tempy,tempts,tempt,t[i].c,tid]);
					}
				}
				if(contdef=="99"){
					if (t[i].Stinger_total>0 || t[i].Galley_total>0) {
						counterdef+=1;
						var tempt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
						tempt[1]=t[i].Ballista_total;
						tempt[2]=t[i].Ranger_total;
						tempt[3]=t[i].Triari_total;
						tempt[4]=t[i].Priestess_total;
						tempt[8]=t[i].Arbalist_total;
						tempt[9]=t[i].Praetor_total;
						tempt[14]=t[i].Galley_total;
						tempt[15]=t[i].Stinger_total;
						var tempts=0;
						for (var j in tempt) {
							tempts+=tempt[j]*TroopScoreIndex[j];
						}
						deftroopmail.push([tempt,tempts]);
						cit.push([tempx,tempy,tempts,tempt,t[i].c,tid]);
					}
				}
			}


            cit.sort(function (a, b) {
                return b[2] - a[2];
            });
            $("#asdfgd").text(`Total:${counterdef}`);
            let totaldeftab = "<table id='tdeftable'>";
            totaldeftab += "<thead>";
            totaldeftab += "<th></th>";
            totaldeftab += "<th>City</th>";
            totaldeftab += "<th>Coords</th>";
            totaldeftab += "<th>TS</th>";
            totaldeftab += "<th>type</th>";
            totaldeftab += "</thead>";
            totaldeftab += "<tbody>";
            for (var i in cit) {
                if (i > 0) {
                    totaldeftab += "<tr>";
                    totaldeftab += "<td>";
                    totaldeftab += `<button class='greenb chcity' id='cityGoTowm' a='${cit[i][5]}'>Go To</button>`;
                    totaldeftab += "</td>";
                    totaldeftab += `<td>${cit[i][4]}</td>`;
                    totaldeftab += `<td class='coordblink shcitt' data='${cit[i][5]}'>${cit[i][0]}:${cit[i][1]}</td>`;
                    totaldeftab += `<td>${cit[i][2].toLocaleString()}</td>`;
                    totaldeftab += "<td>";
                    totaldeftab += "<table>";
                    for (var j in cit[i][3]) {
                        if (cit[i][3][j] > 0) {
                            totaldeftab += "<td>";
                            totaldeftab += `<div class='${tpicdiv20[j]}'></div>`;
                            totaldeftab += "</td>";
                        }
                    }
                    totaldeftab += "</table>";
                    totaldeftab += "</td>";
                    totaldeftab += "</tr>";
                }
            }
            totaldeftab += "</tbody>";
            totaldeftab += "</table>";
            $("#Tdefbox").html(totaldeftab);
            $("#tdeftable td").css("text-align", "center");
            $("#tdeftable td").css("height", "26px");
            const totaldefenseExport = document.getElementById('tdeftable');
            sorttable.makeSortable(totaldefenseExport);
            deftroopmail.sort(function (a, b) {
                return b[1] - a[1];
            });
            $("#maildef").click(function () {
				let tableBody = '';
				sendMail('def');
			});
        }
		//let troopmail, deftroopmail;
		// code to initialize troopmail and deftroopmail variables goes here

		function sendMail(type) {

			const counteroff = $("#asdfg").text();
			const counterdef = $("#asdfgd").text();
			const numberoff = parseInt(counteroff.replace(/\D/g, ''), 10);
			const numberdef = parseInt(counterdef.replace(/\D/g, ''), 10);

			const counter = (type === 'off') ? numberoff : numberdef;

			const troopgmail = (type === 'off') ? troopmail : deftroopmail;
			let conttemp = (type === 'off') ? $("#toffx").val() : $("#tdefx").val();


			let mailbody = `<p>Number of ${type === 'off' ? 'offensive' : 'defensive'} castles is '${counter}'</p>`;
			mailbody += '<table class="mce-item-table" style="width: 266.273px; "data-mce-style="width: 266.273px; "border="1" data-mce-selected="1">';
			mailbody += '<thead>';
			mailbody += '<th>Number</th>';
			mailbody += '<th>Troop</th>';
			mailbody += '<th>TS Amount</th>';
			mailbody += '</thead>';
			mailbody += '<tbody>';
			mailbody += '</tbody>'; // Initialize the table body as empty
			mailbody += '</table>';

			let tableBody = ''; // Initialize an empty string for table rows

			for (const i in troopgmail) {
				if (i > 0) {
					tableBody += '<tr>';
					tableBody += `<td style="text-align: center;" data-mce-style="text-align: center;">${i}</td>`;
					tableBody += '<td style="text-align: center;" data-mce-style="text-align: center;">';
					tableBody += '<table>';
					for (const j in troopgmail[i][0]) {
						if (troopgmail[i][0][j] > 0) {
							tableBody += `<td>${TroopNameIndex[j]}</td>`;
						}
					}
					tableBody += '</table>';
					tableBody += '</td>';
					tableBody += `<td style="text-align: center;" data-mce-style="text-align: center;">${troopgmail[i][1]}</td>`;
					tableBody += '</tr>';
				}
			}

			mailbody = mailbody.replace('<tbody></tbody>', `<tbody>${tableBody}</tbody>`); // Replace the empty table body with the new rows

			if(conttemp==99){conttemp="Navy";}
			$("#mnlsp")[0].click();
			$("#composeButton")[0].click();
			const temppo = (type === 'off') ? $("#mailname").val() : $("#mailname2").val();
			$("#mailToto").val(temppo);
			$("#mailToSub").val(`${conttemp} ${type === 'off' ? 'Offensive' : 'Defensive'} TS`);
			const $iframe = $('#mailBody_ifr');
			$iframe.ready(function () {
				$iframe.contents().find("body").append(mailbody);
			});
		}

    });


	/*




	END OF WAR COUNC GFUNKY - Primary Functions
	WAR COUNC - Secondary Functions




	import attack orders
	*/
	function clickevent(element) {
		const event = $.Event("click");
		event.user = "foo";
	}
	/*


	SEND DEFENSE Function


	*/
	function SendDef(defobj) {
		$("#commandsPopUpBox").show();
		const commandtabs = $("#commandsdiv").tabs();
		commandtabs.tabs("option", "active", 2);
		$("#reintabb").trigger({
			type: "click",
			originalEvent: "1"
		});
		const targets = defobj.targets;
		const tarnumb = defobj.targets.numb;
		const t = defobj.t;
		const maxdist = Math.max(...targets.dist);
		let defendtime;
		//Galley DEFEND MATH
		if (t.use[t.type.indexOf(14)] == 1) {
			defendtime = TroopSpeedIndex[14] / FaithSpeedIndex[14] * maxdist;
			//////console.log(defendtime);
			const galleydefense = t.type.indexOf(14);
			if (defobj.dep == 0) {
				var GalleyNumber = Math.floor(t.home[galleydefense] / tarnumb);
			} else {
				var GalleyNumber = Math.floor(t.tot[galleydefense] / tarnumb);
			}
			let maxts = 0;
			for (var i in t.home) {
				if (i != galleydefense && t.use[i] == 1 && t.type[i] != 15) {
					maxts += defobj.dep == 0 ? Math.floor(t.home[i] * TroopScoreIndex[t.type[i]] / tarnumb) : Math.floor(t.tot[i] * TroopScoreIndex[t.type[i]] / tarnumb);
				}
			}
			if (maxts <= GalleyNumber * 500) {
				t.amount[galleydefense] = Math.ceil(maxts / 500);
				for (var i in t.home) {
					if (i != galleydefense && t.use[i] == 1) {
						t.amount[i] = defobj.dep == 0 ? Math.floor(t.home[i] / tarnumb) : Math.floor(t.tot[i] / tarnumb);
					}
				}
			} else {
				const rat = GalleyNumber * 500 / maxts;
				t.amount[galleydefense] = GalleyNumber;
				for (var i in t.home) {
					if (i != galleydefense && t.use[i] == 1) {
						if (t.type[i] == 15) {
							t.amount[i] = defobj.dep == 0 ? Math.floor(t.home[i] / tarnumb) : Math.floor(t.tot[i] / tarnumb);
						} else if (defobj.dep == 0) {
							t.amount[i] = Math.floor(rat * t.home[i] / tarnumb);
						} else {
							t.amount[i] = Math.floor(rat * t.tot[i] / tarnumb);
						}
					}
				}
			}
			//END OF GALLEY DEFEND MATH
			//Normal defend MATH
		} else {
			defendtime = Math.max(...t.speed) * maxdist;
			for (var i in t.home) {
				if (t.use[i] == 1) {
					t.amount[i] = defobj.dep == 0 ? Math.floor(t.home[i] / tarnumb) : Math.floor(t.tot[i] / tarnumb);
				}
			}
		}
		//END Normal Defend MATH
		// sending def
		//////console.log(t);
		let l = 0;
		const end = targets.x.length;

		function dloop() {
			for (const i in t.home) {
				if (t.use[i] == 1) {
					$(`#reiIP${t.type[i]}`).val(t.amount[i]);
				}
			}
			$("#reinxcoord").val(targets.x[l]);
			$("#reinycoord").val(targets.y[l]);
			setTimeout(function() {
				$("#reinfcoordgo").trigger({
					type: "click",
					originalEvent: "1"
				});
			}, 100);
			$("#reinforcetimingselect").val(Number(defobj.dep) + 1).change();
			if ($("#defdeparture").val() > 0) {
				//////console.log(defobj.min,defobj.hr,defobj.sec);
				const date = `${defobj.date} ${defobj.hr}:${defobj.min}:${defobj.sec}`;
				$("#reinfotimeinp").val(date);
			}
			const event = $.Event("logged");
			event.user = "foo";
			//$("#reinforceGo").trigger({type:"click",originalEvent:"1"});
			$("#reinforceGo").trigger({
				type: "click",
				originalEvent: "1"
			});
			l++;
			if (l < end) {
				setTimeout(dloop, 1500);
			} else {
				$("#commandsPopUpBox").hide();
				setTimeout(function() {
					art();
				}, 4000);
			}
		}
		dloop();

		function art() { //setting return time for raids according to city view outgoing list
			//////console.log(poll2.OGA);
			$("#commandsPopUpBox").hide();
			if (defobj.ret == 1) {
				$(".toptdinncommtbl1:first")[0].click();
				setTimeout(function() {
					$("#outgoingPopUpBox").hide();
				}, 500);
				let minddate = new Date();
				let first = true;
				for (const i in poll2.OGA) {
					//////console.log(targets.cstr,poll2.OGA[i][5]);
					if (targets.cstr.indexOf(poll2.OGA[i][5]) > -1) {
						if (first) {
							first = false;
							var a = poll2.OGA[i][6].substr(30);
							var b = a.substr(0, a.indexOf('<'));
							var time = b.split(" ");
							var ttime = time[2].split(":");
							minddate.setHours(Number(ttime[0]));
							minddate.setMinutes(Number(ttime[1]));
							minddate.setSeconds(Number(ttime[2]));
							//////console.log(time[1]);
							if (time[1] == "Tomorrow") {
								minddate.setDate(minddate.getDate() + 1);
								//////console.log("tmrw");
							} else if (time[1] != "Today") {
								var ddate = time[1].split("/");
								//////console.log(ddate);
								minddate.setDate(Number(ddate[1]));
								minddate.setMonth(Number(ddate[0]));
							}
						} else {
							var a = poll2.OGA[i][6].substr(30);
							var b = a.substr(0, a.indexOf('<'));
							var time = b.split(" ");
							var ttime = time[2].split(":");
							var d = new Date();
							d.setHours(ttime[0]);
							d.setMinutes(ttime[1]);
							d.setSeconds(ttime[2]);
							if (time[1] == "Tomorrow") {
								//////console.log("tmrw");
								d.setDate(minddate.getDate() + 1);
							} else if (time[1] != "Today") {
								var ddate = time[1].split("/");
								//////console.log(ddate);
								d.setDate(ddate[1]);
								d.setMonth(ddate[0]);
							}
							//////console.log(d,minddate);
							if (d < minddate) {
								minddate = d;
							}
						}
					}
				}
				minddate.setHours(minddate.getHours() - defobj.rettime);
				//////console.log(minddate);
				let hour = minddate.getHours();
				if (hour < 10) {
					hour = `0${hour}`;
				}
				let min = minddate.getMinutes();
				if (min < 10) {
					min = `0${min}`;
				}
				let sec = minddate.getSeconds();
				if (sec < 10) {
					sec = `0${sec}`;
				}
				const retdate = `${getFormattedDate(minddate)} ${hour}:${min}:${sec}`;
				//////console.log(retdate);
				$("#raidrettimesela").val(3).change();
				$("#raidrettimeselinp").val(retdate);
				$("#doneOGAll")[0].click();
				alert("Defense set and troops returned");

				return;
			}
			alert("Defense set");

		}
	}
	/*


	END SEND DEFENSE Function


	*/
	/*

	Update Attack Function

	*/
	function updateattack() {
  const t = {
    home: [],
    type: []
  };
  let totalscouts;
  for (var i in city.tc) {
    if (city.tc[i]) {
      if (i == 7) {
        totalscouts = city.tc[7];
      } else {
        t.home.push(city.tc[i]);
        t.type.push(i);
      }
    }
  }

  let ttseltab = "<table>";
  ttseltab += "<thead>";
  ttseltab += "<th>Troop</th>";
  ttseltab += "<th>Real</th>";
  ttseltab += "<th>Fakes</th>";
  ttseltab += "</thead>";
  ttseltab += "<tbody>";
  for (var i in t.home) {
    const userealEl = document.getElementById(`usereal${t.type[i]}`);
    const usefakeEl = document.getElementById(`usefake${t.type[i]}`);
    const usereal = userealEl ? userealEl.checked : true;
    const usefake = usefakeEl ? usefakeEl.checked : true;

    ttseltab += "<tr>";
    ttseltab += "<td style='height:40px;'>";
    ttseltab += `<div class='${tpicdiv[t.type[i]]}'></div>`;
    ttseltab += "</td>";
    ttseltab += `<td style='text-align: center;'><input id='usereal${t.type[i]}' class='clsubopti' type='checkbox' ${usereal ? 'checked' : ''}></td>`;
    ttseltab += `<td style='text-align: center;'><input id='usefake${t.type[i]}' class='clsubopti' type='checkbox' ${usefake ? 'checked' : ''}></td>`;
    ttseltab += "</tr>";
  }
  ttseltab += "</tbody>";
  ttseltab += "</table>";
  $("#picktype").html(ttseltab);
}


	/*

	 END Update Attack Function

	*/
	/*

	 START Update Defense Function

	*/
	function updatedef() {
	  const t = {
		home: [],
		type: []
	  };
	  for (var i in city.tc) {
		if (city.tc[i]) {
		  t.home.push(city.tc[i]);
		  t.type.push(i);
		}
	  }
	  let ttseltab = "<table>";
	  ttseltab += "<thead>";
	  ttseltab += "<th>Troop Type</th>";
	  ttseltab += "<th>Use</th>";
	  ttseltab += "</thead>";
	  ttseltab += "<tbody>";
	  for (var i in t.home) {
		const usedefEl = document.getElementById(`usedef${t.type[i]}`);
		const usedef = usedefEl ? usedefEl.checked : true;

		ttseltab += "<tr>";
		ttseltab += "<td style='height:40px;'>";
		ttseltab += `<div class='${tpicdiv[t.type[i]]}'></div>`;
		ttseltab += "</td>";
		ttseltab += `<td style='text-align: center;'><input id='usedef${t.type[i]}' class='clsubopti' type='checkbox' ${usedef ? 'checked' : ''}></td>`;
		ttseltab += "</tr>";
	  }
	  ttseltab += "</tbody>";
	  ttseltab += "</table>";
	  $("#dpicktype").html(ttseltab);
	}


	/*

	 END Update Defense Function

	*/
	/*

	Send Attack Function

	*/
	  function sendAttack() {
        $("#commandsPopUpBox").show();
        var commandtabs=$("#commandsdiv").tabs();
        var pvptabs=$("#pvpTab").tabs();
        $("#pvptabb")[0].click();
        commandtabs.tabs( "option", "active", 1 );
        var targets={x:[],y:[],real:[],dist:[],cstr:[]};
        var fakeNumber=0;
        var realNumber=0;
        var tempx;
        var tempy;


       for (var i=1;i<16;i++) {
            if ($("#t"+i+"x").val()) {
                tempx=$("#t"+i+"x").val();
                tempy=$("#t"+i+"y").val();
                targets.x.push(tempx);
                targets.y.push(tempy);
                targets.cstr.push(tempx+":"+tempy);
                targets.real.push($("#type"+i).val());
                if ($("#type"+i).val()==1) {realNumber+=1;}
                else {fakeNumber+=1;}
                targets.dist.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
            }
        }
   //SCOUTS SECTION
        var troopScout; //Scout Total TS
        var t={home:[],type:[],real:[],fake:[],speed:[],scoutfake:[],scoutreal:[]};
        for (var i in city.tc) {
            if (city.tc[i]) {
                if(i==7){troopScout=city.tc[7];}
                else{
                    t.home.push(Math.ceil(city.tc[i]*Number($("#perc").val())/100));
                    t.type.push(Number(i));
                    if ($("#usereal"+i).prop( "checked")===true) {
                        t.speed.push(TroopSpeedIndex[i]/FaithSpeedIndex[i]);
                    }
                    else {t.speed.push(0);}
                }
            }
        }
        var maxdist=Math.max.apply(Math, targets.dist);
        var time;
        var fakeTS;// Fake TS Scouts
        var fakeGalley; // Fake Galley Amount
		var troopWarship=t.real[16]=Math.floor((t.home[16]-t.fake[16]*fakeNumber)/realNumber);
        var tscbr=cdata.tt;
		if(tscbr<20000){fakeTS=1;fakeGalley=1;}
        else if(tscbr<40000){fakeTS=200;fakeGalley=1;}//1 600, 2 1200, 3 1800, 4 2400, 5 3000
        else if(tscbr<60000){fakeTS=500;fakeGalley=1;}
        else if(tscbr<80000){fakeTS=600;fakeGalley=2;}
        else if(tscbr<100000){fakeTS=800;fakeGalley=2;}
        else if(tscbr<120000){fakeTS=1000;fakeGalley=2;}
        else if(tscbr<160000){fakeTS=1300;fakeGalley=3;}
        else if(tscbr<200000){fakeTS=1600;fakeGalley=4;}
        else if(tscbr<240000){fakeTS=2000;fakeGalley=5;}
        else{fakeTS=2500;fakeGalley=5;}
        if (troopScout>0){
            if($("#realtype").val()==3 && $("#faketype").val()==3) {
                if($("#usereal14").prop( "checked")===true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutfake[0]=fakeGalley*250;
                        t.scoutreal[0]=Math.floor((troopScout-((fakeGalley*250)*fakeNumber))/realNumber);
                    } else{
                        t.scoutfake[0]=fakeTS/2;
                        t.scoutreal[0]=Math.floor((troopScout-((fakeTS/2)*fakeNumber))/realNumber);
                    }
                } else if($("#usereal14").prop( "checked")!==true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutfake[0]=fakeGalley*250;
                        t.scoutreal[0]=Math.floor((troopScout-((fakeGalley*250)*fakeNumber))/realNumber);
                    } else{
                        t.scoutfake[0]=fakeTS/2;
                        t.scoutreal[0]=Math.floor((troopScout-((fakeTS/2)*fakeNumber))/realNumber);
                    }
                }
            }
            if($("#realtype").val()==3 && $("#faketype").val()!=3) {
                if($("#usereal14").prop( "checked")===true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutreal[0]=Math.floor(troopScout/realNumber);
                    } else{
                        t.scoutreal[0]=Math.floor(troopScout/realNumber);
                    }
                } else{
                        t.scoutreal[0]=Math.floor(troopScout/realNumber);
                }
            }
            if($("#realtype").val()!=3 && $("#faketype").val()==3){
                if($("#usereal14").prop( "checked")===true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutfake[0]=fakeGalley*250;
                    } else{
                            t.scoutfake[0]=fakeTS/2;
                    }
                } else if($("#usereal14").prop( "checked")!==true){
                    if($("#usefake14").prop( "checked")===true){
                    t.scoutfak[0]=fakeGalley*250;
                    } else{
                        t.scoutfake[0]=fakeTS/2;
                    }
                }
            }
        }
		/*
			var troopGalley=t.type.indexOf(14); // Designating "troopGalley" as Troop 14 which is Galley
			var troopRam=t.type.indexOf(12);
			var troopStinger=t.type.indexOf(15);
			var troopWarship=t.type.indexOf(16);
			var troopSenator=t.type.indexOf(17);
			var troopSenator=t.type.indexOf(17);
		    var galleyCapacity=500*galnumb;
            var troopsLand=0; // Non Galley TS
            var galnumb=Math.floor(t.home[troopGalley]-fakeGalley*fakeNumber/realNumber); // Determining how many
			*/
		if (t.type.indexOf(14)>-1 && $("#usereal14").prop( "checked")===true) {
            time=TroopSpeedIndex[14]/FaithSpeedIndex[14]*maxdist;
            ////console.log(time);
            var gali=t.type.indexOf(14); // Designating "Gali" as Troop 14 which is Galley
			var warp=t.type.indexOf(16);
            var galcap=500*galnumb;
            var nongalts=0; // Non Galley TS
            var galnumb=Math.floor(t.home[gali]-fakeGalley*fakeNumber/realNumber); // Determining how many
			var Warnumb=Math.floor(t.home[16]-fakeTS*fakeNumber/realNumber);
			let nongaltspercap=1;
			var warTS = 0;
			//console.log("Home", t.home);
			//console.log("Type", t.type);
			//console.log("fake", t.fake);
			//console.log("speed", t.speed);
			//console.log("scoutfake" ,t.scoutfake);
			//console.log("scoutreal", t.scoutreal);


            for (var i in t.home) {
                if (t.type[i]==14 && t.type[i]==17 ) {
        //Galley Info
                    if (t.type[i]==14) {
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                t.real[i]==1;
                                t.fake[i]==1;
                            } else {
                                t.real[i]==1;
                                t.fake[i]==0;
                            }
                        }
                    }

        //Senator Info
                    if (t.type[i]==17) {
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {

                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                if (t.home[i]>=fakeNumber+realNumber) {
                                    t.fake[i]=1;
                                    t.real[i]=1;
                                } else {
                                    t.fake[i]=0;
                                    t.real[i]=1;
                                }
                            }else {
                                t.fake[i]=0;
                                t.real[i]=1;
                            }
                        } else if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            t.real[i]=0;
                            t.fake[i]=1;
                        } else {
                            t.real[i]=0;
                            t.fake[i]=0;
                        }
                    }
					/*
					if (t.type[i]==16 ) {
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                t.fake[i]=Math.ceil(fakeTS*t.home[i]);
                                t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakeNumber)/realnumber);
                            } else {
                                t.real[i]=Math.floor((t.home[i])/realNumber);
                            }
                        }
                    }
					*/
        //Warship Info

                }
            }
    //Does Not include Galley & Does Not Include Senator
            for (var i in t.home) {
                if (i!=gali && t.type[i]!=17) {
					if ($("#usereal"+t.type[i]).prop("checked")===true) {
						if ($("#usefake"+t.type[i]).prop("checked")===true) {
							if (t.type[i]!=16){
								var troopscore = (TroopScoreIndex[t.type[i]] * t.home[i]) - (fakeTS * fakeNumber);
								var maxscore = galcap * nongaltspercap;
								if (troopscore > maxscore) {
									nongalts += Math.floor(maxscore / troopscore) * troopscore / realNumber;
								} else {
									nongalts += troopscore / realNumber;
								}
							} else {

								warTS += Math.floor( ((TroopScoreIndex[t.type[i]] * t.home[i]) - (fakeTS * fakeNumber))/400);
								//console.log("Inside");
							}
						} else {
							if (t.type[i]!=16){
							nongalts += TroopScoreIndex[t.type[i]] * (t.home[i]) / realNumber;
							} else {
							warTS += Math.floor(((TroopScoreIndex[t.type[i]] * t.home[i])/realNumber)/400);
							//console.log("Outside");
							}
						}
					}
				}

    //Includes Senator
                if (t.type[i]==17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            if (t.home[i]>=fakeNumber+realNumber) {
                                nongalts+=(t.home[i]-fakeNumber)/realNumber;
                            } else {
                                nongalts+=(t.home[i]-fakeNumber)/realNumber;
                            }
                        } else {
                            nongalts+=t.home[i]/realNumber;
                        }
                    }
                }
            }
            var fakerat=0;
            for (var i in t.home) {
                if (i!=gali) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        fakerat+=TroopScoreIndex[t.type[i]]*t.home[i];
                    }
                }
            }
    // number of senators to send on each fake/reak attack
            for (var i in t.home) {
                if (i!=gali && t.type[i]!=17) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        t.fake[i]=Math.ceil(fakeTS*t.home[i]/fakerat);
                    }
                }
				if (t.type[i]==16) {
				 if ($("#usefake"+t.type[i]).prop( "checked")===true) {
					t.fake[i]=Math.ceil((fakeTS+fakeGalley*100)*t.home[i]/fakerat);
				 }
				}
				if (t.type[i]==17) {
					if ($("#usereal"+t.type[i]).prop( "checked")===true) {
						if ($("#usefake"+t.type[i]).prop( "checked")===true) {
							if (t.home[i]>=fakeNumber+realNumber) {
								t.fake[i]=1;
								t.real[i]=(t.home[i]-fakeNumber)/realNumber;
							} else {
								t.fake[i]=0;
								t.real[i]=1;
							}
						} else {
							t.fake[i]=0;
							t.real[i]=t.home[i]/realNumber;
						}
					} else if ($("#usefake"+t.type[i]).prop( "checked")===true) {
						t.real[i]=0;
						t.fake[i]=1;
					} else {
					t.real[i]=0;
					t.fake[i]=0;
					}
				}
            }
            for (var i in t.home) {
                if (i!=gali && t.type[i]!=17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            if (nongalts>galcap) {
                                t.real[i]=Math.floor(galcap/nongalts) + warTS;
                            } else {
                                t.real[i]= nongalts + warTS;
                            }
                        } else {
                            if (nongalts>galcap) {
                                t.real[i]=Math.floor(galcap/nongalts) + warTS;
                            } else {
                                t.real[i]=nongalts + warTS;
                            }
                            t.fake[i]=0;
							//console.log("not galley or senator");
						}
                    }
                }
            }
			if ($("#usefake14").prop( "checked")===true && $("#usefake16").prop( "checked")===true) {
				if (t.type.indexOf(14)>-1){
				t.fake[gali]=1;
				} else {
				t.fake[gali]=0;
				t.fake[warp]= Math.ceil((fakeTS+fakeGalley*100)*t.home[i]);
				//console.log("1 Galley + Min Warships");
				}
			} else if (t.type.indexOf(14)>-1 && $("#usefake14").prop( "checked")===true) {
				t.fake[gali]=fakeGalley;
				//console.log("Just Fake Galley");
			}
            t.real[gali]=Math.ceil(nongalts/500);

			//console.log("FakeGalley:", fakeGalley);
			//console.log("WarTS:", warTS);
			//console.log("nongalts:", nongalts);
			//console.log("realNumber:", realNumber);
			//console.log("fakeNumber:", fakeNumber);
			//console.log("Fakerat:", fakerat);
			//console.log("Fakets:", fakeTS);
			//console.log("GalleyReal:", t.real[gali]);




        }
        else {
			if (t.type[i]==16  ) {
				time=TroopSpeedIndex[16]/FaithSpeedIndex[16]*maxdist;
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                t.fake[i]=Math.ceil((fakeTS+fakeGalley*100)*t.home[i]);
								t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakeNumber)/realNumber);
								//t.fake[gali]=0;
                            } else {
                                t.real[i]=Math.floor((t.home[i])/realNumber);
								//t.fake[gali]=Math.ceil((fakeTS+fakeGalley*100)*t.home[i]);
								//console.log("WarshipFake:", t.fake[16]);
								//console.log("WarshipReal:", t.real[16]);
                            }

                        }

                    }
					if (t.type[i]==15  ) {
				time=TroopSpeedIndex[15]/FaithSpeedIndex[15]*maxdist;
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                t.fake[i]=Math.ceil((fakeTS+fakeGalley*100)*t.home[i]);
								t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakeNumber)/realNumber);
								//t.fake[gali]=0;
                            } else {
                                t.real[i]=Math.floor((t.home[i])/realNumber);
								//t.fake[gali]=Math.ceil((fakeTS+fakeGalley*100)*t.home[i]);
								//console.log("StingerFake:", t.fake[15]);
								//console.log("StingerReal:", t.real[15]);
                            }

                        }

                    }
            var fakerat=0;
            time=Math.max.apply(Math, t.speed)*maxdist;
            //Adding all the TS standing home with fake ticked into fakerat
            for (var i in t.home) {
                if (t.type[i]!==17) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        fakerat+=TroopScoreIndex[t.type[i]]*t.home[i];
                    }
                }
            }
            //getting fake TS proportions of each troop type in a fake attack and moving them into t.fake[i]
            for (var i in t.home) {
                if (t.type[i]!=17) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        t.fake[i]=Math.ceil((fakeTS+fakeGalley*100)*t.home[i]/fakerat);
                    }
                }
            }

            //subracting fake numbers to get real numbers and distributing senator too
            for (var i in t.home) {
                if (t.type[i]!=17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                           t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakeNumber)/realNumber);
                        } else {
                                t.real[i]=Math.floor((t.home[i])/realNumber);
                        }
                    } else {t.real[i]=0;}
                }

            //senator numbers
                if (t.type[i]==17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            if (t.home[i]>=fakeNumber+realNumber) {
                            t.fake[i]=1;
                            t.real[i]=1;
                            }
                            else {
                            t.fake[i]=0;
                            t.real[i]=1;
                            }
                        } else {
                                t.fake[i]=0;
                                t.real[i]=1;
                        }
                    } else if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            t.real[i]=0;
                            t.fake[i]=1;
                    } else {
                            t.real[i]=0;
                            t.fake[i]=0;
                    }
                }
            }

			//console.log("Land FakeGalley:", fakeGalley);
			//console.log("Land nongalts:", nongalts);
			//console.log("Land realNumber:", realNumber);
			//console.log("Land fakeNumber:", fakeNumber);
			//console.log("Land Fakerat:", fakerat);
			//console.log("Land Fakets:", fakeTS);
			//console.log("Land GalleyReal:", t.real[gali]);

        }









        var alltimes={a:[],b:[],c:[],d:[]};
        var l=0; var end=targets.x.length;
        function loop() {
            if (targets.real[l]==1) {
        // Assault Real
                if ($("#realtype").val()==0) {
                    pvptabs.tabs( "option", "active", 0 );
                    for (var i in t.real) {
                        $("#assIP"+t.type[i]).val(t.real[i]);
                    }
                    $("#assaultxcoord").val(targets.x[l]);
                    $("#assaultycoord").val(targets.y[l]);
                    setTimeout(function(){
                        $("#assaultcoordgo")[0].click();
                    },100);
                    $("#assaulttimingselect").val(3).change();
                    var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                    $("#assaulttimeinp").val(date);
                    alltimes.a.push($("#assaulttraveltime").text());
                    $("#assaultGo")[0].click();
                }
        // Siege Real
                if ($("#realtype").val()==1) {
                    pvptabs.tabs( "option", "active", 1 );
                    for (var i in t.real) {
                        $("#sieIP"+t.type[i]).val(t.real[i]);
                    }
                    $("#siexcoord").val(targets.x[l]);
                    $("#sieycoord").val(targets.y[l]);
                    setTimeout(function(){
                        $("#siegecoordgo")[0].click();
                    },100);
                    $("#siegetimingselect").val(3).change();
                    var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                    $("#siegetimeinp").val(date);
                    alltimes.a.push($("#siegetraveltime").text());
                    $("#siegeGo")[0].click();
                }
        // Plunder Real
                if ($("#realtype").val()==2) {
                    pvptabs.tabs( "option", "active", 2 );
                    for (var i in t.real) {
                        $("#pluIP"+t.type[i]).val(t.real[i]);
                    }
                    $("#pluxcoord").val(targets.x[l]);
                    $("#pluycoord").val(targets.y[l]);
                    setTimeout(function(){
                         $("#plundercoordgo")[0].click();
                    },100);
                    $("#plundertimingselect").val(3).change();
                    var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                    $("#plundtimeinp").val(date);
                    alltimes.a.push($("#plundtraveltime").text());
                     $("#plunderGo").prop('disabled', false);
                    $("#plunderGo")[0].click();
                }
        // Scout Real
                    if ($("#realtype").val()==3) {
                        pvptabs.tabs( "option", "active", 3 );
                        for (var i in t.real) {
                            $("#scoIP"+t.type[i]).val(t.real[i]);
                        }
                        $("#scoIP7").val(t.scoutreal[0]);
                        $("#scoxcoord").val(targets.x[l]);
                        $("#scoycoord").val(targets.y[l]);
                        setTimeout(function(){
                            $("#scoutcoordgo")[0].click();
                        },100);
                        $("#scouttimingselect").val(3).change();
                        var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                        $("#scouttimeinp").val(date);
                        $("#scoutGo")[0].click();
                    }
            }
            if (targets.real[l]==0) {
        // Assault Fake
               if ($("#faketype").val()==0) {
                        pvptabs.tabs( "option", "active", 0 );
                    for (var i in t.real) {
                        $("#assIP"+t.type[i]).val(t.fake[i]);
                    }
                    $("#assaultxcoord").val(targets.x[l]);
                    $("#assaultycoord").val(targets.y[l]);
                    setTimeout(function(){
                         $("#assaultcoordgo")[0].click();
                    },100);
                        $("#assaulttimingselect").val(3).change();
                    var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                    $("#assaulttimeinp").val(date);
                    alltimes.a.push($("#assaulttraveltime").text());
                    $("#assaultGo")[0].click();
                }
        // Siege Fake
                   if ($("#faketype").val()==1) {
                        pvptabs.tabs( "option", "active", 1 );
                        for (var i in t.real) {
                            $("#sieIP"+t.type[i]).val(t.fake[i]);
                        }
                        $("#siexcoord").val(targets.x[l]);
                        $("#sieycoord").val(targets.y[l]);
                        setTimeout(function(){
                             $("#siegecoordgo")[0].click();
                        },100);
                        $("#siegetimingselect").val(3).change();
                        var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                        $("#siegetimeinp").val(date);
                        alltimes.a.push($("#siegetraveltime").text());
                        $("#siegeGo")[0].click();
                    }
        // Plunder Fake
                if ($("#faketype").val()==2) {
                    pvptabs.tabs( "option", "active", 2 );
                    for (var i in t.real) {
                        $("#pluIP"+t.type[i]).val(t.fake[i]);
                    }
                    $("#pluxcoord").val(targets.x[l]);
                    $("#pluycoord").val(targets.y[l]);
                    setTimeout(function(){
                         $("#plundercoordgo")[0].click();
                    },100);
                    $("#plundertimingselect").val(3).change();
                    var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                    $("#plundtimeinp").val(date);
                    alltimes.a.push($("#plundtraveltime").text());
                    $("#plunderGo").prop('disabled', false);
                    $("#plunderGo")[0].click();
                }
        // Scout Fake
                if ($("#faketype").val()==3) {
                        if($("#scoutick").prop( "checked")===true){
                            pvptabs.tabs( "option", "active", 3 );
                            $("#scoIP7").val(1); // 1 Scout
                            $("#scoIP14").val(30); //30 Galley
                            $("#scoxcoord").val(targets.x[l]);
                            $("#scoycoord").val(targets.y[l]);
                            setTimeout(function(){
                                 $("#scoutcoordgo")[0].click();
                            },100);
                            $("#scouttimingselect").val(3).change();
                            var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                            $("#scouttimeinp").val(date);
                            $("#scoutGo")[0].click();
                        }
                    else{
                        pvptabs.tabs( "option", "active", 3 );
                        for (var i in t.real) {
                            $("#scoIP"+t.type[i]).val(t.fake[i]);
                        }
                        $("#scoIP7").val(t.scoutfake[0]);
                        $("#scoxcoord").val(targets.x[l]);
                        $("#scoycoord").val(targets.y[l]);
                        setTimeout(function(){
                             $("#scoutcoordgo")[0].click();
                        },100);
                        $("#scouttimingselect").val(3).change();
                        var date=$("#attackDat").val()+" "+$("#attackHr").val()+":"+$("#attackMin").val()+":"+$("#attackSec").val();
                        $("#scouttimeinp").val(date);
                        $("#scoutGo")[0].click();
                    }
                }
            }
            l++;
            if (l<end) {
                setTimeout( loop, 1000 );
            }
            else {
                setTimeout( function() {
                    art();
                }, 4000 );
             }
        }
        loop();

    //RETURN FUNCTION
        function art() { //setting return time for raids according to city view attacks list
            //////console.log(poll2.OGA);
            $("#commandsPopUpBox").hide();
            if ($("#retcheck").prop( "checked")==true) {
                $(".toptdinncommtbl1:first")[0].click();
                setTimeout(function() {
                    $("#outgoingPopUpBox").hide();
                },500);
                var minddate = new Date();
                var first=true;
                for (var i in poll2.OGA) {
                    //////console.log(targets.cstr,poll2.OGA[i][5]);
                    if (targets.cstr.indexOf(poll2.OGA[i][5])>-1) {
                        if (first) {
                            first=false;
                            var a=poll2.OGA[i][6].substr(30);
                            var b=a.substr(0,a.indexOf('<'));
                            var time=b.split(" ");
                            var ttime=time[2].split(":");
                            minddate.setHours(Number(ttime[0]));
                            minddate.setMinutes(Number(ttime[1]));
                            minddate.setSeconds(Number(ttime[2]));
                            //////console.log(time[1]);
                            if (time[1]=="Tomorrow") {
                                minddate.setDate(minddate.getDate() + 1);
                                //////console.log("tmrw");
                            } else if (time[1]!="Today") {
                                var ddate=time[1].split("/");
                                ////console.log(ddate);
                                minddate.setDate(Number(ddate[1]));
                                minddate.setMonth(Number(ddate[0]-1));
                                //////console.log(minddate);
                            }
                        } else {
                            var a=poll2.OGA[i][6].substr(30);
                            var b=a.substr(0,a.indexOf('<'));
                            var time=b.split(" ");
                            var ttime=time[2].split(":");
                            var d=new Date();
                            d.setHours(ttime[0]);
                            d.setMinutes(ttime[1]);
                            d.setSeconds(ttime[2]);
                            if (time[1]=="Tomorrow") {
                                //////console.log("tmrw");
                                d.setDate(minddate.getDate() + 1);
                            } else if (time[1]!="Today") {
                                var ddate=time[1].split("/");
                                //////console.log(ddate);
                                d.setDate(ddate[1]);
                                d.setMonth(ddate[0]-1);
                                //////console.log(minddate);
                            }
                            //////console.log(d,minddate);
                            if (d<minddate) {
                                minddate=d;
                            }
                        }
                    }
                }
                minddate.setHours(minddate.getHours()-Number($("#retHr").val()));
                //////console.log(minddate);
                var hour=minddate.getHours();
                if (hour<10) {
                    hour="0"+hour;
                }
                var min=minddate.getMinutes();
                if (min<10) {
                    min="0"+min;
                }
                var sec=minddate.getSeconds();
                if (sec<10) {
                    sec="0"+sec;
                }
                var retdate=getFormattedDate(minddate)+" "+hour+":"+min+":"+sec;
                //////console.log(retdate);
                $("#raidrettimesela").val(3).change();
                $("#raidrettimeselinp").val(retdate);
                $("#doneOGAll")[0].click();
               alert("Attack set and troops returned");

            }
            else {
                alert("Attack set");

            }
        }
    }

	/*



	END SEND Attack Function



	END WAR COUN - Secondary Functions




	START GLOBAL FUNCTIONS


	*/

	// Mass Res Changes:
	$(document).on("click", ".fillXbut", function() {
		var $row = $(this).closest("tr");
		$row.empty().attr("id", "filltr0");
		$("#filltr0").remove();
	});
	//Updated 3.3.23 Fact
	function massresTemple() {
		setTimeout(() => {
			$("#msendtradesel").val(2);
			$("#msendocont").prop("checked", false);
		}, 10);
	}
	// Wait until the element with id 'mrstctbbresult' exists
	var checkExist = setInterval(function() {
		if ($('#mrstctbbresult').length) {
			var mrstctbbresultTable = document.getElementById(mrstctbbresult);
			sorttable.makeSortable(mrstctbbresult);
			clearInterval(checkExist);

			// Execute the function to format the time
			formatTime();

			// Add an event listener to the 'msendTCsend' button
			$('#msendTCsend').click(function() {
				formatTime();

			});
		}
	}, 100);

	function formatTime() {
		$('#fillresbody tr').each(function() {
			var timeCells = $(this).find('td:nth-child(5)');

			// loop through each td element
			for (var i = 0; i < timeCells.length; i++) {
				var timeString = timeCells[i].textContent;

				// split the time string into hours, minutes, and seconds
				var timeArray = timeString.split(':');
				var hours = parseInt(timeArray[0], 10);
				var minutes = parseInt(timeArray[1], 10);
				var seconds = parseInt(timeArray[2], 10);

				// pad the hours, minutes, and seconds with leading zeroes
				if (hours < 10) {
					hours = '0' + hours;
				}
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				if (seconds < 10) {
					seconds = '0' + seconds;
				}

				// combine the hours, minutes, and seconds into a formatted time string
				var formattedTime = hours + ':' + minutes + ':' + seconds;

				// update the td element with the formatted time string
				timeCells[i].textContent = formattedTime;

			}
		});
	}
	$('#mrstctbbresult').css('height', 'auto');
	$('#fillsendgo').css({
		'float': 'none',
		'margin': 'auto'
	});
	$('#fillresdiv').css({
		'border-radius': '12px',
		'text-align': 'center'
	});
	$('#filltabdiv').css({
		'background': '#99805d',
		'border-radius': '6px',
		'border': '1px ridge #f3d298',
		'margin-left': 'auto',
		'margin-right': 'auto'
	});
	    //3.29.23 Changed from DomNodeInserted for better cross-browser compatability
		// Watch for changes in the 'fillresbody' element using MutationObserver
	var fillresbody = document.querySelector('#fillresbody');
	if (fillresbody) {
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				formatTime();
				$("#filltr0").remove();
			});
		});
		observer.observe(fillresbody, {childList: true});
	}

	sorttable.makeSortable(mrstctbbresult);


	//for on/off councilor
	function coonvalue() {
		if (coofz == 1) {
			coon = 0;
		}
		if (coofz == 0) {
			coon = 1;
		}
		return coon;
	}

	// function to update table width
	function updateTableWidth() {
		$('.tradinntabl td:nth-child(3) span').attr('style', 'width: 50px !important');
	}

	// check for new tables every second
	setInterval(function() {
		$('table.tradinntabl').each(function() {
			// check if third column width needs to be updated
			if ($(this).find('td:nth-child(3) span').css('width') !== '50px') {
				updateTableWidth();
			}
		});
	}, 1000);


	//Buttons convert,fill,demolish,
	//3246-3459
	$().ready(function() {

		let gfunkyquickbutton = `<div id='quickbuildings' style=' width: 290px; margin-top: 10px; margin-left: auto; margin-right: auto; border: 3px solid #886f53; align-content: center;'>
		<div id='qb23' class='queueBar' style='text-align:center'>
		<div id='qbcbut' class='tradeqarr2'>
		<div></div>
		</div>
		<span class='qbspan' id='qbspanhead'>Gfunky's Quick Buttons</span>
		</div>
		<div id='qbwin' class='queueWindow' style='display: block; padding-top: 15px; padding-bottom: 15px;' >
		<button id='fb1' style='height:28px; width:46%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Councillors ON/OFF</button>
		<button id='fb2' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Refine</button>
		<button id='fb3' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Raid</button>
		<button id='fb5' style='height:28px; width:46%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Clear Resources</button>
		<button id='fb7' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Upgrade</button>
		<button id='fb8' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Up + Que</button>
		<button id='fb6' style='height:28px; width:46%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Gfunky+ Changelog</button>
		<button id='fb9' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Downgrade</button>
		<button id='fb4' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Demolish</button>
		</div>
		</div>
		</div>`;
		$("#qbDiv").after(bdcountbox);
		var bdcountbox = `<div id='currentbuildings' style=' width: 290px; margin-top: 10px; margin-left: auto; margin-right: auto; border: 3px solid #886f53; align-content: center;'>
		<div id='bdcountbar' class='queueBar'>
		<div id='bdcountbut' class='tradeqarr2'>
		<div></div>
		</div>
		<span class='qbspan'>Gfunky's Current Buildings</span>
		<div id='numbdleft' class='barRightFloat tooltipstered'>0</div>
		</div>
		<div id='bdcountwin' class='queueWindow' style='display: block; padding-top: 15px; padding-bottom: 15px;' ></div>
		</div>`
		$("#qbDiv").before(gfunkyquickbutton);
		$('#sortbut').after(convbut);
		//var fillbut='<button id="filq" class="greenb tooltipstered" style="height:18px; width:40px; margin-left:7px; margin-top:5px ; border-radius:4px ; font-size: 10px !important; padding: 0px;">Fill</button>';
		// $('#csspan').before(fillbut);


		var convbut = '<button id="convque" class="greenb tooltipstered" style="height:18px; width:60px; margin-left:7px; margin-top:5px ; border-radius:6px ; font-size: 10px !important; padding: 0px;">Convert</button>';
		$('#csspan').before(convbut);
		$('#convque').click(function() {
			const cfd = poll2.city.cid;
			event.stopPropagation();
			$.post('/overview/mconv.php', {
				a: cfd
			});
		});
		$("#fb1").click(function() {
			$('#councillorPopUpBox').show();
			$("#ui-id-11")[0].click();
			$("#couonoffdv")[0].click();
			setTimeout(function() {
				$("#councillorXbutton")[0].click();
			});
			if ($("#couonoffdv").hasClass("couonpos")) {
				$("#fb1").removeClass("redb").addClass("greenb");
				$("#fb1").text("Turn off Councillors");
			} else if ($("#couonoffdv").hasClass("couoffpos")) {
				$("#fb1").removeClass("greenb").addClass("redb");
				$("#fb1").text("Turn on Councillors");
			}
		});
		$("#fb2").click(function() {
			$('#tradePopUpBox').show();
			setTimeout(function() {
				$("#ui-id-27")[0].click();
			}, 100);
		});
		$("#fb3").click(function() {
			$('#warcouncbox').show();
			$("#ui-id-19")[0].click();
		});
		let autodemoon = 0;
		$("#fb4").click(function() {
			if (autodemoon == 0) {
				autodemoon = 1;
				$(this).removeClass('greenb');
				$(this).addClass('activeAllyButton');
			} else {
				autodemoon = 0;
				$(this).removeClass('activeAllyButton');
				$(this).addClass('greenb');
			}
			autoupon = 0;
			$("#fb7").removeClass('activeAllyButton').addClass('greenb');
			autoupqon = 0;
			$("#fb8").removeClass('activeAllyButton').addClass('greenb');
			autodownon = 0;
			$("#fb9").removeClass('activeAllyButton').addClass('greenb');
		});
		var autoupon = 0;
		$("#fb7").click(function() {
			if (autoupon == 0) {
				autoupon = 1;
				$(this).removeClass('greenb');
				$(this).addClass('activeAllyButton');
			} else {
				autoupon = 0;
				$(this).removeClass('activeAllyButton');
				$(this).addClass('greenb');
			}
			autodemoon = 0;
			$("#fb4").removeClass('activeAllyButton').addClass('greenb');
			autoupqon = 0;
			$("#fb8").removeClass('activeAllyButton').addClass('greenb');
			autodownon = 0;
			$("#fb9").removeClass('activeAllyButton').addClass('greenb');
		});
		var autoupqon = 0;
		$("#fb8").click(function() {
			if (autoupqon == 0) {
				autoupqon = 1;
				$(this).removeClass('greenb');
				$(this).addClass('activeAllyButton');
			} else {
				autoupqon = 0;
				$(this).removeClass('activeAllyButton');
				$(this).addClass('greenb');
			}
			autodemoon = 0;
			$("#fb4").removeClass('activeAllyButton').addClass('greenb');
			autoupon = 0;
			$("#fb7").removeClass('activeAllyButton').addClass('greenb');
			autodownon = 0;
			$("#fb9").removeClass('activeAllyButton').addClass('greenb');
		});
		var autodownon = 0;
		//Updated 3.10.23 Fact
		$("#fb9").click(function() {
			autodownon = !autodownon;
			$(this).toggleClass('activeAllyButton greenb');
			autodemoon = 0;
			$("#fb4").removeClass('activeAllyButton').addClass('greenb');
			autoupon = 0;
			$("#fb7").removeClass('activeAllyButton').addClass('greenb');
			autoupqon = 0;
			$("#fb8").removeClass('activeAllyButton').addClass('greenb');
		});

		$("#fb5").click(function() {
			$('#clearreswin').show();
			setTimeout(function() {
				$("#clearresquad")[0].click();
			}, 500);
		});
		$("#fb6").click(function() {
			gfunkychangelogWin();
		});
		$("#fb10").click(function() {
			gfunkyoptionWin();
		});
		$("#centarrowNextDiv, #centarrowPrevDiv, #ddctd, #qbuildtbButton").click(function() {
			["fb4", "fb7", "fb8", "fb9"].forEach(function(id) {
				$("#" + id).removeClass("redb").addClass("greenb");
			});
			autodemoon = autoupon = autoupqon = autodownon = 0;
		});

		//Updated 3.10.23 Fact
		$("#city_map").click(function() {
			const actions = [{
					id: "#buildingDemolishButton",
					event: "click",
					data: {
						originalEvent: "1"
					},
					enabled: autodemoon
				},
				{
					id: "#buildingUpgradeButton",
					event: "click",
					data: {
						originalEvent: "1"
					},
					enabled: autoupon
				},
				{
					id: "#queuecouncupgradbut",
					event: "click",
					data: {
						originalEvent: "1"
					},
					enabled: autoupqon
				},
				{
					id: "#buildingDowngradeButton",
					event: "click",
					data: {
						originalEvent: "1"
					},
					enabled: autodownon
				}
			];

			actions.forEach(({
				id,
				event,
				data,
				enabled
			}) => {
				if (enabled) {
					$(id).trigger($.Event(event, data));
				}
			});
		});

		const overviewbut = "<button class='tabButton' id='gfoverview'>Overviews</button>";
		$("#items").after(overviewbut);
		$("#gfoverview").click(function() {
			if (gfoverview) {
				opengfunkyoverviewwin();
				var ab = city.cid;
				var acg = poll2.city.cg;
				let hubdata = {
					a: JSON.stringify(acg),
					cid: ab
				};
				$.ajax({
					url: 'includes/cgS.php',
					type: 'POST',
					async: true,
					data: hubdata
				});
			} else {
				$("#gfunkyoverviewwin").toggle(gfoverview);
			}
		});
		$("#gfunkyoverviewwin").click(function() {
			//////console.log("popsum");
		});
		$("#recruitmentQueue").before(bdcountbox);
		//Updated 3.10.23 Fact
		$("#bdcountbut").click(function() {
			const $bdcountwin = $("#bdcountwin");
			const $bdcountbut = $(this);

			$bdcountwin.toggle();
			$bdcountbut.toggleClass("tradeqarr1 tradeqarr2");
			bdcountshow = $bdcountwin.is(":visible");
		});


		//Updated 3.10.23 Fact
		$("#qbcbut").click(function() {
			const $qbwin = $("#qbwin");
			const $qbcbut = $(this);
			$qbwin.toggle();
			$qbcbut.toggleClass("tradeqarr1 tradeqarr2");
			qbcshow = $qbwin.is(":visible");
		});

		const wood50 = "<td style='width: 50px'><button class='raidchange' id='wood50' >Add 50%</button></td>";
		const wood45 = "<td style='width: 50px'><button class='raidchange' id='wood45' >Add 45%</button></td>";
		const stone50 = "<td  style='width: 75px'><button class='raidchange' id='stone50'>Add 50%</button></td>";
		const stone45 = "<td style='width: 75px'><button class='raidchange' id='stone45' >Add 45%</button></td>";
		const iron50 = "<td style='width: 75px'><button class='raidchange' id='iron50' >Add 50%</button></td>";
		const iron45 = "<td style='width: 75px'><button class='raidchange' id='iron45' >Add 45%</button></td>";
		const food50 = "<td style='width: 50px'><button class='raidchange' id='food50' >Add 50%</button></td>";
		const food45 = "<td style='width: 50px'><button class='raidchange' id='food45' >Add 45%</button></td>";
		$("#woodmaxbutton").parent().after(wood50);
		$("#woodmaxbutton").parent().after(wood45);
		$("#stonemaxbutton").parent().after(stone50);
		$("#stonemaxbutton").parent().after(stone45);
		$("#ironmaxbutton").parent().after(iron50);
		$("#ironmaxbutton").parent().after(iron45);
		$("#foodmaxbutton").parent().after(food50);
		$("#foodmaxbutton").parent().after(food45);

		function setResourceAmount(resource, percent) {
			const resMaxAmount = Number($(`#max${resource}send`).text().replace(/,/g, ""));
			const carts = $("#landseasendres").val() === "1" ? Math.floor(Number($("#availcartscity").text()) * percent) * 1000 : Math.floor(Number($("#availshipscity").text()) * percent) * 10_000;
			const resAmount = Math.min(resMaxAmount, carts);
			$(`#${resource}sendamt`).val(resAmount);
		}
		$("#wood50").click(() => setResourceAmount("wood", 0.5));
		$("#wood45").click(() => setResourceAmount("wood", 0.45));
		$("#stone50").click(() => setResourceAmount("stone", 0.5));
		$("#stone45").click(() => setResourceAmount("stone", 0.45));
		$("#iron50").click(() => setResourceAmount("iron", 0.5));
		$("#iron45").click(() => setResourceAmount("iron", 0.45));
		$("#food50").click(() => setResourceAmount("food", 0.5));
		$("#food45").click(() => setResourceAmount("food", 0.45));
	});
	//Updated 3.10.23 Fact

	function makebuildcount() {
		$("#bdtable").remove();
		const currentbd = {
			name: [],
			bid: [],
			count: []
		};
		////console.log('buildingdata:', buildingdata);
		////console.log('buildings.bid:', buildings.bid);
		let bdNumber = 0;
		buildingdata.forEach(building => {

			const index = buildings.bid.findIndex(bid => bid === building.bid);
			if (index > -1 && building.bid !== 455) {
				const currentIndex = currentbd.bid.findIndex(bid => bid === building.bid);
				if (currentIndex > -1) {
					currentbd.count[currentIndex]++;
				} else {
					currentbd.name.push(buildings.name[index]);
					currentbd.bid.push(buildings.bid[index]);
					currentbd.count.push(1);
				}
				bdNumber++;
			}
		});

		const bdtable = createBdTable(currentbd);

		$("#bdcountwin").html(bdtable);
		$("#numbdleft").html(bdNumber);
	}
	setInterval(makebuildcount, 10000); // 10000 milliseconds = 10 seconds
	// New - Building Data Table 3.10.23 Fact
	function createBdTable(currentbd) {
		let bdtable = `<table id='bdtable' style='margin-left: auto; margin-right: auto;'>
					  <tbody>
						<tr>`;
		currentbd.bid.forEach((bid, i) => {
			if (i < 9 || ((i > 9 && i < 19) || (i > 19 && i < 29))) {
				bdtable += `<td style='text-align:center; width:30px; height:30px; #c7e2e7-space:normal;'>
						<div style='background-image: url(/images/city/buildings/icons/${currentbd.name[i]}.png); background-size:contain;background-repeat:no-repeat;width:30px; height:30px;'>
						</div>${Number(currentbd.count[i])}
					  </td>`;
			}
			if (i == 9 || i == 19) {
				bdtable += `</tr>
					  <tr>
						<td style='text-align:center; width:30px; height:30px; #c7e2e7-space:normal;'>
						  <div style='background-image: url(/images/city/buildings/icons/${currentbd.name[i]}.png); background-size:contain;background-repeat:no-repeat;width:30px; height:30px;'>
						  </div>${Number(currentbd.count[i])}
						</td>`;
			}
		});
		bdtable += `</tr>
				</tbody>
			  </table>`;
		return bdtable;
	}

	//Updated 3.3.23 Fact
	async function recallraidl100(citytc, TS_type, TroopLootIndex, MountainLootIndex, ForestHillLootIndex) {
		let loot, total, total_number = 0,
			total_lootz = 0,
			i = 0;
		for (const x in citytc) {
			total = Number(citytc[x]);
			total_number += total * Number(TS_type[i]);
			total_lootz += total * Number(TroopLootIndex[i]);
			i++;
			if (i === 17) {
				break;
			}
		}
		const lootpertroop = total_lootz / total_number;

		const $commandTableRows = $("#commandtable tbody tr");
		for (let l = 0; l < $commandTableRows.length; l++) {
			const trlist = $commandTableRows.eq(l);
			const lvlprog = trlist.find(".commandinntabl tbody tr:nth-child(3) td:nth-child(1) span:nth-child(1)").text();
			const splitlp = lvlprog.split("(");
			const Dungeon_lvl = Number(splitlp[0].match(/\d+/gi));
			const Dungeion_prog = Number(splitlp[1].match(/\d+/gi));
			const dungeon = splitlp[0].substring(0, splitlp[0].indexOf(','));
			loot = dungeon === "Mountain Cavern" ? MountainLootIndex : ForestHillLootIndex;
			const total_loot_c = Math.ceil(loot[Number(Dungeon_lvl) - 1] * ((1 - Number(Dungeion_prog) / 100) + 1));
			const Unitno = trlist.find(".commandinntabl tbody tr:nth-child(1) td:nth-child(2) span").text();
			const temp7 = Unitno.match(/[\d,]+/g);
			const Units_raiding = Number(temp7[0].replace(',', ''));
			const lootperraid = lootpertroop * Units_raiding;
			const percentage_ofloot = Math.ceil((lootperraid / total_loot_c) * 100);
			if (Number(percentage_ofloot) < 90) {
				trlist.find(".commandinntabl tbody tr:nth-child(2) td:nth-child(1) table tbody tr td:nth-child(2)")[0].click();
				$("#raidrettimesela").val(1).change();
				await new Promise(resolve => setTimeout(resolve, 300));
				$("#doneOG")[0].click();
				await new Promise(resolve => setTimeout(resolve, 500));
			}
		}
	}



	//carry check in command window
	//Updated 3.3.23 Fact

	function carrycheck() {
		let loot;
		let total;
		let total_number = 0;
		let total_lootx = 0;
		let i = 0;

		// Cache the table rows and other elements to avoid selecting them multiple times
		const $commandtable = $("#commandtable");
		const $rows = $commandtable.find("tbody tr");
		const lootIndex = cotg.city.dungeon() === "Mountain Cavern" ? MountainLootIndex : ForestHillLootIndex;
		const $toptdinncommtbl1 = $rows.find(".toptdinncommtbl1.outgblink.shRAin");
		const $commandinntabl = $rows.find(".commandinntabl");

		for (const x in citytc) {
			total = Number(citytc[x]);
			total_number += total * Number(TS_type[i]);
			total_lootx += total * Number(TroopLootIndex[i]);
			i++;
			if (i === 17) {
				break;
			}
		}

		const lootpertroop = total_lootx / total_number;

		// Loop through the rows and update the Carry and colspan values
		for (let i = 1; i < $rows.length; i++) {
			const $trlist = $($rows[i]);
			const lvlprog = $trlist.find(".commandinntabl tbody tr:nth-child(2) td:nth-child(1) span:nth-child(1)").text();
			const splitlp = lvlprog.split("(");

			if (splitlp.length === 1) {
				continue;
			}

			const Dungeon_lvl = Number(splitlp[0].match(/\d+/gi));
			const Dungeion_prog = Number(splitlp[1].match(/\d+/gi));
			const total_loot_c = Math.ceil(lootIndex[Number(Dungeon_lvl) - 1] * ((1 - Number(Dungeion_prog) / 100) + 1));
			const Unitno = $trlist.find(".commandinntabl tbody tr:nth-child(1) td:nth-child(2) span").text();
			const temp7 = Unitno.match(/[\d,]+/g);
			const Units_raiding = Number(temp7[0].replace(',', ''));
			const lootperraid = lootpertroop * Units_raiding;
			const percentage_ofloot = Math.ceil((lootperraid / total_loot_c) * 100);

			$toptdinncommtbl1[i - 1].textContent = `Carry:${percentage_ofloot}%`;
			$commandinntabl[i - 1].querySelector("tbody tr:nth-child(4) td:nth-child(1)").colSpan = 1;
		}
	}
	/*


		END GLOBAL FUNCTIONS

		Start Incoming Warning System



	Predicting Incoming Troops Section

	*/
	$().ready(function() {	
	

	
	
	
		
		
		

		//adding 2 elements into the html
		var incomingtabledata = $("#incomingsAttacksTable").children().children().children();
		$("#incomingsAttacksTable table thead tr th:nth-child(2)").width(140);
		var Addth = "<th>Lock time</th>";
		incomingtabledata.append(Addth);
		var Addth1 = "<th>Travel time</th>";
		incomingtabledata.append(Addth1);

		const handleIncomings = () => {
			setTimeout(function() {
				incomings();
			}, 1000);
		}

		$("#allianceIncomings").parent().click(handleIncomings);
		$("#incomingsPic").click(handleIncomings);
	});

	function roundingto2(num) {
		return +(`${Math.round(`${num}e+2`)}e-2`);
	}

	function twodigitnum(n) {
		return n > 9 ? `${n}` : `0${n}`;
	}

	function incomings() {
		//  below will give u a variable called speeeed which contains all the possible speed bonuses that can be in game
		var speeeed = [];
		speeeed[0] = 0;
		for (var i = 1; i < 201; i++) {
			speeeed[i] = speeeed[i - 1] + 0.5;
		}

		//  separating all possible speeds for troop types
		var navyspeed = [];
		var scoutspeed = [];
		var cavspeed = [];
		var infspeed = [];
		var artspeed = [];
		var senspeed = [];
		var temp;
		for (i in speeeed) {
			temp = 5 / (1 + speeeed[i] * 1.0 / 100);
			navyspeed[i] = roundingto2(temp);
			temp = 8 / (1 + speeeed[i] * 1.0 / 100);
			scoutspeed[i] = roundingto2(temp);
			temp = 10 / (1 + speeeed[i] * 1.0 / 100);
			cavspeed[i] = roundingto2(temp);
			temp = 20 / (1 + speeeed[i] * 1.0 / 100);
			infspeed[i] = roundingto2(temp);
			temp = 30 / (1 + speeeed[i] * 1.0 / 100);
			artspeed[i] = roundingto2(temp);
			temp = 40 / (1 + speeeed[i] * 1.0 / 100);
			senspeed[i] = roundingto2(temp);
		}
		$("#iaBody tr").each(function() {
			var tid = $(':nth-child(5)', this).children().children().attr("data");
			var sid = $(':nth-child(10)', this).children().attr("data");
			var tx = tid % 65536;
			var sx = sid % 65536;
			var ty = (tid - tx) / 65536;
			var sy = (sid - sx) / 65536;
			var tcont = Math.floor(tx / 100) + Math.floor(ty / 100) * 10;
			var scont = Math.floor(sx / 100) + Math.floor(sy / 100) * 10;
			var dist = Math.sqrt((ty - sy) * (ty - sy) + (tx - sx) * (tx - sx));
			var atime = $(':nth-child(6)', this).text();
			var stime = $(':nth-child(11)', this).text();
			var hdiff = atime.substring(0, 2) - stime.substring(0, 2);
			var mdiff = atime.substring(3, 5) - stime.substring(3, 5);
			var sdiff = atime.substring(6, 8) - stime.substring(6, 8);
			var d = new Date();
			var x = new Date();

			// Arrival Math
			var arrivaltimemonth;
			var arrivaltimedate;
			if (atime.length === 14) {
				arrivaltimemonth = Number(atime.substring(9, 11)); //month
				arrivaltimedate = Number(atime.substring(12)); //date
			} else {
				arrivaltimemonth = d.getMonth() + 1;
				arrivaltimedate = d.getDate();
			}
			var time;
			if (hdiff >= 0) {
				time = 60 * hdiff;
			} else {
				time = (24 + hdiff) * 60;
			}
			if ((atime.length === 14 || stime.length === 14) && hdiff > 0) {
				time += +1440;
				hdiff += 24;
			}
			time += mdiff;
			var ispeed = roundingto2(time / dist);
			time += sdiff / 60;
			var nspeed = roundingto2((time - 60) / dist);
			//adds time taken by troops to return home to arrival time and changed formats
			var locks;
			var lockm;
			var lockh;
			if (sdiff >= 0) {
				locks = sdiff;
			} else {
				locks = 60 + sdiff;
				mdiff = mdiff - 1;
			}
			if (mdiff >= 0) {
				lockm = mdiff;
			} else {
				lockm = 60 + mdiff;
				hdiff = hdiff - 1;
			}
			if (hdiff >= 0) {
				lockh = hdiff;
			} else {
				lockh = hdiff + 24;
			}

			var locktimeh = Number(lockh) + Number(atime.substring(0, 2));
			var locktimem = Number(lockm) + Number(atime.substring(3, 5));
			var locktimes = Number(locks) + Number(atime.substring(6, 8));
			if (locktimes > 59) {
				locktimes = locktimes - 60;
				locktimem = locktimem + 1;
			}
			if (locktimem > 59) {
				locktimem = locktimem - 60;
				locktimeh = locktimeh + 1;
			}
			if (locktimeh > 23) {
				locktimeh = locktimeh - 24;
				arrivaltimedate = arrivaltimedate + 1;
			}
			var atm1 = [1, 3, 5, 7, 8, 10, 12];
			var atm2 = [4, 6, 9, 11];
			if (atm1.indexOf(arrivaltimemonth) > 0) {
				if (arrivaltimedate > 31) {
					arrivaltimedate = 1;
				}
			}
			if (atm2.indexOf(arrivaltimemonth) > 0) {
				if (arrivaltimedate > 30) {
					arrivaltimedate = 1;
				}
			}
			if (arrivaltimemonth === 02) {
				if (arrivaltimedate > 28) {
					arrivaltimedate = 1;
				}
			}
			var addt = $(this);
			// Lock Time Info
			locktimeh = twodigitnum(locktimeh);
			locktimem = twodigitnum(locktimem);
			locktimes = twodigitnum(locktimes);

			arrivaltimemonth = twodigitnum(arrivaltimemonth);
			arrivaltimedate = twodigitnum(arrivaltimedate);
			const arrivalTime = `${locktimeh}:${locktimem}:${locktimes} ${arrivaltimemonth}/${arrivaltimedate}`;

			// Travel Info
			var travelingts = twodigitnum(locks);
			var travelingtm = twodigitnum(lockm);
			var travelingth = twodigitnum(lockh);
			var travelingtd = 0; // Initialize the days variable

			// Adjust the travel time if it exceeds 24 hours
			if (travelingth > 23) {
				var daysToAdd = Math.floor(travelingth / 24); // Calculate how many days need to be added
				travelingth = travelingth % 24; // Calculate the remaining hours
				travelingtd += daysToAdd; // Add the days to the travel time
			}

			// Format the travel time as a string in the format dd:hh:mm:ss
			travelingtd = twodigitnum(travelingtd);
			const travelTime = `${travelingtd}:${travelingth}:${travelingtm}:${travelingts}`;
			//output of results


			var newtd = "<td></td>";
			const attackingAlliance = $(':nth-child(8)', this);
			let allianceName = '';

			if (attackingAlliance.length) {
				if (attackingAlliance[0].textContent) {
					allianceName = attackingAlliance[0].textContent.trim();
				} else if (attackingAlliance[0].innerText) {
					allianceName = attackingAlliance[0].innerText.trim();
				}
			}

			if (addt.children().length === 14) {
				$(this).append(newtd);
				$(':nth-child(15)', this).text(arrivalTime);
				if ($(':nth-child(2)', this).text() == "Sieging") {
					if (allianceName === poll2.player.planame) {
						$(this).children().css("color", "green").css("font-style", "italic").css("font-weight", "bold").css("font-size", "8px");
					} else {
						const percentage = parseInt($(':nth-child(14)', this).text().trim());
						if (!isNaN(percentage)) {
							if (percentage >= 0 && percentage <= 20) {
								$(this).css("color", "#ff0000").css("font-weight", "normal").css("font-size", "10px");
							} else if (percentage >= 21 && percentage <= 50) {
								$(this).css("color", "#c00000").css("font-weight", "bold").css("font-size", "12px");
							} else if (percentage >= 51 && percentage <= 100) {
								$(this).css("color", "#ffffff").css("font-weight", "normal").css("font-size", "14px").css("background", "red");
							}
						}

						// $(this).children().css("color", "red").css("font-weight", "bold");
					}
				}
				if ($(':nth-child(2)', this).text() == "Internal Attack") {
					$(this).children().css("color", "green").css("font-style", "italic").css("font-weight", "bold").css("font-size", "8px");
				}
			}
			if (addt.children().length === 15) {
				$(this).append(newtd);
				$(':nth-child(16)', this).text(travelTime);
				if ($(':nth-child(2)', this).text() == "Sieging") {
					if (allianceName === poll2.player.planame) {
						$(this).children().css("color", "green").css("font-style", "italic").css("font-weight", "bold").css("font-size", "8px");
						$(this).find(":nth-child(4) span, :nth-child(9) span, :nth-child(10) span ").css({
							"color": "green"
						});
						$(this).find(":nth-child(5) span:nth-child(1)").css({
							"color": "green"
						})
					} else {
						const percentage = parseInt($(':nth-child(14)', this).text().trim());
						if (!isNaN(percentage)) {
							if (percentage >= 0 && percentage <= 20) {
								$(this).css("color", "#ff0000").css("font-weight", "normal").css("font-size", "10px");
								$(this).find(":nth-child(4) span, :nth-child(9) span, :nth-child(10) span ").css({
									"color": "#ff0000"
								});
								$(this).find(":nth-child(5) span:nth-child(1)").css({
									"color": "#ff0000"
								});
								$(this).find(":nth-child(3), :nth-child(5), :nth-child(7), :nth-child(8), :nth-child(10)").css({
									"color": "#ff0000"
								});

							} else if (percentage >= 21 && percentage <= 50) {
								$(this).css("color", "#c00000").css("font-weight", "bold").css("font-size", "12px");
								$(this).find(":nth-child(4) span, :nth-child(9) span, :nth-child(10) span ").css({
									"color": "#c00000"
								});
								$(this).find(":nth-child(5) span:nth-child(1)").css({
									"color": "#c00000"
								});
								$(this).find(":nth-child(3), :nth-child(5), :nth-child(7), :nth-child(8), :nth-child(10)").css({
									"color": "c00000"
								});
							} else if (percentage >= 51 && percentage <= 100) {
								$(this).css("color", "#ffffff").css("font-weight", "normal").css("font-size", "14px").css("background", "#ff5c5c");
								$(this).find(":nth-child(3), :nth-child(5), :nth-child(7), :nth-child(8), :nth-child(10)").css({
									"color": "#ffffff"
								});
								$(this).find(":nth-child(4) span, :nth-child(9) span, :nth-child(10) span ").css({
									"color": "#ffffff"
								});
								$(this).find(":nth-child(5) span:nth-child(1)").css({
									"color": "#ffffff"
								});
							}
						}

						//$(this).children().css("color", "red").css("font-weight", "bold");
					}
				}
				if ($(':nth-child(2)', this).text() == "Internal Attack") {
					$(this).children().css("color", "green").css("font-style", "italic").css("font-weight", "bold").css("font-size", "8px");
					$(this).find(":nth-child(4) span, :nth-child(9) span, :nth-child(10) span ").css({
						"color": "green"
					});
					$(this).find(":nth-child(5) span:nth-child(1)").css({
						"color": "green"
					})
				}

			}
			if ($(':nth-child(2)', this).text() == "-") {
				// below will return -1 if calculated speed is not found inside the speed arrays and the correct index if it is found within the speed arrays
				var zns = navyspeed.indexOf(nspeed);
				var zss = scoutspeed.indexOf(ispeed);
				var zcs = cavspeed.indexOf(ispeed);
				var zis = infspeed.indexOf(ispeed);
				var zas = artspeed.indexOf(ispeed);
				var zsn = senspeed.indexOf(ispeed);




				// below use ispeed and above return values to get the correct incoming troop type
				if (tcont === scont) {
					if (ispeed > 30) {
						if (zsn == -1) {
							$(':nth-child(2)', this).text("Towers | Sen");
						} else {
							$(':nth-child(2)', this).text("Senator " + speeeed[zsn] + "%");
						}
					}
					if (ispeed > 20 && ispeed <= 30) {
						if (zsn == -1 && zas == -1) {
							$(':nth-child(2)', this).text("Towers | Art | Sen");
						}
						if (zsn == -1 && zas != -1) {
							$(':nth-child(2)', this).text("Artillery " + speeeed[zas] + "%");
						}
						if (zsn != -1 && zas == -1) {
							$(':nth-child(2)', this).text("Senator " + speeeed[zsn] + "%");
						}
						if (zsn != -1 && zas != -1) {
							$(':nth-child(2)', this).text("Art " + speeeed[zas] + "%" + "|" + "Sen " + speeeed[zsn] + "%");
						}
					}
					if (ispeed == 20) {
						$(':nth-child(2)', this).text("Inf 0% | Art 50% | Sen 100%");
					}
					if (ispeed >= 15 && ispeed < 20) {
						if (zis == -1 && zas == -1) {
							$(':nth-child(2)', this).text("Towers | Infantry ");
						}
						if (zis == -1 && zas != -1) {
							$(':nth-child(2)', this).text("Artillery " + speeeed[zas] + "%");
						}
						if (zis != -1 && zas == -1) {
							$(':nth-child(2)', this).text("Infantry " + speeeed[zis] + "%");
						}
						if (zis != -1 && zas != -1) {
							$(':nth-child(2)', this).text("Inf " + speeeed[zis] + "%" + "|" + "Art " + speeeed[zas] + "%");
						}
					}
					if (ispeed >= 10 && ispeed < 15) {
						if (zis == -1 && zcs == -1) {
							$(':nth-child(2)', this).text("Towers | Cavalry");
						}
						if (zis == -1 && zcs != -1) {
							$(':nth-child(2)', this).text("Cav " + speeeed[zcs] + "%");
						}
						if (zis != -1 && zcs == -1) {
							$(':nth-child(2)', this).text("Inf " + speeeed[zis] + "%");
						}
						if (zis != -1 && zcs != -1) {
							$(':nth-child(2)', this).text("Cav " + speeeed[zcs] + "%" + "|" + "Inf " + speeeed[zis] + "%");
						}
					}
					if (ispeed > 8 && ispeed < 10) {
						if (zcs == -1) {
							$(':nth-child(2)', this).text("Towers | Cavalry");
						} else {
							$(':nth-child(2)', this).text("Cavalry " + speeeed[zcs] + "%");
						}
					}
					if (ispeed > 5 && ispeed <= 8) {
						if (zss == -1 && zcs == -1) {
							$(':nth-child(2)', this).text("Towers | Scout");
						}
						if (zss == -1 && zcs != -1) {
							$(':nth-child(2)', this).text("Cavalry " + speeeed[zcs] + "%");
						}
						if (zss != -1 && zcs == -1) {
							$(':nth-child(2)', this).text("Scout " + speeeed[zss] + "%");
						}
						if (zss != -1 && zcs != -1) {
							$(':nth-child(2)', this).text("Scout " + speeeed[zss] + "%" + "|" + "Cav " + speeeed[zcs] + "%");
						}
					}
					if (ispeed == 5) {
						$(':nth-child(2)', this).text("Navy 0% | Scout 60% | Cav 100%");
					}
					if (ispeed >= 4 && ispeed < 5) {
						if (zss == -1 && zns == -1) {
							$(':nth-child(2)', this).text("Towers | Scout");
						}
						if (zss == -1 && zns != -1) {
							$(':nth-child(2)', this).text("Navy " + speeeed[zns] + "%");
						}
						if (zss != -1 && zns == -1) {
							$(':nth-child(2)', this).text("Scout " + speeeed[zss] + "%");
						}
						if (zss != -1 && zns != -1) {
							$(':nth-child(2)', this).text("Navy " + speeeed[zns] + "%" + "|" + "Scout " + speeeed[zss] + "%");
						}
					}
					if (ispeed < 4) {
						if (zns == -1) {
							$(':nth-child(2)', this).text("Build Towers");
						} else {
							$(':nth-child(2)', this).text("Navy " + speeeed[zns] + "%");
						}
					}
				} else if ($(':nth-child(1)', this).html()) {
					$(':nth-child(2)', this).text("Portal");
				} else {
					if (zns != -1) {
						$(':nth-child(2)', this).text("Navy " + speeeed[zns] + "%");
						//  context.strokeStyle = '#000000';//BLACK
						// context.stroke();
					} else {
						$(':nth-child(2)', this).text("Build Towers");
					}
				}
			}

		});
	}
	/*

	END Predicting Incoming Troops Section

	*/
	/*


	WAR COUNC Secondary Functions (again)


	*/
	function openreturnwin(data) {
		$(".toptdinncommtbl1:first").click();
		setTimeout(function() {
			$("#outgoingPopUpBox").hide();
		}, 300);
		const selectcont = $("#idleCsel").clone(false).attr({
			id: "selcr",
			style: "width:40%;height:28px;font-size:11;border-radius:6px;margin:7px"
		});
		let gfunkyreturnwin = `<div id='gfunkyReturnall' class='popUpBox ui-resizable ui-draggable' style='z-index:20001; width:80%;!important'>
		<div class='ppbwinbgr' >
		<div class='ppbwintop' style='position: relative !important; height:150px !important;'></div>
		<div class='ppbwincent' style='position: relative !important; height:auto !important;'></div>
		<div class='ppbwinbott' style='position: relative !important; height:150px !important;'></div>
		</div>
		<div class='ppbwincontent' style='width: auto;'>
		<div class='popUpBar ui-draggable-handle' style='margin-top:7px !Important;'>
		<span class='ppspan'>Gfunky's Recall All</span>
		<button id='sumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#gfunkyReturnall').remove()>
		<div id='xbuttondiv'>
		<div>
		<div id='centxbuttondiv'></div>
		</div>
		</div>
		</button>
		</div>
		<div id='returnbody' class='popUpWindow' style='text-align: center;'></div>
		</div>`;
		var greturnaoptions = [{
			value: 1,
			text: "Offense and Defense"
		}, {
			value: 2,
			text: "Offense"
		}, {
			value: 3,
			text: "Defense"
		}];
		var selectType = `<select id='selType' class='greensel' style='width:40%;height:28px;font-size:11;border-radius:6px; margin:7px;'>${greturnaoptions.map(option => `<option value='${option.value}'>${option.text}</option>`).join('')}</select><br>`;
		var selectret = $("#raidrettimesela").clone(false).attr({
			id: "returnSel",
			style: "width:40%;height:28px;font-size:11;border-radius:6px;margin:7px"
		});
		var selecttime = `<br><div id='timeblock'>
			<div id='timesel' style='display: none; text-align:center'>
				<span style='font-weight:800;'>Input latest return time:</span><br>
					<table style='width:80%;margin-left:auto; margin-right: auto;'>
						<thead>
							<tr style='text-align:center;'>
								<td>Hr</td>
								<td>Min</td>
								<td>Sec</td>
								<td colspan='2'>Date</td>
							</tr>
						</thead>
						<tbody>
						<tr>
							<td><input id='returnHr' type='number' style='width: 35px;height: 22px;font-size: 10px;padding: none !important;color: #000;' value='00'></td>
							<td><input id='returnMin' style='width: 35px;height: 22px;font-size: 10px;padding: none !important;color: #000;' type='number' value='00'></td>
							<td><input style='width: 35px;height: 22px;font-size: 10px;padding: none !important;color: #000;' id='returnSec' type='number' value='00'></td>
							<td colspan='2'><input style='width:90px;' id='returnDat' type='text' value='00/00/0000'></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>`;
		var returnAllgo = "<button id='returnAllGo' style=' width: 35%;height: 30px !important; font-size: 12px !important; position: static !important;' class='regButton greenb'>Start Return All</button>";
		var nextcity = "<button id='nextCity' style='display: none;margin-left:10%; width: 35%;height: 30px !important; font-size: 12px !important; position: static !important;' class='regButton greenb'>Next City</button>";
		var returntroops = "<button id='returnTroops' style='display: none;margin-left:10%; width: 35%;height: 30px !important; font-size: 12px !important; position: static !important;' class='regButton greenb'>Return troops</button>";
		var selectlist = $("#organiser").clone(false).attr({
			id: "selClist",
			style: "width:40%;height:28px;font-size:11;border-radius:6px;margin:7px"
		});
		$("body").append(gfunkyreturnwin);
		$("#gfunkyReturnall").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		$("#returnbody").html(selectcont);
		//$("#selcr").attr("style","width:40%;height:28px;font-size:11;border-radius:6px;margin:7px");
		$("#selcr").after(selectType);
		$("#selType").after(selectret);
		$("#returnSel").after(selectlist);
		$("#selClist").after(selecttime);
		$(function() {
			$("#returnDat").datepicker();
		});
		$("#returnbody").append(returnAllgo);
		$("#returnAllGo").after(nextcity);
		$("#nextCity").after(returntroops);
		$("#returnSel").change(function() {
			if ($("#returnSel").val() == 3) {
				$("#timesel").show();
			} else {
				$("#timesel").hide();
			}
		});
		var j, end, bb, cc, gaa;
		var returncities = {
			cid: [],
			cont: []
		};
		$("#returnAllGo").click(function() {
			if ($("#selClist").val() == "all") {
				for (var i in data) {
					var cont = data[i].c.co;
					if ($("#selcr").val() == 56) {
						if ($("#selType").val() == 1) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
						if ($("#selType").val() == 2) {
							if (data[i].tr.indexOf(5) > -1 || data[i].tr.indexOf(6) > -1 || data[i].tr.indexOf(10) > -1 || data[i].tr.indexOf(11) > -1 || data[i].tr.indexOf(12) > -1 || data[i].tr.indexOf(13) > -1 || data[i].tr.indexOf(14) > -1 || data[i].tr.indexOf(16) > -1) {
								returncities.cid.push(data[i].i);
								returncities.cont.push(cont);
							}
						}
						if ($("#selType").val() == 3) {
							if (data[i].tr.indexOf(1) > -1 || data[i].tr.indexOf(2) > -1 || data[i].tr.indexOf(3) > -1 || data[i].tr.indexOf(4) > -1 || data[i].tr.indexOf(8) > -1 || data[i].tr.indexOf(9) > -1 || data[i].tr.indexOf(15) > -1) {
								returncities.cid.push(data[i].i);
								returncities.cont.push(cont);
							}
						}
					}
					if (cont == Number($("#selcr").val())) {
						if ($("#selType").val() == 1) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
						if ($("#selType").val() == 2) {
							if (data[i].tr.indexOf(5) > -1 || data[i].tr.indexOf(6) > -1 || data[i].tr.indexOf(10) > -1 || data[i].tr.indexOf(11) > -1 || data[i].tr.indexOf(12) > -1 || data[i].tr.indexOf(13) > -1 || data[i].tr.indexOf(14) > -1 || data[i].tr.indexOf(16) > -1) {
								returncities.cid.push(data[i].i);
								returncities.cont.push(cont);
							}
						}
						if ($("#selType").val() == 3) {
							if (data[i].tr.indexOf(1) > -1 || data[i].tr.indexOf(2) > -1 || data[i].tr.indexOf(3) > -1 || data[i].tr.indexOf(4) > -1 || data[i].tr.indexOf(8) > -1 || data[i].tr.indexOf(9) > -1 || data[i].tr.indexOf(15) > -1) {
								returncities.cid.push(data[i].i);
								returncities.cont.push(cont);
							}
						}
					}
				}
			} else {
				$.each(clc, function(key, value) {
					if (key == $("#selClist").val()) {
						returncities.cid = value;
					}
				});
			}
			$("#organiser").val("all").change();
			//$("#outgoingPopUpBox").open();
			bb = $("#returnSel").val();
			if (bb == 3) {
				cc = $("#returnDat").val() + " " + $("#returnHr").val() + ":" + $("#returnMin").val() + ":" + $("#returnSec").val();
			} else {
				cc = 0;
			}
			j = 0;
			end = returncities.cid.length;
			gaa = returncities.cid[j];
			$("#cityDropdownMenu").val(gaa).change();
			$("#returnTroops").show();
			$("#nextCity").show();
			//  $("#returnAllGo").attr("id","nextCity").html("Next City");
			$("#returnAllGo").hide();
		});
		$("#returnTroops").click(function() {
			$("#raidrettimesela").val(bb).change();
			$("#raidrettimeselinp").val(cc);
			$("#doneOGAll")[0].click();
		});
		$("#nextCity").click(function() {
			j++;
			if (j == end) {
				alert("Return all complete");

				$("#gfunkyReturnall").remove();
			} else {
				gaa = returncities.cid[j];
				$("#cityDropdownMenu").val(gaa).change();
			}
		});
	}

	function gfunkyReturnAll() {
		const trlist = $("#commandtable tbody tr:nth-child(1)");
		$(trlist).find(".commandinntabl tbody tr td table tbody tr td:nth-child(2)")[0].click();
		setTimeout(function() {
			$("#raidrettimesela").val(1).change();
		}, 300);
		setTimeout(function() {
			$("#doneOGAll")[0].click();
		}, 500);
		setTimeout(function() {
			$("#outgoingPopUpBox").hide();
		}, 600);
	}

	function gfunkyRecurAll() {
		const trlist = $("#commandtable tbody tr:nth-child(1)");
		$(trlist).find(".commandinntabl tbody tr td table tbody tr td:nth-child(2)")[0].click();
		setTimeout(function() {
			$("#raidrettimesela").val(2).change();
		}, 300);
		setTimeout(function() {
			$("#doneOGAll")[0].click();
		}, 500);
		setTimeout(function() {
			$("#outgoingPopUpBox").hide();
		}, 600);
	}
	//Raiding script // carry percentage part in war councilor raider
	function carry_percentage(total_loot) {
		let troop_loot = 0;
		$(".tninput").each(function() {
			const trpinpid = $(this).attr('id');
			const TSnum = $(this).val();
			const ttttt = Number(trpinpid.match(/\d+/gi));
			troop_loot += TSnum * TroopLootIndex[ttttt]; //total loot
		});
		const percentage_loot_takable = Math.ceil((troop_loot / total_loot) * 100);
		$("#dungloctab").find(".addraiwc td:nth-child(3)").text(`carry:${percentage_loot_takable}%`);
	}

	function getDugRows() {
		$('#dungloctab th:contains("Distance")').click();
		$('#dungloctab th:contains("Distance")').click();
		$("#dungloctab tr").each(function() {
			const buttont = $(this).find("button");
			const buttonid = buttont.attr('id');
			const temp3 = $(this).find("td:nth-child(2)").text(); //lvl
			const temp4 = $(this).find("td:nth-child(3)").text(); //progress
			const tempz2 = temp3.split(' ');
			const temp1 = tempz2[1];
			const temp2 = temp4.match(/\d+/gi);
			const tempz1 = tempz2[2];
			if (buttonid) {
				buttont.attr('lvl', temp1);
				buttont.attr('prog', temp2);
				buttont.attr('type', tempz1);
			}
			$(buttont).click(function() {
				let count;
				let loot1;
				const countz = Number($('.splitRaid').children('option').length); //getting empty command slots
				count = countz > 1 ? countz - 1 : countz;
				const dunglvl = $(this).attr('lvl');
				const progress = $(this).attr('prog');
				const type_dung = $(this).attr('type');
				loot1 = type_dung === "Mountain" ? MountainLootIndex : ForestHillLootIndex;
				const total_loot = Math.ceil((loot1[Number(dunglvl) - 1] * ((1 - Number(progress) / 100) + 1)) * 1.0175);
				$("#dungloctab").find(".addraiwc td:nth-child(2)").html("<button id='raidAll' style='padding: 2px; border-radius: 4px;' class='greenb shRnTr'>Use All TS</button>");
				$("#dungloctab").find(".addraiwc td:nth-child(5)").html("");

				function createSelectElement() {
					let select = document.createElement('select');
					select.id = 'raidSelect';
					select.style.padding = '2px';
					select.style.borderRadius = '4px';
					select.className = 'greenb shRnTr';
					select.autofocus = true;
					let options = [{
						text: 'No Option Selected'
					}, {
						value: '.95',
						text: '95%'
					}, {
						value: '.97',
						text: '97%'
					}, {
						value: '1.00',
						text: '100%'
					}, {
						value: '1.03',
						text: '103%'
					}, {
						value: '1.05',
						text: '105%'
					}, {
						value: '1.07',
						text: '107%'
					}, {
						value: '1.10',
						text: '110%'
					}, {
						value: '1.12',
						text: '112%'
					}, {
						value: '1.15',
						text: '115%'
					}, {
						value: '1.30',
						text: '130%'
					}, {
						value: '1.50',
						text: '150%'
					}, {
						value: 'custom',
						text: 'Custom...'
					}];
					// Load any custom values from localStorage
					let customValues = JSON.parse(localStorage.getItem('customValues')) || {};
					Object.entries(customValues).forEach(([value, text]) => {
						options.push({
							value,
							text
						});
					});
					options.forEach(option => {
						let opt = document.createElement('option');
						opt.value = option.value;
						opt.text = option.text;
						select.appendChild(opt);
					});
					return select;
				}
				let selectElement = createSelectElement();
				$("#dungloctab").find(".addraiwc td:nth-child(4)").html(selectElement);
				selectElement.addEventListener('change', () => {
					if (selectElement.value === 'custom') {
						let customValue = prompt('Enter a custom percentage value:');
						// Calculate the corresponding value based on the custom percentage value
						let customOptionValue = (customValue / 100);
						let customOption = document.createElement('option');
						customOption.value = customOptionValue;
						customOption.text = `${customValue}%`;
						selectElement.appendChild(customOption);
						selectElement.value = customOptionValue;
						// Save the custom value to localStorage
						let customValues = JSON.parse(localStorage.getItem('customValues')) || {};
						customValues[customOptionValue] = `${customValue}%`;
						localStorage.setItem('customValues', JSON.stringify(customValues));
					}
				});
				//This code adds a button to the page with the text "Clear Customs ". When the button is clicked, the customValues item is removed from localStorage, and the select element is recreated using the createSelectElement function. This removes any custom options that were previously added.
				let clearButton = document.createElement('button');
				clearButton.textContent = 'Clear Customs';
				clearButton.style.borderRadius = '50px';
				clearButton.classList.add('greenb');
				// Get the td element following the one that has the class wctrpamt
				let gfunkytd = document.querySelector('.wctrpamt').nextElementSibling;
				gfunkytd.appendChild(clearButton);
				clearButton.addEventListener('click', () => {
					localStorage.removeItem('customValues');
					selectElement.innerHTML = '';
					selectElement = createSelectElement();
					$("#dungloctab").find(".addraiwc td:nth-child(4)").html(selectElement);
				});
				//              var troops = cotg.city.troops();
				let home;
				$(function() {
					$('#raidSelect').change(function() {
						localStorage.setItem('raidData', this.value);
					});
					if (localStorage.getItem('raidData')) {
						$('#raidSelect').val(localStorage.getItem('raidData')).trigger('change');
					}
				});
				$("#raidSelect").on('click', function() {
					const raidcarry = document.getElementById("raidSelect").value;
					//document.getElementById("demo").innerHTML = 'You selected:'   + raidcarry;
					var i = 0;
					let home_loot = 0;
					const km = [];
					for (const x in citytc) {
						home = Number(citytc[x]);
						home_loot += home * TroopLootIndex[i];
						km.push(home);
						i++;
						if (i === 17) {
							break;
						}
					}
					const loot_100 = Math.ceil(total_loot * raidcarry);
					if (!(home_loot > loot_100)) {
						return;
					}
					const option_numbers = Math.floor(home_loot / loot_100);
					if (option_numbers < count) {
						$("#WCcomcount").val(option_numbers);
					} else {
						$("#WCcomcount").val(count);
					}
					const templ1 = ((home_loot / loot_100) * 100) / option_numbers;
					const templ2 = ((templ1 - 100) / templ1) * 100;
					for (var i in km) {
						if (km[i] !== 0) {
							var templ3 = km[i] / option_numbers;
							km[i] = Math.floor(templ3 * (1 - (templ2 / 100)));
							$(`#rval${i}`).val(km[i]);
							if (km[14]) {
								$("#rval14").val("0");
							}
						}
					}
					carry_percentage(total_loot);
				});
				$("#raid115").click(function() {
					var i = 0;
					let home_loot = 0;
					const km = [];
					for (const x in citytc) {
						home = Number(citytc[x]);
						home_loot += home * TroopLootIndex[i];
						km.push(home);
						i++;
						if (i === 17) {
							break;
						}
					}
					const loot_115 = Math.ceil(total_loot * 1.15);
					if (!(home_loot > loot_115)) {
						return;
					}
					const option_numbers = Math.floor(home_loot / loot_115);
					if (option_numbers < count) {
						$("#WCcomcount").val(option_numbers);
					} else {
						$("#WCcomcount").val(count);
					}
					const templ1 = ((home_loot / loot_115) * 100) / option_numbers;
					const templ2 = ((templ1 - 100) / templ1) * 100;
					for (var i in km) {
						if (km[i] !== 0) {
							var templ3 = km[i] / option_numbers;
							km[i] = Math.floor(templ3 * (1 - (templ2 / 100)));
							$(`#rval${i}`).val(km[i]);
							if (km[14]) {
								$("#rval14").val("0");
							}
						}
					}
					carry_percentage(total_loot);
				});
				$("#raidAll").click(function() {
					var i = 0;
					let home_loot = 0;
					const km = [];
					for (const x in citytc) {
						home = Number(citytc[x]);
						home_loot += home * TroopLootIndex[i];
						km.push(home);
						i++;
						if (i === 17) {
							break;
						}
					}
					const loot_95 = Math.ceil(total_loot * 0.95);
					if (!(home_loot > loot_95)) {
						return;
					}
					const option_numbers = Math.floor(home_loot / loot_95);
					if (option_numbers < count) {
						$("#WCcomcount").val(option_numbers);
					} else {
						$("#WCcomcount").val(count);
					}
					for (var i in km) {
						if (count === 1 && km[i] !== 0) {
							$(`#rval${i}`).val(km[i]);
						} else if (km[i] !== 0) {
							km[i] = option_numbers < count ? Math.floor(km[i] / option_numbers) : Math.floor(km[i] / count);
							$(`#rval${i}`).val(km[i]);
							if (km[14]) {
								$("#rval14").val("0");
							}
						}
					}
					carry_percentage(total_loot);
				});
				setTimeout(function() {
					$("#raidAll")[0].click();
				}, 100);
				setTimeout(function() {
					carry_percentage(total_loot);
				}, 500);
				$(".tninput").change(function() {
					carry_percentage(total_loot);
				});
				$("#WCcomcount").on('change', function() {
					if ($("#rval14").val()) {
						$("#rval14").val("0");
					}
					carry_percentage(total_loot);
					$(".tninput").change(function() {
						carry_percentage(total_loot);
					});
				});
			});
		});
	}
	/*
	END OF WAR COUNC FUNCTIONS - BOTH
	START OF REGION VIEW FUNCTIONS
	Boss Section

	*/
	function getbossinfo() {
		bossinfo = {
			x: [],
			y: [],
			lvl: [],
			data: [],
			name: [],
			cont: [],
			distance: [],
			cid: []
		};
		for (const i in wdata.bosses) {
			const templvl = Number(wdata.bosses[i].substr(1, 2)) - 10;
			const tempy = Number(wdata.bosses[i].substr(4, 3)) - 100;
			const tempx = Number(wdata.bosses[i].substr(7, 3)) - 100;
			const cid = tempy * 65_536 + tempx;
			bossinfo.x.push(tempx);
			bossinfo.y.push(tempy);
			bossinfo.lvl.push(templvl);
			bossinfo.cont.push(Number(Math.floor(tempx / 100) + 10 * Math.floor(tempy / 100)));
			//bossinfo.distance.push(distance);
			bossinfo.data.push(wdata.bosses[i]);
			bossinfo.cid.push(cid);
		}
	}

	function openbosswin() {
		var bosslist = {
			name: [],
			x: [],
			y: [],
			lvl: [],
			distance: [],
			cid: [],
			time: [],
			cont: []
		};
		for (var i in bossinfo.cont) {
			var distance = (Math.sqrt((bossinfo.x[i] - city.x) * (bossinfo.x[i] - city.x) + (bossinfo.y[i] - city.y) * (bossinfo.y[i] - city.y)));
			if ((bossinfo.cont[i] == city.cont) && ((bossinfo.name[i] != "Triton")) && (bossinfo.data[i].charAt(0, 1) == 1)) {

				if ((city.th[2] || city.th[3] || city.th[4] || city.th[5] || city.th[6] || city.th[8] || city.th[9] || city.th[10] || city.th[11]) && city.th[14] == 0) {
					if (bossinfo.cont[i] == city.cont) {
						if (city.th[2] || city.th[3] || city.th[4] || city.th[5] || city.th[6]) {
							var minutes = distance * TroopSpeedIndex[2] / FaithSpeedIndex[2];
							var time = Math.floor(minutes / 60) + "h " + Math.floor(minutes % 60) + "m";
							bosslist.name.push(bossinfo.name[i]);
							bosslist.x.push(bossinfo.x[i]);
							bosslist.y.push(bossinfo.y[i]);
							bosslist.cid.push(Number(bossinfo.y[i] * 65536 + bossinfo.x[i]));
							bosslist.lvl.push(bossinfo.lvl[i]);
							bosslist.distance.push(roundToTwo(distance));
							bosslist.time.push(time);
							bosslist.cont.push(bossinfo.cont[i]);
						}
						if (city.th[8] || city.th[9] || city.th[10] || city.th[11]) {
							var minutes = distance * TroopSpeedIndex[8] / FaithSpeedIndex[8];
							var time = Math.floor(minutes / 60) + "h " + Math.floor(minutes % 60) + "m";
							bosslist.name.push(bossinfo.name[i]);
							bosslist.x.push(bossinfo.x[i]);
							bosslist.y.push(bossinfo.y[i]);
							bosslist.cid.push(Number(bossinfo.y[i] * 65536 + bossinfo.x[i]));
							bosslist.lvl.push(bossinfo.lvl[i]);
							bosslist.distance.push(roundToTwo(distance));
							bosslist.time.push(time);
							bosslist.cont.push(bossinfo.cont[i]);
						}
					}
				}
			}

			if (distance < 5000) {
				if (city.th[14] || city.th[15] || city.th[16]) {
					var minutes = distance * TroopSpeedIndex[14] / FaithSpeedIndex[14];
					var time = Math.floor(minutes / 60) + "h " + Math.floor(minutes % 60) + "m";
					bosslist.x.push(bossinfo.x[i]);
					bosslist.y.push(bossinfo.y[i]);
					bosslist.cid.push(Number(bossinfo.y[i] * 65536 + bossinfo.x[i]));
					bosslist.lvl.push(bossinfo.lvl[i]);
					bosslist.distance.push(roundToTwo(distance));
					bosslist.time.push(time);
					bosslist.cont.push(bossinfo.cont[i]);
				}
			}
		}
		var bosswin = "<table id='bosstable' class='beigetablescrollp sortable'>";
		bosswin += "<thead>";
		bosswin += "<tr>";
		bosswin += "<th>Coordinates</th>";
		bosswin += "<th>Level</th>";
		bosswin += "<th>Continent</th>";
		bosswin += "<th>Travel Time</th>";
		bosswin += "<th id='hdistance'>Distance</th>";
		bosswin += "</tr>";
		bosswin += "</thead>";
		bosswin += "<tbody>";

		for (var i in bosslist.x) {
			var j = bosses.name.indexOf(bosslist.name[i]);
			bosswin += "<tr id='bossline" + bosslist.cid[i] + "' class='dunginf'>";
			bosswin += "<td id='cl" + bosslist.cid[i] + "' class='coordblink shcitt' data='" + bosslist.cid[i] + "' style='text-align: center;'>" + bosslist.x[i] + ":" + bosslist.y[i] + "</td>";
			bosswin += "<td style='text-align: center;font-weight: bold;'>" + bosslist.lvl[i] + "</td>";
			bosswin += "<td style='text-align: center;'>" + bosslist.cont[i] + "</td>";
			bosswin += "<td style='text-align: center;'>" + bosslist.time[i] + "</td>";
			bosswin += "<td style='text-align: center;'>" + bosslist.distance[i] + "</td>";
			bosswin += "</tr>";
		}

		bosswin += "</tbody>";
		bosswin += "</table>";
		//bosswin+=" </div>";


		var idle = "<table id='idleunits' class='beigetablescrollp'>";
		idle += "<thead>";
		idle += "<tr>";
		idle += "<th style='text-align: center;color: #e1c190;font-size: 10px;font-weight: 400;height: 18px;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;background-repeat: no-repeat;'>Idle Troop Type:</th>";
		idle += "<th style='text-align: center;color: #e1c190;font-size: 10px;font-weight: 400;height: 18px;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;background-repeat: no-repeat;'>Idle Troop Numbers</th>";
		idle += "</tr>";
		idle += "</thead>";
		idle += "<tbody>";
		for (var i in city.th) {
			var notallow = [0, 1, 7, 12, 13];
			if (notallow.indexOf(i) === -1) {
				if (city.th[i] > 0) {
					let idleGnumber = +city.th[i];
					idle += `<tr>
                <td>
                  <div class='${tpicdiv[i]}' style='text-align: right;'></div>
                </td>
                <td style='text-align: center;'>
                  <span id='thbr${i}'>${idleGnumber.toLocaleString()}</span>
                </td>
              </tr>`;
				}
			}
		}
		idle += "</tbody>";
		idle += "</table>";
		$("#bossbox").html(bosswin);
		$("#idletroops").html(idle);
		var newTableObject = document.getElementById('bosstable');
		sorttable.makeSortable(newTableObject);
		setTimeout(function() {
			$("#hdistance").trigger("click");
			setTimeout(function() {
				$("#hdistance").trigger("click");
			}, 100);
		}, 100);
		for (var i in bosslist.x) {
			$("#cl" + bosslist.cid[i]).click(function() {
				setTimeout(function() {
					$("#raidDungGo").trigger("click");
				}, 500);
			});
		}
	}
	//region view left side troop panel list
	function bossele() {
		const bopti = $("#cityplayerInfo div table tbody");
		const bzTsTroops = ['Vanq', 'R/T', 'Ranger', 'Triari', 'Arb', 'Horse', 'Sorc', 'Druid', 'Priestess', 'Praetor', 'Scout', 'Galley', 'Stinger', 'Warships'];
		let bzTS = "";
		for (const troop of bzTsTroops) {
			bzTS += `<tr><td>${troop}:</td><td></td></tr>`;
		}
		bopti.append(bzTS);
	}
	/*
	END Boss Only Section

	*/
	//auto fill boss and raid numbers
	cotgsubscribe.subscribe("regional", function(data) {
		var x = data.x;
		const y = data.y;
		const dtype = data.type;
		const type = data.info.type;
		const lvl = data.info.lvl;
		const prog = data.info.prog;
		const bossname = data.info.name;
		const bossactive = data.info.active;
		// var troops = cotg.city.troops();
		let home;
		const optimalTS = Math.ceil((ForestHillLootIndex[lvl - 1] / 10 * ((1 - prog / 100) + 1)) * 1.0175);
		if (dtype === "dungeon") {
			if ($("#cityplayerInfo div table tbody tr").length === 11) {
				bossele();
			}
			var i = 0;
			var home_loot = 0;
			var km = [];
			for (var x in citytc) {
				home = Number(citytc[x]);
				home_loot += home * TroopLootIndex[i];
				km.push(home);
				i++;
				if (i === 17) {
					break;
				}
			}
			// Sirens Cove Numbers
			if (type === "Siren's Cove") {
				const galleyTS = Math.ceil(optimalTS / 100);
				const stingerTS = Math.ceil(optimalTS / 150);
				const warshipTS = Math.ceil(optimalTS / 300);
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if (km[14] || km[15] || km[16]) {
								if (km[16] > warshipTS) {
									$('#raidIP16').val(warshipTS);
								} else if (km[15] > stingerTS) {
									$('#raidIP15').val(stingerTS);
								} else if (km[14] > galleyTS) {
									$('#raidIP14').val(galleyTS);
								} else {
									errorgo(errormessage1);
								}
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text("0"); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text(galleyTS);
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text(stingerTS);
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text(warshipTS);
			}
			// Mountain Cavern Numbers
			if (type === "Mountain Cavern") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						const total_lootm = Math.ceil((MountainLootIndex[Number(lvl) - 1] * ((1 - Number(prog) / 100) + 1)) * 1.0175);
						if (!(home_loot > total_lootm)) {
							return;
						}
						const option_numbersm = Math.floor(home_loot / total_lootm);
						const templ1m = ((home_loot / total_lootm) * 100) / option_numbersm;
						const templ2m = ((templ1m - 100) / templ1m) * 100;
						for (let i = 0; i < 14; i++) {
							if (km[i] !== 0) {
								var templ3m = km[i] / option_numbersm;
								km[i] = Math.floor(templ3m * (1 - (templ2m / 100)));
								$(`#raidIP${i}`).val(km[i]);
							}
						}
					}, 1500);
				};
				const optimalTSM = Math.ceil((MountainLootIndex[lvl - 1] / 10 * ((1 - prog / 100) + 1)) * 1.0175);
				const cavoptim = Math.ceil((optimalTSM * 2) / 3);
				const praoptim = Math.ceil(optimalTSM / 2);
				const sorcoptim = Math.ceil(optimalTSM * 2);
				const RToptim = Math.ceil(optimalTSM / 3);
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(optimalTSM); //vanq
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text(`${RToptim}/${RToptim}`); //RT
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(optimalTSM); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(praoptim); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(cavoptim); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(cavoptim); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(sorcoptim); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(optimalTSM); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(optimalTSM); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(praoptim); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text("0"); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
			// Hill and Forest Cavern Numbers
			if (type === "Hill Cavern" || type === "Forest Cavern") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						const total_looto = Math.ceil((ForestHillLootIndex[Number(lvl) - 1] * ((1 - Number(prog) / 100) + 1)) * 1.0175);
						if (!(home_loot > total_looto)) {
							return;
						}
						const option_numbers = Math.floor(home_loot / total_looto);
						const templ1 = ((home_loot / total_looto) * 100) / option_numbers;
						const templ2 = ((templ1 - 100) / templ1) * 100;
						for (let i = 0; i < 14; i++) {
							if (km[i] !== 0) {
								var templ3 = km[i] / option_numbers;
								km[i] = Math.floor(templ3 * (1 - (templ2 / 100)));
								$(`#raidIP${i}`).val(km[i]);
							}
						}
					}, 1500);
				};
				const cavopti = Math.ceil((optimalTS * 2) / 3);
				const praopti = Math.ceil(optimalTS / 2);
				const sorcopti = Math.ceil(optimalTS * 2);
				const RTopti = Math.ceil(optimalTS / 3);
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(optimalTS); //vanq
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text(`${RTopti}/${RTopti}`); //RT
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(optimalTS); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(praopti); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(cavopti); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(cavopti); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(sorcopti); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(optimalTS); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(optimalTS); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(praopti); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text("0"); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
		}
		//BOSS INFO
		if (dtype === "boss") {
			if ($("#cityplayerInfo div table tbody tr").length === 11) {
				bossele();
			}
			if (data.info.active) {
				message = "Inactive Boss";
				errorgo(message);
			}
			message = "Not enough TS to kill this boss!";
			const attackres = [];
			const attackwres = [];
			for (var i in TroopAttackIndex) {
				const bossTS = Math.ceil((Number(BossDefenseLandIndex[lvl - 1]) * 4) / (Number(TroopAttackIndex[i]) * Number(CombatResearchIndex[i])));
				attackres.push(bossTS);
				const bosswTS = Math.ceil((Number(BossDefenseWaterIndex[lvl - 1]) * 4) / (Number(TroopAttackIndex[i]) * Number(CombatResearchIndex[i])));
				attackwres.push(bosswTS);
			}
			let home_strength = 0;
			var home_loot = 0;
			var km = [];
			const bm = [];
			const bmw = [];
			const kg = [];
			let home_TSw = 0;
			const boss_strength = Math.ceil(Number(BossDefenseLandIndex[lvl - 1]) * 4);
			const boss_strengthw = Math.ceil(Number(BossDefenseWaterIndex[lvl - 1]) * 4);
			var i = 0;
			for (var x in citytc) {
				home = Number(citytc[x]);
				if (i === 0 || i === 1 || i === 7 || i === 12 || i === 13) {
					home = 0;
				}
				kg.push(home);
				if (i === 14 || i === 15 || i === 16) {
					home = 0;
				}
				home_strength += Number(TroopAttackIndex[i]) * Number(home) * Number(CombatResearchIndex[i]); //for land bosses
				home_TSw += home * TS_type[i];
				km.push(home);
				i++;
				if (i === 17) {
					break;
				}
			}
			if (home_strength > boss_strength) { //land strong bosses
				const proportion = home_strength / boss_strength;
				for (var i in km) {
					bm[i] = Math.ceil(Number(km[i]) / proportion);
				}
			}
			if (home_strength > boss_strengthw) { //land weak bosses
				const proportionw = home_strength / boss_strengthw;
				for (var i in km) {
					bmw[i] = Math.ceil(Number(km[i]) / proportionw);
				}
			}
			// Triton Boss Info
			if (bossname === "Triton") {
				const bmz = [];
				let home_strengthw = 0;
				let galleytroops = 0;
				let tempgalley = 0;
				const galley_TSneeded = Math.ceil(home_TSw / 500); //imaginary
				if (kg[14]) {
					home_strengthw = home_strength + (Number(galley_TSneeded) * (3000) * Number(CombatResearchIndex[14])); //with imaginary galley
					if (home_strengthw > boss_strength) { //galley+TS for triton
						const proportionz = home_strengthw / boss_strength;
						for (var i in km) {
							bmz[i] = Math.ceil(Number(km[i]) / proportionz);
							tempgalley += bmz[i] * TS_type[i];
						}
					}
					galleytroops = Math.ceil(tempgalley / 500);
				}
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						if ((kg[14] || kg[15] || kg[16]) && !kg[5] && !kg[6] && !kg[8] && !kg[9] && !kg[10] && !kg[11] && !kg[2] && !kg[3] && !kg[4]) {
							if (kg[16] > attackwres[16]) {
								$('#raidIP16').val(attackwres[16]);
							} else if (kg[15] > attackwres[15]) {
								$('#raidIP15').val(attackwres[15]);
							} else if (kg[14] > attackwres[14]) {
								$('#raidIP14').val(attackwres[14]);
							} else {
								errorgo(troopmessage);
							}
						} else if (kg[14] && (kg[5] || kg[6] || kg[8] || kg[9] || kg[10] || kg[11] || kg[2] || kg[3] || kg[4])) {
							if (kg[14] > galleytroops && bmz.length > 0) {
								for (const i in km) {
									$(`#raidIP${[i]}`).val(bmz[i]);
								}
								$('#raidIP14').val(galleytroops);
							} else if (kg[14] > attackwres[14]) {
								$('#raidIP14').val(attackwres[14]);
							} else {
								errorgo(troopmessage);
							}
						} else {
							errorgo(troopmessage);
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackres[5]); //vanq  weak 14,15,16
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text("0"); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text("0"); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text("0"); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text("0"); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text("0"); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text("0"); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text(attackwres[14]);
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text(attackwres[15]);
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text(attackwres[16]);
			}
			// Cyclops Boss Info
			if (bossname == "Cyclops") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if ((km[8] || km[9] || km[10]) && !km[5] && !km[6] && !km[2] && !km[3] && !km[4] && !km[11]) {
								$(`#raidIP${[i]}`).val(bmw[i]);
								if (bmw.length === 0) {
									errorgo(troopmessage);
									break;
								}
							} else {
								$(`#raidIP${[i]}`).val(bm[i]);
								if (bm.length === 0) {
									errorgo(troopmessage);
									break;
								}
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackres[5]); //vanq weak 8,9,10
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(attackres[2]); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(attackres[3]); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(attackwres[8]); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackwres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(attackres[4]); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(attackwres[9]); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text(attackwres[7]); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
			// Andars Colosseum Challenge Info
			if (bossname == "Andar's Colosseum Challenge") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if ((km[8] || km[9] || km[10]) && !km[5] && !km[6] && !km[2] && !km[3] && !km[4] && !km[11]) {
								$(`#raidIP${[i]}`).val(bmw[i]);
								if (bmw.length === 0) {
									errorgo(troopmessage);
									break;
								}
							} else {
								$(`#raidIP${[i]}`).val(bm[i]);
							}
							if (bm.length === 0) {
								errorgo(troopmessage);
								break;
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackres[5]); //vanq 8,9,10
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(attackres[2]); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(attackres[3]); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(attackwres[8]); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackwres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(attackres[4]); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(attackwres[9]); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text(attackwres[7]); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
			//Fact's Romulus and Remus Info
			if (bossname == "Romulus and Remus") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if ((km[2] || km[3] || km[4] || km[5]) && !km[6] && !km[8] && !km[9] && !km[10] && !km[11]) {
								$(`#raidIP${[i]}`).val(bmw[i]);
								if (bmw.length === 0) {
									errorgo(troopmessage);
									break;
								}
							} else {
								$(`#raidIP${[i]}`).val(bm[i]);
							}
							if (bm.length === 0) {
								errorgo(troopmessage);
								break;
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackwres[5]); //vanq 2,3,4,5
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(attackwres[2]); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(attackwres[3]); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(attackres[8]); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(attackwres[4]); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(attackres[9]); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text(attackres[7]); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
			//Dragon Boss Info
			if (bossname == "Dragon") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if ((km[2] || km[3] || km[4] || km[5]) && !km[6] && !km[8] && !km[9] && !km[10] && !km[11]) {
								$(`#raidIP${[i]}`).val(bmw[i]);
								if (bmw.length === 0) {
									errorgo(troopmessage);
									break;
								}
							} else {
								$(`#raidIP${[i]}`).val(bm[i]);
							}
							if (bm.length === 0) {
								errorgo(troopmessage);
								break;
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackwres[5]); //vanq 2,3,4,5
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(attackwres[2]); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(attackwres[3]); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(attackres[8]); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(attackwres[4]); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(attackres[9]); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text(attackres[7]); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
			// Gorgon Boss Info
			if (bossname == "Gorgon") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if ((km[6] || km[11]) && !km[4] && !km[5] && !km[3] && !km[8] && !km[9] && !km[10] && !km[2]) {
								$(`#raidIP${[i]}`).val(bmw[i]);
								if (bmw.length === 0) {
									errorgo(troopmessage);
									break;
								}
							} else {
								$(`#raidIP${[i]}`).val(bm[i]);
							}
							if (bm.length === 0) {
								errorgo(troopmessage);
								break;
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackres[5]); //vanq 6,11
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(attackres[2]); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(attackres[3]); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(attackres[8]); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackwres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackwres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(attackres[4]); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(attackres[9]); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text(attackres[7]); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
			// Gladiator Boss Info
			if (bossname == "Gladiator") {
				document.getElementById('raidDungGo').onclick = function() {
					setTimeout(function() {
						for (const i in km) {
							if ((km[6] || km[11]) && !km[4] && !km[5] && !km[3] && !km[8] && !km[9] && !km[10] && !km[2]) {
								$(`#raidIP${[i]}`).val(bmw[i]);
								if (bmw.length === 0) {
									errorgo(troopmessage);
									break;
								}
							} else {
								$(`#raidIP${[i]}`).val(bm[i]);
							}
							if (bm.length === 0) {
								errorgo(troopmessage);
								break;
							}
						}
					}, 1500);
				};
				$("#cityplayerInfo div table tbody tr:nth-child(5) td:nth-child(2)").text(attackres[5]); //vanq 6,11
				$("#cityplayerInfo div table tbody tr:nth-child(6) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(7) td:nth-child(2)").text(attackres[2]); //ranger
				$("#cityplayerInfo div table tbody tr:nth-child(8) td:nth-child(2)").text(attackres[3]); //triari
				$("#cityplayerInfo div table tbody tr:nth-child(9) td:nth-child(2)").text(attackres[8]); //arb
				$("#cityplayerInfo div table tbody tr:nth-child(10) td:nth-child(2)").text(attackres[10]); //horse
				$("#cityplayerInfo div table tbody tr:nth-child(11) td:nth-child(2)").text(attackwres[6]); //sorc
				$("#cityplayerInfo div table tbody tr:nth-child(12) td:nth-child(2)").text(attackwres[11]); //druid
				$("#cityplayerInfo div table tbody tr:nth-child(13) td:nth-child(2)").text(attackres[4]); //priestess
				$("#cityplayerInfo div table tbody tr:nth-child(14) td:nth-child(2)").text(attackres[9]); //pra
				$("#cityplayerInfo div table tbody tr:nth-child(15) td:nth-child(2)").text(attackres[7]); //scout
				$("#cityplayerInfo div table tbody tr:nth-child(16) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(17) td:nth-child(2)").text("0");
				$("#cityplayerInfo div table tbody tr:nth-child(18) td:nth-child(2)").text("0");
			}
		}
		if (dtype === "city") {
			$("#cityplayerInfo div table tbody tr:gt(6)").remove();
		}
	});
	$(document).ready(function() {
		$("#mailTable tbody tr td:nth-child(2)").each(function() {
			if ($(this).text().toUppercase().includes("[ORDERS]")) {
				$(this).closest("tr").css("background", "green");
			} else if ($(this).text().toUppercase().includes("[DEFENSE]")) {
				$(this).closest("tr").css("background", "orange");
			}
		});
		$("#mailViewdiv td:first-child").css({
			"width": "15%",
			"font-size": "11px"
		});
	});
	//raiding part, cancel allt attack part
	$().ready(function() {

		let buttonsAdded = false;
		const checkTableExists = setInterval(function() {
			if ($("#commandtable > tbody").length) {
				if (!buttonsAdded) {
					// Show the buttons
					const buttons = $("<div><button class='recall-button redb shRnTr' id='recallgAllbut' style='font-size:10px; width:45%; border-radius: 8px;'>Set to Once</button> <button class='recall-button activeAllyButton shRnTr' id='recurgAllbut' style='font-size:10px; width:45%; border-radius: 8px; border:none; color: #e1c190; font-family: trojan;'>Set Reoccuring</button></div>");
					$("#commandtable").before(buttons);
					buttonsAdded = true;
				}
			} else if (!$("#commandtable > tbody").length) {
				// Remove the buttons
				$("#recallgAllbut").remove();
				$("#recurgAllbut").remove();
				buttonsAdded = false;
			}
		}, 500);
		$(document).on("click", ".recall-button", function() {
			const id = $(this).attr("id");
			setTimeout(function() {
				if (id === "recallgAllbut") {
					gfunkyReturnAll();
				} else if (id === "recurgAllbut") {
					gfunkyRecurAll();
				}
			}, 1000);
		});
		$(document).on("click", "#massressendDiv, #loccavwarconGo, #raidmantab, #allianceIncomings, #ui-id-37", function() {
			switch (this.id) {
				case "massressendDiv":
					setTimeout(massresTemple, 1000);
					break;
				case "loccavwarconGo":
				case "raidmantab":
					setTimeout(getDugRows, 1000);
					break;
				case "allianceIncomings":
				case "ui-id-37":
					incomings();
					break;
			}
		});
      //Added 4.5.23

        function formatTableCells() {
            $('#playerRankings table tr, #allianceScoreRankings table tr').each(function() {
                $(this).find('td').each(function() {
                    const cellContent = $(this).text();
                    const num = parseFloat(cellContent);
                    if (!isNaN(num) && num.toString() === cellContent) {
                        $(this).text(num.toLocaleString());
                    }
                });
            });
        }


        $("#rankings, #grran0,ggrran2, #ui-id-95, #ui-id-110, #ui-id-94").click(function() {
            // Add a setTimeout to give some time for the table to update before formatting
            setTimeout(function() {
                formatTableCells();
            }, 2500); // Adjust the delay (in milliseconds) based on your specific use case
        });
		// Added 3.16.23 Fact
		//Updated to Include Officer Version of the Notes Section to allow officers to also see the highlighted HLT 3.23.23 Fact
		//updated 3.28.23 Fact - Error When Running non userscript. could not find input val if player doesnt have access
		var inputVal = $(this).find("td:nth-child(11) input");


        $(document).ready(function () {
          $("#favoredPic, #favoredSpan, #ui-id-39, #playerFavorings, allianceFavorings").click(function () {
            setTimeout(function () {
              $("#favoredcitiesBody tr").each(function () {
                var priority = $(this).find("td:nth-child(9)").attr("sorttable_customkey");
                var inputVal = $(this).find("td:nth-child(11) input");

                if (priority == "1") {
                  $(this).css("background", "#FF9B9B");
                } else if (priority == "2") {
                  $(this).css("background", "#FEC861");
                } else if (priority == "3") {
                  $(this).css("background", "#FBFA84");
                } else if (
                  priority == "4" &&
                  inputVal.length > 0 &&
                  inputVal.val().toLowerCase().indexOf("hlt") !== -1
                ) {
                  $(this).css("background", "#00ff19");
                } else if (
                  priority == "4" &&
                  $(this).find("td:nth-child(11)").text().toLowerCase().indexOf("hlt") !== -1
                ) {
                  $(this).css("background", "#00ff19");
                } else if (priority == "4") {
                  $(this).css("background", "#A7FF9B");
                }
              });
            }, 1000); // 1000 milliseconds = 1 second delay
          });
        });




		setTimeout(function() {
			Total_Research();
		}, 20_000);
		if (localStorage.getItem("raidbox") == 1) {
			const raidboxback = "<button class='regButton greenb' id='raidboxb' style='width:120px; margin-left: 2%;'>Return Raiding Box</button>";
			$("#squaredung td").find(".squarePlayerInfo").before(raidboxback);
			$("#raidboxb").click(function() {
				localStorage.setItem("raidbox", "0");
				$("#raidboxb").remove();
			});
		}
		//Send Assault
		$("#assaultGo").click(function() {
			if ($("#cancelAllya").prop("checked") == false) {
				setTimeout(function() {
					$(".shAinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#assaultxcoord").val() && ty == $("#assaultycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UaO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
					$(".shPinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#assaultxcoord").val() && ty == $("#assaultycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UpO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
				}, 4000);
			}
		});
		//Send Plunder
		$("#plunderGo").click(function() {
			if ($("#cancelAllyp").prop("checked") == false) {
				setTimeout(function() {
					$(".shAinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#pluxcoord").val() && ty == $("#pluycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UaO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
					$(".shPinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#pluxcoord").val() && ty == $("#pluycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UpO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
				}, 4000);
			}
		});
		//Send Scout
		$("#scoutGo").click(function() {
			if ($("#cancelAllyc").prop("checked") == false) {
				setTimeout(function() {
					$(".shAinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#scoxcoord").val() && ty == $("#scoycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UaO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
					$(".shPinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#scoxcoord").val() && ty == $("#scoycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UpO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
				}, 4000);
			}
		});
		//Send Siege
		$("#siegeGo").click(function() {
			if ($("#cancelAllys").prop("checked") == false) {
				setTimeout(function() {
					$(".shAinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#siexcoord").val() && ty == $("#sieycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UaO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
					$(".shPinf").each(function() {
						const tid = $(this).parent().next().find(".cityblink").attr("data");
						const tx = tid % 65_536;
						const ty = (tid - tx) / 65_536;
						if (!(tx == $("#siexcoord").val() && ty == $("#sieycoord").val())) {
							return;
						}
						const aid = $(this).attr("data");
						const dat = {
							a: aid,
							b: 1
						};
						$.ajax({
							url: 'includes/UpO.php',
							type: 'POST',
							async: true,
							data: dat
						});
					});
				}, 4000);
			}
		});
	});
	//total research
	function Total_Research() {
		$.ajax({
			url: 'includes/gaLoy.php',
			type: 'POST',
			async: true,
			success(data) {
				const ldata = JSON.parse(data);
				setloyal(ldata);
			}
		});

		function setloyal(ldata) {
			$.each(ldata.t, function(key, value) {
				if (key == 2) {
					$.each(this, function(key, value) {
						vexemis += this.f;
					});
				}
				if (key == 4) {
					$.each(this, function(key, value) {
						cyndros += this.f;
					});
				}
				if (key == 6) {
					$.each(this, function(key, value) {
						ylanna += this.f;
					});
				}
				if (key == 8) {
					$.each(this, function(key, value) {
						naera += this.f;
					});
				}
			});
			ylanna = Math.min(ylanna, 100);
			naera = Math.min(naera, 100);
			vexemis = Math.min(vexemis, 100);
			cyndros = Math.min(cyndros, 100);
			const research = cotg.player.research();
			CombatResearchIndex[2] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[30]]) / 100); //ranger
			CombatResearchIndex[3] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[31]]) / 100); //triari
			CombatResearchIndex[4] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[32]]) / 100); //priestess
			CombatResearchIndex[5] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[33]]) / 100); //vanq
			CombatResearchIndex[6] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[34]]) / 100); //sorc
			CombatResearchIndex[7] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[46]]) / 100); //scout
			CombatResearchIndex[8] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[35]]) / 100); //arb
			CombatResearchIndex[9] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[36]]) / 100); //pra
			CombatResearchIndex[10] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[37]]) / 100); //horse
			CombatResearchIndex[11] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[38]]) / 100); //druid
			CombatResearchIndex[14] += ((Number(ylanna) * 0.5) / 100) + (Number(Res[research[44]]) / 100); //galley
			CombatResearchIndex[15] += ((Number(ylanna) * 0.5) / 100) + (Number(Res[research[43]]) / 100); //stinger
			CombatResearchIndex[16] += ((Number(cyndros) * 0.5) / 100) + (Number(Res[research[45]]) / 100); //warship
		}
	}
	//incoming and outoging summary window from inside the ingame attacks (NOT PART OF  GFUNKY OVERVIEWS)
	$().ready(function() {
		
		$('#ui-id-35').text("Outgoing");
		$('#ui-id-36').text("Off History");
		$('#ui-id-37').text("Incoming");
		$('#ui-id-38').text("Def History");
		$('#ui-id-39').text("Blessed");
		
		const firstparaAIP = document.querySelector('#firstparaAIP');
const mycitiesonlyOutgoings = document.querySelector('#mycitiesonlyOutgoings');

if (firstparaAIP && mycitiesonlyOutgoings) {
  firstparaAIP.insertBefore(mycitiesonlyOutgoings, firstparaAIP.firstChild);
}

		
		
		
		const outsumbut = "<button style='margin-left:5%;font-size: 12px;width: 150px;' class='greenb regButton' id='outsumGo'>Outgoing Summary</button>";
		const incsumbut = "<button style='margin-left:5%;font-size: 12px;width: 150px;' class='greenb regButton' id='incsumGo'>Incomings Summary</button>";
		
		$("#contselectorAIPog").after(outsumbut);
		$("#contselectorAIPic").after(incsumbut);
		$("#outsumGo").click(function() {
			makeoutsum();
		});
		$("#incsumGo").click(function() {
			makeincsum();
		});
	});

	const addSearchFilter = (tbodyId, afterElementId, buffer = 500) => {
  const tbody = document.getElementById(tbodyId);
  const afterElement = document.getElementById(afterElementId);
  let timerId;

  if (tbody && afterElement) {
    // Insert search input element after specified element
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('id', `${tbodyId}-searchInput`);
    searchInput.setAttribute('placeholder', 'Search...');
    searchInput.setAttribute('style', 'font-size: 10px;'); // Set font-size
    afterElement.after(searchInput);

    // Add event listeners and observers
    const searchTable = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        const searchTerm = searchInput.value.toLowerCase();
        const rows = tbody.querySelectorAll('tr');
        rows.forEach(row => {
          let matchFound = false;
          row.querySelectorAll('td, td span').forEach(td => {
            if (td.innerText.toLowerCase().includes(searchTerm)) {
              matchFound = true;
            }
          });
          if (matchFound) {
            row.classList.remove('hideIA');
          } else {
            row.classList.add('hideIA');
          }
        });
      }, buffer);
    };

    searchInput.addEventListener('keyup', searchTable);

    const observer = new MutationObserver(searchTable);
    const tableBody = tbody.querySelector('tr');
    if (tableBody) {
      observer.observe(tableBody, { childList: true });
    }
  }
};


// Apply filter/search function to multiple tables
addSearchFilter('iaBody', 'incsumGo');
addSearchFilter('oaBody', 'outsumGo');
addSearchFilter('favoredcitiesBody', 'contselectorAIP');
addSearchFilter('dhBody', 'contselectorAIPdH');
addSearchFilter('oHBody', 'contselectorAIPoH');
	

$('#outgoingAttacksTable').attr('style', 'height: calc(100% - 70px) !important;');




  const attackTypeCountODiv = `<div id="outgoingTypeCount" style="text-align: center; margin-left: auto; margin-right: auto; background: tan; border: 3px #886f53 ridge; border-radius: 6px; min-width: 60%; max-width: 90%; font-size: 12px; font-style: italic; font-weight: 900; color: #000;"><p id='countOP'></p></div>`;

   $("#outgoingAttacksTable").after(attackTypeCountODiv);
   
function countOAttacks() {
  // Get the table body
  const tableBody = document.getElementById("oaBody");

  // Create an object to store the counts
  const counts = {};

  // Get the <p> element with an ID of "countP"
  const countP = document.getElementById("countOP");

  // Loop through each row in the table body
  for (let i = 0; i < tableBody.children.length; i++) {
    const row = tableBody.children[i];

   // Check if the row and the necessary cells exist before accessing their textContent properties
    if (!row || !row.children[2] || !row.children[10] || row.children[2].classList.contains('hideOA') || row.children[10].classList.contains('hideOA') || row.children[2].classList.contains('hideIA') || row.children[10].classList.contains('hideIA')) {
      continue;
    }
 

    const attackType = row.children[2].textContent;
    const attackingTS = row.children[10].textContent;

    const parsedAttackingTS = parseInt(attackingTS);

    // If the attacking TS is less than 3500, add 1 to the "Fakes" key in the counts object and skip this row
    if (parsedAttackingTS < 3500) {
      counts["Fakes"] = (counts["Fakes"] || 0) + 1;
      continue;
    }

    // Increase the count for this attack type
    counts[attackType] = (counts[attackType] || 0) + 1;
  }

  // If the counts object is empty, display a message indicating that there are no attacks to count
  if (Object.keys(counts).length === 0) {
    countP.textContent = "Click Me to Show Attack Types";
  } else {
    // Sort the keys alphabetically, except for the "Fakes" key which should always come last
    const keys = Object.keys(counts).sort();
    const fakesIndex = keys.indexOf("Fakes");
    if (fakesIndex > -1) {
      keys.splice(fakesIndex, 1);
    }
    keys.push("Fakes");

    // Create a new text content with the attack type counts
    let newTextContent = "";
    for (const key of keys) {
      newTextContent += `${key}: ${counts[key]}    `;
    }

    // Replace the existing text content of the <p> element with the new text content
    countP.textContent = newTextContent;
  }
}
// Delay the function call by 5 seconds using arrow function syntax
setTimeout(() => countOAttacks(), 5000);

// Add a click event listener to each element using an array and forEach method
const elements = [
  document.getElementById("ui-id-35"),
  document.getElementById("outgoingsSpan"),
  document.getElementById("outgoingsPic"),
  document.getElementById("outgoingTypeCount")
].filter(element => element !== null);


elements.forEach(element => element.addEventListener("click", countOAttacks));

	
	
	
	
	
	
	
	


	function makeoutsum() {
		const tg = {
			id: [],
			se: [],
			oth: [],
			ts: [],
			x: [],
			y: [],
			cn: [],
			pn: [],
			an: []
		};
		var i = 0;
		$("#outgoingAttacksTable tr").each(function() {
			if (!$($(this).children()[0]).is("td")) {
				return;
			}
			const tid = $($($($(this).children()[6]).children()).children()).attr("data");
			if (!tg.id.includes(tid)) {
				tg.id.push(tid);
				tg.se.push(0);
				tg.oth.push(0);
				tg.ts.push(0);
				tg.cn.push($($($(this).children()[5]).children()).html());
				tg.an.push($($(this).children()[4]).html());
				tg.pn.push($($(this).children()[3]).html());
				const tempx = Number(tid % 65_536);
				const tempy = Number((tid - tempx) / 65_536);
				tg.x.push(tempx);
				tg.y.push(tempy);
			}
			const ti = tg.id.indexOf(tid);
			if ($($(this).children()[2]).html() == "Siege" || $($(this).children()[2]).html() == "Sieging") {
				tg.se[ti]++;
			} else {
				tg.oth[ti]++;
			}
			tg.ts[ti] += Number($($(this).children()[10]).html());
		});
		let gfunkyoutgoingsumWin = "<div id='gfunkyoutgoingsumWin' class='popUpBox ui-draggable' style='z-index:2002; width:800px !important;height:50% !important;'>";
		gfunkyoutgoingsumWin += "<div class='ppbwinbgr ui-draggable'  style='width: 800px !important;'>";
		gfunkyoutgoingsumWin += "<div class='ppbwintop ui-draggable'  style='width: 800px !important;'></div>";
		gfunkyoutgoingsumWin += "<div class='ppbwincent  ui-draggable'  style='width: 800px !important;'></div>";
		gfunkyoutgoingsumWin += "<div class='ppbwinbott ui-draggable' style='width: 800px !important;'></div>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "<div class='ppbwincontent  ui-draggable'>";
		gfunkyoutgoingsumWin += "<div class='popUpBar ui-draggable-handle'> ";
		gfunkyoutgoingsumWin += "<span class='ppspan'>Gfunky's Outgoing Attack Summary</span>";
		gfunkyoutgoingsumWin += "<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 60px;'>";
		gfunkyoutgoingsumWin += "<div class='button'>";
		gfunkyoutgoingsumWin += "<a href='#' id ='outsumexp' role='button' style='color#c7e2e7;'>Export</a>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "</button>";
		gfunkyoutgoingsumWin += "<button id='sumX' class='xbutton' onclick=$('#gfunkyoutgoingsumWin').remove()>";
		gfunkyoutgoingsumWin += "<div id='xbuttondiv'> ";
		gfunkyoutgoingsumWin += "<div>";
		gfunkyoutgoingsumWin += "<div id='centxbuttondiv'>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "</button>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "<div id=outsumbody' class='popUpWindow' style='width: auto !important;' >";
		gfunkyoutgoingsumWin += "<div class='beigemenutable scroll-pane' style='height:95%;width: 730px !important;margin-left:auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D;'>";
		gfunkyoutgoingsumWin += "<table id='outsumTab'>";
		gfunkyoutgoingsumWin += "<thead>";
		gfunkyoutgoingsumWin += "<tr>";
		gfunkyoutgoingsumWin += "<th>Player</th>";
		gfunkyoutgoingsumWin += "<th>Alliance</th>";
		gfunkyoutgoingsumWin += "<th>Target</th>";
		gfunkyoutgoingsumWin += "<th>Coords</th>";
		gfunkyoutgoingsumWin += "<th># Siege</th>";
		gfunkyoutgoingsumWin += "<th># Not Siege </th>";
		gfunkyoutgoingsumWin += "<th>Total TS</th>";
		gfunkyoutgoingsumWin += "</tr>";
		gfunkyoutgoingsumWin += "</thead>";
		gfunkyoutgoingsumWin += "<tbody>";
		for (var i in tg.id) {
			gfunkyoutgoingsumWin += "<tr>";
			gfunkyoutgoingsumWin += `<td class='playerblink'>${tg.pn[i]}</td>`;
			gfunkyoutgoingsumWin += `<td class='allyblink'>${tg.an[i]}</td>`;
			gfunkyoutgoingsumWin += `<td class='cityblink'>${tg.cn[i]}</td>`;
			gfunkyoutgoingsumWin += `<td class='coordblink shcitt' data='${tg.id[i]}'>${tg.x[i]}:${tg.y[i]}</td>`;
			gfunkyoutgoingsumWin += `<td>${tg.se[i]}</td>`;
			gfunkyoutgoingsumWin += `<td>${tg.oth[i]}</td>`;
			gfunkyoutgoingsumWin += `<td>${tg.ts[i].toLocaleString()}</td>`;
			gfunkyoutgoingsumWin += "</tr>";
		}
		gfunkyoutgoingsumWin += "</tbody>";
		gfunkyoutgoingsumWin += "</table>";
		gfunkyoutgoingsumWin += "</div>";
		gfunkyoutgoingsumWin += "</div>";
		$("body").append(gfunkyoutgoingsumWin);
		$("#gfunkyoutgoingsumWin").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		// $("#gfunkyoutgoingsumWin").resizable();
		const newTableObject = document.getElementById('outsumTab');
		sorttable.makeSortable(newTableObject);
		$("#outsumTab td").css("text-align", "center");
		$("#outsumexp").click(function(event) {
			//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
			const outputFile = `OutgoingSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
			// CSV
			exportTableToCSV(document.getElementById('outsumTab'), outputFile);
		});
		setTimeout(function() {
			$("#gfunkyoutgoingsumWin").css("z-index", "4000");
		}, 300);
	}
	// Incoming Summary Window (The Pop up)
	function makeincsum() {
		const tg = {
			id: [],
			hos: [],
			fr: [],
			x: [],
			y: [],
			cn: [],
			pn: []
		};
		var i = 0;
		$("#incomingsAttacksTable tr").each(function() {
			if (!$($(this).children()[0]).is("td")) {
				return;
			}
			const tid = $($($($(this).children()[4]).children()).children()).attr("data");
			if (!tg.id.includes(tid)) {
				tg.id.push(tid);
				tg.hos.push(0);
				tg.fr.push(0);
				tg.cn.push($($($(this).children()[3]).children()).html());
				tg.pn.push($($(this).children()[2]).html());
				const tempx = Number(tid % 65_536);
				const tempy = Number((tid - tempx) / 65_536);
				tg.x.push(tempx);
				tg.y.push(tempy);
			}
			const ti = tg.id.indexOf(tid);
			if (cotg.player.name() == $($(this).children()[7]).html()) {
				tg.fr[ti]++;
			} else {
				tg.hos[ti]++;
			}
		});
		let gfunkyincomingsumWin = "<div id='gfunkyincomingsumWin' class='popUpBox ui-draggable' style='z-index:2002; width:800px !important;height:50% !important;'>";
		gfunkyincomingsumWin += "<div class='ppbwinbgr ui-draggable'  style='width: 800px !important;'>";
		gfunkyincomingsumWin += "<div class='ppbwintop ui-draggable'  style='width: 800px !important;'></div>";
		gfunkyincomingsumWin += "<div class='ppbwincent  ui-draggable'  style='width: 800px !important;'></div>";
		gfunkyincomingsumWin += "<div class='ppbwinbott ui-draggable' style='width: 800px !important;'></div>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "<div class='ppbwincontent  ui-draggable'>";
		gfunkyincomingsumWin += "<div class='popUpBar ui-draggable-handle'>";
		gfunkyincomingsumWin += "<span class='ppspan'>Gfunky's Incoming Attack Summary</span>";
		gfunkyincomingsumWin += "<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 60px;'>";
		gfunkyincomingsumWin += "<div class='button'>";
		gfunkyincomingsumWin += "<a href='#' id ='incsumexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</button>";
		gfunkyincomingsumWin += "<button id='sumX' class='xbutton' onclick=$('#gfunkyincomingsumWin').remove()>";
		gfunkyincomingsumWin += "<div id='xbuttondiv'>";
		gfunkyincomingsumWin += "<div>";
		gfunkyincomingsumWin += "<div id='centxbuttondiv'>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</button>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "<div id=incsumbody' class='popUpWindow' style='width: auto !important;' >";
		gfunkyincomingsumWin += "<div class='beigemenutable scroll-pane' style='height:95%;width: 730px !important;margin-left:auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D;'>";
		gfunkyincomingsumWin += "<table id='incsumTab'>";
		gfunkyincomingsumWin += "<thead>";
		gfunkyincomingsumWin += "<tr>";
		gfunkyincomingsumWin += "<th>Player</th>";
		gfunkyincomingsumWin += "<th>Target</th>";
		gfunkyincomingsumWin += "<th>Coords</th>";
		gfunkyincomingsumWin += "<th>Internal Attacks</th>";
		gfunkyincomingsumWin += "<th>Hostile Attacks</th>";
		gfunkyincomingsumWin += "</tr>";
		gfunkyincomingsumWin += "</thead>";
		gfunkyincomingsumWin += "<tbody>";
		for (var i in tg.id) {
			gfunkyincomingsumWin += "<tr>";
			gfunkyincomingsumWin += `<td class='playerblink'>${tg.pn[i]}</td>`;
			gfunkyincomingsumWin += `<td class='cityblink'>${tg.cn[i]}</td>`;
			gfunkyincomingsumWin += `<td class='coordblink shcitt' data='${tg.id[i]}'>${tg.x[i]}:${tg.y[i]}</td>`;
			gfunkyincomingsumWin += `<td>${tg.fr[i]}</td>`;
			gfunkyincomingsumWin += `<td>${tg.hos[i]}</td>`;
			gfunkyincomingsumWin += "</tr>";
		}
		gfunkyincomingsumWin += "</tbody>";
		gfunkyincomingsumWin += "</table>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</div>";
		gfunkyincomingsumWin += "</div>";
		$("body").append(gfunkyincomingsumWin);
		$("#gfunkyincomingsumWin").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		//$("#gfunkyincomingsumWin").resizable();
		const gfunkyincomingsort = document.getElementById('incsumTab');
		sorttable.makeSortable(gfunkyincomingsort);
		$("#incsumTab td").css("text-align", "center");
		$("#incsumexp").click(function(event) {
			//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
			const outputFile = `IncomingSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
			// CSV
			exportTableToCSV(document.getElementById('incsumTab'), outputFile);
		});
		setTimeout(function() {
			$("#gfunkyincomingsumWin").css("z-index", "4000");
		}, 300);
	}
	// combat reports summary
	$().ready(function() {
		const comsum = "<button id='comsumGo' class='regButton greenb' style='margin-top: 40%;width: 95%;height: 25%;font-size: .8vw; border-radius: 6px;'>Combat Summary</button>";
		const comsump = "<br><button id='comsumpGo' class='regButton greenb' style='margin-left:3%;width: 94%;height: 26px; font-size: 12px;'>Combat Summary</button>";
		const gchangelog = "<br><button id='gchangelogGo' class='regButton greenb' style='margin-left:3%;width: 94%;height: 26px; font-size: 12px;'>Gfunky Changelog</button>";
		$("#reportsTable").css("height", "70%");
		$("#locatecityGo").after(comsum);
		$("#announcementsGo").after(comsump);
		$("#announcementsGo").after(gchangelog);
		$("#comsumGo").click(function() {
			gfunkycomsumWin("city");
		});
		$("#comsumpGo").click(function() {
			gfunkycomsumWin("player");
		});
		$("#gchangelogGo").click(function() {
			gfunkychangelogWin();
		});
	});

	function gfunkychangelogWin(arg) {
		let gfunkychangelWin = `<div id='gfunkychangeldiv' class='popUpBox ui-resizable ui-draggable' style='z-index:2002; width:700px !important;'>
		<div class='ppbwinbgr ui-draggable' style='width:700px !important;'>
		<div class='ppbwintop ui-resizable ui-draggable' style='width:700px !important;'></div>
		<div class='ppbwincent ui-draggable' style='width:700px !important;'></div>
		<div class='ppbwinbott ui-resizable ui-draggable' style='width:700px !important;'></div>
		</div>
		<div class='ppbwincontent ui-resizable ui-draggable' style='height:98%; width:700px !important;' >
		<div class='popUpBar ui-resizable ui-draggable-handle'>
		<span class='ppspan'>Gfunky Change Log</span>
		<button id='sumX' class='xbutton' onclick=$('#gfunkychangeldiv').remove()>
		<div id='xbuttondiv'>
		<div>
		<div id='centxbuttondiv'></div>
		</div>
		</div>
		</button>
		</div>
		<div id='gfunkychangelbody' class='popUpWindow ui-resizable' style='width:95%; margin-left:auto;'>
		<div ><iframe src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTMPIJDZTRoB-z9fXJWRL6GzyVhA0xjHWHSeanepcmqHRne5BmRDhcAd5KUXZX2AhnWMMGE_v2U2dQm/pubhtml' style='height: 95%;width:95%;border-radius: 6px;border: 3px ridge #99805d;'></iframe></div>
		</div>
		</div>
		</div>`;
		$("body").append(gfunkychangelWin);
		$("#gfunkychangeldiv").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
	}
	//combat sum window
	function gfunkycomsumWin(arg) {
		let gfunkycomsWin = `<div id='gfunkycomsumdiv' class='popUpBox ui-draggable' style='z-index:2002; width:550px !important;'>
		<div class='ppbwinbgr ui-draggable'>
		<div class='ppbwintop ui-resizable ui-draggable'></div>
		<div class='ppbwincent ui-draggable'></div>
		<div class='ppbwinbott ui-resizable ui-draggable'></div>
		</div>
		<div class='ppbwincontent ui-draggable' style='height:98%;'>
		<div class='popUpBar ui-draggable-handle'>
		<span class='ppspan'>Combat Summary</span>
		<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 60px;'>
		<div class='button'>
		<a href='#' id ='comsumexp' role='button' style='color:#c7e2e7;'>Export</a>
		</div>
		</button>
		<button id='sumX' class='xbutton' onclick=$('#gfunkycomsumdiv').remove()>
		<div id='xbuttondiv'>
		<div>
		<div id='centxbuttondiv'></div>
		</div>
		</div>
		</button>
		</div>
		<div id='comsumbody' class='popUpWindow'>
		<div>
		<span style='margin-left:5%;'>Date to Retrieve Combat Summary: </span>
		<input style='width:90px;' id='comsumDat' type='datepicker' value='00/00/0000'>
		<button class='regButton greenbuttonGo greenb' id='getcomSum' style='width:10%;'> Go </Button>
		</div>
		<div id='comsumTabbody' style='text-align: center;margin-left: auto;margin-right: auto;width: 98%;'></div>
		</div>
		</div>
		</div>`;
		$("body").append(gfunkycomsWin);
		$("#gfunkycomsumdiv").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		$("#comsumDat").datepicker();
		$("#getcomSum").click(function() {
			comsumtab(arg);
		});
		$("#comsumexp").click(function(event) {
			//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
			const outputFile = `CombatSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
			// CSV
			exportTableToCSV(document.getElementById('comsumbody'), outputFile);
		});
	}

	function comsumtab(arg) {
		const ata = {
			sent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			survive: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}; // non siege
		const ats = {
			sent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			survive: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}; // siege
		const dt = {
			sent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			survive: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}; // defense
		const aally = [];
		const dally = [];
		const apl = [];
		const aplcount = [];
		const dpl = [];
		const spl = [];
		let ajc = 0;
		const siege = {
			src: [],
			troops: [],
			ts: []
		};
		const assc = {
			real: 0,
			fake: 0
		};
		const siec = {
			real: 0,
			fake: 0
		};
		const pluc = {
			real: 0,
			fake: 0
		};
		let scoc = 0;
		const day = $("#comsumDat").val().substring(3, 5);
		const month = $("#comsumDat").val().substring(0, 2);
		let rlines;
		if (arg == "city") {
			// //////console.log(arg);
			rlines = $("#bottomspotinfo table tbody tr");
		}
		if (arg == "player") {
			rlines = $("#reportstBody tr");
		}
		if (rlines.length > 0) {
			let r = 0;
			var loop = function() {
				let rday;
				let rmonth;
				let thiss;
				let rid;
				if (arg == "city") {
					thiss = rlines[r];
					rday = $(thiss).children().first().next().html().substring(9, 11);
					rmonth = $(thiss).children().first().next().html().substring(12, 14);
				}
				if (arg == "player") {
					thiss = rlines[r];
					rday = $(thiss).children().first().next().next().html().substring(9, 11);
					rmonth = $(thiss).children().first().next().next().html().substring(12, 14);
				}
				if (day == rday && month == rmonth) {
					if (arg == "city") {
						rid = $(thiss).children().first().attr("data");
					}
					if (arg == "player") {
						rid = $(thiss).children().first().next().attr("data");
					}
					const dat = {
						r: rid
					};
					$.ajax({
						url: 'includes/gFrep.php',
						type: 'POST',
						async: true,
						data: dat,
						success(data) {
							const rcounter = `<span>Scanning Reports - ${r}/${rlines.length}</span>`;
							$("#comsumTabbody").html(rcounter);
							ajc++;
							const rdata = JSON.parse(data);
							if (aally.indexOf(rdata.apan) < 0) {
								aally.push(rdata.apan);
							} //pushing enemy alliance name in aally
							if (dally.indexOf(rdata.tpan) < 0) {
								dally.push(rdata.tpan);
							} //pushing our alliance name in dally
							if (dpl.indexOf(rdata.tpn) < 0) {
								dpl.push(rdata.tpn);
							} //pushing our name in dpl
							if (rdata.type == 3) {
								scoc++;
							} // incrementing scoc by 1 if rdata.type is 3 / scout is type 3
							if (rdata.siege) { //rdata.type==1
								const tempv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // attacking troops TS
								let tempts = 0;
								const rdatareport = rdata.siege.reports;
								$.each(rdatareport, function() {
									const ztts = this.tts.reduce(function(a, b) {
										return a + b;
									}, 0);
									if (ztts === 0) {
										return;
										//////console.log("duplicate report");
									}
									$.each(this.ats, function(key, value) { // pushing attack troops
										tempv[key] = value;
										tempts += value * TroopScoreIndex[key]; //TroopScoreIndex is TS of the troop type which we multiply with troop numbers to get TS amount to known if its fake or not
									});
									const tempcoord = this.acn; //acn is enemy castle cords
									if (siege.src.includes(tempcoord)) {
										// if cords are in siege.src, meaning siege arrived before
										if (siege.ts[siege.src.indexOf(tempcoord)] < tempts) { // if previous TS is less than new one
											if (tempts >= 5000 && siege.ts[siege.src.indexOf(tempcoord)] < 5000) {
												siec.fake--;
												siec.real++;
											}
											siege.troops[siege.src.indexOf(tempcoord)] = tempv;
											siege.ts[siege.src.indexOf(tempcoord)] = tempts;
										}
									} else { //if its not in siege.src then
										if (tempts < 5000) {
											siec.fake++;
										} else {
											siec.real++;
										}
										if (apl.indexOf(this.apn) < 0) { // checking enemy name in apl
											apl.push(this.apn);
											aplcount[apl.indexOf(this.apn)] = 1;
										} else {
											aplcount[apl.indexOf(this.apn)] += 1;
										}
										siege.src.push(tempcoord);
										siege.troops.push(tempv);
										siege.ts.push(tempts);
									}
									$.each(this.atlo, function(key, value) {
										ats.lost[key] += value;
									});
									$.each(this.atle, function(key, value) {
										ats.survive[key] += value;
									});
									// pushing defense in
									for (const i in this.ttle) {
										dt.survive[i] += this.ttle[i];
										dt.sent[i] += this.tts[i];
										dt.lost[i] += this.ttlo[i];
									}
									// pushing defense if reinforcers in
									if ('reinforcers' in this) { // pushing defender ts in
										$.each(this.reinforcers, function() {
											if (spl.indexOf(this.pn) < 0) { //pushing defender name into spl
												spl.push(this.pn);
											}
											$.each(this.ttle, function(key, value) {
												dt.survive[key] += value;
											});
											$.each(this.ttlo, function(key, value) {
												dt.lost[key] += value;
											});
											$.each(this.tts, function(key, value) {
												dt.sent[key] += value;
											});
										});
									}
								});
							}
							if (!(rdata.assault || rdata.plunder)) {
								return;
							}
							if (rdata.assault) {
								var rdatareports = rdata.assault.reports;
							}
							if (rdata.plunder) {
								var rdatareports = rdata.plunder.reports;
							}
							$.each(rdatareports, function() {
								const ztts = this.tts.reduce(function(a, b) {
									return a + b;
								}, 0);
								if (ztts === 0) {
									return;
									//////console.log("duplicate report");
								}
								if (apl.indexOf(this.apn) < 0) { // checking enemy name in apl, if not then
									apl.push(this.apn);
									aplcount[apl.indexOf(this.apn)] = 1;
								} else { // if enemy name already there then
									aplcount[apl.indexOf(this.apn)] += 1;
								}
								let tempts = 0;
								$.each(this.ats, function(key, value) {
									ata.sent[key] += value;
									tempts += value * TroopScoreIndex[key]; //TroopScoreIndex is TS of the type which we multiply with troop numbers to get fake or not
								});
								//////console.log(tempts);
								if (rdata.assault) {
									if (tempts < 5000) {
										assc.fake++;
									} else {
										assc.real++;
									}
								}
								if (rdata.plunder) {
									if (tempts < 5000) {
										pluc.fake++;
									} else {
										pluc.real++;
									}
								}
								$.each(this.atlo, function(key, value) {
									ata.lost[key] += value;
								});
								$.each(this.atle, function(key, value) {
									ata.survive[key] += value;
								});
								// pushing defense in
								for (const i in this.ttle) {
									dt.survive[i] += this.ttle[i];
									dt.sent[i] += this.tts[i];
									dt.lost[i] += this.ttlo[i];
								}
								// pushing defense if reinforcers in
								if ('reinforcers' in this) { // pushing defender ts in
									$.each(this.reinforcers, function() {
										if (spl.indexOf(this.pn) < 0) { //pushing defender name into spl
											spl.push(this.pn);
										}
										$.each(this.ttle, function(key, value) {
											dt.survive[key] += value;
										});
										$.each(this.ttlo, function(key, value) {
											dt.lost[key] += value;
										});
										$.each(this.tts, function(key, value) {
											dt.sent[key] += value;
										});
									});
								}
							});
						}
					});
					if (++r < rlines.length) {
						setTimeout(loop, 500);
					} else {
						setTimeout(function() {
							for (const i in siege.troops) {
								for (const j in siege.troops[i]) {
									ats.sent[j] += siege.troops[i][j];
								}
							}
							drawcomsumtable();
						}, 100 * ajc);
					}
					return;
				}
				if (++r < rlines.length) {
					setTimeout(loop, 0);
				} else {
					setTimeout(function() {
						for (const i in siege.troops) {
							for (const j in siege.troops[i]) {
								ats.sent[j] += siege.troops[i][j];
							}
						}
						drawcomsumtable();
					}, 100 * ajc);
				}
			};
			loop();
		}

		function drawcomsumtable() {
			const atps = [];
			const dtps = [];
			let tassent = 0;
			let taasent = 0;
			let taadied = 0;
			let tasdied = 0;
			let tddied = 0;
			let comsumbody = `<p><span style='font-weight:bold;color:#980d0d;'>Combat Summary for ${$("poll2.city.citn").text()}(${$("poll2.city.x").text()}) on ${$("#comsumDat").val()}</span><br><span>Reports: ${ajc}</span>`;
			if (assc.real > 0) {
				comsumbody += ` | Real assaults: ${assc.real}</span>`;
			}
			if (assc.fake > 0) {
				comsumbody += ` | Fake assaults: ${assc.fake}</span>`;
			}
			if (siec.real > 0) {
				comsumbody += ` | Real sieges: ${siec.real}</span>`;
			}
			if (siec.fake > 0) {
				comsumbody += ` | Fake sieges: ${siec.fake}</span>`;
			}
			if (pluc.real > 0) {
				comsumbody += ` | Real plunders: ${pluc.real}</span>`;
			}
			if (pluc.fake > 0) {
				comsumbody += ` | Fake plundes: ${pluc.fake}</span>`;
			}
			if (scoc > 0) {
				comsumbody += ` | Scouts: ${scoc}</span>`;
			}
			comsumbody += "<div id='comsumatab' class='beigemenutable' style='border:3px ridge #99805D; border-radius:6px;'>";
			comsumbody += `<span>Attacking Alliance(s): ${aally} </span><br>`;
			comsumbody += "<span>Attacker(s): ";
			for (var i in apl) {
				comsumbody += `${apl[i]}(${aplcount[i]}) `;
			}
			comsumbody += "</span>";
			comsumbody += "<table>";
			comsumbody += "<thead>";
			comsumbody += "<tr>";
			comsumbody += "<th style='width:100px;height:45px;'></th>";
			for (var i in ata.sent) {
				if (ata.sent[i] > 0 || ats.sent[i] > 0) {
					atps.push(i);
					comsumbody += `<th><div class='${tpicdiv[i]}'></div></th>`;
				}
			}
			comsumbody += "<th>Total</th>";
			comsumbody += "</tr>";
			comsumbody += "</thead>";
			comsumbody += "<tbody>";
			comsumbody += "<tr>";
			comsumbody += "<td>Non-siege Sent</td>";
			for (var i in atps) {
				comsumbody += `<td>${ata.sent[atps[i]].toLocaleString()}</td>`;
				taasent += ata.sent[atps[i]] * TroopScoreIndex[atps[i]];
			}
			comsumbody += `<td>${taasent.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "<tr>";
			comsumbody += "<td>Non-siege Lost</td>";
			for (var i in atps) {
				comsumbody += `<td>${ata.lost[atps[i]].toLocaleString()}</td>`;
				taadied += ata.lost[atps[i]] * TroopScoreIndex[atps[i]];
			}
			comsumbody += `<td>${taadied.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "<tr>";
			comsumbody += "<td>Siege Sent</td>";
			for (var i in atps) {
				comsumbody += `<td>${ats.sent[atps[i]].toLocaleString()}</td>`;
				tassent += ats.sent[atps[i]] * TroopScoreIndex[atps[i]];
			}
			comsumbody += `<td>${tassent.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "<tr>";
			comsumbody += "<td>Siege Lost</td>";
			for (var i in atps) {
				comsumbody += `<td>${ats.lost[atps[i]].toLocaleString()}</td>`;
				tasdied += ats.lost[atps[i]] * TroopScoreIndex[atps[i]];
			}
			comsumbody += `<td>${tasdied.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "</tbody>";
			comsumbody += "</table>";
			comsumbody += `<span style='color: lime;'>Total Sent: ${(taasent+tassent).toLocaleString()}</span><br>`;
			comsumbody += `<span style='color: red;'>Total Lost: ${(taadied+tasdied).toLocaleString()}</span>`;
			comsumbody += "</div></p>";
			comsumbody += "<p><div id='comsumdtab' class='beigemenutable'style='border:3px ridge #99805D; border-radius:6px;'>";
			comsumbody += `<span>Defending Alliance(s): ${dally}</span><br>`;
			comsumbody += `<span>Defender(s): ${dpl} </span>`;
			if (spl.length > 0) {
				comsumbody += "<br><span>Supporters: ";
				for (var i in spl) {
					comsumbody += `${spl[i]} `;
				}
				comsumbody += " </span>";
			}
			comsumbody += "<table>";
			comsumbody += "<thead>";
			comsumbody += "<tr>";
			comsumbody += "<th style='width:100px;height:45px;'></th>";
			for (var i in dt.sent) {
				if (dt.sent[i] > 0) {
					dtps.push(i);
					comsumbody += `<th><div class='${tpicdiv[i]}'></div></th>`;
				}
			}
			comsumbody += "<th>Total (Seen)</th>";
			comsumbody += "<th>Total (Estimated)</th>";
			comsumbody += "</tr>";
			comsumbody += "</thead>";
			comsumbody += "<tbody>";
			comsumbody += "<tr>";
			comsumbody += "<td>Lost</td>";
			for (var i in dtps) {
				comsumbody += `<td>${dt.lost[dtps[i]].toLocaleString()}</td>`;
				tddied += dt.lost[dtps[i]] * TroopScoreIndex[dtps[i]];
			}
			comsumbody += `<td>${tddied.toLocaleString()}</td>`;
			comsumbody += `<td>${dt.lost[18].toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "</tbody>";
			comsumbody += "</table>";
			comsumbody += `<span style='color: red;'>Total lost: ${(tddied+dt.lost[18]).toLocaleString()}</span>`;
			comsumbody += "</div></p>";
			$("#comsumTabbody").html(comsumbody);
			$("#comsumatab td").css({
				"text-align": "center",
				"font-size": "10px"
			});
			$("#comsumatab th").css({
				"text-align": "center",
				"font-size": "10px"
			});
			$("#comsumdtab td").css({
				"text-align": "center",
				"font-size": "10px"
			});
			$("#comsumdtab th").css({
				"text-align": "center",
				"font-size": "10px"
			});
		}
	}
	/*

	Layouts Function

	*/

	// Finished Updating 3.22.23 Fact
	$().ready(function() {
		$('#openLOinplanner').remove();
		$("#citynotes").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		$('#citynotes').height('420px');
		$('#citynotes').width('500px');
		$('#openOVLinplanner').html('<a href="https://cotgopt.com/" target="_blank" rel="noopener noreferrer">CoTGOpt x GFunky+</a>');
		//$('#openLOinplanner').html('<a href="https://cotgopt.com/" target="_blank" rel="noopener noreferrer">Open CoTG Opt by GFunky+</a>');
		$('#citylayoutTab').append('<span id="loinplanner" style="float: right;font-size: 10px;"><a href="https://cotgopt.com/" target="_blank" rel="noopener noreferrer">CoTGOpt x GFunky+</a></span>');
		$('#loinplanner').after(currentLOtextarea);
	
	let layoutopttab = "<li id='layoutopt' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='layoutoptBody'";
		layoutopttab += "aria-labeledby='ui-id-60' aria-selected='false' aria-expanded='false'>";
		layoutopttab += "<a href='#layoutoptBody' class='ui-tabs-anchor' role='presentation' tabindex='-1' id='ui-id-60'>Layout Options</a></li>";
		let layoutoptbody = `
		<div id='layoutoptBody' aria-labeledby='ui-id-60' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none;'> 
			 <table style='width: 32%;display: inline-block;background: #e1c190;border: 3px tan ridge;border-radius: 6px;'>
    <tr>
      <th style='text-align: center;font-size: 12px;border: 3px tan ridge;border-radius: 6px;background: #f3d298;'>Building Settings</th>
    </tr>
    <tr>
      <td><input id='addnotes' class='clsubopti' type='checkbox' checked> Set Notes</input></td>
    </tr>
    <tr>
      <td><input id='addcabins' class='clsubopti' type='checkbox' checked> Cabins: </input><input id='cablev' type='number' style='width:22px;' value='8'></input></td>
    </tr>
    <tr>
      <td><input id='addallbuildings' class='clsubopti' type='checkbox' checked> Buildings </input></td>
    </tr>
  </table>

  <table style='width: 32%;display: inline-block;background: #e1c190;border: 3px tan ridge;border-radius: 6px;'>
    <tr>
      <th style='text-align: center;font-size: 12px;border: 3px tan ridge;border-radius: 6px;background: #f3d298;'>Defense Settings</th>
    </tr>
    <tr>
      <td><input id='addtroops' class='clsubopti' type='checkbox' checked> Set Troops </input></td>
    </tr>
    <tr>
      <td><input id='addwalls' class='clsubopti' type='checkbox' checked > Upgrade Walls </input></td>
    </tr>
    <tr>
      <td><input id='addtowers' class='clsubopti' type='checkbox' checked> Upgrade Towers </input></td>
    </tr>
  </table>

  <table style='width: 32%;display: inline-block;background: #e1c190;border: 3px tan ridge;border-radius: 6px;'>
    <tr>
      <th style='text-align: center;font-size: 12px;border: 3px tan ridge;border-radius: 6px;background: #f3d298;'>Resource Settings</th>
    </tr>
    <tr>
      <td><input id='addres' class='clsubopti' type='checkbox' checked> Set Resources </input></td>
    </tr>
    <tr>
      <td><input id='addhub' class='clsubopti' type='checkbox' checked> Set Hub </input> </td>
    </tr>
    <tr>
      <td><input id='addfoodwarning' class='clsubopti' type='checkbox' checked > Food Warning: </input><input id='fwlev' type='number' style='width:22px;' value='8' placeholder='LVL'></input> </td>
    </tr>
  </table>
  <table style='color: #f3d298; border-radius: 9px; background: #42331e; border: 3px tan ridge;'>
  <tr>
					  <td>Select Hubs list: </td>
					  <td id='selhublist'></td>
					  <td>
						<button id='nearhubAp' class='regButton greenb' style='width:90%; margin-left: 10%'> Set Nearest Hub </button>
						<button id='quickAp' class='regButton greenb' style='width:90%; margin-left: 10%'> Quick Setup </button>
					  </td>
					</tr>
		</table>
			<table style='border: 3px ridge #99805d; border-radius: 6px; text-align: center; margin-left: auto;margin-right: auto; display:inline-block; width:49%;'>
					<tr>
					  <td colspan='2'style='text-align: center;font-size: 17px;border: 3px tan ridge;border-radius: 6px;background: #f3d298;'> Request Resources</td>
					</tr>
					<tr>
					  <td style='text-align:center;'>Wood</td>
					  <td><input id='woodin' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='220000'></td>
					  </tr>
					<tr>
					  <td style='text-align:center;'>Stone</td>
					  <td><input id='stonein' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='220000'></td>
					  </tr>
					<tr>
					  <td style='text-align:center;'>Iron</td>
					  <td><input id='ironin' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='200000'></td>
					  </tr>
					<tr>
					  <td style='text-align:center;'>Food</td>
					  <td><input id='foodin' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='350000'></td>
					</tr>
					</table>
					<table style='border: 3px ridge #99805d; border-radius: 6px; text-align: center; margin-left: auto;margin-right: auto; display:inline-block; width:49%;'>
					<tr>
					  <td colspan='2' style='text-align: center;font-size: 17px;border: 3px tan ridge;border-radius: 6px;background: #f3d298;'>Excess Resources</td>
					</tr>
					<tr>
					  <td style='text-align:center;'>Wood</td>
					  <td><input id='woodout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='250000'></td>
					  </tr>
					<tr>
					  <td style='text-align:center;'>Stone</td>
					  <td><input id='stoneout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='250000'></td>
					  </tr>
					<tr>
					  <td style='text-align:center;'>Iron</td>
					  <td><input id='ironout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='250000'></td>
					  </tr>
					<tr>
					  <td style='text-align:center;'>Food</td>
					  <td><input id='foodout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='400000'></td>
					</tr>
				</table>
				<table>
					<tr>
					  <td id='buttd' style='text-align:center';></td>
					</tr>
				</table>
			
		</div>`;
		const layoptbut = "<button id='layoptBut' class='regButton greenb' style='width:150px;'>Save Res Settings</button>";
		const tabs = $("#CNtabs").tabs();
		const ul = tabs.find("ul");
		$(layoutopttab).appendTo(ul);
		tabs.tabs("refresh");
		$("#CNtabs").append(layoutoptbody);
		$("#buttd").append(layoptbut);
		$("#nearhubAp").click(function() {
			setnearhub();
		});
		$("#quickAp").click(function() {
			setquickAP();
		});
		$("#layoptBut").click(function() {
			localStorage.setItem('woodin', $("#woodin").val());
			localStorage.setItem('foodin', $("#foodin").val());
			localStorage.setItem('ironin', $("#ironin").val());
			localStorage.setItem('stonein', $("#stonein").val());
			localStorage.setItem('woodout', $("#woodout").val());
			localStorage.setItem('foodout', $("#foodout").val());
			localStorage.setItem('ironout', $("#ironout").val());
			localStorage.setItem('stoneout', $("#stoneout").val());
			localStorage.setItem('cablev', $("#cablev").val());
			localStorage.setItem('fwlev', $("#fwlev").val());
		});
		//Loading Saved Values
		/* New Version 3.22.23 Fact */
		// Loop through each checkbox input and set its value based on localStorage, and attach the change event handler
		// Updated 3.30.23 to Fix addcabins
		$('.clsubopti, #cablev, #fwlev, #addcabins').each(function() {
			var $this = $(this);
			var localStorageName = $this.attr('id');

			if (localStorage.getItem(localStorageName)) {
				if ($this.is(':checkbox')) {
					$this.prop('checked', localStorage.getItem(localStorageName) == "true");
				} else {
					$this.val(localStorage.getItem(localStorageName));
				}
			}

			$this.change(function() {
				if ($this.is(':checkbox')) {
					localStorage.setItem(localStorageName, $this.prop('checked'));
				} else {
					localStorage.setItem(localStorageName, $this.val());
				}
			});
		});



		// Fixed 3.27.23 defined which selects to return to first option. it was previously selecting all selects and reverting to default

		$('#ui-id-59 , #applyoverlayGo').click(function() {
			// added 3.21.23 Fact
			$('#cityplannerTab select').val(function() {
				return $(this).find('option:first').val();
			});
		});

		// New Version 3.12.23 Fact
		$("#editspncn").click(function() {



			var aa = city.mo;
			var ab = city.cid;
			let acg = city.cg;
			let hubdata = {
				a: JSON.stringify(acg),
				cid: ab
			};
			$.ajax({
				url: 'includes/cgS.php',
				type: 'POST',
				async: true,
				data: hubdata
			});
			// Check if the selHub element exists
			if ($("#selHub").length) {
				// If it exists, use it
				if (localStorage.getItem('hublist')) {
					$("#selHub").val(localStorage.getItem('hublist')).change();
				}
			} else {
				// If it doesn't exist, create a new one
				var selhub = $("#organiser").clone(false).attr({
					id: "selHub",
					style: "width:100%;height:28px;font-size:11;border-radius:6px;margin:7px"
				});
				$("#selhublist").append(selhub);
				if (localStorage.getItem('hublist')) {
					$("#selHub").val(localStorage.getItem('hublist')).change();
				}
			}

			$("#selHub").change(function() {
				localStorage.setItem('hublist', $("#selHub").val());
			});

			setTimeout(function() {


				//Updated 3.8.23 Fact
				// loop through all 9 selects
				const layoutTypes = [{
						type: 'Land Offense',
						id: 'landoffenselayouts'
					},
					{
						type: 'Land Defense',
						id: 'landdefenselayouts'
					},
					{
						type: 'Water Offense',
						id: 'wateroffenselayouts'
					},
					{
						type: 'Water Defense',
						id: 'waterdefenselayouts'
					},
					{
						type: 'Hub',
						id: 'hublayouts'
					},
					{
						type: 'Shipper',
						id: 'shipperlayouts'
					},
					{
						type: 'Portal',
						id: 'portallayouts'
					}
					// { type: 'Troop Scout Galley', id: 'troopscoutgalleylayouts' }
				];
				let selectButtons = '';
				for (let i = 0; i < layoutTypes.length; i++) {
					const layoutType = layoutTypes[i];
					const selectId = layoutType.id;
					// Check if the select element already exists
					if ($('#' + selectId).length) {
						continue;
					}
					// Get the layouts array for the current select element
					const layouts = gfunkyLayouts[layoutType.type];
					// Create the select element with options for each layout
					let selectOptions = '';
					for (let j = 0; j < layouts.length; j++) {
						const layout = layouts[j];
						const optionLabel = layout.layoutName;
						const optionValue = JSON.stringify(layout).replace(/=/g, '').replace(/\s/g, '').replace(/"layoutname":"/, '"layoutname":"');
						////console.log(optionValue);

						// Store the layout object as a JSON string in the option value
						selectOptions += `<option value='${optionValue}'>${optionLabel}</option>`;
					}
					const selectButton = `<select id="${selectId}" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option >${layoutType.type} Layouts</option>${selectOptions}</select>`;
					selectButtons += selectButton;
				}

				// Add the select buttons to the page
				if (selectButtons) {
					$('#clearresquad').after(selectButtons);
				}
				var currentlayout = $('#currentLOtextarea').text();
		
				// Replace invalid characters in current layout
				
				for (var i = 20; i < currentlayout.length - 20; i++) {
					var tmpchar = currentlayout.charAt(i);
					var cmp = new RegExp(tmpchar);
					if (!(cmp.test(emptyspots))) {
						currentlayout = currentlayout.replaceAt(i, "-");
					}
				}


				$('#landoffenselayouts, #landdefenselayouts, #wateroffenselayouts, #waterdefenselayouts, #hublayouts, #shipperlayouts, #portallayouts').change((event) => {


						var aa = city.mo;
						var ab = city.cid;
						let acg = city.cg;
						let hubdata = {
							a: JSON.stringify(acg),
							cid: ab
						};
						$.ajax({
							url: 'includes/cgS.php',
							type: 'POST',
							async: true,
							data: hubdata
						});


					setTimeout(function() {
						let newlayout = currentlayout;
						let selectedLayout = $(event.currentTarget).val();
						//console.log(selectedLayout);


						// Access layout data for selected layout
						let layoutData = JSON.parse(selectedLayout);
						let layoutString = layoutData.layoutString;
						let layoutRemark = layoutData.layoutRemark;
						let layoutNote = layoutData.layoutNote;
						let layoutTroops = layoutData.layoutTroops;
						let layoutResources = layoutData.layoutResources;
						let layoutName = layoutData.layoutName;

						if (newlayout === '') {
							newlayout = layoutString;
						}

						
						for (let i = 20; i < currentlayout.length; i++) {
							const tmpchar = layoutString.charAt(i);
							const cmp = new RegExp(tmpchar);
							if (!(cmp.test(emptyspots))) {
								newlayout = newlayout.replaceAt(i, tmpchar);
							}
						}
						
						
						//console.log("LayoutData", layoutData);
						// Updated 4.18.23 Fact 
						$('#overlaytextarea').val(layoutString);
						//console.log("new Layout", newlayout);
						//console.log("current Layout", currentlayout);

						setTimeout(function() {
							$("#applyoverlayGo")[0].click();
						}, 3000);
						if ($("#addnotes").prop("checked") == true) {
							$('#CNremarks').val(layoutRemark);
							$('#citynotestextarea').val(layoutNote);
							setTimeout(function() {
								$("#citnotesaveb")[0].click();
							}, 1000);
						}
						var aa = city.mo;
						var ab = city.cid;
						if ($("#addtroops").prop("checked") == true) {
							for (var k in layoutTroops) {
								// in the event troops get turned to strings, just add .toString(); to the end of troupcoun*
								aa[9 + Number(k)] = layoutTroops[k];
							}
						}
						if ($("#addwalls").prop("checked") == true) {
							aa[26] = 1;
						}
						if ($("#addtowers").prop("checked") == true) {
							aa[27] = 1;
						}
						if ($("#addhub").prop("checked") == true) {
							// Get the selected value of the selHub select element
							const selectedHub = $("#selHub").val();

							var hubs = {
								cid: [],
								distance: []
							};

							$.each(clc, function(key, value) {
								if (key == selectedHub) {
									hubs.cid = value;
								}
							});
							for (var i in hubs.cid) {
								const tempx = Number(hubs.cid[i] % 65_536);
								const tempy = Number((hubs.cid[i] - tempx) / 65_536);
								hubs.distance.push(Math.sqrt((tempx - city.x) * (tempx - city.x) + (tempy - city.y) * (tempy - city.y)));
							}
							var mindist = Math.min(...hubs.distance);
							var nearesthub = hubs.cid[hubs.distance.indexOf(mindist)];
							layoutResources[14] = nearesthub;
							layoutResources[15] = nearesthub;

						} else {
							layoutResources[14] = poll2.city.mo[41];
							layoutResources[15] = poll2.city.mo[42];
						}
						if ($("#addres").prop("checked") == true) {
							for (var k in layoutResources) {
								aa[28 + Number(k)] = layoutResources[k];
							}
						}
						if ($("#addcabins").prop("checked") == true) {
							aa[51] = [1, $("#cablev").val()];
							aa[1] = 1;
						}
						if ($("#addfoodwarning").prop("checked") == true) {
							fw = $("#fwlev").val();
						}
						if ($("#addallbuildings").prop("checked") == true) {
							aa[51] = [1, $("#cablev").val()];
							for (var i = 52; i <= 74; i++) {
								aa[i] = [1, 10];
							}
							for (var i = 0; i < 8 ; i++) {
								if (i != 8) {
									aa[i] = 1;
								}
							}
						}


						var dat = {
							a: JSON.stringify(aa),
							b: ab
						};

						$.ajax({
							url: 'includes/mnio.php',
							type: 'POST',
							async: true,
							data: dat
						});

						const fwdat = {
							cid: ab,
							a: fw
						};
						$.ajax({
							url: 'includes/svFW.php',
							type: 'POST',
							async: true,
							data: fwdat
						});

					});

					// Reset other select buttons to default state
					  $('#landoffenselayouts, #landdefenselayouts, #wateroffenselayouts, #waterdefenselayouts, #hublayouts, #shipperlayouts, #portallayouts')
						.not(event.currentTarget)
						.val($('select option:first').val());

				});

			});
		});


	});
	//setting nearest hub to a city
	function setnearhub() {
		var aa = city.mo;
		var ab = city.cid;
		var acg = city.cg;

		let hubdata = {
			a: JSON.stringify(acg),
			cid: ab
		};
		$.ajax({
			url: 'includes/cgS.php',
			type: 'POST',
			async: true,
			data: hubdata
		});
		setTimeout(function() {
			var resources = [0, 0, 0, 0, 1, 130000, 130000, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 300000, 300000, 300000, 400000];

			const fw = city.fw;
			var hubs = {
				cid: [],
				distance: []
			};
			$.each(clc, function(key, value) {
				if (key == $("#selHub").val()) {
					hubs.cid = value;
				}
			});
			for (var i in hubs.cid) {
				var tempx = Number(hubs.cid[i] % 65536);
				var tempy = Number((hubs.cid[i] - tempx) / 65536);
				hubs.distance.push(Math.sqrt((tempx - city.x) * (tempx - city.x) + (tempy - city.y) * (tempy - city.y)));
			}
			var mindist = Math.min.apply(Math, hubs.distance);
			var nearesthub = hubs.cid[hubs.distance.indexOf(mindist)];
			if ($("#addwalls").prop("checked") == true) {
				aa[26] = 1;
			}
			if ($("#addtowers").prop("checked") == true) {
				aa[27] = 1;
			}
			if ($("#addcabins").prop("checked") == true) {
				aa[51] = [1, $("#cablev").val()];
				aa[1] = 1;
			}
			if ($("#addallbuildings").prop("checked") == true) {
				aa[51] = [1, $("#cablev").val()];
				for (var i = 52; i <= 74; i++) {
					aa[i] = [1, 10];
				}
				for (var i = 0; i < 8 ; i++) {
					if (i != 8) {
						aa[i] = 1;
					}
				}
			}
			resources[14] = nearesthub;
			resources[15] = nearesthub;
			resources[5] = $("#woodin").val();
			resources[6] = $("#stonein").val();
			resources[7] = $("#ironin").val();
			resources[8] = $("#foodin").val();
			resources[19] = $("#woodout").val();
			resources[20] = $("#stoneout").val();
			resources[21] = $("#ironout").val();
			resources[22] = $("#foodout").val();
			for (var k in resources) {
				aa[28 + Number(k)] = resources[k];
			}
			var dat = {
				a: JSON.stringify(aa),
				b: cdata.cid
			};
			$.ajax({
				url: 'includes/mnio.php',
				type: 'POST',
				async: true,
				data: dat
			});
		}, 2000);
	}
	//Quick Setupp
	function setquickAP() {
		var aa = city.mo;
		var ab = city.cid;
		var acg = city.cg;
		////console.log(acg);
		let hubdata = {
			a: JSON.stringify(acg),
			cid: ab
		};
		$.ajax({
			url: 'includes/cgS.php',
			type: 'POST',
			async: true,
			data: hubdata
		});
		setTimeout(function() {
			var resources = [0, 0, 0, 0, 1, 200000, 220000, 200000, 350000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 300000, 300000, 300000, 400000];
			var aa = city.mo;
			var ab = city.cid;
			const fw = city.fw;
			var hubs = {
				cid: [],
				distance: []
			};
			$.each(clc, function(key, value) {
				if (key == $("#selHub").val()) {
					hubs.cid = value;
				}
			});
			for (var i in hubs.cid) {
				var tempx = Number(hubs.cid[i] % 65536);
				var tempy = Number((hubs.cid[i] - tempx) / 65536);
				hubs.distance.push(Math.sqrt((tempx - city.x) * (tempx - city.x) + (tempy - city.y) * (tempy - city.y)));
			}
			var mindist = Math.min.apply(Math, hubs.distance);
			var nearesthub = hubs.cid[hubs.distance.indexOf(mindist)];
			if ($("#addwalls").prop("checked") == true) {
				aa[26] = 1;
			}
			if ($("#addtowers").prop("checked") == true) {
				aa[27] = 1;
			}
			if ($("#addcabins").prop("checked") == true) {
				aa[51] = [1, $("#cablev").val()];
				aa[1] = 1;
			}
			if ($("#addallbuildings").prop("checked") == true) {
				aa[51] = [1, $("#cablev").val()];
				for (var i = 52; i <= 74; i++) {
					aa[i] = [1, 10];
				}
				for (var i = 0; i < 8 ; i++) {
					if (i != 8) {
						aa[i] = 1;
					}
				}
			}
			resources[14] = nearesthub;
			resources[15] = nearesthub;
			resources[5] = $("#woodin").val();
			resources[6] = $("#stonein").val();
			resources[7] = $("#ironin").val();
			resources[8] = $("#foodin").val();
			resources[19] = $("#woodout").val();
			resources[20] = $("#stoneout").val();
			resources[21] = $("#ironout").val();
			resources[22] = $("#foodout").val();
			for (var k in resources) {
				aa[28 + Number(k)] = resources[k];
			}
			var dat = {
				a: JSON.stringify(aa),
				b: ab
			};
			$.ajax({
				url: 'includes/mnio.php',
				type: 'POST',
				async: true,
				data: dat
			});
			const fwdat = {
				cid: ab,
				a: fw
			};
			$.ajax({
				url: 'includes/svFW.php',
				type: 'POST',
				async: true,
				data: fwdat
			});
		}, 2000);
	}
	//Removing All Layout Attibutes
	$("#removeoverlayGo").click(function() {
		const resources = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		const troops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		const aa = city.mo;
		const ab = city.cid;

		$('#CNremarks').val("");
		$('#citynotestextarea').val("");
		setTimeout(function() {
			$("#citnotesaveb")[0].click();
		}, 1000);

		resources.forEach((val, key) => aa[28 + Number(key)] = val);
		troops.forEach((val, key) => aa[9 + Number(key)] = val);

		const dat = {
			a: JSON.stringify(aa),
			b: ab
		};
		$.ajax({
			url: 'includes/mnio.php',
			type: 'POST',
			async: true,
			data: dat
		});
	});








	//Overviews
	function opengfunkyoverviewwin() {
		sum = false;
		//////console.log(1);
		let gfunkyoverviewwin = "<div id='gfunkyoverviewwin' class='longmenu ui-draggable' style='z-index:2002; width: 80% !important;left: 200px !important;'>";
		gfunkyoverviewwin += "<div class='longwindowbgr'>";
		gfunkyoverviewwin += "<div class='lngwinbgtop'></div>";
		gfunkyoverviewwin += "<div class='lngwinbgcent''></div>";
		gfunkyoverviewwin += "<div class='lngwinbgbott'></div>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "<div class='longwindowcontent'>";
		gfunkyoverviewwin += "<div class='popUpBar ui-draggable-handle'> ";
		gfunkyoverviewwin += "<span class='ppspan'>Gfunky's Empire Overviews</span>";
		gfunkyoverviewwin += "<button id='sumWinX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#gfunkyoverviewwin').hide()>";
		gfunkyoverviewwin += "<div id='xbuttondiv'> ";
		gfunkyoverviewwin += "<div>";
		gfunkyoverviewwin += "<div id='centxbuttondiv'></div>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		gfunkyoverviewwin += "</div>";
		//Overview Tabs
		gfunkyoverviewwin += "<div id='gfunkyoverviewdiv' class='beigetabspopup' style='background:none;border: none;padding: 0px;height:74%; width:97%; margin-left:auto; margin-right:auto;'>";
		const tabs = [{
				href: '#resTab',
				text: 'Resources'
			}, {
				href: '#troopsTab',
				text: 'Troops'
			}, {
				href: '#raidTab',
				text: 'Raid Reports'
			}, {
				href: '#raidoverTab',
				text: 'Active Raids'
			}, {
				href: '#gsupportTab',
				text: 'Support'
			}, {
				href: '#findmysenTab',
				text: 'Senator'
			},
			//{ href: '#gworldTab', text: 'World' }
		];
		let listItems = '';
		for (const tab of tabs) {
			listItems += `
					<li role='tab'>
					  <a href='${tab.href}' role='presentation'>${tab.text}</a>
					</li>
				  `;
		}
		gfunkyoverviewwin += `
				  <ul id='sumtabs' role='tablist' style='width: 95%;' class='justify-content-center'>
					${listItems}
				  </ul>
				`;
		//Resource Overview Tab
		gfunkyoverviewwin += "<div id='resTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='ResourceTableUpdate' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<button class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>";
		gfunkyoverviewwin += "<div class='button'>";
		gfunkyoverviewwin += "<a href='#' id ='resexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		gfunkyoverviewwin += "<span id='respan' style='margin-left:50px;'></span>";
		gfunkyoverviewwin += "<div class='beigemenutable scroll-pane' style='width:98%;height: AUTO !important;max-height: 75%;margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' >";
		gfunkyoverviewwin += "<table>";
		gfunkyoverviewwin += "<tr data='0'>";
		gfunkyoverviewwin += "<th colspan='3'></th>";
		gfunkyoverviewwin += "<th colspan='3'></th>";
		gfunkyoverviewwin += "<th rowspan='2'></th>";
		gfunkyoverviewwin += "<th colspan='2'>Wood</th>";
		gfunkyoverviewwin += "<th colspan='2'>Stone</th>";
		gfunkyoverviewwin += "<th colspan='2'>Iron</th>";
		gfunkyoverviewwin += "<th colspan='2'>Food</th>";
		gfunkyoverviewwin += "<th colspan='2'>Carts</th>";
		gfunkyoverviewwin += "<th colspan='2'>Ships</th>";
		gfunkyoverviewwin += "<th ></th>";
		gfunkyoverviewwin += "</tr>";
		gfunkyoverviewwin += "<tr>";
		gfunkyoverviewwin += "</tr>";
		gfunkyoverviewwin += "</table>";

		gfunkyoverviewwin += "<table id='gresourcestable'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		// Troops Overview Tab
		gfunkyoverviewwin += "<div id='troopsTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='troopsup' class='greenb' style='font-size:14px;border-radius:6px;margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<button class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>";
		gfunkyoverviewwin += "<div class='button'>";
		gfunkyoverviewwin += "<a href='#' id ='troopsexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		//gfunkyoverviewwin+="<button id='hidespfbut' class='greenb' style='font-size:14px;border-radius:6px;margin:4px;'>Hide Specific Troops Columns</button>";
		gfunkyoverviewwin += "<span id='troopspan' style='margin-left:50px;'></span>";
		gfunkyoverviewwin += "<div class='beigemenutable scroll-pane' style='width:99%;height: AUTO !important;max-height: 70%;margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;'>";
		gfunkyoverviewwin += "<table style='width:250%'>";
		gfunkyoverviewwin += "<tr data='0'>";
		gfunkyoverviewwin += "<th colspan='3' rowspan='2' >Name</th>";
		gfunkyoverviewwin += "<th colspan='3' rowspan='2'>Notes</th>";
		gfunkyoverviewwin += "<th rowspan='2'>Coords</th>";
		gfunkyoverviewwin += "<th colspan='2'>Guard</th>";
		gfunkyoverviewwin += "<th colspan='2'>Ballista</th>";
		gfunkyoverviewwin += "<th colspan='2'>Ranger</th>";
		gfunkyoverviewwin += "<th colspan='2'>Triari</th>";
		gfunkyoverviewwin += "<th colspan='2'>Priestess</th>";
		gfunkyoverviewwin += "<th colspan='2'>Vanquisher</th>";
		gfunkyoverviewwin += "<th colspan='2'>Sorcerer</th>";
		gfunkyoverviewwin += "<th colspan='2'>Scouts</th>";
		gfunkyoverviewwin += "<th colspan='2'>Arbalist</th>";
		gfunkyoverviewwin += "<th colspan='2'>Praetor</th>";
		gfunkyoverviewwin += "<th colspan='2'>Horsemen</th>";
		gfunkyoverviewwin += "<th colspan='2'>Druid</th>";
		gfunkyoverviewwin += "<th colspan='2'>Ram</th>";
		gfunkyoverviewwin += "<th colspan='2'>Scorption</th>";
		gfunkyoverviewwin += "<th colspan='2'>Galley</th>";
		gfunkyoverviewwin += "<th colspan='2'>Stinger</th>";
		gfunkyoverviewwin += "<th colspan='2'>Warship</th>";
		gfunkyoverviewwin += "<th colspan='2'>Senator</th>";
		gfunkyoverviewwin += "<th rowspan='2'>TS Home</th>";
		gfunkyoverviewwin += "<th rowspan='2'>TS Total</th>";
		gfunkyoverviewwin += "</tr>";
		gfunkyoverviewwin += "<tr data='0'>";
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class ='${tpicdiv[0]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[1]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[2]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[3]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[4]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[5]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[6]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[7]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[8]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[9]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[10]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[11]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[12]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[13]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[14]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[15]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[16]}'></div></th>`;
		gfunkyoverviewwin += `<th colspan='2' class='spf'><div class='${tpicdiv[17]}'></div></th>`;
		gfunkyoverviewwin += "</tr>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "<table id='gtroopstable' style='width:250%; height:auto;'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		// Raid Overview Tab
		gfunkyoverviewwin += "<div id='raidTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='raidup' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<span style='margin-left:10%;'>Number of reports to show: </span>";
		gfunkyoverviewwin += "<select id='raidsturnc' class='greensel' style='border-radius:6px; font-size: 14px !important;'>";
		gfunkyoverviewwin += "<option value='100'>100</option>";
		gfunkyoverviewwin += "<option value='500'>500</option>";
		gfunkyoverviewwin += "<option value='1000'>1000</option>";
		gfunkyoverviewwin += "<option value='10000'>10000</option>";
		gfunkyoverviewwin += "</select>";
		gfunkyoverviewwin += "<div class='beigemenutable scroll-pane' style='width:99%;height: AUTO !important;max-height: 80%;margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' >";
		gfunkyoverviewwin += "<table id='raidtable'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		//Raid Overview Summary Tab
		gfunkyoverviewwin += "<div id='raidoverTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='expandAllexpands' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Hide All</button>";
		gfunkyoverviewwin += "<button id='raidoverup' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<button class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>";
		gfunkyoverviewwin += "<div class='button'>";
		gfunkyoverviewwin += "<a href='#' id ='raidexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		gfunkyoverviewwin += "<span id='raidspan' style='margin-left:50px;'></span>";
		gfunkyoverviewwin += "<div id='raidmanager1body' class='beigemenutable scroll-pane' style='width:99%;height: AUTO !important;max-height: 78%;margin-left:auto; margin-right:auto; border-radius: 7px;border: 3px ridge #99805D;' >";
		gfunkyoverviewwin += "<table id='raidmanagertable'>";
		gfunkyoverviewwin += " </table>";
		gfunkyoverviewwin += " </div>";
		gfunkyoverviewwin += "<div id='raidmanager2body' class='beigemenutable scroll-pane' style='width:99%;height: AUTO !important;max-height: 78%;margin-left:auto; margin-right:auto; border-radius: 7px;border: 3px ridge #99805D;' >";
		gfunkyoverviewwin += "<table id='gactiveraidstable'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		// Support Overview Tab
		gfunkyoverviewwin += "<div id='gsupportTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='supportup' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<button class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>";
		gfunkyoverviewwin += "<div class='button'>";
		gfunkyoverviewwin += "<a href='#' id ='supportexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		gfunkyoverviewwin += "<div class='beigemenutable scroll-pane' style='width:99%; max-height: 85%; margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' >";
		gfunkyoverviewwin += "<table id='supporttable'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		//Senator Overview TAB
		gfunkyoverviewwin += "<div id='findmysenTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='findmysenup' class='greenb' style='font-size:14px;border-radius:6px;margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<button class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>";
		gfunkyoverviewwin += "<div class='button'>";
		gfunkyoverviewwin += "<a href='#' id ='findmysenexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		gfunkyoverviewwin += "<div id='findmysenbody' style='width:99%; margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' class='beigemenutable scroll-pane'>";
		gfunkyoverviewwin += "<table id='findmysenempiretable'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "<br><br>";
		gfunkyoverviewwin += "<div id='findmysencitybody' style='width:99%; max-height: 78%; margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' class='beigemenutable scroll-pane'>";
		gfunkyoverviewwin += "<table id='findmysencitytable'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		$("#reportsViewBox").after(gfunkyoverviewwin);
		$("#gfunkyoverviewwin").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		$("#gfunkyoverviewwin").resizable();
		$(".popUpBar").click(function() {
			//////console.log("popup");
			if ($(this).parent().attr("id") == "gfunkyoverviewwin") {
				setTimeout(function() {
					$("#gfunkyoverviewwin").css("z-index", 4001);
				}, 200);
			} else {
				setTimeout(function() {
					$("#gfunkyoverviewwin").css("z-index", 3000);
				}, 200);
			}
		});
		$("#gfunkyoverviewdiv").tabs();
		const selgresources = $("#organiser").clone(false).attr({
			id: "selgresources",
			style: "height: 30px;width:150px;font-size:14px;border-radius:6px;margin:7px",
			class: "greenb"
		});
		const selContgresources = $("#idleCsel").clone(false).attr({
			id: "selContgresources",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		const selContgtroops = $("#idleCsel").clone(false).attr({
			id: "selContgtroops",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		const selgtroops = $("#organiser").clone(false).attr({
			id: "selgtroops",
			style: "height: 30px;width:150px;font-size:14px;border-radius:6px;margin:7px",
			class: "greenb"
		});
		const selgactiveraids = $("#organiser").clone(false).attr({
			id: "selgactiveraids",
			style: "height: 30px;width:150px;font-size:14px;border-radius:6px;margin:7px",
			class: "greenb"
		});
		const selContgactiveraids = $("#idleCsel").clone(false).attr({
			id: "selContgactiveraids",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		const selinc = $("organiser").clone(false).attr({
			id: "selinc",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		const selContinc = $("#idleCsel").clone(false).attr({
			id: "selContinc",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		$("#respan").after(selgresources);
		$("#selgresources").after(selContgresources);
		$("#selgresources").val("all").change();
		$("#selContgresources").val(56).change();
		$("#raidspan").after(selgactiveraids);
		$("#selgactiveraids").after(selContgactiveraids);
		$("#selgactiveraids").val("all").change();
		$("#selContgactiveraids").val(56).change();
		$("#troopspan").after(selgtroops);
		$("#selgtroops").after(selContgtroops);
		$("#selgtroops").val("all").change();
		$("#selContgtroops").val(56).change();
		//$("#incspan").after(selinc);
		//$("#selinc").after(selcinc);
		$("#selinc").val(56).change();
		$("#selContinc").val("all").change();
		$("#ResourceTableUpdate").click(function() {
			$("#selgresources").val("all").change();
			$("#selContgresources").val("56").change();
			$.ajax({
				url: 'overview/citover.php',
				type: 'POST',
				async: true,
				success(data) {
					const sumres = JSON.parse(data);
					updateResources(sumres);
				}
			});
		});
		$("#troopsup").click(function() {
			$("#selgtroops").val("all").change();
			$("#selContgtroops").val("56").change();
			const notes = {
				id: [],
				notes: []
			};
			$.ajax({
				url: 'overview/citover.php',
				type: 'POST',
				async: true,
				success(data) {
					const sumres = JSON.parse(data);
					$.each(sumres, function() {
						notes.id.push(this.id);
						notes.notes.push(this.reference);
					});
					$.ajax({
						url: 'overview/trpover.php',
						type: 'POST',
						async: true,
						success(data) {
							const troopsres = JSON.parse(data);
							updatetroops(troopsres, notes);
						}
					});
				}
			});
		});
		$("#raidup").click(function() {
			$.ajax({
				url: 'overview/rreps.php',
				type: 'POST',
				async: true,
				success(data) {
					const raids = JSON.parse(data);
					updateraids(raids, $("#raidsturnc").val());
				}
			});
		});
		$("#raidoverup").click(function() {
			$("#selgactiveraids").val("all").change();
			$("#selContgactiveraids").val("56").change();
			const notes = {
				id: [],
				notes: []
			};
			$.ajax({
				url: 'overview/citover.php',
				type: 'POST',
				async: true,
				success(data) {
					const sumres = JSON.parse(data);
					$.each(sumres, function() {
						notes.id.push(this.id);
						notes.notes.push(this.reference);
					});
					$.ajax({
						url: 'overview/graid.php',
						type: 'POST',
						async: true,
						success(data) {
							const raids = JSON.parse(data);

							updateraidover(raids, notes);


						}
					});
				}
			});
		});
		$("#supportup").click(function() {
			$.ajax({
				url: 'overview/reinover.php',
				type: 'POST',
				async: true,
				success(data) {
					const support = JSON.parse(data);
					updatesupport(support);
				}
			});
		});
		$("#findmysenup").click(function() {
			const notes = {
				id: [],
				notes: [],
				city: []
			};
			$.ajax({
				url: 'overview/citover.php',
				type: 'POST',
				async: true,
				success(data) {
					const sumres = JSON.parse(data);
					$.each(sumres, function() {
						notes.id.push(this.id);
						notes.notes.push(this.reference);
						notes.city.push(this.city);
					});
					$.ajax({
						url: 'overview/senfind.php',
						type: 'POST',
						async: true,
						success(data) {
							const gfunsen = JSON.parse(data);
							$.each(gfunsen, function() {
								updatefindmysen(gfunsen, notes);
							});
						}
					});
				}
			});
		});

		function GfunkyTableFilters(type) {


			//////console.log("Filtering table with type:", type);
			setTimeout(function() {
				// Make sure clc is defined and has a value before calling GfunkyTableFilters()
				const clist = $(`#sel${type}`).val();
				const con = Number($(`#selCont${type}`).val());
				let clistbool;
				let contbool;
				let citylist = []; // Initialize citylist to an empty array

				if (clist != "all") {
					//////console.log("1");
					$.each(clc, function(key, value) {
						if (key == clist) {
							citylist = value;
						}
					});
				}


				$(`#${type}table tr`).each(function() {
					if (!($(this).attr("class") !== "nofilter" && $($(this).children()[0]).is("td"))) {
						return;
					}
					contbool = con === 56 ? true : con === Number($(this).attr("cont"));
					clistbool = clist === "all" ? true : citylist.indexOf(Number($(this).attr("data"))) > -1;
					//////console.log(clistbool,contbool);
					if (clistbool && contbool) {
						//////console.log("show");
						$(this).show();
						//$(this).next().next().show();
						//////console.log("Showing row with data:", $(this).attr("data"));
					} else {
						//////console.log("hide");
						//////console.log("Hiding row with data:", $(this).attr("data"));
						$(this).hide();
						//$(this).next().next().hide();
					}
				});
			}, 1000);
		}
		$("#selgresources").change(function() {
			GfunkyTableFilters("gresources");
		});
		$("#selContgresources").change(function() {
			GfunkyTableFilters("gresources");
		});
		$("#selgactiveraids").change(function() {
			GfunkyTableFilters("gactiveraids");
		});
		$("#selContgactiveraids").change(function() {
			GfunkyTableFilters("gactiveraids");
			//GfunkyTableFilters("gactiveraidsexpand");
		});
		$("#selgtroops").change(function() {
			GfunkyTableFilters("gtroops");
		});
		$("#selContgtroops").change(function() {
			GfunkyTableFilters("gtroops");
		});
		$("#selContincoming").change(function() {
			if ($("#selcincoming").val() == "all") {
				$("#incomingtable tr").each(function() {
					$(this).show();
				});
			} else {
				$("#incomingtable tr").each(function() {
					if ($($(this).children()[0]).is("td")) {
						if ($(this).attr("cont") == $("#selcincoming").val()) {
							$(this).show();
						} else {
							$(this).hide();
						}
					}
				});
			}
		});

		//update raid overview
		function updateraidover(raids, notes) {
			let raidover1body = "<table id='raidmanagertable'>";
			raidover1body += "<thead>";
			raidover1body += "<tr data=''>";
			raidover1body += "<th>Cities Raiding</th>";
			raidover1body += "<th>Raids</th>";
			raidover1body += "<th>TS Raiding</th>";
			raidover1body += "<th>Total Resources</th>";
			raidover1body += "<th>Total Gold</th>";
			raidover1body += "</tr>";
			raidover1body += "</thead>";
			raidover1body += "<tbody>";
			if (raids.b) {
				raidover1body += "<tr>";
				raidover1body += `<td id='cityraiding'>${raids.b[0]}</td>`;
				raidover1body += `<td id='gfraids'>${raids.b[5].toLocaleString()}</td>`;
				raidover1body += `<td id='tsraiding'>${raids.b[1].toLocaleString()}</td>`;
				raidover1body += `<td id='totalresraiding'>${raids.b[2].toLocaleString()}</td>`;
				raidover1body += `<td id='totalgoldraiding'>${raids.b[3].toLocaleString()}</td>`;
				raidover1body += "</tr>";
			}
			raidover1body += "</tbody>";
			raidover1body += "</table>";
			$("#raidmanagertable").html(raidover1body);
			$("#raidmanagertable td").css("text-align", "center");
			const raidover1sort = document.getElementById('raidmanagertable');
			sorttable.makeSortable(raidover1sort);
			// //////console.log(notes);
			let raidover2body = "<table id='gactiveraidstable'>";
			raidover2body += "<thead>";
			raidover2body += "<tr data='0'>";
			raidover2body += "<th>Details</th>";
			raidover2body += "<th>Name</th>";
			raidover2body += "<th colspan='2'>Notes</th>";
			raidover2body += "<th>Coords</th>";
			raidover2body += "<th>Continent</th>";
			raidover2body += "<th>Raids</th>";
			raidover2body += "<th>Attacking</th>";
			raidover2body += "<th>Returning</th>";
			raidover2body += "<th>Raiding TS</th>";
			raidover2body += "<th>Resources</th>";
			raidover2body += "<th>Gold</th>";
			raidover2body += "</tr>";
			raidover2body += "</thead>";
			raidover2body += "<tbody>";
			$.each(raids.a, function() {
				const cid = this[0];
				const not = notes.notes[notes.id.indexOf(cid)];
				const x = Number(cid % 65_536);
				const y = Number((cid - x) / 65_536);
				const con = Number(Math.floor(x / 100) + 10 * Math.floor(y / 100));
				raidover2body += `<tr data='${cid}' cont='${con}'>`;
				raidover2body += "<td>";
				raidover2body += `<button id='expandbuttn' data-id='${cid}' class='greenb expraid' style='height: 20px;padding-top: 3px;border-radius:6px;'>Hide</button>`;
				raidover2body += "</td>";
				raidover2body += `<td data='${cid}' class='coordblink raidclink'>${this[1]}</td>`;
				raidover2body += `<td colspan='2'>${not}</td>`;
				raidover2body += `<td class='coordblink shcitt' data='${cid}'>${x}:${y}</td>`;
				raidover2body += `<td  data='${con}'>${con}</td>`;
				raidover2body += `<td>${this[3]}</td>`;
				raidover2body += `<td>${this[6]}</td>`;
				raidover2body += `<td>${this[5]}</td>`;
				raidover2body += `<td>${this[4].toLocaleString()}</td>`;
				raidover2body += `<td>${(this[7]+this[8]+this[9]+this[10]).toLocaleString()}</td>`;
				raidover2body += `<td>${(this[11]).toLocaleString()}</td>`;
				raidover2body += "</tr>"

				// Expanded Table

				raidover2body += `<tr class='expsuptab'>`;
				raidover2body += "<td colspan='12'>";
				raidover2body += "<div class='beigemenutable' style='width:99%;border-radius: 5px;margin-left: auto;margin-right: auto;'>";
				raidover2body += "<table id=gactiveraidsexpandtable>";
				raidover2body += "<thead>";
				raidover2body += "<th>Recall</th>";
				//raidover2body+="<th>Recall All</th>";
				raidover2body += "<th colspan='2'>Cavern Type</th>";
				raidover2body += "<th>Coords</th>";
				raidover2body += "<th># of Troops</th>";
				//raidover2body+="<th>Returning</th>";
				raidover2body += "<th>Frequency</th>";
				raidover2body += "<th>Resources</th>";
				raidover2body += "<th>Gold</th>";
				raidover2body += "<th>Timing</th>";
				raidover2body += "</thead>";
				raidover2body += "<tbody>";
				for (const i in this[12]) {
					const dungid = this[12][i][8];
					const dungx = Number(dungid % 65_536);
					const dungy = Number((dungid - dungx) / 65_536);
					const raidfreq = this[12][i][4];
					const recallraidfunky = this[12][i][0];
					const recallallraidfunky = this[0];
					raidover2body += `<tr data='${cid}' cont='${con}'>`;
					raidover2body += `<td><button data="${recallraidfunky}" class='greenb recraid' style='height: 20px;padding-top: 3px;border-radius:6px;'>Once</button></td>`;
					//raidover2body += `<td><button data="${recallraidfunky}" dataset="${recallallraidfunky}'  class='greenb recallraid' style='height: 20px;padding-top: 3px;border-radius:6px;'>Recall All</button></td>`;
					raidover2body += `<td colspan='2' class='coordblink shcitt' data='${dungid}' >${this[12][i][2]}</td>`;
					raidover2body += `<td class='coordblink shcitt' data='${dungid}'>${dungx}:${dungy}</td>`;
					raidover2body += `<td>${this[12][i][1]}</td>`;
					//raidover2body  += "<td>" + this[12][i][3] + "</td>";
					raidover2body += raidfreq === 1 ? `<td data='${this[12][i][0]}'>Once</td>` : `<td data='${this[12][i][0]}'>Reoccuring</td>`;
					raidover2body += `<td>${(this[12][i][6].w+this[12][i][6].s+this[12][i][6].i+this[12][i][6].f).toLocaleString()}</td>`;
					raidover2body += `<td>${this[12][i][6].g.toLocaleString()}</td>`;
					raidover2body += `<td>${this[12][i][7]}</td>`;
					raidover2body += "</tr>";
				}
				raidover2body += "</tbody>";
				raidover2body += "</table>";
				raidover2body += "</div>";
				raidover2body += "</td>";
				raidover2body += "</tr>";
				raidover2body += "<tr class='usles'></tr>";
			});
			raidover2body += "</tbody>";
			raidover2body += "</table>";
			$("#gactiveraidstable").html(raidover2body);
			$("#gactiveraidstable td").css("text-align", "center");
			const raidoversort = document.getElementById('gactiveraidstable');

			$(".raidclink").click(function() {
				const aa = $(this).attr("data");
				$("#organiser").val("all").change();
				$("#cityDropdownMenu").val(aa).change();
			});
			$(".recraid").click(function() {
				// Get the ID and current inner HTML of the button
				const id = $(this).attr("data");
				const currentHtml = $(this).html();
				// Set the data object based on the current inner HTML of the button
				let dat;
				if (currentHtml === "Recall") {
					dat = {
						a: id,
						b: 1,
						c: 0
					};
				} else if (currentHtml === "Undo") {
					dat = {
						a: id,
						b: 2,
						c: 0
					};
				}
				// Make the AJAX request
				$.ajax({
					url: 'includes/UrO.php',
					type: 'POST',
					async: true,
					data: dat
				});
				// Update the inner HTML of the button
				if (currentHtml === "Recall") {
					$(this).html("Undo");
				} else if (currentHtml === "Undo") {
					$(this).html("Recall");
				}
			});
			$("#raidexp").click(function(event) {
				//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
				const outputFile = `RaidSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
				// CSV
				exportTableToCSV(document.getElementById('gactiveraidstable'), outputFile);
			});
			$(document).on('click', '.expraid', function() {
				this.innerHTML = this.innerHTML === "Hide" ? "Show" : "Hide";
				$(this).parent().parent().next().toggle();
			});
			$("#expandAllexpands").click(function() {
				if ($("#expandAllexpands").text() == "Expand All") {
					$("#expandAllexpands").text("Hide All");
				} else {
					$("#expandAllexpands").text("Expand All");
				}
				$("#gactiveraidstable #expandbuttn").each(function() {
					$(this).click();
				});
			});
			$(".expsuptab").toggle();





		}
		//update support summary
		function updatesupport(data) {
			let supporttab = "<table id='supporttable'>";
			supporttab += "<thead>";
			supporttab += "<th>Buttons</th>";
			supporttab += "<th>Player</th>";
			supporttab += "<th>City</th>";
			supporttab += "<th>Coords</th>";
			supporttab += "<th>Alliance</th>";
			supporttab += "<th>TS supporting</th>";
			supporttab += "<th>TS sending</th>";
			supporttab += "<th>TS returning</th>";
			supporttab += "</thead>";
			supporttab += "<tbody>";
			$.each(data, function() {
				const tid = this[9][0][1];
				supporttab += "<tr>";
				supporttab += "<td>";
				supporttab += "<button id='expandrecall' class='greenb expsup' style='height: 20px;padding-top: 3px;border-radius:6px;'>Expand</button>";
				supporttab += `<button data='${tid}' class='greenb recasup' style='height: 20px;padding-top: 3px;border-radius:6px;'>Recall all</button>`;
				supporttab += "</td>";
				supporttab += `<td class='playerblink'>${this[0]}</td>`;
				supporttab += `<td>${this[2]}</td>`;
				supporttab += `<td class='coordblink shcitt' data='${tid}'>${this[3]}:${this[4]}</td>`;
				supporttab += `<td class='allyblink'>${this[1]}</td>`;
				supporttab += `<td>${this[6]}</td>`;
				supporttab += `<td>${this[7]}</td>`;
				supporttab += `<td>${this[8]}</td>`;
				supporttab += "</tr>";
				supporttab += "<tr class='expsuptab'>";
				supporttab += "<td colspan='8'>";
				supporttab += "<div class='beigemenutable' style='width:98%;border-radius: 50px;margin-left: auto;margin-right: auto;'>";
				supporttab += "<table>";
				supporttab += "<thead>";
				supporttab += "<th>Recall</th>";
				supporttab += "<th>City</th>";
				supporttab += "<th>Coords</th>";
				supporttab += "<th colspan='2'>Troops</th>";
				supporttab += "<th>Status</th>";
				supporttab += "<th>Arrival</th>";
				supporttab += "</thead>";
				supporttab += "<tbody>";
				for (const i in this[9]) {
					const sid = this[9][i][15];
					let status;
					const id = this[9][i][10];
					switch (this[9][i][0]) {
						case 1:
							supporttab += "<tr style='color: purple;'>";
							supporttab += "<td></td>";
							status = "Sending";
							break;
						case 2:
							supporttab += "<tr style='color: green;'>";
							supporttab += "<td>";
							supporttab += `<button id='supporttabrecall' class='greenb recsup' data='${id}' style='height: 20px;padding-top: 3px;border-radius:6px;'>Recall</button>`;
							supporttab += "</td>";
							status = "Reinforcing";
							break;
						case 0:
							supporttab += "<tr style='color: #00858E;'>";
							supporttab += "<td></td>";
							status = "returning";
							break;
					}
					supporttab += `<td data='${sid}' class='coordblink suplink'>${this[9][i][11]}</td>`;
					supporttab += `<td class='coordblink shcitt' data='${sid}'>${this[9][i][12]}:${this[9][i][13]}</td>`;
					supporttab += "<td colspan='2'>";
					for (const j in this[9][i][8]) {
						supporttab += `${this[9][i][8][j]},`;
					}
					supporttab += "</td>";
					supporttab += `<td>${status}</td>`;
					supporttab += `<td>${this[9][i][9]}</td>`;
					supporttab += "</tr>";
				}
				supporttab += "</tbody>";
				supporttab += "</table>";
				supporttab += "</div>";
				supporttab += "</td>";
				supporttab += "</tr>";
				supporttab += "<tr class='usles'></tr>";
			});
			supporttab += "</tbody>";
			supporttab += "</table>";
			$("#supporttable").html(supporttab);
			$("#supporttable td").css("text-align", "center");
			$(".expsuptab").toggle();
			$(".usles").hide();
			const newTableObject = document.getElementById('supporttable');
			sorttable.makeSortable(newTableObject);
			$(".suplink").click(function() {
				const cid = $(this).attr("data");
				$("#organiser").val("all").change();
				$("#cityDropdownMenu").val(cid).change();
			});
			$.getScript("https://w29.crownofthegods.com/overview/datatables.min.js", function() {

       $(".recsup").click(function() {
			  const id = $(this).attr("data");
			  const dat = {
				"a": id
			  };
			  $.ajax({
				url: 'overview/reinreca.php',
				type: 'POST',
				async: true,
				data: dat,
				success: function(response) {
				  console.log(response);
				}
			  });
			  $(this).remove();
			}); // Add your code here that uses DataTables
		$(".recasup").click(function() {
				const id = $(this).attr("data");
				const dat = {
					"a": id
				};
				$.ajax({
					url: 'overview/reinrecall.php',
					type: 'POST',
					async: true,
					data: dat
				});
				$(this).remove();
			});


});


			$(".expsup").click(function() {
				$(this).parent().parent().next().toggle();
			});

			$("#supportexp").click(function(event) {
				//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
				const outputFile = `SupportSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
				// CSV
				exportTableToCSV(document.getElementById('supporttable'), outputFile);
			});
		}
		//update raids summary
		function updateraids(data, turnc) {
			let raidtab = "<thead>";
			raidtab += "<th>Report</th>";
			raidtab += "<th>Type</th>";
			raidtab += "<th>Cavern progress</th>";
			raidtab += "<th>losses</th>";
			raidtab += "<th>Carry</th>";
			raidtab += "<th>Date</th>";
			raidtab += "<th>Origin</th>";
			raidtab += "</thead>";
			raidtab += "<tbody>";
			let i = 0;

			$.each(data.b, function() {
				const xy = "${this[5]}";
				const [x, y] = xy.split(':').map(Number);
				const cid = y * 65_536 + x;
				if (i < turnc) {
					if (this[2] <= 2) {
						raidtab += "<tr style='color:green;'>";
					} else if (2 < this[2] && this[2] <= 5) {
						raidtab += "<tr style='color:#CF6A00;'>";
					} else if (this[2] > 5) {
						raidtab += "<tr style='color:red;'>";
					}
					raidtab += `<td class='gFrep brownb mtmdefc' data='${this[6]}'>`;
					raidtab += "<span class='unread'>Share report</span></td>";
					raidtab += `<td class="coordblink" data="${cid}">${this[0]}</td>`;
					raidtab += `<td>${this[8]}%</td>`;
					raidtab += `<td>${this[2]}%</td>`;
					raidtab += `<td>${this[3]}%</td>`;
					raidtab += `<td>${this[4]}</td>`;
					raidtab += `<td>${this[1]}</td>`;
					raidtab += "</tr>";
				}
				i++;
			});
			raidtab += "</tbody>";
			$("#raidtable").html(raidtab);
			$("#raidtable td").css("text-align", "center");
			const raidtablesort = document.getElementById('raidtable');
			sorttable.makeSortable(raidtablesort);
			let raid2tab = "<div id='raidsum' class='beigemenutable scroll-pane' style='width:99%; max-height: 85%; margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' >";
			raid2tab += "<table id='raid2'>";
			raid2tab += "<thead>";
			raid2tab += "<tr>";
			// raid2tab += "<th>Total Reports</th>";
			//raid2tab += "<th>Total Unread</th>";
			raid2tab += "<th>Forests</th>";
			raid2tab += "<th>Hills</th>";
			raid2tab += "<th>Mountains</th>";
			raid2tab += "<th>Sea</th>";
			raid2tab += "<th>Resources Looted</th>";
			raid2tab += "<th>Resources Lost</th>";
			raid2tab += "<th>Troops Lost</th>";
			raid2tab += "<th>Troops Sent</th>";
			raid2tab += "</tr>";
			raid2tab += "</thead>";
			raid2tab += "<tbody>";
			raid2tab += "<tr>";

			if (data.a) {
				for (let i = 2; i < data.a.length; i++) {
					if (Array.isArray(data.a[i])) {
						for (let j = 0; j < data.a[i].length; j++) {
							let number = data.a[i][j].toLocaleString();
							raid2tab += `<td>${number}</td>`;
						}
					} else {
						let number = data.a[i].toLocaleString();
						raid2tab += `<td>${number}</td>`;
					}

				}
			}
			raid2tab += "</tr></tbody></table>";
			$("#raidsum").remove();
			$("#raidTab").append(raid2tab);
			$("#raid2 td").css("text-align", "center");
			$("#TotalReports").remove();
			let totalreportspan = $("<span>").text("Total Reports: " + data.a[0]);
			totalreportspan.attr("id", "TotalReports");
			totalreportspan.attr("style", "margin-right:20%;");
			$("#raidTab").prepend(totalreportspan);

		}
		//update resource summary
		function updateResources(data) {
			let restabb = "<thead>";
			restabb += "<tr data='0'>";
			restabb += "<th colspan='3'>City Name</th>";
			restabb += "<th colspan='3'>Notes</th>";
			restabb += "<th>Coords</th>";
			restabb += "<th>Hold</th>";
			restabb += "<th>Capacity</th>";
			restabb += "<th>Hold</th>";
			restabb += "<th>Capacity</th>";
			restabb += "<th>Hold</th>";
			restabb += "<th>Capacity</th>";
			restabb += "<th>Hold</th>";
			restabb += "<th>Capacity</th>";
			restabb += "<th>Available</th>";
			restabb += "<th>Total</th>";
			restabb += "<th>Available</th>";
			restabb += "<th>Total</th>";
			restabb += "<th>Score</th>";
			restabb += "</tr>";
			restabb += "</thead>";
			restabb += "<tbody>";
			let woodtot = 0;
			let irontot = 0;
			let stonetot = 0;
			let foodtot = 0;
			let cartstot = 0;
			let shipstot = 0;
			$.each(data, function() {
				const cid = this.id;
				const x = Number(cid % 65_536);
				const y = Number((cid - x) / 65_536);
				const con = Number(Math.floor(x / 100) + 10 * Math.floor(y / 100));
				restabb += `<tr data='${cid}' cont='${con}'>`;
				restabb += `<td id='cn${cid}' class='coordblink' colspan='3'>${this.city}</td>`;
				restabb += `<td colspan='3'>${this.reference}</td>`;
				restabb += `<td class='coordblink shcitt' data='${cid}'>${x}:${y}</td>`;
				let resources;
				let Storage;
				cartstot += this.carts_total;
				shipstot += this.ships_total;
				for (let i = 0; i < 4; i++) {
					switch (i) {
						case 0:
							resources = this.wood;
							woodtot += resources;
							Storage = this.wood_storage;
							break;
						case 1:
							resources = this.stone;
							stonetot += resources;
							Storage = this.stone_storage;
							break;
						case 2:
							resources = this.iron;
							irontot += resources;
							Storage = this.iron_storage;
							break;
						case 3:
							resources = this.food;
							foodtot += resources;
							Storage = this.food_storage;
							break;
					}
					if (resources / Storage < 0.9) {
						restabb += `<td style='color:green;'>${resources.toLocaleString()}</td>`;
						restabb += `<td>${Storage.toLocaleString()}</td>`;
					} else if ((resources / Storage < 1) && (resources / Storage >= 0.9)) {
						restabb += `<td style='color:#CF6A00;'>${resources.toLocaleString()}</td>`;
						restabb += `<td>${Storage.toLocaleString()}</td>`;
					} else if (resources == Storage) {
						restabb += `<td style='color:red;'>${resources.toLocaleString()}</td>`;
						restabb += `<td>${Storage.toLocaleString()}</td>`;
					}
				}
				restabb += `<td>${this.carts_home.toLocaleString()}</td>`;
				restabb += `<td>${this.carts_total.toLocaleString()}</td>`;
				restabb += `<td>${this.ships_home}</td>`;
				restabb += `<td>${this.ships_total}</td>`;
				restabb += `<td>${this.score.toLocaleString()}</td>`;
				restabb += "</tr>";
			});
			restabb += "</tbody>";
			$("#gresourcestable").html(restabb);
			$("#gresourcestable td").css("text-align", "center");
			//$("#ResourceTableGFunky").fixedHeaderTable({ cloneHeadToFoot: true });
			const ResourceTableGFunkysort = document.getElementById('gresourcestable');
			sorttable.makeSortable(ResourceTableGFunkysort);
			let tottab = "<div id='rsum' class='beigemenutable scroll-pane' style='width: 99%;height: AUTO !important;max-height: 85%;margin-left: 4px; border-radius: 7px;border: 3px ridge #99805D;'>";
			tottab += "<table>";
			tottab += "<tr>";
			tottab += "<th colspan='6' style='font-size:20px; height:20px;'>Empire Total Resources</th>";
			tottab += "</tr>";
			tottab += "<tr>";
			tottab += "<th>Wood</th>";
			tottab += "<th>Stone</th>";
			tottab += "<th>Iron</th>";
			tottab += "<th>Food</th>";
			tottab += "<th>Carts</th>";
			tottab += "<th>Ships</th>";
			tottab += "</tr>";
			tottab += "<tr>";
			tottab += `<td>${woodtot.toLocaleString()}</td>`;
			tottab += `<td>${stonetot.toLocaleString()}</td>`;
			tottab += `<td>${irontot.toLocaleString()}</td>`;
			tottab += `<td>${foodtot.toLocaleString()}</td>`;
			tottab += `<td>${cartstot.toLocaleString()}</td>`;
			tottab += `<td>${shipstot.toLocaleString()}</td>`;
			tottab += "</tr>";
			tottab += "</table>";
			tottab += "</div>";
			$("#rsum").remove();
			$("#resTab").append(tottab);
			$("#rsum td").css("text-align", "center");
			$.each(data, function() {
				const aa = this.id;
				$(`#cn${aa}`).click(function() {
					$("#organiser").val("all").change();
					$("#cityDropdownMenu").val(aa).change();
				});
			});
			$("#resexp").click(function(event) {
				//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
				const outputFile = `ResSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
				// CSV
				exportTableToCSV(document.getElementById('ResourceTableGFunky'), outputFile);
			});
		}
		//update troops summary
		function updatetroops(data, notes) {

			let troopstab = "<thead>";
			troopstab += "<tr class='sortable'>";
			troopstab += "<th colspan='3'>Name</th>";
			troopstab += "<th colspan='3'>Notes</th>";
			troopstab += "<th>Coords</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>HOME</th>";
			troopstab += "<th>TOTAL</th>";
			troopstab += "<th>TS Home</th>";
			troopstab += "<th>TS Total</th>";
			troopstab += "</tr>";
			troopstab += "</thead>";
			troopstab += "<tbody>";
			let TotalArbalist = 0;
			let TotalBallista = 0;
			let TotalDruid = 0;
			let TotalGalley = 0;
			let TotalGuards = 0;
			let TotalHorsemen = 0;
			let TotalPraetor = 0;
			let TotalPriestess = 0;
			let TotalRam = 0;
			let TotalRanger = 0;
			let TotalScorpion = 0;
			let TotalScout = 0;
			let TotalSenator = 0;
			let TotalSocerer = 0;
			let TotalStinger = 0;
			let TotalTriari = 0;
			let TotalVanquisher = 0;
			let TotalWarship = 0;
			let TroopScoreHome;
			let TroopScoreTotal;
			$.each(data, function() {
				TroopScoreHome = 0;
				TroopScoreTotal = 0;
				const cid = this.id;
				const not = notes.notes[notes.id.indexOf(cid)];
				const x = Number(cid % 65_536);
				const y = Number((cid - x) / 65_536);
				const con = Number(Math.floor(x / 100) + 10 * Math.floor(y / 100));
				let strhome = "<table><tr class='nofilter'>";
				let strtot = "<table><tr class='nofilter'>";
				let TroopHome;
				let TotalTroop;
				let TroopType;
				troopstab += `<tr data='${cid}' cont='${con}'>`;
				troopstab += `<td colspan='3' id='cnt${cid}' class='coordblink'>${this.c}</td>`;
				troopstab += `<td colspan='3'>${not}</td>`;
				troopstab += `<td class='coordblink shcitt' data='${cid}'>${x}:${y}</td>`;

				function makets() {
					if (TroopHome > 0) {
						strhome += `<td style='width:50px;'>${TroopHome.toLocaleString()}</td>`;
						strhome += "<td style='width:22px;'>";
						strhome += `<div class='${tpicdiv20[TroopType]}'></div>`;
						strhome += "</td>";
					}
					if (TotalTroop > 0) {
						strtot += `<td>${TroopHome.toLocaleString()}/${TotalTroop.toLocaleString()}</td>`;
						strtot += "<td style='width:60px;'>";
						strtot += `<div class='${tpicdiv20[TroopType]}'></div>`;
						strtot += "</td>";
					}
					troopstab += `<td class='spf'>${TroopHome.toLocaleString()}</td>`;
					troopstab += `<td class='spf'>${TotalTroop.toLocaleString()}</td>`;
				}
				TroopHome = this.Guard_home;
				TotalTroop = this.Guard_total;
				TroopType = 0;
				TotalGuards += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				TroopHome = this.Ballista_home;
				TotalTroop = this.Ballista_total;
				TroopType = 1;
				TotalBallista += TotalTroop;
				TroopScoreHome += 10 * TroopHome;
				TroopScoreTotal += 10 * TotalTroop;
				makets();
				TroopHome = this.Ranger_home;
				TotalTroop = this.Ranger_total;
				TroopType = 2;
				TotalRanger += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				TroopHome = this.Triari_home;
				TotalTroop = this.Triari_total;
				TroopType = 3;
				TotalTriari += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				TroopHome = this.Priestess_home;
				TotalTroop = this.Priestess_total;
				TroopType = 4;
				TotalPriestess += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				TroopHome = this.Vanquisher_home;
				TotalTroop = this.Vanquisher_total;
				TroopType = 5;
				TotalVanquisher += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				TroopHome = this.Sorcerer_home;
				TotalTroop = this.Sorcerer_total;
				TroopType = 6;
				TotalSocerer += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				TroopHome = this.Scout_home;
				TotalTroop = this.Scout_total;
				TotalScout += TotalTroop;
				TroopType = 7;
				TroopScoreHome += 2 * TroopHome;
				TroopScoreTotal += 2 * TotalTroop;
				makets();
				TroopHome = this.Arbalist_home;
				TotalTroop = this.Arbalist_total;
				TroopType = 8;
				TotalArbalist += TotalTroop;
				TroopScoreHome += 2 * TroopHome;
				TroopScoreTotal += 2 * TotalTroop;
				makets();
				TroopHome = this.Praetor_home;
				TotalTroop = this.Praetor_total;
				TroopType = 9;
				TotalPraetor += TotalTroop;
				TroopScoreHome += 2 * TroopHome;
				TroopScoreTotal += 2 * TotalTroop;
				makets();
				TroopHome = this.Horseman_home;
				TotalTroop = this.Horseman_total;
				TroopType = 10;
				TotalHorsemen += TotalTroop;
				TroopScoreHome += 2 * TroopHome;
				TroopScoreTotal += 2 * TotalTroop;
				makets();
				TroopHome = this.Druid_home;
				TotalTroop = this.Druid_total;
				TroopType = 11;
				TotalDruid += TotalTroop;
				TroopScoreHome += 2 * TroopHome;
				TroopScoreTotal += 2 * TotalTroop;
				makets();
				TroopHome = this.Ram_home;
				TotalTroop = this.Ram_total;
				TroopType = 12;
				TotalRam += TotalTroop;
				TroopScoreHome += 10 * TroopHome;
				TroopScoreTotal += 10 * TotalTroop;
				makets();
				TroopHome = this.Scorpion_home;
				TotalTroop = this.Scorpion_total;
				TroopType = 13;
				TotalScorpion += TotalTroop;
				TroopScoreHome += 10 * TroopHome;
				TroopScoreTotal += 10 * TotalTroop;
				makets();
				TroopHome = this.Galley_home;
				TotalTroop = this.Galley_total;
				TroopType = 14;
				TotalGalley += TotalTroop;
				TroopScoreHome += 100 * TroopHome;
				TroopScoreTotal += 100 * TotalTroop;
				makets();
				TroopHome = this.Stinger_home;
				TotalTroop = this.Stinger_total;
				TroopType = 15;
				TotalStinger += TotalTroop;
				TroopScoreHome += 100 * TroopHome;
				TroopScoreTotal += 100 * TotalTroop;
				makets();
				TroopHome = this.Warship_home;
				TotalTroop = this.Warship_total;
				TroopType = 16;
				TotalWarship += TotalTroop;
				TroopScoreHome += 400 * TroopHome;
				TroopScoreTotal += 400 * TotalTroop;
				makets();
				TroopHome = this.Senator_home;
				TotalTroop = this.Senator_total;
				TroopType = 17;
				TotalSenator += TotalTroop;
				TroopScoreHome += TroopHome;
				TroopScoreTotal += TotalTroop;
				makets();
				strhome += "</tr></table>";
				strtot += "</tr></table>";
				troopstab += `<td class='nspf'>${strtot}</td>`;
				troopstab += `<td>${TroopScoreHome.toLocaleString()}</td>`;
				troopstab += `<td>${TroopScoreTotal.toLocaleString()}</td>`;
				troopstab += "</tr>";
			});
			troopstab += "</tbody>";

			$("#gtroopstable").html(troopstab);
			if (hidespf) {
				$(".spf").hide();
				$(".nspf").show();
				$("#gtroopstable").css("width", "100%");
			} else {
				$(".nspf").hide();
				$(".spf").show();
				$("#tgroopstable").css("width", "250%");
			}
			$("#gtroopstable td").css("text-align", "center");
			$("#gtroopstable td").css("padding-left", "0%");
			const trooptablegfunkysort = document.getElementById('gtroopstable');
			sorttable.makeSortable(trooptablegfunkysort);
			let tottab = "<div id='tsum' class='beigemenutable scroll-pane' style='width: 99%;height: AUTO !important;max-height: 85%;margin-left: auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;'>";
			tottab += "<table style='font-size: 10px;width: 100%; white-space:break-spaces;'>";
			tottab += "<tr>";
			tottab += "<th colspan='9' style='font-size:20px; height:20px;'>Empire Total Troops</th>";
			tottab += "</tr>";
			tottab += "<tr>";
			tottab += "<th>Guards</th>";
			tottab += "<th>Ballista </th>";
			tottab += "<th>Rangers </th>";
			tottab += "<th>Triari </th>";
			tottab += "<th>Priestess </th>";
			tottab += "<th>Vanquishers</th>";
			tottab += "<th>Sorcerers</th>";
			tottab += "<th>Scouts</th>";
			tottab += "<th>Arbalists</th>";
			tottab += "</tr>";
			tottab += "<tr>";
			tottab += `<td>${TotalGuards.toLocaleString()}</td>`;
			tottab += `<td>${TotalBallista.toLocaleString()}</td>`;
			tottab += `<td>${TotalRanger.toLocaleString()}</td>`;
			tottab += `<td>${TotalTriari.toLocaleString()}</td>`;
			tottab += `<td>${TotalPriestess.toLocaleString()}</td>`;
			tottab += `<td>${TotalVanquisher.toLocaleString()}</td>`;
			tottab += `<td>${TotalSocerer .toLocaleString()}</td>`;
			tottab += `<td>${TotalScout.toLocaleString()}</td>`;
			tottab += `<td>${TotalArbalist.toLocaleString()}</td>`;
			tottab += "</tr>";
			tottab += "<tr>";
			tottab += "<th>Praetors</th>";
			tottab += "<th>Horsemen</th>";
			tottab += "<th>Druids </th>";
			tottab += "<th>Rams </th>";
			tottab += "<th>Scorpions </th>";
			tottab += "<th>Galleys </th>";
			tottab += "<th>Stingers </th>";
			tottab += "<th>Warships </th>";
			tottab += "<th>Senators </th>";
			tottab += "</tr>";
			tottab += "<tr>";
			tottab += `<td>${TotalPraetor.toLocaleString()}</td>`;
			tottab += `<td>${TotalHorsemen.toLocaleString()}</td>`;
			tottab += `<td>${TotalDruid.toLocaleString()}</td>`;
			tottab += `<td>${TotalRam.toLocaleString()}</td>`;
			tottab += `<td>${TotalScorpion.toLocaleString()}</td>`;
			tottab += `<td>${TotalGalley.toLocaleString()}</td>`;
			tottab += `<td>${TotalStinger.toLocaleString()}</td>`;
			tottab += `<td>${TotalWarship.toLocaleString()}</td>`;
			tottab += `<td>${TotalSenator.toLocaleString()}</td>`;
			tottab += "</tr>";
			tottab += "</table>";
			tottab += "</div>";
			$("#tsum").remove();
			$("#troopsTab").append(tottab);
			$("#tsum td").css("text-align", "center");
			$.each(data, function() {
				const aa = this.id;
				$(`#cnt${aa}`).click(function() {
					$("#organiser").val("all").change();
					$("#cityDropdownMenu").val(aa).change();
				});
			});
			$("#troopsexp").click(function(event) {
				//var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
				const outputFile = `TroopsSum${today.getDate()}${Number(today.getMonth()+1)}${today.getFullYear()}.csv`;
				// CSV
				exportTableToCSV(document.getElementById('gtroopstable'), outputFile);
			});
		}

		function updatefindmysen(data, notes) {
			let toReturn;
			let findmysenbody = "<table id='findmysenempiretable'>";
			findmysenbody += "<thead>";
			findmysenbody += "<tr>";
			findmysenbody += "<th>Cities Possible</th>";
			findmysenbody += "<th>Current Cities</th>";
			findmysenbody += "<th >Total Sens</th>";
			findmysenbody += "<th># Settling</th>";
			findmysenbody += "<th># Sieging</th>";
			findmysenbody += "<th># idle</th>";
			findmysenbody += "<th># Recruiting</th>";
			findmysenbody += "<th> You Can Recruit</th>";
			findmysenbody += "</tr>";
			findmysenbody += "</thead>";
			findmysenbody += "<tbody>";
			$.each(data, function() {
				if (!data.a) {
					return;
				}
				findmysenbody += "<tr>";
				findmysenbody += `<td>${this[0]}</td>`;
				findmysenbody += `<td>${this[1]}</td>`;
				findmysenbody += `<td>${this[5]}</td>`;
				findmysenbody += `<td>${this[2]}</td>`;
				findmysenbody += `<td>${this[7]}</td>`;
				findmysenbody += `<td>${this[3]}</td>`;
				findmysenbody += `<td>${this[4]}</td>`;
				findmysenbody += `<td>${this[6]}</td>`;
				findmysenbody += "</tr>";
				toReturn = this[7];
				return false;
			});
			findmysenbody += "</tbody>";
			findmysenbody += "</table>";
			$("#findmysenempiretable").html(findmysenbody);
			$("#findmysenempiretable td").css("text-align", "center");
			const gfindsenempiresort = document.getElementById('findmysenempiretable');
			sorttable.makeSortable(gfindsenempiresort);
			let findmysencitybody = "<table id='findmysencitytable'>";
			findmysencitybody += "<thead>";
			findmysencitybody += "<tr>";
			findmysencitybody += "<th>City Name</th>";
			findmysencitybody += "<th colspan='2'>Notes</th>";
			findmysencitybody += "<th>Coords</th>";
			findmysencitybody += "<th>Cont</th>";
			findmysencitybody += "<th >Total Sens</th>";
			findmysencitybody += "<th># Settling</th>";
			findmysencitybody += "<th># Sieging</th>";
			findmysencitybody += "<th># idle</th>";
			findmysencitybody += "<th># Recruiting</th>";
			findmysencitybody += "</tr>";
			findmysencitybody += "</thead>";
			findmysencitybody += "<tbody>";
			$.each(data.b, function() {
				const gcid = this[0];
				const gnot = notes.notes[notes.id.indexOf(gcid)];
				const gcity = notes.city[notes.id.indexOf(gcid)];
				const x = Number(gcid % 65_536);
				const y = Number((gcid - x) / 65_536);
				const gcon = Number(Math.floor(x / 100) + 10 * Math.floor(y / 100));
				findmysencitybody += `<tr data='${gcid}' cont='${gcon}'>`;
				findmysencitybody += `<td data='${this[1]}'>${gcity}</td>`;
				findmysencitybody += `<td colspan='2'>${gnot}</td>`;
				findmysencitybody += `<td class='coordblink shcitt' data='${gcid}'>${x}:${y}</td>`;
				findmysencitybody += `<td  data='${gcon}'>${gcon}</td>`;
				findmysencitybody += `<td>${this[3]}</td>`;
				findmysencitybody += `<td>${this[6]}</td>`;
				findmysencitybody += `<td>${this[10]}</td>`;
				findmysencitybody += `<td>${this[4]}</td>`;
				findmysencitybody += `<td>${this[5]}</td>`;
				findmysencitybody += `</tr>`;
			});
			findmysencitybody += "</tbody>";
			findmysencitybody += "</table>";
			$("#findmysencitytable").html(findmysencitybody);
			$("#findmysencitytable td").css("text-align", "center");
			const gfindsencitysort = document.getElementById('findmysencitytable');
			sorttable.makeSortable(gfindsencitysort);
		}
	}
	/*
		// Create table
	let worldInfo = "<table id='worldInfo'><thead><tr><th>Continent</th><th>Castles</th><th>Cities</th><th>Caverns</th><th>Lawless</th><th>Shrines</th><th>Portals</th><th>Empty Build Spots</th></tr></thead><tbody>";

	// Loop through data
	for (let continent in data) {
	    if (data[continent]) {
	        worldInfo += "<tr>";
	        worldInfo += `<td>${continent}</td>`;
	        for (let i = 0; i < data[continent].length; i++) {
	            worldInfo += `<td>${data[continent][i]}</td>`;
	        }
	        worldInfo += "</tr>";
	    }
	}

	worldInfo += "</tbody></table>";
	$("#worldTab").append(worldInfo);
	*/
	function exportTableToCSV(table, filename) {
		const rows = table.querySelectorAll("tr:has(td)");
		const headers = table.querySelectorAll("tr:has(th)");
		const colDelimiter = '","';
		const rowDelimiter = '"\r\n"';
		const formattedRows = Array.from(rows).map(row => Array.from(row.children).map(cell => cell.textContent.replace(/"/g, '""')).join(colDelimiter)).join(rowDelimiter);
		const formattedHeaders = Array.from(headers).map(row => Array.from(row.children).map(cell => cell.textContent.replace(/"/g, '""')).join(colDelimiter)).join(rowDelimiter);
		const csv = `"${formattedHeaders}${rowDelimiter}${formattedRows}"`;
		const csvData = `data:application/csv;charset=utf-8,${encodeURIComponent(csv)}`;
		const link = document.createElement("a");
		link.setAttribute("download", filename);
		link.setAttribute("href", csvData);
		link.click();
	}
	/*
	    $('#composeButton').click(function () {
	        $('#mailViewBox').css({
	            'display': 'block'
	        });
	        $('#mailComposeBox').css({
	            'display': 'block'
	        });
	    });
		*/
	//Dhruv's Stuff
	//Dhruv's Combat Calculator
	(function DhruvComC() {
		//    'use strict';
		const TroopNameIndex = ["Guards", "Ballistas", "Rangers", "Triari", "Priestess", "Vanquishers", "Sorcerers", "Scouts", "Arbalists", "Praetors", "Horsemans", "Druids", "Rams", "Scorpions", "Galleys", "Stingers", "Warships", "Senator"];
		const TroopAttackIndex = [10, 50, 30, 10, 25, 50, 70, 10, 40, 60, 90, 120, 50, 150, 3000, 1200, 12_000]; //troops attack value
		const ttinfdef = [10, 200, 40, 30, 20, 15, 15, 10, 40, 50, 40, 30, 20, 100, 4000, 4500, 5000]; //infantry defence
		const ttcavdef = [10, 100, 10, 50, 30, 12, 10, 10, 90, 20, 30, 20, 20, 100, 4000, 4500, 5000]; //cavalry defence
		const ttmystdef = [10, 200, 25, 20, 50, 10, 30, 10, 30, 90, 20, 50, 20, 200, 2000, 2000, 2500]; //mystic defence
		const ttartdef = [10, 400, 15, 15, 15, 15, 15, 10, 40, 40, 40, 40, 50, 50, 2000, 6000, 6000]; //artilery defence
		const ttinfdefz = [];
		const ttcavdefz = [];
		const ttmystdefz = [];
		const ttartdefz = [];
		const isCavalry = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]; //which troop number is cav
		const isInfantry = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //which troop number is inf
		const isMagic = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; //which troop number is magic
		const isArtillery = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]; //which troop number is artillery
		let sum = true;
		let attackerts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let defenderts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let zdefenderts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		const survivingdefTS = [];
		let dresearch = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		let aresearch = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		let tswalld = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		const lossdefTS = [];
		let inputnightp = 1;
		let inputmorale = 1;
		let inputportal = 1;
		let infatk = 0;
		let cavatk = 0;
		let mystatk = 0;
		let artatk = 0;
		let sumofattk;
		let sumofdef;
		let percinfattk;
		let percavattk;
		let permystattk;
		let perartattk;
		let ratioinf;
		let ratiocav;
		let ratiomyst;
		let ratioart;
		let ratiosum;
		let attinflosses;
		let attcavlosses;
		let attmystlosses;
		let attartlosses;
		let definflosses;
		let defcavlosses;
		let defmystlosses;
		let defartlosses;
		let defloss;
		const survoffTS = [];
		let defintensity = 5;
		let atkintenstity = 5;
		const lossaTroopScoreIndex = [];
		const survivingaTroopScoreIndex = [];
		let norrang;
		let towerrang;
		let nortri;
		let towertri;
		let norpri;
		let towerpri;
		let norbali;
		let towerbali;
		const dkumar = "<button class='regButton greenb' id='CoCa' style='margin-left: 10px;margin-top: 135px;width: 150px;height: 30px !important;font-size: 12px !important;position: absolute;left: 65%;'>Combat Calculator</button>";
		$("#warCounc").append(dkumar);
		$("#CoCa").click(function() {
			if (sum) {
				combcal();
			} else {
				$('#kumardiv').show();
			}
		});

		function repeat() {
			let HasA = 0;
			for (var i = 0; i < 17; i++) {
				HasA += survivingaTroopScoreIndex[i];
			}
			let HasD = 0;
			for (var i = 0; i < 17; i++) {
				HasD += survivingdefTS[i];
			}
			if (HasA == 0) {
				alert("Attack Force has already been obliterated!");

			} else if (HasD == 0) {
				alert("Defense Force has already been obliterated!");

			} else {
				document.getElementById("vanqA").value = Math.floor(survivingaTroopScoreIndex[5]);
				document.getElementById("sorcA").value = Math.floor(survivingaTroopScoreIndex[6]);
				document.getElementById("rangA").value = Math.floor(survivingaTroopScoreIndex[2]);
				document.getElementById("triA").value = Math.floor(survivingaTroopScoreIndex[3]);
				document.getElementById("priA").value = Math.floor(survivingaTroopScoreIndex[4]);
				document.getElementById("scoutA").value = Math.floor(survivingaTroopScoreIndex[7]);
				document.getElementById("horseA").value = Math.floor(survivingaTroopScoreIndex[10]);
				document.getElementById("druidA").value = Math.floor(survivingaTroopScoreIndex[11]);
				document.getElementById("arbA").value = Math.floor(survivingaTroopScoreIndex[8]);
				document.getElementById("praA").value = Math.floor(survivingaTroopScoreIndex[9]);
				document.getElementById("ramA").value = Math.floor(survivingaTroopScoreIndex[12]);
				document.getElementById("scorpA").value = Math.floor(survivingaTroopScoreIndex[13]);
				document.getElementById("balisA").value = Math.floor(survivingaTroopScoreIndex[1]);
				document.getElementById("galleyA").value = Math.floor(survivingaTroopScoreIndex[14]);
				document.getElementById("stingA").value = Math.floor(survivingaTroopScoreIndex[15]);
				document.getElementById("wgA").value = Math.floor(survivingaTroopScoreIndex[16]);
				//Defenders
				document.getElementById("vanqD").value = Math.floor(survivingdefTS[5]);
				document.getElementById("cgD").value = Math.floor(survivingdefTS[0]);
				document.getElementById("sorcD").value = Math.floor(survivingdefTS[6]);
				document.getElementById("rangD").value = Math.floor(survivingdefTS[2]);
				document.getElementById("triD").value = Math.floor(survivingdefTS[3]);
				document.getElementById("priD").value = Math.floor(survivingdefTS[4]);
				document.getElementById("scoutD").value = Math.floor(survivingdefTS[7]);
				document.getElementById("horseD").value = Math.floor(survivingdefTS[10]);
				document.getElementById("druidD").value = Math.floor(survivingdefTS[11]);
				document.getElementById("arbD").value = Math.floor(survivingdefTS[8]);
				document.getElementById("praD").value = Math.floor(survivingdefTS[9]);
				document.getElementById("ramD").value = Math.floor(survivingdefTS[12]);
				document.getElementById("scorpD").value = Math.floor(survivingdefTS[13]);
				document.getElementById("balisD").value = Math.floor(survivingdefTS[1]);
				document.getElementById("galleyD").value = Math.floor(survivingdefTS[14]);
				document.getElementById("stingD").value = Math.floor(survivingdefTS[15]);
				document.getElementById("wgD").value = Math.floor(survivingdefTS[16]);
			}
			defenderTSF();
		}

		function reset() {
			document.getElementById("vanqA").value = 0;
			document.getElementById("sorcA").value = 0;
			document.getElementById("rangA").value = 0;
			document.getElementById("triA").value = 0;
			document.getElementById("priA").value = 0;
			document.getElementById("scoutA").value = 0;
			document.getElementById("horseA").value = 0;
			document.getElementById("druidA").value = 0;
			document.getElementById("arbA").value = 0;
			document.getElementById("praA").value = 0;
			document.getElementById("ramA").value = 0;
			document.getElementById("scorpA").value = 0;
			document.getElementById("balisA").value = 0;
			document.getElementById("galleyA").value = 0;
			document.getElementById("stingA").value = 0;
			document.getElementById("wgA").value = 0;
			//Defenders
			document.getElementById("vanqD").value = 0;
			document.getElementById("cgD").value = 0;
			document.getElementById("sorcD").value = 0;
			document.getElementById("rangD").value = 0;
			document.getElementById("triD").value = 0;
			document.getElementById("priD").value = 0;
			document.getElementById("scoutD").value = 0;
			document.getElementById("horseD").value = 0;
			document.getElementById("druidD").value = 0;
			document.getElementById("arbD").value = 0;
			document.getElementById("praD").value = 0;
			document.getElementById("ramD").value = 0;
			document.getElementById("scorpD").value = 0;
			document.getElementById("balisD").value = 0;
			document.getElementById("galleyD").value = 0;
			document.getElementById("stingD").value = 0;
			document.getElementById("wgD").value = 0;
			//research entries
			document.getElementById("vanqAR").value = 0;
			document.getElementById("sorcAR").value = 0;
			document.getElementById("rangAR").value = 0;
			document.getElementById("triAR").value = 0;
			document.getElementById("priAR").value = 0;
			document.getElementById("scoutAR").value = 0;
			document.getElementById("horseAR").value = 0;
			document.getElementById("druidAR").value = 0;
			document.getElementById("arbAR").value = 0;
			document.getElementById("praAR").value = 0;
			document.getElementById("ramAR").value = 0;
			document.getElementById("scorpAR").value = 0;
			document.getElementById("balisAR").value = 0;
			document.getElementById("galleyAR").value = 0;
			document.getElementById("stingAR").value = 0;
			document.getElementById("wgAR").value = 0;
			//Defenders
			document.getElementById("cgDR").value = 0;
			document.getElementById("vanqDR").value = 0;
			document.getElementById("sorcDR").value = 0;
			document.getElementById("rangDR").value = 0;
			document.getElementById("triDR").value = 0;
			document.getElementById("priDR").value = 0;
			document.getElementById("scoutDR").value = 0;
			document.getElementById("horseDR").value = 0;
			document.getElementById("druidDR").value = 0;
			document.getElementById("arbDR").value = 0;
			document.getElementById("praDR").value = 0;
			document.getElementById("ramDR").value = 0;
			document.getElementById("scorpDR").value = 0;
			document.getElementById("balisDR").value = 0;
			document.getElementById("galleyDR").value = 0;
			document.getElementById("stingDR").value = 0;
			document.getElementById("wgDR").value = 0;
			//modifiers
			document.getElementById("NightP").value = 0;
			document.getElementById("MGpen").value = 0;
			document.getElementById("Ascore").value = 0;
			document.getElementById("Wall").value = 0;
			document.getElementById("rangt").value = 0;
			document.getElementById("trit").value = 0;
			document.getElementById("prit").value = 0;
			document.getElementById("balit").value = 0;
			defenderts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			zdefenderts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			attackerts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			dresearch = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
			aresearch = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
			tswalld = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
			defenderTSF();
		}

		function defenderTSF() {
			defenderts[0] = parseInt(document.getElementById("cgD").value);
			if (isNaN(defenderts[0])) {
				defenderts[0] = 0;
				document.getElementById("cgD").value = 0;
			}
			zdefenderts[0] = parseInt(document.getElementById("cgD").value);
			if (isNaN(zdefenderts[0])) {
				zdefenderts[0] = 0;
			}
			//added balli tower
			norbali = parseInt(document.getElementById("balisD").value);
			if (isNaN(norbali)) {
				norbali = 0;
				document.getElementById("balisD").value = 0;
			}
			towerbali = parseInt(document.getElementById("balit").value);
			if (isNaN(towerbali)) {
				towerbali = 0;
				document.getElementById("balit").value = 0;
			}
			defenderts[1] = Number(norbali + Math.min(norbali, towerbali));
			zdefenderts[1] = parseInt(document.getElementById("balisD").value);
			if (isNaN(zdefenderts[1])) {
				zdefenderts[1] = 0;
			}
			//added tower rang
			norrang = parseInt(document.getElementById("rangD").value);
			if (isNaN(norrang)) {
				norrang = 0;
				document.getElementById("rangD").value = 0;
			}
			towerrang = parseInt(document.getElementById("rangt").value);
			if (isNaN(towerrang)) {
				towerrang = 0;
				document.getElementById("rangt").value = 0;
			}
			defenderts[2] = Number(norrang + Math.min(norrang, towerrang));
			zdefenderts[2] = parseInt(document.getElementById("rangD").value);
			if (isNaN(zdefenderts[2])) {
				zdefenderts[2] = 0;
			}
			// added tower tri
			nortri = parseInt(document.getElementById("triD").value);
			if (isNaN(nortri)) {
				nortri = 0;
				document.getElementById("triD").value = 0;
			}
			towertri = parseInt(document.getElementById("trit").value);
			if (isNaN(towertri)) {
				towertri = 0;
				document.getElementById("trit").value = 0;
			}
			defenderts[3] = Number(nortri + Math.min(nortri, towertri));
			zdefenderts[3] = parseInt(document.getElementById("triD").value);
			if (isNaN(zdefenderts[3])) {
				zdefenderts[3] = 0;
			}
			//added tower pri
			norpri = parseInt(document.getElementById("priD").value);
			if (isNaN(norpri)) {
				norpri = 0;
				document.getElementById("priD").value = 0;
			}
			towerpri = parseInt(document.getElementById("prit").value);
			if (isNaN(towerpri)) {
				towerpri = 0;
				document.getElementById("prit").value = 0;
			}
			defenderts[4] = Number(norpri + Math.min(norpri, towerpri));
			zdefenderts[4] = parseInt(document.getElementById("priD").value);
			if (isNaN(zdefenderts[4])) {
				zdefenderts[4] = 0;
			}
			defenderts[5] = parseInt(document.getElementById("vanqD").value);
			if (isNaN(defenderts[5])) {
				defenderts[5] = 0;
				document.getElementById("vanqD").value = 0;
			}
			zdefenderts[5] = parseInt(document.getElementById("vanqD").value);
			if (isNaN(zdefenderts[5])) {
				zdefenderts[5] = 0;
			}
			defenderts[6] = parseInt(document.getElementById("sorcD").value);
			if (isNaN(defenderts[6])) {
				defenderts[6] = 0;
				document.getElementById("sorcD").value = 0;
			}
			zdefenderts[6] = parseInt(document.getElementById("sorcD").value);
			if (isNaN(zdefenderts[6])) {
				zdefenderts[6] = 0;
			}
			defenderts[7] = parseInt(document.getElementById("scoutD").value);
			if (isNaN(defenderts[7])) {
				defenderts[7] = 0;
				document.getElementById("scoutD").value = 0;
			}
			zdefenderts[7] = parseInt(document.getElementById("scoutD").value);
			if (isNaN(zdefenderts[7])) {
				zdefenderts[7] = 0;
			}
			defenderts[8] = parseInt(document.getElementById("arbD").value);
			if (isNaN(defenderts[8])) {
				defenderts[8] = 0;
				document.getElementById("arbD").value = 0;
			}
			zdefenderts[8] = parseInt(document.getElementById("arbD").value);
			if (isNaN(zdefenderts[8])) {
				zdefenderts[8] = 0;
			}
			defenderts[9] = parseInt(document.getElementById("praD").value);
			if (isNaN(defenderts[9])) {
				defenderts[9] = 0;
				document.getElementById("praD").value = 0;
			}
			zdefenderts[9] = parseInt(document.getElementById("praD").value);
			if (isNaN(zdefenderts[9])) {
				zdefenderts[9] = 0;
			}
			defenderts[10] = parseInt(document.getElementById("horseD").value);
			if (isNaN(defenderts[10])) {
				defenderts[10] = 0;
				document.getElementById("horseD").value = 0;
			}
			zdefenderts[10] = parseInt(document.getElementById("horseD").value);
			if (isNaN(zdefenderts[10])) {
				zdefenderts[10] = 0;
			}
			defenderts[11] = parseInt(document.getElementById("druidD").value);
			if (isNaN(defenderts[11])) {
				defenderts[11] = 0;
				document.getElementById("druidD").value = 0;
			}
			zdefenderts[11] = parseInt(document.getElementById("druidD").value);
			if (isNaN(zdefenderts[11])) {
				zdefenderts[11] = 0;
			}
			defenderts[12] = parseInt(document.getElementById("ramD").value);
			if (isNaN(defenderts[12])) {
				defenderts[12] = 0;
				document.getElementById("ramD").value = 0;
			}
			zdefenderts[12] = parseInt(document.getElementById("ramD").value);
			if (isNaN(zdefenderts[12])) {
				zdefenderts[12] = 0;
			}
			defenderts[13] = parseInt(document.getElementById("scorpD").value);
			if (isNaN(defenderts[13])) {
				defenderts[13] = 0;
				document.getElementById("scorpD").value = 0;
			}
			zdefenderts[13] = parseInt(document.getElementById("scorpD").value);
			if (isNaN(zdefenderts[13])) {
				zdefenderts[13] = 0;
			}
			defenderts[14] = parseInt(document.getElementById("galleyD").value);
			if (isNaN(defenderts[14])) {
				defenderts[14] = 0;
				document.getElementById("galleyD").value = 0;
			}
			zdefenderts[14] = parseInt(document.getElementById("galleyD").value);
			if (isNaN(zdefenderts[14])) {
				zdefenderts[14] = 0;
			}
			defenderts[15] = parseInt(document.getElementById("stingD").value);
			if (isNaN(defenderts[15])) {
				defenderts[15] = 0;
				document.getElementById("stingD").value = 0;
			}
			zdefenderts[15] = parseInt(document.getElementById("stingD").value);
			if (isNaN(zdefenderts[15])) {
				zdefenderts[15] = 0;
			}
			defenderts[16] = parseInt(document.getElementById("wgD").value);
			if (isNaN(defenderts[16])) {
				defenderts[16] = 0;
				document.getElementById("wgD").value = 0;
			}
			zdefenderts[16] = parseInt(document.getElementById("wgD").value);
			if (isNaN(zdefenderts[16])) {
				zdefenderts[16] = 0;
			}
			attackerts[0] = 0;
			attackerts[1] = parseInt(document.getElementById("balisA").value);
			if (isNaN(attackerts[1])) {
				attackerts[1] = 0;
				document.getElementById("balisA").value = 0;
			}
			attackerts[2] = parseInt(document.getElementById("rangA").value);
			if (isNaN(attackerts[2])) {
				attackerts[2] = 0;
				document.getElementById("rangA").value = 0;
			}
			attackerts[3] = parseInt(document.getElementById("triA").value);
			if (isNaN(attackerts[3])) {
				attackerts[3] = 0;
				document.getElementById("triA").value = 0;
			}
			attackerts[4] = parseInt(document.getElementById("priA").value);
			if (isNaN(attackerts[4])) {
				attackerts[4] = 0;
				document.getElementById("priA").value = 0;
			}
			attackerts[5] = parseInt(document.getElementById("vanqA").value);
			if (isNaN(attackerts[5])) {
				attackerts[5] = 0;
				document.getElementById("vanqA").value = 0;
			}
			attackerts[6] = parseInt(document.getElementById("sorcA").value);
			if (isNaN(attackerts[6])) {
				attackerts[6] = 0;
				document.getElementById("sorcA").value = 0;
			}
			attackerts[7] = parseInt(document.getElementById("scoutA").value);
			if (isNaN(attackerts[7])) {
				attackerts[7] = 0;
				document.getElementById("scoutA").value = 0;
			}
			attackerts[8] = parseInt(document.getElementById("arbA").value);
			if (isNaN(attackerts[8])) {
				attackerts[8] = 0;
				document.getElementById("arbA").value = 0;
			}
			attackerts[9] = parseInt(document.getElementById("praA").value);
			if (isNaN(attackerts[9])) {
				attackerts[9] = 0;
				document.getElementById("praA").value = 0;
			}
			attackerts[10] = parseInt(document.getElementById("horseA").value);
			if (isNaN(attackerts[10])) {
				attackerts[10] = 0;
				document.getElementById("horseA").value = 0;
			}
			attackerts[11] = parseInt(document.getElementById("druidA").value);
			if (isNaN(attackerts[11])) {
				attackerts[11] = 0;
				document.getElementById("druidA").value = 0;
			}
			attackerts[12] = parseInt(document.getElementById("ramA").value);
			if (isNaN(attackerts[12])) {
				attackerts[12] = 0;
				document.getElementById("ramA").value = 0;
			}
			attackerts[13] = parseInt(document.getElementById("scorpA").value);
			if (isNaN(attackerts[13])) {
				attackerts[13] = 0;
				document.getElementById("scorpA").value = 0;
			}
			attackerts[14] = parseInt(document.getElementById("galleyA").value);
			if (isNaN(attackerts[14])) {
				attackerts[14] = 0;
				document.getElementById("galleyA").value = 0;
			}
			attackerts[15] = parseInt(document.getElementById("stingA").value);
			if (isNaN(attackerts[15])) {
				attackerts[15] = 0;
				document.getElementById("stingA").value = 0;
			}
			attackerts[16] = parseInt(document.getElementById("wgA").value);
			if (isNaN(attackerts[16])) {
				attackerts[16] = 0;
				document.getElementById("wgA").value = 0;
			}
			//Atackers
			aresearch[0] = 1;
			let balisAR = document.getElementById("balisAR").value;
			if (balisAR > 100 || isNaN(balisAR) == 1) {
				balisAR = 0;
				document.getElementById("balisAR").value = 0;
			}
			const balisARz = 1 + balisAR / 100;
			aresearch[1] = balisARz;
			let rangAR = document.getElementById("rangAR").value;
			if (rangAR > 100 || isNaN(rangAR) == 1) {
				rangAR = 0;
				document.getElementById("rangAR").value = 0;
			}
			const rangARz = 1 + rangAR / 100;
			aresearch[2] = rangARz;
			let triAR = document.getElementById("triAR").value;
			if (triAR > 100 || isNaN(triAR) == 1) {
				triAR = 0;
				document.getElementById("triAR").value = 0;
			}
			const triARz = 1 + triAR / 100;
			aresearch[3] = triARz;
			let priAR = document.getElementById("priAR").value;
			if (priAR > 100 || isNaN(priAR) == 1) {
				priAR = 0;
				document.getElementById("priAR").value = 0;
			}
			const priARz = 1 + priAR / 100;
			aresearch[4] = priARz;
			let vanqAR = document.getElementById("vanqAR").value;
			if (vanqAR > 100 || isNaN(vanqAR) == 1) {
				vanqAR = 0;
				document.getElementById("vanqAR").value = 0;
			}
			const vanqARz = 1 + vanqAR / 100;
			aresearch[5] = vanqARz;
			let sorcAR = document.getElementById("sorcAR").value;
			if (sorcAR > 100 || isNaN(sorcAR) == 1) {
				sorcAR = 0;
				document.getElementById("sorcAR").value = 0;
			}
			const sorcARz = 1 + sorcAR / 100;
			aresearch[6] = sorcARz;
			let scoutAR = document.getElementById("scoutAR").value;
			if (scoutAR > 100 || isNaN(scoutAR) == 1) {
				scoutAR = 0;
				document.getElementById("scoutAR").value = 0;
			}
			const scoutARz = 1 + scoutAR / 100;
			aresearch[7] = scoutARz;
			let arbAR = document.getElementById("arbAR").value;
			if (arbAR > 100 || isNaN(arbAR) == 1) {
				arbAR = 0;
				document.getElementById("arbAR").value = 0;
			}
			const arbARz = 1 + arbAR / 100;
			aresearch[8] = arbARz;
			let praAR = document.getElementById("praAR").value;
			if (praAR > 100 || isNaN(praAR) == 1) {
				praAR = 0;
				document.getElementById("praAR").value = 0;
			}
			const praARz = 1 + praAR / 100;
			aresearch[9] = praARz;
			let horseAR = document.getElementById("horseAR").value;
			if (horseAR > 100 || isNaN(horseAR) == 1) {
				horseAR = 0;
				document.getElementById("horseAR").value = 0;
			}
			const horseARz = 1 + horseAR / 100;
			aresearch[10] = horseARz;
			let druidAR = document.getElementById("druidAR").value;
			if (druidAR > 100 || isNaN(druidAR) == 1) {
				druidAR = 0;
				document.getElementById("druidAR").value = 0;
			}
			const druidARz = 1 + druidAR / 100;
			aresearch[11] = druidARz;
			let ramAR = document.getElementById("ramAR").value;
			if (ramAR > 100 || isNaN(ramAR) == 1) {
				ramAR = 0;
				document.getElementById("ramAR").value = 0;
			}
			const ramARz = 1 + ramAR / 100;
			aresearch[12] = ramARz;
			let scorpAR = document.getElementById("scorpAR").value;
			if (scorpAR > 100 || isNaN(scorpAR) == 1) {
				scorpAR = 0;
				document.getElementById("scorpAR").value = 0;
			}
			const scorpARz = 1 + scorpAR / 100;
			aresearch[13] = scorpARz;
			let galleyAR = document.getElementById("galleyAR").value;
			if (galleyAR > 100 || isNaN(galleyAR) == 1) {
				galleyAR = 0;
				document.getElementById("galleyAR").value = 0;
			}
			const galleyARz = 1 + galleyAR / 100;
			aresearch[14] = galleyARz;
			let stingAR = document.getElementById("stingAR").value;
			if (stingAR > 100 || isNaN(stingAR) == 1) {
				stingAR = 0;
				document.getElementById("stingAR").value = 0;
			}
			const stingARz = 1 + stingAR / 100;
			aresearch[15] = stingARz;
			let wgAR = document.getElementById("wgAR").value;
			if (wgAR > 100 || isNaN(wgAR) == 1) {
				wgAR = 0;
				document.getElementById("wgAR").value = 0;
			}
			const wgARz = 1 + wgAR / 100;
			aresearch[16] = wgARz;
			//Defenders
			let cgDR = document.getElementById("cgDR").value;
			if (cgDR > 100 || isNaN(cgDR) == 1) {
				cgDR = 0;
				document.getElementById("cgDR").value = 0;
			}
			const cgDRz = 1 + cgDR / 100;
			dresearch[0] = cgDRz;
			let balisDR = document.getElementById("balisDR").value;
			if (balisDR > 100 || isNaN(balisDR) == 1) {
				balisDR = 0;
				document.getElementById("balisDR").value = 0;
			}
			const balisDRz = 1 + balisDR / 100;
			dresearch[1] = balisDRz;
			let rangDR = document.getElementById("rangDR").value;
			if (rangDR > 100 || isNaN(rangDR) == 1) {
				rangDR = 0;
				document.getElementById("rangDR").value = 0;
			}
			const rangDRz = 1 + rangDR / 100;
			dresearch[2] = rangDRz;
			let triDR = document.getElementById("triDR").value;
			if (triDR > 100 || isNaN(triDR) == 1) {
				triDR = 0;
				document.getElementById("triDR").value = 0;
			}
			const triDRz = 1 + triDR / 100;
			dresearch[3] = triDRz;
			let priDR = document.getElementById("priDR").value;
			if (priDR > 100 || isNaN(priDR) == 1) {
				priDR = 0;
				document.getElementById("priDR").value = 0;
			}
			const priDRz = 1 + priDR / 100;
			dresearch[4] = priDRz;
			let vanqDR = document.getElementById("vanqDR").value;
			if (vanqDR > 100 || isNaN(vanqDR) == 1) {
				vanqDR = 0;
				document.getElementById("vanqDR").value = 0;
			}
			const vanqDRz = 1 + vanqDR / 100;
			dresearch[5] = vanqDRz;
			let sorcDR = document.getElementById("sorcDR").value;
			if (sorcDR > 100 || isNaN(sorcDR) == 1) {
				sorcDR = 0;
				document.getElementById("sorcDR").value = 0;
			}
			const sorcDRz = 1 + sorcDR / 100;
			dresearch[6] = sorcDRz;
			let scoutDR = document.getElementById("scoutDR").value;
			if (scoutDR > 100 || isNaN(scoutDR) == 1) {
				scoutDR = 0;
				document.getElementById("scoutDR").value = 0;
			}
			const scoutDRz = 1 + scoutDR / 100;
			dresearch[7] = scoutDRz;
			let arbDR = document.getElementById("arbDR").value;
			if (arbDR > 100 || isNaN(arbDR) == 1) {
				arbDR = 0;
				document.getElementById("arbDR").value = 0;
			}
			const arbDRz = 1 + arbDR / 100;
			dresearch[8] = arbDRz;
			let praDR = document.getElementById("praDR").value;
			if (praDR > 100 || isNaN(praDR) == 1) {
				praDR = 0;
				document.getElementById("praDR").value = 0;
			}
			const praDRz = 1 + praDR / 100;
			dresearch[9] = praDRz;
			let horseDR = document.getElementById("horseDR").value;
			if (horseDR > 100 || isNaN(horseDR) == 1) {
				horseDR = 0;
				document.getElementById("horseDR").value = 0;
			}
			const horseDRz = 1 + horseDR / 100;
			dresearch[10] = horseDRz;
			let druidDR = document.getElementById("druidDR").value;
			if (druidDR > 100 || isNaN(druidDR) == 1) {
				druidDR = 0;
				document.getElementById("druidDR").value = 0;
			}
			const druidDRz = 1 + druidDR / 100;
			dresearch[11] = druidDRz;
			let ramDR = document.getElementById("ramDR").value;
			if (ramDR > 100 || isNaN(ramDR) == 1) {
				ramDR = 0;
				document.getElementById("ramDR").value = 0;
			}
			const ramDRz = 1 + ramDR / 100;
			dresearch[12] = ramDRz;
			let scorpDR = document.getElementById("scorpDR").value;
			if (scorpDR > 100 || isNaN(scorpDR) == 1) {
				scorpDR = 0;
				document.getElementById("scorpDR").value = 0;
			}
			const scorpDRz = 1 + scorpDR / 100;
			dresearch[13] = scorpDRz;
			let galleyDR = document.getElementById("galleyDR").value;
			if (galleyDR > 100 || isNaN(galleyDR) == 1) {
				galleyDR = 0;
				document.getElementById("galleyDR").value = 0;
			}
			const galleyDRz = 1 + galleyDR / 100;
			dresearch[14] = galleyDRz;
			let stingDR = document.getElementById("stingDR").value;
			if (stingDR > 100 || isNaN(stingDR) == 1) {
				stingDR = 0;
				document.getElementById("stingDR").value = 0;
			}
			const stingDRz = 1 + stingDR / 100;
			dresearch[15] = stingDRz;
			let wgDR = document.getElementById("wgDR").value;
			if (wgDR > 100 || isNaN(wgDR) == 1) {
				wgDR = 0;
				document.getElementById("wgDR").value = 0;
			}
			const wgDRz = 1 + wgDR / 100;
			dresearch[16] = wgDRz;
			//wall
			let wall = parseInt(document.getElementById("Wall").value);
			if (wall > 10 || isNaN(wall) == 1) {
				wall = 0;
				document.getElementById("Wall").value = 0;
			}
			for (let i = 0; i < 17; i++) {
				tswalld[i] = i < 14 ? wall * 0.05 + 1 : 1;
			}
			//night protection
			const inputnp = parseInt(document.getElementById("NightP").value);
			inputnightp = Number(1 - inputnp / 100);
			//morale
			const inputmor = parseInt(document.getElementById("Ascore").value);
			inputmorale = Number(1 - inputmor / 100);
			//portal
			const inputport = parseInt(document.getElementById("MGpen").value);
			inputportal = Number(1 - inputport / 100);
			//input intensity, assult siege or plunder
			const tempintensity = document.getElementById("atackType").value;
			if (tempintensity === "assault") {
				defintensity = 5;
				atkintenstity = 5;
			}
			if (tempintensity === "siege") {
				defintensity = 1;
				atkintenstity = 1;
			}
			if (tempintensity === "plunder") {
				defintensity = 0.1;
				atkintenstity = 1;
			}
			calculationCC();
		}

		function combcal() {
			sum = false;
			let kumar = `<div id='kumardiv' style='width:522px;height:777px;left: 990px; z-index: 200003;  position: relative; class='popUpBox ui-draggable'>
			<div class="ppbwinbgr ui-draggable">
			<div class="ppbwintop  ui-draggable"></div>
			<div class="ppbwincent ui-draggable"></div>
			<div class="ppbwinbott  ui-draggable"></div>
			</div>
			<div class="ppbwincontent ui-draggable" style="height:98%;">
			<div class="popUpBar ui-draggable-handle">
			<span class='ppspan'>Dhruvs Combat Calculator</span>
			<button id='kumarsumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#kumardiv').hide()>
			<div id='xbuttondiv'>
			<div>
			<div id='centxbuttondiv'></div>
			</div>
			</div>
			</button>
			</div>
			<div id="popkumar" class="popUpWindow" style="margin-left:auto; margin-right:auto;">
			//Section 1
			<div id = "toptxt" style="width: 90%;margin-left: auto;margin-right: auto; font-size:12px; text-align:center;">NP:<input type="text" id="NightP" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">
			Portal: <input type="text" id="MGpen" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">
			Morale: <input type="text" id="Ascore" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">
			Type:<select name="atackType" id="atackType" class="regButton greenb" style="color:#e1c190;" onchange=""><option selected value="assault">Assault</option><option value="siege">Siege</option><option value="plunder">Plunder</option></select>
			<br><span>Defense Protected by Towers</span><br>
			<span>Ranger=<input type="text" id="rangt" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">Triari=<input type="text" id="trit" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">Priestess=<input type="text" id="prit" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">Balista=<input type="text" id="balit" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">
			<br>Walls lvl: <input type="text" id="Wall" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></span>
			</div>
			//Section 2
			<div id="chart" style="height:90%; line-height:90%;">
			<table id = "tab" style="width:90%; margin-left:auto; margin-right:auto; font-size:10px;">
			<tr>
			<!--<th colspan="2">Attacking</th>  <th> +% </th>   <th>  </th>  <th> +%  </th>   <th colspan="2">Defending</th>"cityguard"-->
			<th>Remaining </th><th>Attacking</th>  <th> +% </th>   <th>  </th>  <th> +%  </th>   <th>Defending</th> <th>Remaining</th>
			</tr>

			<tr>
			<td></td><td>-</td><td>-</td>
			<td ><div class="guard32 trooptdcm" /></td>
			<td><input type="text" id="cgDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;" ></td>
			<td><input type="text" id="cgD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 2px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="survcgD"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="survanqA" style="font-weight:bold;"></span> </td><td><input type="text" id="vanqA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="vanqAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="vanq32 trooptdcm" /></td>
			<td><input type="text" id="vanqDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="vanqD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="survanqD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="sursorcA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="sorcA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="sorcAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="sorc32 trooptdcm" /></td>
			<td><input type="text" id="sorcDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="sorcD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="sursorcD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surRangA" style="font-weight:bold;"></span> </td><td><input type="text" id="rangA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="rangAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="ranger32 trooptdcm" /></td>
			<td><input type="text" id="rangDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="rangD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surRangD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surtriA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="triA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="triAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="triari32 trooptdcm" /></td>
			<td><input type="text" id="triDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="triD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surtriD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surpriA" style="font-weight:bold;"></span> </td><td><input type="text" id="priA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="priAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="priest32 trooptdcm" /></td>
			<td><input type="text" id="priDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="priD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surpriD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surScoutA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="scoutA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="scoutAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="scout32 trooptdcm" /></td>
			<td><input type="text" id="scoutDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="scoutD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surScoutD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surhorseA" style="font-weight:bold;"></span> </td><td><input type="text" id="horseA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="horseAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="horsem32 trooptdcm" /></td>
			<td><input type="text" id="horseDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="horseD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surhorseD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surdruidA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="druidA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="druidAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="druid32 trooptdcm" /></td>
			<td><input type="text" id="druidDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="druidD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surdruidD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surarbA" style="font-weight:bold;"></span> </td><td><input type="text" id="arbA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="arbAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="arbal32 trooptdcm" /></td>
			<td><input type="text" id="arbDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="arbD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surarbD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surpraA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="praA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="praAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="praet32 trooptdcm" /></td>
			<td><input type="text" id="praDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="praD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surpraD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surramA" style="font-weight:bold;"></span> </td><td><input type="text" id="ramA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="ramAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="ram32 trooptdcm" /></td>
			<td><input type="text" id="ramDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="ramD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surramD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surscorpA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="scorpA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="scorpAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="scorp32 trooptdcm" /></td>
			<td><input type="text" id="scorpDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="scorpD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surscorpD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surbalisA" style="font-weight:bold;"></span> </td><td><input type="text" id="balisA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="balisAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="bally32 trooptdcm" /></td>
			<td><input type="text" id="balisDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="balisD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surbalisD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surgalleyA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="galleyA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="galleyAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="galley32 trooptdcm" /></td>
			<td><input type="text" id="galleyDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="galleyD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surgalleyD" style="font-weight:bold;"></span></td>
			</tr>

			<tr class = "alt">
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surstingA" style="font-weight:bold;"></span> </td><td><input type="text" id="stingA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="stingAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="sting32 trooptdcm" /></td>
			<td><input type="text" id="stingDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="stingD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surstingD" style="font-weight:bold;"></span></td>
			</tr>

			<tr>
			<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surWgA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="wgA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>
			<td><input type="text" id="wgAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><div class="wship32 trooptdcm" /></td>
			<td><input type="text" id="wgDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>
			<td><input type="text" id="wgD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surWgD" style="font-weight:bold;"></span></td>
			</tr>

			<div id="buttonbox" style="text-align:center;">
			<input type=button value="Repeat" class="regButton greenb" style="width: 150px; margin-right:10px;" id="repeatbutton">
			<input type=button value="Reset" class="regButton greenb" style="width: 150px;" id="resetbutton">
			</div>
			<div id="bla"></div>`;
			//end of Section 2
			kumar += '</div>';
			// end of content section
			kumar += '</div>';
			// end of  content window
			kumar += '</div>';
			//end of popup window
			kumar += '</div>';
			$("#reportsViewBox").after(kumar);
			$("#kumardiv").draggable({
				handle: ".popUpBar",
				containment: "window",
				scroll: true
			});
			//$( "#kumardiv" ).resizable();
			$("#resetbutton").click(function() {
				reset();
			});
			$("#repeatbutton").click(function() {
				repeat();
			});
			$("#MGpen, #Ascore, #Wall, #NightP, #atackType, #rangt, #trit, #prit, #balit, #cgD, #vanqD, #sorcD, #rangD, #triD,#priD, #scoutD, #horseD, #druidD, #arbD, #praD, #ramD, #scorpD,#balisD, #galleyD, #stingD, #wgD, #vanqA, #sorcA, #rangA, #triA, #priA, #scoutA, #horseA, #druidA, #arbA, #praA, #ramA, #scorpA, #balisA, #galleyA, #stingA, #wgA, #cgDR, #balisDR, #rangDR, #triDR, #priDR, #vanqDR, #sorcDR, #scoutDR, #scoutDR, #arbDR, #praDR, #horseDR, #druidDR, #ramDR, #scorpDR, #galleyDR, #stingDR, #wgDR,#balisAR, #rangAR, #triAR, #priAR, #vanqAR, #sorcAR,  #arbAR, #praAR, #horseAR, #druidAR, #ramAR, #scorpAR, #galleyAR, #stingAR, #wgAR").change(function() {
				defenderTSF();
			});
		}

		function calculationCC() {
			//calculating attack values
			let infattk = 0;
			for (var i = 0; i < 17; i++) {
				const tempinfattk = attackerts[i] * aresearch[i] * TroopAttackIndex[i] * isInfantry[i];
				infattk += tempinfattk;
			}
			infatk = infattk * inputnightp * inputmorale * inputportal;
			let cavattk = 0;
			for (let j = 0; j < 17; j++) {
				const tempcavattk = attackerts[j] * aresearch[j] * TroopAttackIndex[j] * isCavalry[j];
				cavattk += tempcavattk;
			}
			cavatk = cavattk * inputnightp * inputmorale * inputportal;
			let mystattk = 0;
			for (let z = 0; z < 17; z++) {
				const tempmystattk = attackerts[z] * aresearch[z] * TroopAttackIndex[z] * isMagic[z];
				mystattk += tempmystattk;
			}
			mystatk = mystattk * inputnightp * inputmorale * inputportal;
			let artattk = 0;
			for (let x = 0; x < 17; x++) {
				const tempartattk = attackerts[x] * aresearch[x] * TroopAttackIndex[x] * isArtillery[x];
				artattk += tempartattk;
			}
			artatk = artattk * inputnightp * inputmorale * inputportal;
			sumofattk = infatk + cavatk + mystatk + artatk;
			percinfattk = infatk * 1.0 / sumofattk;
			percavattk = cavatk * 1.0 / sumofattk;
			permystattk = mystatk * 1.0 / sumofattk;
			perartattk = artatk * 1.0 / sumofattk;
			if (isFinite(percinfattk) == false) {
				percinfattk = 0;
			}
			if (isFinite(percavattk) == false) {
				percavattk = 0;
			}
			if (isFinite(permystattk) == false) {
				permystattk = 0;
			}
			if (isFinite(perartattk) == false) {
				perartattk = 0;
			}
			//percentage of each attack multiplied by defence values
			for (var i = 0; i < 17; i++) {
				ttinfdefz[i] = ttinfdef[i] * percinfattk;
				ttcavdefz[i] = ttcavdef[i] * percavattk;
				ttmystdefz[i] = ttmystdef[i] * permystattk;
				ttartdefz[i] = ttartdef[i] * perartattk;
			}
			//defence values
			let infdef = 0;
			let cavdef = 0;
			let mystdef = 0;
			let artdef = 0;
			for (var i = 0; i < 17; i++) {
				const tempinfdef = defenderts[i] * dresearch[i] * ttinfdefz[i] * tswalld[i];
				infdef += tempinfdef;
				const tempcavdef = defenderts[i] * dresearch[i] * ttcavdefz[i] * tswalld[i];
				cavdef += tempcavdef;
				const tempmystdef = defenderts[i] * dresearch[i] * ttmystdefz[i] * tswalld[i];
				mystdef += tempmystdef;
				const tempartdef = defenderts[i] * dresearch[i] * ttartdefz[i] * tswalld[i];
				artdef += tempartdef;
			}
			infdef = isFinite(infdef) ? infdef : 0;
			cavdef = isFinite(cavdef) ? cavdef : 0;
			mystdef = isFinite(mystdef) ? mystdef : 0;
			artdef = isFinite(artdef) ? artdef : 0;
			sumofdef = infdef + cavdef + mystdef + artdef;
			//calculating ratios of attack to defence
			ratioinf = infatk * 1.0 / infdef;
			ratiocav = cavatk * 1.0 / cavdef;
			ratiomyst = mystatk * 1.0 / mystdef;
			ratioart = artatk * 1.0 / artdef;
			ratiosum = sumofattk * 1.0 / sumofdef;
			ratioinf = isFinite(ratioinf) ? ratioinf : 0;
			ratiocav = isFinite(ratiocav) ? ratiocav : 0;
			ratiomyst = isFinite(ratiomyst) ? ratiomyst : 0;
			ratioart = isFinite(ratioart) ? ratioart : 0;
			ratiosum = isFinite(ratiosum) ? ratiosum : 0;
			//dividing into sub groups in order of attack magnitude
			if (ratiosum == 0) {
				attinflosses = 0;
				attcavlosses = 0;
				attmystlosses = 0;
				attartlosses = 0;
				definflosses = 0;
				defcavlosses = 0;
				defmystlosses = 0;
				defartlosses = 0;
			}
			if (ratiosum > 0 && ratiosum <= 0.1111111111) {
				attinflosses = Number(1.0 / Math.sqrt(ratioinf)) * 0.3;
				attcavlosses = Number(1.0 / Math.sqrt(ratiocav)) * 0.3;
				attmystlosses = Number(1.0 / Math.sqrt(ratiomyst)) * 0.3;
				attartlosses = Number(1.0 / Math.sqrt(ratioart)) * 0.3;
				definflosses = ratioinf * 1.0 / 10;
				defcavlosses = ratiocav * 1.0 / 10;
				defmystlosses = ratiomyst * 1.0 / 10;
				defartlosses = ratioart * 1.0 / 10;
			}
			if (ratiosum > 0.1111111111 && ratiosum <= 0.25) {
				attinflosses = Number(1.0 / Math.sqrt(ratioinf)) * 0.2;
				attcavlosses = Number(1.0 / Math.sqrt(ratiocav)) * 0.2;
				attmystlosses = Number(1.0 / Math.sqrt(ratiomyst)) * 0.2;
				attartlosses = Number(1.0 / Math.sqrt(ratioart)) * 0.2;
				definflosses = ratioinf * 1.0 / 10;
				defcavlosses = ratiocav * 1.0 / 10;
				defmystlosses = ratiomyst * 1.0 / 10;
				defartlosses = ratioart * 1.0 / 10;
			}
			if (ratiosum > 0.25 && ratiosum <= 1) {
				attinflosses = Number(1.0 / Math.sqrt(ratioinf)) * 1.0 / 10;
				attcavlosses = Number(1.0 / Math.sqrt(ratiocav)) * 1.0 / 10;
				attmystlosses = Number(1.0 / Math.sqrt(ratiomyst)) * 1.0 / 10;
				attartlosses = Number(1.0 / Math.sqrt(ratioart)) * 1.0 / 10;
				definflosses = ratioinf * 1.0 / 10;
				defcavlosses = ratiocav * 1.0 / 10;
				defmystlosses = ratiomyst * 1.0 / 10;
				defartlosses = ratioart * 1.0 / 10;
			}
			if (ratiosum > 1 && ratiosum <= 4) {
				attinflosses = Number(1.0 / ratioinf) * 1.0 / 10;
				attcavlosses = Number(1.0 / ratiocav) * 1.0 / 10;
				attmystlosses = Number(1.0 / ratiomyst) * 1.0 / 10;
				attartlosses = Number(1.0 / ratioart) * 1.0 / 10;
				definflosses = Math.sqrt(ratioinf) * 1.0 / 10;
				defcavlosses = Math.sqrt(ratiocav) * 1.0 / 10;
				defmystlosses = Math.sqrt(ratiomyst) * 1.0 / 10;
				defartlosses = Math.sqrt(ratioart) * 1.0 / 10;
			}
			if (ratiosum > 4 && ratiosum <= 9) {
				attinflosses = Number(1.0 / ratioinf) * 1.0 / 10;
				attcavlosses = Number(1.0 / ratiocav) * 1.0 / 10;
				attmystlosses = Number(1.0 / ratiomyst) * 1.0 / 10;
				attartlosses = Number(1.0 / ratioart) * 1.0 / 10;
				definflosses = Math.sqrt(ratioinf) * 2.0 / 10;
				defcavlosses = Math.sqrt(ratiocav) * 2.0 / 10;
				defmystlosses = Math.sqrt(ratiomyst) * 2.0 / 10;
				defartlosses = Math.sqrt(ratioart) * 2.0 / 10;
			}
			if (ratiosum > 9 && ratiosum <= 100_000) {
				attinflosses = Number(1.0 / ratioinf) * 1.0 / 10;
				attcavlosses = Number(1.0 / ratiocav) * 1.0 / 10;
				attmystlosses = Number(1.0 / ratiomyst) * 1.0 / 10;
				attartlosses = Number(1.0 / ratioart) * 1.0 / 10;
				definflosses = Math.sqrt(ratioinf) * 3.0 / 10;
				defcavlosses = Math.sqrt(ratiocav) * 3.0 / 10;
				defmystlosses = Math.sqrt(ratiomyst) * 3.0 / 10;
				defartlosses = Math.sqrt(ratioart) * 3.0 / 10;
			}
			attinflosses = isFinite(attinflosses) ? attinflosses : 0;
			attcavlosses = isFinite(attcavlosses) ? attcavlosses : 0;
			attmystlosses = isFinite(attmystlosses) ? attmystlosses : 0;
			attartlosses = isFinite(attartlosses) ? attartlosses : 0;
			definflosses = isFinite(definflosses) ? definflosses : 0;
			defcavlosses = isFinite(defcavlosses) ? defcavlosses : 0;
			defmystlosses = isFinite(defmystlosses) ? defmystlosses : 0;
			defartlosses = isFinite(defartlosses) ? defartlosses : 0;
			//surving defence TS calculation
			defloss = Number(definflosses * percinfattk + defcavlosses * percavattk + defmystlosses * permystattk + defartlosses * perartattk);
			for (var i = 0; i < 17; i++) {
				lossdefTS[i] = zdefenderts[i] * defloss * defintensity;
				if (lossdefTS[i] > zdefenderts[i]) {
					lossdefTS[i] = zdefenderts[i];
				}
				survivingdefTS[i] = parseInt(zdefenderts[i] - lossdefTS[i]);
			}
			$("#survcgD").text(survivingdefTS[0]);
			$("#survanqD").text(survivingdefTS[5]);
			$("#sursorcD").text(survivingdefTS[6]);
			$("#surRangD").text(survivingdefTS[2]);
			$("#surtriD").text(survivingdefTS[3]);
			$("#surpriD").text(survivingdefTS[4]);
			$("#surScoutD").text(survivingdefTS[7]);
			$("#surhorseD").text(survivingdefTS[10]);
			$("#surdruidD").text(survivingdefTS[11]);
			$("#surarbD").text(survivingdefTS[8]);
			$("#surpraD").text(survivingdefTS[9]);
			$("#surramD").text(survivingdefTS[12]);
			$("#surscorpD").text(survivingdefTS[13]);
			$("#surbalisD").text(survivingdefTS[1]);
			$("#surgalleyD").text(survivingdefTS[14]);
			$("#surstingD").text(survivingdefTS[15]);
			$("#surWgD").text(survivingdefTS[16]);
			//surving offensive TS calculation
			for (var i = 0; i < 17; i++) {
				survoffTS[i] = attcavlosses * isCavalry[i] + attinflosses * isInfantry[i] + attmystlosses * isMagic[i] + isArtillery[i] * attartlosses;
			}
			for (var i = 0; i < 17; i++) {
				lossaTroopScoreIndex[i] = attackerts[i] * survoffTS[i] * atkintenstity;
				if (lossaTroopScoreIndex[i] > attackerts[i]) {
					lossaTroopScoreIndex[i] = attackerts[i];
				}
				survivingaTroopScoreIndex[i] = parseInt(attackerts[i] - lossaTroopScoreIndex[i]);
			}
			$("#survanqA").text(survivingaTroopScoreIndex[5]);
			$("#sursorcA").text(survivingaTroopScoreIndex[6]);
			$("#surRangA").text(survivingaTroopScoreIndex[2]);
			$("#surtriA").text(survivingaTroopScoreIndex[3]);
			$("#surpriA").text(survivingaTroopScoreIndex[4]);
			$("#surScoutA").text(survivingaTroopScoreIndex[7]);
			$("#surhorseA").text(survivingaTroopScoreIndex[10]);
			$("#surdruidA").text(survivingaTroopScoreIndex[11]);
			$("#surarbA").text(survivingaTroopScoreIndex[8]);
			$("#surpraA").text(survivingaTroopScoreIndex[9]);
			$("#surramA").text(survivingaTroopScoreIndex[12]);
			$("#surscorpA").text(survivingaTroopScoreIndex[13]);
			$("#surbalisA").text(survivingaTroopScoreIndex[1]);
			$("#surgalleyA").text(survivingaTroopScoreIndex[14]);
			$("#surstingA").text(survivingaTroopScoreIndex[15]);
			$("#surWgA").text(survivingaTroopScoreIndex[16]);
		}
	})();



})();