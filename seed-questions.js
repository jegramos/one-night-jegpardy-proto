// Jeopardy Questions Database Seeder
// This file contains default boards that seed the game
// Custom boards are stored in localStorage

const jeopardySeedBoards = [
    {
        id: 'default-1',
        name: 'Delica Edition',
        categories: [
            "TV Shows & Drama 📺",
            "Pamahiin ni Inay 🔮",
            "Tech & Trends 💻",
            "Tatak Pinoy 🇵🇭",
            "Larong Kalye 🏀"
        ],
        questions: [
            // Row 1 - 100 points
            [
                {
                    category: "TV Shows & Drama",
                    points: 100,
                    question: "Ano ang pamagat ng longest-running action serye ni Coco Martin na tumagal ng eight years?",
                    answer: "FPJ's Ang Probinsyano",
                    clue: null
                },
                {
                    category: "Pamahiin ni Inay",
                    points: 100,
                    question: "Pagkagaling sa isang lamay o libing, ano ang dapat gawin bago pumasok sa sariling bahay para hindi 'sumama' ang espiritu?",
                    answer: "Pagpag",
                    clue: null
                },
                {
                    category: "Tech & Trends",
                    points: 100,
                    question: "Ano ang tawag sa digital wallet app na ginagamit natin ngayon para mag-send ng pera o magbayad sa tindahan?",
                    answer: "GCash / Maya / GoTyme",
                    clue: null
                },
                {
                    category: "Tatak Pinoy",
                    points: 100,
                    question: "Anong sikat na fast-food chain ang may tagline na 'Bida ang Saya!'?",
                    answer: "Jollibee ni Liam",
                    clue: null
                },
                {
                    category: "Larong Kalye",
                    points: 100,
                    question: "Sa larong ito, kailangan mong lampasan ang mga taya na nakaharang sa mga guhit nang hindi nahahawakan.",
                    answer: "Patintero",
                    clue: null
                }
            ],

            // Row 2 - 200 points
            [
                {
                    category: "TV Shows & Drama",
                    points: 200,
                    question: "Noong 90s, sino ang dalawang batang aktres na nagpasikat sa mga karakter nina Mara at Clara?",
                    answer: "Judy Ann Santos at Gladys Reyes",
                    clue: null
                },
                {
                    category: "Pamahiin ni Inay",
                    points: 200,
                    question: "Ano ang ibig sabihin kapag biglang nabulunan ang isang tao habang kumakain?",
                    answer: "May naaalala sa kanya / May nagbabanggit sa pangalan niya",
                    clue: null
                },
                {
                    category: "Tech & Trends",
                    points: 200,
                    question: "Noong late 90s, ano ang tawag sa maliit na gadget na ginagamit para makatanggap ng 'text messages' bago pa sumikat ang cellphone?",
                    answer: "Pager or Beeper",
                    clue: null
                },
                {
                    category: "Tatak Pinoy",
                    points: 200,
                    question: "Anong brand ng sabon ang kilala sa linyang '99.9% of germs' at laging ginagamit sa mga school handwashing drills?",
                    answer: "Safeguard",
                    clue: null
                },
                {
                    category: "Larong Kalye",
                    points: 200,
                    question: "Ano ang ginagamit na 'bala' o pambato sa larong Tumbang Preso?",
                    answer: "Tsinelas",
                    clue: null
                }
            ],

            // Row 3 - 300 points
            [
                {
                    category: "TV Shows & Drama",
                    points: 300,
                    question: "Sa sikat na seryeng Encantadia, ano ang tawag sa apat na magkakapatid na nangangalaga sa mga brilyante?",
                    answer: "Sang'gre",
                    clue: null
                },
                {
                    category: "Pamahiin ni Inay",
                    points: 300,
                    question: "Ayon sa Inay, bakit bawal gupitin ang kuko sa gabi?",
                    answer: "Nagdadala ng malas / Maagang mamamatay ang magulang",
                    clue: null
                },
                {
                    category: "Tech & Trends",
                    points: 300,
                    question: "Bago ang USB flash drive, ano ang tawag sa square na bagay na ginagamit noon para mag-save ng computer files?",
                    answer: "Floppy Disk",
                    clue: null
                },
                {
                    category: "Tatak Pinoy",
                    points: 300,
                    question: "Sa isang sikat na commercial ng biscuit na Fita, ano ang hiningi ng matandang babae sa lalaki na naging dahilan para bigyan siya ng kalahating sports car?",
                    answer: "Kalahati ng Fita (Hati tayo!)",
                    clue: null
                },
                {
                    category: "Larong Kalye",
                    points: 300,
                    question: "Sa larong ito, may isang tao na nakayuko at kailangang talunan ng ibang players nang hindi natitumba.",
                    answer: "Luksong Baka",
                    clue: null
                }
            ],

            // Row 4 - 400 points
            [
                {
                    category: "TV Shows & Drama",
                    points: 400,
                    question: "Ano ang pamagat ng unang 'Asianovela' (Korean Drama) na pinalabas sa Pilipinas noong 2003? (Clue: Kamukha ni Jeg yung Bida)",
                    answer: "Meteor Garden",
                    clue: null
                },
                {
                    category: "Pamahiin ni Inay",
                    points: 400,
                    question: "Sa tradisyonal na kasal, bakit bawal isukat ni Inay ang kanyang wedding gown bago ang araw ng kasal?",
                    answer: "Hindi matutuloy ang kasal",
                    clue: null
                },
                {
                    category: "Tech & Trends",
                    points: 400,
                    question: "Noong early 2000s, anong brand ng cellphone ang sikat na sikat dahil sa tibay nito at sa larong 'Snake'?",
                    answer: "Nokia",
                    clue: null
                },
                {
                    category: "Tatak Pinoy",
                    points: 400,
                    question: "Kumpletuhin ang linyang ito mula sa isang sikat na energy drink: 'Beat Energy, Energy ______!'",
                    answer: "Gap (Milo)",
                    clue: null
                },
                {
                    category: "Larong Kalye",
                    points: 400,
                    question: "Ano ang tawag sa maliliit na card na may mga drawing (madalas ay anime) na pinapataob ng mga bata noon",
                    answer: "Pogs",
                    clue: null
                }
            ],

            // Row 5 - 500 points
            [
                {
                    category: "TV Shows & Drama",
                    points: 500,
                    question: "Anong sikat na Japanese anime noong 70s ang ipinagbawal ipalabas noon, pero naging sikat na live-action serye sa GMA kamakailan?",
                    answer: "Voltes V",
                    clue: null
                },
                {
                    category: "Pamahiin ni Inay",
                    points: 500,
                    question: "Kapag nagpapagawa ng hagdanan, ano ang tatlong salitang binabanggit habang nagbibilang ng baitang? Clue: O.P.M",
                    answer: "Oro, Plata, Mata",
                    clue: null
                },
                {
                    category: "Tech & Trends",
                    points: 500,
                    question: "Noong taong 2000, isang computer virus na gawa ng isang Pilipino ang naging viral at nanalasa sa mga computer sa buong mundo. Ano ang pangalan ng virus na ito?",
                    answer: "ILOVEYOU Virus",
                    clue: null
                },
                {
                    category: "Tatak Pinoy",
                    points: 500,
                    question: "Anong kumpanya sa Pilipinas ang itinuturing na pinakamatandang brewery sa Southeast Asia na nagsimula pa noong 1890?",
                    answer: "San Miguel Corporation (San Miguel Brewery)",
                    clue: null
                },
                {
                    category: "Larong Kalye",
                    points: 500,
                    question: "Sa larong Sipa, ano ang tawag sa bagay na sinisipa na yari sa metal washer at makukulay na straw?",
                    answer: "Tingga!",
                    clue: null
                }
            ]
        ]
    },
    {
        id: 'default-2',
        name: 'Opeña Edition',
        categories: [
            "Slang & Trends ✨",
            "Pilipinas Kong Mahal 🇵🇭",
            "Showbiz at Musika 🎤",
            "Alam Mo Ba? (Random) 🎲"
        ],
        questions: [
            // Row 1 - 100 points
            [
                {
                    category: "Slang & Trends",
                    points: 100,
                    question: "Sa mundo ng social media, ano ang ibig sabihin ng acronym na 'OOTD'?",
                    answer: "Outfit of the Day",
                    clue: null
                },
                {
                    category: "Pilipinas Kong Mahal",
                    points: 100,
                    question: "Sa 2024 Paris Olympics, sino ang Pinoy gymnast na nanalo ng dalawang gold medals?",
                    answer: "Carlos Yulo",
                    clue: null
                },
                {
                    category: "Showbiz at Musika",
                    points: 100,
                    question: "Bago ang KathNiel or DonBelle, sikat ang tambalang 'Guy and Pip.' Sinong artista ang gumanap kay 'Guy'?",
                    answer: "Nora Aunor",
                    clue: "Walang Himala!"
                },
                {
                    category: "Alam Mo Ba? (Random)",
                    points: 100,
                    question: "Ayon sa pamahiin, kapag nakahulog ka ng kutsara habang kumakain, sino ang darating na bisita?",
                    answer: "Babaeng Bisita",
                    clue: null
                }
            ],

            // Row 2 - 200 points
            [
                {
                    category: "Slang & Trends",
                    points: 200,
                    question: "Noong 80s at 90s, kapag ang isang tao ay tinawag na 'Jeproks,' ano ang ibig sabihin nito?",
                    answer: "Cool, Laid back, o Spoiled",
                    clue: "Mula sa song na 'Laki sa Layaw'"
                },
                {
                    category: "Pilipinas Kong Mahal",
                    points: 200,
                    question: "Tingnan ang 500-peso bill. Bukod kay Ninoy Aquino, sino ang isa pang personalidad na nandoon?",
                    answer: "Cory Aquino",
                    clue: null
                },
                {
                    category: "Showbiz at Musika",
                    points: 200,
                    question: "Tuwing sasapit ang September 1st, kaninong mukha at boses ang laging nag-ba-viral dahil sa mga Christmas songs?",
                    answer: "Jose Mari Chan",
                    clue: null
                },
                {
                    category: "Alam Mo Ba? (Random)",
                    points: 200,
                    question: "Sa kantang 'Bahay Kubo,' ano ang pinaka-unang gulay na mababanggit?",
                    answer: "Singkamas",
                    clue: null
                }
            ],

            // Row 3 - 300 points
            [
                {
                    category: "Slang & Trends",
                    points: 300,
                    question: "Kapag sinabi ng isang Gen Z na ikaw ay may 'Rizz,' ano ang ibig sabihin nito?",
                    answer: "Charisma / Karisma",
                    clue: null
                },
                {
                    category: "Pilipinas Kong Mahal",
                    points: 300,
                    question: "Sino ang ikalawang (2nd) Presidente ng Pilipinas?",
                    answer: "Manuel L. Quezon",
                    clue: "Ama ng Wikang Pambansa"
                },
                {
                    category: "Showbiz at Musika",
                    points: 300,
                    question: "Anong 90s band ang tinaguriang 'Beatles of the Philippines'?",
                    answer: "Eraserheads",
                    clue: "Sila ang kumanta ng 'Ang Huling El Bimbo'"
                },
                {
                    category: "Alam Mo Ba? (Random)",
                    points: 300,
                    question: "Anong probinsya ang tinaguriang 'Culinary Capital' kung saan sikat ang Sisig na may utak ng baboy?",
                    answer: "Pampanga",
                    clue: "Ayaw nila ng mayonnaise sa sisig"
                }
            ],

            // Row 4 - 400 points
            [
                {
                    category: "Slang & Trends",
                    points: 400,
                    question: "Sa text o chat, kung ang isang tao ay nag-reply ng 'SKL,' ano ang sinasabi nila?",
                    answer: "Share Ko Lang",
                    clue: null
                },
                {
                    category: "Pilipinas Kong Mahal",
                    points: 400,
                    question: "Ilang taon sinakop ng Espanya ang Pilipinas? Closest answer wins",
                    answer: "333 years",
                    clue: null
                },
                {
                    category: "Showbiz at Musika",
                    points: 400,
                    question: "Sino ang tinaguriang 'King of Philippine Comedy' na bida sa Home Along Da Riles?",
                    answer: "Dolphy",
                    clue: "Banayad Whiskey"
                },
                {
                    category: "Alam Mo Ba? (Random)",
                    points: 400,
                    question: "Anong botika ang may sikat na jingle na: 'Nakasisiguro, gamot ay laging bago...'?",
                    answer: "Mercury Drug",
                    clue: null
                }
            ],

            // Row 5 - 500 points
            [
                {
                    category: "Slang & Trends",
                    points: 500,
                    question: "Ang mga salitang 'Lodi' at 'Petmalu' ay mga halimbawa ng anong istilo ng pagbaligtad ng pantig?",
                    answer: "Tadbalik o Baliktad",
                    clue: null
                },
                {
                    category: "Pilipinas Kong Mahal",
                    points: 500,
                    question: "Ano ang ibig sabihin ng walong (8) sinag ng araw sa watawat ng Pilipinas?",
                    answer: "Ang 8 probinsya na unang nag-alsa laban sa Espanya",
                    clue: "No need to itemize"
                },
                {
                    category: "Showbiz at Musika",
                    points: 500,
                    question: "Kung si Regine Velasquez ay 'Asia's Songbird,' at si Sharon Cuneta ang 'Megastar', sino naman ang 'Star for All Seasons'?",
                    answer: "Vilma Santos",
                    clue: null
                },
                {
                    category: "Alam Mo Ba? (Random)",
                    points: 500,
                    question: "Sino ang comic book artist na lumikha sa mga sikat na Pinoy superheroes gaya nina Darna at Lastikman?",
                    answer: "Mars Ravelos",
                    clue: "Sounds like Marvel"
                }
            ]
        ]
    }
];
