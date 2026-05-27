const PASSWORD = "expo2026";
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
    activeProject: value.activeProject || "g2e",
    projects: {}
  };

  Object.keys(projects).forEach((key) => {
    next.projects[key] = {
      budget: value.projects?.[key]?.budget ?? projects[key].budget,
      selectedYear: value.projects?.[key]?.selectedYear ?? projects[key].latestYear,
      expenses: value.projects?.[key]?.expenses ?? []
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
  return project.years.includes(year) ? year : project.latestYear;
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

function baselineTotal() {
  const project = currentProject();
  return project.totals[selectedYear()] || 0;
}

function manualTotal() {
  if (selectedYear() !== currentProject().latestYear) return 0;
  return currentLedger().expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function totalSpent() {
  return baselineTotal() + manualTotal();
}

function categoryTotals() {
  const project = currentProject();
  const year = selectedYear();

  return categories.map((category) => {
    const baseline = project.rows.find((row) => row.category === category)?.amounts[year] || 0;
    const manual =
      year === project.latestYear
        ? currentLedger()
            .expenses.filter((expense) => expense.category === category)
            .reduce((sum, expense) => sum + Number(expense.amount || 0), 0)
        : 0;
    return { category, baseline, manual, total: baseline + manual };
  });
}

function renderSummary(totals, spent) {
  const budget = Number(currentLedger().budget || 0);
  const percent = budget > 0 ? (spent / budget) * 100 : 0;
  const remaining = budget - spent;
  const top = totals.filter((item) => item.total > 0).sort((a, b) => b.total - a.total)[0];
  const manualCount = currentLedger().expenses.length;
  const latest = currentLedger()
    .expenses.map((expense) => expense.date)
    .filter(Boolean)
    .sort()
    .at(-1);

  $("#projectTitle").textContent = currentProject().title;
  $("#budgetInput").value = budget;
  $("#totalSpent").textContent = money.format(spent);
  $("#recordCount").textContent =
    selectedYear() === currentProject().latestYear ? `${selectedYear()} baseline + ${manualCount} 筆新增` : `${selectedYear()} 匯入資料`;
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
  $("#lastUpdated").textContent = selectedYear() === currentProject().latestYear && latest ? latest : `${selectedYear()} 匯入資料`;
  $("#topCategory").textContent = top ? `最高：${top.category}` : "尚無資料";
}

function renderCategories(totals, spent) {
  $("#categoryList").innerHTML = totals
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
    })
    .join("");

  document.querySelectorAll(".quick-chip").forEach((chip) => {
    const total = totals.find((item) => item.category === chip.dataset.category)?.total || 0;
    chip.querySelector("small").textContent = money.format(total);
  });
}

function renderHistory() {
  const project = currentProject();
  const year = selectedYear();
  const selectedTotal = project.totals[year] || 0;
  const compareYear = previousYear(project, year);
  const compareTotal = compareYear ? project.totals[compareYear] || 0 : 0;

  $("#categoryTitle").textContent = `${year} 已知花費一覽`;
  $("#historyShareTitle").textContent = `${year} 匯入分類比例`;
  $("#historyTableTitle").textContent = compareYear ? `${project.name} ${year} vs ${compareYear} 費用分析` : `${project.name} ${year} 費用分析`;
  $("#historyYearGrid").innerHTML = project.years
    .map((year) => {
      const amount = project.totals[year] || 0;
      const isActive = year === selectedYear();
      const diff = compareYearForCard(project, year);
      const label = diff ? `${diff.diff > 0 ? "+" : ""}${money.format(diff.diff)} vs ${diff.year}` : "最早匯入年份";
      return `
        <button class="year-card ${isActive ? "is-active" : ""}" type="button" data-year="${year}" aria-pressed="${isActive}">
          <small>${year}</small>
          <strong>${money.format(amount)}</strong>
          <small>${label}</small>
        </button>
      `;
    })
    .join("");

  $("#historyCategoryList").innerHTML = project.rows
    .filter((row) => row.amounts[year] > 0)
    .map((row) => `
      <div class="share-item" title="${row.category}">
        <div class="share-item-header">
          <strong>${row.category}</strong>
          <span>${row.shares[year].toFixed(1)}%</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${row.shares[year]}%"></div></div>
      </div>
    `)
    .join("");

  renderHistoryTable(project, year, compareYear);
}

function renderBoothMetrics() {
  const project = currentProject();
  const year = selectedYear();
  const booth = project.booth?.[year];

  $("#boothTitle").textContent = `${year} 攤位大小與每平方成本`;

  if (!booth) {
    $("#boothNote").textContent = "尚未匯入";
    $("#boothGrid").innerHTML = `
      <div class="booth-empty">此展覽年份目前沒有攤位大小與每平方成本資料。</div>
    `;
    return;
  }

  $("#boothNote").textContent = booth.note || "已匯入";
  $("#boothGrid").innerHTML = [
    metricTile("攤位大小", `${number.format(booth.sizeSqm)} 平方公尺`, booth.note || ""),
    metricTile("裝潢費總價", money.format(booth.decorationTotal), `${money.format(booth.decorationPerSqm)} / 平方公尺`),
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
  const index = project.years.indexOf(year);
  return index >= 0 ? project.years[index + 1] : null;
}

function compareYearForCard(project, year) {
  const compare = previousYear(project, year);
  if (!compare) return null;
  return {
    year: compare,
    diff: (project.totals[year] || 0) - (project.totals[compare] || 0)
  };
}

function renderHistoryTable(project, year, compareYear) {
  const compareHeaders = compareYear ? `<th>${compareYear} 金額</th><th>${year} vs ${compareYear}</th>` : "";
  $("#historyTableHead").innerHTML = `<tr><th>費用項目</th><th>${year} 金額</th><th>${year} 比例</th>${compareHeaders}</tr>`;
  $("#historyTableBody").innerHTML = project.rows
    .map((row) => {
      const amount = row.amounts[year] || 0;
      const share = row.shares[year] || 0;
      const compareCells = compareYear
        ? (() => {
            const compareAmount = row.amounts[compareYear] || 0;
            const diff = amount - compareAmount;
            const className = diff >= 0 ? "diff-positive" : "diff-negative";
            return `<td class="amount-cell">${money.format(compareAmount)}</td><td class="${className}">${money.format(diff)}</td>`;
          })()
        : "";
      return `<tr><td>${row.category}</td><td class="amount-cell">${money.format(amount)}</td><td>${share.toFixed(1)}%</td>${compareCells}</tr>`;
    })
    .join("");
}

function renderTable() {
  const filter = $("#filterCategory").value;
  const expenses = currentLedger()
    .expenses.filter((expense) => filter === "全部類別" || expense.category === filter)
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
    : `<tr><td colspan="7">目前沒有新增 invoice 或手動入庫紀錄。</td></tr>`;
}

function renderTabs() {
  document.querySelectorAll(".project-tab").forEach((tab) => {
    const isActive = tab.dataset.project === currentProjectKey();
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  $("#yearTabs").innerHTML = currentProject()
    .years.map((year) => {
      const isActive = year === selectedYear();
      return `<button class="year-tab ${isActive ? "is-active" : ""}" type="button" role="tab" aria-selected="${isActive}" data-year="${year}">${year}</button>`;
    })
    .join("");
}

function render() {
  const spent = totalSpent();
  const totals = categoryTotals();
  renderTabs();
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
  currentLedger().expenses.push({
    id: crypto.randomUUID(),
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

function exportCsv() {
  const header = ["Project", "Date", "Category", "Amount NTD", "Vendor", "Invoice", "Note"];
  const rows = currentLedger().expenses.map((expense) => [
    currentProject().name,
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

  document.querySelector(".project-tabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-project]");
    if (!tab) return;
    state.activeProject = tab.dataset.project;
    $("#filterCategory").value = "全部類別";
    render();
  });

  $("#yearTabs").addEventListener("click", (event) => {
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
