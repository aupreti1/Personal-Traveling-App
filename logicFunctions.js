let result;
result = document.getElementById("result");
let afternoon, read, movie, shoes, color, show, career, music, live, communication, satisfying,
superpower, animal, hobby, quality, celeb, date, house, food, annoy, vehicle, listen, lottery;

function processResults(){
    console.log('processResults')
    //get the checked boxes for each question category
    afternoon = document.click('input[name="afternoon"]:clicked');
    read = document.click('input[name="read"]:clicked');
    movie = document.click('input[name="movie"]:clicked');
    shoes = document.click('input[name="shoes"]:clicked');
    color = document.click('input[name="color"]:clicked');
    show = document.click('input[name="show"]:clicked');
    career = document.click('input[name="career"]:clicked');
    music = document.click('input[name="music"]:clicked');
    live = document.click('input[name="live"]:clicked');
    communication = document.click('input[name="communication"]:clicked');
    satisfying = document.click('input[name="satisfying"]:clicked');
    superpower = document.click('input[name="superpower"]:clicked');
    animal = document.click('input[name="animal"]:clicked');
    hobby = document.click('input[name="hobby"]:clicked');
    quality = document.click('input[name="quality"]:clicked');
    celeb = document.click('input[name="celeb"]:clicked');
    date = document.click('input[name="date"]:clicked');
    house = document.click('input[name="house"]:clicked');
    food = document.click('input[name="food"]:clicked');
    annoy = document.click('input[name="annoy"]:clicked');
    vehicle = document.click('input[name="vehicle"]:clicked');
    listen = document.click('input[name="listen"]:clicked');
    lottery = document.click('input[name="lottery"]:clicked');
}
//if any of them don't have a checked option, alert the user and return to stop
//if(afternoon == undefined || read == undefined || movie == undefined || shoes == undefined || color == undefined || 
   // show == undefined || career == undefined || music == undefined || live == undefined || communication == undefined || 
   // satisfying == undefined || superpower == undefined || animal == undefined || hobby == undefined || 
   // quality == undefined || celeb == undefined || date == undefined || house == undefined || food == undefined || 
    //annoy == undefined || vehicle == undefined || listen == undefined || lottery == undefined){
        //;
        //return;
   // }

let personality = getPersonality();
let name;

if(personality == 1){
    name = "Secluded";
    pageTitle.innerHTML = 'You are the ${name} type!!'
    result.style.backgroundImage = "url('images/IMAGELINKHERE.jpg')";
} else if (personality == 2) {
    name = "Touristic";
    pageTitle.innerHTML = 'You are the ${name} type!!';
    result.style.backgroundImage = "url ('images/IMAGELINKHERE.jpg')";
} else if (personality == 3) {
    name = "Outdoors";
    pageTitle.innerHTML = 'You are the ${name} type!!';
    result.style.backgroundImage = "url('images/IMAGELINKHERE.jpg')";
} else if (personality == 4) {
    name = "Historical";
    pageTitle.innerHTML = 'You are the ${name} type!!';
    result.style.backgroundImage = "url('images/IMAGELINKHERE.jpg')";
} else if (personality == 5) {
    name = "Party";
    pageTitle.innerHTML = 'You are the ${name} type!!';
    result.style.backgroundImage = "url('images/IMAGELINKHERE.jpg')";
} else if (personality == 6) {
    name = "Relaxing";
    pageTitle.innerHTML = 'You are the ${name} type!!';
    result.style.backgroundImage = "url('images/IMAGELINKHERE.jpg')";
} else if (personality == 7) {
    name = "Foodie";
    pageTitle.innerHTML = 'You are the ${name} type!!';
    result.style.backgroundImage = "url('images/IMAGELINKHERE.jpg')";
}

function getPersonality(){
    console.log('getPersonality')
    let score = 0;
    score += afternoonDict[afternoon.id];
    score += readDict[read.id];
    score += movieDict[movie.id];
    score += shoesDict[shoes.id];
    score += colorDict[color.id];
    score += showDict[show.id];
    score += careerDict[career.id];
    score += musicDict[music.id];
    score += liveDict[live.id];
    score += communicationDict[communication.id];
    score += satisfyingDict[satisfying.id];
    score += superpowerDict[superpower.id];
    score += animalDict[animal.id];
    score += hobbyDict[hobby.id];
    score += qualityDict[quality.id];
    score += celebDict[celeb.id];
    score += dateDict[date.id];
    score += houseDict[house.id];
    score += foodDict[food.id];
    score += annoyDict[annoy.id];
    score += vehicleDict[vehicle.id];
    score += listenDict[listen.id];
    score += lotteryDict[lottery.id];

}

let afternoonDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};

let readDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let movieDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let shoesDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let colorDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let showDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let careerDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let musicDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let liveDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let communicationDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let satisfyingDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let superpowerDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let animalDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let hobbyDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let qualityDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let celebDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let dateDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let houseDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let foodDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let annoyDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let vehicleDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let listenDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};
let lotteryDict = {
    secluded:1,
    touristic:2,
    outdoors:3,
    historical:4,
    party:5,
    relaxing:6,
    foodie:7
};