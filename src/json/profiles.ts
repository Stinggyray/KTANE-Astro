import sting from "./profiles/Sting.json";
import yoshi from "./profiles/Yoshi.json";
import emma from "./profiles/Emma.json";
import crim from "./profiles/Crim.json";
import flaw from "./profiles/Flaw.json";
import terp from "./profiles/Terp.json";
import victoria from "./profiles/Victoria.json";
import bones from "./profiles/Bones.json";
import jessie from "./profiles/Jessie.json";
import kylerAndVince from "./profiles/Kyler_and_Vince.json";

import centurion from "./profiles/Centurion.json";
import vanillas from "./profiles/Vanilla.json";

import modules from "./modules.json";

const baseNameChanges: Record<string, string> = {
	"Morse Code Translated": "Morse Code all languages condensed (S.)",
	"Passwords Translated": "Password all languages condensed (S.)",
	"Venting Gas Translated": "Venting Gas all languages condensed (S.)",
	"Who's on First Translated": "Who's on First all languages condensed (S.)",
	"Who's That Monsplode?": "Who's That Monsplode",
};
const altIcons: Record<string, string> = {
	"Passwords Translated": "Password",
	"Big Button Translated": "The Button",
	"Who's on First Translated": "Who's on First",
	"Morse Code Translated": "Morse Code",
	"Venting Gas Translated": "Venting Gas",
	"Who's That Monsplode?": "Who's That Monsplode",
};
const altNames: Record<string, string> = {
	"Big Button Translated": "The Button Translated",
};
const universalAltManuals: Record<string, string> = {
	"3D Maze": "3D Maze optimized (Stinggyray)",
	"Adjacent Letters": "Adjacent Letters lookup table (samfundev & Elias)",
	"Adventure Game": "Adventure Game condensed (samfundev)",
	"Algebra": "Algebra condensed (Stinggyray)",
	"Alphabet": "Alphabet optimized (Nanthelas)",
	"Astrology": "Astrology lookup table (Elias & samfundev)",
	"Backgrounds": "Backgrounds condensed (ZekNikZ)",
	"Big Button Translated": "The Button lookup table (Timwi)",
	"Big Circle": "Big Circle condensed (Stinggyray)",
	"Binary LEDs": "Binary LEDs embellished (ZekNikZ)",
	"Bitmaps": "Bitmaps condensed (Stinggyray)",
	"Bitwise Operations": "Bitwise Operations condensed (LeGeND)",
	"Blind Alley": "Blind Alley condensed (Timwi)",
	"Blind Maze": "Blind Maze interactive (samfundev)",
	"Boolean Venn Diagram": "Boolean Venn Diagram interactive (samfundev)",
	"Broken Buttons": "Broken Buttons condensed (Freelancer1025, Stinggyray)",
	"Cheap Checkout": "Cheap Checkout optimized (Timwi)",
	"Chess": "Chess optimized (Timwi)",
	"Chord Qualities": "Chord Qualities optimized (Timwi)",
	"Color Generator": "Color Generator lookup table (Timwi)",
	"Colored Squares": "Colored Squares colored (samfundev)",
	"Colour Flash": "Colour Flash optimized (Stinggyray)",
	"Combination Lock": "Combination Lock condensed (Stinggyray)",
	"Complicated Buttons": "Complicated Buttons optimized (Timwi)",
	"Connection Check": "Connection Check optimized (Elias)",
	"Cooking": "Cooking condensed (Lebossle)",
	"Coordinates": "Coordinates optimized (Blananas2)",
	"Crazy Talk": "Crazy Talk alphabetized (Timwi)",
	"Creation": "Creation lookup table (JakkOfKlubs & Stinggyray)",
	"Cryptography": "Cryptography optimized (Nanthelas & samfundev & Lebossle)",
	"Double-Oh": "Double-Oh embellished (samfundev)",
	"English Test": "English Test optimized (Timwi)",
	"Fast Math": "Fast Math condensed (Stinggyray)",
	"Festive Piano Keys": "Festive Piano Keys optimized (JakkOfKlubs)",
	"Flags": "Flags colored (JakkOfKlubs)",
	"Follow the Leader": "Follow the Leader condensed (Nanthelas)",
	"Foreign Exchange Rates": "Foreign Exchange Rates optimized (Timwi)",
	"Friendship": "Friendship rearranged (samfundev, Stinggyray)",
	"Hexamaze": "Hexamaze interactive (samfundev)",
	"Ice Cream": "Ice Cream lookup table (Timwi)",
	"LED Encryption": "LED Encryption lookup table (JakkOfKlubs)",
	"Laundry": "Laundry condensed (Stinggyray)",
	"Letter Keys": "Letter Keys lookup table (Timwi)",
	"Listening": "Listening interactive (samfundev)",
	"Logic": "Logic optimized (Stinggyray)",
	"Mafia": "Mafia optimized (Timwi)",
	"Memory": "Memory condensed (Timwi)",
	"Microcontroller": "Microcontroller optimized (Elias)",
	"Minesweeper": "Minesweeper condensed (Stinggyray)",
	"Monsplode, Fight!": "Monsplode, Fight! colored",
	"Morsematics": "Morsematics optimized (samfundev)",
	"Neutralization": "Neutralization lookup table (Timwi)",
	"Number Pad": "Number Pad lookup table (CaitSith2)",
	"Orientation Cube": "Orientation Cube optimized (CaitSith2)",
	"Perplexing Wires": "Perplexing Wires lookup table (ZekNikZ)",
	"Perspective Pegs": "Perspective Pegs condensed (Stinggyray)",
	"Piano Keys": "Piano Keys embellished (Rexkix)",
	"Plumbing": "Plumbing condensed (Timwi)",
	"Prime Encryption": "Prime Encryption lookup table (Eltrick)",
	"Probing": "Probing condensed (Stinggyray)",
	"Resistors": "Resistors condensed (Nanthelas)",
	"Rhythms": "Rhythms optimized (samfundev)",
	"Rock-Paper-Scissors-Lizard-Spock":
		"Rock-Paper-Scissors-Lizard-Spock embellished (Rexkix)",
	"Round Keypad": "Round Keypad embellished (Stinggyray)",
	"Rubik's Cube": "Rubik's Cube lookup table (Katarina)",
	"Safety Safe": "Safety Safe condensed (samfundev & Stinggyray)",
	"Sea Shells": "Sea Shells lookup table (JakkOfKlubs)",
	"Semaphore": "Semaphore optimized (Nanthelas)",
	"Silly Slots": "Silly Slots optimized (WhiteShadowZz)",
	"Simon Screams": "Simon Screams condensed fixed (samfundev)",
	"Simon States": "Simon States condensed (Nanthelas)",
	"Skewed Slots": "Skewed Slots optimized (Timwi)",
	"Square Button": "Square Button optimized (Timwi)",
	"Switches": "Switches lookup table (Stinggyray)",
	"Text Field": "Text Field optimized (Timwi)",
	"The Bulb": "The Bulb lookup table (Elias)",
	"The Festive Jukebox": "The Festive Jukebox optimized (Timwi)",
	"The Gamepad": "The Gamepad lookup table (Timwi)",
	"The Jukebox": "The Jukebox optimized (Timwi)",
	"The Screw": "The Screw condensed (JakkOfKlubs)",
	"Third Base": "Third Base alphabetized (Timwi)",
	"Tic Tac Toe": "Tic Tac Toe optimized (samfundev)",
	"Turn The Keys": "Turn The Keys optimized (Timwi)",
	"Two Bits": "Two Bits optimized (Nanthelas)",
	"Waste Management": "Waste Management in code form (Timwi & Stinggyray)",
	"Web Design": "Web Design optimized (samfundev)",
	"Who's That Monsplode?": "Who's That Monsplode colored",
	"Wire Placement": "Wire Placement embellished (Timwi)",
	"Word Search": "Word Search lookup table (Elias)",
	"Zoo": "Zoo embellished (samfundev)",
};
const stingAltManuals: Record<string, string> = {};
const yoshiAltManuals: Record<string, string> = {
	"Perplexing Wires": "Perplexing Wires",
	"Piano Keys": "Piano Keys condensed (LeGeND)",
	"Logic": "Logic optimized (LeGeND)",
};
const emmaAltManuals: Record<string, string> = {};
const psAltManuals: Record<string, string> = {};
const flawAltManuals: Record<string, string> = {};
const vanillasAltManuals: Record<string, string> = {
	"Complicated Wires": "Complicated Wires optimized (Stinggyray)",
	"The Button": "The Button lookup table (Timwi)",
	"Morse Code": "Morse Code optimized (Timwi)",
	"Password": "Password optimized (Timwi)",
	"Wire Sequence": "Wire Sequence colored (Timwi)",
	"Wires": "Wires optimized (Timwi)",
	"Who's on First": "Who's on First alphabetized (Timwi)",
};

const victoriaAltManuals: Record<string, string> = {};
const crimAltManuals: Record<string, string> = {};
const terpAltManuals: Record<string, string> = {};
const kylerAltManuals: Record<string, string> = {};
const bonesAltManuals: Record<string, string> = {};
const jessieAltManuals: Record<string, string> = {};

const profiles: {
	[key: string]: {
		name: string;
		profile: Profile;
		altManuals: Record<string, string>;
		gradient: string;
	};
} = {
	Sting: {
		name: "Sting",
		profile: sting as Profile,
		altManuals: stingAltManuals,
		gradient: "from-red-500 to-yellow-600",
	},
	Yoshi: {
		name: "Yoshi",
		profile: yoshi as Profile,
		altManuals: yoshiAltManuals,
		gradient: "from-yellow-600 to-yellow-300",
	},
	Emma: {
		name: "Emma",
		profile: emma as Profile,
		altManuals: emmaAltManuals,
		gradient: "from-yellow-300 to-green-400",
	},
	Crim: {
		name: "Crim",
		profile: crim as Profile,
		altManuals: crimAltManuals,
		gradient: "from-green-400 to-green-300",
	},
	Flaw: {
		name: "Flaw",
		profile: flaw as Profile,
		altManuals: flawAltManuals,
		gradient: "from-green-300 to-sky-400",
	},
	Terp: {
		name: "Terpage",
		profile: terp as Profile,
		altManuals: terpAltManuals,
		gradient: "from-sky-400 to-blue-400",
	},
	Victoria: {
		name: "Victoria",
		profile: victoria as Profile,
		altManuals: victoriaAltManuals,
		gradient: "from-blue-400 to-fuchsia-400",
	},
	Bones: {
		name: "Bones",
		profile: bones as Profile,
		altManuals: bonesAltManuals,
		gradient: "from-fuchsia-400 to-purple-400",
	},
	Jessie: {
		name: "Jessie",
		profile: jessie as Profile,
		altManuals: jessieAltManuals,
		gradient: "from-purple-400 to-violet-500",
	},
	KylerAndVince: {
		name: "Vincler",
		profile: kylerAndVince as Profile,
		altManuals: kylerAltManuals,
		gradient: "from-violet-500 to-indigo-400",
	},
	Centurion: {
		name: "Centurion",
		profile: centurion as Profile,
		altManuals: {},
		gradient: "from-gray-400 to-gray-500",
	},
	Vanillas: {
		name: "Vanillas",
		profile: vanillas as Profile,
		altManuals: vanillasAltManuals,
		gradient: "from-gray-500 to-gray-600",
	},
};

export interface TranscodedItem {
	moduleName: string;
	manualLink: string;
	iconName: string;
	originalManualLink: string;
	centurion: boolean;
	pageExists: boolean;
}

interface Profile {
	EnabledList: (keyof typeof modules)[];
	DisabledList: (keyof typeof modules)[];
}

interface Modules {
	[key: string]: string;
}

const getRaw = (s: string) => {
	return s.replace(/^The /, "").trim();
};

let centurionList = JSON.parse(JSON.stringify(centurion.EnabledList));
centurionList = new Set(
	centurionList
		.map((s: keyof typeof modules) => modules[s])
		.sort((a: string, b: string) => {
			function getRaw(s: string) {
				return s.replace(/^The /, "").trim();
			}

			return getRaw(a).localeCompare(getRaw(b));
		})
);
const transcodeProfile = (
	profile: Profile,
	altManuals: Record<string, string>
) => {
	const enabledList = profile.EnabledList.map(
		(s: keyof typeof modules) => modules[s]
	).sort((a, b) => {
		return getRaw(a).localeCompare(getRaw(b));
	});

	const newConstructedList: TranscodedItem[] = [];

	enabledList.forEach((entry: string) => {
		let newEntry: TranscodedItem = {
			moduleName: altNames[entry] ?? entry,
			manualLink:
				altManuals[entry] ??
				universalAltManuals[entry] ??
				baseNameChanges[entry] ??
				entry,
			iconName: altIcons[entry] ?? entry,
			originalManualLink: baseNameChanges[entry] ?? entry,
			centurion: centurionList.has(entry),
			pageExists: true,
		};
		newConstructedList.push(newEntry);
	});

	return newConstructedList;
};

export interface TranscodedProfile {
	name: string;
	profile: TranscodedItem[];
	gradient: string;
}

const profilesTranscoded: Record<string, TranscodedProfile> =
	Object.fromEntries(
		Object.entries(profiles).map(
			([key, { name, profile, altManuals, gradient }]) => {
				return [
					key,
					{
						name,
						profile: transcodeProfile(profile, altManuals),
						gradient,
					},
				];
			}
		)
	);

export default profilesTranscoded;

export const names = [
	"Sting",
	"Yoshi",
	"Emma",
	"Vanillas",
	"Flaw",
	"Victoria",
	"Crim",
	"Terp",
	"KylerAndVince",
	"Centurion",
	"Bones",
	"Jessie",
];
