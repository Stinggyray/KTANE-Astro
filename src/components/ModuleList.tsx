import profiles, {
	type TranscodedItem,
	type TranscodedProfile,
} from "../json/profiles.ts";
import { useState } from "react";

interface Props {
	profile: TranscodedProfile;
	view: string;
	optimized: boolean;
	linksInNewTab: boolean;
}
const ModuleList = (props: Props) => {
	const { view, optimized, linksInNewTab } = props;
	const { name, profile: initialProfile, gradient } = props.profile;

	const [query, setQuery] = useState("");
	const [centurion, setRawCenturion] = useState(
		window.localStorage.getItem("centurion") === "true"
	);

	const setCenturion = (toSet: boolean) => {
		window.localStorage.setItem("centurion", toSet.toString());
		setRawCenturion(toSet);
	};

	const [showGlobalSearch, setShowGlobalSearch] = useState(false);

	let profile = centurion
		? initialProfile.filter((module: TranscodedItem) => module.centurion)
		: initialProfile;

	if (query) {
		profile = profile.filter((module: TranscodedItem) =>
			module.moduleName.toLowerCase().includes(query.toLowerCase())
		);
	}

	return (
		<div id="{{name}}" className="mb-5">
			<div
				className={`w-11/12 mx-auto mx-5 my-2 rounded-lg bg-gradient-to-r px-5 py-2 ${gradient} mt-5 grid grid-flow-col grid-cols-[1fr_auto] items-center`}
			>
				<h1 className="text-2xl font-semibold">{name}</h1>
				<p className="text-lg font-normal" id="shown-length">
					{profile.length} module{profile.length === 1 ? "" : "s"}
				</p>
			</div>
			<div
				className={`w-11/12 mt-3 mx-auto rounded-lg bg-gray-700 p-5 grid ${
					showGlobalSearch ? "grid-cols-[1fr_2fr]" : "grid-cols-1"
				}`}
			>
				{showGlobalSearch && <div></div>}
				<div className={showGlobalSearch ? "" : "w-5/6 mx-auto"}>
					<div className="mb-4 flex w-full gap-4">
						<div className="relative flex-grow">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								className="block w-full p-2 ps-10 text-sm rounded-lg border-2 bg-gray-700 border-gray-500
							placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-none"
								placeholder="Filter current modules..."
								onChange={(e) => setQuery(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										if (profile.length === 1) {
											if (linksInNewTab) {
												window
													.open(
														`/${optimized ? profile[0].manualLink : profile[0].originalManualLink}.html`,
														"_blank"
													)
													?.focus();
											} else {
												window.location.href = `/${optimized ? profile[0].manualLink : profile[0].originalManualLink}.html`;
											}
										}
									}
								}}
							/>
						</div>
						<button
							onClick={() => setCenturion(!centurion)}
							id="centurion-only"
							className={`rounded-lg px-3 ${
								centurion
									? "bg-green-400 text-black"
									: "bg-gray-800 text-gray-400"
							}`}
						>
							Centurion Only
						</button>
					</div>
					<ul className={`profile-list ${view}`}>
						{profile.map((module) => (
							<li className={`module`} key={module.moduleName}>
								<div className="flex content-center items-center">
									<img
										className="icon mr-2"
										src={`icons/${module.iconName}.png`}
										alt={`${module.moduleName} icon`}
									/>
									<a
										href={`/${optimized ? module.manualLink : module.originalManualLink}.html`}
										target={
											linksInNewTab ? "_blank" : "_self"
										}
										className={`page-link font-medium ${
											module.manualLink ===
												module.originalManualLink ||
											!optimized
												? "text-gray-300"
												: "text-green-300"
										}`}
									>
										{module.moduleName}
									</a>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default ModuleList;
