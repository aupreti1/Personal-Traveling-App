$(document).ready(function () {

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
   
      

      $("#info-button").on("click", function() {
        event.preventDefault();
        
        var firstName = $("#first_name").val().trim();
        var lastName = $("#last_name").val().trim();
        var email = $("#email").val().trim();
        
        var newUser = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
        }

        database.ref().push(newUser);

        console.log(newUser.firstName);
        console.log(newUser.lastName);
        console.log(newUser.email);

        event.hide("#info-box");

    });
   
    
    
    var Questions = [{
        question: "How would you prefer to spend a free afternoon?",
        answerList: ["Alone in your bed with a good bool/movie", 
        "Going out to try a new restaurant", 
        "Laying out under the stars enjoying the night", 
        "Re-watching your favorite historical movie or show", 
        "Going out ot your favorite club or bar", 
        "Hanging out with a few friends at home", 
        "In the kitchen creating new concoctions of snacks"]
    }, {
        question: "What would you rather read?",
        answerList: ["./assets/images/ripper.jpg", 
        "./assets/images/travelingpants.jpg", 
        "./assets/images/intothewild.jpg", 
        "./assets/images/boleyn.jpg", 
        "./assets/images/cosmo.jpg", 
        "./assets/images/harrypotter.jpg", 
        "./assets/images/eatpraylove.jpg"]
    }, {
        question: "What movie would you prefer to watch?",
        answerList: ["./assets/images/wallflower.jpg", 
        "./assets/images/midnight.jpg", 
        "./assets/images/grizzlyman.jpg", 
        "./asseets/images/pride.jpg", 
        "./assets/images/hangover.jpg", 
        "./assets/images/howtolose.jpg", 
        "./assets/images/julieandjulia.jpg"]
    }, {
        question: "What shoes would you rather wear any day/all day?",
        answerList: ["./assets/images/bedslippers.jpg", 
        "./assets/images/chacos.jpg", 
        "./assets/images/boots.jpg", 
        "./assets/images/convers.jpg", 
        "./assets/images/heels.jpg", 
        ".assets/images/slides.jpg", 
        "./assets/images/runningshoes.jpg"]
    }, {
        question: "What is your favorite color?",
        answerList: ["./assets/images/black.jpg", 
        "./assets/images/blue.jpg", 
        "./assets/images/green.jpg", 
        "./assets/images/purple.jpg", 
        "./assets/images/orange.jpg", 
        "./assets/images/pink.jpg", 
        "./assets/images/red.jpg"]
    }, {
        question: "What show would you prefer to watch?",
        answerList: ["./assets/images/penny.jpg", 
        "./assets/images/darktourist.jpg", 
        "./assets/images/blueplanet.jpg", 
        "./assets/images/reign.jpg", 
        "./assets/images/jerseyshore.jpg", 
        "./assets/images/parksandrec.jpg", 
        "./assets/images/cupcake.jpg"]
    }, {
        question: "What would be your dream career?",
        answerList: ["Medical Lab Technician", 
        "Flight Attendant", 
        "Marine Biologist", 
        "Archeologist", 
        "Event Planner", 
        "Doggie Daycare Owner", 
        "Recipe Tester"]
    }, {
        question: "What music genre do you prefer?",
        answerList: ["Rock and Roll", 
        "Pop Music", "Folk Music", 
        "Country Music", "House Music", 
        "Classical Music", "Punk Rock"]
    }, {
        question: "What could you NOT live without?",
        answerList: ["Netflix/Hulu", 
        "Cell Phone", "Favorite Sneakers", 
        "Favorite Book", "Booze", "Pet", 
        "Favorite Food"]
    }, {
        question: "What is your preferred way of communication?",
        answerList: ["None", "FaceTime", 
        "Face to Face", "Letters", 
        "Snapchat", "Text", "Instagram"]
    }, {
        question: "Which of these do you find most satisfying?",
        answerList: ["Spending time on your own", 
        "Seeing new places", "Hiking", 
        "Reading about different times and places", 
        "Hitting up alocal club or pub", 
        "Laying on a beach or in a hammock", 
        "Discovering new places to eat"]
    }, {
        question: "Which of these superpowers sound more appealing?",
        answerList: ["./assets/images/weather.jpg", 
        "./assets/images/superman.jpg", 
        "./assets/images/fire.jpg", 
        "./assets/images/speed.jpg", 
        "./assets/images/mindreading.jpg", 
        "./assets/images/telekinesis.jpg", 
        "./assets/images/plantbasedpowers"]
    }, {
        question: "Which of these could be your spirit animals?",
        answerList: ["./assets/images/cat.jpg", 
        "./assets/images/owl.jpg", 
        ".assets/images/horse", 
        "./assets/images/dino.jpg", 
        "./assets/images/monkey.jpg", 
        "./assets/images/dog.jpg", 
        "./assets/images/bear.jpg"]
    }, {
        question: "Which of these hobbies interest you the most?",
        answerList: ["Coloring Books", 
        "Learning a language", "Camping", 
        "Reading", "Dancing", "Yoga", 
        "Cooking"]
    }, {
        question: "Which of these qualities is most appealing in a partner/friend",
        answerList: ["Loyalty", "Adventurous", 
        "Patient", "Intelligent", "Fun", 
        "Laid Back", "Open Minded"]
    }, {
        question: "Which of these celebs would you want to meet?",
        answerList: ["./assets/images/johnnydepp.jpg", 
        "./assets/images/angelinajolie.jpg", 
        "./assets/images/zacefron.jpg", 
        "./assets/images/georgeclooney", 
        "./assets/images/leonardodicaprio.jpg", 
        "./assets/images/sandrabullock.jpg", 
        "./assets/images/chrissyteigen.jpg"]
    }, {
        question: "What is your ideal date?",
        answerList: ["No date for me! I'd rather hang with my fur child", 
        "Going for a tour around the city", 
        "Hiking a mountain", 
        "Going to a museum or art gallery", 
        "Going to a night club", 
        "Dinner and a movie", 
        "Going to a high-end restaurant with a 7-course meal"]
    }, {
        question: "What picture most constitutes as your dream house?",
        answerList: ["./assets/images/secludedhouse.jpg", 
        "./assets/images/touristichouse.jpg", 
        "./assets/images/outdoorshouse.jpg", 
        "./assets/images/historicalhouse.jpg", 
        "./assets/images/partyhouse.jpg", 
        "./assets/images/relaxinghouse.jpg", 
        "./assets/images/foodiehouse.jpg"]
    }, {
        question: "Which would you rather have?",
        answerList: ["./assets/images/benandjerrys.jpg", 
        "./assets/images/macaroons.jpg", 
        "./assets/images/foodinapot.jpg", 
        "./assets/images/wineandcheese.jpg", 
        "./assets/images/drinks.jpg", 
        "./assets/images/hamburgerandfries.jpg", 
        "./assets/images/fancyfoods"]
    }, {
        question: "Which of these annoys you the most?",
        answerList: ["People who are mean to others", 
        "Being bored with nothing to do", 
        "People who constantly complain", 
        "Unnecessary drama", 
        "Phone battery's dead and you don't have a charger", 
        "Feeling stressed and overwhelmed", 
        "Messy House"]
    }, {
        question: "What vehicle would you rather drive?",
        answerList: ["./assets/images/truck.jpg", 
        "./assets/images/mustang.jpg", 
        "./assets/images/jeep.jpg", 
        "./assets/images/vintagecar.jpg", 
        "./assets/images/audi.jpg", 
        "./assets/images/rangerover.jpg", 
        "./assets/images/foodtruck.jpg"]
    }, {
        question: "How would you rather listen to your music?",
        answerList: ["Headphones", "Blasting in the Car", 
        "Music Festival", "Vinyl", "Party Inside a Club", 
        "Live Band at a Local Joint", "Bluetooth Speaker"]
    }, {
        question: "You won the lottery! What is the first thing you do?",
        answerList: ["Move off the grid", "Travel the World", 
        "Buy an Airstream and Travel", "Buy a Historical Castle", 
        "Throw a Wild Party", "Quit Your Job and Do as You Please", 
        "Treat Yourelf to an Expensive Meal"]
    }]


    var currentQuestion;

    var answered;
    var userSelect;

    function startGame() {
        $('#answered').empty();
        $('#userSelect').empty();
     
        currentQuestion = 0;
         
        newQuestion()
    }

   function newQuestion() {
       answered = true;

       for (var i = 0; i < Questions.length; i++) {
           var choices = $('<div>');
           choices.text(Questions[currentQuestion].answerList[i]);
           choices.attr({'data-index': i });
           choices.addClass('thisChoice');
           $('.answerList').append(choices);
       }

       $('.thisChoice').on('click', function () {
           userSelect = $(this).data('index')
       });
   }

   $('#info-button').on('click', function () {
    $(this).hide();
    startGame();

    });


});