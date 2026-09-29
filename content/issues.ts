export type Result = { away: string; awayScore: number; home: string; homeScore: number; note?: string };
export type Standing = { rank: number; team: string; record: string; points: number; pointsAgainst: number };
export type HistoryRow = { manager: string; club: string; titles: string; playoffs: string; note: string };
export type Issue = {
  slug: string; issueNumber: number; season: number; week: string; date: string;
  median: string;
  kicker: string; headline: string; deck: string; hero: string; heroAlt: string; caption: string;
  lead: string[]; quote: string; quoteBy: string;
  stories: { section: string; headline: string; body: string }[];
  briefs: { headline: string; body: string }[];
  results: Result[]; standings: Standing[];
  rankings: { rank: number; team: string; blurb: string }[];
  awards: { label: string; winner: string; detail: string }[];
  leaders: { position: string; player: string; team: string; points: number }[];
  history: HistoryRow[];
};

export const issues: Issue[] = [{
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
