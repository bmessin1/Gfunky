// ==UserScript==
// @name gfunky3
// @namespace www.tampermonkey.com
// @version 3.1.9
// @description gfunky3
// @author Greety
// @match https://*.crownofthegods.com/*
// @include https://*.crownofthegods.com/?s=*
// @grant none
// @updateURL https://raw.githubusercontent.com/bmessin1/Gfunky/master/gfunky3.user.js
// @downloadURL https://raw.githubusercontent.com/bmessin1/Gfunky/master/gfunky3.user.js
// ==/UserScript==




/*Gfunky Version 3.1.9 Last Modified Jan 8,2023 */
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
				<div id='announcWindow' style='overflow-y:auto; width:95% !important;left:15px !important'>
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
							<h4 style='text-align:center;color:green;'>Update 3.1.9</h4>
							<br>
							<h4 style='text-align:center;color:green;'>Jan 08, 2023</h4>
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

		setTimeout(() => {
			const options = {};
			$('#startwinDiv').hide(2000);
		}, 4000);
	});
	/*


	END POPUP MESSAGE FOR PLAYERS WHEN THEY OPEN THE GAME


	*/
	/* DEVELOPER NOTES TO HELP REFERENCE AND FOR OTHER CODES

	//  Troop   0   Guard
	//  Troop   1   Ballista
	//  Troop   2   Ranger
	//  Troop   3   Triari
	//  Troop   4   Priest
	//  Troop   5   Vanq
	//  Troop   6   Sorc
	//  Troop   7   Scout
	//  Troop   8   Arbalist
	//  Troop   9   Preator
	//  Troop   10  Horsemen
	//  Troop   11  Druid
	//  Troop   12  Ram
	//  Troop   13  Scorpion
	//  Troop   14  Galley
	//  Troop   15  Stinger
	//  Troop   16  Warship
	//  Troop   17  Senator

	//  includes/mBu.php',
	//  includes/gaLoy.php'
	//  includes/pD.php'
	//  includes/gM.php'
	//  includes/gC.php'
	//  includes/gFFc.php'
	//  includes/gIDl.php'
	//  includes/gPi.php'
	//  includes/UaO.php'
	//  includes/UpO.php'
	//  includes/mnio.php'
	//  overview/trpover.php'
	//  /overview/mconv.php'
	//  overview/citover.php'
	//  overview/rreps.php'
	//  overview/graid.php'
	//  overview/reinover.php'
	//  overview/incover.php'
	//  overview/rcallall.php'
	//  overview/reinreca.php'
	//  overview/reinrecall.php'
	// 	includes/svFW.php

	*/
	/*







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
					movable: true
				},
				ranger_post: {
					id: [543, 544, 545, 546],
					buildable: true,
					shortcut: "2",
					movable: true
				},
				snag_barricade: {
					id: [567, 568, 569, 570],
					buildable: true,
					shortcut: "6",
					movable: true
				},
				triari_post: {
					id: [539, 540, 541, 542],
					buildable: true,
					shortcut: "3",
					movable: true
				},
				equine_barricade: {
					id: [559, 560, 561, 562],
					buildable: true,
					shortcut: "7",
					movable: true
				},
				priestess_post: {
					id: [551, 552, 553, 554],
					buildable: true,
					shortcut: "4",
					movable: true
				},
				rune_barricade: {
					id: [563, 564, 565, 567],
					buildable: true,
					shortcut: "8",
					movable: true
				},
				ballista_post: {
					id: [555, 556, 557, 558],
					buildable: true,
					shortcut: "5",
					movable: true
				},
				veiled_barricade: {
					id: [571, 572, 573, 574],
					buildable: true,
					shortcut: "9",
					movable: true
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
								QB.utils.errorMsg.display(`Creating A(n) ${toAdd.name}`);
								const eventData = {
									type: "keypress",
									keyCode: toAdd.shortcut.charCodeAt()
								};
								$("body").trigger(eventData);
							} else {
								QB.utils.errorMsg.display(`Error. Don't know how to Create a(n) ${toAdd.name}. Please report the bug`);
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
				console.log("Game Loaded.");





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

			console.log("Quickbuild Script Loading");
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
			console.log("Quickbuild Script Loaded");
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
			console.log("Chat Loaded");
		}, 4000);

	})();

	/*







	END OF QUICKBUILD SCRIPT





	*/
	/*


	START OF CORE FUNKY






	*/


	// GLOBAL VARIABLES

	const ttts = [1, 10, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 10, 10, 100, 100, 400, 1]; //ts per unit
	let citytc;
	const troopmessage = "Not enough TS to kill this boss!";
	const other_loot = [360, 1050, 4500, 16_000, 33_000, 58_500, 118_400, 200_450, 300_000, 450_400]; //forest, hill loot
	const mountain_loot = [360, 1050, 4500, 16_000, 33_000, 58_500, 118_400, 200_450, 300_000, 450_400]; //mountain loot
	const tpicdiv = ["guard32 trooptdcm", "bally32 trooptdcm", "ranger32 trooptdcm", "triari32 trooptdcm", "priest32 trooptdcm", "vanq32 trooptdcm", "sorc32 trooptdcm", "scout32 trooptdcm", "arbal32 trooptdcm", "praet32 trooptdcm", "horsem32 trooptdcm",
		"druid32 trooptdcm", "ram32 trooptdcm", "scorp32 trooptdcm", "galley32 trooptdcm", "sting32 trooptdcm", "wship32 trooptdcm", "senat32 trooptdcm"
	];
	const tpicdiv20 = ["guard20 trooptdcm", "bally20 trooptdcm", "ranger20 trooptdcm", "triari20 trooptdcm", "priest20 trooptdcm", "vanq20 trooptdcm", "sorc20 trooptdcm", "scout20 trooptdcm", "arbal20 trooptdcm", "praet20 trooptdcm", "horsem20 trooptdcm",
		"druid20 trooptdcm", "ram20 trooptdcm", "scorp20 trooptdcm", "galley20 trooptdcm", "sting20 trooptdcm", "wship20 trooptdcm", "senat20 trooptdcm"
	];
	const ttspeed = [0, 30, 20, 20, 20, 20, 20, 8, 10, 10, 10, 10, 30, 30, 5, 5, 5, 40];
	const faithbonusattackpower = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	let ibriafaith = 0;
	let ylannafaith = 0;
	let naerafaith = 0;
	let cyndrosfaith = 0;
	let domdisfaith = 0;
	let vexifaith = 0;
	let meriusfaith = 0;
	let evarafaith = 0; //alliance faiths
	const faithbonustravelspeed = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	const TS_type = [0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 0, 100, 400];
	const Total_Combat_Research = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	let naera = 0;
	let vexemis = 0;
	let cyndros = 0;
	let ylanna = 0;
	const buildings = {
		name: ["forester", "cottage", "storehouse", "quarry", "hideaway", "farmhouse", "cityguardhouse", "barracks", "mine", "trainingground", "marketplace", "townhouse", "sawmill", "stable", "stonemason", "mage_tower", "windmill", "temple", "smelter", "blacksmith",
			"castle", "port", "port", "port", "shipyard", "shipyard", "shipyard", "townhall", "castle"
		],
		bid: [448, 446, 464, 461, 479, 447, 504, 445, 465, 483, 449, 481, 460, 466, 462, 500, 463, 482, 477, 502, "467", 488, 489, 490, 491, 496, 498, 455, 467]
	};
	let sum = true;
	let bdcountshow = true;
	let qbcshow = true;
	const cavernloot = [0, 400, 1050, 4500, 15_000, 342_500, 60_000, 125_000, 210_000, 320_000, 462_000]; //cavern loot per lvl
	const bossdef = [625, 3750, 25_000, 50_000, 125_000, 187_500, 250_000, 375_000, 562_500, 750_000]; //bosses defense value
	const bossdefw = [425, 2500, 17_000, 33_000, 83_000, 125_000, 170_000, 250_000, 375_000, 500_000]; // bosses defense value for weakness type
	const bossmts = [6, 20, 100, 500, 2000, 3500, 5000, 8000, 12_000, 15_000]; //minimum TS to send to a boss
	const numbs = [0, 0, 0];
	const ttloot = [0, 0, 10, 20, 10, 10, 5, 0, 15, 20, 15, 10, 0, 0, 0, 1500, 3000]; //troop loot
	const ttattack = [10, 50, 30, 10, 25, 50, 70, 10, 40, 60, 90, 120, 50, 150, 3000, 1200, 12_000]; //troops attack value
	const iscav = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]; //which troop number is cav
	const isinf = [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //which troop number is inf
	const ismgc = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; //which troop number is magic
	const isart = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]; //which troop number is artillery
	const resbonus = [0, 0.01, 0.03, 0.06, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5]; // res bonus to attack power per res rank
	const Res = [0, 1, 3, 6, 10, 15, 20, 25, 30, 35, 40, 45, 50]; //research lvl
	const ttname = ["Guards", "Ballistas", "Rangers", "Triari", "Priestess", "Vanquishers", "Sorcerers", "Scouts", "Arbalists", "Praetors", "Horsemans", "Druids", "Rams", "Scorpions", "Galleys", "Stingers", "Warships", "Senator"];
	const layoutsl = [""];
	const layoutlol = [""];
	const layoutldl = [""];
	const layoutwol = [""];
	const layoutwdl = [""];
	const layouttsg = [""];
	const layoutpol = [""];
	const layoutsw = [""];
	const layoutdf = [""];
	const layouthul = [""];
	const layoutshl = [""];
	const today = new Date();
	const hidespf = false;
	let cdata; //city data return
	let wdata; //world data
	let pldata; //players list on server
	let poll2; //poll2data
	let pD; 
	let clc = {}; // city lists info
	let city = {
		cid: 0,
		x: 0,
		y: 0,
		th: [0],
		cont: 0
	}; //current city data
	const bosses = {
		name: ["Cyclops", "Andar's Colosseum Challenge", "Dragon", "Romulus and Remus", "Gorgon", "GM Gordy", "Triton"],
		pic: ["cyclops32 mauto bostooltip tooltipstered", "andar32 mauto bostooltip tooltipstered", "dragon32 mauto bostooltip tooltipstered", "romrem32 mauto bostooltip tooltipstered", "gorgon32 mauto bostooltip tooltipstered", "gmgordy32 mauto bostooltip tooltipstered", "triton32 mauto bostooltip tooltipstered"]
	};
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
	const remarksl = [""];
	const remarksw = [""];
	const remarkdf = [""];
	const remarklol = [""];
	const remarkldl = [""];
	const remarkwol = [""];
	const remarkwdl = [""];
	const remarkhul = [""];
	const remarkshl = [""];
	const remarkpol = [""];
	const remarktsg = [""];
	
	// in the event troops get turned to strings, just add .toString(); to the end of troupcoun*
	
	const troopcounw = [
		[]
	];
	const troopcound = [
		[]
	];
	const troopcounl = [
		[]
	];
	const troopcounlol = [
		[]
	];
	const troopcounldl = [
		[]
	];
	const troopcounwol = [
		[]
	];
	const troopcounwdl = [
		[]
	];
	const troopcounhul = [
		[]
	];
	const troopcounshl = [
		[]
	];
	const troopcounpol = [
		[]
	];
	const troopcountsg = [
		[]
	];

	const resw = [
		[]
	];
	const resd = [
		[]
	];
	const resl = [
		[]
	];
	const reslol = [
		[]
	];
	const resldl = [
		[]
	];
	const reswol = [
		[]
	];
	const reswdl = [
		[]
	];
	const reshul = [
		[]
	];
	const resshl = [
		[]
	];
	const respol = [
		[]
	];
	const restsg = [
		[]
	];
	const notesl = [""];
	const notesw = [""];
	const notedf = [""];
	const notelol = [""];
	const noteldl = [""];
	const notewol = [""];
	const notewdl = [""];
	const notehul = [""];
	const noteshl = [""];
	const notepol = [""];
	const notetsg = [""];
	const emptyspots = ",.;:#-T";
	let beentoworld = false;
	let dhruvboss = 0;
	let splayers = {
		name: [],
		ally: [],
		cities: []
	};
	let shrinec = [
		[]
	];
	let buildingdata;
	let coofz;
	let coon;
	let cotgsettings;


	setTimeout(function() {
		(function(open) {
			XMLHttpRequest.prototype.open = function() {
				this.addEventListener("readystatechange", function() {
					if (this.readyState != 4) {
						return;
					}
					const url = this.responseURL;
					if (url.indexOf('gC.php') != -1) {
						cdata = JSON.parse(this.response);
						city = {};
						city.cid = cdata.cid;
						city.th = cdata.th;
						citytc = cdata.th;
						buildingdata = cdata.bd;
						city.x = Number(cdata.x);
						city.y = Number(cdata.y);
						city.cont = Number(cdata.co);
						const leftover = document.getElementById('citcoordspq');
						const cityName = document.getElementById('citnamqcont');
						const cityCoordsSpan = document.createElement('SPAN');
						const cityCoords = document.createTextNode(`${city.x}:${city.y}`);
						if (typeof(leftover) != 'undefined' && leftover != null) {
							leftover.remove();
						}
						cityCoordsSpan.setAttribute('id', 'citcoordspq');
						cityCoordsSpan.setAttribute('style', 'font-size:10px');
						cityCoordsSpan.appendChild(cityCoords);
						cityName.appendChild(cityCoordsSpan);
						city.x = Number(city.cid % 65_536);
						city.y = Number((city.cid - city.x) / 65_536);
						city.cont = Number(Math.floor(city.x / 100) + 10 * Math.floor(city.y / 100));
						//console.log('Coords: ' + city.x + ':' + city.y );
						city.mo = cdata.mo;
						setTimeout(function() {
							updateattack();
							updatedef();
						}, 2000);
						makebuildcount();
						coonvalue();
					}
					if (url.indexOf('gWrd.php') != -1) {
						wdata = JSON.parse(this.response);
						beentoworld = true;
						wdata = decwdata(wdata.a);
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
						console.log(cotgsettings);

					}
					 if (url.indexOf('cgS.php') != -1) {
                            clc = JSON.parse(this.response);
                    }
					if (url.indexOf('pD.php') != -1) {
						const responseObject = JSON.parse(this.response);
						const clc = responseObject.clc;
					}
					if (url.indexOf('gFFc.php') != -1) {
						gFFc = JSON.parse(this.response);
					}
					if (url.indexOf('poll2.php') == -1) {
						return;
					}
					if (poll2) {
						var saveclc = poll2.player.clc;
						var saveoga = poll2.OGA;
						var saveopt = poll2.player.OPT;
						
					}
					
					poll2 = JSON.parse(this.response);
					city.x = Number(poll2.city.x);
					city.y = Number(poll2.city.y);
					city.cont = Number(poll2.city.co);
					coonoff = Number(poll2.city.coof);
					coonvalue();
					city.x = Number(poll2.city.cid % 65_536);
					city.y = Number((poll2.city.cid - city.x) / 65_536);
					city.cont = Number(Math.floor(city.x / 100) + 10 * Math.floor(city.y / 100));

					if (!('opt' in poll2.player)) {
						poll2.player.opt = saveopt;
					}
					if (!('OGA' in poll2)) {
						poll2.OGA = saveoga;
					}
					if ('bd' in poll2.city) {
						makebuildcount();
					}
					if (!('clc' in poll2.player)) {
						poll2.player.clc = saveclc;
					}
				}, false);
				open.apply(this, arguments);
			};
		})(XMLHttpRequest.prototype.open);
		console.log("Gfunky+ Has Loaded. Presented by Greety and Fact ");
	}, 4000);


	$("<style>").prop("type", "text/css").html(".gfadded {color : blue}").appendTo("head");
	$("<style>").prop("type", "text/css").html(".gffixed {color : lime}").appendTo("head");
	$("<style>").prop("type", "text/css").html(".gfremoved {color : red ; font-weight: 700}").appendTo("head");
	$("<style>").prop("type", "text/css").html(".gfupdated {color : yellow}").appendTo("head");
	//Changing "edit" to City Manager Button
	
	$('#editspncn').css({
		"color": "#cebca0",
		"float": "none",
		"padding": "9px",
		"border-radius": "10px"
	});
	$('#editspncn').text("City Manager");
	$('#editspncn').addClass("greenb");
	
	$('#citnamqcont').css("margin-left", "10px");
	$('#citremspq').css("font-size", "10px");
	$('#topIRsecd1').removeAttr('style');
	$('#citnamspq').css("font-size", "10px");
	$('#rqitemss').appendTo('#recruitmentQueueWindow');
	$('#bqitemss').appendTo('#buildQueueWindow');
	$('#tbnwbbtbl').appendTo('#resInfo');



	//decoding world data in the new format
	function decwdata(data) {
		const DecData = {
			bosses: [],
			cities: [],
			ll: [],
			cavern: [],
			portals: [],
			shrines: []
		};
		const temp = data.split("|");
		const keys = temp[1].split("l");
		let ckey = keys[0]; //cities
		let skey = keys[1]; // Shrines
		let bkey = keys[2]; // Bosses
		let lkey = keys[3]; //Lawless
		let cavkey = keys[4]; //caverns
		let pkey = keys[5]; //portals
		const cities = temp[0].split("l");
		const shrines = temp[2].split("l");
		const bosses = temp[3].split("l");
		const lawless = temp[4].split("l");
		const caverns = temp[5].split("l");
		const portals = temp[6].split("l");
		let dat = 0;
		for (var i in bosses) {
			dat = `${Number(bosses[i]) + Number(bkey)}`;
			bkey = dat;
			DecData.bosses.push(`1${dat}`);
		}
		for (var i in cities) {
			dat = `${Number(cities[i]) + Number(ckey)}`;
			ckey = dat;
			DecData.cities.push(`2${dat}`);
		}
		for (var i in lawless) {
			dat = `${Number(lawless[i]) + Number(lkey)}`;
			lkey = dat;
			DecData.ll.push(`3${dat}`);
		}
		for (var i in caverns) {
			dat = `${Number(caverns[i]) + Number(cavkey)}`;
			cavkey = dat;
			DecData.cavern.push(`7${dat}`);
		}
		for (var i in portals) {
			dat = `${Number(portals[i]) + Number(pkey)}`;
			pkey = dat;
			DecData.portals.push(`8${dat}`);
		}
		for (var i in shrines) {
			dat = `${Number(shrines[i]) + Number(skey)}`;
			skey = dat;
			DecData.shrines.push(`9${dat}`);
		}
		return DecData;
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




	//rounds nubers to second digit after decimal
	function roundToTwo(num) {
		return +(`${Math.round(`${num}e+2`)}e-2`);
	}

	function errormsgBR(a, b) {
		$(a).show();
		$(b).animate({
			opacity: 1,
			bottom: "+10px"
		}, 'slow');
		errormsgBRhide(a, b);
	}

	function errormsgBRhide(a, b) {
		setTimeout(function() {
			$(b).animate({
				opacity: 0,
				bottom: "-10px"
			}, 'slow');
			$(a).fadeOut("slow");
		}, 5000);
		setTimeout(function() {
			$(a).remove();
		}, 6000);
	}
	let errmBR = 0;
	const errormessage1 = "Error, you need at least ";
	let errz = 0;

	function errorgo(j) {
		let errormsgs;
		errz++;
		const b = `errBR${errz}`;
		const c = `#${b}`;
		const d = `#${b} div`;
		errormsgs = `<tr ID = "${b}"><td><div class = "errBR">${j}<div></td></tr>`;
		$("#errorBRpopup").append(errormsgs);
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

	function errorgo(j) {
		let errormsgs;
		errmBR++;
		const b = `errBR${errmBR}`;
		const c = `#${b}`;
		const d = `#${b} div`;
		errormsgs = `<tr ID = "${b}"><td><div class = "errBR">${j}<div></td></tr>`;
		$("#errorBRpopup").append(errormsgs);
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
		const a = this.split("");
		a[index] = char;
		return a.join("");
	};
	String.prototype.decrypt = function() {
		let a = this;
		for (const i in a) {
			for (const j in key) {
				if (a.charAt(i) == key.charAt(j)) {
					a = a.replaceAt(i, j);
				}
			}
		}
		return a;
	};





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
						break; // ... and so on for all the other keys
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
				faithbonusattackpower[0] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[29]]) / 100); //guards
				faithbonusattackpower[1] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[42]]) / 100); //ballista
				faithbonusattackpower[2] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[30]]) / 100); //ranger
				faithbonusattackpower[3] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[31]]) / 100); //triari
				faithbonusattackpower[4] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[32]]) / 100); //priestess
				faithbonusattackpower[5] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[33]]) / 100); //vanq
				faithbonusattackpower[6] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[34]]) / 100); //sorc
				faithbonusattackpower[7] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[46]]) / 100); //scout
				faithbonusattackpower[8] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[35]]) / 100); //arb
				faithbonusattackpower[9] += ((Number(naerafaith) * 0.5) / 100) + (Number(Res[research[36]]) / 100); //pra
				faithbonusattackpower[10] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[37]]) / 100); //horse
				faithbonusattackpower[11] += ((Number(vexifaith) * 0.5) / 100) + (Number(Res[research[38]]) / 100); //druid
				faithbonusattackpower[12] += ((Number(cyndrosfaith) * 0.5) / 100) + (Number(Res[research[39]]) / 100); //ram
				faithbonusattackpower[13] += ((Number(cyndrosfaith) * 0.5) / 100) + (Number(Res[research[41]]) / 100); //scorp
				faithbonusattackpower[14] += ((Number(ylannafaith) * 0.5) / 100) + (Number(Res[research[44]]) / 100); //galley
				faithbonusattackpower[15] += ((Number(ylannafaith) * 0.5) / 100) + (Number(Res[research[43]]) / 100); //stinger
				faithbonusattackpower[16] += ((Number(cyndrosfaith) * 0.5) / 100) + (Number(Res[research[45]]) / 100); //warship


				//faith travel speed bonuses
				faithbonustravelspeed[1] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[12]]) / 100);
				faithbonustravelspeed[2] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				faithbonustravelspeed[3] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				faithbonustravelspeed[4] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				faithbonustravelspeed[5] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				faithbonustravelspeed[6] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[8]]) / 100);
				faithbonustravelspeed[7] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[11]]) / 100);
				faithbonustravelspeed[8] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				faithbonustravelspeed[9] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				faithbonustravelspeed[10] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				faithbonustravelspeed[11] += ((Number(ibriafaith) * 0.5) / 100) + (Number(Res[research[9]]) / 100);
				faithbonustravelspeed[12] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[12]]) / 100);
				faithbonustravelspeed[13] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[12]]) / 100);
				faithbonustravelspeed[14] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[13]]) / 100);
				faithbonustravelspeed[15] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[13]]) / 100);
				faithbonustravelspeed[16] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[13]]) / 100);
				faithbonustravelspeed[17] += ((Number(domdisfaith) * 0.5) / 100) + (Number(Res[research[14]]) / 100);
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


	$().ready(function() {


		//hiding cities in shrine planner
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
				shrinec = [
					[]
				];
				splayers = {
					name: [],
					ally: [],
					cities: []
				};
				const players = [];
				const coords = $("#coordstochatGo3").attr("data");
				const shrinex = parseInt(coords);
				const shriney = Number(coords.match(/\d+$/)[0]);
				const shrinecont = Number(Math.floor(shrinex / 100) + 10 * Math.floor(shriney / 100));
				for (var i in wdata.cities) {
					var tempx = Number(wdata.cities[i].substr(8, 3)) - 100;
					var tempy = Number(wdata.cities[i].substr(5, 3)) - 100;
					const cont = Number(Math.floor(tempx / 100) + 10 * Math.floor(tempy / 100));
					if (cont == shrinecont) {
						var dist = Math.sqrt((tempx - shrinex) * (tempx - shrinex) + (tempy - shriney) * (tempy - shriney));
						//console.log("dist");
						if (dist < 10) {
							var l = Number(wdata.cities[i].substr(11, 1));
							var pid = Number(wdata.cities[i].substr(12, l));
							var pname = pldata[pid];
							//console.log(pname);
							console.log(splayers.name.indexOf(pname), pname, splayers.name);
							var csn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
							if (csn.indexOf(Number(wdata.cities[i].charAt(4))) > -1) {
								shrinec.push(["castle", pname, 0, tempx, tempy, dist, "0", 0, 0, 0]);
							} else {
								shrinec.push(["city", pname, 0, tempx, tempy, dist, "0", 0, 0, 0]);
							}
						}
					}
				}
				shrinec.sort(function(a, b) {
					return a[5] - b[5];
				});

				let gfunkyplanwin = "<div id='gfunkyshrinePopup' class='longmenu ui-draggable ui-resizable' style=' width:70% !important; left: 360px; z-index: 3000;'>";
				gfunkyplanwin += "<div class='longwindowbgr'>";
				gfunkyplanwin += "<div class='lngwinbgtop'></div>";
				gfunkyplanwin += "<div class='lngwinbgcent'></div>";
				gfunkyplanwin += "<div class='lngwinbgbott'></div>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "<div class='longwindowcontent' style='height:98%; width:98%;'>";
				gfunkyplanwin += "<div class='popUpBar ui-draggable-handle'>";
				gfunkyplanwin += "<span class='ppspan'>Gfunky's Shrine Planner</span>";
				gfunkyplanwin += "<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 100px;'>";
				gfunkyplanwin += "<div class='button'>";
				gfunkyplanwin += "<a id ='hidec' role='button' style='color:#e1c190;'>Hide Cities</a>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "</button>";
				gfunkyplanwin += "<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 100px;'>";
				gfunkyplanwin += "<div class='button'>";
				gfunkyplanwin += "<a id ='addcity' role='button' style='color:#e1c190;'>Add Cities</a>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "</button>";
				gfunkyplanwin += "<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 100px;'>";
				gfunkyplanwin += "<div class='button'>";
				gfunkyplanwin += "<a id ='exportshrine' role='button' style='color:#c7e2e7;'>Export</a>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "</button>";
				gfunkyplanwin += "<button id='sumX' class='xbutton' onclick=$('#gfunkyshrinePopup').remove()>";
				gfunkyplanwin += "<div id='xbuttondiv'>";
				gfunkyplanwin += "<div>";
				gfunkyplanwin += "<div id='centxbuttondiv'></div>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "</button>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "<div id='shrinediv' class='beigemenutable scroll-pane' style='background:none;border: none;padding: 0px;height: AUTO !important;max-height: 85%; margin-left: auto; margin-right:right; border-radius: 6px;border: ridge #99805D;'></div>";
				gfunkyplanwin += "</div>";
				gfunkyplanwin += "</div>";
				for (var i in shrinec) {
					if (i < 100) {
						var pname = shrinec[i][1];
						if (players.indexOf(pname) == -1) {
							players.push(pname);
							$.ajax({
								url: 'includes/gPi.php',
								type: 'POST',
								async: true,
								data: {
									a: pname
								},
								success(data) {
									var pinfo = JSON.parse(data);
									splayers.name.push(pinfo.player);
									splayers.ally.push(pinfo.a);
									splayers.cities.push(pinfo.h);
									//console.log(pinfo.a,pinfo.h,pinfo.player);
								}
							});
						}
					}
				}
				setTimeout(function() {
					$("#reportsViewBox").after(gfunkyplanwin);
					$("#shrinePopup").draggable({
						handle: ".popUpBar",
						containment: "window",
						scroll: false
					});
					$("#shrinePopup").resizable();
					if (!localStorage.getItem("hidecities")) {
						//console.log("hideciies nonexists");
						localStorage.setItem("hidecities", "0");
					}
					if (localStorage.getItem("hidecities") == "1") {
						$("#hidec").html("Show Cities");
					}
					$("#hidec").click(function() {
						if (localStorage.getItem("hidecities") == "0") {
							hidecities();
							localStorage.setItem("hidecities", "1");
							$("#hidec").html("Show Cities");
							return;
						}
						if (localStorage.getItem("hidecities") != "1") {
							return;
						}
						showcities();
						localStorage.setItem("hidecities", "0");
						$("#hidec").html("Hide Cities");
					});
					updateshrine();
					let addcitypop = "<div id='addcityPopup' class='popUpBox ui-resizable ui-draggable' style='z-index:200002; width:80%;!important'>";
					addcitypop += "<div class='ppbwinbgr' >";
					addcitypop += "<div class='ppbwintop' style='position: relative !important; height:150px !important;'></div>";
					addcitypop += "<div class='ppbwincent' style='position: relative !important; height:auto !important;'></div>";
					addcitypop += "<div class='ppbwinbott' style='position: relative !important; height:150px !important;'></div>";
					addcitypop += "</div>";
					addcitypop += "<div class='ppbwincontent' style='width: auto;'>";
					addcitypop += "<div class='popUpBar ui-draggable-handle' style='margin-top:7px !Important;'>";
					addcitypop += "<span class='ppspan'>Add  Cities</span>";
					addcitypop += "<button id='sumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#addcityPopup').remove()>";
					addcitypop += "<div id='xbuttondiv'>";
					addcitypop += "<div>";
					addcitypop += "<div id='centxbuttondiv'></div>";
					addcitypop += "</div>";
					addcitypop += "</div>";
					addcitypop += "</button>";
					addcitypop += "</div>";
					addcitypop += "<div class='popUpWindow' style='margin-left: auto; margin-right:auto;'>";
					addcitypop += "<div>";
					addcitypop += "<table>";
					addcitypop += "<td>X: <input id='addx' type='number' style='width: 35px;height: 22px;font-size: 10px;'></td>";
					addcitypop += "<td>Y: <input id='addy' type='number' style='width: 35px;height: 22px;font-size: 10px;'></td>";
					addcitypop += "<td>Score: <input id='addscore' type='number' style='width: 45px;height: 22px;font-size: 10px;'></td>";
					addcitypop += "<td>Type: ";
					addcitypop += "<select id='addtype' class='greensel' style='font-size: 15px !important;height:30px;'>";
					addcitypop += "<option value='city'>City</option>";
					addcitypop += "<option value='castle'>Castle</option>";
					addcitypop += "</select>";
					addcitypop += "</td>";
					addcitypop += "<td>";
					addcitypop += "<button id='addadd' class='greenb'>Add</button>";
					addcitypop += "</td>";
					addcitypop += "</table>";
					addcitypop += "</div>";
					addcitypop += "</div>";
					addcitypop += "</div>";
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
							shrinec.push(temp);
							shrinec.sort(function(a, b) {
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
			shrinetab += "<th style='width:150px'>Change</th>";
			shrinetab += "<th>Spot Rank</th>";
			shrinetab += "<th >% Light</th>";
			shrinetab += "<th>Distance</th>";
			shrinetab += "<th>Player</th>";
			shrinetab += "<th>City</th>";
			shrinetab += "<th>Coords</th>";
			shrinetab += "<th style='width:100px'>Alliance</th>";
			shrinetab += "<th>Score</th>";
			shrinetab += "<th>Type</th>";
			shrinetab += "</thead>";
			shrinetab += "<tbody>";
			var ccounter = 0;
			const w = [];
			let wtot = 0;
			for (var i in shrinec) {
				if (i > 0) {
					var k = splayers.name.indexOf(shrinec[i][1]);
					console.log(k, splayers);
					for (const j in splayers.cities[k]) {
						if (shrinec[i][3] == splayers.cities[k][j].b && shrinec[i][4] == splayers.cities[k][j].c) {
							shrinec[i][2] = splayers.cities[k][j].h;
							if (shrinec[i][9] == 0) {
								shrinec[i][7] = splayers.cities[k][j].a;
							}
							shrinec[i][8] = splayers.ally[k];
						}
					}
					if (shrinec[i][0] == "castle") {
						ccounter++;
						if (ccounter < 17) {
							w[ccounter] = shrinec[i][7] / shrinec[i][5];
							wtot += shrinec[i][7] / (shrinec[i][5]);
						}
					}
				}
			}
			for (var i in w) {
				w[i] = Math.round(w[i] / wtot * 100);
			}
			//console.log(shrinec);
			var ccounter = 0;
			for (var i in shrinec) {
				if (i > 0) {
					var cid = shrinec[i][4] * 65_536 + Number(shrinec[i][3]);
					if (shrinec[i][0] == "castle") {
						ccounter++;
						if (ccounter < 17) {
							shrinetab += shrinec[i][6] == "0" ? "<tr style='color:purple;'>" : "<tr style='color:green;'>";
							shrinetab += "<td>";
							shrinetab += `<button data='${i}' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>`;
							shrinetab += `<button id='${i}' data='castle' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding-top: 3px;border-radius: 4px;'>City</button>`;
							shrinetab += `<button data='${i}' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>`;
							shrinetab += `<button data='${i}' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>`;
							shrinetab += "</td>";
							shrinetab += `<td>${ccounter}</td>`;
							shrinetab += `<td>${w[ccounter]}% </td>`;
						} else if (ccounter >= 17 && ccounter < 21) {
							shrinetab += "<tr>";
							shrinetab += "<td>";
							shrinetab += `<button data='${i}' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>`;
							shrinetab += `<button id='${i}' data='castle' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding-top: 3px;border-radius: 4px;'>City</button>`;
							shrinetab += `<button data='${i}' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>`;
							shrinetab += `<button data='${i}' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>`;
							shrinetab += "</td>";
							shrinetab += `<td>${ccounter}</td>`;
							shrinetab += "<td></td>";
						}
					} else {
						shrinetab += shrinec[i][6] == "0" ? "<tr style='color:grey;' data='city'>" : "<tr style='color:#74A274;'>";
						shrinetab += "<td>";
						shrinetab += `<button data='${i}' class='greenb shrineremove' style='font-size: 10px;height: 20px;padding: 3px;width: 15px;border-radius: 4px;'>x</button>`;
						shrinetab += `<button id='${i}' data='city' class='greenb shrinechange' style='font-size: 10px;height: 20px;padding: 3px;border-radius: 4px;width:45px;'>Castle</button>`;
						shrinetab += `<button data='${i}' class='greenb shrine10k' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>10k</button>`;
						shrinetab += `<button data='${i}' class='greenb shrine7pt' style='font-size: 10px;height: 20px;padding: 3px;width: 25px;border-radius: 4px;'>7pt</button>`;
						shrinetab += "</td>";
						shrinetab += "<td></td>";
						shrinetab += "<td></td>";
					}
					shrinetab += `<td>${roundToTwo(shrinec[i][5])}</td>`;
					shrinetab += `<td class='playerblink'>${shrinec[i][1]}</td>`;
					shrinetab += `<td>${shrinec[i][2]}</td>`;
					shrinetab += `<td class='coordblink shcitt' data='${cid}'>${shrinec[i][3]}:${shrinec[i][4]}</td>`;
					shrinetab += `<td class='allyblink'>${shrinec[i][8]}</td>`;
					shrinetab += `<td>${shrinec[i][7]}</td>`;
					shrinetab += `<td>${shrinec[i][0]}</td>`;

					shrinetab += "</tr>";
					if (ccounter == 20) {
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
				//console.log("hiding");
			}
			$(".shrinechange").click(function() {
				shrinec[$(this).attr("id")][0] = $(this).attr("data") == "castle" ? "city" : "castle";
				shrinec[$(this).attr("id")][6] = shrinec[$(this).attr("id")][6] == "0" ? 1 : 0;
				updateshrine();
			});
			$(".shrineremove").click(function() {
				shrinec.splice($(this).attr("data"), 1);
				updateshrine();
			});
			$(".shrine7pt").click(function() {
				if (shrinec[$(this).attr("data")][7] == 7) {
					shrinec[$(this).attr("data")][9] = 0;
					shrinec[$(this).attr("data")][6] = 0;
				} else {
					shrinec[$(this).attr("data")][7] = 7;
					shrinec[$(this).attr("data")][9] = 1;
					shrinec[$(this).attr("data")][6] = 1;
				}
				updateshrine();
			});
			$(".shrine10k").click(function() {
				if (shrinec[$(this).attr("data")][7] == 10_000) {
					shrinec[$(this).attr("data")][9] = 0;
					shrinec[$(this).attr("data")][6] = 0;
				} else {
					shrinec[$(this).attr("data")][7] = 10_000;
					shrinec[$(this).attr("data")][9] = 1;
					shrinec[$(this).attr("data")][6] = 1;
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

		// WAR COUNC BUTTONS
		//buttons
		const returnAllbut = "<button id='returnAllb' style='right: 35.6%; margin-top: 55px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Return All</button>";
		const raidbossbut = "<button id='raidbossGo' style='left: 65%;margin-left: 10px;margin-top: 15px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Boss Hunter</button>";
		const attackbut = "<button id='attackGo' style='margin-left: 25px;margin-top: 55px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Attack Sender</button>";
		const defbut = "<button id='defGo' style='left: 65%;margin-left: 10px;margin-top: 55px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'>Defense Sender</button>";
		const quickdefbut = "<button id='quickdefCityGo' style='width:96%; margin-top:2%; margin-left:2%;' class='regButton greenbuttonGo greenb'> Quick Reinforcements</button>";
		const neardefbut = "<button id='ndefGo' style='left: 4%;margin-left: 3px;margin-top: 95px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'> Nearest Defense</button>";
		const nearoffbut = "<button id='noffGo' style='right: 35.6%; margin-top: 95px;width: 150px;height: 30px !important; font-size: 12px !important; position: absolute;' class='regButton greenb'> Offensive list</button>";
		const totaldefbut = "<button id='tdefGo' style='left: 65%;margin-top: 95px;margin-left: 10px;width: 150px;height: 30px !important;font-size: 12px !important;position: absolute;' class='regButton greenb'> Defensive list</button>";
		const addtoatt = "<button id='addtoAtt' style='margin-left: 7%;margin-top: -5%;width: 40%;height: 26px !important; font-size: 9px !important;' class='regButton greenb'>Add to Attack Sender</button>";
		const addtodef = "<button id='addtoDef' style='margin-left: 7%;width: 40%;height: 26px !important; font-size: 9px !important;' class='regButton greenb'>Add to Defense Sender</button>";






		//Boss Tab
		let bosstab = "<li id='bosshuntab' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='warBossmanager' aria-labeledby='ui-id-20' aria-selected='false' aria-expanded='false'>";
		bosstab += "<a href='#warBossmanager' class='ui-tabs-anchor' role='presentation' tabindex='-1' id='ui-id-20'>Boss Hunter</a></li>";

		//Boss Page Body
		let bosstabbody = "<div id='warBossmanager' aria-labeledby='ui-id-21' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none;'>";
		bosstabbody += "<div id='fpdcdiv3'  style='margin-left: auto;margin-right: auto;font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' >Gfunky's Boss Hunter</div>";
		bosstabbody += "<br><div id='bossbox' class='beigemenutable scroll-pane' style='width: 96%; height: AUTO !important;max-height: 50%; margin-left: auto; margin-right: auto; border: 3px ridge #886f53; border-radius: 6px;'></div>";
		bosstabbody += "<br><div id='idletroops' style='width: 80%; margin-left: auto; margin-right: auto; border-radius: 6px; border: 3px ridge #99805D;'></div>";
		bosstabbody += "<br><div style='text-align:center'>";
		bosstabbody += "<button id='refreshboss' style='width: 70%;height: 30px !important; font-size: 12px !important; border-radius:6px;' class='regButton greenb'>Refresh Bosses</button>";
		bosstabbody += "</div>";
		bosstabbody += "</div>";

		//Attack tab
		let attacktab = "<li id='attacktab' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='warAttackmanager' aria-labeledby='ui-id-21' aria-selected='false' aria-expanded='false'>";
		attacktab += "<a href='#warAttackmanager' class='ui-tabs-anchor' role='presentation' tabindex='-1' id='ui-id-21'>Attack</a></li>";


		//Attack Page body
		let attacktabbody = "<div id='warAttackmanager' aria-labeledby='ui-id-21' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none;'>";
		attacktabbody += "<div id='fpdcdiv4'  style='margin-left: auto;margin-right: auto;font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' >Gfunky's Attack Sender</div>";
		attacktabbody += "<div id='attackbox' class='beigemenutable scroll-pane' style='width: 53%; height: 40%; float:left; margin-left: auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D;'>";
		attacktabbody += "<table>";
		attacktabbody += "<thead>";
		attacktabbody += "<th>Target #</th>";
		attacktabbody += "<th>X</th>";
		attacktabbody += "<th>Y</th>";
		attacktabbody += "<th>Type</th>";
		attacktabbody += "</thead>";
		attacktabbody += "<tbody>";
		for (var i = 1; i < 16; i++) {
			attacktabbody += "<tr>";
			attacktabbody += "<td>Target "+i+" </td>";
			attacktabbody += "<td><input id='t" + i + "x' type='number' style='width: 85%'></td>";
			attacktabbody += "<td><input id='t" + i + "y' type='number' style='width: 85%'></td>";
			attacktabbody += "<td>";
			attacktabbody += `<select id='type${i}' class='greensel' style='font-size: 15px !important;width:95%;height:30px;'>`;
			attacktabbody += "<option value='0'>Fake</option>";
			attacktabbody += "<option value='1'>Real</option>";
			attacktabbody += "</select>";
			attacktabbody += "</td>";
			attacktabbody += "</tr>";
		}
		attacktabbody += "</tbody>";
		attacktabbody += "</table>";
		attacktabbody += "</div>";
		attacktabbody += "<div id='picktype' class='beigemenutable scroll-pane' style='width: 43%; height: 40%; border-radius: 6px;border: 3px ridge #99805D;'></div>";
		attacktabbody += "<table style='font-size: 16px; margin-left: auto; margin-right: auto;'>";
		attacktabbody += "<tr>";
		attacktabbody += "<td>";
		attacktabbody += "<span>Use percentage of troops:</span>";
		attacktabbody += "</td>";
		attacktabbody += "<td><input id='perc' type='number' style='width: 30px'>%</td>";
		attacktabbody += "</tr>";
		attacktabbody += "<tr>";
		attacktabbody += "<td>";
		attacktabbody += "<span>Send real as:</span>";
		attacktabbody += "</td>";
		attacktabbody += "<td>";
		attacktabbody += "<select id='realtype' class='greensel' style='font-size: 15px !important;width:95%;height:30px; border-radius:6px'>";
		attacktabbody += "<option value='0'>Assault</option>";
		attacktabbody += "<option value='1'>Siege</option>";
		attacktabbody += "<option value='2'>Plunder</option>";
		attacktabbody += "<option value='3'>Scout</option>";
		attacktabbody += "</select>";
		attacktabbody += "</td>";
		attacktabbody += "</tr>";
		attacktabbody += "<tr>";
		attacktabbody += "<td>";
		attacktabbody += "<span>Send fake as:</span>";
		attacktabbody += "</td>";
		attacktabbody += "<td>";
		attacktabbody += "<select id='faketype' class='greensel' style='font-size: 15px !important;width:95%;height:30px; border-radius:6px'>";
		attacktabbody += "<option value='0'>Assault</option>";
		attacktabbody += "<option value='1'>Siege</option>";
		attacktabbody += "<option value='2'>Plunder</option>";
		attacktabbody += "<option value='3'>Scout</option>";
		attacktabbody += "</select>";
		attacktabbody += "</td>";
		attacktabbody += "</tr>";
		attacktabbody += "<tr>";
		attacktabbody += "<td><input id='retcheck' class='clsubopti' type='checkbox' checked> Return all Troops</td>";
		attacktabbody += "<td colspan=2 ><input id='retHr' type='number' style='width: 20px' value='2'> Hours before attack</td>";
		attacktabbody += "</tr>";
		attacktabbody += "<tr>";
		
		attacktabbody += "</tr>";
		attacktabbody += "</table>";
		attacktabbody += "<table style='width:96%;margin-left:2%'><thead><tr style='text-align:center; font-size:12px;'>";
		attacktabbody += "<tbody>";
		attacktabbody += "<tr>";
		attacktabbody += "<th></th>";
		attacktabbody += "<th>Hr</th>";
		attacktabbody += "<th>Min</th>";
		attacktabbody += "<th>Sec</th>";
		attacktabbody += "<th colspan='2'>Date</th>";
		attacktabbody += "</tr>";
		attacktabbody += "<tr>";
		attacktabbody += "<td>Set Time: </td>";
		attacktabbody += "<td style='text-align: center;'><input id='attackHr' type='number' style='width: 35px;height: 22px;font-size: 10px;' value='10'></td>";
		attacktabbody += "<td style='text-align: center;'><input id='attackMin' style='width: 35px;height: 22px;font-size: 10px;' type='number' value='00'></td>";
		attacktabbody += "<td style='text-align: center;'><input style='width: 35px;height: 22px;font-size: 10px;' id='attackSec' type='number' value='00'></td>";
		attacktabbody += "<td colspan='2' style='text-align: center;'><input style='width:90px;' id='attackDat' type='text' value='00/00/0000'></td>";
		attacktabbody += "</tr>";
		attacktabbody += "</tbody>";
		attacktabbody += "</table>";
		attacktabbody += "<table style='margin-left: 10%; margin-top:20px;'>";
		attacktabbody += "<tbody>";
		attacktabbody += "<tr>";
		attacktabbody += "<td style='width: 20%'>";
		attacktabbody += "<button id='Attack' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Attack!</button>";
		attacktabbody += "</td>";
		attacktabbody += "<td style='width: 20%'><button id='Aexport' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Export Order</button></td>";
		attacktabbody += "<td style='width: 20%'><button id='Aimport' style='width: 95%;height: 30px !important; font-size: 12px !important; border-radius:6px' class='regButton greenb'>Import Order</button></td>";
		attacktabbody += "</tr>";
		attacktabbody += "</tbody>";
		attacktabbody += "</table>";
		attacktabbody += "</div>";
		attacktabbody += "</div>";




		//Defend tab
		let deftab = "<li id='deftab' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='warDefmanager' aria-labeledby='ui-id-22' aria-selected='false' aria-expanded='false'>";
		deftab += "<a href='#warDefmanager' class='ui-tabs-anchor' role='presentation' tabindex='-1' id='ui-id-22'>Defend</a></li>";

		//Defend Page body
		let deftabbbody = "<div id='warDefmanager' aria-labeledby='ui-id-21' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none;'>";
		deftabbbody += " <div id='fpdcdiv5'  style='margin-left: auto;margin-right: auto;font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' >Gfunky's Defense Sender</div>";
		deftabbbody += "<div>";
		deftabbbody += "<p style='font-size: 10px;'>Defense Sender will split all the troops you choose to send according to the number of targets you input.</p>";
		deftabbbody += "</div>";
		deftabbbody += "<div id='defbox' class='beigemenutable scroll-pane' style='width: 53%; height: AUTO !important;max-height: 85%; float:left; margin-left: auto; margin-right: auto; border-radius: 6px;border: 3px ridge #99805D'>";
		deftabbbody += "<table>";
		deftabbbody += "<thead>";
		deftabbbody += "<th></th>";
		deftabbbody += "<th>X</th>";
		deftabbbody += "<th>Y</th>";
		deftabbbody += "</thead>";
		deftabbbody += "<tbody>";
		for (var i = 1; i < 15; i++) {
			deftabbbody += "<tr>";
			deftabbbody += `<td>Target ${i} </td>`;
			deftabbbody += `<td><input id='d${i}x' type='number' style='width: 85%'></td>`;
			deftabbbody += `<td><input id='d${i}y' type='number' style='width: 85%'></td>`;
			deftabbbody += "</tr>";
		}
		deftabbbody += "</tbody>";
		deftabbbody += "</table>";
		deftabbbody += "</div>";
		deftabbbody += "<div id='dpicktype' class='beigemenutable scroll-pane' style='width: 43%;height: AUTO !important;max-height: 85%; border-radius: 6px;border: 3px ridge #99805D'></div>";
		deftabbbody += "<table>";
		deftabbbody += "<tr>";
		deftabbbody += "<td>";
		deftabbbody += "<span>Use Percentage of troops:</span>";
		deftabbbody += "</td>";
		deftabbbody += "<td><input id='defperc' type='number' style='width: 30px'>%</td>";
		deftabbbody += "<td></td>";
		deftabbbody += "</tr>";
		deftabbbody += "<tr>";
		deftabbbody += "<td>";
		deftabbbody += "<span>Select Departure:</span>";
		deftabbbody += "</td>";
		deftabbbody += "<td>";
		deftabbbody += "<select id='defdeparture' class='greensel' style='font-size: 15px !important;width:95%;height:30px; border-radius:6px'>";
		deftabbbody += "<option value='0'>Now</option>";
		deftabbbody += "<option value='1'>Departure time</option>";
		deftabbbody += "<option value='2'>Arrival time</option>";
		deftabbbody += "</select>";
		deftabbbody += "</td>";
		deftabbbody += "<td></td>";
		deftabbbody += "</tr>";
		deftabbbody += "<tr id='dret'>";
		deftabbbody += "<td><input id='dretcheck' class='clsubopti' type='checkbox' checked> Return all Troops</td>";
		deftabbbody += "<td colspan=2><input id='dretHr' type='number' style='width: 20px' value='2'> Hours before departure</td>";
		deftabbbody += "</tr>";
		deftabbbody += "</table>";
		deftabbbody += "<table id='deftime' style='width:96%;margin-left:2%'>";
		deftabbbody += "<thead>";
		deftabbbody += "<tr style='text-align:center;'>";
		deftabbbody += "<th></th>";
		deftabbbody += "<th>Hr</th>";
		deftabbbody += "<th>Min</th>";
		deftabbbody += "<th>Sec</th>";
		deftabbbody += "<th colspan='2'>Date</th>";
		deftabbbody += "</tr>";
		deftabbbody += "<tr>";
		deftabbbody += "<td>Set Time: </td>";
		deftabbbody += "<td><input id='defHr' type='number' style='width: 35px;height: 22px;font-size: 10px;' value='10'></td>";
		deftabbbody += "<td><input id='defMin' style='width: 35px;height: 22px;font-size: 10px;' type='number' value='00'></td>";
		deftabbbody += "<td><input style='width: 35px;height: 22px;font-size: 10px;' id='defSec' type='number' value='00'></td>";
		deftabbbody += "<td colspan='2'><input style='width:90px;' id='defDat' type='text' value='00/00/0000'></td>";
		deftabbbody += "</tr>";
		deftabbbody += "</tbody>";
		deftabbbody += "</table>";
		deftabbbody += "<button id='Defend' style='width: 35%;height: 30px; font-size: 12px; margin:10px; border-radius:6px' class='regButton greenb'>Send Defense</button>";
		deftabbbody += "</div>";
		deftabbbody += "</div>";


		// NEAR DEFENSE TAB
		let ndeftab = "<li id='neardeftab' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='warNdefmanager' aria-labeledby='ui-id-23' aria-selected='false' aria-expanded='false'>";
		ndeftab += "<a href='#warNdefmanager' class='ui-tabs-anchor' role='presentation'>Nearby Def</a></li>";

		//Near Defense Body
		let ndeftabbody = "<div id='warNdefmanager' class='ui-tabs-panel' role='tabpanel' style='display: none;'>";
		ndeftabbody += "<div id='fpdcdiv6'  style='margin-left: auto;margin-right: auto;font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' >GFunky's Nearby Defense:</div>";
		ndeftabbody += "<table>";
		ndeftabbody += "<td>Choose city:</td>";
		ndeftabbody += "<td><input style='width: 30px;height: 22px;font-size: 10px;' id='ndefx' type='number'> : <input style='width: 30px;height: 22px;font-size: 10px;' id='ndefy' type='number'></td>";
		ndeftabbody += "<td>Showing For:</td><td id='asdfgh' class='coordblink shcitt'></td>";
		ndeftabbody += "<td>";
		ndeftabbody += "<button class='regButton greenb' id='ndefup' style='height:30px; width:70px; border-radius:6px'>Update</button>";
		ndeftabbody += "</td>";
		ndeftabbody += "</table>";
		ndeftabbody += "<div id='Ndefbox' class='beigemenutable scroll-pane' style='width: 96%;height: AUTO !important;max-height: 85%;margin-right: auto;margin-left: auto;border: 3px ridge #99805D;border-radius: 6px;'></div>";
		ndeftabbody += "</div>";
		ndeftabbody += "</div>";




		// OFFENSIVE LIST TAB

		let nofftab = "<li id='nearofftab' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='warNoffmanager' aria-labeledby='ui-id-124' aria-selected='false' aria-expanded='false'>";
		nofftab += "<a href='#warNoffmanager' class='ui-tabs-anchor' role='presentation'>Offensive TS</a></li>";

		// Offensive List Body
		let nofftabbody = "<div id='warNoffmanager' class='ui-tabs-panel'  role='tabpanel' style='display: none;'> ";
		nofftabbody += "<div id='fpdcdiv7' style='margin-left: auto;margin-right: auto;font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' >Gfunky's Offensive TS </div>";
		nofftabbody += "<table>";
		nofftabbody += "<td colspan='2'> Continent(99 for navy):</td>";
		nofftabbody += "<td><input style='width: 30px;height: 22px;font-size: 10px;' id='noffx' type='number' value='0'></td>";
		nofftabbody += "<td>";
		nofftabbody += "<button class='regButton greenb' id='noffup' style='height:30px; width:70px; border-radius:6px;'>Update</button>";
		nofftabbody += "</td>";
		nofftabbody += "<td id='asdfg' style='width:10% !important;'></td>";
		nofftabbody += "<td>";
		nofftabbody += "<button class='regButton greenb' id='mailoff' style='height:30px; width:50px; border-radius:6px;'>Mail</button>";
		nofftabbody += "</td>";
		nofftabbody += "<td><input style='width: 100px;height: 22px;font-size: 10px;' class='mailtit ui-autocomplete-input' id='mailname' autocomplete='on' maxlength='1500' type='text' value=''></td>";
		nofftabbody += "</table>";
		nofftabbody += "<div id='Noffbox' class='beigemenutable scroll-pane' style=' width: 96%;height: auto!important; max-height: 80%;margin-right: auto;margin-left: auto;border: 3px ridge #99805D;border-radius: 6px;'></div>";
		nofftabbody += "</div>";
		nofftabbody += "</div>";

		// Defensive LIST TAB

		let tdeftab = "<li id='totaldeftab' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='warTdefmanager' aria-labeledby='ui-id-125' aria-selected='false' aria-expanded='false'>";
		tdeftab += "<a href='#warTdefmanager' class='ui-tabs-anchor' role='presentation'>Defensive TS</a></li>";


		// Defensive List Body
		let tdeftabbody = "<br> <div id='warTdefmanager' class='ui-tabs-panel' role='tabpanel' style='display: none;'>";
		tdeftabbody += " <div id='fpdcdiv8'  style='margin-left: auto;margin-right: auto;font-size: 20px;color: #e1c190;font-weight: 500;padding-top: 5px;padding-bottom: 5px;border-radius: 6px;border: 3px ridge #99805D;text-align: center;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;' > Gfunky's Defensive TS</div>";
		tdeftabbody += "<table>";
		tdeftabbody += "<td colspan='2'> Continent(99 for navy):</td>";
		tdeftabbody += "<td><input style='width: 30px;height: 22px;font-size: 10px;' id='tdefx' type='number' value='0'></td>";
		tdeftabbody += "<td>";
		tdeftabbody += "<button class='regButton greenb' id='tdefup' style='height:30px; width:70px; border-radius:6px;'>Update</button>";
		tdeftabbody += "</td>";
		tdeftabbody += "<td id='asdfgd' style='width:10% !important;'></td>";
		tdeftabbody += "<td>";
		tdeftabbody += "<button class='regButton greenb' id='maildef' style='height:30px; width:50px; border-radius:6px;'>Mail</button>";
		tdeftabbody += "</td>";
		tdeftabbody += "<td><input style='width: 100px;height: 22px;font-size: 10px;' class='mailtit ui-autocomplete-input'; id='mailname2' autocomplete='on' maxlength='1500' type='text' value=''></td>";
		tdeftabbody += "</table>";
		tdeftabbody += "<div id='Tdefbox' class='beigemenutable scroll-pane' style='width: 96%;height: AUTO !important;max-height: 80%;margin-right: auto;margin-left: auto;border: 3px ridge #99805D;border-radius: 6px;;'></div>";
		tdeftabbody += "</div>";
		tdeftabbody += "</div>";


		// Import Export

		let gfunkyexpwin = "<div id='ExpImp' class='popUpBox ui-resizable ui-draggable' style='z-index:200003; width:80% !important; max-width: 544px'>";
		gfunkyexpwin += "<div class='ppbwinbgr' >";
		gfunkyexpwin += "<div class='ppbwintop' style='position: relative !important; height:150px !important;'></div>";
		gfunkyexpwin += "<div class='ppbwincent' style='position: relative !important; height:auto !important;'></div>";
		gfunkyexpwin += "<div class='ppbwinbott' style='position: relative !important; height:150px !important;'></div>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "<div class='ppbwincontent' ;height: auto;'>";
		gfunkyexpwin += "<div class='popUpBar ui-draggable-handle' style='margin-top:7px !Important;'>";
		gfunkyexpwin += "<span class='ppspan'>Import Attack Order</span>";
		gfunkyexpwin += "<button id='sumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#ExpImp').remove()>";
		gfunkyexpwin += "<div id='xbuttondiv'>";
		gfunkyexpwin += "<div>";
		gfunkyexpwin += "<div id='centxbuttondiv'></div>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "</button>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "<div id='expbody' style='margin-left:auto; margin-right: auto; text-align:center'>";
		gfunkyexpwin += "<textarea style='font-size:11px;width:90%;margin-left:auto; margin-right:auto;height:150px;' id='expstring' maxlength='300'></textarea>";
		gfunkyexpwin += "<br></br><button id='applyExp' style='width: 100px;height: 30px !important; font-size: 12px !important; float: right; margin-right:2%;' class='regButton greenb'>Apply</button>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "</div>";
		gfunkyexpwin += "</div>";


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
		$(bosstab).appendTo(ul);
		$(attacktab).appendTo(ul);
		$(deftab).appendTo(ul);
		$(ndeftab).appendTo(ul);
		$(ul).append('<br>');
		$(nofftab).appendTo(ul);
		$(tdeftab).appendTo(ul);
		$("#warcouncbox").css("width", "700px !important");
		tabs.tabs("refresh");
		$('#warCidlemanager').after(bosstabbody, attacktabbody, deftabbbody, ndeftabbody, nofftabbody, tdeftabbody);
		$("#senddefCityGo").after(quickdefbut);
		$("#deftime").hide();
		$("#dret").hide();

		$("#warCounc").append(returnAllbut, attackbut, defbut, neardefbut, nearoffbut, totaldefbut)

		$("#coordstochatGo1").after(addtoatt);
		$("#addtoAtt").after(addtodef);
		$("#loccavwarconGo").css("right", "65%");
		$("#idluniwarconGo").css("left", "34%");
		$("#idluniwarconGo").after(raidbossbut);
		$('#CheckResHora').css("right", "");
		$('#CheckResHora').css("margin-top", "135px");
		$('#CheckResHora').css("left", "35.9%");



		$("#defdeparture").change(function() {
			if ($("#defdeparture").val() == 0) {
				$("#deftime").hide();
				$("#dret").hide();
			} else {
				$("#deftime").show();
				$("#dret").show();
			}
		});

		if (localStorage.getItem('attperc')) {
			$("#perc").val(localStorage.getItem('attperc'));
		} else {
			$("#perc").val(99);
		}
		if (localStorage.getItem('defperc')) {
			$("#defperc").val(localStorage.getItem('defperc'));
		} else {
			$("#defperc").val(99);
		}
		if (localStorage.getItem('retcheck')) {
			if (localStorage.getItem('retcheck') == 1) {
				$("#retcheck").prop("checked", true);
			}
			if (localStorage.getItem('retcheck') == 0) {
				$("#retcheck").prop("checked", false);
			}
		}
		if (localStorage.getItem('dretcheck')) {
			if (localStorage.getItem('rdetcheck') == 1) {
				$("#dretcheck").prop("checked", true);
			}
			if (localStorage.getItem('dretcheck') == 0) {
				$("#dretcheck").prop("checked", false);
			}
		}
		if (localStorage.getItem('retHr')) {
			$("#retHr").val(localStorage.getItem('retHr'));
		}
		if (localStorage.getItem('dretHr')) {
			$("#dretHr").val(localStorage.getItem('dretHr'));
		}
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
			if ($("#retcheck").prop("checked") == true) {
				localStorage.setItem('retcheck', 1);
			}
			if ($("#retcheck").prop("checked") == false) {
				localStorage.setItem('retcheck', 0);
			}
			SendAttack();
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
						defobj.t.speed.push(ttspeed[i] / faithbonustravelspeed[i]);
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
		/*




		TODO: FIND REFERENCE POINT to Ui-id-115 Alliance Temple Ranking



		*/


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
		$('#noffGo').click(function() {
			$("#warcouncbox").show();
			tabs.tabs("option", "active", 6);
			$("#nearofftab").trigger({
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
					defobj.t.speed.push(ttspeed[i] / faithbonustravelspeed[i]);
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
		$("#noffup").click(function() {
			$.ajax({
				url: 'overview/trpover.php',
				type: 'POST',
				async: true,
				success(data) {
					const t = JSON.parse(data);
					nearofftable(t);
				}
			});
		});
		$("#tdefup").click(function() {
			$.ajax({
				url: 'overview/trpover.php',
				type: 'POST',
				async: true,
				success(data) {
					const t = JSON.parse(data);
					totaldeftable(t);
				}
			});
		});

		$("#Aexport").click(function() {
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
		$("#Aimport").click(function() {
			$("body").append(gfunkyexpwin);
			$("#ExpImp").draggable({
				handle: ".popUpBar",
				containment: "window",
				scroll: false
			});
			$("#applyExp").click(function() {
				Aimp($("#expstring").val());
				$("#ExpImp").remove();
			});
		});

		function Aimp(str) {
			const Aexp = JSON.parse(str);
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
						tempts += tempt[j] * ttts[j];
					}
					var tempth = 0; //TS Home
					for (var h in temph) {
						tempth += temph[h] * ttts[h];
					}
					var tspeed = 0;
					for (var j in tempt) {
						if (tempt[j] > 0 && Number((ttspeed[j] / faithbonustravelspeed[j]).toFixed(2)) > tspeed) {
							tspeed = Number((ttspeed[j] / faithbonustravelspeed[j]).toFixed(2));
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
						tempts += tempt[j] * ttts[j];
					}
					var tempth = 0; //TS Home
					for (var h in temph) {
						tempth += temph[h] * ttts[h];
					}
					var tspeed = 0;
					for (var j in tempt) {
						if (tempt[j] > 0 && Number((ttspeed[j] / faithbonustravelspeed[j]).toFixed(2)) > tspeed) {
							tspeed = Number((ttspeed[j] / faithbonustravelspeed[j]).toFixed(2));
						}
					}
					var timetssp = (tdist * tspeed) + 60;
					cit.push([tempx, tempy, tdist, t[i].c, tempt, tempts, tempth, tid, timetssp]);
				}
			}
			cit.sort(function(a, b) {
				return a[8] - b[8];
			});
			let neardeftab = "<table id='ndeftable'><thead><th></th><th>City</th><th>Coords</th><th>TS Total</th><th>TS Home</th><th id='ndefdist'>Travel Time</th><th>type</th></thead><tbody>";
			for (var i in cit) {
				if (i > 0) {
					var h1 = Math.floor(cit[i][8] / 60);
					var m1 = Math.floor(cit[i][8] % 60);
					h1 = h1 < 10 ? `0${h1}` : h1;
					m1 = m1 < 10 ? `0${m1}` : m1;
					neardeftab += `<tr><td><button class='greenb chcity' id='cityGoTowm' a='${cit[i][7]}'>Go To</button></td><td>${cit[i][3]}</td><td class='coordblink shcitt' data='${cit[i][7]}'>${cit[i][0]}:${cit[i][1]}</td>`;
					//style='font-size: 9px;border-radius: 10px;width: 85%;height: 22px;padding: 1;#c7e2e7-space: nowrap;'
					neardeftab += `<td>${cit[i][5]}</td><td>${cit[i][6]}</td><td>${h1}:${m1}</td><td><table>`;
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

		//Near Offense Table
		function nearofftable(t) {
			const contoff = Number($("#noffx").val());
			const cit = [
				[]
			];

			const troopmail = [
				[]
			];
			let counteroff = 0;
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
						tempts += tempt[j] * ttts[j];
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
						tempts += tempt[j] * ttts[j];
					}
					troopmail.push([tempt, tempts]);
					cit.push([tempx, tempy, tempts, tempt, t[i].c, tid]);
				}
			}
			cit.sort(function(a, b) {
				return b[2] - a[2];
			});
			$("#asdfg").text(`Total:${counteroff}`);
			let nearofftab = "<table id='nofftable'>";
			nearofftab += "<thead>";
			nearofftab += "<th></th>";
			nearofftab += "<th>City</th>";
			nearofftab += "<th>Coords</th>";
			nearofftab += "<th>TS</th>";
			nearofftab += "<th>type</th>";
			nearofftab += "</thead>";
			nearofftab += "<tbody>";
			for (var i in cit) {
				if (i > 0) {
					nearofftab += "<tr>";
					nearofftab += "<td>";
					nearofftab += `<button class='greenb chcity' id='cityGoTowm' a='${cit[i][5]}'>Go To</button>`;
					nearofftab += "</td>";
					nearofftab += `<td>${cit[i][4]}</td>`;
					nearofftab += `<td class='coordblink shcitt' data='${cit[i][5]}'>${cit[i][0]}:${cit[i][1]}</td>`;

					nearofftab += `<td>${cit[i][2]}</td>`;
					nearofftab += "<td>";
					nearofftab += "<table>";
					for (var j in cit[i][3]) {
						if (cit[i][3][j] > 0) {
							nearofftab += "<td>";
							nearofftab += `<div class='${tpicdiv20[j]}'></div>`;
							nearofftab += "</td>";
						}
					}
					nearofftab += "</table>";
					nearofftab += "</td>";
					nearofftab += "</tr>";
				}
			}
			nearofftab += "</tbody>";
			nearofftab += "</table>";

			$("#Noffbox").html(nearofftab);
			$("#nofftable td").css("text-align", "center");
			$("#nofftable td").css("height", "26px");

			const nearoffenseexport = document.getElementById('nofftable');
			sorttable.makeSortable(nearoffenseexport);

			troopmail.sort(function(a, b) {
				return b[1] - a[1];
			});
			$("#mailoff").click(function() {
				//$("#mailComposeBox").show();
				let conttemp = $("#noffx").val();
				let gamemail = `<p>Number of offensive castles is '${counteroff}'</p>`;
				gamemail += '<table class="mce-item-table" style="width: 266.273px; "data-mce-style="width: 266.273px; "border="1" data-mce-selected="1">';
				gamemail += '<thead>';
				gamemail += '<th>Number</th>';
				gamemail += '<th>Troop</th>';
				gamemail += '<th>TS Amount</th>';
				gamemail += '</thead>';
				gamemail += '<tbody>';
				for (const i in troopmail) {
					if (i > 0) {
						gamemail += '<tr>';
						gamemail += `<td style="text-align: center;" data-mce-style="text-align: center;">${i}</td>`;
						gamemail += '<td style="text-align: center;" data-mce-style="text-align: center;">';
						gamemail += '<table>';
						for (const j in troopmail[i][0]) {
							if (troopmail[i][0][j] > 0) {
								gamemail += `<td>${ttname[j]}</td>`;
							}
						}
						gamemail += '</table>';
						gamemail += '</td>';
						gamemail += `<td style="text-align: center;" data-mce-style="text-align: center;">${troopmail[i][1]}</td>`;
						gamemail += '</tr>';
					}
				}
				gamemail += "</tbody>";
				gamemail += "</table>";

				if (conttemp == 99) {
					conttemp = "Navy";
				}
				$("#mnlsp")[0].click();
				$("#composeButton")[0].click();
				const temppo = $("#mailname").val();
				$("#mailToto").val(temppo);
				$("#mailToSub").val(`${conttemp} Offensive TS`);
				const $iframe = $('#mailBody_ifr');
				$iframe.ready(function() {
					$iframe.contents().find("body").append(gamemail);
				});
			});
		}

		function totaldeftable(t) {
			const contdef = Number($("#tdefx").val());
			const cit = [
				[]
			];
			const deftroopmail = [
				[]
			];

			let counterdef = 0;
			for (var i in t) {
				const tid = t[i].id;
				const tempx = Number(tid % 65_536);
				const tempy = Number((tid - tempx) / 65_536);
				const tcont = Number(Math.floor(tempx / 100) + 10 * Math.floor(tempy / 100));
				if (contdef == tcont && (t[i].Ballista_total > 0 || t[i].Ranger_total > 0 || t[i].Triari_total > 0 || t[i].Priestess_total || t[i].Arbalist_total > 0 || t[i].Praetor_total > 0)) {
					counterdef++;
					var tempt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					tempt[1] = t[i].Ballista_total;
					tempt[2] = t[i].Ranger_total;
					tempt[3] = t[i].Triari_total;
					tempt[4] = t[i].Priestess_total;
					tempt[8] = t[i].Arbalist_total;
					tempt[9] = t[i].Praetor_total;
					var tempts = 0;
					for (var j in tempt) {
						tempts += tempt[j] * ttts[j];
					}
					deftroopmail.push([tempt, tempts]);
					cit.push([tempx, tempy, tempts, tempt, t[i].c, tid]);
				}
				if (contdef == "99" && (t[i].Stinger_total > 0 || t[i].Galley_total > 0)) {
					counterdef++;
					var tempt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					tempt[1] = t[i].Ballista_total;
					tempt[2] = t[i].Ranger_total;
					tempt[3] = t[i].Triari_total;
					tempt[4] = t[i].Priestess_total;
					tempt[8] = t[i].Arbalist_total;
					tempt[9] = t[i].Praetor_total;
					tempt[14] = t[i].Galley_total;
					tempt[15] = t[i].Stinger_total;
					var tempts = 0;
					for (var j in tempt) {
						tempts += tempt[j] * ttts[j];
					}
					deftroopmail.push([tempt, tempts]);
					cit.push([tempx, tempy, tempts, tempt, t[i].c, tid]);
				}
			}

			cit.sort(function(a, b) {
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
					totaldeftab += `<td>${cit[i][2]}</td>`;
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


			deftroopmail.sort(function(a, b) {
				return b[1] - a[1];
			});
			$("#maildef").click(function() {
				//$("#mailComposeBox").show();
				let conttemp = $("#tdefx").val();
				let mailto = `<p>Number of defensive castles is '${counterdef}'</p>`;
				mailto += '<table class="mce-item-table" style="width: 266.273px; "data-mce-style="width: 266.273px; "border="1" data-mce-selected="1">';
				mailto += '<thead>';
				mailto += '<th>Number</th>';
				mailto += '<th>Troop</th>';
				mailto += '<th>TS Amount</th>';
				mailto += '</thead>';
				mailto += '<tbody>';
				for (const i in deftroopmail) {
					if (i > 0) {
						mailto += '<tr>';
						mailto += `<td style="text-align: center;" data-mce-style="text-align: center;">${i}</td>`;
						mailto += '<td style="text-align: center;" data-mce-style="text-align: center;">';
						mailto += '<table>';
						for (const j in deftroopmail[i][0]) {
							if (deftroopmail[i][0][j] > 0) {
								mailto += `<td>${ttname[j]}</td>`;
							}
						}
						mailto += '</table>';
						mailto += '</td>';
						mailto += `<td style="text-align: center;" data-mce-style="text-align: center;">${deftroopmail[i][1]}</td>`;
						mailto += '</tr>';
					}
				}
				mailto += "</tbody>";
				mailto += "</table>";


				if (conttemp == 99) {
					conttemp = "Navy";
				}
				$("#mnlsp")[0].click();
				$("#composeButton")[0].click();
				const temppo = $("#mailname2").val();
				$("#mailToto").val(temppo);
				$("#mailToSub").val(`${conttemp} Defensive TS`);
				const $iframe = $('#mailBody_ifr');
				$iframe.ready(function() {
					$iframe.contents().find("body").append(mailto);
				});
			});
		}
	});
	//END OF WAR COUNC GFUNKY - Primary Functions
	//WAR COUNC Secondary Functions

	//import attack orders


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
			defendtime = ttspeed[14] / faithbonustravelspeed[14] * maxdist;
			//console.log(defendtime);
			const galleydefense = t.type.indexOf(14);
			if (defobj.dep == 0) {
				var galnumb = Math.floor(t.home[galleydefense] / tarnumb);
			} else {
				var galnumb = Math.floor(t.tot[galleydefense] / tarnumb);
			}
			let maxts = 0;
			for (var i in t.home) {
				if (i != galleydefense && t.use[i] == 1 && t.type[i] != 15) {
					maxts += defobj.dep == 0 ? Math.floor(t.home[i] * ttts[t.type[i]] / tarnumb) : Math.floor(t.tot[i] * ttts[t.type[i]] / tarnumb);
				}
			}
			if (maxts <= galnumb * 500) {
				t.amount[galleydefense] = Math.ceil(maxts / 500);
				for (var i in t.home) {
					if (i != galleydefense && t.use[i] == 1) {
						t.amount[i] = defobj.dep == 0 ? Math.floor(t.home[i] / tarnumb) : Math.floor(t.tot[i] / tarnumb);
					}
				}
			} else {
				const rat = galnumb * 500 / maxts;
				t.amount[galleydefense] = galnumb;
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
		//console.log(t);
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
				//console.log(defobj.min,defobj.hr,defobj.sec);
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
			//console.log(poll2.OGA);
			$("#commandsPopUpBox").hide();
			if (defobj.ret == 1) {
				$(".toptdinncommtbl1:first")[0].click();
				setTimeout(function() {
					$("#outgoingPopUpBox").hide();
				}, 500);
				let minddate = new Date();
				let first = true;
				for (const i in poll2.OGA) {
					//console.log(targets.cstr,poll2.OGA[i][5]);
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
							//console.log(time[1]);
							if (time[1] == "Tomorrow") {
								minddate.setDate(minddate.getDate() + 1);
								//console.log("tmrw");
							} else if (time[1] != "Today") {
								var ddate = time[1].split("/");
								//console.log(ddate);
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
								//console.log("tmrw");
								d.setDate(minddate.getDate() + 1);
							} else if (time[1] != "Today") {
								var ddate = time[1].split("/");
								//console.log(ddate);
								d.setDate(ddate[1]);
								d.setMonth(ddate[0]);
							}
							//console.log(d,minddate);
							if (d < minddate) {
								minddate = d;
							}
						}
					}
				}
				minddate.setHours(minddate.getHours() - defobj.rettime);
				//console.log(minddate);
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
				//console.log(retdate);
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
		for (var i in cdata.tc) {
			if (cdata.tc[i]) {
				if (i == 7) {
					totalscouts = cdata.tc[7];
				} else {
					t.home.push(cdata.tc[i]);
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
			ttseltab += "<tr>";
			ttseltab += "<td style='height:40px;'>";
			ttseltab += `<div class='${tpicdiv[t.type[i]]}'></div>`;
			ttseltab += "</td>";
			ttseltab += `<td style='text-align: center;'><input id='usereal${t.type[i]}' class='clsubopti' type='checkbox' checked></td>`;
			ttseltab += `<td style='text-align: center;'><input id='usefake${t.type[i]}' class='clsubopti' type='checkbox' checked></td>`;
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
		for (var i in cdata.tc) {
			if (cdata.tc[i]) {
				t.home.push(cdata.tc[i]);
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
			//The Commented out stuff is for Written Names instead of Pictures of Units
			//ttseltab+="<tr>";
			//ttseltab+="<td>"+ttname[t.type[i]]+"</td>";
			//ttseltab+="<td><input id='usereal"+t.type[i]+"' class='clsubopti' type='checkbox' checked></td>";
			//ttseltab+="</tr>";
			ttseltab += "<tr>";
			ttseltab += "<td style='height:40px;'>";
			ttseltab += `<div class='${tpicdiv[t.type[i]]}'></div>`;
			ttseltab += "</td>";
			ttseltab += `<td style='text-align: center;'><input id='usedef${t.type[i]}' class='clsubopti' type='checkbox' checked></td>`;
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
	 function SendAttack() {
        $("#commandsPopUpBox").show();
        var commandtabs=$("#commandsdiv").tabs();
        var pvptabs=$("#pvpTab").tabs();
        $("#pvptabb")[0].click();
        commandtabs.tabs( "option", "active", 1 );
        var targets={x:[],y:[],real:[],dist:[],cstr:[]};
        var fakenumb=0;
        var realnumb=0;
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
                if ($("#type"+i).val()==1) {realnumb+=1;}
                else {fakenumb+=1;}
                targets.dist.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
            }
        }
   //SCOUTS SECTION
        var scouttts; //Scout Total TS
        var t={home:[],type:[],real:[],fake:[],speed:[],scoutfake:[],scoutreal:[]};
        for (var i in cdata.tc) {
            if (cdata.tc[i]) {
                if(i==7){scouttts=cdata.tc[7];}
                else{
                    t.home.push(Math.ceil(cdata.tc[i]*Number($("#perc").val())/100));
                    t.type.push(Number(i));
                    if ($("#usereal"+i).prop( "checked")===true) {
                        t.speed.push(ttspeed[i]/faithbonustravelspeed[i]);
                    }
                    else {t.speed.push(0);}
                }
            }
        }
        var maxdist=Math.max.apply(Math, targets.dist);
        var time;
        var faketss;// Fake TS Scouts
        var fakeg; // Fake Galley Amount
        var tscbr=cdata.tt;
		if(tscbr<20000){faketss=1;fakeg=1;}
        else if(tscbr<40000){faketss=200;fakeg=1;}//1 600, 2 1200, 3 1800, 4 2400, 5 3000
        else if(tscbr<60000){faketss=500;fakeg=1;}
        else if(tscbr<80000){faketss=800;fakeg=2;}
        else if(tscbr<100000){faketss=1000;fakeg=2;}
        else if(tscbr<120000){faketss=1200;fakeg=2;}
        else if(tscbr<160000){faketss=1600;fakeg=3;}
        else if(tscbr<200000){faketss=2000;fakeg=4;}
        else if(tscbr<240000){faketss=2500;fakeg=5;}
        else{faketss=3000;fakeg=5;}
        if (scouttts>0){
            if($("#realtype").val()==3 && $("#faketype").val()==3) {
                if($("#usereal14").prop( "checked")===true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutfake[0]=fakeg*250;
                        t.scoutreal[0]=Math.floor((scouttts-((fakeg*250)*fakenumb))/realnumb);
                    } else{
                        t.scoutfake[0]=faketss/2;
                        t.scoutreal[0]=Math.floor((scouttts-((faketss/2)*fakenumb))/realnumb);
                    }
                } else if($("#usereal14").prop( "checked")!==true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutfake[0]=fakeg*250;
                        t.scoutreal[0]=Math.floor((scouttts-((fakeg*250)*fakenumb))/realnumb);
                    } else{
                        t.scoutfake[0]=faketss/2;
                        t.scoutreal[0]=Math.floor((scouttts-((faketss/2)*fakenumb))/realnumb);
                    }
                }
            }
            if($("#realtype").val()==3 && $("#faketype").val()!=3) {
                if($("#usereal14").prop( "checked")===true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutreal[0]=Math.floor(scouttts/realnumb);
                    } else{
                        t.scoutreal[0]=Math.floor(scouttts/realnumb);
                    }
                } else{
                        t.scoutreal[0]=Math.floor(scouttts/realnumb);
                }
            }
            if($("#realtype").val()!=3 && $("#faketype").val()==3){
                if($("#usereal14").prop( "checked")===true){
                    if($("#usefake14").prop( "checked")===true){
                        t.scoutfake[0]=fakeg*250;
                    } else{
                            t.scoutfake[0]=faketss/2;
                    }
                } else if($("#usereal14").prop( "checked")!==true){
                    if($("#usefake14").prop( "checked")===true){
                    t.scoutfak[0]=fakeg*250;
                    } else{
                        t.scoutfake[0]=faketss/2;
                    }
                }
            }
        }


//Galley Section (With Senator and Warships)
        if (t.type.indexOf(14)>-1 && $("#usereal14").prop( "checked")===true) {
            time=ttspeed[14]/faithbonustravelspeed[14]*maxdist;
            //console.log(time);
            var gali=t.type.indexOf(14); // Designating "Gali" as Troop 14 which is Galley
            var galcap=500*galnumb;
            var nongalts=0; // Non Galley TS
            var galnumb=Math.floor(t.home[gali]-fakeg*fakenumb/realnumb); // Determining how many

            for (var i in t.home) {
                if (t.type[i]==14 && t.type[i]==17 && t.type[i]==16) {
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
                                if (t.home[i]>=fakenumb+realnumb) {
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

        //Warship Info
                    if (t.type[i]==16 ) {
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                t.fake[i]=Math.ceil(faketss*t.home[i]);
                                t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakenumb)/realnumb);
                            } else {
                                t.real[i]=Math.floor((t.home[i])/realnumb);
                            }
                        }
                    }
                }
            }
    //Does Not include Galley & Does Not Include Senator
            for (var i in t.home) {
                if (i!=gali && t.type[i]!=17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            nongalts+=ttts[t.type[i]]*(t.home[i]-Math.ceil((fakeg*500)/ttts[t.type[i]])*fakenumb)/realnumb;
                        } else {nongalts+=ttts[t.type[i]]*(t.home[i])/realnumb;}
                    }
                }
    //Includes Senator
                if (t.type[i]==17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            if (t.home[i]>=fakenumb+realnumb) {
                                nongalts+=1;
                            } else {
                                nongalts+=1;
                            }
                        } else {
                            nongalts+=1;
                        }
                    }
                }
            }
            var fakerat=0;
            for (var i in t.home) {
                if (i!=gali) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        fakerat+=ttts[t.type[i]]*t.home[i];
                    }
                }
            }
    // number of senators to send on each fake/reak attack
            for (var i in t.home) {
                if (i!=gali && t.type[i]!=17) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            t.fake[i]=Math.ceil((fakeg*500)*t.home[i]/fakerat);
                        }
                    }

                    if (t.type[i]==17) {
                        if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                            if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                                if (t.home[i]>=fakenumb+realnumb) {
                                    t.fake[i]=1;
                                    t.real[i]=1;
                                } else {
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
            for (var i in t.home) {
                if (i!=gali && t.type[i]!=17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            if (nongalts>galcap) {
                                t.real[i]=Math.floor(galcap/nongalts*(t.home[i]-t.fake[i]*fakenumb)/realnumb);
                            } else {
                                t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakenumb)/realnumb);
                            }
                        } else {
                            if (nongalts>galcap) {
                                t.real[i]=Math.floor(galcap/nongalts*(t.home[i])/realnumb);
                            } else {
                                t.real[i]=Math.floor((t.home[i])/realnumb);
                            }
                            t.fake[i]=0;
                        }
                    }
                }
            }
            t.real[gali]=Math.ceil(nongalts/500);
            t.fake[gali]=fakeg;
        }
        else {
            var fakerat=0;
            time=Math.max.apply(Math, t.speed)*maxdist;
            //Adding all the TS standing home with fake ticked into fakerat
            for (var i in t.home) {
                if (t.type[i]!==17) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        fakerat+=ttts[t.type[i]]*t.home[i];
                    }
                }
            }
            //getting fake TS proportions of each troop type in a fake attack and moving them into t.fake[i]
            for (var i in t.home) {
                if (t.type[i]!=17) {
                    if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                        t.fake[i]=Math.ceil(faketss*t.home[i]/fakerat);
                    }
                }
            }

            //subracting fake numbers to get real numbers and distributing senator too
            for (var i in t.home) {
                if (t.type[i]!=17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                           t.real[i]=Math.floor((t.home[i]-t.fake[i]*fakenumb)/realnumb);
                        } else {
                                t.real[i]=Math.floor((t.home[i])/realnumb);
                        }
                    } else {t.real[i]=0;}
                }

            //senator numbers
                if (t.type[i]==17) {
                    if ($("#usereal"+t.type[i]).prop( "checked")===true) {
                        if ($("#usefake"+t.type[i]).prop( "checked")===true) {
                            if (t.home[i]>=fakenumb+realnumb) {
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
			////console.log(poll2.OGA);
			$("#commandsPopUpBox").hide();
			if ($("#retcheck").prop("checked") == true) {
				$(".toptdinncommtbl1:first")[0].click();
				setTimeout(function() {
					$("#outgoingPopUpBox").hide();
				}, 500);
				let minddate = new Date();
				let first = true;
				for (const i in poll2.OGA) {
					////console.log(targets.cstr,poll2.OGA[i][5]);
					if (targets.cstr.includes(poll2.OGA[i][5])) {
						if (first) {
							first = false;
							var a = poll2.OGA[i][6].substr(30);
							var b = a.substr(0, a.indexOf('<'));
							var time = b.split(" ");
							var ttime = time[2].split(":");
							minddate.setHours(Number(ttime[0]));
							minddate.setMinutes(Number(ttime[1]));
							minddate.setSeconds(Number(ttime[2]));
							////console.log(time[1]);
							if (time[1] == "Tomorrow") {
								minddate.setDate(minddate.getDate() + 1);
								////console.log("tmrw");
							} else if (time[1] != "Today") {
								var ddate = time[1].split("/");
								//console.log(ddate);
								minddate.setDate(Number(ddate[1]));
								minddate.setMonth(Number(ddate[0] - 1));
								////console.log(minddate);
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
								////console.log("tmrw");
								d.setDate(minddate.getDate() + 1);
							} else if (time[1] != "Today") {
								var ddate = time[1].split("/");
								////console.log(ddate);
								d.setDate(ddate[1]);
								d.setMonth(ddate[0] - 1);
								////console.log(minddate);
							}
							////console.log(d,minddate);
							if (d < minddate) {
								minddate = d;
							}
						}
					}
				}
				minddate.setHours(minddate.getHours() - Number($("#retHr").val()));
				////console.log(minddate);
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
				////console.log(retdate);
				$("#raidrettimesela").val(3).change();
				$("#raidrettimeselinp").val(retdate);
				$("#doneOGAll")[0].click();
				alert("Attack set and troops returned");
				return;
			}
			alert("Attack set");
		}
	}
	/*

	END SEND Attack Function

	*/





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


	//Buttons convert,fill,demolish,
	//3246-3459

	$().ready(function() {
		let gfunkyquickbutton = "";
		gfunkyquickbutton += "<div id='quickbuildings' style=' width: 290px; margin-top: 10px; margin-left: auto; margin-right: auto; border: 3px solid #886f53; align-content: center;'>";
		gfunkyquickbutton += "<div id='qb23' class='queueBar'>";
		gfunkyquickbutton += "<div id='qbcbut' class='tradeqarr2'>";
		gfunkyquickbutton += "<div></div>";
		gfunkyquickbutton += "</div>";
		gfunkyquickbutton += "<span class='qbspan'>Gfunky's Quick Buttons</span>";
		gfunkyquickbutton += "</div>";
		gfunkyquickbutton += "<div id='qbwin' class='queueWindow' style='display: block; padding-top: 15px; padding-bottom: 15px;' >";
		gfunkyquickbutton += "<button id='fb1' style='height:28px; width:46%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Councillors ON/OFF</button>";
		gfunkyquickbutton += "<button id='fb2' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Refine</button>";
		gfunkyquickbutton += "<button id='fb3' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Raid</button>";
		gfunkyquickbutton += "<button id='fb5' style='height:28px; width:46%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Clear Resources</button>";
		gfunkyquickbutton += "<button id='fb7' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Upgrade</button>";
		gfunkyquickbutton += "<button id='fb8' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Up + Que</button>";
		gfunkyquickbutton += "<button id='fb6' style='height:28px; width:46%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Gfunky+ Changelog</button>";
		gfunkyquickbutton += "<button id='fb9' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Downgrade</button>";
		gfunkyquickbutton += "<button id='fb4' style='height:28px; width:23%; margin-left:4px; margin-bottom:5px ; border: 1px; border-radius:4px ; font-size: 9px !important; padding: 0px; color:#e1c190;' class='regButton greenb'>Demolish</button>";


		

		gfunkyquickbutton += "</div>";
		gfunkyquickbutton += "</div>";
		gfunkyquickbutton += "</div>";
		$("#qbDiv").after(bdcountbox);

		var bdcountbox = "<div id='currentbuildings' style=' width: 290px; margin-top: 10px; margin-left: auto; margin-right: auto; border: 3px solid #886f53; align-content: center;'>";
		bdcountbox += "<div id='bdcountbar' class='queueBar'>";
		bdcountbox += "<div id='bdcountbut' class='tradeqarr2'>";
		bdcountbox += "<div></div>";
		bdcountbox += "</div>";
		bdcountbox += "<span class='qbspan'>Gfunky's Current Buildings</span>";
		bdcountbox += "<div id='numbdleft' class='barRightFloat tooltipstered'>0</div>";
		bdcountbox += "</div>";
		bdcountbox += "<div id='bdcountwin' class='queueWindow' style='display: block; padding-top: 15px; padding-bottom: 15px;' ></div>";
		bdcountbox += "</div>";
		$("#qbDiv").before(gfunkyquickbutton);


		$('#sortbut').after(convbut);
		
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
		$("#fb9").click(function() {
			if (autodownon == 0) {
				autodownon = 1;
				$(this).removeClass('greenb');
				$(this).addClass('activeAllyButton');
			} else {
				autodownon = 0;
				$(this).removeClass('activeAllyButton');
				$(this).addClass('greenb');
			}
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

		let gfunkyoverlay = 0;
		$("#fb11").click(function() {
			const $this = $(this);
			const isActive = $this.hasClass("activeAllyButton");
			const opdat = {
				a: JSON.stringify(poll2.player.opt)
			};

			gfunkyoverlay = isActive ? 0 : 1;
			$this.toggleClass("activeAllyButton", !isActive).toggleClass("greenb", isActive);

			$("#optionsGo").click();
			$("#ovlslider > span").css("left", "0%").addClass("ui-state-active");
			$("#overlaytext").text("0%");

			$.ajax({
				url: "includes/poll2.php",
				type: "POST",
				async: true,
				data: opdat,
			});

			$("#savesetchGo").click();
			setTimeout(function() {
				$("#optionsXbutton").click();
			});
		});



		$("#centarrowNextDiv, #centarrowPrevDiv, #ddctd, #qbuildtbButton").click(function() {
			["fb4", "fb7", "fb8", "fb9"].forEach(function(id) {
				$("#" + id).removeClass("redb").addClass("greenb");
			});

			autodemoon = autoupon = autoupqon = autodownon = 0;
		});
		$("#city_map").click(function() {
			if (autodemoon == 1) {
				$("#buildingDemolishButton").trigger({
					type: "click",
					originalEvent: "1"
				});
			}
			if (autoupon == 1) {
				$("#buildingUpgradeButton").trigger({
					type: "click",
					originalEvent: "1"
				});
			}
			if (autoupqon == 1) {
				$("#queuecouncupgradbut").trigger({
					type: "click",
					originalEvent: "1"
				});
			}
			if (autodownon == 1) {
				$("#buildingDowngradeButton").trigger({
					type: "click",
					originalEvent: "1"
				});
			}
		});

		const overviewbut = "<button class='tabButton' id='gfoverview'>Overviews</button>";
		$("#items").after(overviewbut);
		$("#gfoverview").click(function() {
			if (gfoverview) {
				opengfunkyoverviewwin();
			} else {
				$("#gfunkyoverviewwin").toggle(gfoverview);
			}
		});
		$("#gfunkyoverviewwin").click(function() {
			//console.log("popsum");
		});

		$("#recruitmentQueue").before(bdcountbox);
		$("#bdcountbut").click(function() {
			const $bdcountwin = $("#bdcountwin");
			const $bdcountbut = $(this);

			if (bdcountshow) {
				$bdcountwin.hide();
				$bdcountbut.removeClass("tradeqarr2").addClass("tradeqarr1");
				bdcountshow = false;
				return;
			}

			$bdcountwin.show();
			$bdcountbut.removeClass("tradeqarr1").addClass("tradeqarr2");
			bdcountshow = true;
		});
		$("#qbcbut").click(function() {
			const $qbwin = $("#qbwin");
			const $qbcbut = $(this);

			if (qbcshow) {
				$qbwin.hide();
				$qbcbut.removeClass("tradeqarr2").addClass("tradeqarr1");
				qbcshow = false;
				return;
			}

			$qbwin.show();
			$qbcbut.removeClass("tradeqarr1").addClass("tradeqarr2");
			qbcshow = true;
		});


		const wood50 = "<td style='width: 50px'><button class='brownb' id='wood50' >Add 50%</button></td>";
		const wood45 = "<td style='width: 50px'><button class='brownb' id='wood45' >Add 45%</button></td>";
		const stone50 = "<td  style='width: 75px'><button class='brownb' id='stone50'>Add 50%</button></td>";
		const stone45 = "<td style='width: 75px'><button class='brownb' id='stone45' >Add 45%</button></td>";
		const iron50 = "<td style='width: 75px'><button class='brownb' id='iron50' >Add 50%</button></td>";
		const iron45 = "<td style='width: 75px'><button class='brownb' id='iron45' >Add 45%</button></td>";
		const food50 = "<td style='width: 50px'><button class='brownb' id='food50' >Add 50%</button></td>";
		const food45 = "<td style='width: 50px'><button class='brownb' id='food45' >Add 45%</button></td>";

		$("#woodmaxbutton").parent().after(wood50);
		$("#woodmaxbutton").parent().after(wood45);
		$("#stonemaxbutton").parent().after(stone50);
		$("#stonemaxbutton").parent().after(stone45)
		$("#ironmaxbutton").parent().after(iron50);
		$("#ironmaxbutton").parent().after(iron45);
		$("#foodmaxbutton").parent().after(food45);
		$("#foodmaxbutton").parent().after(food50);

		function setResourceAmount(resource, percent) {
			const resMaxAmount = Number($(`#max${resource}send`).text().replace(/,/g, ""));
			const carts = $("#landseasendres").val() === "1" ?
				Math.floor(Number($("#availcartscity").text()) * percent) * 1000 :
				Math.floor(Number($("#availshipscity").text()) * percent) * 10_000;
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










	//Building count
	function makebuildcount() {
		$("#bdtable").remove();
		const currentbd = {
			name: [],
			bid: [],
			count: []
		};
		let bdNumber = 0;

		buildingdata.forEach(building => {
			const index = buildings.bid.findIndex(bid => bid === building.bid);
			if (index > -1) {
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
		let bdtable = "<table id='bdtable' style='margin-left: auto; margin-right: auto;'>";
		bdtable += "<tbody>";
		bdtable += "<tr>";
		currentbd.bid.forEach((bid, i) => {

			if (i < 9 || ((i > 9 && i < 19) || (i > 19 && i < 29))) {
				bdtable += `<td style='text-align:center; width:30px; height:30px; #c7e2e7-space:normal;'>`;
				bdtable += `<div style='background-image: url(/images/city/buildings/icons/${currentbd.name[i]}.png); background-size:contain;background-repeat:no-repeat;width:30px; height:30px;'>`;
				bdtable += `</div>${Number(currentbd.count[i])}`;
				bdtable += "</td>";
			}
			if (i == 9 || i == 19) {
				bdtable += "</tr>";
				bdtable += "<tr>";
				bdtable += "<td style='text-align:center; width:30px; height:30px; #c7e2e7-space:normal;'>";
				bdtable += `<div style='background-image: url(/images/city/buildings/icons/${currentbd.name[i]}.png); background-size:contain;background-repeat:no-repeat;width:30px; height:30px;'></div>`;
				bdtable += `${Number(currentbd.count[i])}</td>`;
			}
		});
		bdtable += "</tr>";
		bdtable += "</tbody>";
		bdtable += "</table>";
		$("#bdcountwin").html(bdtable);
		$("#numbdleft").html(bdNumber);
	}
	/*

	Predicting Incoming Troops Section

	*/
	$(document).ready(function() {
		const incomingtabledata = $("#incomingsAttacksTable").find('tbody tr');
		$("#incomingsAttacksTable table thead tr th:nth-child(2)").width(140);
		incomingtabledata.append("<th>Lock time</th><th>Travel time</th>");

		const handleIncomings = () => {
			setTimeout(function() {
				incomings();
			}, 5000);
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
		const speeeed = [];
		speeeed[0] = 0;
		for (var i = 1; i < 201; i++) {
			speeeed[i] = speeeed[i - 1] + 0.5;
		}

		//  separating all possible speeds for troop types
		const navyspeed = [];
		const scoutspeed = [];
		const cavspeed = [];
		const infspeed = [];
		const artspeed = [];
		const senspeed = [];
		let temp;

		function roundingto2(x) {
			return Math.round(x * 100) / 100;
		}

		const unitTypes = ['navyspeed', 'scoutspeed', 'cavspeed', 'infspeed', 'artspeed', 'senspeed'];

		for (let i = 0; i < speeeed.length; i++) {
			for (let j = 0; j < unitTypes.length; j++) {
				const speed = unitTypes[j];
				let temp;
				switch (speed) {
					case 'navyspeed':
						temp = 5 / (1 + speeeed[i] * 1.0 / 100);
						break;
					case 'scoutspeed':
						temp = 8 / (1 + speeeed[i] * 1.0 / 100);
						break;
					case 'cavspeed':
						temp = 10 / (1 + speeeed[i] * 1.0 / 100);
						break;
					case 'infspeed':
						temp = 20 / (1 + speeeed[i] * 1.0 / 100);
						break;
					case 'artspeed':
						temp = 30 / (1 + speeeed[i] * 1.0 / 100);
						break;
					case 'senspeed':
						temp = 40 / (1 + speeeed[i] * 1.0 / 100);
						break;
					default:
						break;
				}
				window[speed][i] = roundingto2(temp);
			}
		}
		$("#iaBody tr").each(function() {
			const tid = $(':nth-child(5)', this).children().children().attr("data");
			const sid = $(':nth-child(10)', this).children().attr("data");
			const tx = tid % 65_536;
			const sx = sid % 65_536;
			const ty = (tid - tx) / 65_536;
			const sy = (sid - sx) / 65_536;
			const tcont = Math.floor(tx / 100) + Math.floor(ty / 100) * 10;
			const scont = Math.floor(sx / 100) + Math.floor(sy / 100) * 10;
			const dist = Math.sqrt((ty - sy) * (ty - sy) + (tx - sx) * (tx - sx));
			const atime = $(':nth-child(6)', this).text();
			const stime = $(':nth-child(11)', this).text();
			let hdiff = atime.substring(0, 2) - stime.substring(0, 2);
			let mdiff = atime.substring(3, 5) - stime.substring(3, 5);
			const sdiff = atime.substring(6, 8) - stime.substring(6, 8);
			const d = new Date();
			const x = new Date();

			const arrivaltimemonth = atime.length === 14 ? Number(atime.substring(9, 11)) : d.getMonth() + 1;
			const arrivaltimedate = atime.length === 14 ? Number(atime.substring(12, 14)) : d.getDate();
			let time = hdiff >= 0 ? 60 * hdiff : (24 + hdiff) * 60;
			(atime.length === 14 || stime.length === 14) && (time += 1440, hdiff += 24);
			time += mdiff;
			time += sdiff / 60;
			const ispeed = roundingto2(time / dist);
			const nspeed = roundingto2((time - 60) / dist);
			//adds time taken by troops to return home to arrival time and changed formats
			let locks;
			let lockm;
			let lockh;
			locks = (sdiff >= 0) ? sdiff : (60 + sdiff);
			if (sdiff < 0) {
				mdiff--;
			}

			lockm = (mdiff >= 0) ? mdiff : (60 + mdiff);
			if (mdiff < 0) {
				hdiff--;
			}
			lockh = hdiff >= 0 ? hdiff : hdiff + 24;
			const travelingts = twodigitnum(locks);
			const travelingtm = twodigitnum(lockm);
			const travelingth = twodigitnum(lockh);
			let locktimeh = Number(lockh) + Number(atime.substring(0, 2));
			let locktimem = Number(lockm) + Number(atime.substring(3, 5));
			let locktimes = Number(locks) + Number(atime.substring(6, 8));
			locktimes -= (locktimes > 59) ? 60 : 0;
			locktimem += (locktimes > 59) ? 1 : 0;
			locktimem -= (locktimem > 59) ? 60 : 0;
			locktimeh += (locktimem > 59) ? 1 : 0;
			locktimeh -= (locktimeh > 23) ? 24 : 0;
			arrivaltimedate += (locktimeh > 23) ? 1 : 0;
			const atm1 = [1, 3, 5, 7, 8, 10, 12];
			const atm2 = [4, 6, 9, 11];
			const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			if (arrivaltimedate > daysInMonth[arrivaltimemonth]) {
				arrivaltimedate = 1;
			}
			const addt = $(this);
			locktimeh = twodigitnum(locktimeh);
			locktimem = twodigitnum(locktimem);
			locktimes = twodigitnum(locktimes);
			arrivaltimemonth = twodigitnum(arrivaltimemonth);
			arrivaltimedate = twodigitnum(arrivaltimedate);




			//output of results
			const newtd = "<td></td>";
			const arrivalTime = `${locktimeh}:${locktimem}:${locktimes} ${arrivaltimemonth}/${arrivaltimedate}`;
			const travelTime = `${travelingth}:${travelingtm}:${travelingts}`;

			if (addt.children().length === 14) {
				$(this).append(newtd);
				$(':nth-child(15)', this).text(arrivalTime);
				if ($(':nth-child(2)', this).text() == "Sieging") {
					$(':nth-child(15)', this).css("color", "red");
				}
			}

			if (addt.children().length === 15) {
				$(this).append(newtd);
				$(':nth-child(16)', this).text(travelTime);
				if ($(':nth-child(2)', this).text() == "Sieging") {
					$(':nth-child(16)', this).css("color", "red");
				}
			}

			if ($(':nth-child(2)', this).text() != "-") {
				return;
			}
			// below will return -1 if calculated speed is not found inside the speed arrays and the correct index if it is found within the speed arrays
			const speedTypes = ['navyspeed', 'scoutspeed', 'cavspeed', 'infspeed', 'artspeed', 'senspeed'];
			const zns = navyspeed.indexOf(nspeed);
			const zss = scoutspeed.indexOf(ispeed);
			const zcs = cavspeed.indexOf(ispeed);
			const zis = infspeed.indexOf(ispeed);
			const zas = artspeed.indexOf(ispeed);
			const zsn = senspeed.indexOf(ispeed);




			// below use ispeed and above return values to get the correct incoming troop type
			if (tcont == scont) {
				if (ispeed > 30 && zsn !== -1) {
					$(':nth-child(2)', this).text(`senator ${speeeed[zsn]}%`);
				} else if (ispeed > 30 && zsn === -1) {
					$(':nth-child(2)', this).text("Tower?/Sen");
				}
				if (ispeed > 20 && ispeed <= 30) {
					if (zsn == -1 && zas == -1) {
						$(':nth-child(2)', this).text("Tower?/Art/Sen");
					}
					if (zsn == -1 && zas != -1) {
						$(':nth-child(2)', this).text(`Artillery ${speeeed[zas]}%`);
					}
					if (zsn != -1 && zas == -1) {
						$(':nth-child(2)', this).text(`Senator ${speeeed[zsn]}%`);
					}
					if (zsn != -1 && zas != -1) {
						$(':nth-child(2)', this).text(`Art ${speeeed[zas]}%/Sen ${speeeed[zsn]}%`);
					}
				}
				if (ispeed == 20) {
					$(':nth-child(2)', this).text("Inf 0%/Art 50%/Sen 100%");
				}
				if (ispeed >= 15 && ispeed < 20) {
					if (zis == -1 && zas == -1) {
						$(':nth-child(2)', this).text("Tower?/Inf &above");
					}
					if (zis == -1 && zas != -1) {
						$(':nth-child(2)', this).text(`Artillery ${speeeed[zas]}%`);
					}
					if (zis != -1 && zas == -1) {
						$(':nth-child(2)', this).text(`Infantry ${speeeed[zis]}%`);
					}
					if (zis != -1 && zas != -1) {
						$(':nth-child(2)', this).text(`Inf ${speeeed[zis]}%/Art ${speeeed[zas]}%`);
					}
				}
				if (ispeed >= 10 && ispeed < 15) {
					if (zis == -1 && zcs == -1) {
						$(':nth-child(2)', this).text("Tower?/Cav &above");
					}
					if (zis == -1 && zcs != -1) {
						$(':nth-child(2)', this).text(`Cav ${speeeed[zcs]}%`);
					}
					if (zis != -1 && zcs == -1) {
						$(':nth-child(2)', this).text(`Inf ${speeeed[zis]}%`);
					}
					if (zis != -1 && zcs != -1) {
						$(':nth-child(2)', this).text(`Cav ${speeeed[zcs]}%/Inf ${speeeed[zis]}%`);
					}
				}
				if (ispeed > 8 && ispeed < 10) {
					if (zcs == -1) {
						$(':nth-child(2)', this).text("Tower?/Cav &above");
					} else {
						$(':nth-child(2)', this).text(`Cav ${speeeed[zcs]}%`);
					}
				}
				if (ispeed > 5 && ispeed <= 8) {
					if (zss == -1 && zcs == -1) {
						$(':nth-child(2)', this).text("Tower?/Scout &above");
					}
					if (zss == -1 && zcs != -1) {
						$(':nth-child(2)', this).text(`Cav ${speeeed[zcs]}%`);
					}
					if (zss != -1 && zcs == -1) {
						$(':nth-child(2)', this).text(`Scout ${speeeed[zss]}%`);
					}
					if (zss != -1 && zcs != -1) {
						$(':nth-child(2)', this).text(`Scout ${speeeed[zss]}%/Cav ${speeeed[zcs]}%`);
					}
				}
				if (ispeed == 5) {
					$(':nth-child(2)', this).text("Navy 0%/Scout 60%/Cav 100%");
				}
				if (ispeed >= 4 && ispeed < 5) {
					if (zss == -1 && zns == -1) {
						$(':nth-child(2)', this).text("Tower?/scout &above");
					}
					if (zss == -1 && zns != -1) {
						$(':nth-child(2)', this).text(`Navy ${speeeed[zns]}%`);
					}
					if (zss != -1 && zns == -1) {
						$(':nth-child(2)', this).text(`Scout ${speeeed[zss]}%`);
					}
					if (zss != -1 && zns != -1) {
						$(':nth-child(2)', this).text(`Navy ${speeeed[zns]}%/Scout ${speeeed[zss]}%`);
					}
				}
				if (ispeed < 4) {
					if (zns == -1) {
						$(':nth-child(2)', this).text("Tower?/Navy &above");
					} else {
						$(':nth-child(2)', this).text(`Navy ${speeeed[zns]}%`);
					}
				}
				return;
			}
			if ($(':nth-child(1)', this).html()) {
				$(':nth-child(2)', this).text("Portal");
			} else if (zns == -1) {
				$(':nth-child(2)', this).text("Tower?/Navy");
			} else {
				$(':nth-child(2)', this).text(`Navy ${speeeed[zns]}%`);
				context.strokeStyle = '#000000'; //BLACK
				context.stroke();
			}
		});
	}

	/*

	END Predicting Incoming Troops Section

	*/


	//layout part,raid return part
	function openreturnwin(data) {
		$(".toptdinncommtbl1:first").click();

		setTimeout(function() {
			$("#outgoingPopUpBox").hide();
		}, 300);

		const selectcont = $("#idleCsel").clone(false).attr({
			id: "selcr",
			style: "width:40%;height:28px;font-size:11;border-radius:6px;margin:7px"
		});


		let gfunkyreturnwin = "<div id='gfunkyReturnall' class='popUpBox ui-resizable ui-draggable' style='z-index:20001; width:80%;!important'>";
		gfunkyreturnwin += "<div class='ppbwinbgr' >";
		gfunkyreturnwin += "<div class='ppbwintop' style='position: relative !important; height:150px !important;'></div>";
		gfunkyreturnwin += "<div class='ppbwincent' style='position: relative !important; height:auto !important;'></div>";
		gfunkyreturnwin += "<div class='ppbwinbott' style='position: relative !important; height:150px !important;'></div>";
		gfunkyreturnwin += "</div>";
		gfunkyreturnwin += "<div class='ppbwincontent' style='width: auto;'>";
		gfunkyreturnwin += "<div class='popUpBar ui-draggable-handle' style='margin-top:7px !Important;'>";
		gfunkyreturnwin += "<span class='ppspan'>Gfunky's Recall All</span>";
		gfunkyreturnwin += "<button id='sumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#gfunkyReturnall').remove()>";
		gfunkyreturnwin += "<div id='xbuttondiv'> ";
		gfunkyreturnwin += "<div>";
		gfunkyreturnwin += "<div id='centxbuttondiv'></div>";
		gfunkyreturnwin += "</div>";
		gfunkyreturnwin += "</div>";
		gfunkyreturnwin += "</button>";
		gfunkyreturnwin += "</div>";
		gfunkyreturnwin += "<div id='returnbody' class='popUpWindow' style='text-align: center;'></div>";
		gfunkyreturnwin += "</div>";





		const selectType = `
		  <select id='selType' class='greensel' style='width:40%;height:28px;font-size:11;border-radius:6px; margin:7px;'>
			<option value='1'>Offense and Defense</option>
			<option value='2'>Offense</option>
			<option value='3'>Defense</option>
		  </select>
		  <br>
		`;
		const selectret = $("#raidrettimesela").clone(false).attr({
			id: "returnSel",
			style: "width:40%;height:28px;font-size:11;border-radius:6px;margin:7px"
		});

		function createReturnTimeSelect(hr, min, sec, date) {
			return `
			<br>
			<div id="timeblock">
			  <div id="timesel" style="display: none; text-align:center">
				<span style="font-weight:800;">Input latest return time:</span><br>
				<table style="width:80%;margin-left:auto; margin-right: auto;">
				  <thead>
					<tr style="text-align:center;">
					  <td>Hr</td>
					  <td>Min</td>
					  <td>Sec</td>
					  <td colspan="2">Date</td>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td><input id="returnHr" type="number" style="width: 35px;height: 22px;font-size: 10px;padding: none !important;color: #000;" value="${hr}"></td>
					  <td><input id="returnMin" style="width: 35px;height: 22px;font-size: 10px;padding: none !important;color: #000;" type="number" value="${min}"></td>
					  <td><input style="width: 35px;height: 22px;font-size: 10px;padding: none !important;color: #000;" id="returnSec" type="number" value="${sec}"></td>
					  <td colspan="2"><input style="width:90px;" id="returnDat" type="text" value="${date}"></td>
					</tr>
				  </tbody>
				</table>
			  </div>
			</div>
		  `;
		}
		const selecttime = createReturnTimeSelect('00', '00', '00', '00/00/0000');
		const returnAllgo = "<button id='returnAllGo' style=' width: 35%;height: 30px !important; font-size: 12px !important; position: static !important;' class='regButton greenb'>Start Return All</button>";
		const nextcity = "<button id='nextCity' style='display: none;margin-left:10%; width: 35%;height: 30px !important; font-size: 12px !important; position: static !important;' class='regButton greenb'>Next City</button>";
		const returntroops = "<button id='returnTroops' style='display: none;margin-left:10%; width: 35%;height: 30px !important; font-size: 12px !important; position: static !important;' class='regButton greenb'>Return troops</button>";
		const selectlist = $("#organiser").clone(false).attr({
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
		$("#selcr").after(selecttype);
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

		let j;
		let end;
		let bb;
		let cc;
		let gaa;
		const returncities = {
			cid: [],
			cont: []
		};
		$("#returnAllGo").click(function() {
			if ($("#selClist").val() == "all") {
				for (const i in data) {
					const cont = data[i].c.co;
					if ($("#selcr").val() == 56) {
						if ($("#selType").val() == 1) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
						if ($("#selType").val() == 2 && (data[i].tr.indexOf(5) > -1 || data[i].tr.indexOf(6) > -1 || data[i].tr.indexOf(10) > -1 || data[i].tr.indexOf(11) > -1 || data[i].tr.indexOf(12) > -1 || data[i].tr.indexOf(13) > -1 || data[i].tr.indexOf(14) > -1 || data[i].tr.indexOf(16) > -1)) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
						if ($("#selType").val() == 3 && (data[i].tr.indexOf(1) > -1 || data[i].tr.indexOf(2) > -1 || data[i].tr.indexOf(3) > -1 || data[i].tr.indexOf(4) > -1 || data[i].tr.indexOf(8) > -1 || data[i].tr.indexOf(9) > -1 || data[i].tr.indexOf(15) > -1)) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
					}

					if (cont == Number($("#selcr").val())) {
						if ($("#selType").val() == 1) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
						if ($("#selType").val() == 2 && (data[i].tr.indexOf(5) > -1 || data[i].tr.indexOf(6) > -1 || data[i].tr.indexOf(10) > -1 || data[i].tr.indexOf(11) > -1 || data[i].tr.indexOf(12) > -1 || data[i].tr.indexOf(13) > -1 || data[i].tr.indexOf(14) > -1 || data[i].tr.indexOf(16) > -1)) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
						}
						if ($("#selType").val() == 3 && (data[i].tr.indexOf(1) > -1 || data[i].tr.indexOf(2) > -1 || data[i].tr.indexOf(3) > -1 || data[i].tr.indexOf(4) > -1 || data[i].tr.indexOf(8) > -1 || data[i].tr.indexOf(9) > -1 || data[i].tr.indexOf(15) > -1)) {
							returncities.cid.push(data[i].i);
							returncities.cont.push(cont);
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
			cc = bb == 3 ? `${$("#returnDat").val()} ${$("#returnHr").val()}:${$("#returnMin").val()}:${$("#returnSec").val()}` : 0;
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

		const citiesLength = returncities.cid.length;

		$("#nextCity").click(function() {
			j++;
			if (j === citiesLength) {
				alert("Return all complete");
				$("#gfunkyReturnall").remove();
			} else {
				gaa = returncities.cid[j];
				$("#cityDropdownMenu").val(gaa).change();
			}
		});
	}

	/*
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
		const bosslist = {
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
			const distance = (Math.sqrt((bossinfo.x[i] - city.x) * (bossinfo.x[i] - city.x) + (bossinfo.y[i] - city.y) * (bossinfo.y[i] - city.y)));
			if ((bossinfo.cont[i] == city.cont) && ((bossinfo.name[i] != "Triton")) && (bossinfo.data[i].charAt(0, 1) == 1) && ((city.th[2] || city.th[3] || city.th[4] || city.th[5] || city.th[6] || city.th[8] || city.th[9] || city.th[10] || city.th[11]) && city.th[14] == 0) && bossinfo.cont[i] == city.cont) {
				if (city.th[2] || city.th[3] || city.th[4] || city.th[5] || city.th[6]) {
					var minutes = distance * ttspeed[2] / faithbonustravelspeed[2];
					var time = `${Math.floor(minutes/60)}h ${Math.floor(minutes % 60)}m`;
					bosslist.name.push(bossinfo.name[i]);
					bosslist.x.push(bossinfo.x[i]);
					bosslist.y.push(bossinfo.y[i]);
					bosslist.cid.push(Number(bossinfo.y[i] * 65_536 + bossinfo.x[i]));
					bosslist.lvl.push(bossinfo.lvl[i]);
					bosslist.distance.push(roundToTwo(distance));
					bosslist.time.push(time);
					bosslist.cont.push(bossinfo.cont[i]);
				}
				if (city.th[8] || city.th[9] || city.th[10] || city.th[11]) {
					var minutes = distance * ttspeed[8] / faithbonustravelspeed[8];
					var time = `${Math.floor(minutes/60)}h ${Math.floor(minutes % 60)}m`;
					bosslist.name.push(bossinfo.name[i]);
					bosslist.x.push(bossinfo.x[i]);
					bosslist.y.push(bossinfo.y[i]);
					bosslist.cid.push(Number(bossinfo.y[i] * 65_536 + bossinfo.x[i]));
					bosslist.lvl.push(bossinfo.lvl[i]);
					bosslist.distance.push(roundToTwo(distance));
					bosslist.time.push(time);
					bosslist.cont.push(bossinfo.cont[i]);
				}
			}

			if (distance < 5000 && (city.th[14] || city.th[15] || city.th[16])) {
				var minutes = distance * ttspeed[14] / faithbonustravelspeed[14];
				var time = `${Math.floor(minutes/60)}h ${Math.floor(minutes % 60)}m`;
				bosslist.x.push(bossinfo.x[i]);
				bosslist.y.push(bossinfo.y[i]);
				bosslist.cid.push(Number(bossinfo.y[i] * 65_536 + bossinfo.x[i]));
				bosslist.lvl.push(bossinfo.lvl[i]);
				bosslist.distance.push(roundToTwo(distance));
				bosslist.time.push(time);
				bosslist.cont.push(bossinfo.cont[i]);
			}
		}
		let bosswin = "<table id='bosstable' class='beigetablescrollp sortable'>";
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
			const j = bosses.name.indexOf(bosslist.name[i]);
			bosswin += `<tr id='bossline${bosslist.cid[i]}' class='dunginf'>`;
			bosswin += `<td id='cl${bosslist.cid[i]}' class='coordblink shcitt' data='${bosslist.cid[i]}' style='text-align: center;'>${bosslist.x[i]}:${bosslist.y[i]}</td>`;
			bosswin += `<td style='text-align: center;font-weight: bold;'>${bosslist.lvl[i]}</td>`;
			bosswin += `<td style='text-align: center;'>${bosslist.cont[i]}</td>`;
			bosswin += `<td style='text-align: center;'>${bosslist.time[i]}</td>`;
			bosswin += `<td style='text-align: center;'>${bosslist.distance[i]}</td>`;
			bosswin += "</tr>";
		}

		bosswin += "</tbody>";
		bosswin += "</table>";
		//bosswin+=" </div>";


		let idle = "<table id='idleunits' class='beigetablescrollp'>";
		idle += "<thead>";
		idle += "<tr>";
		idle += "<th style='text-align: center;color: #e1c190;font-size: 10px;font-weight: 400;height: 18px;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;background-repeat: no-repeat;'>Idle Troop Type:</th>";
		idle += "<th style='text-align: center;color: #e1c190;font-size: 10px;font-weight: 400;height: 18px;background: url(/images/antonui/qmenutop.png);background-size: 100% 100%;background-repeat: no-repeat;'>Idle Troop Numbers</th>";
		idle += "</tr>";
		idle += "</thead>";
		idle += "<tbody>";
		const notallow = [0, 1, 7, 12, 13];
		for (const [key, value] of Object.entries(city.th)) {
			if (!notallow.includes(key) && value > 0) {
				idle += "<tr>";
				idle += "<td>";
				idle += `<div class='${tpicdiv[key]}' style='text-align: right;'></div>`;
				idle += "</td>";
				idle += "<td style='text-align: center;'>";
				idle += `<span id='thbr${key}'>${value}</span>`;
				idle += "</td>";
				idle += "</tr>";
			}
		}
		idle += "</tbody>";
		idle += "</table>";
		idle += "</table>";

		return idle;


		$("#idlerow").html(idle);
		$("#idlerow").show();

		$("#bossbox").html(bosswin);
		$("#idletroops").html(idle);
		const newTableObject = document.getElementById('bosstable');
		sorttable.makeSortable(newTableObject);
		setTimeout(function() {
			$("#hdistance").trigger("click");
			setTimeout(function() {
				$("#hdistance").trigger("click");
			}, 100);
		}, 100);
		for (var i in bosslist.x) {
			$(`#cl${bosslist.cid[i]}`).click(function() {
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
		const optimalTS = Math.ceil((other_loot[lvl - 1] / 10 * ((1 - prog / 100) + 1)) * 1.0175);
		if (dtype === "dungeon") {
			if ($("#cityplayerInfo div table tbody tr").length === 11) {
				bossele();
			}
			var i = 0;
			var home_loot = 0;
			var km = [];

			for (var x in citytc) {
				home = Number(citytc[x]);
				home_loot += home * ttloot[i];
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
						const total_lootm = Math.ceil((mountain_loot[Number(lvl) - 1] * ((1 - Number(prog) / 100) + 1)) * 1.0175);
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
				const optimalTSM = Math.ceil((mountain_loot[lvl - 1] / 10 * ((1 - prog / 100) + 1)) * 1.0175);
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
						const total_looto = Math.ceil((other_loot[Number(lvl) - 1] * ((1 - Number(prog) / 100) + 1)) * 1.0175);
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
			for (var i in ttattack) {
				const bossTS = Math.ceil((Number(bossdef[lvl - 1]) * 4) / (Number(ttattack[i]) * Number(Total_Combat_Research[i])));
				attackres.push(bossTS);
				const bosswTS = Math.ceil((Number(bossdefw[lvl - 1]) * 4) / (Number(ttattack[i]) * Number(Total_Combat_Research[i])));
				attackwres.push(bosswTS);
			}
			let home_strength = 0;
			var home_loot = 0;
			var km = [];
			const bm = [];
			const bmw = [];
			const kg = [];
			let home_TSw = 0;
			const boss_strength = Math.ceil(Number(bossdef[lvl - 1]) * 4);
			const boss_strengthw = Math.ceil(Number(bossdefw[lvl - 1]) * 4);
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
				home_strength += Number(ttattack[i]) * Number(home) * Number(Total_Combat_Research[i]); //for land bosses
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
					home_strengthw = home_strength + (Number(galley_TSneeded) * (3000) * Number(Total_Combat_Research[14])); //with imaginary galley
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





	// recall button in command window
	function recallraidl100() {
		//        var troops = cotg.city.troops();
		let loot;
		let total;
		let total_number = 0;
		let total_lootz = 0;
		let i = 0;

		for (const x in citytc) {
			total = Number(citytc[x]);
			total_number += total * Number(TS_type[i]);
			total_lootz += total * Number(ttloot[i]);
			i++;
			if (i === 17) {
				break;
			}
		}
		const lootpertroop = total_lootz / total_number;
		let l = 1;
		const m = Number($("#commandtable tbody").length);

		function loop() {
			const trlist = $(`#commandtable tbody tr:nth-child(${l})`);
			const lvlprog = $(trlist).find(".commandinntabl tbody tr:nth-child(3) td:nth-child(1) span:nth-child(1)").text(); //td:nth-child(1) span:nth-child(1)
			const splitlp = lvlprog.split("(");
			const Dungeon_lvl = Number(splitlp[0].match(/\d+/gi));
			const Dungeion_prog = Number(splitlp[1].match(/\d+/gi));
			const dungeon = splitlp[0].substring(0, splitlp[0].indexOf(','));
			loot = dungeon === "Mountain Cavern" ? mountain_loot : other_loot;
			const total_loot_c = Math.ceil(loot[Number(Dungeon_lvl) - 1] * ((1 - Number(Dungeion_prog) / 100) + 1));
			const Unitno = $(trlist).find(".commandinntabl tbody tr:nth-child(1) td:nth-child(2) span").text(); //td:nth-child(1) span:nth-child(1)
			const temp7 = Unitno.match(/[\d,]+/g);
			const Units_raiding = Number(temp7[0].replace(',', ''));
			const lootperraid = lootpertroop * Units_raiding;
			const percentage_ofloot = Math.ceil((lootperraid / total_loot_c) * 100);
			if (Number(percentage_ofloot) < 90) {
				$(trlist).find(".commandinntabl tbody tr:nth-child(2) td:nth-child(1) table tbody tr td:nth-child(2)")[0].click(); // table tbody tr td:nth-child(2)
				$("#raidrettimesela").val(1).change();
				setTimeout(function() {
					$("#doneOG")[0].click();
				}, 300);
				setTimeout(function() {
					$("#outgoingPopUpBox").hide();
				}, 500);
			}
			l++;
			if (l < m) {
				setTimeout(loop, 1000);
			}
		}
		loop();
	}

	function massresTemple() {

		setTimeout(function() {
			$("#msendtradesel").val(2).change();
		}, 10);
		setTimeout(function() {
			$("#msendocont").prop("checked", false);
		}, 10);
	}

	// Gfunky Return All

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






	//carry check in command window
	function carrycheck() {
		//       var troops = cotg.city.troops();
		let loot;
		let total;
		let total_number = 0;
		let total_lootx = 0;
		var i = 0;
		for (const x in citytc) {
			total = Number(citytc[x]);
			total_number += total * Number(TS_type[i]);
			total_lootx += total * Number(ttloot[i]);
			i++;
			if (i === 17) {
				break;
			}
		}
		const lootpertroop = total_lootx / total_number;
		for (var i = 1; i < $("#commandtable tbody tr").length; i++) {
			const trlist = $(`#commandtable tbody tr:nth-child(${i})`);
			const lvlprog = $(trlist).find(".commandinntabl tbody tr:nth-child(2) td:nth-child(1) span:nth-child(1)").text(); //td:nth-child(1) span:nth-child(1)
			const splitlp = lvlprog.split("(");
			if (splitlp.length === 1) {
				continue;
			}
			const Dungeon_lvl = Number(splitlp[0].match(/\d+/gi));
			const Dungeion_prog = Number(splitlp[1].match(/\d+/gi));
			const dungeon = splitlp[0].substring(0, splitlp[0].indexOf(','));
			loot = dungeon === "Mountain Cavern" ? mountain_loot : other_loot;
			const total_loot_c = Math.ceil(loot[Number(Dungeon_lvl) - 1] * ((1 - Number(Dungeion_prog) / 100) + 1));
			const Unitno = $(trlist).find(".commandinntabl tbody tr:nth-child(1) td:nth-child(2) span").text(); //td:nth-child(1) span:nth-child(1)
			const temp7 = Unitno.match(/[\d,]+/g);
			const Units_raiding = Number(temp7[0].replace(',', ''));
			const lootperraid = lootpertroop * Units_raiding;
			const percentage_ofloot = Math.ceil((lootperraid / total_loot_c) * 100);
			$(trlist).find(".toptdinncommtbl1.outgblink.shRAin").text(`Carry:${percentage_ofloot}%`);
			$(trlist).find(".commandinntabl tbody tr:nth-child(4) td:nth-child(1)").attr('colspan', 1);
		}
	}





	//Raiding script // carry percentage part in war councilor raider
	function carry_percentage(total_loot) {
		let troop_loot = 0;
		$(".tninput").each(function() {
			const trpinpid = $(this).attr('id');
			const TSnum = $(this).val();
			const ttttt = Number(trpinpid.match(/\d+/gi));
			troop_loot += TSnum * ttloot[ttttt]; //total loot
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
				loot1 = type_dung === "Mountain" ? mountain_loot : other_loot;
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
						},
						{
							value: '.95',
							text: '95%'
						},
						{
							value: '.97',
							text: '97%'
						},
						{
							value: '1.00',
							text: '100%'
						},
						{
							value: '1.03',
							text: '103%'
						},
						{
							value: '1.05',
							text: '105%'
						},
						{
							value: '1.07',
							text: '107%'
						},
						{
							value: '1.10',
							text: '110%'
						},
						{
							value: '1.12',
							text: '112%'
						},
						{
							value: '1.15',
							text: '115%'
						},
						{
							value: '1.30',
							text: '130%'
						},
						{
							value: '1.50',
							text: '150%'
						},
						{
							value: 'custom',
							text: 'Custom...'
						}
					];

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
						home_loot += home * ttloot[i];
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
						home_loot += home * ttloot[i];
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
						home_loot += home * ttloot[i];
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


	//raiding part, cancel allt attack part
	$().ready(function() {

		const recallgAll = "<div><button id='recallgAllbut' style='font-size:10px; padding: 4px; border-radius: 8px;' class='greenb shRnTr'>Recall All Raids</button></div>";

		$("#commandtable").before(recallgAll);
		$("#massressendDiv").click(function() {
			setTimeout(function() {
				massresTemple();
			}, 1000);
		});
		$(".fillXbut").click(function() {
			const i = $(this).closest("tr").attr("id");
			$(`#${i}`).hide();
		});
		sorttable.makeSortable(mrstctbbresult);
		$("#recallgAllbut").click(function() {
			setTimeout(function() {
				gfunkyReturnAll();
			}, 1000);
		});
		$("#loccavwarconGo").click(function() {
			//createTable();
			setTimeout(function() {
				getDugRows();
			}, 1000);
		});
		$("#raidmantab").click(function() {
			setTimeout(function() {
				getDugRows();
			}, 1000);
		});
		$("#allianceIncomings").parent().click(function() {
			setTimeout(function() {
				incomings();
			}, 4000);
		});
		$("#ui-id-37").click(function() {
			setTimeout(function() {
				incomings();
			}, 1000);
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
			Total_Combat_Research[2] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[30]]) / 100); //ranger
			Total_Combat_Research[3] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[31]]) / 100); //triari
			Total_Combat_Research[4] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[32]]) / 100); //priestess
			Total_Combat_Research[5] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[33]]) / 100); //vanq
			Total_Combat_Research[6] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[34]]) / 100); //sorc
			Total_Combat_Research[7] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[46]]) / 100); //scout
			Total_Combat_Research[8] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[35]]) / 100); //arb
			Total_Combat_Research[9] += ((Number(naera) * 0.5) / 100) + (Number(Res[research[36]]) / 100); //pra
			Total_Combat_Research[10] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[37]]) / 100); //horse
			Total_Combat_Research[11] += ((Number(vexemis) * 0.5) / 100) + (Number(Res[research[38]]) / 100); //druid
			Total_Combat_Research[14] += ((Number(ylanna) * 0.5) / 100) + (Number(Res[research[44]]) / 100); //galley
			Total_Combat_Research[15] += ((Number(ylanna) * 0.5) / 100) + (Number(Res[research[43]]) / 100); //stinger
			Total_Combat_Research[16] += ((Number(cyndros) * 0.5) / 100) + (Number(Res[research[45]]) / 100); //warship
		}
	}

	//incoming and outoging summary window from inside the ingame attacks (NOT PART OF  GFUNKY OVERVIEWS)
	$().ready(function() {
		const outsumbut = "<button style='margin-left:10%;font-size: 12px;width: 150px;' class='greenb regButton' id='outsumGo'>Outgoing Summary</button>";
		const incsumbut = "<button style='margin-left:10%;font-size: 12px;width: 150px;' class='greenb regButton' id='incsumGo'>Incomings Summary</button>";
		$("#contselectorAIPog").after(outsumbut);
		$("#contselectorAIPic").after(incsumbut);
		$("#outsumGo").click(function() {
			makeoutsum();
		});
		$("#incsumGo").click(function() {
			makeincsum();
		});
	});

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
		let gfunkychangelWin = "<div id='gfunkychangeldiv' class='popUpBox ui-resizable ui-draggable' style='z-index:2002; width:700px !important;'>";
		gfunkychangelWin += "<div class='ppbwinbgr ui-draggable' style='width:700px !important;'>";
		gfunkychangelWin += "<div class='ppbwintop ui-resizable ui-draggable' style='width:700px !important;'></div>";
		gfunkychangelWin += "<div class='ppbwincent ui-draggable' style='width:700px !important;'></div>";
		gfunkychangelWin += "<div class='ppbwinbott ui-resizable ui-draggable' style='width:700px !important;'></div>";
		gfunkychangelWin += "</div>";
		gfunkychangelWin += "<div class='ppbwincontent ui-resizable ui-draggable' style='height:98%; width:700px !important;' >";
		gfunkychangelWin += "<div class='popUpBar ui-resizable ui-draggable-handle'>";
		gfunkychangelWin += "<span class='ppspan'>Gfunky Change Log</span>";
		gfunkychangelWin += "<button id='sumX' class='xbutton' onclick=$('#gfunkychangeldiv').remove()>";
		gfunkychangelWin += "<div id='xbuttondiv'> ";
		gfunkychangelWin += "<div>";
		gfunkychangelWin += " <div id='centxbuttondiv'></div>";
		gfunkychangelWin += " </div>";
		gfunkychangelWin += "</div>";
		gfunkychangelWin += "</button>";
		gfunkychangelWin += "</div>";
		gfunkychangelWin += "<div id='gfunkychangelbody' class='popUpWindow ui-resizable' style='width:95%; margin-left:auto;'>";
		gfunkychangelWin += "<div ><iframe src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTMPIJDZTRoB-z9fXJWRL6GzyVhA0xjHWHSeanepcmqHRne5BmRDhcAd5KUXZX2AhnWMMGE_v2U2dQm/pubhtml' style='height: 95%;width:95%;border-radius: 6px;border: 3px ridge #99805d;'></iframe></div>";
		gfunkychangelWin += "</div>";
		gfunkychangelWin += "</div>";
		gfunkychangelWin += "</div>";
		$("body").append(gfunkychangelWin);
		$("#gfunkychangeldiv").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
	}

	
	//combat sum window
	function gfunkycomsumWin(arg) {
		let gfunkycomsWin = "<div id='gfunkycomsumdiv' class='popUpBox ui-draggable' style='z-index:2002; width:550px !important;'>";
		gfunkycomsWin += "<div class='ppbwinbgr ui-draggable'>";
		gfunkycomsWin += "<div class='ppbwintop ui-resizable ui-draggable'></div>";
		gfunkycomsWin += "<div class='ppbwincent ui-draggable'></div>";
		gfunkycomsWin += "<div class='ppbwinbott ui-resizable ui-draggable'></div>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "<div class='ppbwincontent ui-draggable' style='height:98%;'>";
		gfunkycomsWin += "<div class='popUpBar ui-draggable-handle'>";
		gfunkycomsWin += "<span class='ppspan'>Combat Summary</span>";
		gfunkycomsWin += "<button class='greenb regButton' style='font-size: 14px;margin-left: 20px;margin-top: 10px;height: 50%;width: 60px;'>";
		gfunkycomsWin += "<div class='button'>";
		gfunkycomsWin += "<a href='#' id ='comsumexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "</button>";
		gfunkycomsWin += "<button id='sumX' class='xbutton' onclick=$('#gfunkycomsumdiv').remove()>";
		gfunkycomsWin += "<div id='xbuttondiv'>";
		gfunkycomsWin += "<div>";
		gfunkycomsWin += "<div id='centxbuttondiv'></div>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "</button>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "<div id='comsumbody' class='popUpWindow'>";
		gfunkycomsWin += "<div>";
		gfunkycomsWin += "<span style='margin-left:5%;'>Date to Retrieve Combat Summary: </span>";
		gfunkycomsWin += "<input style='width:90px;' id='comsumDat' type='datepicker' value='00/00/0000'>";
		gfunkycomsWin += "<button class='regButton greenbuttonGo greenb' id='getcomSum' style='width:10%;'> Go </Button>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "<div id='comsumTabbody' style='text-align: center;margin-left: auto;margin-right: auto;width: 98%;'></div>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "</div>";
		gfunkycomsWin += "</div>";

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
			// //console.log(arg);
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
										//console.log("duplicate report");
									}
									$.each(this.ats, function(key, value) { // pushing attack troops
										tempv[key] = value;
										tempts += value * ttts[key]; //ttts is TS of the troop type which we multiply with troop numbers to get TS amount to known if its fake or not
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
									//console.log("duplicate report");
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
									tempts += value * ttts[key]; //ttts is TS of the type which we multiply with troop numbers to get fake or not
								});
								//console.log(tempts);
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
				taasent += ata.sent[atps[i]] * ttts[atps[i]];
			}
			comsumbody += `<td>${taasent.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "<tr>";
			comsumbody += "<td>Non-siege Lost</td>";
			for (var i in atps) {
				comsumbody += `<td>${ata.lost[atps[i]].toLocaleString()}</td>`;
				taadied += ata.lost[atps[i]] * ttts[atps[i]];
			}
			comsumbody += `<td>${taadied.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "<tr>";
			comsumbody += "<td>Siege Sent</td>";
			for (var i in atps) {
				comsumbody += `<td>${ats.sent[atps[i]].toLocaleString()}</td>`;
				tassent += ats.sent[atps[i]] * ttts[atps[i]];
			}
			comsumbody += `<td>${tassent.toLocaleString()}</td>`;
			comsumbody += "</tr>";
			comsumbody += "<tr>";
			comsumbody += "<td>Siege Lost</td>";
			for (var i in atps) {
				comsumbody += `<td>${ats.lost[atps[i]].toLocaleString()}</td>`;
				tasdied += ats.lost[atps[i]] * ttts[atps[i]];
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
				tddied += dt.lost[dtps[i]] * ttts[dtps[i]];
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




	// setting layouts
	$().ready(function() {
		$('#openLOinplanner').remove();
		$("#citynotes").draggable({
			handle: ".popUpBar",
			containment: "window",
			scroll: false
		});
		$('#citynotes').height('420px');
		$('#citynotes').width('500px');
		$('#openOVLinplanner').html('<a href="https://cotgopt.com/" target="_blank" rel="noopener noreferrer">Open CoTG Opt by GFunky+</a>');
		//$('#openLOinplanner').html('<a href="https://cotgopt.com/" target="_blank" rel="noopener noreferrer">Open CoTG Opt by GFunky+</a>');
		$('#citylayoutTab').append('<span id="loinplanner" style="float: right;font-size: 10px;"><a href="https://cotgopt.com/" target="_blank" rel="noopener noreferrer">Open CoTG Opt by GFunky+</a></span>');
		$('#loinplanner').after(currentLOtextarea);
		let layoutopttab = "<li id='layoutopt' class='ui-state-default ' role='tab' tabindex='-1' aria-controls='layoutoptBody'";
		layoutopttab += "aria-labeledby='ui-id-60' aria-selected='false' aria-expanded='false'>";
		layoutopttab += "<a href='#layoutoptBody' class='ui-tabs-anchor' role='presentation' tabindex='-1' id='ui-id-60'>Layout Options</a></li>";

		let layoutoptbody = "<div id='layoutoptBody' aria-labeledby='ui-id-60' class='ui-tabs-panel' role='tabpanel' aria-hidden='true' style='display: none;'> ";
		layoutoptbody += "<table>";
		layoutoptbody += "<tbody>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td><input id='addnotes' class='clsubopti' type='checkbox' checked> Add Notes</td>";
		layoutoptbody += "<td><input id='addtroops' class='clsubopti' type='checkbox' checked> Add Troops</td>";
		layoutoptbody += "<td><input id='addallbuildings' class='clsubopti' type='checkbox' checked> Upgrade All Buildings</td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td><input id='addtowers' class='clsubopti' type='checkbox' checked> Add Towers</td>";
		layoutoptbody += "<td><input id='addbuildings' class='clsubopti' type='checkbox' checked> Upgrade Cabins</td>";
		layoutoptbody += "<td> Cabin Lvl: <input id='cablev' type='number' style='width:22px;' value='8' checked></td>";

		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td><input id='addwalls' class='clsubopti' type='checkbox' checked > Add Walls</td>";
		layoutoptbody += "<td><input id='addres' class='clsubopti' type='checkbox' checked> Add Resources</td>";
		layoutoptbody += "<td><input id='addhub' class='clsubopti' type='checkbox' checked>Set Nearest Hub</td>";

		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td><input id='addfoodwarning' class='clsubopti' type='checkbox' checked > Set Food Warning </td>";
		layoutoptbody += "<td colspan='2'> Hours of Warning: <input id='fwlev' type='number' style='width:22px;' value='8' checked></td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td>Select Hubs list: </td>";
		layoutoptbody += "<td id='selhublist'></td>";
		layoutoptbody += "<td>";
		layoutoptbody += "<button id='nearhubAp' class='regButton greenb' style='width:130px; margin-left: 10%'>Set Nearest Hub</button>";
		layoutoptbody += "<button id='quickAp' class='regButton greenb' style='width:130px; margin-left: 10%'>Quick Setup</button>";
		layoutoptbody += "</td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "</tbody>";
		layoutoptbody += "</table>";
		layoutoptbody += "<table style='border: 3px ridge #99805d; border-radius: 6px; text-align: center; margin-left: auto;margin-right: auto;'>";
		layoutoptbody += "<tbody>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td id='buttd' colspan='4' style= 'text-align:center';></td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td colspan='4'style='text-align: center;font-size: 14px;'> Request Resources If Below These Amounts</td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td style='text-align:center;'>Wood<input id='woodin' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='220000'></td>";
		layoutoptbody += "<td style='text-align:center;'>Stone<input id='stonein' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='220000'></td>";
		layoutoptbody += "<td style='text-align:center;'>Iron<input id='ironin' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='200000'></td>";
		layoutoptbody += "<td style='text-align:center;'>Food<input id='foodin' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='350000'></td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td colspan='4'style='text-align: center;font-size: 14px;'> Send Excess Resources If Above These Amounts</td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "<tr>";
		layoutoptbody += "<td style='text-align:center;'>Wood<input id='woodout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='250000'></td>";
		layoutoptbody += "<td style='text-align:center;'>Stone<input id='stoneout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='250000'></td>";
		layoutoptbody += "<td style='text-align:center;'>Iron<input id='ironout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='250000'></td>";
		layoutoptbody += "<td style='text-align:center;'>Food<input id='foodout' type='number' style='font-weight: bold;width:100px;border-radius: 6px;color: black;text-align: center;' value='400000'></td>";
		layoutoptbody += "</tr>";
		layoutoptbody += "</tbody>";
		layoutoptbody += "</table>";
		layoutoptbody += "</div>";
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
		// Food Warning
		if (localStorage.getItem('fwlev')) {
			$("#fwlev").val(localStorage.getItem('fwlev'));
		}
		//Cabins
		if (localStorage.getItem('cablev')) {
			$("#cablev").val(localStorage.getItem('cablev'));
		}
		//Wood In
		if (localStorage.getItem('woodin')) {
			$("#woodin").val(localStorage.getItem('woodin'));
		}
		//Stone In
		if (localStorage.getItem('stonein')) {
			$("#stonein").val(localStorage.getItem('stonein'));
		}
		//Iron In
		if (localStorage.getItem('ironin')) {
			$("#ironin").val(localStorage.getItem('ironin'));
		}
		//Food In
		if (localStorage.getItem('foodin')) {
			$("#foodin").val(localStorage.getItem('foodin'));
		}
		//Wood Out
		if (localStorage.getItem('woodout')) {
			$("#woodout").val(localStorage.getItem('woodout'));
		}
		//Stone Out
		if (localStorage.getItem('stoneout')) {
			$("#stoneout").val(localStorage.getItem('stoneout'));
		}
		//Iron Out
		if (localStorage.getItem('ironout')) {
			$("#ironout").val(localStorage.getItem('ironout'));
		}
		//Food Out
		if (localStorage.getItem('foodout')) {
			$("#foodout").val(localStorage.getItem('foodout'));
		}
		// Add Troops
		if (localStorage.getItem('addtroops')) {
			if (localStorage.getItem('addtroops') == 1) {
				$("#addtroops").prop("checked", true);
			} else {
				$("#addtroops").prop("checked", false);
			}
		}
		// Add Res
		if (localStorage.getItem('addres')) {
			if (localStorage.getItem('addres') == 1) {
				$("#addres").prop("checked", true);
			} else {
				$("#addres").prop("checked", false);
			}
		}
		//Add Buildings
		if (localStorage.getItem('addbuildings')) {
			if (localStorage.getItem('addbuildings') == 1) {
				$("#addbuildings").prop("checked", true);
			} else {
				$("#addbuildings").prop("checked", false);
			}
		}
		if (localStorage.getItem('addallbuildings')) {
			if (localStorage.getItem('addallbuildings') == 1) {
				$("#addallbuildings").prop("checked", true);
			} else {
				$("#addallbuildings").prop("checked", false);
			}
		}
		// Add Notes
		if (localStorage.getItem('addnotes')) {
			if (localStorage.getItem('addnotes') == 1) {
				$("#addnotes").prop("checked", true);
			} else {
				$("#addnotes").prop("checked", false);
			}
		}
		// Add Walls
		if (localStorage.getItem('addwalls')) {
			if (localStorage.getItem('addwalls') == 1) {
				$("#addwalls").prop("checked", true);
			} else {
				$("#addwalls").prop("checked", false);
			}
		}
		// Add Towers
		if (localStorage.getItem('addtowers')) {
			if (localStorage.getItem('addtowers') == 1) {
				$("#addtowers").prop("checked", true);
			} else {
				$("#addtowers").prop("checked", false);
			}
		}
		// Add Hubs
		if (localStorage.getItem('addhub')) {
			if (localStorage.getItem('addhub') == 1) {
				$("#addhub").prop("checked", true);
			} else {
				$("#addhub").prop("checked", false);
			}
		}

		//Note the Change
		$("#addnotes").change(function() {
			if ($("#addnotes").prop("checked") == true) {
				localStorage.setItem('addnotes', 1);
			} else {
				localStorage.setItem('addnotes', 0);
			}
		});
		$("#addres").change(function() {
			if ($("#addres").prop("checked") == true) {
				localStorage.setItem('addres', 1);
			} else {
				localStorage.setItem('addres', 0);
			}
		});
		$("#addtroops").change(function() {
			if ($("#addtroops").prop("checked") == true) {
				localStorage.setItem('addtroops', 1);
			} else {
				localStorage.setItem('addtroops', 0);
			}
		});
		$("#addbuildings").change(function() {
			if ($("#addbuildings").prop("checked") == true) {
				localStorage.setItem('addbuildings', 1);
			} else {
				localStorage.setItem('addbuildings', 0);
			}
		});
		$("#addallbuildings").change(function() {
			if ($("#addallbuildings").prop("checked") == true) {
				localStorage.setItem('addallbuildings', 1);
			} else {
				localStorage.setItem('addallbuildings', 0);
			}
		});
		$("#addwalls").change(function() {
			if ($("#addwalls").prop("checked") == true) {
				localStorage.setItem('addwalls', 1);
			} else {
				localStorage.setItem('addwalls', 0);
			}
		});
		$("#addtowers").change(function() {
			if ($("#addtowers").prop("checked") == true) {
				localStorage.setItem('addtowers', 1);
			} else {
				localStorage.setItem('addtowers', 0);
			}
		});
		$("#addhub").change(function() {
			if ($("#addhub").prop("checked") == true) {
				localStorage.setItem('addhub', 1);
			} else {
				localStorage.setItem('addhub', 0);
			}
		});

		$("#editspncn").click(function() {
			$("#selHub").remove();
			const selhub = $("#organiser").clone(false).attr({
				id: "selHub",
				style: "width:100%;height:28px;font-size:11;border-radius:6px;margin:7px"
			});
			$("#selhublist").append(selhub);
			if (localStorage.getItem('hublist')) {
				$("#selHub").val(localStorage.getItem('hublist')).change();
			}
			$("#selHub").change(function() {
				localStorage.setItem('hublist', $("#selHub").val());
			});


			$('#landbuildlayouts').remove();
			$('#waterbuildlayouts').remove();
			$('#landoffenselayouts').remove();
			$('#landdefenselayouts').remove();
			$('#wateroffenselayouts').remove();
			$('#waterdefenselayouts').remove();
			$('#shipperlayouts').remove();
			$('#hublayouts').remove();
			$('#portallayouts').remove();
			

			setTimeout(function() {
				let currentlayout = $('#currentLOtextarea').text();
				for (let i = 20; i < currentlayout.length - 20; i++) {
					const tmpchar = currentlayout.charAt(i);
					const cmp = new RegExp(tmpchar);
					if (!(cmp.test(emptyspots))) {
						currentlayout = currentlayout.replaceAt(i, "-");
					}
				}


				let selectbuttlandoff = '<select id="landoffenselayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Land Offense Layouts</option>';
				let lol = 1;

				selectbuttlandoff += `<option value="${lol}">1 sec vanqs</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##GBGBG##-----##----##BGBGBGB##----##----#GBGBGBGBG#----##----#GBGBGBGBG#----#######GBGBTBGBG#######S--X#GBGBGBGBG#----##----#GBGBGBGBG#----##----##BGBGBGB##----##GGGGG##GBGBG##-----##BBBBBB#######------##GGGGGGJ--#---------##BBBBBB---#---------###GGGGZ---#--------#####B------#-------########################");
				remarklol.push("Vanqs");
				notelol.push("180000 Vanqs @ 2 days");
				troopcounlol.push([0, 0, 0, 0, 0, 179_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_002, 250_002, 200_002, 400_002]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">2 sec vanqs</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBBTBBGB#######SSPX#BGBGBGBGB#----##MDPJ#BGBGBGBGB#----##S---##BBGBGBB##----##-----##BBBBB##-----##-BBBBB#######------##-ZBGGB---#---------##-BBBBB---#---------###-BGGB---#--------#####BBBB---#-------########################");
				remarklol.push("vanqs");
				notelol.push("256000 vanqs @ 6 days");
				troopcounlol.push([0, 0, 0, 0, 0, 255_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_001, 250_001, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">3 sec vanqs raiding</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######SSPX#BGBBBBBGB#----##MDP-#BBBGBGBBB#----##S---##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BGGBGB#---------###--BBBBBB#--------#####-JBZBBB#-------########################");
				remarklol.push("vanqs");
				notelol.push("292000 vanqs @ 10 days");
				troopcounlol.push([0, 0, 0, 0, 0, 291_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">4 sec vanqs Portal</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBBBBBBB#----##----#BGBGBGBGB#----#######BBBBTBBGB#######SMSX#BGBGBGBGB#----##SDPP#BBBBBBBBB#----##----##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BBBBBB#---------###--BBBBBB#--------#####-BBJBZB#-------########################");
				remarklol.push("vanqs");
				notelol.push("308000 vanqs @ 14.5 days");
				troopcounlol.push([0, 0, 0, 0, 0, 307_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">4 sec horses</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##-BEBEB-##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######SM-X#BEBEBEBEB#----##S---#BEBEBEBEB#----##----##-BEBEB-##----##-BBBB##BEBEB##-----##ZEEEE-#######------##BBBBBBBB-#---------##JEEEEEEE-#---------###BBBBBBB-#--------#####-------#-------########################");
				remarklol.push("horses");
				notelol.push("110000 horses @ 5 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109_999, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">5 sec horses</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEBEBEB##----##----#-BEBEBEB-#----##----#-BEBEBEB-#----#######-BEBTBEB-#######SSPX#-BEBEBEB-#----##MDP-#-BEBEBEB-#----##S---##BEBEBEB##----##-----##BBBBB##-----##--BBBB#######------##--BEEEEEB#---------##-ZBBBBBBB#---------###JBEEEEEB#--------#####BBBBBBB#-------########################");
				remarklol.push("horses");
				notelol.push("120000 horses @ 7 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120_000, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">6 sec horses Portal</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######SSPX#BEBBBBBEB#----##MDPJ#BEBEBEBEB#----##----##BBEBEBB##----##-----##BBBBB##-----##--BBBZ#######------##--BEBBB--#---------##--BBBEB--#---------###-BEBEB--#--------#####BBBBB--#-------########################");
				remarklol.push("horses");
				notelol.push("134000 horses @ 9.5 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133_999, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">4 sec sorc</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#-JBJBJBJ-#----##----#-JBJBJBJ-#----#######-JBJTJBJ-#######S--X#-JBJBJBJ-#----##M---#-JBJBJBJ-#----##----##JBJBJBJ##----##-JBJB##BJBJB##-----##BJBJBJ#######------##BJBJBJBJ-#---------##BJBJBJBJ-#---------###JBJBJBJ-#--------#####BJBJBZ-#-------########################");
				remarklol.push("sorc");
				notelol.push("180000 sorc @ 8.3 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 179_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">5 sec sorc</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######SMPX#BJBJBJBJB#----##----#BJBJBJBJB#----##----##BBJBJBB##----##-BBBB##BJBJB##-----##-BJBJB#######------##-BJBJB---#---------##ZBJBJB---#---------###BJBJB---#--------#####BBB----#-------########################");
				remarklol.push("sorc");
				notelol.push("228000 sorc @ 14.8 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 227_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">6 sec sorc Portal</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BJBJBJB##----##----#-BJBJBJB-#----##----#-BJBJBJB-#----#######-BJBTBJB-#######SMSX#-BJBJBJB-#----##SDPP#-BJBJBJB-#----##----##BJBJBJB##----##BBBBB##BBBBB##-----##BJJJJZ#######------##BBBBBBBB-#---------##BJJJJJJJ-#---------###BBBBBBB-#--------#####-------#-------########################");
				remarklol.push("sorc");
				notelol.push("240000 sorc @ 17 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 239_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">10 sec druids</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######SM-X#BJBJBJBJB#----##----#BJBJBJBJB#----##BBBB##JBJBJBJ##----##JJJJJ##BJBJB##-----##BBBBBB#######------##JJJJJJ---#---------##BBBBB----#---------###JJZ-----#--------#####-------#-------########################");
				remarklol.push("druids");
				notelol.push("102000 druids @ 11.5 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101_999, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">11 sec druids</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######SDPX#BJBJBJBJB#----##M---#BJBJBJBJB#----##----##JBJBJBJ##----##-----##BJBJB##-----##-----Z#######------##BBBBBBBBB#---------##BJJJJJJJJ#---------###BBBBBBBB#--------#####-------#-------########################");
				remarklol.push("druids");
				notelol.push("108000 druids @ 13.8 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107_999, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">14 sec druids Portal</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BJBJBJB##----##----#-BJBJBJB-#----##----#-BJBJBJB-#----#######-BBBTBJB-#######SMPX#-BJBJBJB-#----##SDP-#-BJBJBJB-#----##----##BJBJBJB##----##BBBBB##BBBBB##-----##BJJJJZ#######------##BBBBBBBB-#---------##BJJJJJJJB#---------###BBBBBBB-#--------#####-------#-------########################");
				remarklol.push("druids");
				notelol.push("124000 druids @ 20 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123_999, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">18 sec druids Portal</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BJBJB-##----##----#BBBJBJBBB#----##----#BJBJBBBJB#----#######BBBJTJBJB#######----#BJBBBBBBB#S--X##----#BBBJBJB--#M---##----##-BJBJB-##----##-----##BBBBB##BBB--##------#######BBJB--##---------#BBBBBJB--##---------#BJBJBBB--###--------#BJBJBJB-#####-------#BBBBBBB########################");
				remarklol.push("druids");
				notelol.push(" 300kTS 150k druids @ 31.25 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150_00, 0, 0, 0, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">scorp/rams 20s/32s</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##YBYBY##-----##----##BYBYBYB##----##----#-BYBYBYB-#----##----#YBYBYBYBY#----#######YBYBTBYBY#######SS-X#YBYBYBYBY#----##MD--#YBYBYBYBY#----##-BBB##BYBYBYB##----##-YYY-##YBYB-##-----##BBBBBB#######------##YYYYYY---#---------##BBBBBB---#---------###YYYZ----#--------#####BB-----#-------########################");
				remarklol.push("scorp/rams");
				notelol.push("3920 rams / 15680 scorps @ 6.7 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3920, 15_680, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">scorp/rams 24s/39s</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBYB##-----##----##BBYBYBY##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######SMSX#BYBYBYBYB#----##SD--#BYBYBYBYB#----##----##BBYBYBY##----##-BBBB##BBBBB##-----##BYYYYB#######------##BBBBBB---#---------##BYYYYB---#---------###BBBB----#--------#####-------#-------########################");
				remarklol.push("scorp/rams");
				notelol.push("4720 rams / 18880 scorps @ 9.8 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4720, 18_880, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">scorp/rams 28s/44s</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBYB##-----##----##BBYBYBY##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######SMSX#BYBYBYBYB#----##SD--#BYBYBYBYB#----##----##BBYBYBY##----##-BBBB##BBBBB##-----##BYYYYB#######------##BBBBBB---#---------##BYYYYB---#---------###BBBB----#--------#####-------#-------########################");
				remarklol.push("scorp/rams");
				notelol.push("5200 rams / 20800 scorps @ 12.3 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5200, 20_800, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				lol++;
				selectbuttlandoff += `<option value="${lol}">Scorps Portal 48s</option>`;
				layoutlol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##YBYBYBY##----##----#BBBYBYBBB#----##----#BYBBBBBYB#----#######BYBYTYBYB#######----#BYBBBBBYB#SS-X##----#BBBYBYBBB#----##----##YBYBYBY##----##-----##BBBBB##BBB--##------#######-BYB--##---------#--BBBYB--##---------#-BBYBYB--###--------#-BBYBYB-#####-------#-BBBBBB########################");
				remarklol.push("Scorps");
				notelol.push("284kTS 28,400 scorps @ 16 days");
				troopcounlol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28_400, 0, 0, 0]);
				reslol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				selectbuttlandoff += '</select>';


				let selectbuttlanddef = '<select id="landdefenselayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Land Defense Layouts</option>';
				let ldl = 1;

				selectbuttlanddef += `<option value="${ldl}">2 sec rangers</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######SSPX#BGBGBGBGB#----##MLPJ#BGBGBGBGB#----##S---##BBGBGBG##----##-----##BBBGB##-----##--BBBB#######------##-BGGGG---#---------##-BBBBBB--#---------###-GGGG---#--------#####BBBB---#-------########################");
				remarkldl.push("Rangers");
				noteldl.push("228000 inf @ 5.2 days");
				troopcounldl.push([0, 0, 228_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 220_000, 350_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">3 sec rangers</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##GBGBGBG##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######SSPX#BGBBBBBGB#----##MLPJ#BBBGBGBBB#----##S---##GBGBGBG##----##-----##BBBBB##-----##--BBBB#######------##--BGBGB--#---------##--BBBBB--#---------###-BGBGB--#--------#####BBBB---#-------########################");
				remarkldl.push("Rangers");
				noteldl.push("276000 inf @ 9.3 days");
				troopcounldl.push([0, 0, 276_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 350_000, 220_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 450_000, 220_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">2s/3s Rangers/Triari</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######SSPX#BGBGBGBGB#----##MLPJ#BGBGBGBGB#----##S---##BBGBGBG##----##-----##BBBGB##-----##--BBBB#######------##-BGGGG---#---------##-BBBBBB--#---------###-GGGG---#--------#####BBBB---#-------########################");
				remarkldl.push("rangers/triari");
				noteldl.push("228000 inf @ 6.2 days");
				troopcounldl.push([0, 0, 152_000, 76_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 220_000, 350_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">3s/3s Rangers/Triari</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BGBGBB##----##----#BBBGBGBGB#----##----#BGBGBGBGB#----#######BGBBTGBGB#######SLSX#BGBGBGBGB#----##SMPP#BGBGBGBGB#----##----##BBGBGBB##----##-----##BBBBB##-----##--BBBB#######------##--BGBGB--#---------##--BGBGB--#---------###JBGBGB--#--------#####BBBBB--#-------########################");
				remarkldl.push("rangers/triari");
				noteldl.push("252000 inf @ 6.2 days");
				troopcounldl.push([0, 0, 168_000, 84_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 220_000, 350_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">3 sec Priestess</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######SMSX#BZBZBZBZB#----##SDPP#BZBZBZBZB#----##----##BBZBZBB##----##-BBBB##BBBBB##-----##-ZZZZ-#######------##BBBBBB---#---------##JZZZZB---#---------###BBBB----#--------#####-------#-------########################");
				remarkldl.push("priests");
				noteldl.push("228000 Priestess @ 7.9 days");
				troopcounldl.push([0, 0, 0, 0, 228_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">4 sec Priestess</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##ZBZBZBZ##----##----#BBBZBZBBB#----##----#BZBZBZBZB#----#######BZBBTBBZB#######SMSX#BZBZBZBZB#----##SDPP#BBBZBZBBB#----##--PP##ZBZBZBZ##----##-----##BBBBB##-----##----BB#######------##----BJBBB#---------##----BBBZB#---------###---BZBZB#--------#####--BBBBB#-------########################");
				remarkldl.push("priests");
				noteldl.push("256000 Priestess @ 12.2 days");
				troopcounldl.push([0, 0, 0, 0, 256_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">5 sec Priestess</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBBB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######SMSX#-BZBZBZB-#----##SDPP#-BBBBBZB-#----##----##BZBZBZB##----##-----##BBBBB##-----##BBBBB-#######------##BZBZB----#---------##BBBBBBBBB#---------###JBZBZBZB#--------#####BBBBBBB#-------########################");
				remarkldl.push("priests");
				noteldl.push("288000 Priestess @ 16.7 days");
				troopcounldl.push([0, 0, 0, 0, 288_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">6 sec praetors</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-BZB-##-----##----##BZBZBZB##----##----#-BZBZBZB-#----##----#-BZBZBZB-#----#######-BZBTBZB-#######SMPX#-BZBZBZB-#----##S-P-#-BZBZBZB-#----##----##BZBZBZB##----##-----##BBZB-##-----##BBBBBB#######------##ZZZZZZZBJ#---------##BBBBBBBBB#---------###ZZZZZZZZ#--------#####BBBBBBB#-------########################");
				remarkldl.push("praetors");
				noteldl.push("112000 praetors @ 7.75 days");
				troopcounldl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 112_000, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 150_000, 220_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 150_000, 220_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">7 sec praetors</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBZBB##-----##----##BZBZBZB##----##----#-BZBZBZB-#----##----#-BZBZBZB-#----#######-BZBTBZB-#######SSPX#-BZBZBZB-#----##MDPJ#-BZBZBZB-#----##S---##BZBZBZB##----##-----##BBZBB##-----##-BBBBB#######------##-BZBZBZB-#---------##BBZBZBZB-#---------###BZBZBZB-#--------#####BBBBBB-#-------########################");
				remarkldl.push("praetors");
				noteldl.push("120000 praetors @ 9.7 days");
				troopcounldl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 120_000, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 150_000, 220_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 150_000, 220_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">5 sec arbs</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######MSLX#BEBEBEBEB#----##--PP#BEBEBEBEB#----##----##BBEBEBB##----##-JBBB##BEBEB##-----##-BEBEB#######------##-BEBEB---#---------##-BEBEB---#---------###BEBEB---#--------#####BB-----#-------########################");
				remarkldl.push("arbs");
				noteldl.push("110000 arbs @ 6.5 days");
				troopcounldl.push([0, 0, 0, 0, 0, 0, 0, 0, 110_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">6 sec arbs</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEBEBEB##----##----#-BEBEBEB-#----##----#-BEBEBEB-#----#######-BEBTBEB-#######SMSX#-BEBEBEB-#----##SLPP#-BEBEBEB-#----##----##BEBEBEB##----##-BBBB##BBBBB##-----##-EEEEJ#######------##BBBBBBBBB#---------##BEEEEEEEB#---------###BBBBBBB-#--------#####-------#-------########################");
				remarkldl.push("arbs");
				noteldl.push("120000 arbs @ 8.3 days");
				troopcounldl.push([0, 0, 0, 0, 0, 0, 0, 0, 124_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">7 sec arbs</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######SMSX#BEBBBBBEB#----##SLPP#BEBEBEBEB#----##----##BBEBEBB##----##-----##BBBBB##-----##------#######------##---BBBBBJ#---------##--BEBEBEB#---------###-BEBEBEB#--------#####--BBBB-#-------########################");
				remarkldl.push("arbs");
				noteldl.push("130000 arbs @ 10.5 days");
				troopcounldl.push([0, 0, 0, 0, 0, 0, 0, 0, 124_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">8 sec arbs</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BEBEBJ##----##----#BBBEBEBBB#----##----#BEBBBBBEB#----#######BEBETEBEB#######SMSX#BEBBBBBEB#----##SLPP#BBBEBEBBB#----##----##-BEBEB-##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##--BEBEBEB#---------###-BEBEBEB#--------#####BBBBBBB#-------########################");
				remarkldl.push("arbs");
				noteldl.push("138000 arbs @ 12.8 days");
				troopcounldl.push([0, 0, 0, 0, 0, 0, 0, 0, 124_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 150_000, 350_000]);
				ldl++;
				selectbuttlanddef += `<option value="${ldl}">ballista</option>`;
				layoutldl.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBYBYBB##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######MSDX#BYBYBYBYB#----##----#BYBYBYBYB#----##----##BBYBYBB##----##-BBBB##BBBBB##-----##-BYBYB#######------##-BYBYB---#---------##-BYBYB---#---------###BYBYB---#--------#####BBBB---#-------########################");
				remarkldl.push("baldlista");
				noteldl.push("25600 siege engines @ 10.5 days");
				troopcounldl.push([0, 25_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resldl.push([0, 0, 0, 0, 1, 150_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 150_000, 220_000, 250_000, 350_000]);
				selectbuttlanddef += '</select>';


				let selectbuttwateroff = '<select id="wateroffenselayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Water Offense Layouts</option>';
				let wol = 1;


				selectbuttwateroff += `<option value="${wol}">2 sec vanq/galley+senator</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BGBGB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#---H#######BGBGTGBGB#######----#BGBGBGBGB#JSPX##----#BGBGBGBGB#----##----##BBGBGBB##---B##-----##BGBGB##BBBBZ##------#######BBVVBB##---------#---BV##VB##---------#---BV###V###--------#---BBV#######-------#--BBBBV########################");
				remarkwol.push("vanq/galley+senator");
				notewol.push("193299 inf and 387 galley @ 14 days");
				troopcounwol.push([0, 0, 0, 0, 0, 193_299, 0, 0, 0, 0, 0, 0, 0, 0, 387, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">3 sec vanq/galley+senator</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBBBBBGB#----##----#BBBGBGBBB#----#######BGBBTBBGB#######---X#BGBGBGBGB#----##-SS-#BGBGBGBGB#----##-MD-##BBGBGBB##----##-S---##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##--------J#---BVTTTV###-------P#---BBVTT#####------P#----BBV########################");
				remarkwol.push("vanq/galley+senator");
				notewol.push("219999 inf and 440 galley @ 16.4 days");
				troopcounwol.push([0, 0, 0, 0, 0, 219_999, 0, 0, 0, 0, 0, 0, 0, 0, 440, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">4 sec vanq/galley+senator</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBBBBBBB#----##----#BGBGBGBGB#----#######BBBBTBBGB#######----#BGBGBGBGB#----##----#BBBBBBBBB#----##----##BBGBGB-##----##-----##BBBBB##BBBBB##------#######BBVVBB##---------#SS-BV##VB##---------#DM-BV###V###--------#SP-BBV#######-------#XP-ZBBV########################");
				remarkwol.push("vanq/galley+senator");
				notewol.push("232999 inf and 440 galley @ 22 days");
				troopcounwol.push([0, 0, 0, 0, 0, 232_999, 0, 0, 0, 0, 0, 0, 0, 0, 466, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">5 sec horses/galley</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#---H#######BEBETEBEB#######----#BEBEBEBEB#JSPX##----#BEBEBEBEB#-M--##----##EBEBEBB##----##-----##BEBEB##BBBB-##------#######BBVVBB##---------#---BV##VB##---------#---BV###V###--------#--BBBV#######-------#--BEBBV########################");
				remarkwol.push("horses/galley");
				notewol.push("90000 cav and 360 galley @ 10.5 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90_000, 0, 0, 0, 360, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">6 sec horses/galley</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##EBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SDPP##----##EBEBEBB##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################");
				remarkwol.push("horses/galley");
				notewol.push("95000 cav and 380 galley @ 16 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95_000, 0, 0, 0, 380, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">7 sec horses/galley</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##BBBBBBB##----##----#BEEEEEEEB#----##----#BBBBBBBBB#----#######EEEETEEEB#######----#BBBBBBBBB#BBZ-##----#BEEEEEEEB#BBBB##----##BBBBBBB##BEBB##-----##-----##BBBBB##------#######BBVVBB##---------#SS-BV##VB##---------#M--BV###V###--------#PP-BBV#######-------#X--JBBV########################");
				remarkwol.push("horses/galley");
				notewol.push("103299 cav and 414 galley @ 18.5 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103_299, 0, 0, 0, 414, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">5 sec sorc/galley</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##JBJBJ##-----##----##BJBJBJB##----##----#JBJBJBJBJ#----##----#JBJBJBJBJ#---H#######JBJBTBJBJ#######----#JBJBJBJBJ#-S-X##----#JBJBJBJBJ#----##----##BJBJBJB##JJ--##-----##JBJBJ##BBBBJ##------#######BBVVBB##---------#--JBV##VB##---------#--JBV###V###--------#---BBV#######-------#---JBBV########################");
				remarkwol.push("sorc/galley");
				notewol.push("156600 sorc and 314 galley @ 13.5 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 156_600, 0, 0, 0, 0, 0, 0, 0, 314, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">6 sec sorc/galley</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##JJJJJJJ##----##----#BBBBBBBBB#----##----#JJJJJJJJJ#----#######BBBBTBBBB#######----#JJJJJJJJJ#----##----#BBBBBBBBB#----##----##JJJJJJJ##BJ--##-----##BBBBB##BBBBE##------#######BBVVBB##---------#SS-BV##VB##---------#M--BV###V###--------#P--BBV#######-------#X--ZBBV########################");
				remarkwol.push("sorc/galley");
				notewol.push("173299 sorc and 387 galley @ 25 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 173_299, 0, 0, 0, 0, 0, 0, 0, 387, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">7 sec sorc/galley</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######---X#BJBJBJBJB#----##-SS-#BJBJBJBJB#----##-MD-##JBJBJBJ##----##-S---##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###-------P#---BBVTT#####------P#B---BBV########################");
				remarkwol.push("sorc/galley");
				notewol.push("193299 sorc and 347 galley @ 20.5 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 193_299, 0, 0, 0, 0, 0, 0, 0, 347, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">vanqs+ports+senator</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######----#BGBBBBBGB#PPJX##----#BGBGBGBGB#BBBB##----##BBGBGBB##BBBB##-----##BBBBB##BBBBB##------#######-BRRBB##---------#----R##RZ##---------#----R###R###--------#----SR#######-------#----MSR########################");
				remarkwol.push("vanqs+senator+ports");
				notewol.push("264k infantry @ 10 days");
				troopcounwol.push([0, 0, 0, 100_000, 0, 164_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reswol.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 350_000]);
				wol++;
				selectbuttwateroff += `<option value="${wol}">Warships</option>`;
				layoutwol.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#---------#----##----#---------#----#######-SS-TP---#######-XBB#-ML--P---#BBBB##--BB#-S-------#BBBB##--BB##-------##BBBB##--BBB##-----##BBBBB##--BBBB#######BBVVBB##--BBBBBBB#BBBBV##VB##-BBJBZBBB#BBBBV###V###BBBBBBBB#BBBBBV#######BBBBBBB#BBBBBBV########################");
				remarkwol.push("warships");
				notewol.push("819 warships @ 42 days");
				troopcounwol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 819]);
				reswol.push([0, 0, 0, 0, 1, 500_000, 500_000, 500_000, 500_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 500_000, 500_000, 500_000, 500_000]);
				selectbuttwateroff += '</select>';



				let selectbuttwaterdef = '<select id="waterdefenselayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Water Defense Layouts</option>';
				let wdl = 1;

				selectbuttwaterdef += `<option value="${wdl}">2/3 sec R/T/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-GBG-##-----##----##GBGBGBG##----##----#BGBGBGBG-#----##----#BGBGBGBGB#----#######BGBGTGBGB#######---X#BGBGBGBGB#----##-SS-#-GBGBGBG-#----##-MD-##GBGBGBG##GGG-##-S---##-GBG-##BBBBG##------#######BBVVBB##---------#--GBVTTVB##--------J#--GBVTTTV###-------P#---BBVTT#####------P#---GBBV########################");
				remarkwdl.push("R/T/galley");
				notewdl.push("166600 inf and 334 galley @ 10 days");
				troopcounwdl.push([0, 0, 83_300, 83_300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">3/3 sec R/T/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BGBGB##-----##----##GBGBGBG##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######---X#BGBGBGBGB#----##-SS-#BGBGBGBGB#----##-MD-##GBGBGBG##----##-S---##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##--------J#---BVTTTV###-------P#---BBVTT#####------P#----BBV########################");
				remarkwdl.push("R/T/galley");
				notewdl.push("180000 inf and 360 galley @ 15 days");
				troopcounwdl.push([0, 0, 90_000, 90_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">2 sec Ranger/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BGBGB##-----##----##GBGBGBG##----##----#BGBGBGBGB#----##----#BGBGBGBGB#---H#######BGBGTGBGB#######----#BGBGBGBGB#JSPX##----#BGBGBGBGB#----##----##GBGBGBG##G---##-----##BGGGB##BBBBG##------#######BBVVBB##---------#--GBV##VB##---------#--GBV###V###--------#---BBV#######-------#----BBV########################");
				remarkwdl.push("Ranger/galley");
				notewdl.push("166600 inf and 334 galley @ 10 days");
				troopcounwdl.push([0, 0, 166_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">3 sec Ranger/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-BBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#SMSX##----#BGBGBGBGB#SLPP##----##BBGBGBB##----##-----##BBBBB##BBBBJ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---BBBV########################");
				remarkwdl.push("Ranger/galley");
				notewdl.push("196600 inf and 394 galley @ 16 days");
				troopcounwdl.push([0, 0, 196_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 394, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">4 sec Ranger/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBBBBBGB#----##----#BBBGBGBBB#----#######BGBBTBBGB#######----#BGBGBGBGB#SMSX##----#BGBGBGBGB#SLPP##----##BBGBGBB##----##-----##BBBBB##BBBBJ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#----BBV########################");
				remarkwdl.push("Ranger/galley");
				notewdl.push("216600 inf and 434 galley @ 20.5 days");
				troopcounwdl.push([0, 0, 216_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_450_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">3 sec priestess/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##ZBZBZBZ##----##----#BZBZBZBZB#----##----#BZBZBZBZB#---H#######BZBZTZBZB#######----#BZBZBZBZB#JSPX##----#BZBZBZBZB#----##----##ZBZBZBZ##-Z--##-----##BZZZB##BBBBZ##------#######BBVVBB##---------#---BV##VB##---------#--ZBV###V###--------#---BBV#######-------#---ZBBV########################");
				remarkwdl.push("priestess/galley");
				notewdl.push("166600 inf and 334 galley @ 11 days");
				troopcounwdl.push([0, 0, 0, 0, 166_600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 334, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">4 sec priestess/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SMPX##----#BZBZBZBZB#SDPJ##----##BBZBZBB##----##-----##BZBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---BBBV########################");
				remarkwdl.push("priestess/galley");
				notewdl.push("189999 inf and 380 galley @ 18 days");
				troopcounwdl.push([0, 0, 0, 0, 189_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">5 sec priestess/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BBBZBZBBB#----#######BZBZTZBZB#######----#BBBZBZBBB#SMPX##----#BZBZBZBZB#SDPJ##----##BBZBZBB##----##-----##BZBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---BBBV########################");
				remarkwdl.push("priestess/galley");
				notewdl.push("209999 inf and 420 galley @ 22 days");
				troopcounwdl.push([0, 0, 0, 0, 209_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 420, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">6 sec priestess/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBBBBBZB#----##----#BBBZBZBBB#----#######BZBBTBBZB#######----#BZBZBZBBB#SMSX##----#BZBZBZBZB#SDPP##----##BBZBZBB##----##-----##BBBBB##BBBBJ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#----BBV########################");
				remarkwdl.push("priestess/galley");
				notewdl.push("219999 inf and 440 galley @ 22 days");
				troopcounwdl.push([0, 0, 0, 0, 219_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 440, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 220_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">6 sec arbs/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BEBEB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SLPP##----##EBEBEBE##----##-----##-EBE-##BBBBE##------#######BBVVBB##---------#--JBVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---EBBV########################");
				remarkwdl.push("arbs/galley");
				notewdl.push("81650 inf and 327 galley @ 13.5 days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 81_650, 0, 0, 0, 0, 0, 327, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 150_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">7 sec arbs/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##EBEBEBE##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SLPP##----##EBEBEBE##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################");
				remarkwdl.push("arbs/galley");
				notewdl.push("91650 inf and 367 galley @ 16.5 days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 91_650, 0, 0, 0, 0, 0, 367, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 150_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">8 sec arbs/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMSX##----#BEBEBEBEB#SLPP##----##BBEBEBB##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################");
				remarkwdl.push("arbs/galley");
				notewdl.push("98300 inf and 394 galley @ 16.5 days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 98_300, 0, 0, 0, 0, 0, 394, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 150_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 150_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">7 sec praetor/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BZBZB##-----##----##ZBZBZBZ##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SPJX##----#BZBZBZBZB#MH--##----##ZBZBZBZ##----##-----##BZBZB##BBBBZ##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#--BZBBV########################");
				remarkwdl.push("praetors/galley");
				notewdl.push("86650 praetors and 347 galley @ 12 days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 86_650, 0, 0, 0, 0, 347, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">8 sec praetor/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBZB##-----##----##ZBZBZBZ##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SMSX##----#BZBZBZBZB#SDPP##----##ZBZBZBZ##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################");
				remarkwdl.push("praetors/galley");
				notewdl.push("89999 praetors and 360 galley @ 17 days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 89_999, 0, 0, 0, 0, 360, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">9 sec praetor/galley</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SMSX##----#BZBZBZBZB#SDPP##----##ZBZBZBB##----##-----##BBBBB##BBBB-##------#######BBVVBB##---------#---BVTTVB##---------#---BVTTTV###--------#---BBVTT#####-------#---JBBV########################");
				remarkwdl.push("praetors/galley");
				notewdl.push("96649 praetors and 387 galley @ 19.5 days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 96_649, 0, 0, 0, 0, 387, 0, 0]);
				reswdl.push([0, 0, 0, 0, 1, 250_000, 250_000, 250_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 350_000, 1_350_000]);
				wdl++;
				selectbuttwaterdef += `<option value="${wdl}">Stingers</option>`;
				layoutwdl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#---------#----##----#---------#----#######-SS-TPP--#######-XBB#-ML--PP--#BBBB##--BB#-S-------#BBBB##--BB##-------##BBBB##--BBB##-----##BBBBB##--BBBB#######BBVVBB##--BBBBBBB#BBBBV##VB##--BJBZBBB#BBBBV###V###-BBBBBBB#BBBBBV#######BBBBBBB#BBBBBBV########################");
				remarkwdl.push("stingers");
				notewdl.push("3198 stingers @ 49days");
				troopcounwdl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3198, 0]);
				reswdl.push([0, 0, 0, 0, 1, 500_000, 500_000, 500_000, 500_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 500_000, 500_000, 500_000, 500_000]);
				selectbuttwaterdef += '</select>';


				let selectbutthub = '<select id="hublayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Hubs Layouts</option>';
				let hul = 1;

				selectbutthub += `<option value="${hul}">Cluster Hub 9K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#SASMSDSLS#----##----#SASMSDSLS#----#######SASMTDSLS#######----#SASMSDSLS#PPPP##----#SASMSDSLS#PPPP##----##-------##PPPP##-----##-----##PPPPP##------#######PPRRPP##--------P#PPPPR##RP##-------ZP#PPPPR###R###------BP#PPPPPR#######-----JP#PPPPPPR########################");
				remarkhul.push("Hub");
				notehul.push("9K Carts, 15375000 W/S, 14175000 I/F ");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 15_375_000, 15_375_000, 14_175_000, 14_175_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Cluster Hub 6.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##MSMSM##-----##----##SSSSSSS##----##----#-AAAAAAM-#----##----#-SSSSSSS-#----#######-MMMTDDD-#######----#-SSSSSSS-#PPPP##----#-LLLLLLD-#PPPP##----##SSSSSSS##PPPP##-----##DSDSD##PPPPP##------#######PPRRPP##---------#J-PPR##RP##---------#B-PPR###R###--------#Z--PPR#######-------#---PPPR########################");
				remarkhul.push("Hub");
				notehul.push("6200K Carts, 20,175,000 W/S, 19,175,000 I/F ");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 20_175_000, 20_175_000, 19_175_000, 19_175_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Cluster Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASLS##-----##----##DSASLSM##----##----#SDSASLSMS#----##----#SDSASLSMS#----#######SDSATLSMS#######----#SDSASLSMS#PPPP##----#SDSASLSMS#PPPP##----##DSASLSM##PPPP##-----##SASLS##PPPPP##------#######-PRRPP##---------#Z---R##RP##---------#B---R###R###--------#J----R#######-------#------R########################");
				remarkhul.push("Hub");
				notehul.push("4200K Carts, 26,175,000 W/S, 21,175,000 I/F use cluster transport with this ");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 26_175_000, 26_175_000, 21_175_000, 21_175_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Maj Hub Land 14.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##PPPPP##-----##----##-PPPPP-##----##----#---SLS---#----##----#ZSLSMSAS-#----#######BSDSTSDS-#######----#JSLSMSAS-#PPPP##----#---SAS---#PPPP##----##-------##PPPP##-----##PPPPP##PPPPP##------#######PPPPPP##---------#PPPPPPPPP##---------#PPPPPPPPP###--------#PPPPPPPP#####-------#PPPPPPP########################");
				remarkhul.push("Hub");
				notehul.push("14200K Carts, 8,975,000 W/S, 8,175,000");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8_975_000, 8_975_000, 8_175_000, 8_175_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Maj Hub Water 12.6K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##PPPPP##-----##----##-PPPPP-##----##----#---SLS---#----##----#ZSLSMSAS-#----#######BSDSTSDS-#######----#JSLSMSAS-#PPPP##----#---SAS---#PPPP##----##PPPPPPP##PPPP##-----##PPPPP##PPPPP##------#######PPRRPP##---------#PPPPR##RP##---------#PPPPR###R###--------#PPPPPR#######-------#PPPPPPR########################");
				remarkhul.push("Hub");
				notehul.push("12600K Carts, 8,975,000 W/S, 8,175,000 I/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8_975_000, 8_975_000, 8_175_000, 8_175_000]);
				hul++;


				selectbutthub += `<option value="${hul}">Cluster transport 12.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######--PPPP##-----##-----##-PPPP##----##MMM----##PPPP##----#SSSS-----#PPPP##----#AAAAM-J--#PPPP#######SSSST-B--#######----#LLLLD-Z--#PPPP##----#SSSS-----#PPPP##----##DDD----##PPPP##-----##-----##PPPPP##------#######PPRRPP##---------#PPPPR##RP##---------#PPPPR###R###--------#PPPPPR#######-------#PPPPPPR########################");
				remarkhul.push("Hub");
				notehul.push("12,200K Carts, 10,575,000 W/S, 6,575,000 I/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 10_575_000, 10_575_000, 6_575_000, 6_575_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Temple Storage</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SLSAS##-----##----##LSLSASA##----##----#SLSLSASAS#----##----#SLSLSASAS#----#######SLSLTASAS#######----#SLSLSASAS#JBZ-##----#SLSLSASAS#----##----##LSLSASA##----##-----##SLSAS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################");
				remarkhul.push("Temple Storage");
				notehul.push("4200K Carts, 40,575,000 W/S, 7,375,000 I/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 40_575_000, 7_375_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Temple Hub</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##-----##-----##----##-------##----##----#SASASLSLS#----##----#SASASLSLS#----#######SASATLSLS#######----#SASASLSLS#PPPP##----#SASASLSLS#PPPP##----##-------##PPPP##-----##-----##PPPPP##------#######PPRRPP##--------P#PPPPRTTRP##-------ZP#PPPPRTTTR###------BP#PPPPPRTT#####-----JP#PPPPPPR########################");
				remarkhul.push("Temple Hub");
				notehul.push("9000K Carts, 24,575,000 W/S, 4,975,000 I/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 24_575_000, 24_575_000, 4_975_000, 4_975_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Temple Transport</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##--PPP##-----##----##JBZPPPP##----##----#-SS-PPPP-#----##----#AAAAPPPP-#----#######SSSSTPPP-#######----#LLLLPPPP-#PPPP##----#-SS-PPPP-#PPPP##----##---PPP-##PPPP##-----##--PPP##PPPPP##------#######PPRRPP##---------#PPPPR##RP##---------#PPPPR###R###--------#PPPPPR#######-------#PPPPPPR########################");
				remarkhul.push("Temple Transport");
				notehul.push("14,600 Carts, 8,175,000 W/S, 1,775,000 I/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8_175_000, 8_175_000, 1_775_000, 1_775_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Food Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SMSMS##-----##----##MSMSMSM##----##----#SMSMSMSMS#----##----#SMSMSMSMS#----#######SMSMTMSMS#######----#SMSMSMSMS#JBZ-##----#SMSMSMSMS#----##----##MSMSMSM##----##-----##SMSMS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################");
				remarkhul.push("Food Hub");
				notehul.push("4200K Carts, 7,375,000 W/S/I, 73,775,000 Food");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 7_375_000, 7_375_000, 73_775_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Iron Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SDSDS##-----##----##DSDSDSD##----##----#SDSDSDSDS#----##----#SDSDSDSDS#----#######SDSDTDSDS#######----#SDSDSDSDS#JBZ-##----#SDSDSDSDS#----##----##DSDSDSD##----##-----##SDSDS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################");
				remarkhul.push("Iron Hub");
				notehul.push("4200K Carts, 7,375,000 W/S/F, 73,775,000 Iron");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 7_375_000, 73_775_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Stone Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASAS##-----##----##ASASASA##----##----#SASASASAS#----##----#SASASASAS#----#######SASATASAS#######----#SASASASAS#JBZ-##----#SASASASAS#----##----##ASASASA##----##-----##SASAS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################");
				remarkhul.push("Stone Hub");
				notehul.push("4200K Carts, 7,375,000 W/I/F, 73,775,000 Stone");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 73_775_000, 7_375_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Wood Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SLSLS##-----##----##LSLSLSL##----##----#SLSLSLSLS#----##----#SLSLSLSLS#----#######SLSLTLSLS#######----#SLSLSLSLS#JBZ-##----#SLSLSLSLS#----##----##LSLSLSL##----##-----##SLSLS##PPPPP##------#######PPRRPP##---------#--PPRTTRP##---------#--PPRTTTR###--------#--PPPRTT#####-------#--PPPPR########################");
				remarkhul.push("Wood Hub");
				notehul.push("4200K Carts, 7,375,000 S/I/F, 73,775,000 Wood");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 73_775_000, 7_375_000, 7_375_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Wood/Stone Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASLS##-----##----##ASASLSL##----##----#SASASLSLS#----##----#SASASLSLS#----#######SASATLSLS#######----#SASASLSLS#----##----#SASASLSLS#----##----##ASASLSL##PPPP##-----##SASLS##PPPPP##------#######PPRRPP##---------#---PR##RP##---------#Z--PR###R###--------#B--PPR#######-------#J--PPPR########################");
				remarkhul.push("Wood/Stone Hub");
				notehul.push("4200K Carts, 40,575,000 W/S, 7,375,000 I/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 40_575_000, 7_375_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Stone/Food Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASMS##-----##----##ASASMSM##----##----#SASASMSMS#----##----#SASASMSMS#----#######SASATMSMS#######----#SASASMSMS#PPPP##----#SASASMSMS#PPPP##----##ASASMSM##PPPP##-----##SASMS##PPPPP##------#######-PRRPP##---------#----R##RP##-------Z-#----R###R###------B-#-----R#######-----J-#------R########################");
				remarkhul.push("Stone/Food Hub");
				notehul.push("4200K Carts, 40,575,000 S/F, 7,375,000 W/I");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 40_575_000, 7_375_000, 40_575_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Stone/Iron Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SASDS##-----##----##ASASDSD##----##----#SASASDSDS#----##----#SASASDSDS#----#######SASATDSDS#######----#SASASDSDS#PPPP##----#SASASDSDS#PPPP##----##ASASDSD##PPPP##-----##SASDS##PPPPP##------#######-PRRPP##---------#----R##RP##---------#Z---R###R###--------#B----R#######-------#J-----R########################");
				remarkhul.push("Stone/Iron Hub");
				notehul.push("4200K Carts, 40,575,000 S/I, 7,375,000 W/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7_375_000, 40_575_000, 40_575_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Iron/Wood Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SDSLS##-----##----##DSDSLSL##----##----#SDSDSLSLS#----##----#SDSDSLSLS#----#######SDSDTLSLS#######----#SDSDSLSLS#PPPP##----#SDSDSLSLS#PPPP##----##DSDSLSL##PPPP##-----##SDSLS##PPPPP##------#######-PRRPP##---------#----R##RP##-------Z-#----R###R###------B-#-----R#######-----J-#------R########################");
				remarkhul.push("Iron/Wood Hub");
				notehul.push("4200 Carts, 40,575,000 I/W, 7,375,000 S/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 7_375_000, 40_575_000, 7_375_000]);
				hul++;

				selectbutthub += `<option value="${hul}">Food/Wood Hub 4.2K</option>`;
				layouthul.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##SLSMS##-----##----##LSLSMSM##----##----#SLSLSMSMS#----##----#SLSLSMSMS#----#######SLSLTMSMS#######----#SLSLSMSMS#PPPP##----#SLSLSMSMS#PPPP##----##LSLSMSM##PPPP##-----##SLSMS##PPPPP##------#######-PRRPP##---------#----R##RP##---------#Z---R###R###--------#B----R#######-------#J-----R########################");
				remarkhul.push("Food/Wood Hub");
				notehul.push("4200K Carts, 40,575,000\nI/W 7,375,000 S/F");
				troopcounhul.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				reshul.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40_575_000, 7_375_000, 7_375_000, 40_575_000]);
				selectbutthub += '</select>';

				let selectbuttshipper = '<select id="shipperlayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Shipper Layouts</option>';
				let shl = 1;

				selectbuttshipper += `<option value="${shl}">252K 3/4 sec R/T Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBGB#----##----#BGBGBGBBB#----#######BGBGTGBGB#######----#BGBGBGBBB#SMSX##----#BGBGBGBGB#S---##----##BBGBGBB##----##-----##BBBBB##-----##---BBB#######--RR--##---JBBBBB#----RTTR-##----BGBGB#----RTTTR###---BBBBB#-----RTT#####-------#------R########################");
				remarkshl.push("252K 3/4s R/T Shipper");
				noteshl.push("252KTS 126K Rangers 126K Triari @ 10 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate");
				troopcounshl.push([0, 0, 126_000, 126_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">256K 4sec Ranger Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBBBBBGB#----##----#BBBGBGBBB#----#######BGBBTBBGB#######----#BGBGBGBGB#PP-X##----#BGBGBGBGB#----##----##BBGBGBB##----##-----##BBBB-##BBBB-##------#######BBRRBB##---------#-D-BR##RB##---------#SASBR###R###--------#SL-BBR#######-------#---JBBR########################");
				remarkshl.push("256K 4S Ranger Shipper");
				noteshl.push("256KTS 256K Rangers 126K Triari @ 12.8 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate");
				troopcounshl.push([0, 0, 256_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">240K 3/4 sec R/T +Sen Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBBB#----##----#BGBBBBBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#SLPX##----#BGBGBGBGB#SDPJ##----##BBGBGBB##----##-----##BBBBB##-----##------#######--RR--##---------#BBBBRTTR-##---------#BGBZRTTTR###--------#BGBB-RTT#####-------#BBBB--R########################");
				remarkshl.push("240K 3/4s R/T +Sen Shipper");
				noteshl.push("240KTS 120K Rangers 120K Triari @ 10 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate");
				troopcounshl.push([0, 0, 120_000, 120_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">224K 3/3 sec R/T Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#SLPX##----#BGBGBGBGB#S-P-##----##BBGBGBG##----##-----##BBBGB##-----##--BBBB#######--RR--##--BGBJ---#----RTTR-##--BGBB---#----RTTTR###-BGB----#-----RTT#####BBB----#------R########################");
				remarkshl.push("224K 3/3s R/T Shipper");
				noteshl.push("224KTS 112K Rangers 112K Triari @ 8 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate");
				troopcounshl.push([0, 0, 112_000, 112_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">248K 3sec Ranger Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BGGGGGB##----##----#BBBBBBBBB#----##----#BGGGBGGGB#----#######BBBBTBBBB#######----#BGGGBGGGB#SLPX##----#BBBBBBBBB#S-PJ##----##BGGBGGB##----##-----##BBBBB##-----##------#######--RR--##---------#BBBBRTTR-##---------#BGBBRTTTR###--------#BGBB-RTT#####-------#BBBBB-R########################");
				remarkshl.push("248K 3s Ranger Shipper");
				noteshl.push("248KTS 248K Rangers @ 9 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate");
				troopcounshl.push([0, 0, 248_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">264K 4sec Ranger Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BGB-TGBBB#######----#BGBBBBBGB#SSPJ##----#BBBGBGBBB#MLPX##----##BBGBGBB##S---##-----##BBBBB##-----##------#######--RR--##---BBBBB-#----R##R-##---BGGGBB#----R###R###--BBBBB-#-----R#######-------#------R########################");
				remarkshl.push("264K 3s Ranger Shipper");
				noteshl.push("264KTS 264K Rangers @ 12 days  Substitute sawmill, masons hut, smelter or grain mill, as appropriate");
				troopcounshl.push([0, 0, 264_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">260K 6sec Priest Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#BBZBBBZBB#----##----#BBZBZBZBB#----#######BBZBTBZBB#######----#BBZBZBZBB#DAPX##----#BBBBBBZBB#SSP-##----##BZBZBZB##ML--##-----##BBBBB##-----##------#######--RR--##---------#BBB-RTTR-##---------#BBBJRTTTR###--------#BBBB-RTT#####-------#BBBB--R########################");
				remarkshl.push("260K 6s Priestess Shipper");
				noteshl.push("260KTS 260K Priestess @ 18 days ");
				troopcounshl.push([0, 0, 0, 0, 260_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">248K 6sec Priest Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBZB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######----#-BZBZBZB-#-AD-##----#-BBBBBZB-#SSSS##----##BZBZBZB##-LM-##BBBB-##BBBBB##-----##BZBZB-#######--RR--##BBBBB----#X---R##R-##BJBZB----#----R###R###BBBB----#-----R#######-------#PP----R########################");
				remarkshl.push("248K 6s Priestess Shipper");
				noteshl.push("248KTS 260K Priestess @ 17.2 days ");
				troopcounshl.push([0, 0, 0, 0, 248_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;


				selectbuttshipper += `<option value="${shl}">248K 5sec Priest Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBBB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######----#-BZBZBZB-#SSPX##----#-BBBBBZB-#MDP-##----##BZBZBZB##S---##-----##BBBBB##-----##BBBBB-#######--RR--##BZZZB----#----R##R-##BBBBBB---#----R###R###JBZZZ---#-----R#######BBBB---#------R########################");
				remarkshl.push("248K 5s Priestess Shipper");
				noteshl.push("248KTS 248K Priestess @ 14.5 days ");
				troopcounshl.push([0, 0, 0, 0, 248_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">228K 4sec Priest Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBZTZBZB#######----#BZBZBZBZB#SS-X##----#BZBZBZBZB#LD-P##----##BBZBZBB##SS-P##-----##BBBBB##-----##------#######--RR--##---------#BBB-R##R-##---------#BZBBR###R###--------#BZBB-R#######-------#BBBB--R########################");
				remarkshl.push("228K 4s Priestess Shipper");
				noteshl.push("228KTS 228K Priestess @ 12.2 days ");
				troopcounshl.push([0, 0, 0, 0, 228_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">196KTS 7sec Praetor Ship</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BZBZBZB##----##----#-BBBBBBB-#----##----#-BZBZBZB-#----#######-BBBTBZB-#######----#-BZBZBZB-#SSPX##----#-BBBBBZB-#MDP-##----##BZBZBZB##S---##-----##BBBBB##-----##BBBBB-#######--RR--##BZZZB----#----R##R-##BBBBBB---#----R###R###JBZZZ---#-----R#######BBBB---#------R########################");
				remarkshl.push("216K 7s Praetor Shipper");
				noteshl.push("196KTS 98000 Praetor @ 8.75 days ");
				troopcounshl.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 98_000, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">188K 5sec Priest Mini Hub</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBZBZBZB#----#######BZBBTBBBB#######----#BZBZBZBZB#SASM##----#BZBZBZBZB#SLSD##----##BBZBZBB##----##-----##BBBBB##PPPP-##------#######PPRRPP##---------#X--PRTTRP##---------#---PRTTTR###--------#---PPRTT#####-------#----JPR########################");
				remarkshl.push("188K 5s Priest Mini Hub");
				noteshl.push("2800 carts, 188KTS 188000 Priest @ 11 days ");
				troopcounshl.push([0, 0, 0, 0, 188_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				shl++;

				selectbuttshipper += `<option value="${shl}">176K 3/4sec R/T Mini Hub</option>`;
				layoutshl.push("[ShareString.1.3];########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BGBGBGBGB#----##----#BGBGBGBGB#----#######BGBGTGBGB#######----#BGBGBGBGB#----##----#BGBGBGBGB#----##----##BBGBGBB##----##-----##BBBBB##PPPP-##------#######PPRRPP##---------#AL-PRTTRP##---------#SS-PRTTTR###--------#MD-PPRTT#####-------#XJZ-PPR########################");
				remarkshl.push("176K 3/4sec R/T Mini Hub");
				noteshl.push("3000 carts, 176KTS 88K rangers, 88K Triari @ 7 days ");
				troopcounshl.push([0, 0, 88_000, 88_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				resshl.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 350_000, 350_000, 300_000, 1_400_000]);
				selectbuttshipper += '</select>';

				let selectbuttportal = '<select id="portallayouts" style="font-size: 10px !important;margin-top:1%;margin-left:2%;width:45%;" class="regButton greenb"><option value="0">Portal Layouts</option>';
				let pol = 1;

				selectbuttportal += `<option value="${pol}">3 sec vanqs </option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######SSPX#BGBBBBBGB#----##MDP-#BBBGBGBBB#----##S---##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BGGBGB#---------###--BBBBBB#--------#####-JBZBBB#-------########################");
				remarkpol.push("vanqs");
				notepol.push("292000 vanqs @ 10 days");
				troopcounpol.push([0, 0, 0, 0, 0, 291_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">4 sec vanqs Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGBB##----##----#BBBBBBBBB#----##----#BGBGBGBGB#----#######BBBBTBBGB#######SMSX#BGBGBGBGB#----##SDPP#BBBBBBBBB#----##----##BBGBGBB##----##-----##BBBBB##-----##------#######------##---BBBBBB#---------##---BBBBBB#---------###--BBBBBB#--------#####-BBJBZB#-------########################");
				remarkpol.push("vanqs");
				notepol.push("308000 vanqs @ 14.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 307_999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">6 sec Sorcs Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBJBJBB##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######----#BJBJBJBJB#SPJX##----#BJBJBJBJB#SP--##----##BBJBJBB##BBBB##-----##BBBBB##BJBJB##------#######-BJBJB##---------#----BJBJB##---------#----BBBBB###--------#-----B-B#####-------#-------########################");
				remarkpol.push("Sorcs");
				notepol.push("256000 Sorcs @ 17.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 256_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">5 sec Horse Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEEEEEB##----##----#BBBBBBBBB#----##----#BEEEEEEEB#----#######BBBBTBBBB#######----#BEEEEEEEB#SPJX##----#BBBBBBBBB#S---##----##BEEEEEB##BBB-##-----##BBBBB##BBBBB##------#######-BEEEB##---------#----BBBBB##---------#----BEEEB###--------#----BBBB#####-------#-------########################");
				remarkpol.push("Horse");
				notepol.push("260KTS 130,000 Horse @ 7.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130_000, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">6 sec Horse Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######----#BEBBBBBEB#SMPX##----#BEBEBEBEB#SDPJ##----##BBEBEBB##----##-----##BBBBB##-----##------#######BBBBB-##---------#---BEBEB-##---------#---BBBBB-###--------#---BEBEB#####-------#---BBBB########################");
				remarkpol.push("Horse");
				notepol.push("272KTS 136,000 Horse @ 9.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136_000, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">10 sec Druids Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######----#BJBJBJBJB#SS-X##----#BJBJBJBJB#----##----##JBJBJBJ##----##-----##BJBJB##BBBBB##------#######JJJJJJ##---------#--BBBBBBB##---------#--JJJJJJ-###--------#--BBBBB-#####-------#-------########################");
				remarkpol.push("Druids");
				notepol.push("212KTS 106,000 Druids @ 12.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106_000, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">11 sec Druids Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BJBJB##-----##----##JBJBJBJ##----##----#BJBJBJBJB#----##----#BJBJBJBJB#----#######BJBJTJBJB#######----#BJBJBJBJB#---X##----#BJBJBJBJB#----##----##JBJBJBJ##----##-----##BJBJB##-----##------#######BBBBB-##---------#BBBBBBBBB##---------#JJJJJJJJB###--------#BBBBBBBB#####-------#-------########################");
				remarkpol.push("Druids");
				notepol.push("236KTS 118,000 Druids @ 15 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118_000, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">14 sec Druids Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BJBJBJB##----##----#-BJBJBJB-#----##----#-BJBJBJB-#----#######-BBBTBJB-#######SDSX#-BJBJBJB-#----##SMPP#-BJBJBJB-#----##----##BJBJBJB##----##BBBBB##BBBBB##-----##BJJJJ-#######------##BBBBBBBB-#---------##BJJJJJJJ-#---------###BBBBBBBB#--------#####-------#-------########################");
				remarkpol.push("Druids");
				notepol.push("280KTS 140,000 Druids @ 22.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140_000, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">18 sec Druids Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BJBJB-##----##----#BBBJBJBBB#----##----#BJBJBBBJB#----#######BBBJTJBJB#######----#BJBBBBBBB#S--X##----#BBBJBJB--#M---##----##-BJBJB-##----##-----##BBBBB##BBB--##------#######BBJB--##---------#BBBBBJB--##---------#BJBJBBB--###--------#BJBJBJB-#####-------#BBBBBBB########################");
				remarkpol.push("Druids");
				notepol.push("300KTS 150k Druids @ 31.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150_000, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">252K 40 sec Scorpions Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BYBYB##-----##----##BBYBYBB##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######----#BYBYBYBYB#SS-X##----#BYBYBYBYB#----##----##BBYBYBB##----##-----##BYBYB##-----##------#######------##---------#-BBBBBB--##---------#BYBYBYBB-###--------#BYBYBYBB#####-------#BBBBBBB########################");
				remarkpol.push("Scorps");
				notepol.push("252KTS 25,200 Scorps @ 11.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25_200, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">284K 48 sec Scorpions Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##YBYBYBY##----##----#BBBYBYBBB#----##----#BYBBBBBYB#----#######BYBYTYBYB#######----#BYBBBBBYB#SS-X##----#BBBYBYBBB#----##----##YBYBYBY##----##-----##BBBBB##BBB--##------#######-BYB--##---------#--BBBYB--##---------#-BBYBYB--###--------#-BBYBYB-#####-------#-BBBBBB########################");
				remarkpol.push("Scorps");
				notepol.push("284KTS 28,400 Scorps @ 16 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28_400, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">256K 25 sec Rams Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BYBYB##-----##----##BBYBYBB##----##----#BYBYBYBYB#----##----#BYBYBYBYB#----#######BYBYTYBYB#######----#BYBYBYBYB#SS-X##----#BYBYBYBYB#----##----##BBYBYBB##----##-----##BBBYB##-----##------#######------##---------#-BBBBBB--##---------#BYBYBYBB-###--------#BYBYBYBB#####-------#BBBBBBB########################");
				remarkpol.push("Battering Rams");
				notepol.push("256KTS 25,600 Scorps @ 7.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25_600, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">284K 30 sec Rams Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##YBYBYBY##----##----#BBBYBYBBB#----##----#BYBBBBBYB#----#######BYBYTYBYB#######----#BYBBBBBYB#SS-X##----#BBBYBYBBB#----##----##YBYBYBY##----##-----##BBBBB##BBB--##------#######-BYB--##---------#--BBBYB--##---------#-BBYBYB--###--------#-BBYBYB-#####-------#-BBBBBB########################");
				remarkpol.push("Battering Rams");
				notepol.push("284KTS 28,400 Rams @ 10 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28_400, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">3/3 R/T Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##GBGBGBG##----##----#BBBGBGBBB#----##----#BGBGBGBGB#----#######BBBGTGBGB#######----#BGBGBGBGB#S-PX##----#BBBGBGBBB#S-P-##----##GBGBGBG##----##-----##BBBBB##-----##------#######BBBB--##---------#--BGBGBB-##---------#--BBBGBJ-###--------#--BGBGBB#####-------#--BBBBB########################");
				remarkpol.push("R/T");
				notepol.push("264KTS 132000 Ranger, 132000 Triari @ 9 days");
				troopcounpol.push([0, 0, 132_000, 132_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">3/4 R/T Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##GBGBGBG##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BBBGTGBBB#######----#BGBBBBBGB#SSPJ##----#BBBGBGBBB#MLPX##----##GBGBGBG##----##-----##BBBBB##-----##------#######------##---------#BBBBBB---##---------#BGGGBB---###--------#BGGBBB--#####-------#BBBBBB-########################");
				remarkpol.push("R/T");
				notepol.push("276KTS 138000 Ranger, 138000 Triari @ 11 days");
				troopcounpol.push([0, 0, 138_000, 138_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">4/4 R/T Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBGBGB-##----##----#BBBGBGBBB#----##----#BGBBBBBGB#----#######BGBBTBBBB#######----#BGBGBGBGB#SSPJ##----#BBBGBGBBB#MLPX##----##-BGBGB-##----##-----##BBBBB##-----##------#######-BBB--##---------#----BGB--##---------#BBBBBBB--###--------#BGGGGGB-#####-------#BBBBBBB########################");
				remarkpol.push("R/T");
				notepol.push("284KTS 142000 Ranger, 142000 Triari @ 13 days");
				troopcounpol.push([0, 0, 142_000, 142_000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">Scouts Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBEBEBEB#----#######BEBETEBEB#######----#BEBEBEBEB#SMJX##----#BEBEBEBEB#S---##----##BBEBEBB##----##-----##BBBBB##BBBBB##------#######-BEBEB##---------#----BBBBB##---------#----BEBEB###--------#----BBBB#####-------#----BBB########################");
				remarkpol.push("Scouts");
				notepol.push("268KTS 134000 Scouts @ 4.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 134_000, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">6 sec Arbs Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BEBEBEB##----##----#-BEBEBEB-#----##----#-BEBEBEB-#----#######-BEBTBEB-#######----#-BEBEBEB-#SSPJ##----#-BEBEBEB-#MLPX##----##BEBEBEB##S---##-----##BBBBB##BBBB-##------#######-EEEE-##---------#BBBBBBBBB##---------#BEEEEEEEB###--------#-BBBBBBB#####-------#-------########################");
				remarkpol.push("Arbs");
				notepol.push("240KTS 120,000 Arbs @ 8.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 120_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">7 sec Arbs Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBEBEBB##----##----#BEBEBEBEB#----##----#BEBBBBBEB#----#######BEBETEBEB#######----#BEBBBBBEB#SMPX##----#BEBEBEBEB#SDPJ##----##BBEBEBB##----##-----##BBBBB##-----##------#######BBBBB-##---------#---BEBEB-##---------#---BBBBB-###--------#---BEBEB#####-------#---BBBB########################");
				remarkpol.push("Arbs");
				notepol.push("260KTS 130,000 Arbs @ 10.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 130_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">8 sec Arbs Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##-BEBEB-##----##----#BBBEBEBBB#----##----#BEBBBBBEB#----#######BEBETEBEB#######----#BEBBBBBEB#SSPJ##----#BBBEBEBBB#MLPX##----##-BEBEB-##----##-----##BBBBB##-----##------#######------##---------#BBBBBBB--##---------#BEBEBEB--###--------#BEBEBEB-#####-------#BBBBBBB########################");
				remarkpol.push("Arbs");
				notepol.push("280KTS 140,000 Arbs @ 13 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 140_000, 0, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				pol++;

				selectbuttportal += `<option value="${pol}">8 sec Praetor Portal</option>`;
				layoutpol.push("[ShareString.1.3]:########################-------#-------#####--------#--------###---------#---------##---------#---------##------#######------##-----##BBBBB##-----##----##BBZBZBB##----##----#BZBZBZBZB#----##----#BZBBBBBZB#----#######BZBZTZBZB#######----#BZBBBBBZB#SPJX##----#BZBZBZBZB#SP--##----##BBZBZBB##----##-----##BBBBB##-----##------#######BBBBBB##---------#---BZZZZB##---------#---BBBBBB###--------#---BZZB-#####-------#---BBBB########################");
				remarkpol.push("Praetor");
				notepol.push("272KTS 136,000 Praetor @ 12.5 days");
				troopcounpol.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 136_000, 0, 0, 0, 0, 0, 0, 0]);
				respol.push([0, 0, 0, 0, 1, 250_000, 250_000, 200_000, 350_000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 250_000, 250_000, 200_000, 400_000]);
				selectbuttportal += '</select>';

				
			    $('#clearresquad').after(selectbuttlandoff);

                $('#landoffenselayouts').after(selectbuttlanddef);
                $('#landdefenselayouts').after(selectbuttwateroff);

                $('#wateroffenselayouts').after(selectbuttwaterdef);
                $('#waterdefenselayouts').after(selectbutthub);
                $('#hublayouts').after(selectbuttshipper);
                $('#shipperlayouts').after(selectbuttportal);
               // $('#portallayouts').after(selectbutttroopscoutg);

                //Land Offense Builds
                $('#landoffenselayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layoutlol.length; j++) {

                        if ($('#landoffenselayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layoutlol[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                    //currentlayout=currentlayout.replaceAt(i,tmpchar);
                                }
                            }
                            //$('#removeoverlayGo').click();
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},3000);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarklol[j]);
                                $('#citynotestextarea').val(notelol[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },1000);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounlol[j]) {
                                    aa[9+Number(k)]=troopcounlol[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                reslol[j][14]=nearesthub;
                                reslol[j][15]=nearesthub;
                            } else {
                                reslol[j][14]=0;
                                reslol[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in reslol[j]) {
                                    aa[28+Number(k)]=reslol[j][k];
                                }
                            }

                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }

                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
                //Land Defense Builds
                $('#landdefenselayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layoutldl.length; j++) {

                        if ($('#landdefenselayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layoutldl[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                    //currentlayout=currentlayout.replaceAt(i,tmpchar);
                                }
                            }
                            //$('#removeoverlayGo').click();
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},3000);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarkldl[j]);
                                $('#citynotestextarea').val(noteldl[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },1000);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounldl[j]) {
                                    aa[9+Number(k)]=troopcounldl[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                resldl[j][14]=nearesthub;
                                resldl[j][15]=nearesthub;
                            } else {
                                resldl[j][14]=0;
                                resldl[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in resldl[j]) {
                                    aa[28+Number(k)]=resldl[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }

                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });


        //Water Offense  Layouts
                $('#wateroffenselayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layoutwol.length; j++) {
                        if ($('#wateroffenselayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layoutwol[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                }
                            }
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},300);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarkwol[j]);
                                $('#citynotestextarea').val(notewol[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },100);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounwol[j]) {
                                    aa[9+Number(k)]=troopcounwol[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                reswol[j][14]=nearesthub;
                                reswol[j][15]=nearesthub;
                            } else {
                                reswol[j][14]=0;
                                reswol[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in resw[j]) {
                                    aa[28+Number(k)]=reswol[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }
                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
                //Water Defense Layouts
                $('#waterdefenselayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layoutwdl.length; j++) {
                        if ($('#waterdefenselayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layoutwdl[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                }
                            }
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},300);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarkwdl[j]);
                                $('#citynotestextarea').val(notewdl[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },100);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounwdl[j]) {
                                    aa[9+Number(k)]=troopcounwdl[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                reswdl[j][14]=nearesthub;
                                reswdl[j][15]=nearesthub;
                            } else {
                                reswdl[j][14]=0;
                                reswdl[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in reswdl[j]) {
                                    aa[28+Number(k)]=reswdl[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }
                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
                //Hub Layouts
                $('#hublayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layouthul.length; j++) {

                        if ($('#hublayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layouthul[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                    //currentlayout=currentlayout.replaceAt(i,tmpchar);
                                }
                            }
                            //$('#removeoverlayGo').click();
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},3000);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarkhul[j]);
                                $('#citynotestextarea').val(notehul[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },1000);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounhul[j]) {
                                    aa[9+Number(k)]=troopcounhul[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                reshul[j][14]=nearesthub;
                                reshul[j][15]=nearesthub;
                            } else {
                                reshul[j][14]=0;
                                reshul[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in reshul[j]) {
                                    aa[28+Number(k)]=reshul[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }

                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
                $('#shipperlayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layoutshl.length; j++) {

                        if ($('#shipperlayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layoutshl[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                    //currentlayout=currentlayout.replaceAt(i,tmpchar);
                                }
                            }
                            //$('#removeoverlayGo').click();
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},3000);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarkshl[j]);
                                $('#citynotestextarea').val(noteshl[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },1000);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounshl[j]) {
                                    aa[9+Number(k)]=troopcounshl[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                resshl[j][14]=nearesthub;
                                resshl[j][15]=nearesthub;
                            } else {
                                resshl[j][14]=0;
                                resshl[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in resshl[j]) {
                                    aa[28+Number(k)]=resshl[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }
                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
                $('#portallayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layoutpol.length; j++) {

                        if ($('#portallayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layoutpol[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                    //currentlayout=currentlayout.replaceAt(i,tmpchar);
                                }
                            }
                            //$('#removeoverlayGo').click();
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},3000);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarkpol[j]);
                                $('#citynotestextarea').val(notepol[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },1000);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcounpol[j]) {
                                    aa[9+Number(k)]=troopcounpol[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                respol[j][14]=nearesthub;
                                respol[j][15]=nearesthub;
                            } else {
                                respol[j][14]=0;
                                respol[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in respol[j]) {
                                    aa[28+Number(k)]=respol[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }

                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
                $('#troopscoutgalleylayouts').change(function() {
                    var newlayout=currentlayout;
                    for (var j=1; j<layouttsg.length; j++) {

                        if ($('#troopscoutgalleylayouts').val()==j) {
                            for (var i=20; i<currentlayout.length;i++) {
                                var tmpchar=layouttsg[j].charAt(i);
                                var cmp=new RegExp(tmpchar);
                                if (!(cmp.test(emptyspots))) {
                                    newlayout=newlayout.replaceAt(i,tmpchar);
                                    //currentlayout=currentlayout.replaceAt(i,tmpchar);
                                }
                            }
                            //$('#removeoverlayGo').click();
                            $('#overlaytextarea').val(newlayout);
                            setTimeout(function(){$("#applyoverlayGo")[0].click();},3000);
                            if ($("#addnotes").prop("checked")==true) {
                                $('#CNremarks').val(remarktsg[j]);
                                $('#citynotestextarea').val(notetsg[j]);
                                setTimeout(function(){$("#citnotesaveb")[0].click(); },1000);
                            }
                            var aa=city.mo;
                            if ($("#addtroops").prop("checked")==true) {
                                for (var k in troopcountsg[j]) {
                                    aa[9+Number(k)]=troopcountsg[j][k];
                                }
                            }
                            if ($("#addwalls").prop("checked")==true) {
                                aa[26]=1;
                            }
                            if ($("#addtowers").prop("checked")==true) {
                                aa[27]=1;
                            }
                            if ($("#addhub").prop("checked")==true) {
                                var hubs={cid:[],distance:[]};
                                $.each(clc, function(key, value) {
                                    if (key==$("#selHub").val()) {
                                        hubs.cid=value;
                                    }
                                });
                                for (var i in hubs.cid) {
                                    var tempx=Number(hubs.cid[i] % 65536);
                                    var tempy=Number((hubs.cid[i]-tempx)/65536);
                                    hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
                                }
                                var mindist = Math.min.apply(Math, hubs.distance);
                                var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
                                restsg[j][14]=nearesthub;
                                restsg[j][15]=nearesthub;
                            } else {
                                restsg[j][14]=0;
                                restsg[j][15]=0;
                            }
                            if ($("#addres").prop("checked")==true) {

                                for (var k in restsg[j]) {
                                    aa[28+Number(k)]=restsg[j][k];
                                }
                            }
                            if ($("#addbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
                                aa[1]=1;
                            }
							if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }
                           //var aaa=JSON.stringify(aa);
                            var dat={a:JSON.stringify(aa),b:cdata.cid};
                            $.ajax({
                                url: 'includes/mnio.php',
                                type: 'POST',
                                async:true,
                                data: dat
                            });
                        }
                    }
                });
            },500);
        });
    });



//setting nearest hub to a city
    function setnearhub() {
        var res=[0,0,0,0,1,130000,130000,0,0,0,0,0,0,1,0,0,0,0,0,300000,300000,300000,400000];
        var aa=city.mo;
        var hubs={cid:[],distance:[]};
        $.each(clc, function(key, value) {
            if (key==$("#selHub").val()) {
                hubs.cid=value;
            }
        });
        for (var i in hubs.cid) {
            var tempx=Number(hubs.cid[i] % 65536);
            var tempy=Number((hubs.cid[i]-tempx)/65536);
            hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
        }
        var mindist = Math.min.apply(Math, hubs.distance);
        var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
        if ($("#addwalls").prop("checked")==true) {
            aa[26]=1;
        }
        if ($("#addtowers").prop("checked")==true) {
            aa[27]=1;
        }
        if ($("#addbuildings").prop("checked")==true) {
            aa[51]=[1,$("#cablev").val()];
            aa[1]=1;
        }
		if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }
        res[14]=nearesthub;
        res[15]=nearesthub;
        res[5]=$("#woodin").val();
        res[6]=$("#stonein").val();
        res[7]=$("#ironin").val();
        res[8]=$("#foodin").val();
        res[19]=$("#woodout").val();
        res[20]=$("#stoneout").val();
        res[21]=$("#ironout").val();
        res[22]=$("#foodout").val();
        for (var k in res) {
            aa[28+Number(k)]=res[k];
        }
        var dat={a:JSON.stringify(aa),b:cdata.cid};
        $.ajax({
            url: 'includes/mnio.php',
            type: 'POST',
            async:true,
            data: dat
        });
    }








//Quick Setupp
    function setquickAP() {
        var res=[0,0,0,0,1,200000,220000,200000,350000,0,0,0,0,1,0,0,0,0,0,300000,300000,300000,400000];
        var aa=city.mo;
        var hubs={cid:[],distance:[]};
        $.each(clc, function(key, value) {
            if (key==$("#selHub").val()) {
                hubs.cid=value;
            }
        });
        for (var i in hubs.cid) {
            var tempx=Number(hubs.cid[i] % 65536);
            var tempy=Number((hubs.cid[i]-tempx)/65536);
            hubs.distance.push(Math.sqrt((tempx-city.x)*(tempx-city.x)+(tempy-city.y)*(tempy-city.y)));
        }
        var mindist = Math.min.apply(Math, hubs.distance);
        var nearesthub=hubs.cid[hubs.distance.indexOf(mindist)];
        if ($("#addwalls").prop("checked")==true) {
            aa[26]=1;
        }
        if ($("#addtowers").prop("checked")==true) {
            aa[27]=1;
        }
        if ($("#addbuildings").prop("checked")==true) {
            aa[51]=[1,$("#cablev").val()];
           
            aa[1]=1;
        }
		if ($("#addallbuildings").prop("checked")==true) {
                                aa[51]=[1,$("#cablev").val()];
								aa[52]=[1,10];aa[53]=[1,10];aa[54]=[1,10];aa[55]=[1,10];aa[56]=[1,10];aa[57]=[1,10];aa[58]=[1,10];aa[59]=[1,10];aa[60]=[1,10];aa[61]=[1,10];aa[62]=[1,10];aa[63]=[1,10];aa[64]=[1,10];aa[65]=[1,10];aa[66]=[1,10];aa[67]=[1,10];aa[68]=[1,10];aa[69]=[1,10];aa[70]=[1,10];aa[71]=[1,10];aa[72]=[1,10];aa[73]=[1,10];aa[74]=[1,10];
                                aa[1]=1; aa[2]=1; aa[3]=1;aa[4]=1;aa[5]=1;aa[6]=1;aa[7]=1; aa[8]=1;
                            }
        res[14]=nearesthub;
        res[15]=nearesthub;
        res[5]=$("#woodin").val();
        res[6]=$("#stonein").val();
        res[7]=$("#ironin").val();
        res[8]=$("#foodin").val();
        res[19]=$("#woodout").val();
        res[20]=$("#stoneout").val();
        res[21]=$("#ironout").val();
        res[22]=$("#foodout").val();
        for (var k in res) {
            aa[28+Number(k)]=res[k];
        }
        var dat={a:JSON.stringify(aa),b:cdata.cid};
        $.ajax({
            url: 'includes/mnio.php',
            type: 'POST',
            async:true,
            data: dat
        });
    }

	//Overviews
	//Overviews
	function opengfunkyoverviewwin() {
		sum = false;
		//console.log(1);
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
			},
			{
				href: '#troopsTab',
				text: 'Troops'
			},
			{
				href: '#raidTab',
				text: 'Raid Reports'
			},
			{
				href: '#raidoverTab',
				text: 'Active Raids'
			},
			{
				href: '#gsupportTab',
				text: 'Support'
			},
			{
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
		gfunkyoverviewwin += "<button id='resup' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<button class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>";
		gfunkyoverviewwin += "<div class='button'>";
		gfunkyoverviewwin += "<a href='#' id ='resexp' role='button' style='color:#c7e2e7;'>Export</a>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</button>";
		gfunkyoverviewwin += "<span id='respan' style='margin-left:50px;'></span>";
		gfunkyoverviewwin += "<div id='restabtable' class='beigemenutable scroll-pane' style='width:98%;height: AUTO !important;max-height: 75%;margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' >";
		gfunkyoverviewwin += "<table id='restable'>";
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
		gfunkyoverviewwin += "<table id='gtroopstable' style='width:250%; height:auto;'>";
		gfunkyoverviewwin += "</table>";
		gfunkyoverviewwin += "</div>";
		gfunkyoverviewwin += "</div>";
		// Raid Overview Tab
		gfunkyoverviewwin += "<div id='raidTab' style='text-align: center;'>";
		gfunkyoverviewwin += "<button id='raidup' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
		gfunkyoverviewwin += "<span style='margin-left:50px;'>Number of reports to show: </span>";
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
		gfunkyoverviewwin += "<table id='raidovertable'>";
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
		/*
		gfunkyoverviewwin+="<div id='gworldtab' style='text-align: center;'>";
			gfunkyoverviewwin+="<button id='gworldup' class='greenb' style='font-size:14px;border-radius:6px; margin:4px;'>Update</button>";
			gfunkyoverviewwin+="<div class='beigemenutable scroll-pane' style='width:99%; max-height: 85%; margin-left:auto; margin-right: auto; border-radius: 7px;border: 3px ridge #99805D;' >";
				gfunkyoverviewwin+="<table id='gworldtable'>";
				gfunkyoverviewwin+="</table>";
			gfunkyoverviewwin+="</div>";
		gfunkyoverviewwin+="</div>";
		*/
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
			//console.log("popup");
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


		const selres = $("#organiser").clone(false).attr({
			id: "selres",
			style: "height: 30px;width:150px;font-size:14px;border-radius:6px;margin:7px",
			class: "greenb"
		});
		const selcres = $("#idleCsel").clone(false).attr({
			id: "selcres",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});

		const selcgtroops = $("#idleCsel").clone(false).attr({
			id: "selcgtroops",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		const selgtroops = $("#organiser").clone(false).attr({
			id: "selgtroops",
			style: "height: 30px;width:150px;font-size:14px;border-radius:6px;margin:7px",
			class: "greenb"
		});

		const selraids = $("#organiser").clone(false).attr({
			id: "selraid",
			style: "height: 30px;width:150px;font-size:14px;border-radius:6px;margin:7px",
			class: "greenb"
		});
		const selcraid = $("#idleCsel").clone(false).attr({
			id: "selcraid",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});

		const selinc = $("organiser").clone(false).attr({
			id: "selinc",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});
		const selcinc = $("#idleCsel").clone(false).attr({
			id: "selcinc",
			style: "width:150px;height:30px;font-size:14px;border-radius:6px;margin:7px"
		});


		$("#respan").after(selres);
		$("#selres").after(selcres);
		$("#selres").val("all").change();
		$("#selcres").val(56).change();



		$("#raidspan").after(selraids);
		$("#selraid").after(selcraid);
		$("#selraid").val("all").change();
		$("#selcraid").val(56).change();


		$("#troopspan").after(selgtroops);
		$("#selgtroops").after(selcgtroops);
		$("#selgtroops").val("all").change();
		$("#selcgtroops").val(56).change();




		//$("#incspan").after(selinc);
		//$("#selinc").after(selcinc);
		$("#selinc").val(56).change();
		$("#selcinc").val("all").change();

			$("#resup").click(function() {
				$("#selres").val("all").change();
				$("#selcres").val("56").change();
				$.ajax({
					url: 'overview/citover.php',
					type: 'POST',
					async: true,
					success(data) {
						const sumres = JSON.parse(data);
						updateres(sumres);
					}
				});
			});
		$("#troopsup").click(function() {
			$("#seltroops").val("all").change();
			$("#selctroops").val("56").change();
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
			$("#selraid").val("all").change();
			$("#selcraid").val("56").change();
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
							const raidsB = raids.b;
							updateraidover(raids, notes, raidsB);
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
		
		function gfunkyoverviewsfilter(type) {
			console.log("Filtering table with type:", type);
	// Make sure clc is defined and has a value before calling gfunkyoverviewsfilter()
	if (!clc) {
		return;
	}

	const clist = $(`#sel${type}`).val();
	const con = Number($(`#selc${type}`).val());
	let clistbool;
	let contbool;
	let citylist = []; // Initialize citylist to an empty array

	if (clist!="all") {
		
	} else {
		
	}

	if (type === "raid") {
		type += "over";
	}

	$(`#${type}table tr`).each(function() {
		if (!($(this).attr("class") !== "nofilter" && $($(this).children()[0]).is("td"))) {
			return;
		}
		contbool = con === 56 ? true : con === Number($(this).attr("cont"));
		clistbool = clist === "all" ? true : citylist.indexOf(Number($(this).attr("data"))) > -1;
		//console.log(clistbool,contbool);
		if (clistbool && contbool) {
			//console.log("show");
			$(this).show();
			console.log("Showing row with data:", $(this).attr("data"));
		} else {
			//console.log("hide");
			console.log("Hiding row with data:", $(this).attr("data"));
			$(this).hide();
		}
	});
}

		
		$("#selres").change(function() {
			gfunkyoverviewsfilter("res");
		});


		$("#selcres").change(function() {
			gfunkyoverviewsfilter("res");
		});


		$("#selraid").change(function() {
			gfunkyoverviewsfilter("raid");
		});


		$("#selcraid").change(function() {
			gfunkyoverviewsfilter("raid");
		});

		$("#selgtroops").change(function() {
			gfunkyoverviewsfilter("gtroops");
		});
		$("#selcgtroops").change(function() {
			gfunkyoverviewsfilter("gtroops");
		});


		$("#selcincoming").change(function() {
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
		function updateraidover(raids, notes, ) {

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
			// //console.log(notes);

			let raidover2body = "<table id='raidovertable'>";
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
				raidover2body += "<button id='expandbuttn' class='greenb expsup' style='height: 20px;padding-top: 3px;border-radius:6px;'>Expand</button>";
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

				raidover2body += "<tr class='expsuptab' style='display:none' data='${cid}' cont='${con}'>";
				raidover2body += "<td colspan='12'>";
				raidover2body += "<div class='beigemenutable' style='width:99%;border-radius: 5px;margin-left: auto;margin-right: auto; dislay:none'>";
				raidover2body += "<table>";
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
				raidover2body += "<tbody data='${cid}' cont='${con}'>";
				for (const i in this[12]) {
					const dungid = this[12][i][8];
					const dungx = Number(dungid % 65_536);
					const dungy = Number((dungid - dungx) / 65_536);
					const raidfreq = this[12][i][4];
					const recallraidfunky = this[12][i][0];
					const recallallraidfunky = this[0];
					raidover2body += "<tr>";
					raidover2body += `<td><button data="${recallraidfunky}" class='greenb recraid' style='height: 20px;padding-top: 3px;border-radius:6px;'>Recall</button></td>`;
					//raidover2body += `<td><button data="${recallraidfunky}" dataset="${recallallraidfunky}'  class='greenb recallraid' style='height: 20px;padding-top: 3px;border-radius:6px;'>Recall All</button></td>`;
					raidover2body += `<td colspan='2' class='coordblink shcitt' data='${dungid}' >${this[12][i][2]}</td>`;
					raidover2body += `<td class='coordblink shcitt' data='${dungid}'>${dungx}:${dungy}</td>`;
					raidover2body += `<td>${this[12][i][1]}</td>`;

					//raidover2body  += "<td>" + this[12][i][3] + "</td>";
					raidover2body += raidfreq === 1 ? `<td data='${this[12][i][0]}'>Once</td>` : `<td data='${this[12][i][0]}'>Reoccuring</td>`;
					raidover2body += `<td>${(this[12][i][6].w+this[12][i][6].s+this[12][i][6].i+this[12][i][6].f).toLocaleString()}</td>`;
					raidover2body += `<td>${this[12][i][6].g}</td>`;
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


			$("#raidovertable").html(raidover2body);
			$("#raidovertable td").css("text-align", "center");
			const raidoversort = document.getElementById('raidovertable');
			sorttable.makeSortable(raidoversort);

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

				exportTableToCSV(document.getElementById('raidovertable'), outputFile);
			});

			$(document).on('click', '.expsup', function() {
				this.innerHTML = this.innerHTML === "Expand" ? "Hide" : "Expand";
				$(this).parent().parent().next().toggle();
			});

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
			$(".recsup").click(function() {
				const id = $(this).attr("data");
				const dat = {
					a: id
				};
				$.ajax({
					url: 'overview/reinreca.php',
					type: 'POST',
					async: true,
					data: dat
				});
				$(this).remove();
			});
			$(".expsup").click(function() {
				$(this).parent().parent().next().toggle();
			});
			$(".recasup").click(function() {
				const id = $(this).attr("data");
				const dat = {
					a: id
				};
				$.ajax({
					url: 'overview/reinrecall.php',
					type: 'POST',
					async: true,
					data: dat
				});
				$(this).remove();
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
				if (i < turnc) {
					if (this[2] <= 2) {
						raidtab += "<tr style='color:green;'>";
					} else if (2 < this[2] && this[2] <= 5) {
						raidtab += "<tr style='color:#CF6A00;'>";
					} else if (this[2] > 5) {
						raidtab += "<tr style='color:red;'>";
					}
					raidtab += `<td class='gFrep brownb mtmdefc' data='${this[6]}'>`;
					raidtab += "<span class='unread'>Share report</td>";
					raidtab += `<td>${this[0]}</span></td>`;
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
		}

		//update res summary
		function updateres(data) {
			let restabb = "<thead>";
			restabb += "<tr data='0'>";
			restabb += "<th rowspan='2'>Name</th>";
			restabb += "<th rowspan='2' colspan='2'>Notes</th>";
			restabb += "<th rowspan='2'>Coords</th>";
			restabb += "<th colspan='2'>Wood</th>";
			restabb += "<th colspan='2'>Stone</th>";
			restabb += "<th colspan='2'>Iron</th>";
			restabb += "<th colspan='2'>Food</th>";
			restabb += "<th colspan='2'>Carts</th>";
			restabb += "<th colspan='2'>Ships</th>";
			restabb += "<th rowspan='2'>Score</th>";
			restabb += "</tr>";
			restabb += "<tr>";
			restabb += "<th>Current</th>";
			restabb += "<th>Storage</th>";
			restabb += "<th>Current</th>";
			restabb += "<th>Storage</th>";
			restabb += "<th>Current</th>";
			restabb += "<th>Storage</th>";
			restabb += "<th>Current</th>";
			restabb += "<th>Storage</th>";
			restabb += "<th>Available</th>";
			restabb += "<th>Total</th>";
			restabb += "<th>Available</th>";
			restabb += "<th>Total</th>";
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
				restabb += `<td id='cn${cid}' class='coordblink'>${this.city}</td>`;
				restabb += `<td colspan='2'>${this.reference}</td>`;
				restabb += `<td class='coordblink shcitt' data='${cid}'>${x}:${y}</td>`;
				let res;
				let sto;
				cartstot += this.carts_total;
				shipstot += this.ships_total;
				for (let i = 0; i < 4; i++) {
					switch (i) {
						case 0:
							res = this.wood;
							woodtot += res;
							sto = this.wood_storage;
							break;
						case 1:
							res = this.stone;
							stonetot += res;
							sto = this.stone_storage;
							break;
						case 2:
							res = this.iron;
							irontot += res;
							sto = this.iron_storage;
							break;
						case 3:
							res = this.food;
							foodtot += res;
							sto = this.food_storage;
							break;
					}
					if (res / sto < 0.9) {
						restabb += `<td style='color:green;'>${res.toLocaleString()}</td>`;
						restabb += `<td>${sto.toLocaleString()}</td>`;
					} else if ((res / sto < 1) && (res / sto >= 0.9)) {
						restabb += `<td style='color:#CF6A00;'>${res.toLocaleString()}</td>`;
						restabb += `<td>${sto.toLocaleString()}</td>`;
					} else if (res == sto) {
						restabb += `<td style='color:red;'>${res.toLocaleString()}</td>`;
						restabb += `<td>${sto.toLocaleString()}</td>`;
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
			$("#restable").html(restabb);
			$("#restable td").css("text-align", "center");
			//$("#restable").fixedHeaderTable({ cloneHeadToFoot: true });
			const restablesort = document.getElementById('restable');
			sorttable.makeSortable(restablesort);


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
				exportTableToCSV(document.getElementById('restable'), outputFile);
			});
		}


		//update troops summary
		function updatetroops(data, notes) {
			let troopstab = "<thead>";
			troopstab += "<tr data='0'>";
			troopstab += "<th style='width:100px;' rowspan='3'>Name</th>";
			troopstab += "<th style='width:150px;' rowspan='3'>Notes</th>";
			troopstab += "<th rowspan='3'>Coords</th>";
			troopstab += "<th colspan='2'>Guard</th>";
			troopstab += "<th colspan='2'>Ballista</th>";
			troopstab += "<th colspan='2'>Ranger</th>";
			troopstab += "<th colspan='2'>Triari</th>";
			troopstab += "<th colspan='2'>Priestess</th>";
			troopstab += "<th colspan='2'>Vanquisher</th>";
			troopstab += "<th colspan='2'>Sorcerer</th>";
			troopstab += "<th colspan='2'>Scouts</th>";
			troopstab += "<th colspan='2'>Arbalist</th>";
			troopstab += "<th colspan='2'>Praetor</th>";
			troopstab += "<th colspan='2'>Horsemen</th>";
			troopstab += "<th colspan='2'>Druid</th>";
			troopstab += "<th colspan='2'>Ram</th>";
			troopstab += "<th colspan='2'>Scorption</th>";
			troopstab += "<th colspan='2'>Galley</th>";
			troopstab += "<th colspan='2'>Stinger</th>";
			troopstab += "<th colspan='2'>Warship</th>";
			troopstab += "<th colspan='2'>Senator</th>";
			troopstab += "<th rowspan='3'>TS Home</th>";
			troopstab += "<th rowspan='3'>TS Total</th>";
			troopstab += "</tr>";
			troopstab += "<tr data='0'>";
			troopstab += `<th colspan='2' class='spf'><div class ='${tpicdiv[0]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[1]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[2]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[3]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[4]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[5]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[6]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[7]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[8]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[9]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[10]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[11]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[12]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[13]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[14]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[15]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[16]}'></div></th>`;
			troopstab += `<th colspan='2' class='spf'><div class='${tpicdiv[17]}'></div></th>`;
			troopstab += "</tr>";
			troopstab += "<tr class='sortable'>";
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
			troopstab += "</tr>";
			troopstab += "</thead>";
			troopstab += "<tbody>";
			let arbstot = 0;
			let balltot = 0;
			let druidstot = 0;
			let galltot = 0;
			let guardstot = 0;
			let horsetot = 0;
			let praetorstot = 0;
			let priesttot = 0;
			let ramstot = 0;
			let rangerstot = 0;
			let scorptot = 0;
			let scoutstot = 0;
			let senatortot = 0;
			let sorctot = 0;
			let stingerstot = 0;
			let triaritot = 0;
			let vanqstot = 0;
			let warshipstot = 0;
			let tshome;
			let tstot;
			$.each(data, function() {
				tshome = 0;
				tstot = 0;
				const cid = this.id;
				const not = notes.notes[notes.id.indexOf(cid)];
				const x = Number(cid % 65_536);
				const y = Number((cid - x) / 65_536);
				const con = Number(Math.floor(x / 100) + 10 * Math.floor(y / 100));
				let strhome = "<table><tr class='nofilter'>";
				let strtot = "<table><tr class='nofilter'>";
				let thome;
				let ttot;
				let tt;
				troopstab += `<tr data='${cid}' cont='${con}'>`;
				troopstab += `<td id='cnt${cid}' class='coordblink'>${this.c}</td>`;
				troopstab += `<td style='width:150px;'>${not}</td>`;
				troopstab += `<td class='coordblink shcitt' data='${cid}'>${x}:${y}</td>`;

				function makets() {
					if (thome > 0) {
						strhome += `<td style='width:50px;'>${thome.toLocaleString()}</td>`;
						strhome += "<td style='width:22px;'>";
						strhome += `<div class='${tpicdiv20[tt]}'></div>`;
						strhome += "</td>";
					}
					if (ttot > 0) {
						strtot += `<td>${thome.toLocaleString()}/${ttot.toLocaleString()}</td>`;
						strtot += "<td style='width:60px;'>";
						strtot += `<div class='${tpicdiv20[tt]}'></div>`;
						strtot += "</td>";
					}
					troopstab += `<td class='spf'>${thome.toLocaleString()}</td>`;
					troopstab += `<td class='spf'>${ttot.toLocaleString()}</td>`;
				}

				thome = this.Guard_home;
				ttot = this.Guard_total;
				tt = 0;
				guardstot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();

				thome = this.Ballista_home;
				ttot = this.Ballista_total;
				tt = 1;
				balltot += ttot;
				tshome += 10 * thome;
				tstot += 10 * ttot;
				makets();

				thome = this.Ranger_home;
				ttot = this.Ranger_total;
				tt = 2;
				rangerstot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();

				thome = this.Triari_home;
				ttot = this.Triari_total;
				tt = 3;
				triaritot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();


				thome = this.Priestess_home;
				ttot = this.Priestess_total;
				tt = 4;
				priesttot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();

				thome = this.Vanquisher_home;
				ttot = this.Vanquisher_total;
				tt = 5;
				vanqstot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();

				thome = this.Sorcerer_home;
				ttot = this.Sorcerer_total;
				tt = 6;
				sorctot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();

				thome = this.Scout_home;
				ttot = this.Scout_total;
				scoutstot += ttot;
				tt = 7;
				tshome += 2 * thome;
				tstot += 2 * ttot;
				makets();

				thome = this.Arbalist_home;
				ttot = this.Arbalist_total;
				tt = 8;
				arbstot += ttot;
				tshome += 2 * thome;
				tstot += 2 * ttot;
				makets();

				thome = this.Praetor_home;
				ttot = this.Praetor_total;
				tt = 9;
				praetorstot += ttot;
				tshome += 2 * thome;
				tstot += 2 * ttot;
				makets();

				thome = this.Horseman_home;
				ttot = this.Horseman_total;
				tt = 10;
				horsetot += ttot;
				tshome += 2 * thome;
				tstot += 2 * ttot;
				makets();

				thome = this.Druid_home;
				ttot = this.Druid_total;
				tt = 11;
				druidstot += ttot;
				tshome += 2 * thome;
				tstot += 2 * ttot;
				makets();

				thome = this.Ram_home;
				ttot = this.Ram_total;
				tt = 12;
				ramstot += ttot;
				tshome += 10 * thome;
				tstot += 10 * ttot;
				makets();

				thome = this.Scorpion_home;
				ttot = this.Scorpion_total;
				tt = 13;
				scorptot += ttot;
				tshome += 10 * thome;
				tstot += 10 * ttot;
				makets();

				thome = this.Galley_home;
				ttot = this.Galley_total;
				tt = 14;
				galltot += ttot;
				tshome += 100 * thome;
				tstot += 100 * ttot;
				makets();

				thome = this.Stinger_home;
				ttot = this.Stinger_total;
				tt = 15;
				stingerstot += ttot;
				tshome += 100 * thome;
				tstot += 100 * ttot;
				makets();

				thome = this.Warship_home;
				ttot = this.Warship_total;
				tt = 16;
				warshipstot += ttot;
				tshome += 400 * thome;
				tstot += 400 * ttot;
				makets();

				thome = this.Senator_home;
				ttot = this.Senator_total;
				tt = 17;
				senatortot += ttot;
				tshome += thome;
				tstot += ttot;
				makets();

				strhome += "</tr></table>";
				strtot += "</tr></table>";

				troopstab += `<td class='nspf'>${strtot}</td>`;
				troopstab += `<td>${tshome.toLocaleString()}</td>`;
				troopstab += `<td>${tstot.toLocaleString()}</td>`;
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
			tottab += `<td>${guardstot.toLocaleString()}</td>`;
			tottab += `<td>${balltot.toLocaleString()}</td>`;
			tottab += `<td>${rangerstot.toLocaleString()}</td>`;
			tottab += `<td>${triaritot.toLocaleString()}</td>`;
			tottab += `<td>${priesttot.toLocaleString()}</td>`;
			tottab += `<td>${vanqstot.toLocaleString()}</td>`;
			tottab += `<td>${sorctot.toLocaleString()}</td>`;
			tottab += `<td>${scoutstot.toLocaleString()}</td>`;
			tottab += `<td>${arbstot.toLocaleString()}</td>`;
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
			tottab += `<td>${praetorstot.toLocaleString()}</td>`;
			tottab += `<td>${horsetot.toLocaleString()}</td>`;
			tottab += `<td>${druidstot.toLocaleString()}</td>`;
			tottab += `<td>${ramstot.toLocaleString()}</td>`;
			tottab += `<td>${scorptot.toLocaleString()}</td>`;
			tottab += `<td>${galltot.toLocaleString()}</td>`;
			tottab += `<td>${stingerstot.toLocaleString()}</td>`;
			tottab += `<td>${warshipstot.toLocaleString()}</td>`;
			tottab += `<td>${senatortot.toLocaleString()}</td>`;

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

	$('#composeButton').click(function() {
		$('#mailViewBox').css({
			'display': 'block'
		});
		$('#mailComposeBox').css({
			'display': 'block'
		});
	});

	//Dhruv's Stuff

	//Dhruv's Combat Calculator
	(function DhruvComC() {
		//    'use strict';
		const ttname = ["Guards", "Ballistas", "Rangers", "Triari", "Priestess", "Vanquishers", "Sorcerers", "Scouts", "Arbalists", "Praetors", "Horsemans", "Druids", "Rams", "Scorpions", "Galleys", "Stingers", "Warships", "Senator"];
		const ttattack = [10, 50, 30, 10, 25, 50, 70, 10, 40, 60, 90, 120, 50, 150, 3000, 1200, 12_000]; //troops attack value
		const ttinfdef = [10, 200, 40, 30, 20, 15, 15, 10, 40, 50, 40, 30, 20, 100, 4000, 4500, 5000]; //infantry defence
		const ttcavdef = [10, 100, 10, 50, 30, 12, 10, 10, 90, 20, 30, 20, 20, 100, 4000, 4500, 5000]; //cavalry defence
		const ttmystdef = [10, 200, 25, 20, 50, 10, 30, 10, 30, 90, 20, 50, 20, 200, 2000, 2000, 2500]; //mystic defence
		const ttartdef = [10, 400, 15, 15, 15, 15, 15, 10, 40, 40, 40, 40, 50, 50, 2000, 6000, 6000]; //artilery defence
		const ttinfdefz = [];
		const ttcavdefz = [];
		const ttmystdefz = [];
		const ttartdefz = [];
		const iscav = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]; //which troop number is cav
		const isinf = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //which troop number is inf
		const ismgc = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; //which troop number is magic
		const isart = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]; //which troop number is artillery
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
		const lossattTS = [];
		const survivingattTS = [];
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
				HasA += survivingattTS[i];
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
				document.getElementById("vanqA").value = Math.floor(survivingattTS[5]);
				document.getElementById("sorcA").value = Math.floor(survivingattTS[6]);
				document.getElementById("rangA").value = Math.floor(survivingattTS[2]);
				document.getElementById("triA").value = Math.floor(survivingattTS[3]);
				document.getElementById("priA").value = Math.floor(survivingattTS[4]);
				document.getElementById("scoutA").value = Math.floor(survivingattTS[7]);
				document.getElementById("horseA").value = Math.floor(survivingattTS[10]);
				document.getElementById("druidA").value = Math.floor(survivingattTS[11]);
				document.getElementById("arbA").value = Math.floor(survivingattTS[8]);
				document.getElementById("praA").value = Math.floor(survivingattTS[9]);
				document.getElementById("ramA").value = Math.floor(survivingattTS[12]);
				document.getElementById("scorpA").value = Math.floor(survivingattTS[13]);
				document.getElementById("balisA").value = Math.floor(survivingattTS[1]);
				document.getElementById("galleyA").value = Math.floor(survivingattTS[14]);
				document.getElementById("stingA").value = Math.floor(survivingattTS[15]);
				document.getElementById("wgA").value = Math.floor(survivingattTS[16]);
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
			let kumar = "<div id='kumardiv' style='width:522px;height:777px;left: 990px; z-index: 200003;  position: relative; class='popUpBox ui-draggable'>";
			kumar += '<div class="ppbwinbgr ui-draggable">';
			kumar += '<div class="ppbwintop  ui-draggable"></div>';
			kumar += '<div class="ppbwincent ui-draggable"></div>';
			kumar += '<div class="ppbwinbott  ui-draggable"></div>';
			kumar += '</div>';
			kumar += '<div class="ppbwincontent ui-draggable" style="height:98%;">';
			kumar += '<div class="popUpBar ui-draggable-handle"> ';
			kumar += "<span class='ppspan'>Dhruvs Combat Calculator</span>";
			kumar += "<button id='kumarsumX' style='margin-right: 5%; margin-top:5px;' class='xbutton' onclick=$('#kumardiv').hide()>";
			kumar += "<div id='xbuttondiv'>";
			kumar += "<div>";
			kumar += "<div id='centxbuttondiv'></div>";
			kumar += "</div>";
			kumar += "</div>";
			kumar += "</button>";
			kumar += '</div>';
			kumar += '<div id="popkumar" class="popUpWindow" style="margin-left:auto; margin-right:auto;">';
			//Section 1
			kumar += '<div id = "toptxt" style="width: 90%;margin-left: auto;margin-right: auto; font-size:12px; text-align:center;">NP:<input type="text" id="NightP" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">';
			kumar += 'Portal: <input type="text" id="MGpen" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">';
			kumar += 'Morale: <input type="text" id="Ascore" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">';
			kumar += 'Type:<select name="atackType" id="atackType" class="regButton greenb" style="color:#e1c190;" onchange=""><option selected value="assault">Assault</option><option value="siege">Siege</option><option value="plunder">Plunder</option></select>';
			kumar += '<br><span>Defense Protected by Towers</span><br>';
			kumar += '<span>Ranger=<input type="text" id="rangt" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">Triari=<input type="text" id="trit" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">Priestess=<input type="text" id="prit" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">Balista=<input type="text" id="balit" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;">';
			kumar += '<br>Walls lvl: <input type="text" id="Wall" size="1" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></span>';
			kumar += '</div>';
			//Section 2
			kumar += '<div id="chart" style="height:90%; line-height:90%;">';
			kumar += '<table id = "tab" style="width:90%; margin-left:auto; margin-right:auto; font-size:10px;">';
			kumar += '<tr>';
			kumar += '<!--<th colspan="2">Attacking</th>  <th> +% </th>   <th>  </th>  <th> +%  </th>   <th colspan="2">Defending</th>"cityguard"-->';
			kumar += '<th>Remaining </th><th>Attacking</th>  <th> +% </th>   <th>  </th>  <th> +%  </th>   <th>Defending</th> <th>Remaining</th>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td></td><td>-</td><td>-</td>';
			kumar += '<td ><div class="guard32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="cgDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;" ></td>';
			kumar += '<td><input type="text" id="cgD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 2px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="survcgD"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="survanqA" style="font-weight:bold;"></span> </td><td><input type="text" id="vanqA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="vanqAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="vanq32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="vanqDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="vanqD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="survanqD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="sursorcA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="sorcA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="sorcAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="sorc32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="sorcDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="sorcD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="sursorcD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surRangA" style="font-weight:bold;"></span> </td><td><input type="text" id="rangA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="rangAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="ranger32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="rangDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="rangD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surRangD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surtriA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="triA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="triAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="triari32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="triDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="triD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surtriD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surpriA" style="font-weight:bold;"></span> </td><td><input type="text" id="priA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="priAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="priest32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="priDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="priD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surpriD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surScoutA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="scoutA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="scoutAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="scout32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="scoutDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="scoutD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surScoutD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surhorseA" style="font-weight:bold;"></span> </td><td><input type="text" id="horseA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="horseAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="horsem32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="horseDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="horseD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surhorseD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surdruidA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="druidA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="druidAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="druid32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="druidDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="druidD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surdruidD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surarbA" style="font-weight:bold;"></span> </td><td><input type="text" id="arbA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="arbAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="arbal32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="arbDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="arbD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surarbD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surpraA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="praA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="praAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="praet32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="praDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="praD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surpraD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surramA" style="font-weight:bold;"></span> </td><td><input type="text" id="ramA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="ramAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="ram32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="ramDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="ramD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surramD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surscorpA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="scorpA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="scorpAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="scorp32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="scorpDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="scorpD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surscorpD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surbalisA" style="font-weight:bold;"></span> </td><td><input type="text" id="balisA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="balisAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="bally32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="balisDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="balisD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surbalisD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surgalleyA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="galleyA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="galleyAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="galley32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="galleyDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="galleyD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surgalleyD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr class = "alt">';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surstingA" style="font-weight:bold;"></span> </td><td><input type="text" id="stingA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="stingAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="sting32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="stingDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="stingD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surstingD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<tr>';
			kumar += '<td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"><span id="surWgA" style="font-weight:bold;"></span> </td> <td> <input type="text" id="wgA" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"></td>';
			kumar += '<td><input type="text" id="wgAR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><div class="wship32 trooptdcm" /></td>';
			kumar += '<td><input type="text" id="wgDR" size="1" maxlength="4" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td>';
			kumar += '<td><input type="text" id="wgD" size="5" value="0" style="font-weight: bold; border-radius: 6px;background: #e1c190;color: black;text-align: center;"> </td><td style="font-size: 12px;font-weight: 1000;margin-left: auto;background: #e1c190;border: ridge 3px #3a3a3a;margin-right: auto;text-align: center;border-radius: 6px;"> <span id="surWgD" style="font-weight:bold;"></span></td>';
			kumar += '</tr>';

			kumar += '<div id="buttonbox" style="text-align:center;">';
			kumar += '<input type=button value="Repeat" class="regButton greenb" style="width: 150px; margin-right:10px;" id="repeatbutton">';
			kumar += '<input type=button value="Reset" class="regButton greenb" style="width: 150px;" id="resetbutton">';
			kumar += '</div>';
			kumar += '<div id="bla"></div>';
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

			$("#MGpen").change(function() {
				defenderTSF();
			});
			$("#Ascore").change(function() {
				defenderTSF();
			});
			$("#Wall").change(function() {
				defenderTSF();
			});
			$("#NightP").change(function() {
				defenderTSF();
			});
			$("#atackType").change(function() {
				defenderTSF();
			});

			$("#rangt").change(function() {
				defenderTSF();
			});
			$("#trit").change(function() {
				defenderTSF();
			});
			$("#prit").change(function() {
				defenderTSF();
			});
			$("#balit").change(function() {
				defenderTSF();
			});

			$("#cgD").change(function() {
				defenderTSF();
			});
			$("#vanqD").change(function() {
				defenderTSF();
			});
			$("#sorcD").change(function() {
				defenderTSF();
			});
			$("#rangD").change(function() {
				defenderTSF();
			});
			$("#triD").change(function() {
				defenderTSF();
			});
			$("#priD").change(function() {
				defenderTSF();
			});
			$("#scoutD").change(function() {
				defenderTSF();
			});
			$("#horseD").change(function() {
				defenderTSF();
			});
			$("#druidD").change(function() {
				defenderTSF();
			});
			$("#arbD").change(function() {
				defenderTSF();
			});
			$("#praD").change(function() {
				defenderTSF();
			});
			$("#ramD").change(function() {
				defenderTSF();
			});
			$("#scorpD").change(function() {
				defenderTSF();
			});
			$("#balisD").change(function() {
				defenderTSF();
			});
			$("#galleyD").change(function() {
				defenderTSF();
			});
			$("#stingD").change(function() {
				defenderTSF();
			});
			$("#wgD").change(function() {
				defenderTSF();
			});

			$("#vanqA ").change(function() {
				defenderTSF();
			});
			$("#sorcA").change(function() {
				defenderTSF();
			});
			$("#rangA").change(function() {
				defenderTSF();
			});
			$("#triA").change(function() {
				defenderTSF();
			});
			$("#priA").change(function() {
				defenderTSF();
			});
			$("#scoutA").change(function() {
				defenderTSF();
			});
			$("#horseA").change(function() {
				defenderTSF();
			});
			$("#druidA").change(function() {
				defenderTSF();
			});
			$("#arbA").change(function() {
				defenderTSF();
			});
			$("#praA").change(function() {
				defenderTSF();
			});
			$("#ramA").change(function() {
				defenderTSF();
			});
			$("#scorpA").change(function() {
				defenderTSF();
			});
			$("#balisA").change(function() {
				defenderTSF();
			});
			$("#galleyA").change(function() {
				defenderTSF();
			});
			$("#stingA").change(function() {
				defenderTSF();
			});
			$("#wgA").change(function() {
				defenderTSF();
			});

			$("#cgDR").change(function() {
				defenderTSF();
			});
			$("#balisDR").change(function() {
				defenderTSF();
			});
			$("#rangDR").change(function() {
				defenderTSF();
			});
			$("#triDR").change(function() {
				defenderTSF();
			});
			$("#priDR").change(function() {
				defenderTSF();
			});
			$("#vanqDR").change(function() {
				defenderTSF();
			});
			$("#sorcDR").change(function() {
				defenderTSF();
			});
			$("#scoutDR").change(function() {
				defenderTSF();
			});
			$("#arbDR").change(function() {
				defenderTSF();
			});
			$("#praDR").change(function() {
				defenderTSF();
			});
			$("#horseDR").change(function() {
				defenderTSF();
			});
			$("#druidDR").change(function() {
				defenderTSF();
			});
			$("#ramDR").change(function() {
				defenderTSF();
			});
			$("#scorpDR").change(function() {
				defenderTSF();
			});
			$("#galleyDR").change(function() {
				defenderTSF();
			});
			$("#stingDR").change(function() {
				defenderTSF();
			});
			$("#wgDR").change(function() {
				defenderTSF();
			});

			$("#balisAR").change(function() {
				defenderTSF();
			});
			$("#rangAR").change(function() {
				defenderTSF();
			});
			$("#triAR").change(function() {
				defenderTSF();
			});
			$("#priAR").change(function() {
				defenderTSF();
			});
			$("#vanqAR").change(function() {
				defenderTSF();
			});
			$("#sorcAR").change(function() {
				defenderTSF();
			});
			$("#scoutAR").change(function() {
				defenderTSF();
			});
			$("#arbAR").change(function() {
				defenderTSF();
			});
			$("#praAR").change(function() {
				defenderTSF();
			});
			$("#horseAR").change(function() {
				defenderTSF();
			});
			$("#druidAR").change(function() {
				defenderTSF();
			});
			$("#ramAR").change(function() {
				defenderTSF();
			});
			$("#scorpAR").change(function() {
				defenderTSF();
			});
			$("#galleyAR").change(function() {
				defenderTSF();
			});
			$("#stingAR").change(function() {
				defenderTSF();
			});
			$("#wgAR").change(function() {
				defenderTSF();
			});
		}


		function calculationCC() {
			//calculating attack values
			let infattk = 0;
			for (var i = 0; i < 17; i++) {
				const tempinfattk = attackerts[i] * aresearch[i] * ttattack[i] * isinf[i];
				infattk += tempinfattk;
			}
			infatk = infattk * inputnightp * inputmorale * inputportal;

			let cavattk = 0;
			for (let j = 0; j < 17; j++) {
				const tempcavattk = attackerts[j] * aresearch[j] * ttattack[j] * iscav[j];
				cavattk += tempcavattk;
			}
			cavatk = cavattk * inputnightp * inputmorale * inputportal;

			let mystattk = 0;
			for (let z = 0; z < 17; z++) {
				const tempmystattk = attackerts[z] * aresearch[z] * ttattack[z] * ismgc[z];
				mystattk += tempmystattk;
			}
			mystatk = mystattk * inputnightp * inputmorale * inputportal;

			let artattk = 0;
			for (let x = 0; x < 17; x++) {
				const tempartattk = attackerts[x] * aresearch[x] * ttattack[x] * isart[x];
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
			if (isFinite(infdef) == false) {
				infdef = 0;
			}
			if (isFinite(cavdef) == false) {
				cavdef = 0;
			}
			if (isFinite(mystdef) == false) {
				mystdef = 0;
			}
			if (isFinite(artdef) == false) {
				artdef = 0;
			}
			sumofdef = infdef + cavdef + mystdef + artdef;
			//calculating ratios of attack to defence
			ratioinf = infatk * 1.0 / infdef;
			ratiocav = cavatk * 1.0 / cavdef;
			ratiomyst = mystatk * 1.0 / mystdef;
			ratioart = artatk * 1.0 / artdef;
			ratiosum = sumofattk * 1.0 / sumofdef;
			if (isFinite(ratioinf) == false) {
				ratioinf = 0;
			}
			if (isFinite(ratiocav) == false) {
				ratiocav = 0;
			}
			if (isFinite(ratiomyst) == false) {
				ratiomyst = 0;
			}
			if (isFinite(ratioart) == false) {
				ratioart = 0;
			}
			if (isFinite(ratiosum) == false) {
				ratiosum = 0;
			}
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
			if (isFinite(attinflosses) == false) {
				attinflosses = 0;
			}
			if (isFinite(attcavlosses) == false) {
				attcavlosses = 0;
			}
			if (isFinite(attmystlosses) == false) {
				attmystlosses = 0;
			}
			if (isFinite(attartlosses) == false) {
				attartlosses = 0;
			}
			if (isFinite(definflosses) == false) {
				definflosses = 0;
			}
			if (isFinite(defcavlosses) == false) {
				defcavlosses = 0;
			}
			if (isFinite(defmystlosses) == false) {
				defmystlosses = 0;
			}
			if (isFinite(defartlosses) == false) {
				defartlosses = 0;
			}
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
				survoffTS[i] = attcavlosses * iscav[i] + attinflosses * isinf[i] + attmystlosses * ismgc[i] + isart[i] * attartlosses;
			}
			for (var i = 0; i < 17; i++) {
				lossattTS[i] = attackerts[i] * survoffTS[i] * atkintenstity;
				if (lossattTS[i] > attackerts[i]) {
					lossattTS[i] = attackerts[i];
				}
				survivingattTS[i] = parseInt(attackerts[i] - lossattTS[i]);
			}
			$("#survanqA").text(survivingattTS[5]);
			$("#sursorcA").text(survivingattTS[6]);
			$("#surRangA").text(survivingattTS[2]);
			$("#surtriA").text(survivingattTS[3]);
			$("#surpriA").text(survivingattTS[4]);
			$("#surScoutA").text(survivingattTS[7]);
			$("#surhorseA").text(survivingattTS[10]);
			$("#surdruidA").text(survivingattTS[11]);
			$("#surarbA").text(survivingattTS[8]);
			$("#surpraA").text(survivingattTS[9]);
			$("#surramA").text(survivingattTS[12]);
			$("#surscorpA").text(survivingattTS[13]);
			$("#surbalisA").text(survivingattTS[1]);
			$("#surgalleyA").text(survivingattTS[14]);
			$("#surstingA").text(survivingattTS[15]);
			$("#surWgA").text(survivingattTS[16]);
		}
	})();


})();