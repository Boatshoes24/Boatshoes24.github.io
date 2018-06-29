var uldirBoss = document.getElementsByClassName("uldir_boss");

var uldirImage = function(key) {
	document.getElementById('main_image').src = uldir[key];
};

for (var i = 0; i < uldirBoss.length; i++){
	uldirBoss[i].addEventListener('click', function(){
		uldirImage(this.id);
	});
}

document.addEventListener("DOMContentLoaded", function() {
	var request = new XMLHttpRequest();

	request.open("GET", "https://raider.io/api/v1/guilds/profile?region=us&realm=Sargeras&name=Stay%20Mad&fields=raid_progression", true);

	request.addEventListener('load', function() {

		if (request.status == 200) {

			var response = JSON.parse(request.responseText);

			document.getElementById('en_normal').textContent = "Normal " + response.raid_progression["the-emerald-nightmare"]["normal_bosses_killed"] + "/" + response.raid_progression["the-emerald-nightmare"]["total_bosses"];
			document.getElementById('en_heroic').textContent = "Heroic " + response.raid_progression["the-emerald-nightmare"]["heroic_bosses_killed"] + "/" + response.raid_progression["the-emerald-nightmare"]["total_bosses"];
			document.getElementById('en_mythic').textContent = "Mythic " + response.raid_progression["the-emerald-nightmare"]["mythic_bosses_killed"] + "/" + response.raid_progression["the-emerald-nightmare"]["total_bosses"];

			document.getElementById('tov_normal').textContent = "Normal " + response.raid_progression["trial-of-valor"]["normal_bosses_killed"] + "/" + response.raid_progression["trial-of-valor"]["total_bosses"];
			document.getElementById('tov_heroic').textContent = "Heroic " + response.raid_progression["trial-of-valor"]["heroic_bosses_killed"] + "/" + response.raid_progression["trial-of-valor"]["total_bosses"];
			document.getElementById('tov_mythic').textContent = "Mythic " + response.raid_progression["trial-of-valor"]["mythic_bosses_killed"] + "/" + response.raid_progression["trial-of-valor"]["total_bosses"];

			document.getElementById('nh_normal').textContent = "Normal " + response.raid_progression["the-nighthold"]["normal_bosses_killed"] + "/" + response.raid_progression["the-nighthold"]["total_bosses"];
			document.getElementById('nh_heroic').textContent = "Heroic " + response.raid_progression["the-nighthold"]["heroic_bosses_killed"] + "/" + response.raid_progression["the-nighthold"]["total_bosses"];
			document.getElementById('nh_mythic').textContent = "Mythic " + response.raid_progression["the-nighthold"]["mythic_bosses_killed"] + "/" + response.raid_progression["the-nighthold"]["total_bosses"];

			document.getElementById('tos_normal').textContent = "Normal " + response.raid_progression["tomb-of-sargeras"]["normal_bosses_killed"] + "/" + response.raid_progression["tomb-of-sargeras"]["total_bosses"];
			document.getElementById('tos_heroic').textContent = "Heroic " + response.raid_progression["tomb-of-sargeras"]["heroic_bosses_killed"] + "/" + response.raid_progression["tomb-of-sargeras"]["total_bosses"];
			document.getElementById('tos_mythic').textContent = "Mythic " + response.raid_progression["tomb-of-sargeras"]["mythic_bosses_killed"] + "/" + response.raid_progression["tomb-of-sargeras"]["total_bosses"];

			document.getElementById('abt_normal').textContent = "Normal " + response.raid_progression["antorus-the-burning-throne"]["normal_bosses_killed"] + "/" + response.raid_progression["antorus-the-burning-throne"]["total_bosses"];
			document.getElementById('abt_heroic').textContent = "Heroic " + response.raid_progression["antorus-the-burning-throne"]["heroic_bosses_killed"] + "/" + response.raid_progression["antorus-the-burning-throne"]["total_bosses"];
			document.getElementById('abt_mythic').textContent = "Mythic " + response.raid_progression["antorus-the-burning-throne"]["mythic_bosses_killed"] + "/" + response.raid_progression["antorus-the-burning-throne"]["total_bosses"];
		}
		else {
			alert('error' + result.statusText);
		}
	});
	request.send();
});

var uldir = {
	uldir_boss_1: "https://i.imgur.com/Jgmse5J.jpg",       
	uldir_boss_2: "https://i.imgur.com/Jgmse5J.jpg",            
	uldir_boss_3: "https://i.imgur.com/Jgmse5J.jpg",          
	uldir_boss_4: "https://i.imgur.com/Jgmse5J.jpg",         
	uldir_boss_5: "https://i.imgur.com/Jgmse5J.jpg",           
	uldir_boss_6: "https://i.imgur.com/Jgmse5J.jpg",        
	uldir_boss_7: "https://i.imgur.com/Jgmse5J.jpg",        
	uldir_boss_8: "https://i.imgur.com/Jgmse5J.jpg",                  
};