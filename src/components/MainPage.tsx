import { useEffect, useState } from "react";

import profiles, { names } from "../json/profiles.ts";
import phrases from "../json/phrases.json";
import ModuleList from "./ModuleList.tsx";

const MainPage = () => {
	const phraseCount = phrases.length;
	const [phrase, setPhrase] = useState("");
	const [activeUser, setActiveUser] = useState("Sting");
	const [view, setView] = useState("compact");
	const [optimized, setOptimized] = useState(true);
	const [linksInNewTab, setLinksInNewTab] = useState(true);

	useEffect(() => {
		setPhrase(phrases[Math.floor(Math.random() * phraseCount)]);
	}, []);

	return (
		<>
			<div className="w-11/12 flex mx-auto my-5 rounded-lg bg-gray-700 px-5 py-5">
				<div className="flex-col flex-none">
					<img
						src="/img/logo.png"
						alt="Bootleg Repository of Manual Pages"
						className="h-40 mb-4"
					/>
					<div className="flex h-20">
						<p
							className="text-white self-end overflow-wrap w-80 flex-grow leading-snug"
							dangerouslySetInnerHTML={{
								__html: phrase,
							}}
						></p>
					</div>
				</div>
				<div className="border-2 border-gray-800 mx-5"></div>
				<div className="flex flex-col w-full h-60 mr-2">
					<div className="grid gap-y-2 gap-x-3 grid-cols-5 grid-flow-row flex-none mb-4">
						{Object.entries(profiles).map(([id, profile]) => (
							<button
								onClick={() => setActiveUser(id)}
								key={profile.name}
								className={`hover:shadow-lg block px-3 w-30 text-black flex-1 py-1.5 font-semibold
								text-center rounded-md bg-gradient-to-r ${profile.gradient}`}
							>
								{profile.name}
							</button>
						))}
					</div>
					<div className="flex flex-grow"></div>
					<div className="flex flex-row text-gray-400 flex-none">
						<div className="flex flex-col flex-1">
							<h2 className="font-bold">View Mode</h2>
							<button
								onClick={() => setView("orderly")}
								id="orderly"
								className={`mt-2 py-1.5 rounded-md w-2/3 ${
									view === "orderly"
										? "bg-green-400 text-black"
										: "bg-gray-800"
								}`}
							>
								Orderly
							</button>
							<button
								onClick={() => setView("compact")}
								id="compact"
								className={`mt-2 py-1.5 rounded-md w-2/3 ${
									view === "compact"
										? "bg-green-400 text-black"
										: "bg-gray-800"
								}`}
							>
								Compact
							</button>
						</div>
						<div className="flex-col flex-1">
							<h2 className="font-bold">Manual Pages</h2>
							<button
								onClick={() => setOptimized(true)}
								id="optimized"
								className={`mt-2 py-1.5 rounded-md w-2/3 ${
									optimized
										? "bg-green-400 text-black"
										: "bg-gray-800"
								}`}
							>
								Optimized
							</button>
							<button
								onClick={() => setOptimized(false)}
								id="original"
								className={`mt-2 py-1.5 rounded-md w-2/3 ${
									!optimized
										? "bg-green-400 text-black"
										: "bg-gray-800"
								}`}
							>
								Original
							</button>
						</div>
						<div className="flex-col flex-1">
							<h2 className="font-bold">Open Links In</h2>
							<button
								onClick={() => setLinksInNewTab(true)}
								id="optimized"
								className={`mt-2 py-1.5 rounded-md w-2/3 ${
									linksInNewTab
										? "bg-green-400 text-black"
										: "bg-gray-800"
								}`}
							>
								New Tab
							</button>
							<button
								onClick={() => setLinksInNewTab(false)}
								id="original"
								className={`mt-2 py-1.5 rounded-md w-2/3 ${
									!linksInNewTab
										? "bg-green-400 text-black"
										: "bg-gray-800"
								}`}
							>
								This Tab
							</button>
						</div>
					</div>
				</div>
			</div>
			<ModuleList
				profile={profiles[activeUser]}
				view={view}
				optimized={optimized}
				linksInNewTab={linksInNewTab}
			/>
		</>
	);
};
export default MainPage;
