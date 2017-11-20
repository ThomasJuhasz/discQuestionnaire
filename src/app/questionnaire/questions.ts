export enum Personality {
  D,
  I,
  S,
  C
}

export interface Question {
  number: number;
  answers: Array<Answer>;
}

export interface Answer {
  title: string;
  personality: Personality;
}

export const questions: Array<Question> = [
  {
    number: 1,
    answers: [
      {
        title: 'lelkes',
        personality: Personality.I
      },
      {
        title: 'merész',
        personality: Personality.D
      },
      {
        title: 'diplomatikus',
        personality: Personality.C
      },
      {
        title: 'elégedett',
        personality: Personality.S
      }
    ]
  },
  {
    number: 2,
    answers: [
      {
        title: 'körültekintő',
        personality: Personality.C
      },
      {
        title: 'céltudatos',
        personality: Personality.D
      },
      {
        title: 'meggyőző',
        personality: Personality.I
      },
      {
        title: 'jólelkű',
        personality: Personality.S
      }
    ]
  },
  {
    number: 3,
    answers: [
      {
        title: 'barátságos',
        personality: Personality.I
      },
      {
        title: 'akkurátus',
        personality: Personality.C
      },
      {
        title: 'szókimondó',
        personality: Personality.D
      },
      {
        title: 'nyugodt',
        personality: Personality.S
      }
    ]
  },
  {
    number: 4,
    answers: [
      {
        title: 'beszédes',
        personality: Personality.I
      },
      {
        title: 'visszafogott',
        personality: Personality.S
      },
      {
        title: 'hagyománytisztelő',
        personality: Personality.C
      },
      {
        title: 'határozott',
        personality: Personality.D
      }
    ]
  },
  {
    number: 5,
    answers: [
      {
        title: 'vállalkozó szellemű',
        personality: Personality.D
      },
      {
        title: 'tisztán látó',
        personality: Personality.C
      },
      {
        title: 'társaságkedvelő',
        personality: Personality.I
      },
      {
        title: 'mértéktartó',
        personality: Personality.S
      }
    ]
  },
  {
    number: 6,
    answers: [
      {
        title: 'szolíd',
        personality: Personality.S
      },
      {
        title: 'megnyerő',
        personality: Personality.I
      },
      {
        title: 'puritán',
        personality: Personality.C
      },
      {
        title: 'új utakat kereső',
        personality: Personality.D
      }
    ]
  },
  {
    number: 7,
    answers: [
      {
        title: 'jó kifejező készségű',
        personality: Personality.I
      },
      {
        title: 'lelkiismeretes',
        personality: Personality.C
      },
      {
        title: 'domináns',
        personality: Personality.D
      },
      {
        title: 'befolyásolható',
        personality: Personality.S
      }
    ]
  },
  {
    number: 8,
    answers: [
      {
        title: 'oldott',
        personality: Personality.I
      },
      {
        title: 'vizsgálódó',
        personality: Personality.C
      },
      {
        title: 'szerény',
        personality: Personality.S
      },
      {
        title: 'türelmetlen',
        personality: Personality.D
      }
    ]
  },
  {
    number: 9,
    answers: [
      {
        title: 'tapintatos',
        personality: Personality.C
      },
      {
        title: 'beleegyező',
        personality: Personality.S
      },
      {
        title: 'szuggesztív',
        personality: Personality.I
      },
      {
        title: 'rendíthetetlen',
        personality: Personality.D
      }
    ]
  },
  {
    number: 10,
    answers: [
      {
        title: 'bátor',
        personality: Personality.D
      },
      {
        title: 'lelkesítő',
        personality: Personality.I
      },
      {
        title: 'engedékeny',
        personality: Personality.S
      },
      {
        title: 'visszahúzódó',
        personality: Personality.C
      }
    ]
  },
  {
    number: 11,
    answers: [
      {
        title: 'tartózkodó',
        personality: Personality.C
      },
      {
        title: 'előzékeny',
        personality: Personality.S
      },
      {
        title: 'erős akaratú',
        personality: Personality.D
      },
      {
        title: 'vidám',
        personality: Personality.I
      }
    ]
  },
  {
    number: 12,
    answers: [
      {
        title: 'serkentő',
        personality: Personality.I
      },
      {
        title: 'jóindulatú',
        personality: Personality.S
      },
      {
        title: 'lényeglátó',
        personality: Personality.C
      },
      {
        title: 'önálló',
        personality: Personality.D
      }
    ]
  },
  {
    number: 13,
    answers: [
      {
        title: 'versengő',
        personality: Personality.D
      },
      {
        title: 'figyelmes',
        personality: Personality.S
      },
      {
        title: 'jókedvű',
        personality: Personality.I
      },
      {
        title: 'zárkózott',
        personality: Personality.C
      }
    ]
  },
  {
    number: 14,
    answers: [
      {
        title: 'aprólékos',
        personality: Personality.C
      },
      {
        title: 'engedelmes',
        personality: Personality.S
      },
      {
        title: 'erélyes',
        personality: Personality.D
      },
      {
        title: 'játékos',
        personality: Personality.I
      }
    ]
  },
  {
    number: 15,
    answers: [
      {
        title: 'vonzó',
        personality: Personality.I
      },
      {
        title: 'önelemző',
        personality: Personality.C
      },
      {
        title: 'szívós',
        personality: Personality.D
      },
      {
        title: 'kiszámítható',
        personality: Personality.S
      }
    ]
  },
  {
    number: 16,
    answers: [
      {
        title: 'racionális',
        personality: Personality.C
      },
      {
        title: 'elszánt',
        personality: Personality.D
      },
      {
        title: 'hűséges',
        personality: Personality.S
      },
      {
        title: 'elbűvölő',
        personality: Personality.I
      }
    ]
  },
  {
    number: 17,
    answers: [
      {
        title: 'barátkozó',
        personality: Personality.I
      },
      {
        title: 'türelmes',
        personality: Personality.S
      },
      {
        title: 'önmagára támaszkodó',
        personality: Personality.D
      },
      {
        title: 'halk szavú',
        personality: Personality.C
      }
    ]
  },
  {
    number: 18,
    answers: [
      {
        title: 'készséges',
        personality: Personality.S
      },
      {
        title: 'tettre vágyó',
        personality: Personality.D
      },
      {
        title: 'alapos',
        personality: Personality.C
      },
      {
        title: 'rajongó',
        personality: Personality.I
      }
    ]
  },
  {
    number: 19,
    answers: [
      {
        title: 'energikus',
        personality: Personality.D
      },
      {
        title: 'kifelé forduló',
        personality: Personality.I
      },
      {
        title: 'szeretetre méltó',
        personality: Personality.S
      },
      {
        title: 'óvatos',
        personality: Personality.C
      }
    ]
  },
  {
    number: 20,
    answers: [
      {
        title: 'bizakodó',
        personality: Personality.I
      },
      {
        title: 'megértő',
        personality: Personality.S
      },
      {
        title: 'tárgyilagos',
        personality: Personality.C
      },
      {
        title: 'akaratát érvényesítő',
        personality: Personality.D
      }
    ]
  },
  {
    number: 21,
    answers: [
      {
        title: 'fegyelmezett',
        personality: Personality.C
      },
      {
        title: 'nagylelkű',
        personality: Personality.S
      },
      {
        title: 'élénk',
        personality: Personality.I
      },
      {
        title: 'kitartó',
        personality: Personality.D
      }
    ]
  },
  {
    number: 22,
    answers: [
      {
        title: 'lobbanékony',
        personality: Personality.I
      },
      {
        title: 'befelé forduló',
        personality: Personality.S
      },
      {
        title: 'erőteljes',
        personality: Personality.D
      },
      {
        title: 'alkalmazkodó',
        personality: Personality.C
      }
    ]
  },
  {
    number: 23,
    answers: [
      {
        title: 'társaságban kedvelt',
        personality: Personality.I
      },
      {
        title: 'kifinomult',
        personality: Personality.C
      },
      {
        title: 'életerős',
        personality: Personality.D
      },
      {
        title: 'elnéző',
        personality: Personality.S
      }
    ]
  },
  {
    number: 24,
    answers: [
      {
        title: 'magával ragadó',
        personality: Personality.I
      },
      {
        title: 'megelégedett',
        personality: Personality.S
      },
      {
        title: 'sokat követelő',
        personality: Personality.D
      },
      {
        title: 'szabályszerű',
        personality: Personality.C
      }
    ]
  },
  {
    number: 25,
    answers: [
      {
        title: 'érvelő',
        personality: Personality.D
      },
      {
        title: 'módszeres',
        personality: Personality.C
      },
      {
        title: 'együttműködő',
        personality: Personality.S
      },
      {
        title: 'derűs',
        personality: Personality.I
      }
    ]
  },
  {
    number: 26,
    answers: [
      {
        title: 'kedélyes',
        personality: Personality.I
      },
      {
        title: 'precíz',
        personality: Personality.C
      },
      {
        title: 'egyenes',
        personality: Personality.D
      },
      {
        title: 'kiegyensúlyozott',
        personality: Personality.S
      }
    ]
  },
  {
    number: 27,
    answers: [
      {
        title: 'nyughatatlan',
        personality: Personality.D
      },
      {
        title: 'jó viszonyra törekvő',
        personality: Personality.S
      },
      {
        title: 'szimpatikus',
        personality: Personality.I
      },
      {
        title: 'elővigyázatos',
        personality: Personality.C
      }
    ]
  },
  {
    number: 28,
    answers: [
      {
        title: 'tisztelettudó',
        personality: Personality.C
      },
      {
        title: 'kezdeményező',
        personality: Personality.S
      },
      {
        title: 'optimista',
        personality: Personality.I
      },
      {
        title: 'segítőkész',
        personality: Personality.S
      }
    ]
  }
];
