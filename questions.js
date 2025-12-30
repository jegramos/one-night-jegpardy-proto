// Jeopardy Questions Database
// Edit this file to update questions and answers

const jeopardyQuestions = {
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
};

