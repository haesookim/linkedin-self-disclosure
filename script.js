const scenarios = [
	{
		tag: "Milestone post",
		text: "\u201cThrilled to announce I'm joining [Company] this fall — grateful to everyone who supported me along the way.\u201d",
		verdict: "ok",
		title: "Reads as professional",
		body: "This hits three of the four rules at once: it's career-relevant, polished, and shares credit with mentors instead of centering the poster alone. This could be called the \u201cstereotypical\u201d LinkedIn post — common enough to feel almost scripted, but safe and professional while avoiding any risks.",
	},
	{
		tag: "Personal reflection",
		text: "\u201cI just went through a breakup, and here's what it taught me about resilience.\u201d",
		verdict: "risky",
		title: "May be too personal — but it depends",
		body: "Posts about personal experiences, such as relationships, are often considered risky by default. The topic isn't obviously career-related, but the same story could be considered professional if it clearly translates the experience into a professional lesson. Here, we can see the emotional content alone isn't the problem, but rather the disconnection from work is.",
	},
	{
		tag: "Test score",
		text: "\u201cProud to share I scored a 1560 on my SAT!\u201d",
		verdict: "risky",
		title: "Reads as unprofessional",
		body: "This is an example of a post that could be considered 'too personal' and not 'professional' enough. While the post content isn't emotional, information about your personal achievements or exam scores feel unnecessary. Even moreso, it doesn't really offer value to anyone else reading it. Usefulness to the audience matters as much as the topic itself. Some ways to improve this post would be to focus on what you can share with the audience (study tips? lessons learned?) as well as making sure you are seen as humble even while you highlight your achivements.",
	},
	{
		tag: "Career advice",
		text: "\u201c3 things I wish I knew before my first internship.\u201d",
		verdict: "ok",
		title: "Reads as professional",
		body: "This post provides a clear \u201cusefulness\u201d to its readers: it's framed entirely around helping other people, which was consistently considered as professional behavior. Even personal missteps become acceptable once they're repackaged as a lesson for the reader. Even better, it could be seen as genuine as you share your own hardships and failures.",
	},
	{
		tag: "Casual life update",
		text: "\u201cJust adopted a puppy \ud83d\udc36 best day ever!\u201d",
		verdict: "risky",
		title: "Feels out of place",
		body: "This is a post that isn't really embarrassing or sensitive, however, on LinkedIn, where most people are focused on professional communication, this could just feel off-topic. It is often recommended to make sure your LinkedIn content stays professionally relevant, and content with zero professional relevance, even happy content, can read as not knowing the room.",
	},
	{
		tag: "Vulnerable failure story",
		text: "\u201cI got rejected from 40 internships before landing this one. Here's what changed.\u201d",
		verdict: "ok",
		title: "Reads as professional",
		body: "This is a vulnerable, even embarrassing story to share. Quantifying your failures and owning up to it is a show of your shortsomings. However, in the LinkedIn environment, this becomes acceptable as it gets framed as useful and tied to a career narrative. \u201cToo personal\u201d isn't about the topic — it's about whether the disclosure earns its place.",
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
		const badgeText =
			s.verdict === "ok" ? "\u2713 Reads Professional" : "\u26a0 Could be Too Personal";
		panel.innerHTML = `<span class="verdict-badge ${badgeClass}">${badgeText}</span>
        <h4 style="margin:6px 0 8px;">${s.title}</h4>
        <p style="margin-bottom:0; color:var(--ink-soft);">${s.body}</p>`;
	});
	grid.appendChild(el);
});
