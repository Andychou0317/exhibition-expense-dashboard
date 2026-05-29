const PASSWORD = "JUMBOMKT2026";
const STORAGE_KEY = "exhibition-expense-dashboard-v2";
const LEGACY_STORAGE_KEY = "exhibition-expense-dashboard-v1";
const AUTH_KEY = "exhibition-expense-auth-v1";

const categories = [
  "旅費",
  "交際費(客戶)",
  "佈展雜支",
  "保險費",
  "廣告費",
  "場地費+電費",
  "裝潢",
  "運費",
  "研發材料費",
  "包裝費",
  "其他"
];

const projects = {
  g2e: {
    name: "G2E",
    title: "G2E 展覽費用 Dashboard",
    tableTitle: "G2E 近年費用分析",
    latestYear: "2025",
    budget: 16820884,
    years: ["2025", "2024", "2023", "2022", "2019"],
    rows: [
      { category: "旅費", amounts: { 2025: 1939446, 2024: 2236762, 2023: 1809196, 2022: 1691879, 2019: 3185445 }, shares: { 2025: 11.5, 2024: 14.1, 2023: 11.4, 2022: 16.3, 2019: 19.4 } },
      { category: "交際費(客戶)", amounts: { 2025: 453800, 2024: 583170, 2023: 546669, 2022: 23477, 2019: 1915206 }, shares: { 2025: 2.7, 2024: 3.7, 2023: 3.5, 2022: 0.2, 2019: 11.6 } },
      { category: "佈展雜支", amounts: { 2025: 75800, 2024: 154194, 2023: 359858, 2022: 405421, 2019: 164550 }, shares: { 2025: 0.5, 2024: 1.0, 2023: 2.3, 2022: 3.9, 2019: 1.0 } },
      { category: "保險費", amounts: { 2025: 35731, 2024: 40235, 2023: 18774, 2022: 424258, 2019: 26498 }, shares: { 2025: 0.2, 2024: 0.3, 2023: 0.1, 2022: 4.1, 2019: 0.2 } },
      { category: "廣告費", amounts: { 2025: 1578800, 2024: 1414085, 2023: 433926, 2022: 9708, 2019: 1521462 }, shares: { 2025: 9.4, 2024: 8.9, 2023: 2.7, 2022: 0.1, 2019: 9.3 } },
      { category: "場地費+電費", amounts: { 2025: 4300881, 2024: 3999748, 2023: 2929335, 2022: 277060, 2019: 3747089 }, shares: { 2025: 25.6, 2024: 25.3, 2023: 18.5, 2022: 2.7, 2019: 22.8 } },
      { category: "裝潢", amounts: { 2025: 5900000, 2024: 5860000, 2023: 5698790, 2022: 2985915, 2019: 4938000 }, shares: { 2025: 35.1, 2024: 37.0, 2023: 36.0, 2022: 28.7, 2019: 30.0 } },
      { category: "運費", amounts: { 2025: 2042831, 2024: 1343150, 2023: 624310, 2022: 3654230, 2019: 752385 }, shares: { 2025: 12.1, 2024: 8.5, 2023: 3.9, 2022: 35.1, 2019: 4.6 } },
      { category: "研發材料費", amounts: { 2025: 409745, 2024: 194468, 2023: 22694, 2022: 654434, 2019: 191936 }, shares: { 2025: 2.4, 2024: 1.2, 2023: 0.1, 2022: 6.3, 2019: 1.2 } },
      { category: "包裝費", amounts: { 2025: 83850, 2024: 0, 2023: 0, 2022: 271443, 2019: 0 }, shares: { 2025: 0.5, 2024: 0.0, 2023: 0.0, 2022: 2.6, 2019: 0.0 } }
    ],
    totals: { 2025: 16820884, 2024: 15825812, 2023: 12443552, 2022: 10397825, 2019: 16442571 },
    booth: {
      2025: { sizeSqm: 272, decorationTotal: 5900000, decorationPerSqm: 21691, venueElectricTotal: 4631733, venueElectricPerSqm: 17028 },
      2024: { sizeSqm: 272, decorationTotal: 5860000, decorationPerSqm: 21544, venueElectricTotal: 3999748, venueElectricPerSqm: 14705 },
      2023: { sizeSqm: 252, decorationTotal: 5698790, decorationPerSqm: 22614, note: "新加坡辦展" },
      2022: { sizeSqm: 230, decorationTotal: 2985915, decorationPerSqm: 15888, note: "新加坡辦展" },
      2019: { sizeSqm: 304, decorationTotal: 4938000, decorationPerSqm: 16243 }
    }
  },
  sigma: {
    name: "Sigma",
    title: "Sigma 展覽費用 Dashboard",
    tableTitle: "Sigma 2025 費用分析",
    latestYear: "2025",
    budget: 5053047,
    years: ["2025"],
    rows: [
      { category: "旅費", amounts: { 2025: 390663 }, shares: { 2025: 7.7 } },
      { category: "交際費(客戶)", amounts: { 2025: 332667 }, shares: { 2025: 6.6 } },
      { category: "佈展雜支", amounts: { 2025: 0 }, shares: { 2025: 0.0 } },
      { category: "保險費", amounts: { 2025: 10146 }, shares: { 2025: 0.2 } },
      { category: "廣告費", amounts: { 2025: 1088312 }, shares: { 2025: 21.5 } },
      { category: "場地費+電費", amounts: { 2025: 1356274 }, shares: { 2025: 26.8 } },
      { category: "裝潢", amounts: { 2025: 1800000 }, shares: { 2025: 35.6 } },
      { category: "運費", amounts: { 2025: 62865 }, shares: { 2025: 1.2 } },
      { category: "研發材料費", amounts: { 2025: 12120 }, shares: { 2025: 0.2 } },
      { category: "包裝費", amounts: { 2025: 0 }, shares: { 2025: 0.0 } }
    ],
    totals: { 2025: 5053047 }
  }
};

const mktSeedData = {
  combined: {
    name: "Mkt expense",
    years: {
      "2025": {
        rows: [
          { category: "Philippines market plan", estimated: 5898628, actual: 790730, note: "主因：菲律賓政策改變，無法公開展示 gaming 內容" },
          { category: "Outsource", estimated: 400000, actual: 58798, note: "Outsource" },
          { category: "Giveaways", estimated: 1210000, actual: 0, note: "" },
          { category: "Media", estimated: 1058796, actual: 1058796, note: "如實履行合約" },
          { category: "G2E 澳門", estimated: 15105882, actual: 16820884, note: "25週年最大規模展會。運費、場地費、人力上漲" },
          { category: "MGS澳門", estimated: 990000, actual: 0, note: "有加入泰國專案" },
          { category: "Sigma 菲律賓", estimated: 2890000, actual: 5053047, note: "Giveaways" },
          { category: "EVENT", estimated: 733425, actual: 314118, note: "" },
          { category: "課程進修", estimated: 30000, actual: 0, note: "" },
          { category: "Other", estimated: 8501, actual: 2008501, note: "Media" }
        ]
      },
      "2024": {
        rows: [
          { category: "DM", estimated: 63000, actual: 45720, note: "" },
          { category: "Outsource", estimated: 840000, actual: 589240, note: "" },
          { category: "Giveaways", estimated: 1210000, actual: 1018869, note: "" },
          { category: "Media", estimated: 567618, actual: 651191, note: "" },
          { category: "G2E-Macau 2024/6/04-6/06", estimated: 12950304, actual: 15105882, note: "" },
          { category: "Event", estimated: 0, actual: 513499, note: "" },
          { category: "課程進修", estimated: 72000, actual: 30000, note: "" },
          { category: "Others", estimated: 0, actual: 8501, note: "" }
        ]
      }
    }
  },
  landbased: {
    name: "Landbased",
    years: {
      "2026": {
        rows: [
          { category: "Philippines - Marketing Plan", estimated: 1502500, actual: 0, note: "線下廣告：計程車+公車廣告" },
          { category: "Outsource", estimated: 200000, actual: 0, note: "臨時外包需求" },
          { category: "Giveaways", estimated: 200000, actual: 0, note: "" },
          { category: "Media", estimated: 546679, actual: 0, note: "" },
          { category: "G2E-Macau 2026/5/12-5/14", estimated: 10020661, actual: 0, note: "" },
          { category: "Event", estimated: 239734, actual: 0, note: "" },
          { category: "課程進修", estimated: 30000, actual: 0, note: "" },
          { category: "Others", estimated: 8501, actual: 0, note: "" }
        ]
      },
      "2025": {
        rows: [
          { category: "Philippines market plan", estimated: 5898628, actual: 790730, note: "主因：菲律賓政策改變，無法公開展示 gaming 內容" },
          { category: "Outsource", estimated: 400000, actual: 58798, note: "Outsource" },
          { category: "Giveaways", estimated: 1210000, actual: 0, note: "" },
          { category: "Media", estimated: 1058796, actual: 1058796, note: "如實履行合約" },
          { category: "G2E 澳門", estimated: 15105882, actual: 16820884, note: "25週年最大規模展會。運費、場地費、人力上漲" },
          { category: "MGS澳門", estimated: 990000, actual: 0, note: "有加入泰國專案" },
          { category: "EVENT", estimated: 733425, actual: 314118, note: "" },
          { category: "課程進修", estimated: 30000, actual: 0, note: "" },
          { category: "Other", estimated: 8501, actual: 2008501, note: "Media" }
        ]
      }
    }
  },
  igaming: {
    name: "iGaming",
    years: {
      "2026": {
        rows: [
          { category: "Philippines - Marketing Plan", estimated: 5200000, actual: 0, note: "廣告投放、streaming、Billboard" },
          { category: "Outsource", estimated: 200000, actual: 0, note: "臨時外包需求" },
          { category: "Giveaways", estimated: 200000, actual: 0, note: "" },
          { category: "Media", estimated: 549626, actual: 0, note: "" },
          { category: "Sigma- Philipphines", estimated: 5053047, actual: 0, note: "" },
          { category: "Event", estimated: 2000000, actual: 0, note: "" },
          { category: "課程進修", estimated: 0, actual: 0, note: "" },
          { category: "Others", estimated: 0, actual: 0, note: "" }
        ]
      },
      "2025": {
        rows: [
          { category: "Sigma 菲律賓", estimated: 2890000, actual: 5053047, note: "Giveaways" }
        ]
      }
    }
  }
};

const icons = {
  eye: `<svg viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  layout: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="18" height="7"/></svg>`,
  upload: `<svg viewBox="0 0 24 24"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M20 16v4H4v-4"/></svg>`,
  file: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24"><path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M16 12h5v4h-5a2 2 0 0 1 0-4Z"/><path d="M3 7l3-4h12v4"/></svg>`,
  target: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,
  percent: `<svg viewBox="0 0 24 24"><path d="m19 5-14 14"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
  download: `<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="m19 6-1 15H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>`
};

let state = loadState();

const $ = (selector) => document.querySelector(selector);
const money = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});
const number = new Intl.NumberFormat("zh-TW", {
  maximumFractionDigits: 0
});

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return normalizeState(JSON.parse(saved));

  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  const legacyExpenses = legacy ? JSON.parse(legacy).expenses || [] : [];
  return normalizeState({
    activeProject: "g2e",
    projects: {
      g2e: { budget: projects.g2e.budget, expenses: migrateLegacyExpenses(legacyExpenses) },
      sigma: { budget: projects.sigma.budget, expenses: [] }
    }
  });
}

function normalizeState(value) {
  const next = {
    activeView: value.activeView || "mkt",
    mktLine: value.mktLine || "landbased",
    mktYear: value.mktYear || "2026",
    mkt: value.mkt || {},
    activeProject: value.activeProject || "g2e",
    projects: {}
  };

  Object.keys(mktSeedData).forEach((line) => {
    next.mkt[line] = {
      userYears: value.mkt?.[line]?.userYears || [],
      estimates: value.mkt?.[line]?.estimates || {},
      actualImports: value.mkt?.[line]?.actualImports || {},
      notes: value.mkt?.[line]?.notes || {}
    };
  });

  Object.keys(projects).forEach((key) => {
    next.projects[key] = {
      budget: value.projects?.[key]?.budget ?? projects[key].budget,
      selectedYear: value.projects?.[key]?.selectedYear ?? projects[key].latestYear,
      userYears: value.projects?.[key]?.userYears ?? [],
      boothOverrides: value.projects?.[key]?.boothOverrides ?? {},
      expenses: (value.projects?.[key]?.expenses ?? []).map((expense) => ({
        ...expense,
        year: expense.year || projects[key].latestYear
      }))
    };
  });

  return next;
}

function migrateLegacyExpenses(expenses) {
  const map = {
    "攤位費": "場地費+電費",
    "場地費": "場地費+電費",
    "開發費": "研發材料費",
    "交際費": "交際費(客戶)",
    "設計製作": "裝潢",
    "住宿交通": "旅費"
  };

  return expenses.map((expense) => ({
    ...expense,
    category: map[expense.category] || expense.category || "其他"
  }));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentProjectKey() {
  return state.activeProject;
}

function currentProject() {
  return projects[currentProjectKey()];
}

function currentLedger() {
  return state.projects[currentProjectKey()];
}

function selectedYear() {
  const project = currentProject();
  const year = currentLedger().selectedYear;
  return allYears(project, currentLedger()).includes(year) ? year : project.latestYear;
}

function allYears(project = currentProject(), ledger = currentLedger()) {
  return [...new Set([...(ledger.userYears || []), ...project.years])].sort((a, b) => Number(b) - Number(a));
}

function isImportedYear(year = selectedYear()) {
  return currentProject().years.includes(year);
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
}

function populateCategoryControls() {
  const options = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  $("#categoryInput").innerHTML = options;
  $("#filterCategory").innerHTML = `<option value="全部類別">全部類別</option>${options}`;
  $("#quickChips").innerHTML = categories
    .slice(0, 6)
    .map((category) => `<button class="quick-chip" type="button" data-category="${category}">${category}<small>快速選取</small></button>`)
    .join("");
}

function showApp() {
  $("#loginView").classList.add("is-hidden");
  $("#appView").classList.remove("is-hidden");
  render();
}

function showLogin() {
  $("#appView").classList.add("is-hidden");
  $("#loginView").classList.remove("is-hidden");
}

function currentMktLine() {
  if (["2025", "2024"].includes(String(state.mktYear))) return "combined";
  return mktSeedData[state.mktLine] ? state.mktLine : "landbased";
}

function currentMktLedger() {
  return state.mkt[currentMktLine()];
}

function mktYears(line = currentMktLine()) {
  return [...new Set([...Object.keys(mktSeedData.combined.years), ...Object.keys(mktSeedData.landbased.years), ...Object.keys(mktSeedData.igaming.years), ...(state.mkt[line]?.userYears || [])])].sort((a, b) => Number(b) - Number(a));
}

function currentMktYear() {
  return mktYears().includes(state.mktYear) ? state.mktYear : mktYears()[0];
}

function getMktRows(line = currentMktLine(), year = currentMktYear()) {
  const seedRows = state.mkt[line]?.estimates?.[year] || mktSeedData[line].years[year]?.rows || [];
  const importRows = state.mkt[line]?.actualImports?.[year] || [];
  const rowsByCategory = new Map();

  seedRows.forEach((row) => {
    rowsByCategory.set(row.category, { ...row, actual: row.actual || 0 });
  });

  importRows.forEach((row) => {
    const existing = rowsByCategory.get(row.category) || { category: row.category, estimated: 0, actual: 0, note: "" };
    existing.actual += Number(row.amount || 0);
    rowsByCategory.set(row.category, existing);
  });

  return [...rowsByCategory.values()].map((row) => ({
    ...row,
    note: getMktNote(line, year, row.category, row.note)
  }));
}

function getMktNote(line, year, category, fallback = "") {
  return state.mkt[line]?.notes?.[year]?.[category] ?? fallback ?? "";
}

function mktEstimatedTotal(line = currentMktLine(), year = currentMktYear()) {
  return getMktRows(line, year).reduce((sum, row) => sum + Number(row.estimated || 0), 0);
}

function mktActualTotal(line = currentMktLine(), year = currentMktYear()) {
  return getMktRows(line, year).reduce((sum, row) => sum + Number(row.actual || 0), 0);
}

function renderMktOverview() {
  const line = currentMktLine();
  const year = currentMktYear();
  const rows = getMktRows(line, year);
  const actualTotal = mktActualTotal(line, year);
  const estimatedTotal = mktEstimatedTotal(line, year);
  const diff = estimatedTotal - actualTotal;
  const execution = estimatedTotal > 0 ? (actualTotal / estimatedTotal) * 100 : 0;
  const basis = actualTotal > 0 ? "actual" : "estimated";
  const top = [...rows].sort((a, b) => (b[basis] || b.estimated) - (a[basis] || a.estimated))[0];

  document.querySelectorAll("[data-mkt-line]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.mktLine === line);
    tab.disabled = ["2025", "2024"].includes(String(year));
  });
  $("#mktYearTabs").innerHTML =
    mktYears(line)
      .map((itemYear) => `<button class="year-tab ${itemYear === year ? "is-active" : ""}" type="button" data-mkt-year="${itemYear}">${itemYear}</button>`)
      .join("") + `<button class="year-tab year-add" type="button" data-add-mkt-year><span data-icon="plus"></span>年份</button>`;
  renderIcons();

  $("#mktEstimatedTotal").textContent = money.format(estimatedTotal);
  $("#mktActualTotal").textContent = actualTotal ? money.format(actualTotal) : "-";
  $("#mktDiffTotal").textContent = `${Math.round(execution)}%`;
  $("#mktEstimatedNote").textContent = `${rows.length} 個行銷項目`;
  $("#mktActualNote").textContent = actualTotal ? "已匯入實際花費" : "尚未匯入實際花費";
  $("#mktDiffNote").textContent = actualTotal ? (diff >= 0 ? `${money.format(diff)} remaining` : `${money.format(Math.abs(diff))} over`) : "等待實際花費";
  $("#mktCategoryTitle").textContent = `${year} ${mktSeedData[line].name} 費用分類比例`;
  $("#mktTopCategory").textContent = top ? `最高：${formatEventName(top.category)}` : "-";
  $("#mktHighestCategory").textContent = top ? formatEventName(top.category) : "-";
  $("#mktSourceNote").textContent = actualTotal ? (diff >= 0 ? money.format(diff) : `-${money.format(Math.abs(diff))}`) : "-";
  $("#mktDataStatus").textContent = actualTotal ? "預估 vs 實際" : "預估中";
  $("#mktRingPercent").textContent = `${Math.round(execution)}%`;
  $("#mktProgressRing").style.background = `conic-gradient(${execution > 100 ? "var(--danger)" : "var(--accent)"} ${Math.min(execution || 0, 100) * 3.6}deg, #e7ecea 0deg)`;
  $("#mktNarrative").textContent = actualTotal
    ? `實際花費為預估的 ${execution.toFixed(1)}%，${diff >= 0 ? `距離 budget 還有 ${money.format(diff)}` : `已超出 ${money.format(Math.abs(diff))}`}。`
    : `${year} ${mktSeedData[line].name} 目前為預估花費，可上傳當年實際花費建立分析。`;
  $("#mktImportTitle").textContent = `上傳 ${year} ${mktSeedData[line].name} 實際花費`;
  $("#mktImportStatus").textContent = ["2025", "2024"].includes(String(year))
    ? "此年份為合併 Mkt expense，不分 Landbased / iGaming。"
    : "會匯入到目前選取的 Landbased/iGaming 與年份。";

  renderMktCategoryList(rows, basis, basis === "actual" ? actualTotal : estimatedTotal);
  renderMktYearSummary();
  renderMktTable(rows, year, actualTotal > 0);
}

function renderMktCategoryList(rows, basis, total) {
  $("#mktCategoryList").innerHTML = rows
    .filter((row) => (row[basis] || row.estimated) > 0)
    .map((row) => {
      const amount = row[basis] || row.estimated;
      const share = total > 0 ? (amount / total) * 100 : 0;
      return `
        <div class="category-row">
          <div class="category-name">${row.category}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${share}%"></div></div>
          <div class="category-amount">${share.toFixed(1)}%</div>
        </div>
      `;
    })
    .join("");
}

function formatEventName(category) {
  return normalizeCell(category)
    .replace(/\n/g, " ")
    .replace(/\b20\d{2}\/\d{1,2}\/\d{1,2}[-–]\d{1,2}\/\d{1,2}\b/g, "")
    .replace(/\s+/g, " ")
    .replace(/-/g, " ")
    .replace(/\bMacau\b/i, "Macau")
    .replace(/\bMacao\b/i, "Macau")
    .trim();
}

function renderMktYearSummary() {
  const line = currentMktLine();
  $("#mktYearSummaryGrid").innerHTML = mktYears(line)
    .map((year) => {
      const estimated = mktEstimatedTotal(line, year);
      const actual = mktActualTotal(line, year);
      const isActive = year === currentMktYear();
      return `
        <button class="year-card ${isActive ? "is-active" : ""}" type="button" data-mkt-year="${year}">
          <small>${year}</small>
          <strong>${money.format(actual || estimated)}</strong>
          <small>${actual ? `實際 / 預估 ${Math.round((actual / estimated) * 100)}%` : "預估花費"}</small>
        </button>
      `;
    })
    .join("");
}

function renderMktTable(rows, year, hasActual) {
  $("#mktTableTitle").textContent = hasActual ? `${year} 預估 vs 實際分析` : `${year} 預估花費分析`;
  $("#mktTableHead").innerHTML = "<tr><th>項目</th><th>預估</th><th>實際</th><th>差異</th><th>備註</th></tr>";
  $("#mktTableBody").innerHTML = rows
    .map((row) => {
      const diff = Number(row.estimated || 0) - Number(row.actual || 0);
      return `<tr>
        <td>${row.category}</td>
        <td class="amount-cell">${money.format(row.estimated || 0)}</td>
        <td class="amount-cell">${row.actual ? money.format(row.actual) : "-"}</td>
        <td class="${diff >= 0 ? "diff-negative" : "diff-positive"}">${row.actual ? money.format(Math.abs(diff)) : "-"}</td>
        <td><textarea class="note-editor" data-mkt-note="${escapeHtml(row.category)}" rows="2">${escapeHtml(row.note || "")}</textarea></td>
      </tr>`;
    })
    .join("");
}

function baselineTotal() {
  const project = currentProject();
  return project.totals[selectedYear()] || 0;
}

function manualTotal() {
  const year = selectedYear();
  return currentLedger()
    .expenses.filter((expense) => expense.year === year)
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function totalSpent() {
  return baselineTotal() + manualTotal();
}

function categoryTotals() {
  const project = currentProject();
  const year = selectedYear();

  return categories.map((category) => {
    const baseline = project.rows.find((row) => row.category === category)?.amounts[year] || 0;
    const manual = currentLedger()
      .expenses.filter((expense) => expense.year === year && expense.category === category)
      .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    return { category, baseline, manual, total: baseline + manual };
  });
}

function renderSummary(totals, spent) {
  const budget = Number(currentLedger().budget || 0);
  const percent = budget > 0 ? (spent / budget) * 100 : 0;
  const remaining = budget - spent;
  const top = totals.filter((item) => item.total > 0).sort((a, b) => b.total - a.total)[0];
  const year = selectedYear();
  const manualEntries = currentLedger().expenses.filter((expense) => expense.year === year);
  const manualCount = manualEntries.length;
  const latest = currentLedger()
    .expenses.filter((expense) => expense.year === year)
    .map((expense) => expense.date)
    .filter(Boolean)
    .sort()
    .at(-1);

  $("#projectTitle").textContent = currentProject().title;
  $("#entryTitle").textContent = `新增 ${year} 花費 / Invoice`;
  $("#budgetInput").value = budget;
  $("#totalSpent").textContent = money.format(spent);
  $("#recordCount").textContent = isImportedYear(year) ? `${year} baseline + ${manualCount} 筆新增` : `${year} 新增表單 + ${manualCount} 筆紀錄`;
  $("#budgetValue").textContent = money.format(budget);
  $("#budgetStatus").textContent = budget > 0 ? "已設定追蹤" : "尚未設定";
  $("#budgetPercent").textContent = `${Math.round(percent)}%`;
  $("#remainingBudget").textContent = `${money.format(Math.abs(remaining))} ${remaining >= 0 ? "remaining" : "over budget"}`;
  $("#remainingBudget").style.color = remaining >= 0 ? "var(--muted)" : "var(--danger)";
  $("#ringPercent").textContent = `${Math.round(percent)}%`;
  $("#progressRing").style.background = `conic-gradient(${percent > 100 ? "var(--danger)" : "var(--accent)"} ${Math.min(percent, 100) * 3.6}deg, #e7ecea 0deg)`;
  $("#budgetNarrative").textContent =
    budget > 0
      ? `目前已使用 ${percent.toFixed(1)}% budget，${remaining >= 0 ? `距離預算還有 ${money.format(remaining)}` : `已超出 ${money.format(Math.abs(remaining))}`}。`
      : "設定 budget 後即可追蹤目前已花費比例。";
  $("#highestCategory").textContent = top ? `${top.category} ${money.format(top.total)}` : "-";
  $("#averageExpense").textContent = money.format(spent / Math.max(totals.filter((item) => item.total > 0).length, 1));
  $("#lastUpdated").textContent = latest || (isImportedYear(year) ? `${year} 匯入資料` : `${year} 尚未入庫`);
  $("#topCategory").textContent = top ? `最高：${top.category}` : "尚無資料";
}

function renderCategories(totals, spent) {
  const rows = totals
    .filter((item) => item.total > 0)
    .map((item) => {
      const share = spent > 0 ? (item.total / spent) * 100 : 0;
      const manualLabel = item.manual ? ` + 新增 ${money.format(item.manual)}` : "";
      return `
        <div class="category-row">
          <div class="category-name">${item.category}<small>${manualLabel}</small></div>
          <div class="bar-track"><div class="bar-fill" style="width:${share}%"></div></div>
          <div class="category-amount">${money.format(item.total)}</div>
        </div>
      `;
    });

  $("#categoryList").innerHTML = rows.length ? rows.join("") : `<div class="booth-empty">此年份尚未有花費紀錄，可到新增入庫表單開始建立。</div>`;

  document.querySelectorAll(".quick-chip").forEach((chip) => {
    const total = totals.find((item) => item.category === chip.dataset.category)?.total || 0;
    chip.querySelector("small").textContent = money.format(total);
  });
}

function renderHistory() {
  const project = currentProject();
  const year = selectedYear();
  const compareYear = previousYear(project, year);

  $("#categoryTitle").textContent = `${year} 已知花費一覽`;
  $("#historyShareTitle").textContent = isImportedYear(year) ? `${year} 匯入分類比例` : `${year} 新增分類比例`;
  $("#historyTableTitle").textContent = compareYear ? `${project.name} ${year} vs ${compareYear} 費用分析` : `${project.name} ${year} 費用分析`;
  $("#historyYearGrid").innerHTML = allYears(project, currentLedger())
    .map((year) => {
      const amount = (project.totals[year] || 0) + manualTotalForYear(year);
      const isActive = year === selectedYear();
      const diff = compareYearForCard(project, year);
      const label = diff ? `${diff.diff > 0 ? "+" : ""}${money.format(diff.diff)} vs ${diff.year}` : isImportedYear(year) ? "最早匯入年份" : "新增年份";
      return `
        <button class="year-card ${isActive ? "is-active" : ""}" type="button" data-year="${year}" aria-pressed="${isActive}">
          <small>${year}</small>
          <strong>${money.format(amount)}</strong>
          <small>${label}</small>
        </button>
      `;
    })
    .join("");

  renderShareStrip(project, year);

  renderHistoryTable(project, year, compareYear);
}

function renderShareStrip(project, year) {
  const total = (project.totals[year] || 0) + manualTotalForYear(year);
  const items = categories
    .map((category) => {
      const importedRow = project.rows.find((row) => row.category === category);
      const amount = (importedRow?.amounts[year] || 0) + manualTotalForYear(year, category);
      const share = total > 0 ? (amount / total) * 100 : 0;
      return { category, amount, share };
    })
    .filter((item) => item.amount > 0);

  $("#historyCategoryList").innerHTML = items.length
    ? items
        .map((item) => `
          <div class="share-item" title="${item.category}">
            <div class="share-item-header">
              <strong>${item.category}</strong>
              <span>${item.share.toFixed(1)}%</span>
            </div>
            <div class="bar-track"><div class="bar-fill" style="width:${item.share}%"></div></div>
          </div>
        `)
        .join("")
    : `<div class="booth-empty">此年份尚未有匯入資料或新增花費。</div>`;
}

function manualTotalForYear(year, category = null) {
  return currentLedger()
    .expenses.filter((expense) => expense.year === year && (!category || expense.category === category))
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function renderBoothMetrics() {
  const project = currentProject();
  const year = selectedYear();
  const booth = { ...(project.booth?.[year] || {}), ...(currentLedger().boothOverrides?.[year] || {}) };

  $("#boothTitle").textContent = `${year} 攤位大小與每平方成本`;

  if (!Object.keys(booth).length) {
    $("#boothNote").textContent = "尚未匯入";
    $("#boothGrid").innerHTML = `
      <div class="booth-empty">此展覽年份目前沒有攤位大小與每平方成本資料。</div>
    `;
    return;
  }

  $("#boothNote").textContent = booth.note || "已匯入";
  $("#boothGrid").innerHTML = [
    metricTile("攤位大小", booth.sizeSqm ? `${number.format(booth.sizeSqm)} 平方公尺` : "-", booth.boothNumber ? `攤位號碼 ${booth.boothNumber}` : booth.note || ""),
    metricTile(
      "裝潢費總價",
      booth.decorationTotal ? money.format(booth.decorationTotal) : "-",
      booth.decorationPerSqm ? `${money.format(booth.decorationPerSqm)} / 平方公尺` : "匯入裝潢費後自動計算"
    ),
    metricTile(
      "場地費+電力",
      booth.venueElectricTotal ? money.format(booth.venueElectricTotal) : "-",
      booth.venueElectricPerSqm ? `${money.format(booth.venueElectricPerSqm)} / 平方公尺` : "尚無每平方資料"
    )
  ].join("");
}

function metricTile(label, value, detail) {
  return `
    <div class="booth-tile">
      <small>${label}</small>
      <strong>${value}</strong>
      <span>${detail || "-"}</span>
    </div>
  `;
}

function previousYear(project, year) {
  const years = allYears(project, currentLedger());
  const index = years.indexOf(year);
  return index >= 0 ? years[index + 1] : null;
}

function compareYearForCard(project, year) {
  const compare = previousYear(project, year);
  if (!compare) return null;
  return {
    year: compare,
    diff: (project.totals[year] || 0) + manualTotalForYear(year) - ((project.totals[compare] || 0) + manualTotalForYear(compare))
  };
}

function renderHistoryTable(project, year, compareYear) {
  const compareHeaders = compareYear ? `<th>${compareYear} 金額</th><th>${year} vs ${compareYear}</th>` : "";
  $("#historyTableHead").innerHTML = `<tr><th>費用項目</th><th>${year} 金額</th><th>${year} 比例</th>${compareHeaders}</tr>`;
  const total = (project.totals[year] || 0) + manualTotalForYear(year);
  $("#historyTableBody").innerHTML = categories
    .map((category) => {
      const row = project.rows.find((item) => item.category === category);
      const amount = (row?.amounts[year] || 0) + manualTotalForYear(year, category);
      const share = total > 0 ? (amount / total) * 100 : 0;
      const compareCells = compareYear
        ? (() => {
            const compareAmount = (row?.amounts[compareYear] || 0) + manualTotalForYear(compareYear, category);
            const diff = amount - compareAmount;
            const className = diff >= 0 ? "diff-positive" : "diff-negative";
            return `<td class="amount-cell">${money.format(compareAmount)}</td><td class="${className}">${money.format(diff)}</td>`;
          })()
        : "";
      return { category, amount, share, compareCells };
    })
    .filter((row) => row.amount > 0 || compareYear)
    .map((row) => `<tr><td>${row.category}</td><td class="amount-cell">${money.format(row.amount)}</td><td>${row.share.toFixed(1)}%</td>${row.compareCells}</tr>`)
    .join("");
}

function renderTable() {
  const filter = $("#filterCategory").value;
  const year = selectedYear();
  const expenses = currentLedger()
    .expenses.filter((expense) => expense.year === year && (filter === "全部類別" || expense.category === filter))
    .sort((a, b) => b.date.localeCompare(a.date));

  $("#expenseTable").innerHTML = expenses.length
    ? expenses
        .map(
          (expense) => `
          <tr>
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td class="amount-cell">${money.format(expense.amount)}</td>
            <td>${escapeHtml(expense.vendor || "-")}</td>
            <td>${expense.invoiceName ? `<span class="invoice-tag">${escapeHtml(expense.invoiceName)}</span>` : "-"}</td>
            <td>${escapeHtml(expense.note || "-")}</td>
            <td><button class="delete-button" type="button" data-delete="${expense.id}" aria-label="刪除紀錄" title="刪除紀錄">${icons.trash}</button></td>
          </tr>
        `
        )
        .join("")
    : `<tr><td colspan="7">${year} 目前沒有新增 invoice 或手動入庫紀錄。</td></tr>`;
}

function renderTabs() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const isMkt = state.activeView === "mkt" && item.dataset.view === "mkt";
    const isProject = state.activeView === "exhibition" && item.dataset.project === currentProjectKey();
    const isHashLink = !item.dataset.view && state.activeView === "exhibition";
    item.classList.toggle("is-active", isMkt || isProject || false);
    if (isHashLink) item.classList.remove("is-active");
  });

  document.querySelectorAll(".project-tab").forEach((tab) => {
    const isActive = state.activeView === "exhibition" && tab.dataset.project === currentProjectKey();
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  $("#yearTabs").innerHTML = currentProject()
    ? allYears()
        .map((year) => {
          const isActive = year === selectedYear();
          return `<button class="year-tab ${isActive ? "is-active" : ""}" type="button" role="tab" aria-selected="${isActive}" data-year="${year}">${year}</button>`;
        })
        .join("") + `<button class="year-tab year-add" type="button" data-add-year><span data-icon="plus"></span>年份</button>`
    : "";
  renderIcons();
}

function addYear() {
  const raw = window.prompt("輸入要新增的年份，例如 2026");
  if (!raw) return;
  const year = raw.trim();
  if (!/^\d{4}$/.test(year)) {
    window.alert("請輸入 4 位數年份，例如 2026。");
    return;
  }
  const ledger = currentLedger();
  if (!allYears().includes(year)) {
    ledger.userYears = [...(ledger.userYears || []), year];
  }
  ledger.selectedYear = year;
  $("#filterCategory").value = "全部類別";
  render();
}

function addMktYear() {
  const raw = window.prompt("輸入要新增的行銷年份，例如 2027");
  if (!raw) return;
  const year = raw.trim();
  if (!/^\d{4}$/.test(year)) {
    window.alert("請輸入 4 位數年份，例如 2027。");
    return;
  }

  const line = currentMktLine();
  if (!mktYears(line).includes(year)) {
    state.mkt[line].userYears = [...(state.mkt[line].userYears || []), year];
    seedMktYearFromPrevious(line, year);
  }
  state.mktYear = year;
  render();
}

function seedMktYearFromPrevious(line, year) {
  const previous = mktYears(line)
    .filter((item) => Number(item) < Number(year))
    .sort((a, b) => Number(b) - Number(a))[0];
  if (!previous) return;

  const rows = getMktRows(line, previous).map((row) => ({
    category: row.category,
    amount: Number(row.actual || row.estimated || 0),
    note: `由 ${previous} ${row.actual ? "實際" : "預估"}花費帶入`
  }));

  state.mkt[line].actualImports[year] = [];
  state.mkt[line].estimates[year] = rows.map((row) => ({ category: row.category, estimated: row.amount, actual: 0, note: row.note }));
}

async function importMktActual() {
  const file = $("#mktActualFileInput").files[0];
  if (!file) {
    setMktImportStatus("請先選擇 PDF / Excel / 截圖檔案。", "is-error");
    return;
  }

  try {
    setMktImportStatus("讀取實際花費中...");
    const rows = await rowsFromAnyActualFile(file);
    const parsed = parseMktActualRows(rows);
    if (!parsed.records.length) {
      setMktImportStatus("沒有找到可匯入的費用項目與金額。", "is-error");
      return;
    }
    const line = currentMktLine();
    const year = currentMktYear();
    state.mkt[line].actualImports[year] = parsed.records.map((record) => ({
      category: normalizeMktCategory(record.sourceName || record.category),
      amount: record.amount,
      note: record.note || record.sourceName
    }));
    render();
    setMktImportStatus(`已匯入 ${parsed.records.length} 筆 ${year} 實際花費。`, "is-ok");
  } catch (error) {
    setMktImportStatus(error.message || "匯入失敗。", "is-error");
  }
}

function parseMktActualRows(rows) {
  const headerIndex = rows.findIndex((row) => row.some((cell) => normalizeCell(cell).toLowerCase() === "category"));
  if (headerIndex < 0) return parseExpenseRows(rows);

  const header = rows[headerIndex].map((cell) => normalizeCell(cell).toLowerCase());
  const categoryIndex = header.findIndex((cell) => cell === "category");
  const totalIndex = header.findIndex((cell) => cell === "total");
  if (categoryIndex < 0 || totalIndex < 0) return parseExpenseRows(rows);

  let currentCategory = "";
  const records = [];
  for (const row of rows.slice(headerIndex + 1)) {
    const category = normalizeCell(row[categoryIndex]) || currentCategory;
    if (normalizeCell(row[categoryIndex])) currentCategory = normalizeCell(row[categoryIndex]);
    const isSubtotal = row.some((cell) => normalizeCell(cell) === "總計");
    const amount = parseAmount(row[totalIndex]);
    if (isSubtotal && currentCategory && amount) {
      records.push({
        sourceName: currentCategory,
        category: normalizeMktCategory(currentCategory),
        amount,
        note: ""
      });
    }
  }

  return {
    records: records.length ? records : parseExpenseRows(rows).records,
    metadata: parseSheetMetadata(rows)
  };
}

async function rowsFromAnyActualFile(file) {
  if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
    return rowsFromPdf(file);
  }
  return rowsFromFile(file);
}

async function rowsFromPdf(file) {
  if (!window.pdfjsLib) throw new Error("PDF 解析器尚未載入，請稍後重試。");
  setMktImportStatus("正在讀取 PDF 文字...");
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
  const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  const lines = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    lines.push(content.items.map((item) => item.str).join(" "));
  }
  return rowsFromOcrText(lines.join("\n"));
}

function normalizeMktCategory(value) {
  const text = normalizeCell(value).toLowerCase();
  if (text.includes("philippines")) return "Philippines - Marketing Plan";
  if (text.includes("g2e")) return "G2E 澳門";
  if (text.includes("sigma")) return "Sigma 菲律賓";
  if (text.includes("outsource") || text.includes("外包")) return "Outsource";
  if (text.includes("giveaway") || text.includes("禮品")) return "Giveaways";
  if (text.includes("media")) return "Media";
  if (text.includes("event")) return "Event";
  if (text.includes("課程")) return "課程進修";
  if (text.includes("other")) return "Other";
  return value;
}

function setMktImportStatus(message, className = "") {
  const status = $("#mktImportStatus");
  status.textContent = message;
  status.className = `import-status ${className}`.trim();
}

function render() {
  renderTabs();
  $("#mktView").classList.toggle("is-hidden", state.activeView !== "mkt");
  $("#exhibitionView").classList.toggle("is-hidden", state.activeView !== "exhibition");
  document.querySelector(".topbar").classList.toggle("is-mkt", state.activeView === "mkt");

  if (state.activeView === "mkt") {
    $("#projectTitle").textContent = "Mkt expense";
    renderMktOverview();
    saveState();
    return;
  }

  const spent = totalSpent();
  const totals = categoryTotals();
  renderSummary(totals, spent);
  renderCategories(totals, spent);
  renderBoothMetrics();
  renderHistory();
  renderTable();
  saveState();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function setToday() {
  $("#dateInput").value = new Date().toISOString().slice(0, 10);
}

function addExpense(event) {
  event.preventDefault();
  const file = $("#invoiceInput").files[0];
  addExpenseRecord({
    year: selectedYear(),
    category: $("#categoryInput").value,
    amount: Number($("#amountInput").value),
    date: $("#dateInput").value,
    vendor: $("#vendorInput").value.trim(),
    invoiceName: file?.name || "",
    note: $("#noteInput").value.trim()
  });
  event.currentTarget.reset();
  setToday();
  render();
}

function addExpenseRecord(expense) {
  currentLedger().expenses.push({
    id: crypto.randomUUID(),
    year: selectedYear(),
    category: "其他",
    amount: 0,
    date: "",
    vendor: "",
    invoiceName: "",
    note: "",
    ...expense
  });
}

async function importSheet() {
  const file = $("#sheetFileInput").files[0];
  const url = $("#sheetUrlInput").value.trim();

  setImportStatus("讀取表格中...");

  try {
    const rows = file ? await rowsFromFile(file) : await rowsFromGoogleSheet(url);
    const parsed = parseExpenseRows(rows);

    if (!parsed.records.length) {
      setImportStatus("沒有找到可匯入的費用列，請確認表格有費用項目與金額欄位。", "is-error");
      return;
    }

    const year = selectedYear();
    parsed.records.forEach((record) => {
      addExpenseRecord({
        year,
        category: record.category,
        amount: record.amount,
        date: parsed.metadata.eventDate || new Date().toISOString().slice(0, 10),
        vendor: file?.name || "Google Sheet 匯入",
        invoiceName: file?.name || "",
        note: record.note || record.sourceName
      });
    });
    updateBoothFromImport(year, parsed.metadata);
    render();
    setImportStatus(`已匯入 ${parsed.records.length} 筆到 ${currentProject().name} ${year}。`, "is-ok");
  } catch (error) {
    setImportStatus(error.message || "匯入失敗，請確認檔案或 Google Sheet 權限。", "is-error");
  }
}

async function rowsFromFile(file) {
  if (file.type.startsWith("image/")) return rowsFromImage(file);
  if (!window.XLSX) throw new Error("Excel 解析器尚未載入，請稍後重試或先上傳 CSV。");

  const extension = file.name.split(".").pop().toLowerCase();
  if (["csv", "tsv"].includes(extension)) {
    const text = await file.text();
    return rowsFromDelimitedText(text, extension === "tsv" ? "\t" : ",");
  }

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  return workbook.SheetNames.flatMap((sheetName) =>
    XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, raw: false, defval: "" })
  );
}

async function rowsFromImage(file) {
  if (!window.Tesseract) throw new Error("圖片辨識器尚未載入，請稍後重試。");
  setImportStatus("正在辨識截圖文字，可能需要幾秒...");
  const {
    data: { text }
  } = await Tesseract.recognize(file, "chi_tra+eng");
  return rowsFromOcrText(text);
}

function rowsFromOcrText(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => splitOcrLine(line));
}

function splitOcrLine(line) {
  const cleaned = line.replace(/[|｜]/g, " ").replace(/\s{2,}/g, " ").trim();
  const amountMatch = cleaned.match(/(?:NT\$?\s*)?-?\d[\d,]*(?:\.\d+)?/);
  if (!amountMatch) return [cleaned];

  const amount = amountMatch[0];
  const before = cleaned.slice(0, amountMatch.index).trim();
  const after = cleaned.slice(amountMatch.index + amount.length).trim();
  return [before, amount, after].filter(Boolean);
}

async function rowsFromGoogleSheet(url) {
  if (!url) throw new Error("請貼上 Google Sheet 連結，或選擇 Excel/CSV 檔案。");
  const csvUrl = toGoogleCsvUrl(url);
  const response = await fetch(csvUrl);
  if (!response.ok) throw new Error("無法讀取 Google Sheet，請確認連結已公開或已發布。");
  return rowsFromDelimitedText(await response.text(), ",");
}

function toGoogleCsvUrl(url) {
  if (url.includes("output=csv") || url.includes("format=csv")) return url;
  const id = url.match(/\/spreadsheets\/d\/([^/]+)/)?.[1];
  if (!id) return url;
  const gid = url.match(/[?&#]gid=(\d+)/)?.[1];
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv${gid ? `&gid=${gid}` : ""}`;
}

function rowsFromDelimitedText(text, delimiter) {
  if (window.XLSX) {
    const workbook = XLSX.read(text, { type: "string", raw: false });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });
  }

  return text
    .split(/\r?\n/)
    .map((line) => line.split(delimiter).map((cell) => cell.trim()));
}

function parseExpenseRows(rows) {
  const metadata = parseSheetMetadata(rows);
  const headerIndex = rows.findIndex((row) => row.some((cell) => normalizeCell(cell).includes("費用項目")));
  if (headerIndex < 0) return { records: parseLooseExpenseRows(rows), metadata };

  const header = rows[headerIndex].map(normalizeCell);
  const itemIndex = header.findIndex((cell) => cell.includes("費用項目"));
  const amountIndex = findAmountColumn(header, itemIndex);
  const noteIndex = header.findIndex((cell) => cell.includes("備註"));

  const records = [];
  for (const row of rows.slice(headerIndex + 1)) {
    const sourceName = normalizeCell(row[itemIndex]);
    if (!sourceName) continue;
    if (/合計|總計|total/i.test(sourceName)) break;

    const amount = parseAmount(row[amountIndex]);
    if (!amount) continue;

    records.push({
      sourceName,
      category: normalizeCategory(sourceName),
      amount,
      note: noteIndex >= 0 ? cleanNote(row[noteIndex]) : ""
    });
  }

  return { records, metadata };
}

function parseLooseExpenseRows(rows) {
  const records = [];
  for (const row of rows) {
    const cells = row.map(normalizeCell).filter(Boolean);
    if (cells.length < 2) continue;

    const itemIndex = cells.findIndex((cell) => /[費旅交佈布保廣場裝運包研]/.test(cell) && !/合計|總計|日期|攤位|單位/.test(cell));
    const amountIndex = cells.findIndex((cell, index) => index !== itemIndex && parseAmount(cell) > 0);
    if (itemIndex < 0 || amountIndex < 0) continue;

    const sourceName = cells[itemIndex];
    records.push({
      sourceName,
      category: normalizeCategory(sourceName),
      amount: parseAmount(cells[amountIndex]),
      note: cells.filter((_, index) => ![itemIndex, amountIndex].includes(index)).join(" ")
    });
  }
  return records;
}

function parseSheetMetadata(rows) {
  const cells = rows.flat().map(normalizeCell).filter(Boolean);
  const sizeCell = cells.find((cell) => cell.includes("攤位大小"));
  const boothCell = cells.find((cell) => cell.includes("攤位號碼"));
  const dateCell = cells.find((cell) => cell.includes("展出日期"));

  return {
    sizeSqm: sizeCell ? parseAmount(sizeCell) : null,
    boothNumber: boothCell?.split(/[：:]/).pop()?.trim() || "",
    eventDate: dateCell?.split(/[：:]/).pop()?.trim() || ""
  };
}

function findAmountColumn(header, itemIndex) {
  const explicit = header.findIndex((cell) => /金額|ntd|新台幣|總價|尊博/i.test(cell));
  if (explicit >= 0 && explicit !== itemIndex) return explicit;
  return itemIndex + 1;
}

function normalizeCategory(value) {
  const name = normalizeCell(value);
  if (name.includes("旅費")) return "旅費";
  if (name.includes("交際")) return "交際費(客戶)";
  if (name.includes("佈展") || name.includes("布展")) return "佈展雜支";
  if (name.includes("保險")) return "保險費";
  if (name.includes("廣告")) return "廣告費";
  if (name.includes("場地")) return "場地費+電費";
  if (name.includes("電力") || name.includes("電費")) return "場地費+電費";
  if (name.includes("裝潢")) return "裝潢";
  if (name.includes("運費")) return "運費";
  if (name.includes("研發") || name.includes("材料")) return "研發材料費";
  if (name.includes("包裝")) return "包裝費";
  return "其他";
}

function parseAmount(value) {
  const text = normalizeCell(value).replace(/,/g, "");
  const match = text.match(/-?\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function cleanNote(value) {
  return normalizeCell(value).replace(/^●\s*/, "");
}

function normalizeCell(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function updateBoothFromImport(year, metadata) {
  const ledger = currentLedger();
  ledger.boothOverrides = ledger.boothOverrides || {};
  const existing = ledger.boothOverrides[year] || {};
  const sizeSqm = metadata.sizeSqm || existing.sizeSqm;
  const decorationTotal = manualTotalForYear(year, "裝潢");
  const venueElectricTotal = manualTotalForYear(year, "場地費+電費");

  ledger.boothOverrides[year] = {
    ...existing,
    sizeSqm,
    boothNumber: metadata.boothNumber || existing.boothNumber,
    note: metadata.eventDate ? `展出日期 ${metadata.eventDate}` : existing.note,
    decorationTotal: decorationTotal || existing.decorationTotal,
    decorationPerSqm: sizeSqm && decorationTotal ? Math.round(decorationTotal / sizeSqm) : existing.decorationPerSqm,
    venueElectricTotal: venueElectricTotal || existing.venueElectricTotal,
    venueElectricPerSqm: sizeSqm && venueElectricTotal ? Math.round(venueElectricTotal / sizeSqm) : existing.venueElectricPerSqm
  };
}

function setImportStatus(message, className = "") {
  const status = $("#importStatus");
  status.textContent = message;
  status.className = `import-status ${className}`.trim();
}

function exportCsv() {
  const header = ["Project", "Year", "Date", "Category", "Amount NTD", "Vendor", "Invoice", "Note"];
  const rows = currentLedger().expenses.map((expense) => [
    currentProject().name,
    expense.year,
    expense.date,
    expense.category,
    expense.amount,
    expense.vendor,
    expense.invoiceName,
    expense.note
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${currentProject().name.toLowerCase()}-exhibition-expenses.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if ($("#passwordInput").value === PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      $("#loginError").textContent = "";
      showApp();
      return;
    }
    $("#loginError").textContent = "密碼不正確";
  });

  $("#togglePassword").addEventListener("click", () => {
    const input = $("#passwordInput");
    input.type = input.type === "password" ? "text" : "password";
  });

  $("#logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem(AUTH_KEY);
    $("#passwordInput").value = "";
    showLogin();
  });

  $("#budgetInput").addEventListener("input", (event) => {
    currentLedger().budget = Number(event.target.value || 0);
    render();
  });

  document.querySelector("nav").addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton?.dataset.view === "mkt") {
      state.activeView = "mkt";
      render();
      return;
    }

    if (viewButton?.dataset.project) {
      state.activeView = "exhibition";
      state.activeProject = viewButton.dataset.project;
      $("#filterCategory").value = "全部類別";
      render();
      return;
    }

    if (event.target.closest('a[href="#entry"], a[href="#records"]')) {
      state.activeView = "exhibition";
      render();
    }
  });

  $("#mktYearTabs").addEventListener("click", (event) => {
    if (event.target.closest("[data-add-mkt-year]")) {
      addMktYear();
      return;
    }
    const tab = event.target.closest("[data-mkt-year]");
    if (!tab) return;
    state.mktYear = tab.dataset.mktYear;
    render();
  });

  document.querySelector("[data-mkt-line='landbased']").parentElement.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-mkt-line]");
    if (!tab) return;
    if (tab.disabled) return;
    state.mktLine = tab.dataset.mktLine;
    state.mktYear = currentMktYear();
    render();
  });

  $("#mktYearSummaryGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-mkt-year]");
    if (!card) return;
    state.mktYear = card.dataset.mktYear;
    render();
  });

  $("#mktTableBody").addEventListener("input", (event) => {
    const editor = event.target.closest("[data-mkt-note]");
    if (!editor) return;
    const line = currentMktLine();
    const year = currentMktYear();
    state.mkt[line].notes[year] = state.mkt[line].notes[year] || {};
    state.mkt[line].notes[year][editor.dataset.mktNote] = editor.value;
    saveState();
  });

  $("#mktImportButton").addEventListener("click", importMktActual);
  $("#mktActualFileInput").addEventListener("change", () => {
    const file = $("#mktActualFileInput").files[0];
    setMktImportStatus(file ? `已選擇 ${file.name}，按載入實際花費匯入。` : "會匯入到目前選取的 Landbased/iGaming 與年份。");
  });

  $("#yearTabs").addEventListener("click", (event) => {
    if (event.target.closest("[data-add-year]")) {
      addYear();
      return;
    }
    const tab = event.target.closest("[data-year]");
    if (!tab) return;
    currentLedger().selectedYear = tab.dataset.year;
    render();
  });

  $("#historyYearGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-year]");
    if (!card) return;
    currentLedger().selectedYear = card.dataset.year;
    render();
  });

  $("#expenseForm").addEventListener("submit", addExpense);
  $("#filterCategory").addEventListener("change", renderTable);
  $("#exportButton").addEventListener("click", exportCsv);
  $("#importSheetButton").addEventListener("click", importSheet);
  $("#sheetFileInput").addEventListener("change", () => {
    const file = $("#sheetFileInput").files[0];
    setImportStatus(file ? `已選擇 ${file.name}，按載入表格匯入。` : "會匯入到目前選取的展覽與年份。");
  });

  $("#quickChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-category]");
    if (!chip) return;
    $("#categoryInput").value = chip.dataset.category;
    $("#amountInput").focus();
  });

  $("#expenseTable").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button) return;
    currentLedger().expenses = currentLedger().expenses.filter((expense) => expense.id !== button.dataset.delete);
    render();
  });
}

renderIcons();
populateCategoryControls();
setToday();
bindEvents();

if (sessionStorage.getItem(AUTH_KEY) === "1") {
  showApp();
} else {
  showLogin();
}
