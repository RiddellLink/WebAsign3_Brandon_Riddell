
var current_page = 0;

$('#button').on('click', function(){
    $('#start').toggle();
    $('#adventure').toggle();
})

$(document).ready(function () {
    loadPage(0);
    $('#response').on('click', '.choice', function () {
        var target = $(this).data('target');
        loadPage(target);
    });
});

function loadPage(id) {
    // Fetch JSON for page data associated with given ID
    var pageData = pages[id];

    clearPage();
    setPageText(pageData.text);
    addTitle(pageData.title);
    addBackground(pageData.bg);
    
    if (pageData.type === 'choice') {
        for (var choice in pageData.choices) {
            var choiceData = pageData.choices[choice];
            addChoice(choiceData.text, choiceData.target);
        }
    }
}

function setPageText(text) {
    $("#pageText").append("<p class= pbox>" + text + "</p>");
}

function addChoice(text, target) {
    $("#response").append("<h2 class=choice data-target=" + target + ">" + text + "</h2>");
}
function addTitle(text){
    $('#title').append("<h1 class='center'>" + text + "<h1>");
}
function addBackground(text){
   
    $(".background").css("background-image", "url(" + text +")");
}


function clearPage() {
    $("#pageText").empty();
    $("#response").empty();
    $("#title").empty();
}



// Page data
var pages = [{
    
    //target 0
    'title':'',
    'bg':'imgs/bed.png',
    'text': "Surrounded in the darkness you hear your alarm going off, but it's not the first time this morning you’ve heard the loud ringing in your ears.",
        'type': 'choice',
        'choices': [{
        'text': 'Get Up',
            'target': 4
    }, {
        'text': ' 5 more minutes',
            'target': 1
    }]
}, {
    //target 1
    'title':'',
    'bg':'imgs/bed.png',
    'text': "You decide that you need another five minutes because you damn well know you deserve it! But are you forgetting something…important?",
        'type': 'choice',
        'choices': [{
            'text': 'Wait a minute… ',
            'target': 4
    }, {
        'text': 'Nope!',
            'target': 2
    }]
}, {
    //target 2
    'title':'',
    'bg':'imgs/bed.png',
    'text': "Nah, it must be nothing! As you quietly doze off which feels like an eternity, you hear that annoying ringing again signalling to you get up.",
        'type': 'choice',
        'choices': [{
            'text': 'Get Up',
            'target': 4
    }, {
        'text': ' Keep Sleeping',
            'target': 3
    }]
}, {
    //target 3
    'title': "Sleeping End",
    'bg':'imgs/sunset2.png',
    'text': "You stand your ground because no alarm is going to be the boss of you today! Hours pass as you wake up from an amazing sleep to see the sunset right in front of your eyes, as you admire the sunset it slowly dawns on you that you missed today's critique.",
        'type': 'choice',
        'choices': [{
        'text': 'Reset',
            'target': 0
    }]
}, {
    //target 4
    'title':'',
    'bg':'imgs/kit.png',
    'text': "You slowly get out of bed and look at the time on your phone: 11:50 am. You're going to be late for the critique! You quickly get dressed and attempt to rush out the door, but then you hear your stomach growling loudly. You turn your head quickly to the kitchen and grab something to eat.",
        'type': 'choice',
        'choices': [{
        'text': 'Grab an apple',
            'target': 6
    }, {
        'text': 'Make a sandwich',
            'target': 5
    }]
},
    {
    //target 5
    'title': "Sandwhich End",
    'bg':'imgs/sandwhich.png',
    'text': "You are not sure why you decided to make a sandwich 10 minutes before class, but you can’t function unless you have enough sustenance to conquer the day. You rummage through your fridge finding the premium sandwich ingredients to craft your magnum opus. You forge a sandwich that the gods would be proud of and take a bite of the best sandwich you have ever had. This sandwich can’t be eaten in a rush, you take your time and savour in the favour…who needs class when you got this beauty right in front of you.",
        'type': 'choice',
        'choices': [{
        'text': 'Reset',
            'target': 0
        }]
},
    {
    //target 6
    'title':'',
    'bg':'imgs/path.png',
    'text': "You decided to take something small along with you as you can eat as you go. You continue to rush out the door into the cold of winter as the usual heavy winds attempt to blow you away. You look at your phone again and see that is now 11:55 am you are not going to make it at this pace, but you see a sketchy route that you know is faster to the school but the ice has made it more dangerous than usual.",
        'type': 'choice',
        'choices': [{
        'text': 'Start Running',
            'target': 8
    }, {
            'text': 'Take a Detour',
                'target': 7
    }]
},
    {
    //target 7
    'title': "Broken Back End",
    'bg':'imgs/badend.png',
    'text': "You go down the sketchy path and rush forward. Your heart rate rises as you fly down the path, literally, as you slip and fall right onto your back on the hard ice, you lay in pain as minutes go by as you try to get up and when you finally do the time is already way passed your class and you decide to go back home defeated by your poor decision making.",
        'type': 'choice',
        'choices': [{
            'text': 'Reset',
                'target': 0
        }]
},
    {
    //target 8
    'title': "Classroom End",
    'bg':'imgs/class.png',
    'text': "You start bolting it down the street as you start running out of breath as you reach the main school building's doors and weave your way around the many other students as you enter the building. You keep this pace up until you reach the classroom doors and open them to see you have arrived just on time 12:00 pm. You take your seat and get out your project ready to share it with the class.",
        'type': 'choice',
        'choices': [{
        'text': 'Reset',
            'target': 0
        }]
}];
