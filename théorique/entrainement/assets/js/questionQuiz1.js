let questions = [

    {
        numb: 1,
        points : 1,
        question : "Quelle est la largeur minimale intérieure pour que 2 passagers puissent prendre place à côté du conducteur :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image1.jfif">',
        answer: "1,35 m",
        options: [
            "1,20 m",
            "1,35 m",
            "1,65 m"
        ],
        explanation : "Pour que deux passagers puissent prendre place aux côtés du conducteur, il faudrait une banquette unique équipée de trois ceintures ou trois sièges distincts et une largeur intérieure minimale de 40 cm par passager et 55 cm pour le conducteur (= 2 x 40 = 80 + 55 = 1,35 m)."
    },

    {
        numb: 2,
        points : 1,
        question : "Un chargement constitué d'objets indivisibles ne peut jamais dépasser l'arrière de plus de :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image2.jfif">',
        answer: "3 m, mais doit être signalé dès qu'il dépasse de plus de 1 m",
        options: [
            "1 m",
            "2 m, mais doit être signalé dès qu'il dépasse de plus de 1 m",
            "3 m, mais doit être signalé dès qu'il dépasse de plus de 1 m"
        ],
        explanation : "Le chargement ne peut jamais dépasser vers l'avant. Vers l'arrière, il peut dépasser de max. 1 m sans être signalé. Au-delà, il doit être signalé et ne peut dépasser 3 m pour des pièces indivisibles de grande longueur. Il doit être signalé : de jour : par un panneau de 0,50 m de côté avec des bandes diagonales blanches et rouges réfléchissantes ; de nuit : + feu rouge l'arrière + catadioptres orange de chaque côté latéral et sur le chargement."
    },

    {
        numb: 3,
        points : 1,
        question : "Cette veste de sécurité est un accessoire :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image3.jfif">',
        answer: "Obligatoire",
        options: [
            "conseillé",
            "obligatoire",
            "interdit"
        ],
        explanation : "Le conducteur d'un véhicule en panne rangé à un endroit où l'arrêt et le stationnement sont interdits sur autoroute et/ou route pour automobiles doit porter une veste de sécurité rétro réfléchissante lorsqu'il sort de son véhicule. La veste doit donc se trouver à portée de main dans le véhicule (autour du siège, dans la boîte à gants…)."
    },

    {
        numb: 4,
        points : 1,
        question : "Les quatre chiffres précédés de la mention DOT vous indiquent la date de fabrication de ce pneu :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image4.jfif">',
        answer: "oui, les deux premiers chiffres indiquent la semaine, les deux suivants, l'année",
        options: [
            "oui, les deux premiers chiffres indiquent la semaine, les deux suivants, l'année",
            "oui, les deux premiers chiffres indiquent l'année, les deux suivants, la semaine",
            "non"
        ],
        explanation : "Un nombre à quatre chiffres (ex. : 2216), précédé de la mention « DOT » (Departement of Transportation) précise la date de fabrication du pneu (22 = vingt-deuxième semaine de 16 = année 2016)."
    },

    {
        numb: 5,
        points : 1,
        question : "Quel carburant se montre le plus écologique :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image5.jfif">',
        answer: "le gaz (LPG)",
        options: [
            "le diesel",
            "l'essence",
            "le gaz (LPG)"
        ],
        explanation : "Classement écologique des carburants : le gaz LPG, puis l'essence et enfin le diesel à faible teneur en soufre."
    },

    {
        numb: 6,
        points : 1,
        question : "Après avoir déposé son passager, ce conducteur sort les bagages du coffre. Ce véhicule doit être considéré comme :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image6.jfif">',
        answer: "à l'arrêt",
        options: [
            "arrêté",
            "à l'arrêt",
            "en stationnement"
        ],
        explanation : "' Véhicule à l'arrêt ' : ne participe plus à la circulation et est rangé par la volonté de son conducteur pour embarquer ou débarquer des personnes et/ou des choses."
    },

    {
        numb: 7,
        points : 1,
        question : "Je peux m'immobiliser sur cet emplacement pour déposer mon passager :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image7.jfif">',
        answer: "oui",
        options: [
            "oui",
            "non"
        ],
        explanation : "Cette signalisation indique que le stationnement est réservé aux véhicules utilisés par des personnes handicapées. L'arrêt y reste donc autorisé !"
    },

    {
        numb: 8,
        points : 1,
        question : "Celui qui pousse à la main une moto doit être considéré comme :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image8.jfif">',
        answer: "conducteur",
        options: [
            "piéton",
            "conducteur",
            "passager"
        ],
        explanation : "Seuls ceux qui conduisent à la main un vélo ou un cyclo à deux roues, donc pas une moto, sont considérés comme « piétons ». Celui qui pousse sa moto à la main doit donc être considéré comme « conducteur » et est obligé, entre autre, de circuler sur la chaussée."
    },

    {
        numb: 9,
        points : 5,
        question : "Je peux m'engager dans ce carrefour pour virer à gauche :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image9.jfif">',
        answer: "non",
        options: [
            "oui",
            "non"
        ],
        explanation : "Agent de face = feu rouge = vous venez d'une direction qui coupe le bras de l'agent = interdiction de s'engager. En raison de la présence d'un agent, le panneau STOP ne produit aucun effet. INFRACTION TRES GRAVE !"
    },

    {
        numb: 10,
        points : 1,
        question : "Qui décide d'une interdiction temporaire de conduire ?",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image10.jfif">',
        answer: "l'agent qualifié",
        options: [
            "l'agent qualifié",
            "le Procureur du Roi",
            "le Juge"
        ],
        explanation : "L'agent qualifié prend seul la décision d'imposer une interdiction temporaire de conduire au vu des résultats obtenus par les tests ou mesures effectuées. Il ne s'agit d'ailleurs que d'une question de quelques heures."
    },

    {
        numb: 11,
        points : 1,
        question : "A ce carrefour, les feux lumineux sont éteints :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image11.jfif">',
        answer: "je dois céder le passage à droite et à gauche",
        options: [
            "je dois céder le passage à droite",
            "je dois céder le passage à droite et à gauche",
            "les autres doivent me céder le passage"
        ],
        explanation : "Lorsque les feux lumineux fonctionnent, ils rendent sans effet les signaux de priorité à l'exception des signaux B22 et B23. A l'inverse, si les feux sont éteints, les signaux de priorité entrent à nouveau en vigueur (dans ce cas, le signal B1 qui vous oblige à céder le passage) ou, en leur absence, la règle générale de priorité à droite."
    },

    {
        numb: 12,
        points : 1,
        question : "Les signaux de forme triangulaire annoncent :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image12.jfif">',
        answer: "un danger",
        options: [
            "un danger",
            "une interdiction",
            "une obligation"
        ],
        explanation : "Les panneaux triangulaires annoncent un danger symbolisé au centre et bordé de rouge, à une distance d'environ 150 m."
    },

    {
        numb: 13,
        points : 1,
        question : "Ce signal de danger annonce :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image13.jfif">',
        answer: "débouché sur un quai ou une berge",
        options: [
            "débouché sur un quai ou une berge",
            "absence d'accotement",
            "risque de chute en contrebas"
        ],
        explanation : "Ce signal de danger (A11 : débouché sur un quai ou une berge) vous annonce que vous approchez d'un quai où accostent des bateaux ou d'une berge, une route qui longe l'eau."
    },

    {
        numb: 14,
        points : 1,
        question : "Ce signal signifie :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image14.jfif">',
        answer: "voie prioritaire",
        options: [
            "voie prioritaire",
            "priorité au prochain carrefour",
            "danger au prochain carrefour"
        ],
        explanation : "À la différence du signal B15 (triangle avec une grosse barre) qui ne vous accorde la priorité qu'au prochain carrefour, ce signal de priorité (B9) vous signale que vous êtes sur une voie prioritaire et que vous bénéficierez de la priorité jusqu'au même signal barré (B11)."
    },

    {
        numb: 15,
        points : 1,
        question : "Ce signal :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image15.jfif">',
        answer: "interdit l'accès aux piétons",
        options: [
            "interdit l'accès aux piétons",
            "annonce une rue piétonne",
            "annonce un passage pour piétons"
        ],
        explanation : "Ce signal (C19) interdit l'accès aux piétons. Ne pas oublier que sont assimilées aux piétons, les personnes qui conduisent à la main une brouette, une voiture d'enfant, de malade ou tout autre véhicule sans moteur n'exigeant pas un espace plus large que celui nécessaire aux piétons et les personnes qui conduisent à la main une bicyclette ou un cyclomoteur à deux roues."
    },

    {
        numb: 16,
        points : 1,
        question : "Ce signal annonce :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image16.jfif">',
        answer: "un poste de péage avec interdiction de passer sans s'arrêter",
        options: [
            "une autoroute à péage",
            "un poste de péage avec interdiction de passer sans s'arrêter",
            "un stationnement payant"
        ],
        explanation : "Ce signal d'interdiction (C47) indique un poste de péage qu'il est interdit de franchir sans s'arrêter. L'inscription peut être remplacée par le mot « Taxes »."
    },

    {
        numb: 17,
        points : 1,
        question : "En dehors d’une agglomération, vous rencontrez d’abord les deux signaux de gauche. Plus loin, on vous annonce la fin des travaux. Au-delà de ce signal à quelle vitesse roulez-vous ?",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image17.jfif">',
        answer: "70 km/h ou 90 km/h",
        options: [
            "30 km/h",
            "50 km/h",
            "70 km/h ou 90 km/h"
        ],
        explanation : "Cette fois le signal F47 vous indique la fin de la zone de travaux et le signal C46 met fin à toutes les interdictions locales imposées aux véhicules en mouvement (limitation de vitesse, interdiction de dépasser, de virer, de faire demi-tour…) et vous délivre de la limitation de vitesse à 30 km/h. En région flamande et bruxelloise, vous pourrez rouler à maximum 70 km/h et en région wallonne, à maximum 90 km/h."
    },

    {
        numb: 18,
        points : 1,
        question : "Le stationnement alterné semi-mensuel est d'application :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image18.jfif">',
        answer: "dans toute l'agglomération",
        options: [
            "dans toute l'agglomération",
            "uniquement sur cette route",
            "jusqu'au prochain carrefour"
        ],
        explanation : "Ces signaux (E11 au-dessus et F1a ou F1b) signalent que le stationnement est alterné semi-mensuel sur toutes les chaussées de l'agglomération. Stationnement autorisé du 1er au 15 du côté des immeubles impairs et du 16 à la fin du mois du côté des immeubles pairs. Changement de côté : le dernier jour de chaque quinzaine entre 19h30 et 20h."
    },

    {
        numb: 19,
        points : 1,
        question : "Placée à l'entrée de ce tunnel, cette signalisation :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image19.jfif">',
        answer: "m'indique une route pour automobiles",
        options: [
            "me rappelle d'allumer le(s) feu(x) de croisement",
            "m'indique une route pour automobiles",
            "limite l'accés aux véhicules à moteur"
        ],
        explanation : "Ce signal (F9) vous indique une route pour automobiles. Si vous y tombez en panne, n'oubliez pas d'enfiler votre veste de sécurité rétro réfléchissante."
    },

    {
        numb: 20,
        points : 1,
        question : "Ce signal m'indique :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image20.jfif">',
        answer: "une piste de détresse",
        options: [
            "une aire de repos",
            "une route en construction",
            "une piste de détresse"
        ],
        explanation : "Ce signal (F95) vous indique une piste de détresse. Elle est essentiellement destinée aux poids lourds dans de longues descentes où ils risquent de connaître des difficultés de freinage. Le camion en difficulté se dirige alors vers une sorte de grand bac à sable où il sera progressivement ralenti jusqu'à l'arrêt complet, sans rencontrer d'obstacles."
    },

    {
        numb: 21,
        points : 1,
        question : "Ce signal indique :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image21.jfif">',
        answer: "un établissement sanitaire",
        options: [
            "un hôtel",
            "un établissement sanitaire",
            "une zone d'atterrisage pour hélicoptère"
        ],
        explanation : "Ce signal (F53) indique un établissement sanitaire (songez à Hôpital, mais oubliez Hôtel, Hôtel de Police, Hélicoptère...)."
    },

    {
        numb: 22,
        points : 1,
        question : "Ce signal indique le début d’une :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image22.jfif">',
        answer: "zone résidentielle ou de rencontre",
        options: [
            "zone résidentielle",
            "zone de rencontre",
            "zone résidentielle ou de rencontre"
        ],
        explanation : "Les termes 'zone résidentielle' et 'zone de rencontre' désignent une ou plusieurs voies publiques aménagées dont les accès sont indiqués par les signaux F12a, et les sorties par les signaux F12b. La 'zone résidentielle' est celle dans laquelle la fonction d'habitat est prépondérante. La 'zone de rencontre' est une zone dont les caractéristiques sont similaires à celles de la zone résidentielle mais où les activités peuvent être étendues à l'artisanat, au commerce, au tourisme, à l'enseignement et aux activités récréatives."
    },

    {
        numb: 23,
        points : 1,
        question : "Les deux lignes discontinues parallèles de couleur blanche aux bords de la chaussée délimitent :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image20.jfif">',
        answer: "une piste cyclabe",
        options: [
            "une zone réservée à l'arrêt et au stationnement",
            "une zone réservée aux piétons",
            "une piste cyclabe"
        ],
        explanation : "Deux lignes blanches discontinues parallèles d'une largeur insuffisante que pour permettre la circulation des véhicules automobiles = piste cyclable."
    },

    {
        numb: 24,
        points : 1,
        question : "Je suis autorisé à franchir ce carrefour, mais je dois auparavant marquer l'arrêt à hauteur du signal STOP :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image24.jfif">',
        answer: "non, je peux m'engager sans m'arrêter ni céder le passage",
        options: [
            "oui",
            "oui, et je dois céder le passage à droite et à gauche",
            "non, je peux m'engager sans m'arrêter ni céder le passage"
        ],
        explanation : "Devant deux signaux contradictoires (le feu vert et le signal STOP B5 qui m'oblige à marquer l'arrêt et à céder le passage), le plus « souple » l'emporte, à savoir les feux lumineux sur les signaux routiers. Les conducteurs venant des directions latérales sont arrêtés par un feu rouge."
    },

    {
        numb: 25,
        points : 1,
        question : "Pour éliminer complètement un taux d'alcoolémie de 0,8 g/l de sang (ou 0,35 mg/l d'air alvéolaire), il faut environ :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image25.jfif">',
        answer: "plus de 5 heures",
        options: [
            "plus de 1 heure",
            "plus de 2 heures",
            "plus de 5 heures"
        ],
        explanation : "Calcul approximatif : 4 principes à retenir. UN verre d'alcool = UN autre verre d'alcool (en doses « restaurant » !) = la même quantité d'alcool pur (10 g) ; UN verre = +0,30 g/l de sang = +0,14 mg/l d'air expiré ; UNE heure = -0,15 g/l de sang = -0,07 mg/l d'air expiré (l'alcool se dissipe moitié plus lentement) ; Pour ne pas dépasser 0,5 g/l de sang ou 0,22 mg/l d’air expiré : pendant la première heure : max. 2 verres ! Ensuite, 1 verre toutes les 2 heures !"  
    },

    {
        numb: 26,
        points : 1,
        question : "Le cycle à 4 temps d'un moteur à explosion à essence est, dans l'ordre :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image26.jfif">',
        answer: "admission - compression - explosion - échappement",
        options: [
            "admission - compression - explosion - échappement",
            "explosion - compression - échappement - admission",
            "admission - explosion - compression - échappement"
        ],
        explanation : "Le cycle à 4 temps d'un moteur à explosion comporte, dans l'ordre : admission par aspiration, compression par la remontée du piston, explosion par l'étincelle de la bougie et, enfin, échappement par la remontée du piston."
    },

    {
        numb: 27,
        points : 1,
        question : "Je circule de nuit avec le(s) feu(x) de route allumé(s). Le conducteur en face fait des appels de phares à une distance où je peux difficilement l'éblouir. Je dois repasser en feux de croisement :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image27.jfif">',
        answer: "oui",
        options: [
            "oui",
            "non"
        ],
        explanation : "L'éblouissement est une notion très subjective. Certains y sont plus sensibles que d'autres. Quant au chargement de votre véhicule, il peut « écraser » l'arrière, des amortisseurs avachis... font que vos phares éclairent plus loin. À quelle distance devez-vous repasser en feu(x) de croisement ? à la distance nécessaire pour que les autres usagers puissent continuer leur marche aisément et sans danger ; et en tout cas, dès qu'un conducteur allume et éteint successivement et rapidement ses feux de route pour faire comprendre qu'il est ébloui. Donc, même si vous estimez de pas pouvoir l'éblouir, les appels de phares signalent qu'il est gêné. Vous devez repasser en feu(x) de croisement. INFRACTION DU 3e DEGRE !"     
    },

    {
        numb: 28,
        points : 1,
        question : "Quels sont les effets environnementaux négatifs d'une circulation dense :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image28.jfif">',
        answer: "pluies acides, formation d'ozone et pollution sonore",
        options: [
            "pluies acides, formation d'ozone et pollution sonore",
            "formation d'ozone et pollution sonore",
            "formation d'ozone et pluies acides"
        ],
        explanation : "La circulation automobile, responsable d'environ 1/3 de la pollution nationale, perturbe gravement notre environnement notamment par les nuisances sonores, les pluies acides et la formation d'ozone."
    },
    
    {
        numb: 29,
        points : 1,
        question : "En agglomération, sur cette chaussée à sens unique divisée en bandes de circulation :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image29.jfif">',
        answer: "je peux choisir ma bande",
        options: [
            "je peux choisir ma bande",
            "je doit rouler a droite sauf lorsque la circulation est dense"
        ],
        explanation : "Pour pouvoir choisir la bande qui convient le mieux à votre destination, deux conditions doivent être remplies : être en agglomération ; circuler soit sur une chaussée à sens unique divisée en bandes de circulation (c'est le cas ici), soit sur une chaussée à min. 2 + 2 bandes. Toutes les conditions sont donc réunies."
    },

    {
        numb: 30,
        points : 1,
        question : "En Région Bruxelles-Capitale, hors agglomération, sur une route à deux bandes dans chaque sens, sans séparateur central, annoncée par ce signal, à la vitesse maximale autorisée, quelle est la distance de sécurité minimale à maintenir entre le véhicule qui précède et le vôtre :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image30.jfif">',
        answer: "± 35 mètres",
        options: [
            "± 35 mètres",
            "± 60 mètres",
            "± 70 mètres"
        ],
        explanation : "Ce signal routier (F9) annonce le début d’une route pour automobiles. En Région bruxelloise, en raison de l’absence de séparateur central, la vitesse maximale est limitée à 70 km/h. À cette vitesse, la distance de sécurité à maintenir entre le véhicule qui me précède est, en mètres, égale à la moitié de ma vitesse, soit 35 mètres."
    },

    {
        numb: 31,
        points : 1,
        question : "Au-delà de ce signal, à la vitesse maximale autorisée, estimez approximativement votre distance totale d’arrêt sur sol mouillé :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image31.jfif">',
        answer: "± 10 mètres",
        options: [
            "± 5 mètres",
            "± 10 mètres",
            "± 15 mètres"
        ],
        explanation : "Ce signal routier (F12a) annonce le début d’une zone résidentielle ou de rencontre et limite ma vitesse maximale à 20 km/h. A cette vitesse : La distance de sécurité à maintenir entre le véhicule qui me précède est, en mètres, égale à la moitié de ma vitesse, soit 10 mètres. La distance parcourue durant le temps de réaction : 2 x 3 = 6 m. La distance de freinage (sol mouillé / sol sec) : 2 x 2 = 4 m / 2 m. La distance totale d’arrêt (sol mouillé) : 6 + 4 = 10 m."
    },

    {
        numb: 32,
        points : 1,
        question : "Quel signal limite la vitesse maximale à l’allure du pas ?",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image32.jfif">',
        answer: "le signal C3c (à gauche)",
        options: [
            "le signal C3c (à gauche)",
            "le signal F12a (au centre)",
            "le signal F87 (à droite)"
        ],
        explanation : "De ces trois signaux un seul limite la vitesse « au pas », c’est-à-dire à environ 5 km/h, le signal C3c. F12a limite la vitesse à 20km/h et F87 à 30km/h."
    },

    {
        numb: 33,
        points : 5,
        question : "A hauteur de ces travaux :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image33.jfif">',
        answer: "je dois céder le passage",
        options: [
            "je dois céder le passage",
            "l'autre conducteur doit me céder le passage",
            "le dernier arrivé sur l'obstacle doit céder le passage"
        ],
        explanation : "En cas de croisement difficile, voire impossible, c'est au conducteur dont la trajectoire est entravée par un obstacle (travaux, voiture en stationnement ou garée en double file, groupe de piétons...) qu'il appartient de céder le passage. En cas de passage étroit, le croisement peut également être réglé par le signal B21 (rectangle à fond bleu avec une flèche blanche dans votre sens de circulation et rouge dans l'autre) qui accorde la priorité de passage par rapport aux conducteurs en sens inverse qui rencontrent le signal B19 (rond à bord rouge). INFRACTION DU 3e DEGRE !"
    },

    {
        numb: 34,
        points : 1,
        question : "Je clignote à gauche pour quitter cette bande. Ce conducteur clignote à droite pour changer, lui aussi, de bande. Je dois lui céder le passage :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image34.jfif">',
        answer: "non",
        options: [
            "oui",
            "non"
        ],
        explanation : "En cas de manœuvres simultanées, à « égalité » sur le plan « manœuvre » (ex.: deux conducteurs côte à côte voulant changer de bande), vous devez céder le passage au conducteur situé à votre droite."
    },

    {
        numb: 35,
        points : 1,
        question : "Par circulation fortement ralentie à proximité de ce rétrécissement, quel est le bon ordre de passage par stricte application de la législation, en l’absence de tout geste de courtoisie ?",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image35.jfif">',
        answer: "le véhicule D1 suivi de G1 puis C1, ensuite D2 suivi de G2 puis C2",
        options: [
            "le véhicule G1, C1, D1 puis G2, C2 et D2",
            "le véhicule D1 suivi de G1 puis C1, ensuite D2 suivi de G2 puis C2"
        ],
        explanation : "Par circulation fortement ralentie et dense à proximité de ce rétrécissement, le conducteur de la bande qui continue (C1) doit tout d’abord céder le passage à un conducteur de la bande entravée à sa droite (D1), puis à conducteur de la bande entravée à sa gauche (G1) et de même pour les véhicules qui suivent."
    },

    {
        numb: 36,
        points : 5,
        question : "Je peux dépasser cette voiture :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image36.jfif">',
        answer: "non",
        options: [
            "oui",
            "non"
        ],
        explanation : "Dépassement interdit avant un virage qui vous empêche de vous assurer qu'aucun véhicule n'arrive en sens inverse. Le dépassement par la gauche d'un véhicule attelé, d'un véhicule à moteur à deux roues ou d'un véhicule à plus de deux roues est interdit à l'approche du sommet d'une côte et dans les virages, lorsque la visibilité est insuffisante, sauf si le dépassement peut se faire sans franchir la ligne blanche continue délimitant la partie de la chaussée affectée à la circulation venant en sens inverse. INFRACTION TRES GRAVE !"
    },

    {
        numb: 37,
        points : 5,
        question : "Ce signal interdit à tout conducteur de dépasser une voiture :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image37.jfif">',
        answer: "par la gauche",
        options: [
            "par la droite",
            "par la gauche",
            "par la droite et la gauche"
        ],
        explanation : "Signal C35 : A partir du signal, jusqu'au prochain carrefour inclus, interdiction de dépasser par la gauche un véhicule attelé ou un véhicule à plus de deux roues, donc une voiture. Ce signal interdit à tout conducteur de dépasser par la gauche tout véhicule « large », mais : permet dépasser par la gauche un véhicule « étroit » ; permet de dépasser par la droite un véhicule étroit ou large qui indique qu’il veut se garer et/ou virer à gauche et s’est déporté de ce côté. INFRACTION de 3ème DEGRE !"
    },

    {
        numb: 38,
        points : 5,
        question : "Sur une route qui n'est pas divisée en trois bandes de circulation dans le sens suivi, je peux dépasser ces deux conducteurs par la gauche :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image38.jfif">',
        answer: "non",
        options: [
            "oui",
            "non"
        ],
        explanation : "Tripler = dépasser par la gauche un véhicule qui en dépasse lui-même un autre, c’est-à-dire avoir, à votre droite, deux autres véhicules. Tripler est autorisé : on peut dépasser par la gauche soit un véhicule large, soit un véhicule étroit à moteur, qui dépasse lui-même un véhicule étroit. Tripler est interdit : on NE peut PAS dépasser par la gauche soit un véhicule large, soit un véhicule étroit à moteur, qui dépasse lui-même un véhicule large. (C'est le cas ici puisqu'un véhicule étroit à moteur, la moto, dépasse un véhicule large, la voiture). INFRACTION DU 3e DEGRE !"
    },

    {
        numb: 39,
        points : 1,
        question : "Seuls les feux bleus de ce véhicule de police fonctionnent :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image39.jfif">',
        answer: "je dois lui céder le passage",
        options: [
            "je dois lui céder le passage",
            "je dois lui céder le passage et, au besoin, m'arrêter",
            "il doit me céder le passage"
        ],
        explanation : "Avec ses feux bleus, mais sans son avertisseur spécial, ce véhicule n'est pas prioritaire. Cependant, il se présente à votre droite. Vous devez donc lui céder le passage comme à tout autre conducteur 'ordinaire'."
    },
    
    {
        numb: 40,
        points : 1,
        question : "En agglomération, ce bus va quitter son point d'arrêt. Je dois lui céder le passage :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image40.jfif">',
        answer: "oui, et m'arrêter au besoin",
        options: [
            "oui",
            "oui, et m'arrêter au besoin",
            "non"
        ],
        explanation : "Bus et trolleybus quittant leur point d'arrêt. Céder le passage, et donc au besoin s'arrêter, si : vous suivez la même direction, ce point d'arrêt est situé en agglomération, le conducteur a indiqué son intention de se remettre en mouvement (clignotants). L'obligation de céder le passage afin de permettre au conducteur de ce bus de quitter son point d'arrêt commence dès qu'il enclenche ses clignotants à gauche."
    },

    {
        numb: 41,
        points : 1,
        question : "Je suis contraint à m'arrêter au centre du prochain carrefour. Avant de me remettre en mouvement, je dois céder le passage :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image41.jfif">',
        answer: "oui, à droite",
        options: [
            "oui, à droite",
            "oui, à droite et à gauche",
            "non"
        ],
        explanation : "Ce signal de priorité (B17) vous annonce un carrefour où la priorité de droite est applicable. Tout conducteur, même s'il est obligé de s'arrêter, continue à bénéficier de la priorité de droite, mais devra donc céder le passage aux conducteurs se présentant à droite."
    },

    {
        numb: 42,
        points : 1,
        question : "Dans ce carrefour, le bon ordre de passage est :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image42.jfif">',
        answer: "le cycliste A, le conducteur B puis le conducteur C",
        options: [
            "le cycliste A, le conducteur B puis le conducteur C",
            "le conducteur B, puis le cycliste A et le conducteur C",
            "le cycliste A, puis le conducteur C et enfin le conducteur B"
        ],
        explanation : "Le conducteur B doit permettre au cycliste A d'achever sa traversée dans le passage pour 2 roues qu'est devenue la piste cyclable à hauteur du carrefour. Même si B doit s'immobiliser, il conserve la priorité par rapport au conducteur C à sa gauche."
    },

    {
        numb: 43,
        points : 1,
        question : "Je compte quitter le rond-point. Comme il y a deux bandes à la sortie, je peux rester dans la bande de gauche :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image43.jfif">',
        answer: "non",
        options: [
            "oui",
            "non"
        ],
        explanation : "Avant d'effectuer un changement de direction vers la droite, vous devez serrer le plus possible le bord droit de la chaussée. Quitter le rond-point depuis cette bande risque de créer un conflit de trajectoire avec un conducteur circulant dans la bande de droite et qui ne compte pas quitter le rond-point à cette sortie, ce qui est parfaitement son droit."
    },

    {
        numb: 44,
        points : 1,
        question : "Lors de la traversée d'un tunnel, si vous devez vous arrêter à cause d'un incident, vous respectez la même distance de sécurité qu'en circulation normale :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image44.jfif">',
        answer: "faux",
        options: [
            "vrai",
            "faux"
        ],
        explanation : "Ce signal (F8) vous annonce un long tunnel. Respectez les distances de sécurité (restez, en mètres, à la moitié de votre vitesse) sans jamais descendre à moins de 50 m du véhicule devant vous, même en cas de ralentissement et surtout en cas d’arrêt."
    },

    {
        numb: 45,
        points : 1,
        question : "Lors de l'examen pratique, l'examinateur peut-il vous demander de vous engager sur une route pour automobiles ?",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image45.jfif">',
        answer: "oui",
        options: [
            "oui",
            "non"
        ],
        explanation : "Ce signal (F9) vous indique une route pour automobiles. Un conducteur en apprentissage est autorisé à s'engager sur autoroute ou route pour automobiles en voiture ou à moto."
    },

    {
        numb: 46,
        points : 1,
        question : "Sur cette autoroute, à droite de cette ligne blanche continue :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image46.jfif">',
        answer: "l'arrêt et le stationnement sont interdits",
        options: [
            "je peux m'immobiliser pour consulter la carte",
            "le stationnement est interdit",
            "l'arrêt et le stationnement sont interdits"
        ],
        explanation : "À droite de cette ligne blanche continue délimitant la chaussée : une bande d'arrêt d'urgence (BDU). Seuls une défaillance mécanique ou un malaise grave peuvent justifier une immobilisation dans cette bande d'arrêt d'urgence, parce que l'arrêt et le stationnement y sont interdits en dehors des emplacements couverts par un signal « P » (E9a)."
    },

    {
        numb: 47,
        points : 1,
        question : "Sur cette autoroute :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image47.jfif">',
        answer: "je suis engagé en sens contraire",
        options: [
            "je suis engagé dans le bon sens",
            "je suis engagé en sens contraire"
        ],
        explanation : "En plus des signaux d'interdiction (C1) de part et d'autre, l'autoroute apparaît anormalement à votre droite et, pour y circuler à droite, vous devriez traverser une, voire deux bandes de circulation."
    },

    {
        numb: 48,
        points : 1,
        question : "Vous êtes impliqué dans un accident sur autoroute. Votre voiture est hors d'état de circuler. Vous pouvez faire appel à votre garagiste pour la faire évacuer :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image48.jfif">',
        answer: "non",
        options: [
            "oui",
            "non"
        ],
        explanation : "Sur les routes pour automobiles et les autoroutes, l'agent qualifié pourvoit d'office au déplacement des véhicules accidentés et de leur chargement."
    },

    {
        numb: 49,
        points : 1,
        question : "J'arrive sur les lieux d'un accident. Quel est le numéro d'appel des services de secours :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image49.jfif">',
        answer: "112 ou 100",
        options: [
            "112 ou 100",
            "101 ou 900",
            "106"
        ],
        explanation : "Pour alerter les services de secours : 112 : numéro international d'appel d'urgencen, depuis une gsm ou un téléphone fixe : 100 pour contacter directement les secours, 101 pour contacter directement la Police."
    },

    {
        numb: 50,
        points : 1,
        question : "Dans cette situation :",
        image : '<img src="../../assets/image/entrainement-image/quiz1/quiz1_image50.jfif">',
        answer: "je ralentis et me tiens prêt à freiner",
        options: [
            "je poursuis normalement ma route et passe derrière ces piétons",
            "je ralentis et me tiens prêt à freiner"
        ],
        explanation : "Ces piétons peuvent subitement changer d'avis ou encore devoir s'immobiliser en raison du trafic en sens inverse."
    }
]