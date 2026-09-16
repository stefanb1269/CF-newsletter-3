export type Result = { away: string; awayScore: number; home: string; homeScore: number; note?: string };
export type Standing = { rank: number; team: string; record: string; points: number; pointsAgainst: number };
export type HistoryRow = { manager: string; club: string; titles: string; playoffs: string; note: string };
export type Issue = {
  slug: string; issueNumber: number; season: number; week: string; date: string;
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
  slug: "2026-week-01", issueNumber: 1, season: 2026, week: "Week 1", date: "September 15, 2026",
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
