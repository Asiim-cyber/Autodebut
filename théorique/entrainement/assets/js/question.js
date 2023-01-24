let questions = [

    // {
    //     numb: 1,
    //     points : 1,
    //     question : "Que signifie ce panneau ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/voie-prioritaire.jpg">',
    //     answer: "Voie prioritaire",
    //     options: [
    //         "Voie prioritaire",
    //         "Voie a sens unique",
    //         "Voie priotaire juqu'au prochain carrefour",

    //     ],
    //     explanation : "Ce panneau signifie voie prioritaire sur toute la chaussée"

    // },
    // {
    //     numb: 2,
    //     points : 1,
    //     question : "Je peux m'immobiliser sur cet emplacement pour déposer mon passager : ",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/place-handicape.jpg">',
    //     answer: "Oui",
    //     options: [
    //         "Non",
    //         "Oui"
    //     ],
    //     explanation : "Ce panneau signifie emplacement pour handicapé, mais il ne m'indique en aucun cas que je ne peut pas y déposer un passager"
    // },
    // {
    //     numb: 3,
    //     points : 1,
    //     question : "Quel carburant est le plus écologique ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/station-essence.jpeg">',
    //     answer: "Gaz (LPG)",
    //     options: [
    //         "Essence",
    //         "Gaz (LPG)",
    //         "Diesel"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 4,
    //     points : 1,
    //     question : "Qui décide d'une interdiction temporaire de conduire ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/carte-permis.jpg">',
    //     answer: "L'agent qualifié",
    //     options: [
    //         "L'agent qualifié",
    //         "Le proccureur du Roi",
    //         "Le juge"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 5,
    //     points : 1,
    //     question : "Un pompier ou un membre de la protection civile peut-il vous adresser des injonctions sur les lieux de leur intervention",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/pompier.jpg">',
    //     answer: "Oui, en attendant l'arrivée des policiers",
    //     options: [
    //         "Oui, toujours",
    //         "Non",
    //         "Oui, en attendant l'arrivée des policiers"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 6,
    //     points : 1,
    //     question : "Les usagers de la voie publique sont",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/usagers-voie-publique.jpg">',
    //     answer: "Toute personne faisant usage de la voie publique en tant que piéton ou conducteur",
    //     options: [
    //          "uniquement les personnes conduisant un véhicule",
    //          "uniquement les personnes se déplaçant à pied",
    //          "Toute personne faisant usage de la voie publique en tant que piéton ou conducteur"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 7,
    //     points : 1,
    //     question : "Commettez-vous une infraction si vous configurez l'application de navigation de votre téléphone mobile pendant que vous conduisez ?",
    //     image : '',
    //     answer: "Oui",
    //     options: [
    //         "Oui",
    //         "Non, si vous avez un kit mains libres",
    //         "Non, parce que vous ne parlez à personne sur le téléphone portable"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 8,
    //     points : 1,
    //     question : "Que signifie ce signal d’indication ?",
    //     image : '<img src="../../assets/image/apprendre-image/indication-voie-sans-issue.png">',
    //     answer: "Voie sans issue",
    //     options: [
    //         "Obligation de tourner à droite",
    //         "Voie sans issue",
    //         "Accès interdit"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 9,
    //     points : 1,
    //     question : "Pouvez-vous remorquer un véhicule en panne lorsque vous êtes en agglomération ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/remorquage.png">',
    //     answer: "Oui, c'est autorisé",
    //     options: [
    //         "Oui, c'est autorisé",
    //         "Non, c'est interdit"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 10,
    //     points : 1,
    //     question : "A quoi correspond le chiffre 195 ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/pneus.jpg">',
    //     answer: "Largeur du pneu en millimètres (mm)",
    //     options: [
    //         "Largeur du pneu en millimètres (mm)",
    //         "Diamètre de la jante en pouces",
    //         "Rapport (en %) entre la hauteur et la largeur du pneus"
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 11,
    //     points : 1,
    //     question : "Je suis prioritaire pour pouvoir passer ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/priorité-passage.jpg">',
    //     answer: "Oui",
    //     options: [
    //         "Non",
    //         "Oui",
    //     ],
    //     explanation : "Test"
    // },
    // {
    //     numb: 12,
    //     points : 1,
    //     question : "Quelle est la largeur minimale intérieure pour que 2 passagers puissent prendre place à côté du conducteur :",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/distance-securite.jpg">',
    //     answer: "1,35 m",
    //     options: [
    //         "1,20 m",
    //         "1,35 m",
    //         "1,65 m"
    //     ],
    //     explanation : "Pour que deux passagers puissent prendre place aux côtés du conducteur, il faudrait une banquette unique équipée de trois ceintures ou trois sièges distincts et une largeur intérieure minimale de 40 cm par passager et 55 cm pour le conducteur (= 2 x 40 = 80 + 55 = 1,35 m)."
    // },
    // {
    //     numb: 13,
    //     points : 5,
    //     question : "Sur une route qui n'est pas divisée en trois bandes de circulation dans le sens suivi, je peux dépasser ces deux conducteurs par la gauche :",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/depassement-moto-voiture.jfif">',
    //     answer: "Non",
    //     options: [
    //         "Oui",
    //         "Non",
    //     ],
    //     explanation : "Tripler = dépasser par la gauche un véhicule qui en dépasse lui-même un autre, cest-à-dire avoir, à votre droite, deux autres véhicules."

    //                     // "Tripler est autorisé : on peut dépasser par la gauche soit un véhicule large, soit un véhicule étroit à moteur, qui dépasse lui-même un véhicule étroit."
        
    //                     // "Tripler est interdit : on NE peut PAS dépasser par la gauche soit un véhicule large, soit un véhicule étroit à moteur, qui dépasse lui-même un véhicule large. (Cest le cas ici puisquun véhicule étroit à moteur, la moto, dépasse un véhicule large, la voiture). INFRACTION DU 3e DEGRE !"
    // },
    // {
    //     numb: 14,
    //     points : 1,
    //     question : "Quelle est la taille minimal que peut avoir le témoin d'usure du pneu ?",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/temoin-usure.jpeg">',
    //     answer: "1,6 mm",
    //     options: [
    //         "2,3 mm",
    //         "1 cm",
    //         "1,6 mm"
    //     ],
    //     explanation : ""
    // },
    // {
    //     numb: 15,
    //     points : 1,
    //     question : "Je compte quitter le rond-point. Comme il y a deux bandes à la sortie, je peux rester dans la bande de gauche :",
    //     image : '<img src="../../assets/image/entrainement-image/quiz1/rond-point-voiture-droite.jfif">',
    //     answer: "Non",
    //     options: [
    //         "Oui",
    //         "Non",
    //     ],
    //     explanation : "Avant d'effectuer un changement de direction vers la droite, vous devez serrer le plus possible le bord droit de la chaussée. Quitter le rond-point depuis cette bande risque de créer un conflit de trajectoire avec un conducteur circulant dans la bande de droite et qui ne compte pas quitter le rond-point à cette sortie, ce qui est parfaitement son droit."
    // },
    {
        numb: 16,
        points: 1,
        question : "Quand ma voiture consommera-t-elle le plus de carburant ?",
        image : '<img src="../../assets/image/entrainement-image/quiz1/voiture-vitres-ouvertes.jpg">',
        answer: "En circulant vitres ouvertes",
        options: [
            "Ouvertes ou fermées, aucune influence sur la consommation",
            "En circulant vitres fermées",
            "En circulant vitres ouvertes"
        ],
        explanation : "Rouler vitres ouvertes perturbe l'aérodynamisme au détriment de votre consommation."
    },
    {
        numb: 17,
        points : 1,
        question : "une question ?",
        image : "",
        answer: "2eme reponse",
        options: [
            "1ere reponse stv",
            "2eme reponse",
            "3eme reponse"
        ]
    },
    // {
    //     numb: 18,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 19,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 20,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 21,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 22,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 23,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 24,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 25,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 26,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 27,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 28,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 29,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 30,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 31,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 32,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 33,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 34,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 35,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 36,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 37,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 38,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 39,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 40,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 41,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 42,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 43,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 44,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 45,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 46,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 47,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 48,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 49,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
    // {
    //     numb: 50,
    //     question : "une question ?",
    //     answer: "2eme reponse",
    //     options: [
    //         "1ere reponse stv",
    //         "2eme reponse",
    //         "3eme reponse"
    //     ]
    // },
]

