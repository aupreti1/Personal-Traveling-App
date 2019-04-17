$(document).ready(function () {

    var totalScore = 0;

    var secluded = {
        count: 0,
        result: 0,
        name: 'secluded'
    };
    var touristic = {
        count: 0,
        result: 0,
        name: 'touristic'
    };
    var outdoors = {
        count: 0,
        result: 0,
        name: 'outdoors'
    };
    var historical = {
        count: 0,
        result: 0,
        name: 'historical'
    };
    var party = {
        count: 0,
        result: 0,
        name: 'party'
    };
    var relaxing = {
        count: 0,
        result: 0,
        name: 'relaxing'
    };
    var foodie = {
        count: 0,
        result: 0,
        name: 'foodie'
    };


    var config = {
        apiKey: "AIzaSyCEEkKqWFKy24DDMpplraZp_XDdRW6kwZI",
        authDomain: "personality-vacation-quiz.firebaseapp.com",
        databaseURL: "https://personality-vacation-quiz.firebaseio.com",
        projectId: "personality-vacation-quiz",
        storageBucket: "personality-vacation-quiz.appspot.com",
        messagingSenderId: "212502506246"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    const dbRefUser = database.ref('newUser');


    $('#info-button').on('click', function () {
        event.preventDefault();

        var firstName = $('#first_name').val().trim();
        var lastName = $('#last_name').val().trim();
        var email = $('#email').val().trim();

        dbRefUser.push({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
        })


        $('#info-box').hide();


    });



    var Questions = [{
        question: "How would you prefer to spend a free afternoon?",
        text: [
            "Alone in your bed with a good book/movie",
            "Going out to try a new restaurant",
            "Laying out under the stars enjoying the night",
            "Re-watching your favorite historical movie or show",
            "Going out ot your favorite club or bar",
            "Hanging out with a few friends at home",
            "In the kitchen creating new concoctions of snacks"]

    }, {
        question: "What would you rather read?",
        img: [
            "./assets/images/ripper.jpg",
            "./assets/images/travelingpants.jpg",
            "./assets/images/intothewild.jpg",
            "./assets/images/boleyn.jpg",
            "./assets/images/cosmo.jpg",
            "./assets/images/harrypotter.jpg",
            "./assets/images/eatpraylove.jpg"]

    }, {
        question: "What movie would you prefer to watch?",
        img: ["./assets/images/wallflower.jpg",
            "./assets/images/midnight.jpg",
            "./assets/images/grizzlyman.jpg",
            "./assets/images/pride.jpg",
            "./assets/images/hangover.jpg",
            "./assets/images/howtolose.jpg",
            "./assets/images/julieandjulia.jpg"]

    }, {
        question: "What shoes would you rather wear any day/all day?",
        img: ["./assets/images/bedslippers.jpg",
            "./assets/images/chacos.jpg",
            "./assets/images/boots.jpg",
            "./assets/images/convers.jpg",
            "./assets/images/heels.jpg",
            "./assets/images/nike.jpg",
            "./assets/images/runningshoes.jpg"]
    }, {
        question: "What is your favorite color?",
        img: ["./assets/images/black.jpg",
            "./assets/images/blue.jpg",
            "./assets/images/green.jpg",
            "./assets/images/purple.jpg",
            "./assets/images/orange.jpg",
            "./assets/images/pink.jpg",
            "./assets/images/red.jpg"]

    }, {
        question: "What show would you prefer to watch?",
        img: ["./assets/images/penny.jpg",
            "./assets/images/darktourist.jpg",
            "./assets/images/blueplanet.jpg",
            "./assets/images/reign.jpg",
            "./assets/images/jerseyshore.jpg",
            "./assets/images/parksandrec.jpg",
            "./assets/images/cupcake.jpg"]

    }, {
        question: "What would be your dream career?",
        text: ["Medical Lab Technician",
            "Flight Attendant",
            "Marine Biologist",
            "Archeologist",
            "Event Planner",
            "Doggie Daycare Owner",
            "Recipe Tester"]

    }, {
        question: "What music genre do you prefer?",
        text: ["Rock and Roll",
            "Pop Music", "Folk Music",
            "Country Music", "House Music",
            "Classical Music", "Punk Rock"]

    }, {
        question: "What could you NOT live without?",
        text: ["Netflix/Hulu",
            "Cell Phone", "Favorite Sneakers",
            "Favorite Book", "Booze", "Pet",
            "Favorite Food"]

    }, {
        question: "What is your preferred way of communication?",
        text: ["None", "FaceTime",
            "Face to Face", "Letters",
            "Snapchat", "Text", "Instagram"]

    }, {
        question: "Which of these do you find most satisfying?",
        text: ["Spending time on your own",
            "Seeing new places", "Hiking",
            "Reading about different times and places",
            "Hitting up alocal club or pub",
            "Laying on a beach or in a hammock",
            "Discovering new places to eat"]

    }, {
        question: "Which of these superpowers sound more appealing?",
        img: ["./assets/images/weather.jpg",
            "./assets/images/superman.jpg",
            "./assets/images/fire.jpg",
            "./assets/images/speed.jpg",
            "./assets/images/mindreading.jpg",
            "./assets/images/telekinesis.jpg",
            "./assets/images/plantbased.jpg"]

    }, {
        question: "Which of these could be your spirit animals?",
        img: ["./assets/images/cat.jpg",
            "./assets/images/owl.jpg",
            "./assets/images/horse.jpg",
            "./assets/images/dino.jpg",
            "./assets/images/monkey.jpg",
            "./assets/images/dog.jpg",
            "./assets/images/bear.jpg"]

    }, {
        question: "Which of these hobbies interest you the most?",
        text: ["Coloring Books",
            "Learning a language", "Camping",
            "Reading", "Dancing", "Yoga",
            "Cooking"]

    }, {
        question: "Which of these qualities is most appealing in a partner/friend",
        text: ["Loyalty", "Adventurous",
            "Patient", "Intelligent", "Fun",
            "Laid Back", "Open Minded"]

    }, {
        question: "Which of these celebs would you want to meet?",
        img: ["./assets/images/johnnydepp.jpg",
            "./assets/images/angelinajolie.jpg",
            "./assets/images/zacefron.jpg",
            "./assets/images/georgeclooney.jpg",
            "./assets/images/leonardodicaprio.jpg",
            "./assets/images/sandrabullock.jpg",
            "./assets/images/chrissyteigen.jpg"]

    }, {
        question: "What is your ideal date?",
        text: ["No date for me! I'd rather hang with my fur child",
            "Going for a tour around the city",
            "Hiking a mountain",
            "Going to a museum or art gallery",
            "Going to a night club",
            "Dinner and a movie",
            "Going to a high-end restaurant with a 7-course meal"]
    }, {
        question: "What picture most constitutes as your dream house?",
        img: ["./assets/images/secludedhouse.jpg",
            "./assets/images/touristichouse.jpg",
            "./assets/images/outdoorshouse.jpg",
            "./assets/images/historicalhouse.jpg",
            "./assets/images/partyhouse.jpg",
            "./assets/images/relaxinghouse.jpg",
            "./assets/images/foodiehouse.jpg"]

    }, {
        question: "Which would you rather have?",
        img: ["./assets/images/benandjerrys.jpg",
            "./assets/images/macaroons.jpg",
            "./assets/images/foodinapot.jpg",
            "./assets/images/wineandcheese.jpg",
            "./assets/images/drinks.jpg",
            "./assets/images/hamburgerandfries.jpg",
            "./assets/images/fancyfoods.jpg"]

    }, {
        question: "Which of these annoys you the most?",
        text: ["People who are mean to others",
            "Being bored with nothing to do",
            "People who constantly complain",
            "Unnecessary drama",
            "Phone battery's dead and you don't have a charger",
            "Feeling stressed and overwhelmed",
            "Messy House"]

    }, {
        question: "What vehicle would you rather drive?",
        img: ["./assets/images/truck.jpg",
            "./assets/images/mustang.jpg",
            "./assets/images/jeep.jpg",
            "./assets/images/vintagecar.jpg",
            "./assets/images/audi.jpg",
            "./assets/images/rangerover.jpg",
            "./assets/images/foodtruck.jpg"]
    }, {
        question: "How would you rather listen to your music?",
        text: ["Headphones", "Blasting in the Car",
            "Music Festival", "Vinyl", "Party Inside a Club",
            "Live Band at a Local Joint", "Bluetooth Speaker"]
    }, {
        question: "You won the lottery! What is the first thing you do?",
        text: ["Move off the grid", "Travel the World",
            "Buy an Airstream and Travel", "Buy a Historical Castle",
            "Throw a Wild Party", "Quit Your Job and Do as You Please",
            "Treat Yourelf to an Expensive Meal"]
    }];

    

    var counter = 0;

var generateQuestion = (answerList, question, type) => {
    var questionDivContainer = $('<div>').attr('class', 'question');
    var questionTag = $('<h2>').html(question);
    var ulTag = $('<ul>');

    for (var i = 0; i < answerList.length; i++) {
        var question;
        var result = i + 1;
        var choiceLI = $('<li class="choice" data-choice="' + result + '">');
        if (type === 'text') {
            question = choiceLI.html(answerList[i]);
        } else {
            console.log(answerList[i]);
            var img = $('<img class="imgAnswer">');
            img.attr('src', answerList[i]);
            question = choiceLI.html(img); 
        }
        ulTag.append(question);
    }

    questionDivContainer.append(questionTag, ulTag);
    return questionDivContainer;
};


function startNewQuestion() {

    var questionTemplate;
    var question = Questions[counter].question;

    for (var key in Questions[counter]) {
        var answerList = Questions[counter][key];;
        if (key === 'text') {
            questionTemplate = generateQuestion(answerList, question, 'text');
        }
        if (key === 'img') {
            questionTemplate = generateQuestion(answerList, question, 'img');
        }
    }

    $('.allQuestions').append(questionTemplate);


}

function nextQuestion(isBegining) {
    $('.allQuestions').empty();
    counter++;
    if (isBegining) {
        counter = 0;
    }
    if (counter < Questions.length) {
        startNewQuestion();
    } else {
        console.log("NO More Questions");
    }
}

$('#info-button').on('click', function () {
    nextQuestion(true);
});

$(document).on("click", ".choice", function () {
    nextQuestion();

    var result = parseInt($(this).attr('data-choice')); // convert this to number

    if (result === 1) {
        secluded.result += result;
        secluded.count += 1;
    } else if (result === 2) {
        touristic.result += result;
        touristic.count += 1;
    } else if (result === 3) {
        outdoors.result += result;
        outdoors.count += 1;
    } else if (result === 4) {
        historical.result += result;
        historical.count += 1;
    } else if (result === 5) {
        party.result += result;
        party.count += 1;
    } else if (result === 6) {
        relaxing.result += result;
        relaxing.count += 1;
    } else if (result === 7) {
        foodie.result += result;
        foodie.count += 1;
    }


    // User reach the end of the questions
    if (counter === Questions.length) {
        var userSelection = [
            secluded,
            touristic,
            outdoors,
            historical,
            party,
            relaxing,
            foodie,
        ];


        var userResult = userSelection.reduce(function (prev, current) {
            if (prev.count > current.count) {
                return prev;
            }
            return current;
        
        }) 
        console.log('User Result: ', userResult);
       
        if(userResult == secluded){
            $('.allQuestions').empty();
            $('.allQuestions').append('These are 4 Locations that fit your personality best: <br> Glacier Bay, Alaska <br> Tasmania, Austrailia <br> Scottish Highlands <br> Salar de Uyuni, Bolivia');
        }
    }

    console.log('Secluded Score: ', secluded);
    console.log('Touristic Score: ', touristic);
    console.log('Outdoors Score: ', outdoors);
    console.log('Historical Score: ', historical);
    console.log('Party Score: ', party);
    console.log('Relaxing Score: ', relaxing);
    console.log('Foodie Score: ', foodie);
    
})


});
