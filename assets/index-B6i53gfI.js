import"./player-ChRZ1qbj.js";var e=new URL(`poster-JG5D2gG2.webp`,import.meta.url).href,t={cinema:{name:`Matinee`,type:`Cinema player`,description:`A widescreen screening room with a lights-down mode.`,tools:`<button data-action="lights" aria-pressed="false">Dim room</button>`},lesson:{name:`Field Notes`,type:`Learning player`,description:`Follow three observation points as the water passes the ledge.`,tools:`<h2>Observation points</h2>
      <nav class="moments" aria-label="Observation points">
        <button data-time="0"><span>0:00</span> The dark ledge</button>
        <button data-time="4"><span>0:04</span> The main cascade</button>
        <button data-time="8"><span>0:08</span> The foam below</button>
      </nav>
      <label class="speed">Playback speed
        <select><option value=".5">0.5×</option><option value=".75">0.75×</option>
        <option value="1" selected>1×</option><option value="1.5">1.5×</option></select>
      </label>`},replay:{name:`Replay Desk`,type:`Sports replay player`,description:`Set two points on the timeline and replay that segment.`,tools:`<div class="replay-tools" role="group" aria-label="Replay range">
      <button data-action="in">Mark in</button><output data-mark="in">0:00</output>
      <button data-action="out">Mark out</button><output data-mark="out">0:12</output>
      <button data-action="loop" aria-pressed="false">Loop range</button>
    </div><p class="replay-state" role="status"></p>`},pocket:{name:`Pocket Falls`,type:`Vertical video player`,description:`Watch in portrait, or reveal the full width of the waterfall.`,tools:`<button data-action="crop" aria-pressed="true">Fill portrait</button>`},archive:{name:`Stillroom`,type:`Archive player`,description:`Pause on a detail and examine the footage one frame at a time.`,tools:`<div class="archive-tools" role="group" aria-label="Frame stepping">
      <button data-step="-1" aria-label="Previous frame">← Frame</button>
      <output class="frame-number" aria-label="Frame number"></output>
      <button data-step="1" aria-label="Next frame">Frame →</button>
    </div>`}};function n(t,n){document.body.dataset.skin=n,document.title=`${t.name} | Video.js Skin`,document.querySelector(`#entry`).innerHTML=`
    <a class="back" href="./">All five skins</a>
    <header class="film-heading">
      <p class="type">${t.type}</p><h1>${t.name}</h1>
      <p class="summary">${t.description}</p>
    </header>
    <video-player content-title="Forest waterfall">
      <media-container class="player" aria-label="${t.name} waterfall player">
        <div class="screen">
          <video src="../waterfall.mp4" poster="${e}" playsinline preload="metadata"></video>
        </div>
        <media-controls class="deck" aria-label="Playback controls">
          <div class="transport">
            <media-play-button title="Play or pause">
              <span class="play-icon" aria-hidden="true">▶</span>
              <span class="pause-icon" aria-hidden="true">Ⅱ</span>
            </media-play-button>
            <media-time-slider>
              <media-slider-track>
                <media-slider-buffer></media-slider-buffer><media-slider-fill></media-slider-fill>
              </media-slider-track>
              <media-slider-thumb></media-slider-thumb>
            </media-time-slider>
            <div class="time"><media-time type="current"></media-time><span aria-hidden="true">/</span><media-time type="duration"></media-time></div>
            <div class="audio" role="group" aria-label="Audio controls">
              <media-mute-button>
                <span class="mute-label" aria-hidden="true">Mute</span>
                <span class="unmute-label" aria-hidden="true">Unmute</span>
              </media-mute-button>
              <media-volume-slider>
                <media-slider-track><media-slider-fill></media-slider-fill></media-slider-track>
                <media-slider-thumb></media-slider-thumb>
              </media-volume-slider>
            </div>
            <media-fullscreen-button title="Toggle fullscreen"><span aria-hidden="true">⛶</span></media-fullscreen-button>
          </div>
        </media-controls>
        <section class="tools" aria-label="${t.type} options">${t.tools}</section>
        <media-hotkey keys="Space" action="togglePaused"></media-hotkey>
        <media-hotkey keys="f" action="toggleFullscreen"></media-hotkey>
        <media-status-announcer></media-status-announcer>
        <media-error-dialog>
          <media-dialog-popup class="error">
            <media-dialog-title></media-dialog-title><media-dialog-description></media-dialog-description>
            <media-dialog-close>Close</media-dialog-close>
          </media-dialog-popup>
        </media-error-dialog>
      </media-container>
    </video-player>
    <footer><span>Silent footage</span><a href="https://www.pexels.com/video/river-flowing-in-the-forest-8191323/">Film by Roman Odintsov</a></footer>`;let r=document.querySelector(`.player`),a=r.querySelector(`video`),o=r.querySelector(`.tools`);i[n](r,a,o)}function r(e,t,n,r=!1){e.addEventListener(`click`,()=>{let i=t.classList.toggle(n);e.setAttribute(`aria-pressed`,String(r?!i:i))})}var i={cinema(e,t,n){r(n.querySelector(`button`),document.body,`dimmed`)},lesson(e,t,n){let r=n.querySelector(`select`);r.addEventListener(`change`,()=>{t.playbackRate=Number(r.value)});let i=[...n.querySelectorAll(`[data-time]`)];for(let e of i)e.addEventListener(`click`,()=>{t.currentTime=Number(e.dataset.time)});function a(){let e=i.findLast(e=>Number(e.dataset.time)<=t.currentTime);for(let t of i)t===e?t.setAttribute(`aria-current`,`step`):t.removeAttribute(`aria-current`)}t.addEventListener(`timeupdate`,a),a()},replay(e,t,n){let r=n.querySelector(`[data-mark="in"]`),i=n.querySelector(`[data-mark="out"]`),a=n.querySelector(`.replay-state`),o=n.querySelector(`[data-action="loop"]`),s=0,c=0,l=!1,u=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function d(){r.value=u(s),i.value=u(c),e.style.setProperty(`--range-start`,`${100*s/t.duration}%`),e.style.setProperty(`--range-end`,`${100*c/t.duration}%`)}function f(){c=t.duration,d()}t.addEventListener(`loadedmetadata`,f),t.readyState>=1&&f(),n.querySelector(`[data-action="in"]`).addEventListener(`click`,()=>{t.currentTime>=c-.25?a.textContent=`Mark in before the end of the range.`:(s=t.currentTime,a.textContent=`In point set.`,d())}),n.querySelector(`[data-action="out"]`).addEventListener(`click`,()=>{t.currentTime<=s+.25?a.textContent=`Mark out after the start of the range.`:(c=t.currentTime,a.textContent=`Out point set.`,d())}),o.addEventListener(`click`,()=>{c&&(l=!l,o.setAttribute(`aria-pressed`,String(l)),a.textContent=l?`Replay loop on.`:`Replay loop off.`,l&&(t.currentTime=s))}),t.addEventListener(`timeupdate`,()=>{l&&!t.paused&&t.currentTime>=c&&(t.currentTime=s)}),t.addEventListener(`play`,()=>{l&&(t.currentTime<s||t.currentTime>=c)&&(t.currentTime=s)}),t.addEventListener(`ended`,()=>{l&&(t.currentTime=s,t.play().catch(()=>{}))})},pocket(e,t,n){r(n.querySelector(`button`),e,`fit-frame`,!0)},archive(e,t,n){let r=3e4/1001,i=n.querySelector(`.frame-number`),a=()=>Math.max(0,Math.ceil(t.duration*r-.001)-1),o=()=>Number.isFinite(t.duration)?Math.min(a(),Math.floor(t.currentTime*r+.001)):0;function s(){i.value=`Frame ${String(o()+1).padStart(3,`0`)}`}for(let e of n.querySelectorAll(`[data-step]`))e.addEventListener(`click`,()=>{Number.isFinite(t.duration)&&(t.pause(),t.currentTime=Math.max(0,Math.min(a(),o()+Number(e.dataset.step)))/r,s())});t.addEventListener(`timeupdate`,s),s()}},a=new URLSearchParams(location.search).get(`skin`);Object.hasOwn(t,a)&&n(t[a],a);