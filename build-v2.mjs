import { readFile, writeFile } from 'node:fs/promises'

const image = await readFile(new URL('./assets/phantom-heist.png', import.meta.url))
const background = `data:image/png;base64,${image.toString('base64')}`

const client = `window.__ModuleLoader__.load({
  id: '@akira/dsh-client-ui-skin-phantom-heist',
  factory: () => {
    const STYLE_ID = 'dsh-phantom-heist-style'
    const OWNER = 'phantom-heist'
    const TITLE = 'KID × KIRA · DeepSeek Harness'
    const BACKGROUND = ${JSON.stringify(background)}
    const CSS = String.raw\`
      body[data-dsh-phantom-heist] {
        --phantom-blue: #73a9ff;
        --phantom-silver: #d9e7ff;
        --phantom-red: #ed4c53;
        --phantom-gold: #c7a96a;
        --phantom-ink: #05070c;
        --phantom-sidebar-width: 280px;
        --phantom-titlebar-height: 0px;
        background-image:
          linear-gradient(90deg, rgba(1,7,19,.16) 0%, rgba(3,6,12,.30) 28%, rgba(4,5,9,.38) 50%, rgba(13,2,4,.26) 72%, rgba(18,2,3,.16) 100%),
          url(\${BACKGROUND}) !important;
        background-color: var(--phantom-ink) !important;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
        color: #f2f5fb;
        isolation: isolate;
      }

      body[data-dsh-phantom-heist] [data-dsh-image-theme-backdrop] { display: none !important; }

      body[data-dsh-phantom-heist] [data-phantom-backdrop] {
        position: fixed;
        top: calc(var(--phantom-titlebar-height) + 24px);
        right: 0;
        bottom: 8px;
        left: var(--phantom-sidebar-width);
        z-index: 0;
        pointer-events: none;
        background-image:
          linear-gradient(90deg, rgba(3,9,23,.10), rgba(2,5,10,.24) 35%, rgba(4,4,8,.28) 65%, rgba(24,3,5,.10)),
          url(\${BACKGROUND});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: inset 0 0 90px rgba(0,0,0,.24);
      }

      body[data-dsh-phantom-heist] #root {
        position: relative;
        z-index: 1;
        background: transparent !important;
      }

      body[data-dsh-phantom-heist] :is(
        #root > div,
        [class*='frame'],
        [class*='mainCol'],
        [class*='mainPane'],
        [class*='contentCol'],
        [class*='contentPane'],
        [class*='chatView'],
        [data-pane='main'],
        [data-conversation-scroll],
        [data-phase],
        [data-chat-flow]
      ) {
        background-color: transparent !important;
        background-image: none !important;
      }

      body[data-dsh-phantom-heist] [data-chat-flow] { position: relative; z-index: 1; }
      body[data-dsh-phantom-heist] [data-chat-flow]::before {
        content: '';
        position: absolute;
        inset: -16px max(-3vw, -44px);
        z-index: -1;
        pointer-events: none;
        background: radial-gradient(ellipse at center, rgba(3,5,10,.60) 0%, rgba(3,5,10,.34) 56%, transparent 82%);
      }

      body[data-dsh-phantom-heist] :is([data-pane='sidebar'], [class*='sidebarCol']) {
        position: relative;
        z-index: 12;
        border-right: 1px solid rgba(205,223,255,.65);
        box-shadow: 8px 0 36px rgba(0,0,0,.42), 1px 0 0 rgba(115,169,255,.45);
      }

      body[data-dsh-phantom-heist] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 22% 10%, rgba(68,126,220,.18), transparent 26%),
          radial-gradient(circle at 82% 82%, rgba(128,25,35,.13), transparent 28%),
          repeating-linear-gradient(135deg, transparent 0 16px, rgba(217,231,255,.018) 16px 17px),
          linear-gradient(180deg, rgba(7,24,59,.985), rgba(4,11,28,.98) 48%, rgba(8,7,15,.985)) !important;
        border: 1px solid rgba(217,231,255,.42);
        box-shadow: inset 0 0 0 5px rgba(4,12,30,.82), inset 0 0 0 6px rgba(115,169,255,.32), inset -22px 0 44px rgba(0,0,0,.24);
      }

      body[data-dsh-phantom-heist] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
        content: '';
        position: absolute;
        inset: 10px;
        z-index: 0;
        pointer-events: none;
        border: 1px solid rgba(199,169,106,.64);
        clip-path: polygon(0 0,42% 0,46% 5px,54% 5px,58% 0,100% 0,100% 100%,58% 100%,54% calc(100% - 5px),46% calc(100% - 5px),42% 100%,0 100%);
        box-shadow: inset 0 0 16px rgba(115,169,255,.08);
      }

      body[data-dsh-phantom-heist] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::after {
        content: '♠  ◇  KID  ×  KIRA  ◆  ♠';
        position: absolute;
        right: 24px;
        bottom: 72px;
        left: 24px;
        z-index: 1;
        padding: 11px 8px;
        border-top: 1px solid rgba(217,231,255,.20);
        border-bottom: 1px solid rgba(199,169,106,.26);
        color: rgba(207,220,243,.34);
        font: 600 9px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
        letter-spacing: .18em;
        text-align: center;
        pointer-events: none;
      }

      body[data-dsh-phantom-heist] :is([data-pane='sidebar'], [class*='sidebarCol']) > div > * { position: relative; z-index: 1; }

      body[data-dsh-phantom-heist] :is([class*='logoRow'], [data-slot='sidebar.header']) {
        margin: 16px 18px 8px;
        padding: 12px 14px;
        border: 1px solid rgba(217,231,255,.48);
        border-radius: 10px;
        background: linear-gradient(100deg, rgba(17,47,101,.68), rgba(8,13,31,.72));
        box-shadow: inset 0 0 0 3px rgba(5,13,34,.72), 0 10px 22px rgba(0,0,0,.18);
      }

      body[data-dsh-phantom-heist] button[class*='newSession'] {
        position: relative;
        margin: 12px 22px 18px;
        min-height: 58px;
        border: 1px solid rgba(217,231,255,.74) !important;
        border-radius: 10px !important;
        background:
          linear-gradient(90deg, rgba(225,235,251,.96), rgba(184,207,241,.94) 72%, rgba(231,190,196,.90)) !important;
        color: #091b3e !important;
        clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px);
        box-shadow: 0 0 0 4px rgba(5,15,39,.88), 0 0 0 5px rgba(199,169,106,.52), 0 10px 28px rgba(0,0,0,.30);
        font-weight: 700;
        letter-spacing: .08em;
      }

      body[data-dsh-phantom-heist] button[class*='newSession']::after { content: '♠  NEW CASE'; margin-left: 10px; color: #365f9e; font-size: 9px; letter-spacing: .12em; }
      body[data-dsh-phantom-heist] button[class*='newSession']:hover {
        background: linear-gradient(100deg, #f3f7ff, #b6d2ff 60%, #e8b6bd) !important;
        box-shadow: 0 0 0 4px rgba(7,20,49,.88), 0 0 0 5px rgba(237,76,83,.54), 0 8px 30px rgba(35,85,175,.32);
      }

      body[data-dsh-phantom-heist] :is([class*='sectionHeader'], [class*='workspaceHeader']) {
        color: var(--phantom-silver) !important;
        text-shadow: 0 0 16px rgba(115,169,255,.38);
      }

      body[data-dsh-phantom-heist] :is([role='treeitem'], [class*='sessionItem'], [class*='workspaceRow']) { border-radius: 8px; }
      body[data-dsh-phantom-heist] :is([role='treeitem'], [class*='sessionItem'], [class*='workspaceRow']):hover {
        background: linear-gradient(90deg, rgba(79,132,220,.18), rgba(204,62,70,.10)) !important;
      }
      body[data-dsh-phantom-heist] :is([role='treeitem'][aria-selected='true'], [class*='sessionItem'][class*='active']) {
        background: linear-gradient(90deg, rgba(87,145,239,.28), rgba(143,49,65,.20)) !important;
        box-shadow: inset 2px 0 var(--phantom-blue), inset -1px 0 var(--phantom-red);
      }

      body[data-dsh-phantom-heist] [data-slot='sidebar.settings'] > :is(button, [role='button']) {
        margin: 10px 22px 22px;
        min-height: 52px;
        border: 1px solid rgba(217,231,255,.38);
        border-radius: 8px;
        background: linear-gradient(90deg, rgba(13,38,83,.90), rgba(8,13,28,.92) 68%, rgba(65,13,22,.70)) !important;
        color: #e9eef8 !important;
        box-shadow: inset 0 0 0 3px rgba(3,9,23,.72), 0 0 0 1px rgba(199,169,106,.34), 0 8px 22px rgba(0,0,0,.22);
      }

      body[data-dsh-phantom-heist] [data-phantom-sidebar-mark] {
        position: absolute !important;
        right: 44px;
        bottom: 132px;
        left: 44px;
        z-index: 1;
        display: grid;
        place-items: center;
        min-height: 150px;
        pointer-events: none;
        opacity: .28;
        color: var(--phantom-silver);
        background:
          radial-gradient(circle, rgba(70,123,217,.22), transparent 58%),
          linear-gradient(135deg, transparent 49.5%, rgba(217,231,255,.22) 50%, transparent 50.5%);
      }

      body[data-dsh-phantom-heist] [data-phantom-sidebar-mark]::before {
        content: '♠';
        font: 700 70px/1 Georgia, serif;
        text-shadow: -10px 0 24px rgba(78,142,255,.8), 12px 0 24px rgba(237,76,83,.55);
      }

      body[data-dsh-phantom-heist] [data-phantom-sidebar-mark]::after {
        content: 'PHANTOM  ／  JUDGEMENT';
        position: absolute;
        bottom: 8px;
        font: 600 8px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
        letter-spacing: .18em;
      }

      body[data-dsh-phantom-heist] [data-phase='hero'] h1::after {
        content: 'KID  ×  KIRA';
        display: block;
        margin-top: 10px;
        color: rgba(221,230,246,.68);
        font: 600 11px/1.2 ui-monospace, SFMono-Regular, Consolas, monospace;
        letter-spacing: .34em;
        text-shadow: -8px 0 18px rgba(78,142,255,.55), 8px 0 18px rgba(237,76,83,.48);
      }

      body[data-dsh-phantom-heist] [data-composer-card] {
        position: relative;
        border: 2px solid transparent !important;
        border-radius: 22px !important;
        background:
          linear-gradient(145deg, rgba(7,18,42,.90), rgba(6,8,15,.92) 55%, rgba(34,7,12,.88)) padding-box,
          linear-gradient(100deg, var(--phantom-blue), rgba(223,232,247,.92) 47%, var(--phantom-gold) 52%, var(--phantom-red)) border-box !important;
        box-shadow: 0 18px 58px rgba(0,0,0,.48), inset 0 0 0 5px rgba(2,7,18,.70), 0 0 28px rgba(84,132,224,.12);
        backdrop-filter: blur(10px) saturate(115%);
      }

      body[data-dsh-phantom-heist] [data-composer-card]::before {
        content: '♠  PHANTOM  ／  JUDGEMENT  ◆';
        position: absolute;
        top: -12px;
        left: 50%;
        z-index: 3;
        translate: -50% 0;
        padding: 4px 16px;
        border: 1px solid rgba(216,227,245,.62);
        border-radius: 999px;
        background: linear-gradient(90deg, #153c7e, #111522 48%, #67151c);
        color: #edf3ff;
        font: 600 9px/1.2 ui-monospace, SFMono-Regular, Consolas, monospace;
        letter-spacing: .16em;
        white-space: nowrap;
        box-shadow: 0 6px 18px rgba(0,0,0,.38);
      }

      body[data-dsh-phantom-heist] [data-composer-card] textarea { color: #edf3ff !important; caret-color: var(--phantom-blue); }
      body[data-dsh-phantom-heist] [data-composer-card] textarea::placeholder { color: rgba(202,214,235,.48) !important; }
      body[data-dsh-phantom-heist] [data-composer-card] button[class*='primary'] {
        border: 1px solid rgba(231,238,252,.45) !important;
        background: linear-gradient(135deg, #467fd1 0%, #334c84 46%, #8f2730 100%) !important;
        color: #fff !important;
        box-shadow: 0 0 0 3px rgba(6,10,20,.72), 0 0 20px rgba(105,146,230,.26);
      }

      body[data-dsh-phantom-heist] :is(button,[role='button']):focus-visible,
      body[data-dsh-phantom-heist] :is(input,textarea):focus-visible { outline: 2px solid var(--phantom-silver) !important; outline-offset: 2px; }
      body[data-dsh-phantom-heist] ::selection { background: rgba(237,76,83,.58); color: #fff; }

      body[data-dsh-phantom-heist] [data-phantom-chrome] { position: fixed; z-index: 20; pointer-events: none; }
      body[data-dsh-phantom-heist] [data-phantom-chrome='top-rail'] {
        top: var(--phantom-titlebar-height);
        left: var(--phantom-sidebar-width);
        right: 0;
        height: 24px;
        border-top: 1px solid rgba(217,231,255,.62);
        border-bottom: 1px solid rgba(199,169,106,.74);
        background: linear-gradient(90deg, rgba(21,68,145,.96), rgba(7,10,20,.91) 46%, rgba(17,8,14,.94) 54%, rgba(116,17,26,.96));
        box-shadow: 0 5px 18px rgba(0,0,0,.36), inset 0 -4px 9px rgba(0,0,0,.30);
      }
      body[data-dsh-phantom-heist] [data-phantom-chrome='top-rail']::after {
        content: '♠   KID   ×   KIRA   ◆';
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        padding: 1px 18px;
        color: rgba(238,243,252,.88);
        font: 600 9px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
        letter-spacing: .22em;
        text-shadow: -10px 0 16px #4987e7, 10px 0 16px #b72d38;
      }
      body[data-dsh-phantom-heist] [data-phantom-chrome='bottom-rail'] {
        left: var(--phantom-sidebar-width);
        right: 0;
        bottom: 0;
        height: 8px;
        border-top: 1px solid rgba(199,169,106,.76);
        background: linear-gradient(90deg, #214d97, #151927 46%, #351017 56%, #8b202a);
        box-shadow: 0 -4px 16px rgba(0,0,0,.28);
      }

      @media (max-width: 820px) {
        body[data-dsh-phantom-heist] { background-position: center top !important; }
        body[data-dsh-phantom-heist] [data-phantom-chrome] { display: none; }
        body[data-dsh-phantom-heist] [data-composer-card] { border-radius: 15px !important; }
      }
      @media (prefers-reduced-motion: no-preference) {
        body[data-dsh-phantom-heist] [data-composer-card] { animation: phantom-arrive .35s ease-out; }
        @keyframes phantom-arrive { from { opacity: .72; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      }
    \`

    function createChrome(name) {
      const element = document.createElement('div')
      element.dataset.phantomChrome = name
      element.dataset.skinOwner = OWNER
      element.setAttribute('aria-hidden', 'true')
      return element
    }

    function apply(ctx) {
      const body = document.body
      const originalTitle = document.title
      const owned = new Set()
      let observer
      let resizeObserver

      document.head.querySelector('#' + STYLE_ID)?.remove()
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.dataset.skinOwner = OWNER
      style.textContent = CSS
      document.head.append(style)
      owned.add(style)

      const backdrop = document.createElement('div')
      backdrop.dataset.phantomBackdrop = ''
      backdrop.dataset.skinOwner = OWNER
      backdrop.setAttribute('aria-hidden', 'true')
      document.body.prepend(backdrop)
      owned.add(backdrop)

      for (const name of ['top-rail', 'bottom-rail']) {
        const element = createChrome(name)
        document.body.append(element)
        owned.add(element)
      }

      const syncLayout = () => {
        const sidebar = document.querySelector(\":is([data-pane='sidebar'], [class*='sidebarCol'])\")
        if (!(sidebar instanceof HTMLElement)) return
        const bounds = sidebar.getBoundingClientRect()
        if (bounds.width > 0) body.style.setProperty('--phantom-sidebar-width', bounds.right + 'px')
        body.style.setProperty('--phantom-titlebar-height', Math.max(0, bounds.top) + 'px')
        const sidebarRoot = sidebar.querySelector(':scope > div')
        if (sidebarRoot instanceof HTMLElement && !sidebarRoot.querySelector('[data-phantom-sidebar-mark]')) {
          const mark = document.createElement('div')
          mark.dataset.phantomSidebarMark = ''
          mark.dataset.skinOwner = OWNER
          mark.setAttribute('aria-hidden', 'true')
          sidebarRoot.append(mark)
          owned.add(mark)
        }
        if (!resizeObserver) {
          resizeObserver = new ResizeObserver(syncLayout)
          resizeObserver.observe(sidebar)
        }
      }

      body.dataset.dshPhantomHeist = ''
      document.title = TITLE
      syncLayout()
      observer = new MutationObserver(syncLayout)
      observer.observe(body, { childList: true, subtree: true })

      ctx.effect(() => () => {
        observer?.disconnect()
        resizeObserver?.disconnect()
        owned.forEach((element) => element.remove())
        delete body.dataset.dshPhantomHeist
        body.style.removeProperty('--phantom-sidebar-width')
        body.style.removeProperty('--phantom-titlebar-height')
        if (document.title === TITLE) document.title = originalTitle
      }, 'ui-skin-phantom-heist: KID and KIRA standalone chrome')
    }

    return { apply }
  },
})
`

await writeFile(new URL('./lib/client.js', import.meta.url), client)
