// Kerala map — metadata: tiers, religion, analysis, overrides

const GROWTH_TIERS = [
  { min: -Infinity, max: -10000, color: '#1e3a5f', label: '< −10,000 votes'         },
  { min: -10000,    max: -3000,  color: '#3b6d9e', label: '−10,000 to −3,000'       },
  { min: -3000,     max:  3000,  color: '#4a4a4a', label: '−3,000 to +3,000 (flat)' },
  { min:  3000,     max:  8000,  color: '#fde68a', label: '+3,000 to +8,000'         },
  { min:  8000,     max:  15000, color: '#f97c16', label: '+8,000 to +15,000'        },
  { min:  15000,    max:  25000, color: '#d94f00', label: '+15,000 to +25,000'       },
  { min:  25000,    max:  Infinity, color: '#7f1900', label: '> +25,000 votes'       },
];

const RELIGION = {
  'MALAPPURAM':        { h11:27.60, m11:70.24, c11:1.98,  h26:25.1, m26:73.2, c26:1.7  },
  'KOZHIKODE':         { h11:56.21, m11:39.24, c11:4.26,  h26:53.8, m26:42.1, c26:4.1  },
  'KASARAGOD':         { h11:55.84, m11:37.24, c11:6.74,  h26:53.2, m26:40.5, c26:6.3  },
  'WAYANAD':           { h11:49.48, m11:28.65, c11:21.34, h26:47.1, m26:31.8, c26:20.1 },
  'KANNUR':            { h11:59.83, m11:29.43, c11:10.41, h26:57.5, m26:32.4, c26:10.1 },
  'PALAKKAD':          { h11:66.76, m11:28.93, c11:4.21,  h26:64.3, m26:31.7, c26:4.0  },
  'ERNAKULAM':         { h11:45.99, m11:15.67, c11:38.03, h26:44.1, m26:18.2, c26:37.7 },
  'THRISSUR':          { h11:58.42, m11:17.07, c11:24.27, h26:56.1, m26:20.3, c26:23.6 },
  'KOLLAM':            { h11:64.42, m11:19.30, c11:16.00, h26:62.2, m26:22.4, c26:15.4 },
  'THIRUVANANTHAPURAM':{ h11:66.46, m11:13.72, c11:19.10, h26:64.5, m26:16.8, c26:18.7 },
  'ALAPPUZHA':         { h11:68.64, m11:10.55, c11:20.45, h26:66.8, m26:13.5, c26:19.7 },
  'KOTTAYAM':          { h11:49.81, m11:6.41,  c11:43.48, h26:48.2, m26:8.8,  c26:43.0 },
  'IDUKKI':            { h11:48.86, m11:7.41,  c11:43.42, h26:47.4, m26:10.1, c26:42.5 },
  'PATHANAMTHITTA':    { h11:56.93, m11:4.60,  c11:38.12, h26:55.1, m26:7.2,  c26:37.7 },
};

const REL_COLORS = {
  hindu:     ['#fff3e0','#ffcc80','#ffa726','#f57c00','#e65100'],
  muslim:    ['#e8f5e9','#a5d6a7','#4caf50','#2e7d32','#1b5e20'],
  christian: ['#e3f2fd','#90caf9','#2196f3','#1565c0','#0d2a6b'],
};

const SPECIFIC_ANALYSES = {
  135: { tag:'won', points:["Rajeev Chandrasekhar (BJP) defeated sitting CPI(M) minister V. Sivankutty by 4,978 votes — a hard-fought win reclaiming the seat BJP had lost to Sivankutty in 2021.","INC's Sabarinadhan (29,730 votes) split the anti-LDF vote but BJP's Hindu-Nair consolidation and Chandrasekhar's national profile outpolled Sivankutty (52,214) in a three-cornered contest.","Anti-incumbency against Sivankutty's tenure as Education Minister and the Sabarimala gold-theft controversy mobilised Hindu voters decisively behind NDA."]},
  132: { tag:'won', points:["V. Muraleedharan (BJP) won Kazhakoottam by the wafer-thin margin of just 428 votes over CPI(M)'s Kadakampally Surendran — the closest NDA win of the election, with the lead changing multiple times during counting.","INC's Sarathchandra Prasad (37,183) split the anti-LDF vote significantly; without the three-cornered contest, Surendran may well have held the seat.","Muraleedharan's national profile as former Union Minister and strong RSS ground mobilisation in this IT-corridor constituency ultimately tipped the balance."]},
  126: { tag:'won', points:["B.B. Gopakumar (BJP) won Chathannoor by 4,398 votes over CPI's Adv. R. Rajendran — a narrow but significant win and BJP's biggest raw vote surge (+18,724 from 2016) statewide.","Kollam's Ezhava-OBC communities shifted toward NDA following the deepening SNDP Yogam–BJP alliance, which mobilised fishing and coir-belt workers against LDF's trade union dominance.","Anti-LDF agrarian distress, youth unemployment, and the Sabarimala gold-theft controversy consolidated the non-UDF protest vote squarely behind BJP in this Kollam seat."]},
  1:   { tag:'hold', points:["K. Surendran's home base; NDA's strongest single seat in Kerala with ~36% vote share across three cycles.","Kasaragod's mixed Hindu-Muslim demography keeps NDA vote share plateaued — minority consolidation limits further upside despite RSS dominance in Hindu pockets.","Flat vote-share growth (+0.2 pp since 2016) despite +10,915 raw votes reflects the electorate growing at the same pace as NDA's base."]},
  101: { tag:'gain', points:["P.C. George (NDA) ran here but the FCRA amendment controversy weeks before polling triggered a mass Church-directed swing to UDF.","Bishop Joseph Kallarangatt of Pala diocese and other Catholic leaders publicly opposed the FCRA bill, directing the flock toward UDF.","Despite the institutional backlash, raw votes grew by +16,206 — suggesting a residual Jacobite/Protestant minority still backed NDA's candidate quality."]},
  93:  { tag:'gain', points:["Shone George (BJP state VP) contested here; UDF swept all 9 Kottayam seats despite NDA growing its raw vote total.","FCRA amendment crisis united the Malankara Orthodox Syrian Church, Syro-Malankara Catholic and CSI factions behind UDF, reversing NDA's 2016–21 Christian inroads.","NDA Christian leaders accused Church heads of 'ditching' them and directing votes to UDF, highlighting the institutional vs. grassroots split."]},
  96:  { tag:'loss', points:["Catastrophic −14,565 vote drop (−10.3 pp) — sharpest share decline in Kottayam. The FCRA amendment crisis was devastating here.","INC's Nattakom Suresh won with 64,077 votes, defeating LDF minister V.N. Vasavan by 19,752 — the scale of UDF consolidation left no space for NDA.","Syro-Malankara and Malankara Orthodox Syrian Church influence is particularly strong in Ettumanoor, making Church electoral direction decisive."]},
  91:  { tag:'loss', points:["Largest absolute NDA vote collapse statewide: −17,993 votes (−12.1 pp). Idukki is a deeply Christian tribal-plantation district.","FCRA amendments triggered existential fears in plantation-church communities that depend heavily on foreign-funded social infrastructure.","The Archdiocese of Changanassery and Kottayam bishops' coordinated opposition proved overwhelmingly effective in directing Christian votes to UDF."]},
  90:  { tag:'loss', points:["−16,166 votes (−11.9 pp) — Idukki's plantation belt constituency. Wayanad-Idukki Christian farmers heavily dependent on church networks mobilised solidly for UDF.","FCRA amendment debate made foreign-funded church charities and educational institutions a live electoral threat, turning previously NDA-sympathetic Christian voters.","Tribal-Christian voter bloc that had partially backed NDA in 2016 returned to UDF fold under Church direction in 2026."]},
  106: { tag:'loss', points:["Kuttanad's paddy-farmer belt saw a −16,112 vote NDA collapse, driven by agrarian distress and Catholic Christian voter consolidation behind UDF.","The Latin Catholic Church and Jacobite network in Kuttanad's backwater settlements came out strongly for UDF after the FCRA controversy.","Unlike 2016 when NDA held ~25% share, the 2026 UDF wave in this Christian-plurality constituency left little room for a third-place NDA."]},
  110: { tag:'loss', points:["−11,740 votes in this NDA-leaning Ezhava-OBC seat. Chengannur by-election (2018) saw BJP second here — the 2026 erosion signals Ezhava attrition.","SNDP Yogam's BJP alliance held some Ezhava votes but UDF's strong organisational push eroded NDA's 2016 gains.","Anti-incumbency against LDF did not translate to NDA gains here as UDF successfully positioned itself as the primary alternative."]},
  84:  { tag:'gain', points:["Largest absolute NDA gain statewide: +23,762 votes, share doubling from 11.2% to 25.0%. SC-reserved constituency saw dramatic NDA swing.","BJP's outreach to Dalit communities through welfare schemes and Scheduled Caste-specific manifesto commitments resonated strongly.","LDF's perceived neglect of SC interests in allocation of plum posts despite decades of support created an opening NDA exploited effectively."]},
  107: { tag:'gain', points:["+18,037 votes (share 8.7%→21.4%) — one of NDA's sharpest gains, in a constituency dominated by Latin Catholics and Ezhavas.","SNDP-BJP alliance successfully mobilised Ezhava fishing and coir communities who felt economically marginalised under LDF rule.","Growing NDA organisational presence in Alappuzha's backwater belts, aided by a locally credible candidate, overcame earlier structural weakness."]},
  125: { tag:'loss', points:["−9,245 votes despite Kollam district trends: suggests a weak or unpopular NDA candidate compared to 2016's stronger showing.","UDF swept Eravipuram driven by Nair-community backlash against BJP's perceived failure to deliver on NSS promises and the Sabarimala controversy narrative.","Vote consolidation behind a strong UDF candidate drew away both anti-LDF and caste-community votes that NDA had relied on in 2016."]},
  69:  { tag:'loss', points:["−10,353 votes in Thrissur's Kaipamangalam — NDA's worst Thrissur drop. Heavy Latin Christian presence here shifted fully to UDF post-FCRA controversy.","Thrissur district saw significant split: Hindu-belt segments showed NDA gains while Christian-belt segments like Kaipamangalam collapsed.","Candidate quality and organisational neglect in this specific seat likely compounded the district-wide FCRA headwind."]},
  95:  { tag:'loss', points:["SC-reserved seat in Kottayam; −9,770 votes as the FCRA-driven UDF consolidation swept through the entire district regardless of segment.","Even Dalit-SC voter outreach by NDA was overwhelmed by UDF's sweeping Kottayam performance (winning all 9 seats in the district).","NDA's Kottayam meltdown was structural — P.C. George and Shone George's Church links could not override the institutional Church direction to UDF."]},
};

const ALLIANCE_OVERRIDE = {6:'ldf',8:'udf',14:'other',20:'other',85:'udf',93:'udf',105:'udf',134:'other'};
