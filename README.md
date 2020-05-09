# Gfunky3
This script has the following
1. Dhruvs Dfunky, 
2. Incoming troop predictor.
3. Raiding setup in war councilor raider.
4. Carry percentage in war councilor raider.
5. Attack planner.
6. Defence planner.
7. Troops neeeded table on the side panel in region view.
8. Auto addition of troop numbers when hunting bosses and setting raids on region view.
9. Carry percentage check in command window.
10. call button for raids less than 90% in command window.
11. Summary tab on top right.
12. Fill, Convert, Refine, On/off councilor, Raid, Demolish buttons.
13. city layout designs.
14. Nearest defence, add cords from region view panel to attack/defence sender.
15. Lionell0 Quick Build, 
16. Raiding improvements by Greety, 
17. City Notes coordinates by Fact,  
18. buttons for 100% and 115% raiding options in War councilor by Greety.
19. Shrine Planner
20. Fixed Summary Tabs by Fact
21. removed fill button from build que - Now in overviews
22. Added Note to Summary incoming attacks that this is now on overviews Page
23. Fixed sizing issues for summary all summary tabs

Quick Build Features
1. Welcome

2. Clear the chat feature
Clear.png A button is added in extra feature for the chat. Clicking on it clear the different chats (world, ally, officer, whisper).

3. Advanced build feature
A button bar is added in left column to facilitate building construction. Button bar.png

3.1 Prerequisite
To activate the functionality you need to define a Layout planner. To define a layout click on edit in left bar, Edit layout.png, then set a map in layout planner Set layout.png If not, a message "Set a map to activate functionality". Currently this message can occur on city displayed while loading (see issue 2. If the map is set, switch city and get back. This functionality can be used in complement of cfuncky script.

3.2 Activating feature
To activate/dis-activate, click on 1rst button. Warning, the status is kept while changing the city.

3.3 Others selectors
The others selectors indicates the remaining task comparing current map and planed map. The first selector indicate resources or buildings that have to be destroyed. The second selector indicate buildings that have to be moved. The third selector indicate buildings that have to be added. Those are only information items. Feel free to build an alternative regarding the planed map.

3.4 Building steps
The script is designed to respect the different step of building a city.

3.4.1 Removing useless resources or building.
If a resource has to be replace by a building, clicking on it will request to destroy it in the build queue. If a building is there but is not planed, clicking on it will also request to destroy it in the build queue. See 3.5.1 for food city speciality

3.4.2 Moving an existing building to the right place.
If a building is not at the planed location and if it can be moved, clicking on it will move it to the next empty and planed location. If no location available, an alert is displayed. This is typically the case while settling or conquering a city.

3.4.3 Adding cabin.
If a city has less than 50 building, clicking on an empty location, will add a cabin in build queue.

3.4.4 Adding building.
Clicking on an empty but planed location will add it in the build queue, except castle and palaces for safety reasons.

3.4.5 Removing cabin.
Clicking on cabin as it is not planed will request to destroy it in the building queue.

3.5 Particular city type
3.5.1 Food city
If a city has a farm estate in the planed map, it is consider as a food city. In this case, any resource but lake is request to be destroyed while clicking on.

3.5.2 Navy city (stinger or warship)
If a city has 8 shipyard and less than 60 building in the planed map, it is consider as a navy city. In this case, clicking on an empty location will add a barrack in building queue.

3.5.3 Trade city (Hub and palace feeders)
If a city has 20 forum, it is consider as a trade city. In this case, clicking on an empty location will add a forum in building queue.
