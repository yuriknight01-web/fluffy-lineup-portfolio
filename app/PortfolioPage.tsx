"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "en" | "zh";

const content = {
  en: {
    nav: ["Overview", "How it plays", "Features", "Gallery", "Development"],
    navIds: ["overview", "gameplay", "features", "gallery", "development"],
    eyebrow: "A creature auto-battler by Xitao Liao",
    title: "Fluffy Lineup",
    chineseTitle: "绒星排排乐",
    tagline: "Cute creatures. Smart lineups.",
    heroCopy:
      "Build a five-pet squad, evolve matching friends, and out-plan seven rivals in a warm, handcrafted auto-battler.",
    watch: "Explore the game",
    steam: "Steam Demo · Coming Soon",
    role: "Game Designer & Developer",
    overviewLabel: "Project overview",
    overviewTitle: "A cozy strategy game with a competitive little heart.",
    overviewCopy:
      "Fluffy Lineup combines an inviting pet-collection fantasy with readable, meaningful choices. Every shop phase asks a simple question: buy, merge, level, or save? Every battle reveals whether the order of your lineup was clever enough.",
    facts: [
      ["Format", "8-player PVE"],
      ["Engine", "Godot 4"],
      ["Platform", "Windows · Steam"],
      ["Status", "Demo in development"],
    ],
    flowLabel: "Core loop",
    flowTitle: "Four clear beats. Endless little decisions.",
    steps: [
      {
        no: "01",
        title: "Shop with a plan",
        body: "Read the odds, lock the right offers, and decide whether your coins become tempo now or options later.",
        image: "/media/shop.webp",
        alt: "Fluffy Lineup wooden pet shop environment",
      },
      {
        no: "02",
        title: "Arrange the lineup",
        body: "Five positions form a real strategy layer: the rightmost pet leads, while timing and traits shape every swap.",
        image: "/media/pets.webp",
        alt: "Fluffy Lineup creatures arranged across the battlefield",
      },
      {
        no: "03",
        title: "Watch plans collide",
        body: "Pets attack in readable sequences with distinct elemental timing, impact, sound, and carefully staged reactions.",
        image: "/media/battle.webp",
        alt: "Fluffy Lineup bright outdoor battle arena",
      },
      {
        no: "04",
        title: "Climb the final table",
        body: "Each round feeds an eight-player result, turning a cute squad into a story about adaptation and survival.",
        image: "/media/result.webp",
        alt: "Fluffy Lineup celebratory result arena",
      },
    ],
    featuresLabel: "What makes it special",
    featuresTitle: "Built around personality, clarity, and replayable team stories.",
    features: [
      ["✦", "59 pets", "A broad roster with individual roles, traits, rarities, and visual identities."],
      ["③", "Three-form evolution", "Merge three matching pets, upgrade the data first, then reveal the new form with a dedicated effect."],
      ["◉", "Seven affinities", "Nature, Flame, Tide, Frost, Starlight, Shadow, and Guardian support both focused and mixed teams."],
      ["↔", "Position matters", "Lineup order, smooth swaps, trainer passives, and trigger timing resolve before the next attack."],
      ["8", "Eight-player structure", "The Demo uses seven capable AI rivals while preserving the architecture for future multiplayer."],
      ["♪", "Authored battle feel", "Per-attack timelines, layered VFX, music transitions, hit reactions, and floating numbers keep combat readable."],
    ],
    videoLabel: "Gameplay",
    videoTitle: "See a full round take shape.",
    videoBody:
      "The portfolio player is ready for the captured Steam Demo. The final gameplay video will be added here after the current Demo recording pass.",
    videoStatus: "Gameplay capture in progress",
    videoStatusSmall: "Demo footage will replace this poster without changing the page.",
    galleryLabel: "Art direction",
    galleryTitle: "A warm world made for collecting tiny heroes.",
    galleryCopy:
      "Soft light, storybook materials, readable silhouettes, and playful UI keep the strategy welcoming even as the systems deepen.",
    galleryItems: [
      ["/media/lobby.webp", "The sunlit game lobby", "A welcoming hub for every mode."],
      ["/media/pets.webp", "Creature roster", "Distinct silhouettes stay readable in a five-pet lineup."],
      ["/media/effects.webp", "Combat expression", "Elemental timing and impact are tuned per attack family."],
    ],
    developmentLabel: "My contribution",
    developmentTitle: "Designing the system and the feeling together.",
    developmentIntro:
      "I designed and developed Fluffy Lineup as an end-to-end game project, treating rules, interface, art integration, audio, and battle pacing as one connected player experience.",
    pillars: [
      ["01", "System design", "Economy, shop odds, pet merging, progression, affinities, trainer passives, lineup rules, eight-player results, and medium-high PVE opponents."],
      ["02", "UX & interface", "A 16:9 shop, drag-and-drop formation, readiness timer, codex, settings, player profile, battle presentation, and ranked-ready result layouts."],
      ["03", "Combat direction", "Sequential attacks, settle-before-strike rules, smooth swaps, facing audits, form-aware animations, custom sound cues, and element-specific VFX timelines."],
      ["04", "Product planning", "A separated Steam Demo configuration, versioned atomic saves, bilingual settings, content scope, Coming Soon strategy, and room for future PVP."],
    ],
    footerKicker: "Next milestone",
    footerTitle: "A complete Steam Demo, then the stars.",
    footerCopy:
      "The current focus is a polished free Demo that lets players finish a full eight-player match and share meaningful feedback before release.",
    footerButton: "Steam page coming soon",
    footerAuthor: "Designed & developed by Xitao Liao",
    close: "Close image",
  },
  zh: {
    nav: ["项目概览", "玩法流程", "特色系统", "视觉展示", "开发过程"],
    navIds: ["overview", "gameplay", "features", "gallery", "development"],
    eyebrow: "Xitao Liao 独立设计与开发",
    title: "绒星排排乐",
    chineseTitle: "Fluffy Lineup",
    tagline: "可爱萌宠，聪明排阵。",
    heroCopy:
      "组建五只萌宠的队伍，合成并进化相同伙伴，在温暖手绘的自走棋对局中战胜七名对手。",
    watch: "探索游戏",
    steam: "Steam Demo · 即将推出",
    role: "游戏设计与开发",
    overviewLabel: "项目概览",
    overviewTitle: "轻松可爱的外表，藏着认真好玩的策略。",
    overviewCopy:
      "《绒星排排乐》把收集萌宠的快乐和清晰、有意义的选择结合起来。每个商店阶段都要决定：购买、合成、升级，还是存钱？每场战斗都会验证你的阵容顺序是否足够聪明。",
    facts: [
      ["对局形式", "8 人 PVE"],
      ["游戏引擎", "Godot 4"],
      ["目标平台", "Windows · Steam"],
      ["当前状态", "Demo 制作中"],
    ],
    flowLabel: "核心循环",
    flowTitle: "四个清晰阶段，带来不断变化的小决策。",
    steps: [
      {
        no: "01",
        title: "有计划地逛商店",
        body: "观察刷新概率、锁定合适商品，判断金币应该立即转化为战力，还是留给下一轮更多可能。",
        image: "/media/shop.webp",
        alt: "绒星排排乐木质萌宠商店场景",
      },
      {
        no: "02",
        title: "调整阵容顺序",
        body: "固定五个位置构成真正的策略层：最右侧宠物率先出战，换位、特性与触发时机都会影响结果。",
        image: "/media/pets.webp",
        alt: "绒星排排乐战斗场地中的萌宠阵容",
      },
      {
        no: "03",
        title: "观看策略碰撞",
        body: "宠物依次攻击，不同属性拥有独立节奏、打击、音效和受击反馈，让战斗清晰又有表现力。",
        image: "/media/battle.webp",
        alt: "绒星排排乐明亮的户外对战场景",
      },
      {
        no: "04",
        title: "进入最终排名",
        body: "每轮结果都会进入八人排名，让一支可爱阵容逐渐变成关于调整、坚持与反败为胜的故事。",
        image: "/media/result.webp",
        alt: "绒星排排乐庆祝胜利的结算场景",
      },
    ],
    featuresLabel: "游戏特色",
    featuresTitle: "围绕个性、清晰度与可反复游玩的阵容故事打造。",
    features: [
      ["✦", "59 只萌宠", "丰富宠物拥有独立定位、特性、稀有度和视觉个性。"],
      ["③", "三形态进化", "三只相同宠物自动合成，先升级数据，再通过专属特效呈现全新形态。"],
      ["◉", "七种属性", "自然、烈焰、潮汐、霜雪、星光、暗影与守护，既支持纯属性，也支持混合阵容。"],
      ["↔", "站位决定结果", "阵容顺序、平滑换位、训练家特性和触发时机都会在下一次攻击前完成结算。"],
      ["8", "八人对局结构", "Demo 使用七名中上水平 AI，同时为未来多人对战保留代码结构。"],
      ["♪", "精心调校的战斗", "独立攻击时间轴、分层特效、自然转场音乐、受击动作和浮字共同保证清晰度。"],
    ],
    videoLabel: "游戏视频",
    videoTitle: "观看一轮阵容如何成形。",
    videoBody:
      "作品集播放器已为 Steam Demo 实机视频准备完毕。完成当前 Demo 录制后，会把正式玩法视频直接放到这里。",
    videoStatus: "实机玩法录制中",
    videoStatusSmall: "之后只需替换视频文件，不需要重新修改页面。",
    galleryLabel: "美术方向",
    galleryTitle: "一个让人想收集小小英雄的温暖世界。",
    galleryCopy:
      "柔和光线、绘本材质、清晰轮廓和活泼 UI，让系统逐渐加深时仍然保持轻松亲切。",
    galleryItems: [
      ["/media/lobby.webp", "阳光下的游戏大厅", "所有模式共同使用的温暖入口。"],
      ["/media/pets.webp", "萌宠阵容", "不同轮廓在五只阵容中仍能保持清晰。"],
      ["/media/effects.webp", "战斗表现", "不同攻击家族拥有对应的属性节奏与打击反馈。"],
    ],
    developmentLabel: "我的工作",
    developmentTitle: "同时设计游戏系统与玩家感受。",
    developmentIntro:
      "我独立完成《绒星排排乐》的整体设计与开发，把规则、界面、美术整合、声音与战斗节奏视为同一个完整体验。",
    pillars: [
      ["01", "系统设计", "经济、商店概率、宠物合成、成长、属性、训练家特性、站位规则、八人结算与中上难度 PVE 对手。"],
      ["02", "交互与界面", "16:9 商店、拖拽阵容、准备倒计时、图鉴、设置、玩家档案、战斗演出与排位预留结算布局。"],
      ["03", "战斗导演", "依次攻击、先结算后战斗、平滑换位、面向审计、形态动作、定制音效与按属性区分的特效时间轴。"],
      ["04", "产品规划", "独立 Steam Demo 配置、版本化原子存档、双语设置、内容范围、Coming Soon 计划与未来 PVP 扩展空间。"],
    ],
    footerKicker: "下一个里程碑",
    footerTitle: "先完成 Steam Demo，再向星星出发。",
    footerCopy:
      "当前目标是一份精致的免费 Demo，让玩家完成一整局八人对战，并在正式发售前提供真正有价值的反馈。",
    footerButton: "Steam 页面即将公开",
    footerAuthor: "Xitao Liao 设计与开发",
    close: "关闭图片",
  },
} as const;

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const copy = content[locale];

  useEffect(() => {
    const stored = window.localStorage.getItem("fluffy-lineup-locale");
    const detected = navigator.languages.some((item) =>
      item.toLowerCase().startsWith("zh"),
    )
      ? "zh"
      : "en";
    const next = stored === "zh" || stored === "en" ? stored : detected;
    setLocale(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title =
      locale === "zh"
        ? "绒星排排乐 — Xitao Liao 游戏设计与开发"
        : "Fluffy Lineup — Game Design & Development by Xitao Liao";
  }, [locale]);

  useEffect(() => {
    if (lightbox === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", close);
    };
  }, [lightbox]);

  const statusLabel = useMemo(
    () => (locale === "zh" ? "Steam Demo 制作中" : "Steam Demo in development"),
    [locale],
  );

  const switchLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem("fluffy-lineup-locale", next);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Fluffy Lineup home">
          <span className="brand-mark">✦</span>
          <span>
            <strong>{locale === "zh" ? "绒星排排乐" : "Fluffy Lineup"}</strong>
            <small>Xitao Liao</small>
          </span>
        </a>
        <nav aria-label={locale === "zh" ? "页面导航" : "Page navigation"}>
          {copy.nav.map((item, index) => (
            <a key={copy.navIds[index]} href={`#${copy.navIds[index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="language-switch" aria-label="Language">
          <button
            type="button"
            className={locale === "zh" ? "active" : ""}
            aria-label="Switch to Chinese"
            onClick={() => switchLocale("zh")}
          >
            中文
          </button>
          <span>/</span>
          <button
            type="button"
            className={locale === "en" ? "active" : ""}
            aria-label="Switch to English"
            onClick={() => switchLocale("en")}
          >
            EN
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/media/hero.webp"
          alt="Fluffy Lineup sunlit pet lobby with playful animals"
        />
        <div className="hero-shade" />
        <div className="hero-sparkles" aria-hidden="true">
          <i>✦</i><i>·</i><i>✧</i><i>·</i><i>✦</i>
        </div>
        <div className="hero-content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="title-lockup">
            <span>{copy.chineseTitle}</span>
            <h1>{copy.title}</h1>
          </div>
          <p className="tagline">{copy.tagline}</p>
          <p className="hero-copy">{copy.heroCopy}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#gameplay">
              {copy.watch}<span aria-hidden="true">↓</span>
            </a>
            <span className="button button-ghost" aria-disabled="true">
              {copy.steam}
            </span>
          </div>
          <div className="author-line">
            <span className="author-avatar">XL</span>
            <span><strong>Xitao Liao</strong><small>{copy.role}</small></span>
          </div>
        </div>
        <div className="hero-status">
          <span className="pulse-dot" />
          {statusLabel}
        </div>
      </section>

      <section className="section overview" id="overview">
        <div className="section-heading">
          <p className="section-label">{copy.overviewLabel}</p>
          <h2>{copy.overviewTitle}</h2>
        </div>
        <div className="overview-layout">
          <p className="lead">{copy.overviewCopy}</p>
          <dl className="facts">
            {copy.facts.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt><dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section flow-section" id="gameplay">
        <div className="section-heading centered">
          <p className="section-label">{copy.flowLabel}</p>
          <h2>{copy.flowTitle}</h2>
        </div>
        <div className="flow-list">
          {copy.steps.map((step, index) => (
            <article className="flow-step" key={step.no}>
              <div className="flow-image-wrap">
                <img src={step.image} alt={step.alt} loading={index > 0 ? "lazy" : "eager"} />
                <span className="flow-number">{step.no}</span>
              </div>
              <div className="flow-copy">
                <span className="mini-paw">●</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-section" id="features">
        <div className="section-heading">
          <p className="section-label">{copy.featuresLabel}</p>
          <h2>{copy.featuresTitle}</h2>
        </div>
        <div className="feature-grid">
          {copy.features.map(([icon, title, body]) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section">
        <div className="video-copy">
          <p className="section-label">{copy.videoLabel}</p>
          <h2>{copy.videoTitle}</h2>
          <p>{copy.videoBody}</p>
        </div>
        <div className="video-frame">
          <img src="/media/video-poster.webp" alt="Fluffy Lineup gameplay video poster" />
          <div className="video-overlay">
            <span className="video-icon" aria-hidden="true">▶</span>
            <strong>{copy.videoStatus}</strong>
            <small>{copy.videoStatusSmall}</small>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="gallery-intro">
          <p className="section-label">{copy.galleryLabel}</p>
          <h2>{copy.galleryTitle}</h2>
          <p>{copy.galleryCopy}</p>
        </div>
        <div className="gallery-grid">
          {copy.galleryItems.map(([image, title, caption], index) => (
            <button
              className={`gallery-card gallery-card-${index + 1}`}
              type="button"
              key={image}
              onClick={() => setLightbox(index)}
              aria-label={`${title}: ${caption}`}
            >
              <img src={image} alt={title} loading="lazy" />
              <span>
                <strong>{title}</strong>
                <small>{caption}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="development-section" id="development">
        <div className="development-header">
          <p className="section-label">{copy.developmentLabel}</p>
          <h2>{copy.developmentTitle}</h2>
          <p>{copy.developmentIntro}</p>
        </div>
        <div className="pillar-list">
          {copy.pillars.map(([number, title, body]) => (
            <article className="pillar" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <footer className="project-footer">
        <img src="/media/lobby.webp" alt="" aria-hidden="true" />
        <div className="footer-shade" />
        <div className="footer-content">
          <p className="section-label">{copy.footerKicker}</p>
          <h2>{copy.footerTitle}</h2>
          <p>{copy.footerCopy}</p>
          <span className="button button-primary" aria-disabled="true">
            {copy.footerButton}
          </span>
          <small>{copy.footerAuthor} · © 2026</small>
        </div>
      </footer>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={copy.close}
          >
            ×
          </button>
          <img
            src={copy.galleryItems[lightbox][0]}
            alt={copy.galleryItems[lightbox][1]}
          />
          <p>{copy.galleryItems[lightbox][1]}</p>
        </div>
      )}
    </main>
  );
}
