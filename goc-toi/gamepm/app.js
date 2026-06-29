const VERSION = "0.1.7-web";

const events = {
  small_feature: {
    type: "Decision Needed",
    title: "Just One Small Feature",
    context:
      "The Product Owner asks to add export-to-Excel during the current sprint. They say it should be tiny and that the client will love it.",
    clues: [
      "The Engineering Lead looks uncomfortable.",
      "QA has not reviewed the request.",
      "The sponsor is not in the room.",
    ],
    choices: [
      {
        label: "Accept it into this sprint.",
        consequence:
          "The Product Owner is pleased, but the team absorbs unplanned work without impact analysis.",
        stats: {
          stakeholder_trust: 8,
          schedule: -12,
          team_morale: -8,
          scope_stability: -12,
          risk_exposure: 10,
        },
        hidden: { qa_blind_spot: 1, scope_creep_seeded: 1 },
        followUp: "regression_surprise",
      },
      {
        label: "Ask the team to estimate impact first.",
        consequence:
          "The room slows down, but engineering surfaces integration and QA concerns before commitment.",
        stats: {
          schedule: -4,
          quality: 6,
          scope_stability: 10,
          team_morale: 5,
          risk_exposure: -8,
        },
        hidden: { risk_visibility: 1, team_confidence: 1 },
        followUp: "risk_early",
      },
      {
        label: "Put it in the post-launch backlog.",
        consequence:
          "Delivery focus improves, though the Product Owner worries the demo may feel weaker.",
        stats: {
          value: -4,
          schedule: 7,
          scope_stability: 12,
          team_morale: 6,
          stakeholder_trust: -5,
          risk_exposure: -4,
        },
        hidden: { change_control_respected: 1, delivery_focus_protected: 1 },
        followUp: "risk_early",
      },
    ],
  },
  regression_surprise: {
    type: "Risk Alert",
    title: "Regression Surprise",
    context:
      "QA finds that the export work changed report formatting in an older workflow.",
    clues: [
      "The change skipped impact analysis.",
      "QA was pulled in after implementation.",
      "The team is context-switching under pressure.",
    ],
    choices: [
      {
        label: "Pause feature work and stabilize the build.",
        consequence: "Quality recovers, but the schedule takes a visible hit.",
        stats: { schedule: -8, quality: 12, team_morale: -3, risk_exposure: -10 },
        hidden: { recovery_mode: 1 },
      },
      {
        label: "Ship it and patch later.",
        consequence: "You protect the date today while increasing delivery risk.",
        stats: { schedule: 5, quality: -14, stakeholder_trust: -8, risk_exposure: 14 },
        hidden: { technical_debt: 1 },
      },
    ],
  },
  risk_early: {
    type: "Opportunity",
    title: "Engineering Flags a Risk Early",
    context:
      "Because the team had room to assess the request, Engineering flags a reporting dependency before implementation starts.",
    clues: [
      "The risk is visible while options are still cheap.",
      "QA can plan a focused test pass.",
      "The Product Owner understands the trade-off earlier.",
    ],
    choices: [
      {
        label: "Add a thin export spike before committing.",
        consequence: "The team learns enough to make a clean scope decision.",
        stats: { value: 5, schedule: -4, quality: 8, team_morale: 7, risk_exposure: -12 },
        hidden: { validated_learning: 1 },
      },
      {
        label: "Document the risk and defer the feature.",
        consequence: "The project keeps momentum and the decision record earns trust later.",
        stats: { schedule: 8, scope_stability: 9, stakeholder_trust: 4, risk_exposure: -8 },
        hidden: { decision_record: 1 },
      },
    ],
  },
};

const labels = {
  value: "Value",
  schedule: "Schedule",
  budget: "Budget",
  quality: "Quality",
  scope_stability: "Scope Stability",
  team_morale: "Team Morale",
  stakeholder_trust: "Stakeholder Trust",
  risk_exposure: "Risk Exposure",
};

const state = {
  screen: "dashboard",
  week: 1,
  stats: {
    value: 50,
    schedule: 50,
    budget: 50,
    quality: 50,
    scope_stability: 50,
    team_morale: 50,
    stakeholder_trust: 50,
    risk_exposure: 50,
  },
  hidden: {},
  inbox: [
    {
      type: "Decision Needed",
      title: "Just One Small Feature",
      from: "Product Owner",
      signal: "Client wants export-to-Excel in the current sprint.",
      eventId: "small_feature",
      mustRespond: true,
      status: "Open",
    },
    {
      type: "FYI",
      title: "Engineering Capacity Note",
      from: "Engineering Lead",
      signal: "Team can help, but needs clear trade-offs before promises.",
      eventId: "",
      mustRespond: false,
      status: "Unread",
    },
  ],
  decisions: [],
  pendingFollowUp: "",
  activeEventId: "",
};

const $ = (selector) => document.querySelector(selector);
const content = $("#content");

function blockerCount() {
  return state.inbox.filter((item) => item.mustRespond).length;
}

function setScreen(screen) {
  state.screen = screen;
  document.querySelectorAll(".tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screen);
  });
  render();
}

function render() {
  $("#screen-title").textContent = titleFor(state.screen);
  $("#week-value").textContent = state.week;
  $("#blocker-value").textContent = blockerCount();
  $("#continue-button").disabled = blockerCount() > 0;
  content.innerHTML = "";
  if (state.screen === "dashboard") renderDashboard();
  if (state.screen === "inbox") renderInbox();
  if (state.screen === "health") renderHealth();
  if (state.screen === "decisions") renderDecisions();
}

function titleFor(screen) {
  return {
    dashboard: "Dashboard",
    inbox: "Inbox",
    health: "Project Health",
    decisions: "Decision Log",
  }[screen];
}

function renderDashboard() {
  content.append(
    card(
      "Next Required Action",
      nextActionText(),
      "Open Inbox",
      () => setScreen("inbox"),
      true
    ),
    card(
      "Milestone Timeline",
      "Week 1: Scope pressure\nWeek 2: Planning check\nWeek 4: Demo Review",
      "Review Health",
      () => setScreen("health"),
      true
    ),
    card(
      "Visible Risks",
      `Scope creep pressure: Rising\nRisk exposure: ${state.stats.risk_exposure}/100`,
      "Open Health",
      () => setScreen("health"),
      true
    ),
    card(
      "Stakeholder Signals",
      "Product Owner: eager for demo value\nEngineering Lead: wants impact analysis",
      "Open Inbox",
      () => setScreen("inbox"),
      true
    )
  );
}

function renderInbox() {
  state.inbox.forEach((item) => {
    const el = document.createElement("article");
    el.className = "inbox-item";
    el.innerHTML = `
      <span class="badge ${item.mustRespond ? "must" : ""}">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.signal}</p>
      <small>From: ${item.from}</small>
    `;
    if (item.eventId) {
      const button = document.createElement("button");
      button.className = "card-button";
      button.textContent = item.mustRespond ? "Respond" : "Review Again";
      button.addEventListener("click", () => openEvent(item.eventId));
      el.append(button);
    }
    content.append(el);
  });
}

function renderHealth() {
  Object.entries(state.stats).forEach(([key, value]) => {
    const row = document.createElement("article");
    row.className = "health-card";
    row.innerHTML = `
      <div class="health-row">
        <header><span>${labels[key]}</span><span>${value}</span></header>
        <div class="bar"><span style="width:${value}%"></span></div>
      </div>
    `;
    content.append(row);
  });
}

function renderDecisions() {
  if (!state.decisions.length) {
    content.append(card("No decisions yet", "Major choices will appear here after commitment.", "", null));
    return;
  }
  state.decisions.forEach((decision) => {
    content.append(
      card(decision.title, `${decision.response}\n${decision.consequence}`, decision.week, null)
    );
  });
}

function card(title, body, actionText, action, dark = false) {
  const el = document.createElement("article");
  el.className = `card ${dark ? "dark" : ""}`;
  el.innerHTML = `<h3>${title}</h3><p>${body.replace(/\n/g, "<br>")}</p>`;
  if (actionText && action) {
    const button = document.createElement("button");
    button.className = "card-button";
    button.textContent = actionText;
    button.addEventListener("click", action);
    el.append(button);
  }
  return el;
}

function nextActionText() {
  const item = state.inbox.find((entry) => entry.mustRespond);
  if (!item) return "No blocking inbox item. Continue to advance the week.";
  return `${item.title}\n${item.signal}\nFrom: ${item.from}`;
}

function openEvent(eventId) {
  const event = events[eventId];
  if (!event) return;
  state.activeEventId = eventId;
  $("#event-type").textContent = event.type;
  $("#event-title").textContent = event.title;
  $("#event-context").textContent = event.context;
  $("#event-clues").innerHTML = `<strong>Visible clues</strong><ul>${event.clues
    .map((clue) => `<li>${clue}</li>`)
    .join("")}</ul>`;
  const choices = $("#event-choices");
  choices.innerHTML = "";
  event.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice.label;
    button.addEventListener("click", () => chooseEvent(choice));
    choices.append(button);
  });
  $("#event-modal").classList.remove("hidden");
}

function chooseEvent(choice) {
  $("#event-modal").classList.add("hidden");
  const before = { ...state.stats };
  applyStats(choice.stats || {});
  applyHidden(choice.hidden || {});
  markResolved(state.activeEventId);
  state.pendingFollowUp = choice.followUp || "";
  state.decisions.push({
    title: events[state.activeEventId].title,
    response: choice.label,
    consequence: choice.consequence,
    week: `Week ${state.week}`,
  });
  $("#result-text").textContent = choice.consequence;
  $("#result-changes").textContent = formatChanges(before, state.stats);
  $("#result-modal").classList.remove("hidden");
  render();
}

function applyStats(changes) {
  Object.entries(changes).forEach(([key, value]) => {
    state.stats[key] = Math.max(0, Math.min(100, state.stats[key] + value));
  });
}

function applyHidden(changes) {
  Object.entries(changes).forEach(([key, value]) => {
    state.hidden[key] = (state.hidden[key] || 0) + value;
  });
}

function markResolved(eventId) {
  state.inbox.forEach((item) => {
    if (item.eventId === eventId) {
      item.mustRespond = false;
      item.status = "Resolved";
    }
  });
}

function formatChanges(before, after) {
  const lines = ["Visible stat changes:"];
  Object.keys(after).forEach((key) => {
    const diff = after[key] - before[key];
    if (diff !== 0) lines.push(`${labels[key]} ${diff > 0 ? "+" : ""}${diff}`);
  });
  if (lines.length === 1) lines.push("No visible stat change.");
  lines.push("", "Long-term impact hinted, not revealed.");
  return lines.join("\n");
}

function addFollowUp() {
  if (!state.pendingFollowUp) return;
  const event = events[state.pendingFollowUp];
  state.inbox.push({
    type: event.type,
    title: event.title,
    from: "Project System",
    signal: event.context,
    eventId: state.pendingFollowUp,
    mustRespond: true,
    status: "Open",
  });
  state.pendingFollowUp = "";
}

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => setScreen(button.dataset.screen));
});

$("#continue-button").addEventListener("click", () => {
  if (blockerCount() > 0) {
    setScreen("inbox");
    return;
  }
  state.week += 1;
  render();
});

$("#close-event").addEventListener("click", () => {
  $("#event-modal").classList.add("hidden");
});

$("#result-continue").addEventListener("click", () => {
  $("#result-modal").classList.add("hidden");
  addFollowUp();
  setScreen("inbox");
});

render();
