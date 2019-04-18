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
            var SecLocs = ["Glacier Bay Alaska", "Tasmania Australia", "Scottish Highlands", "Salar De Uyuni Bolivia"]
            var TourLocs = ["Paris France", "Yellowstone Wyoming", "Rome Italy", "London England"]
            var OutLocs = ["Banf National Park Canada", "Yosemite National Park California", "Milford Track New Zealand", "Ningaloo Reef Australia"]
            var HistLocs = ["Machu Picchu Peru", "Tikal Guatemala", "San Antonio Texas", "Stonehenge UK"]
            var ParLocs = ["Mykonos Greece", "Amsterdam Netherlands", "Ibiza Spain", "New Orleans Louisiana"]
            var RelLocs = ["Dry Tortugas Florida", "Snowmass Colorado", "Sebago Lake Maine", "Pienza Italy"]
            var FoodLocs = ["Chicago Illinois", "Manila Philippines", "Tuscany Italy", "Catalunya Spain"]


            if (userResult.name == "secluded") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 Locations that fit your personality best:');

                for (var i = 0; i < SecLocs.length; i++) {
                    var SecOptions = $("<button>")
                    SecOptions.addClass("locations");
                    SecOptions.attr("data-location", SecLocs[i]);
                    SecOptions.text(SecLocs[i]);
                    $('.allQuestions').append(SecOptions);
                } console.log(SecOptions);

            } else if (userResult.name == "touristic") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 locations that fit your personality best: ');
                for (var i = 0; i < TourLocs.length; i++) {
                    var TourOption = $("<button>")
                    TourOption.addClass("location")
                    TourOption.attr("data-location", TourLocs[i]);
                    TourOption.text(TourLocs[i]);
                    $('.allQuestions').append(TourOption);
                }
            } else if (userResult.name == "outdoors") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 locations that fit your personality best: ');
                for (var i = 0; i < OutLocs.length; i++) {
                    var OutOption = $("<button>")
                    OutOption.addClass("location")
                    OutOption.attr("data-location", OutLocs[i]);
                    OutOption.text(OutLocs[i]);
                    $('.allQuestions').append(OutOption);
                }
            } else if (userResult.name == "historical") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 locations that fit your personality best: ');
                for (var i = 0; i < HistLocs.length; i++) {
                    var HistOption = $("<button>")
                    HistOption.addClass("location")
                    HistOption.attr("data-location", HistLocs[i]);
                    HistOption.text(HistLocs[i]);
                    $('.allQuestions').append(HistOption);
                }
            } else if (userResult.name == "party") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 locations that fit your personality best: ');
                for (var i = 0; i < ParLocs.length; i++) {
                    var ParOption = $("<button>")
                    ParOption.addClass("location")
                    ParOption.attr("data-location", ParLocs[i]);
                    ParOption.text(ParLocs[i]);
                    $('.allQuestions').append(ParOption);
                }
            } else if (userResult.name == "relaxing") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 locations that fit your personality best: ');
                for (var i = 0; i < RelLocs.length; i++) {
                    var RelOption = $("<button>")
                    RelOption.addClass("location")
                    RelOption.attr("data-location", RelLocs[i]);
                    RelOption.text(RelLocs[i]);
                    $('.allQuestions').append(RelOption);
                }
            } else if (userResult.name == "foodie") {
                $('.allQuestions').empty();
                $('.allQuestions').append('These are 4 locations that fit your personality best: > ');
                for (var i = 0; i < FoodLocs.length; i++) {
                    var FoodOption = $("<button>")
                    FoodOption.addClass("location")
                    FoodOption.attr("data-location", FoodLocs[i]);
                    FoodOption.text(FoodLocs[i]);
                    $('.allQuestions').append(FoodOption);
                }
            }
        }

        console.log('Secluded Score: ', secluded);
        console.log('Touristic Score: ', touristic);
        console.log('Outdoors Score: ', outdoors);
        console.log('Historical Score: ', historical);
        console.log('Party Score: ', party);
        console.log('Relaxing Score: ', relaxing);
        console.log('Foodie Score: ', foodie);

        

        // $('.allQuestions').on('click', function () {
        // });
    });

    // Handling every 4 buttons
    $(document).on('click', '.location', function() {
        $('.image-container').empty();
        var value = $(this).attr('data-location');
        // var Locations = [SecLocs, TourLocs, OutLocs, HistLocs, ParLocs, RelLocs, FoodLocs]
        var limit = 1
        var queryUrl = "https://pixabay.com/api/?key=12232315-9da9dc9c6bbb0051e3d59b85b&q=" + value + "&image_type=photo"

        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then(function (response) {
            console.log(response)

            var locationDiv = $("<div class='image-container location'>");

            var hits = response.hits;

            for (var i= 0; i < hits.length; i++) {
                var image = $("<img>").attr("src", hits[i].previewURL);
                locationDiv.append(image);
            }
            
            $('.allQuestions').append(locationDiv);
            // var imageURL = response.showLocs;

        })
    });

});





// $('.container').on('click',function(){
//     $.ajax({
//        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Tourism+locations+in+Paris+France&key=AIzaSyBNzLESFftgYkQdNrG2bYD_TgdTfEH1MEU',
//        method: 'GET'
//        }).then(function(response) {
//        console.log(response)