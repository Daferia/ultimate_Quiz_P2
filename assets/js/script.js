const quizObj = [
    
    {question:"In which Italian city can you find the Colosseum?",
    answers:["Venice","Rome","Naples","Milan"],
    correct:"Rome"},
    
    {question:"In the TV show New Girl, which actress plays Jessica Day?",
    answers:["Zooey Deschanel","Kaley Cuoco","Jennifer Aniston","Alyson Hannigan"],
    correct:"Zooey Deschanel"},

    
    {question:"What is the largest canyon in the world?",
    answers:["Verdon Gorge, France","King’s Canyon, Australia","Grand Canyon, USA","Fjaðrárgljúfur Canyon, Iceland"],
    correct:"Grand Canyon, USA"},
    
    {question:"How long is the border between the United States and Canada?",
    answers:["3,525 miles","4,525 miles","5,525 miles","6,525 miles"],
    correct:"5,525 miles"},
    
    {question:"What is the largest active volcano in the world?",
    answers:["Mount Etna","Mount Vesuvius","Mouna Loa","Mount Batur"],
    correct:"Mouna Loa"},
    
    {question: "When did Lenin die?",
    answers:[ "21 January 1924", "21 January 1934", "21 January 1944", "21 January 1954"],
    correct: "21 January 1924"},
    
    {question:"In which US state did the Scopes Monkey Trial happen?",
    answers:["Maryland","South Dakota","Indiana","Tennessee"],
    correct:"Tennessee"},
    
    {question:"When was the book “To Kill a Mockingbird” by Harper Lee published?",
    answers:[1950,1960,1970,1980],
    correct:1960},
    
    {question:"In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
    answers:["Le Louvre","Uffizi Museum","British Museum","Metropolitan Museum of Art"],
    correct:"Le Louvre"},
    
    {question:"In which city can you find the Prado Museum?",
    answers:["Buenos Aires","Barcelona","Santiago","Madrid"],
    correct:"Madrid"},
    
    {question:"When did Salt Lake City host the Winter Olympics?",
    answers:[1992,1998,2002,2008],
    correct:2002},
    
    {question:"In the Big Bang Theory, what is the name of Sheldon and Leonard’s neighbour?",
    answers:["Penny","Patty","Lily","Jessie"],
    correct:"Penny"},
    
    {question:"When did Hitler invade Poland?",
    answers:["1st September 1939","11th November 1939","8th May 1940","1st December 1940"],
    correct:"1st September 1939"},
    
    {question:"What is the largest continent in size?",
    answers:["Asia","Africa","Europe","North America"],
    correct:"Asia"},
    
    {question:"Which French king was nicknamed the “Sun King”?",
    answers:["Louis XVI","Charlemagne","Francis I","Louis XIV"],
    correct:"Louis XVI"},
    
    {question:"Who was George W. Bush’ vice president?",
    answers:["Kamala Harris","Joe Biden","Dick Cheney","Al Gore"],
    correct:"Dick Cheney"},
    
    {question:"Which famous inventor invented the telephone?",
    answers:["Thomas Edison","Benjamin Franklin","Alexander Graham Bell","Nikola Tesla"],
    correct:"Alexander Graham Bell"},
    
    {question:"If you are born on the 1st of January, which star sign are you?",
    answers:["Scorpio","Capricorn","Libra","Aries"],
    correct:"Capricorn"},
    
    {question:"How many wives had Henry VIII?",
    answers:[1,3,4,6],
    correct:6},
    
    {question:"In which city is the Juventus Football Club based?",
    answers:["Turin","Barcelona","Manchester","Marseille"],
    correct:"Turin"},
    
    {question:"Which artist and author made the Smurfs comic strips?",
    answers:["Hergé","Peyo","Morris","Edgar P. Jacobs"],
    correct:"Peyo"},
    
    {question:"What does the Richter scale measure?",
    answers:["Wind Speed","Temperature","Tornado Strength","Earthquake intensity"],
    correct:"Earthquake intensity"},
    
    {question:"Which country is the footballer Cristiano Ronaldo from?",
    answers:["Spain","Brazil","Uruguay","Portugal"],
    correct:"Portugal"},
    
    {question:"What is the longest river in the world?",
    answers:["Amazon River","Nile","Yellow River","Congo River"],
    correct:"Nile"},
    
    {question:"How many sides has a Hexagon?",
    answers:[5,6,7,8],
    correct:6},
    
    {question:"Which country does not share a border with Romania?",
    answers:["Ukraine","Bulgaria","Hungary","Poland"],
    correct:"Poland"},
    
    {question:"What is the name of the main character in Pride and Prejudice?",
    answers:["Bernadette Smith","Poppy Williams","Elizabeth Bennet","Maggie Johnson"],
    correct:"Elizabeth Bennet"},
    
    {question:"In which country was the airline Ryanair founded?",
    answers:["Germany","Ireland","Scotland","Spain"],
    correct:"Ireland"},
    
    {question:"When were Guy Fawkes and The Gunpowder Plot discovered?",
    answers:[1505,1605,1705,1805],
    correct:1605},
    
    {question:"Who wrote Catch22?",
    answers:["Mark Twain","Ernest Hemingway","Charles Dickens","Joseph Heller"],
    correct:"Joseph Heller"},
    
    {question:"Who was assassinated on the 22nd of November 1963?",
    answers:["Martin Luther King","JFK","MK Gandhi","Malcolm X"],
    correct:"JFK"},
    
    {question:"When was the first Harry Potter book published?",
    answers:[1997,1999,2001,2003],
    correct:1997},
    
    {question:"Which author is known for creating Hercule Poirot?",
    answers:["James Patterson","Stephen King","Arthur Conan Doyle","Agatha Christie"],
    correct:"Agatha Christie"},
    
    {question:"If you are eating chicken jalfrezi, what type of food are you eating?",
    answers:["French food","Italian food","Indian Food","Mexican Food"],
    correct:"Indian Food"},
    
    {question:"Which battle did William the Conqueror win in 1066?",
    answers:["Battle of Hastings","Battle of Waterloo","Battle of Borodino","Battle of the Somme"],
    correct:"Battle of Hastings"},
    
    {question:"Who is the CEO of Amazon?",
    answers:["Elon Musk","Tim Cook","Mark Zuckerberg","Jeff Bezos"],
    correct:"Jeff Bezos"},
    
    {question:"Which country was not part of the Axis Powers during WWII?",
    answers:["Germany","Italy","Soviet Union","Japan"],
    correct:"Soviet Union"},
    
    {question:"Which band released the song “Wonderwall” in the 90s?",
    answers:["Oasis","Joy Division","The Verge","Nirvana"],
    correct:"Oasis"},
    
    {question:"“When I find myself in times of trouble, Mother Mary comes to me” is the opening line of which song?",
    answers:["Smells like teen spirit – Nirvana","Get lucky – Daft Punk","Sweet Child O’ Mine – Gun N’ Roses","Let it be – The Beatles"],
    correct:"Let it be – The Beatles"},
    
    {question:"What was Euclid?",
    answers:["A philosopher","A poet","A painter","A mathematician"],
    correct:"A mathematician"},
    
    {question:"Which ballroom dance originated in Germany and Austria?",
    answers:["Salsa","Waltz","Jive","Cha Cha"],
    correct:"Waltz"},
    
    {question:"What is the capital of Iraq?",
    answers:["Baghdad","Islamabad","Tehran","Amman"],
    correct:"Baghdad"},
    
    {question:"Which country won the first Football World Cup in 1930?",
    answers:["Brazil","Portugal","Italy","Uruguay"],
    correct:"Uruguay"},
    
    {question:"In which country is the baht the currency?",
    answers:["Vietnam","Malaysia","Indonesia","Thailand"],
    correct:"Thailand"},
    
    {question:"In which city were the 2000 Summer Olympics held?",
    answers:["London","Paris","Barcelona","Sydney"],
    correct:"Sydney"},
    
    {question:"What colour is the “m” from the McDonald’s logo?",
    answers:["Blue","Red","Yellow","Black"],
    correct:"Yellow"},
    
    {question:"In which city was Martin Luther King Jr. assassinated?",
    answers:["New York","Austin","Miami","Memphis"],
    correct:"Memphis"},
    
    {question:"What is the name of the dog in Tintin?",
    answers:["Snowy","Flakes","Dottie","Luna"],
    correct:"Snowy"},
    
    {question:"Who released the song “Girls Just Want To Have Fun” in the 80s?",
    answers:["Blondie","Cyndi Lauper","Aha","Bonnie Tyler"],
    correct:"Cyndi Lauper"},
    
    {question:"What is guacamole made of?",
    answers:["Banana","Yoghurt","Avocado","Chick Pea"],
    correct:"Avocado"},
    
    {question:"“Onze” is the french number for?",
    answers:[3,8,9,11],
    correct:11},
    
    {question:"Which month is the aquamarine the birthstone of?",
    answers:["January","March","June","September"],
    correct:"March"},
    
    {question:"Which natural landmark is not in Australia?",
    answers:["Moeraki Boulders","The Great Barrier Reef","Uluru","12 Apostles"],
    correct:"Moeraki Boulders"},
    
    {question:"Which one of the following islands is not in Scotland?",
    answers:["Isle of Skye","Islay","Isle of Mull","Caladesi Island"],
    correct:"Caladesi Island"},
    
    {question:"Who was the 40th President of the United States?",
    answers:["Franklin D. Roosevelt","Ronald Reagan","Bill Clinton","George W. Bush"],
    correct:"Ronald Reagan"},
    
    {question:"How many players are in a cricket team?",
    answers:[8,9,10,11],
    correct:11},
    
    {question:"Which actress played Sally Draper in Mad Men?",
    answers:["January Jones","Christina Hendricks","Kiernan Shipka","Elisabeth Moss"],
    correct:"Kiernan Shipka"},
    
    {question:"What does NASA stand for?",
    answers:["National Aeronautics and Space Administration","Nautical And Space Association","National Aeronautics and Space Association","New Aeronautics and Spacial Administration"],
    correct:"National Aeronautics and Space Administration"},
    
    {question:"What is “the Marbella” in Jane the Virgin?",
    answers:["A dance","A telenovela","A hotel","A police operation code name"],
    correct:"A hotel"},
    
    {question:"Who was the first woman to win a Nobel Prize?",
    answers:["Mother Teresa","Marie Curie","Jane Adams","Alva Myrdal"],
    correct:"Marie Curie"},
    
    {question:"Which Friends character’s famous pickup line is “How you doin’?",
    answers:["Joey","Ross","Chandler","Mike"],
    correct:"Joey"},
    
    {question:"What is Marshall’s job in How I met your mother?",
    answers:["Architect","Lawyer","Teacher","Journalist"],
    correct:"Lawyer"},
    
    {question:"On which streaming service did The Morning show premiere in 2019?",
    answers:["Netflix","Amazon Prime","Apple TV+","Dinsey +"],
    correct:"Apple TV+"},
    
    {question:"What is the name of the gem in the movie Titanic?",
    answers:["Call of the Ocean","Heart of Love","Heart of the Ocean","Call of Love"],
    correct:"Heart of the Ocean"},
    
    {question:"What is the national animal of England?",
    answers:["Puffin","Lion","Rabbit","Fox"],
    correct:"Lion"},
    
    {question:"Which constellation is on the Australian flag?",
    answers:["The southern cross","Orion","Ursa Minor","Scorpius"],
    correct:"The southern cross"},
    
    {question:"What is the capital of New Zealand?",
    answers:["Christchurch","Wellington","Auckland","Dunedin"],
    correct:"Wellington"},
    
    {question:"Which one of the following companies has a mermaid in its logo?",
    answers:["Twitter","HSBC","Target","Starbucks"],
    correct:"Starbucks"},
    
    {question:"Apart from water, what is the most popular drink in the world?",
    answers:["Tea","Coffee","Beer","Orange Juice"],
    correct:"Tea"},
    
    {question:"In The Lion King, who is Simba’s uncle?",
    answers:["Mufasa","Scar","Timon","Zazu"],
    correct:"Scar"},
    
    {question:"How many bones are there in an adult human body?",
    answers:[186,206,286,306],
    correct:206},
    
    {question:"What is the currency in Poland?",
    answers:["Polish Pounds","Polish Krone","Polish Dollars","Polish Zloty"],
    correct:"Polish Zloty"},
    
    {question:"What was Daniel Craig’s first James Bond movie?",
    answers:["No time to Die","Casino Royale","Skyfall","Quantum of Solace"],
    correct:"Casino Royale"},
    
    {question:"Which fruit is at the top of the Wimbledon gentlemen’s singles trophy?",
    answers:["Strawberry","Pineapple","Mango","Apple"],
    correct:"Pineapple"},
    
    {question:"During which historical period is the movie ‘Schindler’s List’ set?",
    answers:["Vietnam War","WWI","WWII","War of Roses"],
    correct:"WWII"},
    
    {question:"Who famously said “Veni, vidi, vici”?",
    answers:["Winston Churchill","Charles de Gaulle","Julius Caesar","Alexander the Great"],
    correct:"Julius Caesar"},
    
    {question:"Who discovered the tumb of Tutankhamun?",
    answers:["Howard Carter","Arthur Evans","Mortimer Wheeler","Kathleen Kenyon"],
    correct:"Howard Carter"},
    
    {question:"Which city was covered in ashes during the eruption of Mount Vesuvius in 79 AD?",
    answers:["Rome","Catania","Pompeii","Naples"],
    correct:"Pompeii"},
    
    {question:"What was the first national park in the US?",
    answers:["Yellowstone National Park","Great Smoky Mountains National Park","Zion National Park","Rocky Mountain National Park"],
    correct:"Yellowstone National Park"},
    
    {question:"Which historical battle is featured in the TV series “Outlander”?",
    answers:["Battle of Trafalgar","Battle of Culloden","Battle of Inkerman","Battle of the Alma"],
    correct:"Battle of Culloden"},
    
    {question:"Mallorca is part of which archipelago?",
    answers:["Balearic Islands","Canary Islands","Whitsunday Islands","Galapagos Islands"],
    correct:"Balearic Islands"},
    
    {question:"The Union Jack is the name of which country’s flag?",
    answers:["USA","UK","Australia","New Zealand"],
    correct:"UK"},
    
    {question:"Which Nobel Prize did Winston Churchill win?",
    answers:["Literature","Peace","Chemistry","Physics"],
    correct:"Literature"},
    
    {question:"In Home Alone, where were the McCallister flying to when they left Kevin?",
    answers:["England","Florida","France","Mexico"],
    correct:"France"},
    
    {question:"In Mamma Mia, which one of the following actors didn’t play one of Sophie’s dad?",
    answers:["Pierce Brosman","Colin Firth","Hugh Grant","Stellan Skarsgård"],
    correct:"Hugh Grant"},
    
    {question:"What type of pastry is used to make a Millefeuille?",
    answers:["Puff pastry","Flaky Pastry","Choux Pastry","Shortcrust Pastry"],
    correct:"Puff pastry"},
    
    {question:"In which Disney movie can you see a character named Mr. Banks?",
    answers:["The Aristocats","Mary Poppins","Pinocchio","The Beauty and the Tramp"],
    correct:"Mary Poppins"},
    
    {question:"Which actress played Emily Cooper in “Emily in Paris”?",
    answers:["Lily Collins","Lily James","Gal Gadot","Anna Kendrick"],
    correct:"Lily Collins"},
    
    {question:"Which one of the following is the correct spelling?",
    answers:["Mantenance","Maintenance","Miantenance","Maintenence"],
    correct:"Maintenance"},
    
    {question:"Which one of the following is not a character in the cartoon “The Powerpuff Girls”?",
    answers:["Blossom","Butterfly","Bubbles","Buttercup"],
    correct:"Butterfly"},
    
    {question:"Who lives at the following address ‘10 Downing Street’?",
    answers:["US President","French President","UK Prime Minister","Scotland First Minister"],
    correct:"UK Prime Minister"},
    
    {question:"Which one of the following artists wasn’t part of the Rolling Stones?",
    answers:["Mick Jagger","Keith Richards","Charlie Watts","Jimmy Page"],
    correct:"Jimmy Page"},
    
    {question:"What’s Garfield favourite food?",
    answers:["Pizza","Lasagna","Burger","Sandwich"],
    correct:"Lasagna"},
    
    {question:"How many years did Nelson Mandela spend in prison?",
    answers:[7,17,27,37],
    correct:27},
    
    {question:"What is the highest mountain in Japan?",
    answers:["Mount Tate","Mount Kita","Mount Fuji","Mount Yari"],
    correct:"Mount Fuji"},
    
    {question:"How high is Mount Everest?",
    answers:["5,849 m","6,849 m","7,849 m","8,849 m"],
    correct:"8,849 m"},
    
    {question:"Which chemical element has Ag as a symbol?",
    answers:["Gold","Silver","Iron","Carbon"],
    correct:"Silver"},
    
    {question:"How many elements are there on the periodic table?",
    answers:[58,78,98,118],
    correct:118},
    
    {question:"When is St. Patrick’s Day?",
    answers:["07 March","17 March","27 March","07 April"],
    correct:"17 March"},
    
    {question:"Who painted ‘Girl with a Pearl Earring’?",
    answers:["Johannes Vermeer","Vincent Van Gogh","Leonardo da Vinci","Sandro Botticelli"],
    correct:"Johannes Vermeer"}
];

const startBtn = document.querySelector('.start-btn');
const rulesBox = document.querySelector('.rules-box');
const exitBtn = rulesBox.querySelector('.buttons .quit');
const continue_btn = rulesBox.querySelector('.restart');
const quesBox = document.querySelector('.questions-box');
const choiceBox = quesBox.querySelector('.choices');
const resultsBox = document.querySelector('.result-box');
const question = quesBox.querySelector('.questions');
const totalQues = quesBox.querySelector('.total-ques');
const nextBtn = quesBox.querySelector('.next-ques');
const replayBtn = resultsBox.querySelector('.restart');
const quitBtn = resultsBox.querySelector('.buttons .quit');
const gameMode = document.querySelector('.game-mode');
const test = gameMode.querySelectorAll('.game');
const timer = document.querySelector('.timer');
let timeCounter = document.querySelector('.time');

// Declare game mode questions
const quickMode = document.querySelector('.quick-mode');
const hardMode = document.querySelector('.hard-mode');
const pubQuizMode = document.querySelector('.pubquiz-mode');

// Declare the starting values for variables
let randomNum = 0;
let quesCount = 0;
let quesNum = 1;
let prevRandomNum = 0;
let userGameModeSelect = 0;
let timeVal = 0;
let counter;

// Onclick Events
quickMode.onclick = () => gameSelect('quick');
hardMode.onclick = () => gameSelect('hard');
pubQuizMode.onclick = () => gameSelect('pubQuiz');


