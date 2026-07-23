const scenarios = [
	{
		tag: "Milestone post",
		text: "\u201cThrilled to announce I'm joining [Company] this fall — grateful to everyone who supported me along the way.\u201d",
		verdict: "ok",
		title: "Reads as appropriate",
		body: "This hits three of the four rules at once: it's career-relevant, polished, and shares credit with mentors instead of centering the poster alone. Participants called this the \u201cstereotypical\u201d LinkedIn post — common enough to feel almost scripted, but safe.",
	},
	{
		tag: "Personal reflection",
		text: "\u201cI just went through a breakup, and here's what it taught me about resilience.\u201d",
		verdict: "risky",
		title: "Feels too personal — but it depends",
		body: "Participants flagged posts like this as risky by default, because the topic isn't obviously career-related. But the same story could \u201cpass\u201d if it clearly translated the experience into a professional lesson — the emotional content alone isn't the problem; disconnection from work is.",
	},
	{
		tag: "Test score",
		text: "\u201cProud to share I scored a 1560 on my SAT!\u201d",
		verdict: "risky",
		title: "Reads as oversharing",
		body: "One participant called this \u201cpretty personal\u201d — not because it's emotional, but because it felt unnecessary to disclose publicly and didn't offer value to anyone else reading it. Usefulness to the audience matters as much as the topic itself.",
	},
	{
		tag: "Career advice",
		text: "\u201c3 things I wish I knew before my first internship.\u201d",
		verdict: "ok",
		title: "Reads as appropriate",
		body: "This is the clearest \u201cuseful\u201d post: it's framed entirely around helping other people, which participants consistently rewarded. Even personal missteps become acceptable once they're repackaged as a lesson for the reader.",
	},
	{
		tag: "Casual life update",
		text: "\u201cJust adopted a puppy \ud83d\udc36 best day ever!\u201d",
		verdict: "risky",
		title: "Feels out of place",
		body: "Not embarrassing or sensitive — just off-topic. Several participants said LinkedIn should stay strictly \u201cpurpose-driven,\u201d and content with zero professional relevance, even happy content, can read as not knowing the room.",
	},
	{
		tag: "Vulnerable failure story",
		text: "\u201cI got rejected from 40 internships before landing this one. Here's what changed.\u201d",
		verdict: "ok",
		title: "Reads as appropriate",
		body: "This is the study's key finding in miniature: a vulnerable, even embarrassing topic becomes acceptable the moment it's framed as useful and tied to a career narrative. \u201cToo personal\u201d isn't about the topic — it's about whether the disclosure earns its place.",
	},
];

const rqToggle = document.getElementById("rq-toggle");
const rqPanel = document.getElementById("detail-rq");
rqToggle.addEventListener("click", () => {
	const isOpen = rqPanel.classList.toggle("open");
	rqToggle.setAttribute("aria-expanded", String(isOpen));
	rqToggle.innerHTML = isOpen
		? '<span class="caret">▸</span> Show less'
		: '<span class="caret">▸</span> Research Questions';
});

const methodToggle = document.getElementById("method-toggle");
const methodPanel = document.getElementById("detail-method");
methodToggle.addEventListener("click", () => {
	const isOpen = methodPanel.classList.toggle("open");
	methodToggle.setAttribute("aria-expanded", String(isOpen));
	methodToggle.innerHTML = isOpen
		? '<span class="caret">▸</span> Show less'
		: '<span class="caret">▸</span> Interview protocol';
});

const grid = document.getElementById("quizGrid");
const panel = document.getElementById("verdict-panel");

scenarios.forEach((s, i) => {
	const el = document.createElement("div");
	el.className = "scenario";
	el.innerHTML = `<span class="tag">${s.tag}</span>${s.text}`;
	el.addEventListener("click", () => {
		document.querySelectorAll(".scenario").forEach((c) => c.classList.remove("selected"));
		el.classList.add("selected");
		const badgeClass = s.verdict === "ok" ? "ok" : "risky";
		const badgeText = s.verdict === "ok" ? "\u2713 Generally reads OK" : "\u26a0 Reads as risky";
		panel.innerHTML = `<span class="verdict-badge ${badgeClass}">${badgeText}</span>
        <h4 style="margin:6px 0 8px;">${s.title}</h4>
        <p style="margin-bottom:0; color:var(--ink-soft);">${s.body}</p>`;
	});
	grid.appendChild(el);
});
