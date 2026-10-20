export type Result = { away: string; awayScore: number; home: string; homeScore: number; note?: string };
export type Standing = { rank: number; team: string; record: string; points: number; pointsAgainst: number };
export type HistoryRow = { manager: string; club: string; titles: string; playoffs: string; note: string };
export type AlternateStanding = { rank: number; team: string; record: string; official: string; medianEffect: string };
export type BStanding = { rank: number; team: string; manager: string; record: string; points: number; pointsAgainst: number; movement: string };
export type Issue = {
  slug: string; issueNumber: number; season: number; week: string; date: string;
  median: string;
  kicker: string; headline: string; deck: string; hero: string; heroAlt: string; caption: string;
  lead: string[]; quote: string; quoteBy: string;
  stories: { section: string; headline: string; body: string }[];
  briefs: { headline: string; body: string }[];
  results: Result[]; standings: Standing[];
  rankings: { rank: number; team: string; blurb: string; movement?: string }[];
  awards: { label: string; winner: string; detail: string }[];
  leaders: { position: string; player: string; team: string; points: number }[];
  history: HistoryRow[];
  spotlight?: { kicker: string; headline: string; deck: string; body: string[]; stats: { value: string; label: string }[] };
  photoFeature?: { kicker: string; headline: string; image: string; alt: string; caption: string; body: string };
  panicMeter?: { team: string; level: string; score: number; detail: string }[];
  noMedian?: { intro: string; standings: AlternateStanding[]; notes: { headline: string; body: string }[] };
  luckFile?: { headline: string; deck: string; rows: { week: string; decision: string; margin: string }[]; conclusion: string };
  bLeague?: { headline: string; deck: string; standings: BStanding[]; watch: { label: string; headline: string; body: string }[] };
  stockMarket?: { up: { team: string; detail: string }[]; down: { team: string; detail: string }[] };
  trafficJam?: { intro: string; stats: { value: string; label: string }[]; body: string[] };
  performanceDesk?: { boom: { player: string; points: string; detail: string }[]; bust: { player: string; points: string; detail: string }[]; bench: { player: string; points: string; detail: string }[] };
};

export const issues: Issue[] = [{
  slug: "2026-week-06", issueNumber: 6, season: 2026, week: "Week 6", date: "October 20, 2026",
  median: "120.05",
  kicker: "Year XVI · Week Six · Median Line 120.05",
  headline: "Changing of the Guard",
  deck: "Taylor Park Boys seize first place and the scoring crown while Jake and Nate discover that a hot start is not a lifetime appointment.",
  hero: "/issues/2026-week-06/changing-of-the-guard.png",
  heroAlt: "Taylor Park Boys characters claiming the Chestnut Farms trophy at a trailer park as the former leaders surrender their positions",
  caption: "Power changes hands at Chestnut Farms: Taylor Park Boys claim the trophy, the top seed and the league scoring lead while the old guard staggers backward.",
  lead: [
    "Taylor Park Boys did not merely move into first place. Stefan Balestra took the league's points lead, stood alone atop the standings at 8–4 and ended the brief administrative error in which Jake and Nate were permitted to believe the league belonged to them. A 141.55–121.10 win over The Price Is Right completed the transfer of power.",
    "Behind him, the standings have become a crowded crime scene. Darren's Cooking Up Collusion dropped 150.90 on Jake and climbed to second. Dave Campbell Sr. beat Pat for a fifth consecutive win and rose to fourth. Jake and Nate both finished 0–2 after Dave Sr. and Anthony crawled over the median on Monday night and slammed the trapdoor beneath them.",
    "Six weeks have also produced zero trades, Pat has yet to beat a human opponent and the B League has developed its own promotion war. The league is competitive, unstable and apparently terrified of negotiation. In other words, the season is finally getting good."
  ],
  quote: "First place is rented. Taylor Park just changed the locks.", quoteBy: "The Chronicle sports desk",
  spotlight: {
    kicker: "Monday Night Median Heist",
    headline: "One Monday, Four Records Flipped",
    deck: "Dave Sr. and Anthony cross 120.05 under the lights, sending Jake and Nate home 0–2.",
    body: [
      "The head-to-head games were settled, but the median was still waiting in the parking lot with a tire iron. Dave Sr. and Anthony both climbed above 120.05 on Monday night. Anthony cleared it by only 1.05, salvaging a 1–1 week despite losing to Stefan. Dave Sr. paired the median point with a win over Pat for a perfect 2–0 finish.",
      "Their late movement carried collateral damage. Jake and Nate, already beaten by Darren and Derric, were pushed below the weekly line and fell to 0–2. Two managers rose, two contenders sank and the median once again proved it has more influence over this league than several commissioners."
    ],
    stats: [{ value: "120.05", label: "Median line" }, { value: "+1.05", label: "Anthony's clearance" }, { value: "0–2", label: "Jake's week" }, { value: "0–2", label: "Nate's week" }]
  },
  stories: [
    { section: "Matchup Autopsy", headline: "The Crown Fits", body: "Taylor Park Boys beat The Price Is Right 141.55–121.10 and moved alone into first. Anthony still stole the median point by 1.05, which is the fantasy equivalent of losing the fight but finding twenty dollars in the parking lot." },
    { section: "Matchup Autopsy", headline: "Collusion Goes Corporate", body: "Darren posted the league-high 150.90 and buried Achanesaw Massacre at 111.10. Cooking Up Collusion is now second, which means the suspicious name has progressed from a joke to potential evidence." },
    { section: "Matchup Autopsy", headline: "Five Alive", body: "Dave Sr. handled Team PatSmear 145.95–111.80 for a fifth straight win. Drake It Till You Make It has climbed from the basement to fourth, proving a season can survive almost anything—including being managed by Dave Sr." },
    { section: "Matchup Autopsy", headline: "TET Offensive", body: "Show Me Your Tet beat Gibbs Me Her Kittle 130.10–119.00. Derric delivered the loss that extended Nate's scoring skid to five while Nate missed the median by 1.05. Somewhere, symmetry laughed." },
    { section: "Matchup Autopsy", headline: "Brown Rice Keeps Boiling", body: "Dave Jr. beat RI Lion's 124.00–105.65 for a fourth straight win. Brown Rice is now 6–6 after spending the opening month looking like something left forgotten in the back of the refrigerator." },
    { section: "Matchup Autopsy", headline: "Corn Harvests the Baby", body: "Colonel Corn defeated Let's Cut to the Chase 101.55–87.00. Jon's enchanted baby carriage has finally lost a wheel; after surviving earlier weeks by pocket change, he posted the lowest score in the league and received no divine intervention." },
    { section: "Streak Watch", headline: "How the Mighty Have Fallen", body: "Jake has lost four consecutive scoring decisions and Nate has lost five. Both remain 7–5, but the comfortable lead is gone, the emergency lights are flashing and the rest of the league can smell fear." },
    { section: "Champion's Crisis", headline: "Four Wins, Zero Victims", body: "Pat is officially 4–8 and traditionally 0–6. Every victory has come from the median. PatSmear has not defeated another manager, making the weekly median Pat's best player, most loyal friend and only reliable source of emotional support." },
    { section: "Trading for Dummies", headline: "Lesson One: Consolidate", body: "If three useful players are fighting for two lineup spots, package two of them for one superior starter. Bench points do not earn standings credit. They only produce screenshots, hindsight and unbearable Tuesday-morning speeches." },
    { section: "Trading for Dummies", headline: "Lesson Two: Buy Depth", body: "A roster with one star and six active emergencies may need to trade concentrated value for multiple legitimate starters. This is not surrender. It is admitting that one excellent player cannot personally operate an entire fantasy franchise." },
    { section: "Trading for Dummies", headline: "Lesson Three: Try One-for-One", body: "Two players can carry similar market value while serving different roster needs. A receiver-rich team and a running-back-rich team can help each other without either owner being publicly executed. Not every trade requires a fleece, despite six weeks of league behavior suggesting otherwise." },
    { section: "Trading for Dummies", headline: "Six Weeks, Zero Trades", body: "Twelve managers have collectively decided it is safer to drown beside their own players than risk watching a former player succeed elsewhere. 'I always lose trades' is not a strategy. It is a confession that you do not trust yourself to count." },
    { section: "Rules Committee", headline: "Are Eight Bench Spots Too Many?", body: "Chestnut Farms carries eight bench spots while many standard redraft leagues use five. Deep benches reward preparation but turn waivers into an abandoned strip mall. The issue heads to an offseason vote—assuming the same managers afraid to trade can survive democracy." },
    { section: "Roster Identity", headline: "Anthony Loves His 'Manders", body: "The Price Is Right continues stockpiling Commanders despite Anthony being a Packers fan. Nobody knows whether this is roster construction, divided loyalty or an elaborate cry for help. The Chronicle will continue monitoring the Washington annex." },
    { section: "NFL Fantasy Pulse", headline: "Quarterbacks Take the Week", body: "Trevor Lawrence threw for 306 yards and four touchdowns, C.J. Stroud delivered 312 and three, Drake Maye threw three scores and Caleb Williams returned with 305 yards. The position produced enough points to rescue managers and enough bench regret to ruin several breakfasts." },
    { section: "NFL Fantasy Pulse", headline: "Volume Monsters", body: "Malik Nabers caught 12 passes for 165 yards, Jaxon Smith-Njigba caught 12 for 134 and Kenneth Walker ran for 128 yards and two scores. Christian McCaffrey added two rushing touchdowns, continuing his campaign against competitive balance." },
    { section: "Through the Wire", headline: "The doctor said I had blood clots, but I ain't…", body: "The Kanye reference writes the headline, but Jalen Hurts' diagnosis is not a punchline. Hurts was diagnosed with a calf DVT and bilateral pulmonary emboli, was placed on injured reserve and faces an extended absence while receiving anticoagulation. The entire league wishes him a safe and complete recovery." },
    { section: "Injury Ward", headline: "Receivers Take Heavy Damage", body: "Davante Adams suffered a ruptured hamstring with a reported six-to-ten-week timetable. Mike Evans aggravated his Achilles after producing 94 receiving yards, Terry McLaurin left Monday night with a knee injury and Deebo Samuel remained sidelined by a hamstring issue. Puka Nacua stands to inherit even more work in Los Angeles." },
    { section: "Injury Ward", headline: "Backfields Under Construction", body: "Saquon Barkley missed Week 6 with a hamstring injury, Breece Hall remained out with a quadriceps problem, Jacory Croskey-Merritt landed on injured reserve with a groin injury and Will Shipley is expected to miss multiple weeks with a partial plantar fascia tear. Every healthy running back is now one Sunday away from becoming somebody's entire personality." },
    { section: "Notable Return", headline: "Caleb Comes Back Swinging", body: "Caleb Williams returned after missing three games with a hamstring injury and completed 30 of 36 passes for 305 yards. Taylor Park Boys left the production on the bench, because even first-place teams deserve material for the Bench column." }
  ],
  briefs: [
    { headline: "New sheriff", body: "Taylor Park Boys owns first place and the league scoring lead at 890.50." },
    { headline: "Five straight", body: "Dave Sr. has climbed to fourth after beginning the season in the basement." },
    { headline: "Zero human victories", body: "Pat's four official wins have all come from beating the median." },
    { headline: "Trade embargo", body: "Six weeks and not one completed deal. The league remains terrified of its own judgment." },
    { headline: "The fall", body: "Jake and Nate are a combined 0–9 across their active scoring streaks." }
  ],
  results: [
    { away: "Cooking Up Collusion", awayScore: 150.90, home: "Achanesaw Massacre", homeScore: 111.10, note: "Week high · Darren climbs to second" },
    { away: "Drake It Till You Make It", awayScore: 145.95, home: "Team PatSmear", homeScore: 111.80, note: "Dave Sr.'s fifth straight win" },
    { away: "Taylor Park Boys", awayScore: 141.55, home: "The Price Is Right", homeScore: 121.10, note: "Stefan takes first · Anthony clears median" },
    { away: "Show Me Your Tet", awayScore: 130.10, home: "Gibbs Me Her Kittle", homeScore: 119.00, note: "Nate misses median by 1.05" },
    { away: "Brown Rice", awayScore: 124.00, home: "RI Lion's", homeScore: 105.65, note: "Dave Jr.'s fourth straight win" },
    { away: "Colonel Corn", awayScore: 101.55, home: "Let's Cut to the Chase", homeScore: 87.00, note: "Jon posts the week's low score" }
  ],
  standings: [
    [1,"Taylor Park Boys","8–4",890.50,804.50],[2,"Cooking Up Collusion","7–5",838.80,812.05],[3,"Achanesaw Massacre","7–5",835.80,754.25],[4,"Drake It Till You Make It","7–5",835.55,813.05],[5,"Gibbs Me Her Kittle","7–5",827.05,772.55],[6,"Show Me Your Tet","6–6",850.15,845.15],[7,"Brown Rice","6–6",753.20,707.90],[8,"Let's Cut to the Chase","6–6",730.90,794.10],[9,"Colonel Corn","5–7",799.70,748.80],[10,"The Price Is Right","5–7",751.40,788.40],[11,"Team PatSmear","4–8",774.95,999.15],[12,"RI Lion's","4–8",765.00,812.15]
  ].map(([rank,team,record,points,pointsAgainst]) => ({rank:rank as number,team:team as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number})),
  rankings: [
    { rank:1, team:"Taylor Park Boys", movement:"▲ 1", blurb:"First place, 890.50 points and the most complete résumé. The crown is no longer theoretical." },
    { rank:2, team:"Cooking Up Collusion", movement:"▲ 8", blurb:"A league-high 150.90 launches Darren into second and makes the team name increasingly uncomfortable." },
    { rank:3, team:"Drake It Till You Make It", movement:"▲ 1", blurb:"Five consecutive wins. Dave Sr. has stopped climbing the standings and begun invading them." },
    { rank:4, team:"Show Me Your Tet", movement:"▲ 7", blurb:"Derric steadied the ship, beat Nate and owns the second-highest points total despite sitting sixth." },
    { rank:5, team:"Brown Rice", movement:"▲ 2", blurb:"Four straight wins have transformed Dave Jr. from basement décor into an actual playoff threat." },
    { rank:6, team:"Achanesaw Massacre", movement:"▼ 5", blurb:"Four straight scoring losses. The massacre is now taking place inside Jake's own facility." },
    { rank:7, team:"Gibbs Me Her Kittle", movement:"▼ 4", blurb:"Five straight losses after a perfect opening. Nate's season has become a controlled demolition without the control." },
    { rank:8, team:"The Price Is Right", movement:"▼ 2", blurb:"Anthony lost but cleared the median. The Washington annex remains dangerous and deeply confusing." },
    { rank:9, team:"Colonel Corn", movement:"▼ 1", blurb:"A win is a win, even when 101.55 would normally require a written apology." },
    { rank:10, team:"Let's Cut to the Chase", movement:"▼ 5", blurb:"The luckiest baby alive finally ran out of loose change and finished dead last for the week." },
    { rank:11, team:"RI Lion's", movement:"▼ 2", blurb:"Last week's upset of Stefan was followed by 105.65. The revolution lasted approximately six days." },
    { rank:12, team:"Team PatSmear", movement:"—", blurb:"Officially 4–8. Against actual opponents, 0–6. No editorial argument remains." }
  ],
  panicMeter: [
    { team:"Team PatSmear", level:"Evacuate", score:5, detail:"Zero head-to-head wins through six weeks. The median cannot keep raising this child alone." },
    { team:"Gibbs Me Her Kittle", level:"Critical", score:5, detail:"Five straight scoring losses after opening 6–0. Please Give Me a Win." },
    { team:"Achanesaw Massacre", level:"Severe", score:4, detail:"Four straight scoring losses and the former leader has fallen to third." },
    { team:"RI Lion's", level:"High", score:4, detail:"Tied for last at 4–8 after immediately surrendering the momentum from Week 5." },
    { team:"Let's Cut to the Chase", level:"Rising", score:3, detail:"Two straight losses and a league-low 87.00. The enchanted stroller needs service." }
  ],
  trafficJam: {
    intro:"Taylor Park Boys has created separation at the top, but five clubs sit within one official win and only 15.75 points separate second through fifth in total scoring.",
    stats:[{value:"1",label:"Team alone at 8–4"},{value:"4",label:"Teams at 7–5"},{value:"3",label:"Teams at 6–6"},{value:"139.10",label:"Points from 1st to 12th"},{value:"5",label:"Dave Sr. win streak"},{value:"0",label:"Completed trades"}],
    body:[
      "Stefan owns the cleanest combination of record and production. Darren, Jake, Dave Sr. and Nate are stacked directly behind him at 7–5, but their arrows point in violently different directions. Darren and Dave Sr. are charging; Jake and Nate are searching for the emergency brake.",
      "The middle remains dangerous. Derric leads the 6–6 tier with 850.15 points, nearly 100 more than Dave Jr., while Jon has reached the same record through considerably more dramatic means. One strong week can still move a manager half the table. One bad week can apparently turn a former favorite into a recurring newspaper joke."
    ]
  },
  noMedian: {
    intro:"Strip away the weekly scoring bonus and count only actual opponents. Pat disappears, Stefan and Nate share the best traditional record, and the official standings lose several layers of flattering makeup.",
    standings:[
      {rank:1,team:"Taylor Park Boys",record:"4–2",official:"8–4",medianEffect:"+4 wins"},
      {rank:2,team:"Gibbs Me Her Kittle",record:"4–2",official:"7–5",medianEffect:"+3 wins"},
      {rank:3,team:"Achanesaw Massacre",record:"4–2",official:"7–5",medianEffect:"+3 wins"},
      {rank:4,team:"Drake It Till You Make It",record:"4–2",official:"7–5",medianEffect:"+3 wins"},
      {rank:5,team:"Cooking Up Collusion",record:"3–3",official:"7–5",medianEffect:"+4 wins"},
      {rank:6,team:"Show Me Your Tet",record:"3–3",official:"6–6",medianEffect:"+3 wins"},
      {rank:7,team:"Brown Rice",record:"3–3",official:"6–6",medianEffect:"+3 wins"},
      {rank:8,team:"Let's Cut to the Chase",record:"3–3",official:"6–6",medianEffect:"+3 wins"},
      {rank:9,team:"The Price Is Right",record:"3–3",official:"5–7",medianEffect:"+2 wins"},
      {rank:10,team:"Colonel Corn",record:"3–3",official:"5–7",medianEffect:"+2 wins"},
      {rank:11,team:"RI Lion's",record:"2–4",official:"4–8",medianEffect:"+2 wins"},
      {rank:12,team:"Team PatSmear",record:"0–6",official:"4–8",medianEffect:"+4 wins"}
    ],
    notes:[
      {headline:"Pat has defeated nobody",body:"The defending champion's four official victories all came from beating an imaginary line. Six actual opponents have left with wins."},
      {headline:"Darren gets the largest lift",body:"Cooking Up Collusion is 3–3 head-to-head but 7–5 officially. Four median victories help explain the climb to second."},
      {headline:"Four traditional leaders",body:"Stefan, Nate, Jake and Dave Sr. share the best head-to-head record at 4–2, though their current trajectories could not look more different."}
    ]
  },
  performanceDesk: {
    boom:[
      {player:"Trevor Lawrence",points:"38.40",detail:"Four passing touchdowns supplied a monster fantasy line even as Jake's roster lost around him."},
      {player:"C.J. Stroud",points:"37.10",detail:"312 yards and three touchdowns powered Derric's win over Nate."},
      {player:"Malik Nabers",points:"32.50",detail:"Twelve catches for 165 yards led Dave Sr.'s fifth straight victory."},
      {player:"Kenneth Walker III",points:"31.90",detail:"128 rushing yards and two touchdowns gave Darren the week's best active running-back score."}
    ],
    bust:[
      {player:"Jon's entire lineup",points:"87.00",detail:"A collective investigation. No single player should be forced to accept all the blame for this."},
      {player:"Jake's supporting cast",points:"111.10",detail:"Trevor Lawrence scored 38.40 and still watched the roster finish below the median."},
      {player:"Nate's lineup",points:"119.00",detail:"Lost the matchup and missed the median by 1.05—a perfectly efficient 0–2."},
      {player:"RI Lion's",points:"105.65",detail:"Nico followed the upset of Stefan with the fantasy equivalent of returning the trophy the next morning."}
    ],
    bench:[
      {player:"Kirk Cousins",points:"29.65",detail:"Taylor Park Boys survived while leaving the best quarterback score on Stefan's bench."},
      {player:"Caleb Williams",points:"24.55",detail:"Returned for 305 passing yards and immediately joined Cousins in Stefan's luxury quarterback parking lot."},
      {player:"Bench points league-wide",points:"Too many",detail:"Six weeks without a trade has turned usable production into expensive decorative furniture."}
    ]
  },
  bLeague: {
    headline:"Promotion Race Turns Violent",
    deck:"The perfect team finally bleeds, Loose Endz wins the Gay Bowl and Josh Hubbell detonates for 195.95 as the road to A League narrows.",
    standings:[
      [1,"Hole Punchers","Michael Balestra, Esq.","10–2",821.45,650.65,"—"],[2,"Never Gonna Gibbs You Up","Matt Chouinard","7–5",847.50,895.20,"▲ 2"],[3,"Unnecessary Clarkness","Mike Clark","7–5",820.70,824.30,"▲ 3"],[4,"Loose Endz","Pat Gotham","7–5",749.95,700.45,"▲ 3"],[5,"Stairway to Evans","Dillon Neumann, MD","6–6",880.55,807.55,"▼ 3"],[6,"Air Williams","Qendrim Kongjeli","6–6",822.75,941.60,"▼ 1"],[7,"Chronic Micropenix","Mike Skinner","6–6",766.75,784.70,"▼ 4"],[8,"Team Nickcic4","Nick Cicerone","6–6",741.75,746.10,"—"],[9,"A Ladd from London Town","Philip Hubbell","6–6",737.05,706.50,"▲ 1"],[10,"Forced to Be Commish","Josh Hubbell","5–7",888.80,879.05,"▲ 1"],[11,"Team stefanb1268","Gio Gray","4–8",752.60,854.15,"▼ 2"],[12,"Team Spage3","Scott Page","2–10",671.40,786.10,"—"]
    ].map(([rank,team,manager,record,points,pointsAgainst,movement]) => ({rank:rank as number,team:team as string,manager:manager as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number,movement:movement as string})),
    watch:[
      {label:"The Gay Bowl",headline:"Loose Endz Tops Hole Punchers",body:"Pat Gotham beat boyfriend Michael Balestra 129.55–81.50, ending the perfect leader's aura and earning permanent household bragging rights. Love wins. Michael did not."},
      {label:"Monday Escape",headline:"Autodraft Finds a Way",body:"Mike Clark's Unnecessary Clarkness escaped Nick 133.65–132.90 after Christian McCaffrey's monster Monday night. A 0.75-point margin extended the autodraft miracle to three straight wins."},
      {label:"Weekly Detonation",headline:"Josh Drops 195.95",body:"Forced to Be Commish produced the B League's defining score. Josh remains 5–7, but nobody wants to see that ceiling in a promotion bracket."},
      {label:"Free Fall",headline:"Scott Loses Five Straight",body:"Team Spage3 is 2–10 and has lost five consecutive scoring decisions. The promotion watch has become a wellness check."}
    ]
  },
  stockMarket: {
    up:[{team:"Taylor Park Boys",detail:"First place and points lead"},{team:"Drake It Till You Make It",detail:"Five straight wins"},{team:"Cooking Up Collusion",detail:"Week-high 150.90"},{team:"Brown Rice",detail:"Four straight wins"}],
    down:[{team:"Gibbs Me Her Kittle",detail:"Five straight losses"},{team:"Achanesaw Massacre",detail:"Four straight losses"},{team:"Team PatSmear",detail:"0–6 head-to-head"},{team:"Let's Cut to the Chase",detail:"League-low 87.00"}]
  },
  awards: [
    {label:"Manager of the Week",winner:"Darren Pnad",detail:"A league-high 150.90, a win over Jake and a climb into second place."},
    {label:"New Sheriff",winner:"Stefan Balestra",detail:"First place, 890.50 points and the league's strongest overall résumé."},
    {label:"Streak of the Week",winner:"Dave Campbell Sr.",detail:"Five straight wins after another perfect 2–0 result."},
    {label:"Monday Thief",winner:"Anthony Innamorati",detail:"Lost his matchup but cleared the median by 1.05 to salvage the week."},
    {label:"Efficient Collapse",winner:"Nate Watson",detail:"Lost head-to-head and missed the median by exactly 1.05."},
    {label:"Humanity Avoidance",winner:"Pat Brown",detail:"Four official wins without defeating another manager."}
  ],
  leaders: [
    {position:"QB",player:"Trevor Lawrence",team:"Achanesaw Massacre",points:38.40},
    {position:"RB",player:"Kenneth Walker III",team:"Cooking Up Collusion",points:31.90},
    {position:"WR",player:"Malik Nabers",team:"Drake It Till You Make It",points:32.50},
    {position:"TE",player:"Isaiah Likely",team:"Brown Rice",points:23.90},
    {position:"DEF",player:"Kansas City Chiefs",team:"Cooking Up Collusion",points:25.00}
  ],
  history: []
},{
  slug: "2026-week-05", issueNumber: 5, season: 2026, week: "Week 5", date: "October 13, 2026",
  median: "143.88",
  kicker: "Year XVI · Week Five · Median Line 143.88",
  headline: "Underdog Uprising",
  deck: "Six matchups. Six upsets. The lower-ranked club wins every game and blows the Chestnut Farms standings wide open.",
  hero: "/issues/2026-week-05/underdog-uprising-final.png",
  heroAlt: "Six victorious fantasy football mascots charging over six fallen favorite banners as a baby runner holds up a quarter",
  caption: "The Week 5 rebellion: RI Lion’s, Let’s Cut to the Chase, The Price Is Right, Colonel Corn, Drake It Till You Make It and Brown Rice swept the six higher-ranked favorites.",
  lead: [
    "Week 5 did not produce one upset. It produced a clean sweep. Every lower-ranked team defeated the favorite across from it, turning the standings upside down and compressing nearly the entire league into a three-game span. The six winners entered Sunday ranked seventh through twelfth by record order; by Tuesday morning, each had taken a game from the top half.",
    "Dave Campbell Jr. supplied the loudest result, scoring a league-best 176.95 while holding reigning champion Pat Brown to 85.90. Dave Campbell Sr. followed at 174.90, Anthony Innamorati reached 172.95 and Johnny No scored 166.80. Nico Erausquin knocked off Taylor Park Boys, and Jon Naval completed the sweep in overtime on Monday night.",
    "The aftermath is a traffic jam: Jake and Nate lead at 7–3, Stefan and Jon sit 6–4, Darren and Dave Sr. are 5–5, and the remaining six clubs are all 4–6. First and last are separated by only three scoring decisions. Nobody is safe, and nobody is out."
  ],
  quote: "The favorites owned the standings. The underdogs owned the week.", quoteBy: "The Chronicle sports desk",
  spotlight: {
    kicker: "Monday Night Miracle",
    headline: "Won by a Quarter",
    deck: "Kyren Williams’ final overtime production sends Jon past first-place Jake, 144.00–143.75.",
    body: [
      "Jake Brierly appeared to have survived. Achanesaw Massacre had received 36.30 from Christian Watson, 33.05 from Trevor Lawrence and 27.40 from De’Von Achane, building a 143.75 total that sat just below the weekly median but ahead of Jon entering the final moments of Monday Night Football.",
      "Then the Rams and Bills went to overtime. Kyren Williams’ final touches supplied the fraction Jon still needed, lifting Let’s Cut to the Chase to 144.00. The last movement of the fantasy week simultaneously beat Jake by 0.25 and cleared the 143.88 median by 0.12. Jon went from the edge of an 0–2 result to a perfect 2–0 week and climbed four places into fourth."
    ],
    stats: [{ value: "0.25", label: "Winning margin" }, { value: "0.12", label: "Above median" }, { value: "2–0", label: "Jon’s Week 5" }, { value: "+4", label: "Places climbed" }]
  },
  stories: [
    { section: "Matchup Autopsy", headline: "Brown Rice Boils Over", body: "Dave Jr. produced the week’s best score and its largest margin, 176.95–85.90 over Team PatSmear. Matthew Stafford scored 38.15, Bucky Irving 37.50 and Davante Adams 22.10. The 91.05-point demolition moved Brown Rice to 4–6 and dropped the defending champion into the six-team pileup." },
    { section: "Matchup Autopsy", headline: "Maye Day for Nate", body: "Drake Maye’s 53.20-point eruption powered Dave Sr. to a 174.90–126.55 win over Gibbs Me Her Kittle. Malik Nabers added 33.10 and Matthew Golden 24.30. Nate’s third consecutive scoring loss erased the cushion created by his 6–0 opening." },
    { section: "Matchup Autopsy", headline: "Come on Down", body: "The Price Is Right scored 172.95 behind Puka Nacua’s 41.70 and Jayden Daniels’ 38.25, beating Cooking Up Collusion by 31.00. Darren received 42.80 from Jaylen Warren and 26.80 from James Cook, but the rest of the lineup could not match Anthony’s depth." },
    { section: "Matchup Autopsy", headline: "Corn Fed", body: "Colonel Corn routed Show Me Your Tet 166.80–116.70. Josh Allen delivered 41.60, Mike Evans 30.30 and Braelon Allen 22.60. Johnny’s second head-to-head win stopped the slide; Derric followed a 204.75 masterpiece with a 116.70 collapse." },
    { section: "Matchup Autopsy", headline: "The London Hangover", body: "One week after taking the points lead in London, Taylor Park Boys scored 114.70 and lost to RI Lion’s 146.95. Jared Goff’s 34.65 and Washington’s 34.40 led Nico’s upset while Stefan absorbed his first 0–2 week of the season." },
    { section: "Matchup Autopsy", headline: "A Quarter Changes Everything", body: "Jon’s 144.00 was only the fifth-highest winning score, yet it produced the week’s most consequential result. Jake lost the matchup by 0.25 and missed the median by 0.13, turning an almost-perfect night into an 0–2 week." },
    { section: "Champion’s Crisis", headline: "SMEARED", body: "Pat is 4–6 officially but 0–5 in traditional head-to-head games. Four median victories have kept the reigning champion afloat. Week 5 brought the league’s lowest score, largest defeat and strongest evidence yet that the title defense is in genuine danger." },
    { section: "NFL Fantasy Pulse", headline: "Maye Drops Five on Vegas", body: "Drake Maye completed 26 of 34 passes for 374 yards, threw four touchdowns and ran for another in New England’s 45–17 rout. The 53.20 fantasy points were the defining individual performance of Chestnut Farms Week 5." },
    { section: "NFL Fantasy Pulse", headline: "Allen Wins an Overtime Classic", body: "Buffalo outlasted the Rams 37–34 in overtime. Josh Allen generated 331 total yards, while Puka Nacua reached 138 receiving yards. The extra period also decided Jon and Jake’s fantasy matchup." },
    { section: "NFL Fantasy Pulse", headline: "Perfect Teams Keep Rolling", body: "San Francisco improved to 5–0 by edging Seattle 32–29, and Minnesota reached 5–0 with a 23–13 win over New Orleans. Jacksonville stunned Philadelphia 19–17 in London on Cam Little’s 57-yard field goal as time expired." },
    { section: "Injury Report", headline: "Henderson’s High Ankle Sprain", body: "TreVeyon Henderson is expected to miss multiple weeks after injuring his ankle during New England’s win. Rhamondre Stevenson inherits the clearest fantasy benefit, with Corey Kiner positioned for complementary work." },
    { section: "Usage Desk", headline: "Volume That Travels", body: "Puka Nacua’s overtime workload, Bucky Irving’s 165 rushing yards and Jaylen Warren’s 176 scrimmage yards supplied three of the week’s most bankable performances. All three combined opportunity with efficiency rather than relying on a single broken play." }
  ],
  briefs: [
    { headline: "A perfect upset slate", body: "All six lower-ranked clubs won their head-to-head matchups." },
    { headline: "Six clubs at 4–6", body: "Derric, Johnny, Pat, Nico, Anthony and Dave Jr. are separated only by tiebreakers." },
    { headline: "Jake’s double miss", body: "A 0.25 matchup loss and 0.13 median miss turned 143.75 into an 0–2 result." },
    { headline: "Pat’s hidden record", body: "The champion is 4–6 officially—but 0–5 when the median is removed." },
    { headline: "Four scores above 166", body: "Dave Jr., Dave Sr., Anthony and Johnny all delivered statement totals." }
  ],
  results: [
    { away: "Brown Rice", awayScore: 176.95, home: "Team PatSmear", homeScore: 85.90, note: "Week high · Largest margin 91.05" },
    { away: "Drake It Till You Make It", awayScore: 174.90, home: "Gibbs Me Her Kittle", homeScore: 126.55, note: "Drake Maye 53.20" },
    { away: "The Price Is Right", awayScore: 172.95, home: "Cooking Up Collusion", homeScore: 141.95, note: "Anthony’s third straight H2H win" },
    { away: "Colonel Corn", awayScore: 166.80, home: "Show Me Your Tet", homeScore: 116.70, note: "Josh Allen 41.60" },
    { away: "RI Lion’s", awayScore: 146.95, home: "Taylor Park Boys", homeScore: 114.70, note: "Nico completes a 2–0 week" },
    { away: "Let’s Cut to the Chase", awayScore: 144.00, home: "Achanesaw Massacre", homeScore: 143.75, note: "Closest game · Kyren wins it in OT" }
  ],
  standings: [
    [1,"Achanesaw Massacre","7–3",724.70,604.30],[2,"Gibbs Me Her Kittle","7–3",708.05,642.45],[3,"Taylor Park Boys","6–4",748.95,683.40],[4,"Let’s Cut to the Chase","6–4",643.90,692.55],[5,"Drake It Till You Make It","5–5",689.60,701.25],[6,"Cooking Up Collusion","5–5",687.90,700.95],[7,"Show Me Your Tet","4–6",720.05,726.15],[8,"Colonel Corn","4–6",698.15,661.80],[9,"Team PatSmear","4–6",663.15,853.20],[10,"RI Lion’s","4–6",659.35,688.15],[11,"The Price Is Right","4–6",630.30,646.85],[12,"Brown Rice","4–6",629.20,602.25]
  ].map(([rank,team,record,points,pointsAgainst]) => ({rank:rank as number,team:team as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number})),
  rankings: [
    { rank: 1, team: "Achanesaw Massacre", movement: "—", blurb: "Still 7–3 with a 4–1 head-to-head record; a quarter-point loss does not erase the résumé." },
    { rank: 2, team: "Taylor Park Boys", movement: "▼ 1", blurb: "The 114.70 stumble hurts, but 748.95 remains the league’s best scoring total." },
    { rank: 3, team: "Gibbs Me Her Kittle", movement: "—", blurb: "Three straight scoring losses have cooled the 6–0 opening and tightened the race." },
    { rank: 4, team: "Drake It Till You Make It", movement: "▲ 3", blurb: "Maye’s 53.20 drove a 174.90 statement and pushed Dave Sr. back to .500." },
    { rank: 5, team: "Let’s Cut to the Chase", movement: "▲ 3", blurb: "The margins are absurd, but 6–4 and two perfect photo-finish weeks are real." },
    { rank: 6, team: "The Price Is Right", movement: "▲ 5", blurb: "Three consecutive head-to-head wins and 172.95 make Anthony the league’s fastest riser." },
    { rank: 7, team: "Brown Rice", movement: "▲ 5", blurb: "From last place to the week’s high score; Dave Jr. finally showed the roster’s ceiling." },
    { rank: 8, team: "Colonel Corn", movement: "▲ 1", blurb: "A 166.80 eruption ends the emergency and puts Johnny back in the race." },
    { rank: 9, team: "RI Lion’s", movement: "▲ 1", blurb: "Beating the points leader matters, but the season scoring profile remains volatile." },
    { rank: 10, team: "Cooking Up Collusion", movement: "▼ 5", blurb: "Warren exploded, yet a second straight scoring loss drags Darren back to 5–5." },
    { rank: 11, team: "Show Me Your Tet", movement: "▼ 7", blurb: "The 204.75 afterglow vanished in a 50.10-point defeat." },
    { rank: 12, team: "Team PatSmear", movement: "▼ 6", blurb: "The defending champion is winless head-to-head and just posted the week’s lowest score." }
  ],
  panicMeter: [
    { team: "Team PatSmear", level: "Critical", score: 5, detail: "0–5 head-to-head, 85.90 this week and a 91.05-point loss." },
    { team: "Show Me Your Tet", level: "Severe", score: 4, detail: "Followed 204.75 with 116.70 and fell to 4–6." },
    { team: "Gibbs Me Her Kittle", level: "Rising", score: 3, detail: "Three consecutive scoring losses after a perfect 6–0 start." },
    { team: "Cooking Up Collusion", level: "Rising", score: 3, detail: "Two straight scoring losses and now only .500." },
    { team: "Taylor Park Boys", level: "Watch", score: 2, detail: "The points leader just produced its first 0–2 week." }
  ],
  trafficJam: {
    intro: "The uprising did more than produce six entertaining results. It erased almost every comfortable gap in the table and created four distinct but tightly packed record tiers.",
    stats: [{value:"2",label:"Teams at 7–3"},{value:"2",label:"Teams at 6–4"},{value:"2",label:"Teams at 5–5"},{value:"6",label:"Teams at 4–6"},{value:"3",label:"Wins from first to last"},{value:"748.95",label:"PF leader sits third"}],
    body: [
      "Jake and Nate still share first place, but both went 0–2 in Week 5. Stefan and Jon are one decision behind, with Jon’s quarter-point escape creating a tie for third. Dave Sr. and Darren occupy the .500 bridge between the leaders and the largest logjam in league history.",
      "The entire bottom half is 4–6. Derric leads that group on total points, while Dave Jr. sits twelfth despite producing the week’s highest score. With only three decisions separating first from last, one perfect week can move a team several positions and one collapse can erase a month of work."
    ]
  },
  noMedian: {
    intro: "Remove the weekly median and count only the five head-to-head games. Pat’s safety net disappears, Anthony rises into the second tier and the league looks very different.",
    standings: [
      { rank:1, team:"Achanesaw Massacre", record:"4–1", official:"7–3", medianEffect:"+3 wins" },
      { rank:2, team:"Gibbs Me Her Kittle", record:"4–1", official:"7–3", medianEffect:"+3 wins" },
      { rank:3, team:"Taylor Park Boys", record:"3–2", official:"6–4", medianEffect:"+3 wins" },
      { rank:4, team:"Drake It Till You Make It", record:"3–2", official:"5–5", medianEffect:"+2 wins" },
      { rank:5, team:"Let’s Cut to the Chase", record:"3–2", official:"6–4", medianEffect:"+3 wins" },
      { rank:6, team:"The Price Is Right", record:"3–2", official:"4–6", medianEffect:"+1 win" },
      { rank:7, team:"Show Me Your Tet", record:"2–3", official:"4–6", medianEffect:"+2 wins" },
      { rank:8, team:"Colonel Corn", record:"2–3", official:"4–6", medianEffect:"+2 wins" },
      { rank:9, team:"Cooking Up Collusion", record:"2–3", official:"5–5", medianEffect:"+3 wins" },
      { rank:10, team:"RI Lion’s", record:"2–3", official:"4–6", medianEffect:"+2 wins" },
      { rank:11, team:"Brown Rice", record:"2–3", official:"4–6", medianEffect:"+2 wins" },
      { rank:12, team:"Team PatSmear", record:"0–5", official:"4–6", medianEffect:"+4 wins" }
    ],
    notes: [
      { headline:"The median’s biggest beneficiary", body:"Pat has earned four victories by finishing above the weekly line while losing every direct matchup." },
      { headline:"Anthony’s hidden surge", body:"The Price Is Right is 3–2 head-to-head, tied for the league’s third-best traditional record despite ranking eleventh officially." },
      { headline:"Jon still lives dangerously", body:"Three head-to-head wins include margins of 0.55 and 0.25. The traditional table validates the wins but not the comfort." }
    ]
  },
  luckFile: {
    headline: "The Luckiest Baby Alive?",
    deck: "Two perfect weeks, four victories and a combined cushion of only 1.195 points.",
    rows: [
      { week:"Week 3", decision:"Beat RI Lion’s", margin:"+0.550" },
      { week:"Week 3", decision:"Cleared median", margin:"+0.275" },
      { week:"Week 5", decision:"Beat Achanesaw Massacre", margin:"+0.250" },
      { week:"Week 5", decision:"Cleared median", margin:"+0.120" }
    ],
    conclusion: "Jon is not merely winning close games. He is repeatedly surviving by statistical pocket change. No team has converted thinner margins into more standings value."
  },
  performanceDesk: {
    boom: [
      {player:"Drake Maye",points:"53.20",detail:"Four passing touchdowns, one rushing score and the week’s defining eruption."},
      {player:"Jaylen Warren",points:"42.80",detail:"127 rushing yards and 49 receiving yards in a losing fantasy effort."},
      {player:"Puka Nacua",points:"41.70",detail:"Overtime volume helped deliver Anthony’s 172.95-point statement."},
      {player:"Bucky Irving",points:"37.50",detail:"165 rushing yards and two total touchdowns powered Brown Rice."}
    ],
    bust: [
      {player:"CeeDee Lamb",points:"2.90",detail:"Two catches for nine yards during Pat’s 91.05-point defeat."},
      {player:"Derrick Henry",points:"4.80",detail:"A quiet afternoon removed Nate’s usual weekly floor."},
      {player:"Alvin Kamara",points:"2.60",detail:"Only six receiving yards and 12 rushing yards for Team PatSmear."},
      {player:"Bo Nix",points:"10.15",detail:"Only 123 passing yards as Brown Rice won in spite of its quarterback."}
    ],
    bench: [
      {player:"Jordan Love",points:"42.95",detail:"Anthony left a massive score unused but Jayden Daniels still delivered 38.25."},
      {player:"Isaiah Likely",points:"32.40",detail:"The week’s highest-scoring tight end watched Taylor Park Boys lose from the bench."},
      {player:"Kyler Murray",points:"21.55",detail:"Nate started Justin Herbert’s 12.45 while the better quarterback score sat unused."},
      {player:"Joe Burrow",points:"32.50",detail:"Nico benched Burrow, but Jared Goff’s 34.65 made it the correct decision."}
    ]
  },
  bLeague: {
    headline:"The Promotion Watch Opens",
    deck:"Michael Balestra is perfect, Dillon Neumann owns the scoring crown and a crowded middle class is chasing the route to A League.",
    standings: [
      [1,"Hole Punchers","Michael Balestra, Esq.","10–0",739.95,521.10,"—"],[2,"Stairway to Evans","Dillon Neumann, MD","6–4",772.70,663.55,"▲ 2"],[3,"Chronic Micropenix","Mike Skinner","6–4",641.85,589.25,"▲ 4"],[4,"Never Gonna Gibbs You Up","Matt Chouinard","5–5",723.95,776.85,"▲ 5"],[5,"Air Williams","Qendrim Kongjeli","5–5",704.65,816.40,"▼ 3"],[6,"Unnecessary Clarkness","Mike Clark","5–5",687.05,691.40,"▲ 1"],[7,"Loose Endz","Pat Gotham","5–5",620.40,618.95,"▲ 4"],[8,"Team Nickcic4","Nick Cicerone","5–5",608.85,612.45,"▼ 5"],[9,"Team stefanb1268","Gio Gray","4–6",637.25,712.35,"▼ 4"],[10,"A Ladd from London Town","Philip Hubbell","4–6",607.70,581.40,"—"],[11,"Forced to Be Commish","Josh Hubbell","3–7",692.85,756.80,"▼ 3"],[12,"Team Spage3","Scott Page","2–8",553.05,649.75,"—"]
    ].map(([rank,team,manager,record,points,pointsAgainst,movement]) => ({rank:rank as number,team:team as string,manager:manager as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number,movement:movement as string})),
    watch: [
      { label:"Front-Runner", headline:"Michael Is 10–0", body:"Hole Punchers owns every possible scoring victory through five weeks and a league-best +218.85 point differential." },
      { label:"Scoring King", headline:"Dillon Leads Everyone", body:"Stairway to Evans has 772.70 points—32.75 more than Michael—and represents the most obvious threat to the perfect leader." },
      { label:"Rising Manager", headline:"Pat Gotham Is Coming", body:"The newcomer’s Loose Endz has won three straight scoring decisions and climbed four places into the five-team 5–5 crowd." },
      { label:"Inactive Watch", headline:"Gio Goes Missing", body:"Team stefanb1268 has slipped to 4–6 while Gio has repeatedly allowed injured De’Von Achane to remain in the starting lineup." }
    ]
  },
  stockMarket: {
    up:[{team:"Brown Rice",detail:"Week-high 176.95"},{team:"The Price Is Right",detail:"Three straight H2H wins"},{team:"Drake It Till You Make It",detail:"Maye unlocks the ceiling"},{team:"Let’s Cut to the Chase",detail:"Another perfect escape"}],
    down:[{team:"Team PatSmear",detail:"0–5 head-to-head"},{team:"Show Me Your Tet",detail:"88.05-point weekly crash"},{team:"Gibbs Me Her Kittle",detail:"Three straight scoring losses"},{team:"Cooking Up Collusion",detail:"Back to .500"}]
  },
  awards: [
    { label:"Manager of the Week", winner:"Dave Campbell Jr.", detail:"A league-high 176.95 and a 91.05-point demolition of the reigning champion." },
    { label:"Player of the Week", winner:"Drake Maye", detail:"53.20 points on four passing touchdowns and one rushing score." },
    { label:"Photo Finish", winner:"Jon Naval", detail:"Kyren Williams’ overtime work delivered a 0.25-point victory." },
    { label:"Bad Beat", winner:"Jake Brierly", detail:"Lost by 0.25 and missed the median by 0.13." },
    { label:"Resurrection", winner:"Anthony Innamorati", detail:"172.95 points and a third consecutive head-to-head win." },
    { label:"Dragonfire", winner:"Dave Campbell Sr.", detail:"174.90 behind the week’s highest-scoring player." },
    { label:"Reality Check", winner:"Pat Brown", detail:"The champion fell to 0–5 head-to-head with the week’s lowest score." },
    { label:"Scoring Whiplash", winner:"Derric Vigeant", detail:"From 204.75 in Week 4 to 116.70 in Week 5." }
  ],
  leaders: [
    { position:"QB",player:"Drake Maye",team:"Drake It Till You Make It",points:53.20 },
    { position:"RB",player:"Jaylen Warren",team:"Cooking Up Collusion",points:42.80 },
    { position:"WR",player:"Puka Nacua",team:"The Price Is Right",points:41.70 },
    { position:"TE",player:"Isaiah Likely",team:"Taylor Park Boys bench",points:32.40 },
    { position:"DEF",player:"New York Jets",team:"Taylor Park Boys",points:30.00 }
  ],
  history: []
},{
  slug: "2026-week-04", issueNumber: 4, season: 2026, week: "Week 4", date: "October 6, 2026",
  median: "128.75",
  kicker: "Year XVI · Week Four · Median Line 128.75",
  headline: "London Calling",
  deck: "Taylor Park Boys conquer the reigning champion from across the Atlantic, scoring 195.95 and taking the league’s total-points lead.",
  hero: "/issues/2026-week-04/london-calling.png",
  heroAlt: "Vintage sports illustration of a blue-and-white football hero defeating a pink mascot in a London stadium",
  caption: "Taylor Park Boys routed Team PatSmear 195.95–156.90 while Stefan Balestra watched the Colts in London. Chronicle illustration inspired by the clubs’ blue-and-white and pink mascot imagery.",
  lead: [
    "London called, and Taylor Park Boys answered with the league’s second-largest score of Week 4. Managing from across the Atlantic while attending the Colts game with Kat, Stefan Balestra assembled 195.95 points and beat reigning champion Pat Brown’s Team PatSmear by 39.05.",
    "The attack came from everywhere. Kyle Monangai scored 32.00, Bryce Young delivered 30.75, Tee Higgins supplied 30.70, Chris Olave added 23.60 and Jonathan Taylor scored 22.70. Five starters cleared 22 points, leaving even CeeDee Lamb’s extraordinary 45.30 unable to keep Pat close.",
    "The 2–0 week moved Taylor Park Boys to 6–2 and, more importantly, to a league-leading 634.25 points. Nate Watson and Jake Brierly remain one scoring victory ahead at 7–1, but neither can claim the same offensive total. The standings say third. The scoreboard says the title race now runs through Taylor Park."
  ],
  quote: "Across the pond, above the field—and now above the league in points.", quoteBy: "The Chronicle sports desk",
  spotlight: {
    kicker: "The Week’s Other Earthquake",
    headline: "TETs OUT",
    deck: "Derric Vigeant breaks the 200-point barrier as Show Me Your Tet detonates for 204.75.",
    body: [
      "The first 200-point performance of the season belonged to Show Me Your Tet. Tetairoa McMillan erupted for 49.20, Nico Collins added 34.80, Javonte Williams scored 31.30, Sam LaPorta delivered 22.40 and Quinshon Judkins supplied 21.60.",
      "Dave Campbell Sr. scored 161.95—the week’s third-highest total—and still lost by 42.80. Their 366.70 combined points made this the highest-scoring matchup of the season. Derric rose four places in the standings to fifth and returned to .500 at 4–4."
    ],
    stats: [{ value: "204.75", label: "Derric’s score" }, { value: "49.20", label: "Tetairoa McMillan" }, { value: "366.70", label: "Combined points" }, { value: "+4", label: "Places climbed" }]
  },
  photoFeature: {
    kicker: "Postcard From England",
    headline: "Across the Pond",
    image: "/issues/2026-week-04/stefan-kat-london.jpeg",
    alt: "Stefan and Kat attending the Colts game in a packed London stadium",
    caption: "Stefan and Kat at the NFL London game as Taylor Park Boys produced 195.95 points back home.",
    body: "The Taylor Park Boys manager watched the Colts in London while his fantasy lineup dismantled the defending champion. The international setting supplied a fitting backdrop for the club’s biggest score of the season and its ascent to the top of the points table."
  },
  stories: [
    { section: "Top of the Table", headline: "Jake Catches Nate at 7–1", body: "Achanesaw Massacre beat Colonel Corn 132.05–125.35 and cleared the median. Nate beat Brown Rice 111.65–84.10 but missed the 128.75 line, ending his perfect scoring record. Nate remains first by 0.55 total points, while Jake has won four consecutive scoring decisions." },
    { section: "Collision Report", headline: "Darren Rolls to Five Straight", body: "Cooking Up Collusion beat RI Lion’s 140.80–102.50 behind Kenneth Walker’s 36.90, Brock Purdy’s 25.80 and Jameson Williams’ 20.20. Darren climbed to fourth at 5–3 while Nico absorbed a fourth consecutive scoring loss." },
    { section: "Basement Drama", headline: "The Price Wins Again", body: "Anthony Innamorati edged Jon Naval 125.45–121.30 for a second consecutive head-to-head victory. Both clubs missed the median, leaving The Price Is Right at 2–6 and Let’s Cut to the Chase at 4–4." },
    { section: "Injury Ward", headline: "Stars Leave a Trail of Doubt", body: "Lamar Jackson injured his ankle, Ja’Marr Chase entered concussion protocol and Tee Higgins aggravated his groin. Saquon Barkley hurt his hamstring, DJ Moore injured his knee and Rashee Rice left with a hamstring problem. Week 5 lineup decisions will begin with the medical reports." },
    { section: "Quarterback Desk", headline: "Maye Leads the Comeback", body: "Drake Maye threw for 269 yards and three touchdowns, rushed for 54 more and scored 31.85 for Dave Sr. His late NFL comeback against Buffalo produced an excellent fantasy line, though it arrived in the wrong week to survive Derric’s eruption." },
    { section: "Volume Department", headline: "Targets, Targets Everywhere", body: "Garrett Wilson drew 18 targets for Jake, Malik Nabers commanded 15 for Dave Sr. and CeeDee Lamb caught 17 passes for Pat. Kyren Williams handled every Rams running-back snap and scored 36.70 for Jon." },
    { section: "Cold September", headline: "Kelce Hits the Age Wall", body: "Travis Kelce managed two catches for 11 yards and only 3.50 fantasy points for Pat. Through four weeks he had not surpassed 40 receiving yards or scored a touchdown, deepening the concern at a position once considered automatic." },
    { section: "Bench Warrant", headline: "Burrow Watches Nico Lose", body: "Joe Burrow scored 35.00 on Nico’s bench while Jared Goff started in a 38.30-point loss. Dave Jr. also left Ollie Gordon’s 24.00 unused during the week’s lowest team performance." }
  ],
  briefs: [
    { headline: "Four perfect weeks", body: "Stefan, Derric, Darren and Jake each earned both the matchup and median victories." },
    { headline: "Victory without the median", body: "Nate and Anthony won head-to-head but finished below 128.75, splitting their weeks 1–1." },
    { headline: "Great scores, wrong opponents", body: "Dave Sr. scored 161.95 and Pat scored 156.90. Both lost their matchups but salvaged median victories." },
    { headline: "The low-water mark", body: "Brown Rice finished at 84.10, the week’s lowest total, and fell to last place." }
  ],
  results: [
    { away: "Show Me Your Tet", awayScore: 204.75, home: "Drake It Till You Make It", homeScore: 161.95, note: "Season-high score · 366.70 combined" },
    { away: "Taylor Park Boys", awayScore: 195.95, home: "Team PatSmear", homeScore: 156.90, note: "London Calling · Stefan takes points lead" },
    { away: "Cooking Up Collusion", awayScore: 140.80, home: "RI Lion’s", homeScore: 102.50, note: "Darren’s fifth straight scoring win" },
    { away: "Achanesaw Massacre", awayScore: 132.05, home: "Colonel Corn", homeScore: 125.35, note: "Jake joins Nate at 7–1" },
    { away: "The Price Is Right", awayScore: 125.45, home: "Let’s Cut to the Chase", homeScore: 121.30, note: "Closest game · 4.15" },
    { away: "Gibbs Me Her Kittle", awayScore: 111.65, home: "Brown Rice", homeScore: 84.10, note: "Both below median" }
  ],
  standings: [
    [1,"Gibbs Me Her Kittle","7–1",581.50,467.55],[2,"Achanesaw Massacre","7–1",580.95,460.30],[3,"Taylor Park Boys","6–2",634.25,536.45],[4,"Cooking Up Collusion","5–3",545.95,528.00],[5,"Show Me Your Tet","4–4",603.35,559.35],[6,"Team PatSmear","4–4",577.25,676.25],[7,"Let’s Cut to the Chase","4–4",499.90,548.80],[8,"Drake It Till You Make It","3–5",514.70,574.70],[9,"Colonel Corn","2–6",531.35,545.10],[10,"RI Lion’s","2–6",512.40,573.45],[11,"The Price Is Right","2–6",457.35,504.90],[12,"Brown Rice","2–6",452.25,516.35]
  ].map(([rank,team,record,points,pointsAgainst]) => ({rank:rank as number,team:team as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number})),
  rankings: [
    { rank: 1, team: "Taylor Park Boys", movement: "▲ 2", blurb: "The league points leader just scored 195.95 against the defending champion." },
    { rank: 2, team: "Achanesaw Massacre", movement: "—", blurb: "Jake has four straight scoring wins and is only 0.55 PF behind Nate." },
    { rank: 3, team: "Gibbs Me Her Kittle", movement: "▼ 2", blurb: "Still first officially, but 111.65 ended perfection and opened the door." },
    { rank: 4, team: "Show Me Your Tet", movement: "▲ 5", blurb: "A 204.75 eruption forces the entire league to reconsider Derric." },
    { rank: 5, team: "Cooking Up Collusion", movement: "▲ 1", blurb: "Five straight scoring wins and another convincing 2–0 week." },
    { rank: 6, team: "Team PatSmear", movement: "▼ 1", blurb: "156.90 would usually win; the reigning champion remains dangerous." },
    { rank: 7, team: "Drake It Till You Make It", movement: "▲ 4", blurb: "The 161.95 loss was cruel, but the lineup finally showed its ceiling." },
    { rank: 8, team: "Let’s Cut to the Chase", movement: "▼ 4", blurb: "Two straight scoring losses erase much of the Week 3 escape." },
    { rank: 9, team: "Colonel Corn", movement: "▼ 1", blurb: "Six straight scoring losses have Johnny in a full emergency." },
    { rank: 10, team: "RI Lion’s", movement: "▼ 3", blurb: "Four straight losses and a 102.50-point week deepen the slide." },
    { rank: 11, team: "The Price Is Right", movement: "▲ 1", blurb: "Two consecutive matchup wins show life despite the 2–6 record." },
    { rank: 12, team: "Brown Rice", movement: "▼ 2", blurb: "The week’s lowest score sends Dave Jr. to the bottom." }
  ],
  panicMeter: [
    { team: "Colonel Corn", level: "Critical", score: 5, detail: "Six consecutive scoring losses after opening 2–0." },
    { team: "Brown Rice", level: "Severe", score: 4, detail: "Four straight losses, 84.10 points and last place." },
    { team: "RI Lion’s", level: "Severe", score: 4, detail: "Four straight losses and another bottom-three weekly score." },
    { team: "Let’s Cut to the Chase", level: "Rising", score: 3, detail: "Two straight losses and seventh place after the Week 3 escape." },
    { team: "The Price Is Right", level: "Cautious", score: 2, detail: "Two matchup wins in a row, but neither cleared the median." }
  ],
  awards: [
    { label: "Manager of the Week", winner: "Stefan Balestra", detail: "195.95 from London, a 39.05-point win over the champion and the league PF lead." },
    { label: "High Score", winner: "Derric Vigeant", detail: "The season’s first 200-point performance: 204.75." },
    { label: "Player of the Week", winner: "Tetairoa McMillan", detail: "49.20 points on 14 catches, 192 yards and two touchdowns." },
    { label: "Cruelest Defeat", winner: "Dave Campbell Sr.", detail: "Scored 161.95—the week’s third-best total—and lost by 42.80." },
    { label: "Champion’s Fight", winner: "Pat Brown", detail: "CeeDee Lamb scored 45.30 and Pat reached 156.90 in defeat." },
    { label: "Bench Crime", winner: "Nico Erausquin", detail: "Joe Burrow’s 35.00 sat behind Jared Goff during a 38.30-point loss." },
    { label: "Lowest in Victory", winner: "Nate Watson", detail: "Won with 111.65 but surrendered the perfect scoring record." },
    { label: "Panic Button", winner: "Johnny No", detail: "Colonel Corn has lost six consecutive scoring decisions." }
  ],
  leaders: [
    { position: "QB", player: "Jared Goff", team: "RI Lion’s", points: 35.60 },
    { position: "RB", player: "Kenneth Walker", team: "Cooking Up Collusion", points: 36.90 },
    { position: "WR", player: "Tetairoa McMillan", team: "Show Me Your Tet", points: 49.20 },
    { position: "TE", player: "T.J. Hockenson", team: "Show Me Your Tet", points: 28.90 },
    { position: "DEF", player: "Los Angeles Rams", team: "Team PatSmear", points: 21.00 }
  ],
  history: []
},{
  slug: "2026-week-03", issueNumber: 3, season: 2026, week: "Week 3", date: "September 29, 2026",
  median: "124.225",
  kicker: "Year XVI · Week Three · Median Line 124.225",
  headline: "The Great Escape",
  deck: "Jon Naval beats RI Lion’s by 0.55—and clears the weekly median by an even thinner 0.275—to steal a perfect 2–0 week.",
  hero: "/issues/2026-week-03/the-great-escape.png",
  heroAlt: "Vintage sports illustration of a baby-faced football runner escaping through a narrow opening as an orange lion gives chase",
  caption: "Two escapes, each by less than a point: Let’s Cut to the Chase survived RI Lion’s 124.50–123.95 and edged the 124.225 median. Chronicle illustration inspired by the clubs’ baby and lion imagery.",
  lead: [
    "Jon Naval did not merely win in Week 3. He escaped twice. Let’s Cut to the Chase slipped past RI Lion’s 124.50–123.95, the closest matchup of the season, then cleared the 124.225 weekly median by only 0.275. A few tenths of a point separated a 2–0 week from a split—or something worse.",
    "Dak Prescott scored 24.70, Ja’Marr Chase added 24.80 and Kyren Williams delivered 21.80. Those three performances were just enough to overcome Jared Goff’s 26.05 and Harold Fannin’s 24.10 for Nico Erausquin. Even Green Bay’s minus-two defense could not finish Jon off.",
    "The double escape lifted Jon to 4–2 and fourth place, completing a remarkable two-week recovery from his 96.95-point opening disaster. Nico fell to 2–4 despite missing the median by only 0.275 himself. In the league’s new scoring system, the narrowest margins can alter two results at once."
  ],
  quote: "Half a point won the matchup. Half of that cleared the median.", quoteBy: "The Chronicle sports desk",
  stories: [
    { section: "Unbeaten Watch", headline: "Perfect Six", body: "Nate Watson remained the league’s only perfect club, beating Taylor Park Boys 163.30–151.15 in the week’s highest-scoring matchup. Gibbs Me Her Kittle moved to 6–0 and leads the league with 469.85 points. Stefan Balestra lost despite producing the second-highest score of Week 3, but the median win limited the damage to a 1–1 week." },
    { section: "Cruelty Department", headline: "151.15 and Still a Loss", body: "Taylor Park Boys would have beaten ten of eleven possible opponents. Instead, Stefan drew Nate’s league-high 163.30. The 314.45 combined points were the most in any Week 3 matchup, and Stefan’s 151.15 was the highest losing score of the week." },
    { section: "Injury Ward", headline: "Achane Lost for the Season", body: "Jake Brierly improved to 5–1 with a 142.90–112.15 win over Show Me Your Tet, but the victory carried a severe cost: De’Von Achane tore his left ACL after scoring 1.70 and is out for the season. Achanesaw Massacre now has to replace a cornerstone while protecting second place." },
    { section: "Photo Finish", headline: "Darren Dethrones the Champ", body: "Cooking Up Collusion survived defending champion Team PatSmear 148.25–144.00. Brock Purdy’s 40.25 and a balanced backfield gave Darren Aglione a 2–0 week. Pat Brown posted the fourth-highest score and still lost, salvaging only the median point." },
    { section: "Basement Breakthrough", headline: "The Price Finally Is Right", body: "Anthony Innamorati earned his first head-to-head win, 117.10–103.90 over Colonel Corn. Brock Bowers erupted for 31.60 and Minnesota’s defense added 29.00. The score remained below the median, leaving Anthony 1–5 rather than 2–4." },
    { section: "Family Business", headline: "Dave Sr. Wins the Campbell Bowl", body: "Drake It Till You Make It beat Brown Rice 119.55–114.60 behind Bijan Robinson’s 41.30 and Matthew Golden’s 25.00. Dave Campbell Jr. left Sam Darnold’s 39.45 on the bench and lost by 4.95. Neither side reached the median." },
    { section: "Transaction Desk", headline: "Giants Turn to McCarthy", body: "With Jaxson Dart undergoing season-ending knee surgery, the Giants acquired quarterback J.J. McCarthy from Minnesota for a 2027 fifth-round pick. The move matters most to Johnny No, who had Dart on his bench, while Jameis Winston remains the immediate starter." },
    { section: "Health Watch", headline: "Injuries Hit Colonel Corn", body: "Johnny’s lineup absorbed ankle and rib injuries to Justin Jefferson and Mike Evans. Anthony also lost Breece Hall to a quad injury and Jalen Coker to a quad strain. Early reports offered more optimism for Jefferson, Evans and Coker than for Achane, but Week 4 availability remains unsettled." }
  ],
  briefs: [
    { headline: "Four clubs sweep", body: "Nate, Jake, Darren and Jon each won both the head-to-head matchup and the median result." },
    { headline: "Jon’s double razor", body: "The Chase won by 0.55 and beat the median by 0.275. Nico lost the same two decisions by those exact margins." },
    { headline: "Bench warrant", body: "Dave Jr. started Bo Nix’s 28.00 while Sam Darnold scored 39.45 on the bench. Pat left Matthew Stafford’s 34.80 behind Lamar Jackson’s 24.30." },
    { headline: "Quarterback injuries linger", body: "Jaxson Dart’s season is over after knee surgery, while Caleb Williams and Jayden Daniels remain part of the wider quarterback availability story." }
  ],
  results: [
    { away: "Gibbs Me Her Kittle", awayScore: 163.30, home: "Taylor Park Boys", homeScore: 151.15, note: "Week-high score · 314.45 combined" },
    { away: "Cooking Up Collusion", awayScore: 148.25, home: "Team PatSmear", homeScore: 144.00, note: "Both cleared the median" },
    { away: "Achanesaw Massacre", awayScore: 142.90, home: "Show Me Your Tet", homeScore: 112.15, note: "Largest margin · 30.75" },
    { away: "Let’s Cut to the Chase", awayScore: 124.50, home: "RI Lion’s", homeScore: 123.95, note: "Closest game · Jon clears median by 0.275" },
    { away: "Drake It Till You Make It", awayScore: 119.55, home: "Brown Rice", homeScore: 114.60, note: "Campbell Bowl · 4.95" },
    { away: "The Price Is Right", awayScore: 117.10, home: "Colonel Corn", homeScore: 103.90, note: "Anthony’s first head-to-head win" }
  ],
  standings: [
    [1,"Gibbs Me Her Kittle","6–0",469.85,383.45],[2,"Achanesaw Massacre","5–1",448.90,334.95],[3,"Taylor Park Boys","4–2",438.30,379.55],[4,"Let’s Cut to the Chase","4–2",378.60,423.35],[5,"Team PatSmear","3–3",420.35,480.30],[6,"Cooking Up Collusion","3–3",405.15,425.50],[7,"RI Lion’s","2–4",409.90,432.65],[8,"Colonel Corn","2–4",405.99,413.05],[9,"Show Me Your Tet","2–4",398.60,397.40],[10,"Brown Rice","2–4",368.15,404.70],[11,"Drake It Till You Make It","2–4",352.75,369.95],[12,"The Price Is Right","1–5",331.90,383.60]
  ].map(([rank,team,record,points,pointsAgainst]) => ({rank:rank as number,team:team as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number})),
  rankings: [
    { rank: 1, team: "Gibbs Me Her Kittle", blurb: "The lone 6–0 club also owns the league’s best Week 3 score and most total points." },
    { rank: 2, team: "Achanesaw Massacre", blurb: "Jake is 5–1, but Achane’s ACL tear creates the season’s biggest roster test." },
    { rank: 3, team: "Taylor Park Boys", blurb: "A 151.15-point loss says more about the opponent than Stefan’s lineup." },
    { rank: 4, team: "Let’s Cut to the Chase", blurb: "Four straight scoring wins and the week’s most improbable double escape." },
    { rank: 5, team: "Team PatSmear", blurb: "The defending champion has 420.35 points despite a .500 record." }
  ],
  awards: [
    { label: "Manager of the Week", winner: "Jon Naval", detail: "Won by 0.55, cleared the median by 0.275 and escaped Week 3 with two victories." },
    { label: "High Score", winner: "Nate Watson", detail: "163.30 points, another sweep and the league’s only 6–0 record." },
    { label: "Cruelest Defeat", winner: "Stefan Balestra", detail: "Scored 151.15—second-most in the league—and lost by 12.15." },
    { label: "Biggest Blowout", winner: "Jake Brierly", detail: "Beat Show Me Your Tet by 30.75 despite losing Achane during the game." },
    { label: "Player of the Week", winner: "Bijan Robinson", detail: "41.30 points powered Dave Sr. to victory in the Campbell Bowl." },
    { label: "Bench Crime", winner: "Dave Campbell Jr.", detail: "Sam Darnold scored 39.45 on the bench in a 4.95-point loss." },
    { label: "First Taste of Victory", winner: "Anthony Innamorati", detail: "The Price Is Right earned its first matchup win behind Bowers and Minnesota." },
    { label: "Injury Misfortune", winner: "Johnny No", detail: "Justin Jefferson and Mike Evans both left with injuries in the same defeat." }
  ],
  leaders: [
    { position: "QB", player: "Brock Purdy", team: "Cooking Up Collusion", points: 40.25 },
    { position: "RB", player: "Bijan Robinson", team: "Drake It Till You Make It", points: 41.30 },
    { position: "WR", player: "Jaxon Smith-Njigba", team: "Show Me Your Tet", points: 39.50 },
    { position: "TE", player: "Brock Bowers", team: "The Price Is Right", points: 31.60 },
    { position: "DEF", player: "Minnesota", team: "The Price Is Right", points: 29.00 }
  ],
  history: []
},{
  slug: "2026-week-02", issueNumber: 2, season: 2026, week: "Week 2", date: "September 22, 2026",
  median: "134.575",
  kicker: "Year XVI · Week Two · Median Line 134.575",
  headline: "The Lion’s Share",
  deck: "Nico Erausquin roars to the week’s highest score, 159.05, and beats Colonel Corn even after Josh Allen drops 48.30.",
  hero: "/issues/2026-week-02/lions-share.png",
  heroAlt: "Editorial illustration of an orange lion defeating a golden ear of corn beneath stadium lights",
  caption: "RI Lion’s claimed the week’s high score in a 159.05–127.20 victory over Colonel Corn. Chronicle illustration using the clubs’ lion and corn imagery as references.",
  lead: [
    "One week after Jake Brierly welcomed him to the A League with a 54.05-point defeat, Nico Erausquin changed his team name, changed the picture and changed the conversation. RI Lion’s led all twelve clubs with 159.05 points and beat Colonel Corn by 31.85.",
    "Johnny No had the week’s most spectacular individual performance: Josh Allen scored 48.30. Yet the rest of Colonel Corn’s lineup could not keep pace, leaving Johnny at 127.20, below the 134.575 median. One extraordinary quarterback was not enough against the newly promoted club’s complete win.",
    "Nico climbed from 0–2 to 2–2 with both the head-to-head victory and the median point. The result knocked Colonel Corn from an unbeaten opening week to 2–2. It was a reminder that the promoted class came to challenge the establishment, not simply fill out its schedule."
  ],
  quote: "Allen gave the Corn 48.30. The Lion still took the whole field.", quoteBy: "The Chronicle sports desk",
  stories: [
    { section: "Rebound Report", headline: "Cut to the Comeback", body: "A week after posting the league’s lowest score and leaving Tyler Shough’s 40.30 on the bench, Jon Naval answered with 157.15—the second-highest total of Week 2. Let’s Cut to the Chase beat defending champion Pat Brown’s 139.45 by 17.70. Both clubs cleared the median, leaving Jon and Pat at 2–2." },
    { section: "Unbeaten Watch", headline: "Nate Alone at the Top", body: "Gibbs Me Her Kittle beat Cooking Up Collusion 146.60–135.35. Patrick Mahomes supplied 41.80 as Nate Watson earned another head-to-head and median sweep. The newly promoted Midwesterner is the league’s only 4–0 club after two weeks; Darren lost the matchup but cleared the median for a 1–3 overall mark." },
    { section: "Close Call", headline: "Brown Rice Wins by 3.80", body: "Dave Campbell Jr. took the week’s closest game, 135.60–131.80, over Derric Vigeant’s newly renamed Show Me Your Tet. Christian McCaffrey scored 22.60 for Brown Rice. Dave also beat the median; Derric missed it. Both clubs now stand 2–2." },
    { section: "Commissioner’s Corner", headline: "Massacre Wins Ugly", body: "Jake Brierly followed his 180.95-point Week 1 fireworks with just 125.05, but The Price Is Right managed only 95.90. Achanesaw Massacre secured the head-to-head win while losing to the median. Anthony Innamorati, whose roster included Jayden Daniels, fell to 0–4 under the two-result scoring system." },
    { section: "Colts Desk", headline: "Taylor Park Boys Survive the Shakeup", body: "Stefan Balestra beat Drake It Till You Make It 133.80–98.30 behind Jonathan Taylor’s 29.20, Chris Olave’s 22.60 and Rashod Bateman’s 21.80. Dave Sr. got an enormous 30.00 from the Patriots defense, but Stefan’s 35.50-point margin survived it. Both teams finished below the median, splitting the two-result week for Stefan and dropping Dave Sr. to 1–3." },
    { section: "Transaction Wire", headline: "The Defense Carousel", body: "Nate claimed San Francisco’s defense in place of Pittsburgh, then added Atlanta later in the week. Stefan claimed Tampa Bay’s defense, which contributed 10.00 to his win. Jake swapped Minnesota for Carolina. A busy waiver wire supplied talking points, though no single claim should be credited with a result it did not produce." }
  ],
  briefs: [
    { headline: "New names, new standings", body: "Derric is now Show Me Your Tet; Nico is RI Lion’s; Dave Sr. is Drake It Till You Make It. Week 1 retains the original team names in the permanent archive." },
    { headline: "The median squeeze", body: "Darren and Pat both lost their games but scored above 134.575, earning a median win. Stefan and Jake won their games below the line, splitting their week." },
    { headline: "Health watch", body: "Caleb Williams scored only 9.10 in Stefan’s starting lineup and left the Bears game hurt. Puka Nacua’s absence affected the Week 2 player pool. Availability for Week 3 remains a developing story; managers should consult official injury reports." }
  ],
  results: [
    { away: "RI Lion’s", awayScore: 159.05, home: "Colonel Corn", homeScore: 127.20, note: "Week-high score · Josh Allen 48.30 in defeat" },
    { away: "Let’s Cut to the Chase", awayScore: 157.15, home: "Team PatSmear", homeScore: 139.45, note: "Jon’s bounce-back" },
    { away: "Gibbs Me Her Kittle", awayScore: 146.60, home: "Cooking Up Collusion", homeScore: 135.35, note: "Nate moves to 4–0" },
    { away: "Brown Rice", awayScore: 135.60, home: "Show Me Your Tet", homeScore: 131.80, note: "Closest game · 3.80" },
    { away: "Taylor Park Boys", awayScore: 133.80, home: "Drake It Till You Make It", homeScore: 98.30, note: "35.50-point margin" },
    { away: "Achanesaw Massacre", awayScore: 125.05, home: "The Price Is Right", homeScore: 95.90, note: "Both below median" }
  ],
  standings: [
    [1,"Gibbs Me Her Kittle","4–0",306.55,232.30],[2,"Achanesaw Massacre","3–1",306.00,222.80],[3,"Taylor Park Boys","3–1",287.15,216.25],[4,"Colonel Corn","2–2",302.10,295.95],[5,"Show Me Your Tet","2–2",286.45,254.50],[6,"RI Lion’s","2–2",285.95,308.15],[7,"Team PatSmear","2–2",276.35,332.05],[8,"Let’s Cut to the Chase","2–2",254.10,299.40],[9,"Brown Rice","2–2",253.55,285.15],[10,"Cooking Up Collusion","1–3",256.90,281.50],[11,"Drake It Till You Make It","1–3",233.20,255.35],[12,"The Price Is Right","0–4",214.80,279.70]
  ].map(([rank,team,record,points,pointsAgainst]) => ({rank:rank as number,team:team as string,record:record as string,points:points as number,pointsAgainst:pointsAgainst as number})),
  rankings: [
    { rank: 1, team: "Gibbs Me Her Kittle", blurb: "The only unbeaten club, with a league-leading 306.55 points through two weeks." },
    { rank: 2, team: "Achanesaw Massacre", blurb: "The Week 1 eruption carries Jake through a modest Week 2 win." },
    { rank: 3, team: "RI Lion’s", blurb: "The week’s top score turned an 0–2 debut into a 2–2 resurgence." },
    { rank: 4, team: "Taylor Park Boys", blurb: "Three wins from four possible results despite a below-median Week 2." },
    { rank: 5, team: "Let’s Cut to the Chase", blurb: "157.15 against the defending champion is a convincing course correction." }
  ],
  awards: [
    { label: "Manager of the Week", winner: "Nico Erausquin", detail: "League-high 159.05, a 31.85-point win and a 2–0 week." },
    { label: "Unbeaten Standard", winner: "Nate Watson", detail: "146.60 this week and the league’s lone 4–0 record." },
    { label: "Comeback of the Week", winner: "Jon Naval", detail: "From 96.95 in Week 1 to 157.15 and a win over Pat." },
    { label: "Cruelest Defeat", winner: "Johnny No", detail: "Josh Allen scored 48.30, but Colonel Corn lost by 31.85." },
    { label: "Narrow Escape", winner: "Dave Campbell Jr.", detail: "Brown Rice beat Derric by just 3.80." },
    { label: "Defense in Vain", winner: "Dave Campbell Sr.", detail: "The Patriots defense supplied 30.00 in a 35.50-point loss." },
    { label: "Median Lifeline", winner: "Pat Brown and Darren Aglione", detail: "Each lost the matchup but earned a median win." },
    { label: "Basement Watch", winner: "Anthony Innamorati", detail: "The Price Is Right is the league’s only 0–4 team." }
  ],
  leaders: [
    { position: "QB", player: "Josh Allen", team: "Colonel Corn", points: 48.30 },
    { position: "RB", player: "Jonathan Taylor", team: "Taylor Park Boys", points: 29.20 },
    { position: "WR", player: "Chris Olave", team: "Taylor Park Boys", points: 22.60 },
    { position: "TE", player: "Trey McBride", team: "Drake It Till You Make It", points: 18.10 },
    { position: "DEF", player: "New England", team: "Drake It Till You Make It", points: 30.00 }
  ],
  history: []
},{
  slug: "2026-week-01", issueNumber: 1, season: 2026, week: "Week 1", date: "September 15, 2026",
  median: "135.90",
  kicker: "Year XVI · Opening Week · Median Line 135.90",
  headline: "Massacre at the Farm",
  deck: "Jake Brierly opens the league’s 16th season with 180.95 points, the week’s high score and an unmistakable warning to the other eleven clubs.",
  hero: "/issues/2026-week-01/monday-night-miracle.png",
  heroAlt: "Vintage newspaper-style illustration of a football receiver making a dramatic catch under stadium lights",
  caption: "Achanesaw Massacre did not ease into Year 16. Jake Brierly’s 180.95 led the league by 6.05 points. Chronicle illustration.",
  lead: [
    "There are opening statements, and then there are declarations of war. Commissioner and three-time champion Jake Brierly supplied the latter, hanging 180.95 points on newly promoted Team Neeks927 in the highest-scoring performance of Week 1.",
    "Trevor Lawrence threw in 32.55, Zay Flowers delivered 30.00, Dallas Goedert added 23.70 and Christian Watson detonated for 36.70 from the flex. The result was a 54.05-point rout and an immediate 2–0 start under the league’s head-to-head-plus-median scoring system.",
    "Nico Erausquin’s debut was not without fight. D’Andre Swift scored 36.40, Amon-Ra St. Brown added 28.70 and Parker Washington supplied 19.30. But against a lineup that posted 180.95, respectable became irrelevant. The champion’s chair belongs to Pat Brown; after one week, the loudest challenger has already kicked in the door."
  ],
  quote: "One week does not win a title. It can, however, make twelve group-chat members pay attention.",
  quoteBy: "The Chronicle editorial board",
  stories: [
    { section: "Disaster Desk", headline: "Cut to the Bench", body: "Jon Naval’s club produced the week’s low score, 96.95, while 40.30 points from Tyler Shough sat unused behind Dak Prescott’s 18.15. Kyle Pitts added a zero. The Giants fan has seen this movie before; he simply did not expect to direct it." },
    { section: "Title Watch", headline: "Colonel Corn Dethrones the Champ", body: "Johnny No beat reigning champion Pat Brown 174.90–136.90 behind Josh Allen’s 49.00, Justin Jefferson’s 31.20 and Chuba Hubbard’s 23.70. Pat still cleared the median for a 1–1 week, but his title defense opened with a direct hit." },
    { section: "Promotion Watch", headline: "B League Invades: Newcomers Go 3–1", body: "Nate Watson, Derric Vigeant and Dave Campbell Sr. all won their A League debuts; only Nico Erausquin fell. Nate’s 159.95 and 63-point demolition made the loudest case that promotion was not merely ceremonial." },
    { section: "Local Cuisine", headline: "Wieners Served Hot: Derric Cooks the Price", body: "Derric Vigeant arrived from Johnston, Rhode Island, with 154.65 points and no concern for Anthony Innamorati’s résumé. Jalen Hurts, Jaxon Smith-Njigba and Nico Collins drove a 35.75-point win over The Price Is Right." },
    { section: "Self-Sabotage", headline: "Collusion Against Himself", body: "Darren Aglione lost the week’s closest game, 134.90–121.55, while leaving Dalton Kincaid’s 22.00 and the Chiefs defense’s 24.00 on the bench. Sleeper calculated a league-low 69.6% lineup efficiency and 53 unused points." },
    { section: "Quiet Precision", headline: "Brown Rice Wins the Efficiency Crown", body: "Dave Campbell Jr. lost to Stefan Balestra, but set the cleanest lineup: 117.95 of a possible 123.75, good for 95.3%. Isaiah Likely’s 27.80 and Jacksonville’s 20.00 kept the margin respectable." }
  ],
  briefs: [
    { headline: "Nate announces himself", body: "Gibbs Me Her Kittle posted 159.95 as Jahmyr Gibbs, Derrick Henry and Pittsburgh’s defense combined for 100.90." },
    { headline: "Stefan starts 2–0", body: "Caleb Williams scored 43.95 and Chris Olave 32.20 as Taylor Park Boys beat Brown Rice 153.35–117.95." },
    { headline: "Dave Sr. survives", body: "The new arrival scored only 134.90—one point below the median—but beat Darren by 13.35 for a split 1–1 record." }
  ],
  results: [
    { away: "Achanesaw Massacre", awayScore: 180.95, home: "Team Neeks927", homeScore: 126.90, note: "Week-high score" },
    { away: "Colonel Corn", awayScore: 174.90, home: "Team PatSmear", homeScore: 136.90, note: "Champion upset" },
    { away: "Gibbs Me Her Kittle", awayScore: 159.95, home: "Let’s Cut to the Chase", homeScore: 96.95, note: "Biggest blowout · 63.00" },
    { away: "Team derricvigeant", awayScore: 154.65, home: "The Price Is Right", homeScore: 118.90, note: "Promoted winner" },
    { away: "Taylor Park Boys", awayScore: 153.35, home: "Brown Rice", homeScore: 117.95 },
    { away: "Team DaveCampbellSr", awayScore: 134.90, home: "Cooking Up Collusion", homeScore: 121.55, note: "Closest game · 13.35" }
  ],
  standings: [
    [1,"Achanesaw Massacre","2–0",180.95,126.90],[2,"Colonel Corn","2–0",174.90,136.90],[3,"Gibbs Me Her Kittle","2–0",159.95,96.95],[4,"Team derricvigeant","2–0",154.65,118.90],[5,"Taylor Park Boys","2–0",153.35,117.95],[6,"Team PatSmear","1–1",136.90,174.90],[7,"Team DaveCampbellSr","1–1",134.90,121.55],[8,"Team Neeks927","0–2",126.90,180.95],[9,"Cooking Up Collusion","0–2",121.55,134.90],[10,"The Price Is Right","0–2",118.90,154.65],[11,"Brown Rice","0–2",117.95,153.35],[12,"Let’s Cut to the Chase","0–2",96.95,159.95]
  ].map(([rank,team,record,points,pointsAgainst]) => ({ rank: rank as number, team: team as string, record: record as string, points: points as number, pointsAgainst: pointsAgainst as number })),
  rankings: [
    { rank: 1, team: "Achanesaw Massacre", blurb: "The three-time champ supplied the week’s best score and deepest starting lineup." },
    { rank: 2, team: "Colonel Corn", blurb: "Josh Allen’s 49 points powered a statement win over the reigning champion." },
    { rank: 3, team: "Gibbs Me Her Kittle", blurb: "A promoted roster with two 37-point backs and a 24-point defense." },
    { rank: 4, team: "Team derricvigeant", blurb: "Three receivers above 21 points made the transition to A League look easy." },
    { rank: 5, team: "Taylor Park Boys", blurb: "Caleb Williams and Chris Olave covered a few soft spots with fireworks." }
  ],
  awards: [
    { label: "Manager of the Week", winner: "Jake Brierly", detail: "180.95 points, 93.6% efficiency and the season’s first front page." },
    { label: "Overachiever", winner: "Achanesaw Massacre", detail: "Beat its 127.45 starter projection by 53.50 points." },
    { label: "Underachiever", winner: "Jon Naval", detail: "Finished 37.78 below projection and 63 points behind Nate." },
    { label: "Bench Crime", winner: "Darren Aglione", detail: "Left 53.00 points unused, including Kincaid and Kansas City." },
    { label: "Highest in Defeat", winner: "Pat Brown", detail: "Scored 136.90, cleared the median and still lost to Colonel Corn." },
    { label: "Lowest in Victory", winner: "Dave Campbell Sr.", detail: "Won with 134.90, exactly one point short of the weekly median." },
    { label: "Most Efficient", winner: "Dave Campbell Jr.", detail: "Brown Rice captured 95.3% of its 123.75-point maximum." },
    { label: "Biggest Blowout", winner: "Nate Watson", detail: "Beat Jon Naval by 63.00 points in his A League debut." }
  ],
  leaders: [
    { position: "QB", player: "Josh Allen", team: "Colonel Corn", points: 49.00 },
    { position: "RB", player: "Kenneth Walker", team: "Cooking Up Collusion", points: 40.10 },
    { position: "WR", player: "Jalen Coker", team: "The Price Is Right", points: 37.80 },
    { position: "TE", player: "Isaiah Likely", team: "Brown Rice", points: 27.80 },
    { position: "DEF", player: "Pittsburgh", team: "Gibbs Me Her Kittle", points: 24.00 }
  ],
  history: [
    { manager: "Jake Brierly", club: "Achanesaw Massacre", titles: "3", playoffs: "13", note: "5 runner-up finishes · 5 No. 1 seeds" },
    { manager: "Stefan Balestra", club: "Taylor Park Boys", titles: "2", playoffs: "12", note: "85.7% playoff rate · 2 No. 1 seeds" },
    { manager: "Jon Naval", club: "Let’s Cut to the Chase", titles: "2", playoffs: "4", note: "Eight seasons in A League" },
    { manager: "Pat Brown", club: "Team PatSmear", titles: "1", playoffs: "—", note: "Reigning 2025 champion" },
    { manager: "Anthony Innamorati", club: "The Price Is Right", titles: "1", playoffs: "4", note: "One runner-up · one No. 1 seed" },
    { manager: "Darren Aglione", club: "Cooking Up Collusion", titles: "0", playoffs: "5", note: "One No. 1 seed · one points crown" },
    { manager: "Johnny No", club: "Colonel Corn", titles: "0", playoffs: "2", note: "Perfect playoff rate entering 2026" },
    { manager: "Dave Campbell Jr.", club: "Brown Rice", titles: "0", playoffs: "2", note: "One highest-points season" }
  ]
}];

export const currentIssue = issues[0];
export const getIssue = (slug: string) => issues.find((issue) => issue.slug === slug);
