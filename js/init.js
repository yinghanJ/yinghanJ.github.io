const details = {
  "case-1": ["CASE 01 · 业务 + 数据 + 系统思维", "渠道开户注册优化", "<h3>业务问题</h3><p>三方渠道获客中，开户注册转化直接影响投入产出，也可能影响平台后续流量分配。</p><h3>行动</h3><ul><li>拆解开户全流程并持续追踪关键节点数据。</li><li>拨打 800+ 通断点客户挽回电话，用真实反馈解释流失原因。</li><li>走访 2 家同业、与同花顺交流，并实测 5 家券商开户系统。</li><li>分析外呼记录，优化触达时段与频次。</li></ul><h3>结果与认识</h3><p>推动相关优化后，渠道理论获客成本下降约 9.6%。优先让断点不产生；无法避免的断点，再尽可能承接回来。</p>"],
  "case-2": ["CASE 02 · AI + 合规 + 业务", "智能质检与知识库", "<h3>业务问题</h3><p>外呼和企业微信沟通量大，传统抽检难以覆盖全部风险；高频问答又分散在大量记录中。</p><h3>行动</h3><ul><li>搭建智能质检工具，对外呼、企微违规风险进行初检。</li><li>处理 500 万+字符录音文本与 4 个月企微记录。</li><li>沉淀 300+ 高频问答与标准话术。</li><li>基于公司本地模型探索录音、直播合规辅助工具。</li></ul><h3>结果</h3><p>实现较大范围自动化覆盖，质检效率提升 90%+，让分散经验逐步成为可复用的业务知识。</p>"],
  "case-3": ["CASE 03 · 客户经营 + BI + 自动化", "从单次服务到规模化经营", "<h3>现场观察</h3><p>约 4 个月触达 3,000+ 客户后，我发现很多问题虽然表现不同，底层需求却反复出现。</p><h3>行动</h3><ul><li>归类高频问题并沉淀 SOP。</li><li>结合持仓和交易行为开展客户分层。</li><li>搭建周报自动化流程，每周减少约 3 小时人工整理。</li><li>推进全渠道 BI 经营看板。</li></ul><h3>思考变化</h3><p>从“解决一个客户的问题”，转向“形成能够服务更多客户的方法”。</p>"],
  "work-pudong": ["2026.04 — 至今", "上海浦东分公司 · 分支机构轮岗", "<p>第一次真正进入证券业务一线，接触渠道获客、开户注册与客户经营，逐渐形成三条工作主线：新客开户优化、客户经营、AI 与业务结合。</p><h3>这段经历带给我什么</h3><p>数据可以告诉我客户在哪里流失，一线实践帮助我理解为什么流失。我的工作方式也由完成单项任务，转向发现共性问题并沉淀可复制的方法。</p>"],
  "work-hq": ["2025.06 — 2026.03", "财富业务管理总部数字金融部", "<p>围绕 7 款重点产品分析客户持仓、盈亏、APP 活跃度与页面访问特征，向 7 家营业部输出高潜客户名单，并为 22 家营业部智能投顾运营提供数据支持。</p><h3>主要工作</h3><p>参与经营指标体系和看板建设，并搭建 AI 质检工具与问答知识库，把分散数据转化为运营管理和复盘工具。</p>"],
  "work-lab": ["2024.07 — 2024.11", "北京昌平实验室 · 助理工程师实习生", "<p>参与癌症早筛及候选靶点筛选，围绕高维基因表达数据开展预处理、统计分析与候选特征筛选。</p><h3>使用的方法</h3><p>差异检验、多重检验校正、机器学习、多组学数据整合与模型验证，并关注敏感度、特异性和 AUC 等评价指标。</p>"],
  "edu-ku": ["2021.09 — 2024.06 · 丹麦", "哥本哈根大学", "<p>攻读生物信息学（计算机科学方向）理学硕士，建立数据、算法与计算机基础。</p><h3>主要学习</h3><p>高级机器学习、高级算法、高维数据分析；硕士论文围绕 UK Biobank 数据，探索代谢相关脂肪性肝病的分子风险标志物及相关并发症。</p>"],
  "edu-nus": ["2022.08 — 2022.12 · 新加坡", "新加坡国立大学", "<p>作为生物信息学交换生获得全额奖学金。在新的学术体系和文化环境里继续计算与生命科学训练，也强化了我适应陌生环境、独立学习与跨文化沟通的能力。</p>"],
  "edu-aua": ["2017.09 — 2021.06 · 中国", "安徽农业大学", "<p>环境科学（中外合作办学）理学学士，合作院校为 Colorado State University。GPA 3.99，专业排名 1/74。</p><h3>当时在做什么</h3><p>学习环境科学与基础研究方法，并参与使用 CRISPR-Cas9 构建基因突变体的本科项目。这是我走向生物信息学、数据与算法的起点。</p>"]
};

const nav = document.querySelector("#site-nav");
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateHeroTransition() {
  const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight * .72, 1)));
  hero.style.setProperty("--hero-progress", progress.toFixed(3));
  header.classList.toggle("scrolled", window.scrollY > hero.offsetHeight - 90);
}

function cinematicScroll(target, duration = 750) {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  const offset = window.innerWidth <= 760 ? 70 : 82;
  const destination = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
  if (reduceMotion) {
    window.scrollTo(0, destination);
    root.style.scrollBehavior = previousScrollBehavior;
    return;
  }
  const start = window.scrollY;
  const end = destination;
  const startedAt = performance.now();
  const ease = value => value < .5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
  function frame(now) {
    const progress = Math.min(1, (now - startedAt) / duration);
    window.scrollTo(0, start + (end - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(frame);
    else {
      window.scrollTo(0, end);
      root.style.scrollBehavior = previousScrollBehavior;
    }
  }
  requestAnimationFrame(frame);
}

document.querySelectorAll(".hero-explore, .about-next").forEach(link => link.addEventListener("click", event => {
  const target = document.querySelector(link.getAttribute("href"));
  if (!target) return;
  event.preventDefault();
  cinematicScroll(target);
}));

window.addEventListener("load", () => {
  if (window.location.hash !== "#about") return;
  const target = document.querySelector("#about");
  if (!target) return;
  requestAnimationFrame(() => requestAnimationFrame(() => cinematicScroll(target)));
});
window.addEventListener("scroll", updateHeroTransition, { passive: true });
window.addEventListener("resize", updateHeroTransition);
window.addEventListener("load", updateHeroTransition);
updateHeroTransition();

const sectionNavLinks = [...nav.querySelectorAll('a[href^="#"]')];
const sectionNavItems = sectionNavLinks.map(link => ({
  link,
  section: document.querySelector(link.getAttribute("href"))
})).filter(item => item.section);

sectionNavLinks.forEach(link => link.addEventListener("click", event => {
  const href = link.getAttribute("href");
  const target = href === "#top" ? hero : document.querySelector(href);
  if (!target) return;
  event.preventDefault();
  cinematicScroll(target);
}));

function updateActiveNavigation() {
  const marker = window.scrollY + (window.innerWidth <= 760 ? 96 : 120);
  let active = sectionNavItems[0];
  sectionNavItems.forEach(item => {
    const sectionTop = item.section.getBoundingClientRect().top + window.scrollY;
    if (sectionTop <= marker) active = item;
  });
  sectionNavLinks.forEach(link => {
    const selected = active && link === active.link;
    link.classList.toggle("is-active", selected);
    if (selected) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);
updateActiveNavigation();

const dialog = document.querySelector("#detail-dialog");
function openDetail(key) {
  const item = details[key];
  if (!item) return;
  document.querySelector("#dialog-kicker").textContent = item[0];
  document.querySelector("#dialog-title").textContent = item[1];
  document.querySelector("#dialog-body").innerHTML = item[2];
  dialog.showModal();
}
document.querySelectorAll("[data-open]").forEach(card => {
  card.addEventListener("click", () => openDetail(card.dataset.open));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail(card.dataset.open);
    }
  });
});
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  }
}), { threshold: .08 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
