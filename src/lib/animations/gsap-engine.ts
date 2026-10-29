'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { INTERACTIONS_DATA } from './interactions-data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASING_NAMES = [
  'none',
  'power1.in',
  'power1.out',
  'power1.inOut',
  'power2.in',
  'power2.out',
  'power2.inOut',
  'power3.in',
  'power3.out',
  'power3.inOut',
  'power4.in',
  'power4.out',
  'power4.out',
  'back.in',
  'back.out',
  'back.inOut',
  'bounce.in',
  'bounce.out',
  'bounce.inOut',
  'circ.in',
  'circ.out',
  'circ.inOut',
  'elastic.in',
  'elastic.out',
  'elastic.inOut',
  'expo.in',
  'expo.out',
  'expo.inOut',
  'sine.in',
  'sine.out',
  'sine.inOut',
] as const;

// Map IX3 numeric ease indices accurately:
const IX3_EASE_MAP: Record<number, string> = {
  0: 'none',
  1: 'power1.in',
  2: 'power1.out',
  3: 'power1.inOut',
  4: 'power2.in',
  5: 'power2.out',
  6: 'power2.inOut',
  7: 'power3.in',
  8: 'power3.out',
  9: 'power3.inOut',
  10: 'power4.in',
  11: 'power4.out',
  12: 'power4.inOut',
  27: 'expo.in',
  28: 'expo.out',
  29: 'expo.out',
  30: 'sine.inOut',
};

function resolveEase(easeSpec: any): string {
  if (typeof easeSpec === 'number') {
    return IX3_EASE_MAP[easeSpec] || EASING_NAMES[easeSpec] || 'power2.out';
  }
  if (easeSpec && typeof easeSpec === 'object') {
    if (easeSpec.type === 'back') {
      const curve = easeSpec.curve || 'out';
      const power = easeSpec.power ?? 1.7;
      return `back.${curve}(${power})`;
    }
    if (easeSpec.type === 'steps') {
      return `steps(${easeSpec.steps || 1})`;
    }
  }
  if (typeof easeSpec === 'string') {
    return easeSpec;
  }
  return 'power2.out';
}

function getCurrentBreakpoint(): 'main' | 'medium' | 'small' | 'tiny' {
  if (typeof window === 'undefined') return 'main';
  const w = window.innerWidth;
  if (w >= 992) return 'main';
  if (w >= 768) return 'medium';
  if (w >= 480) return 'small';
  return 'tiny';
}

function normalizePropValue(prop: string, val: any): any {
  if (val === null || val === undefined) return undefined;
  if ((prop === 'opacity' || prop === 'autoAlpha') && typeof val === 'string' && val.endsWith('%')) {
    return parseFloat(val) / 100;
  }
  return val;
}

function resolveTriggerElements(selectorSpecs: any): HTMLElement[] {
  if (!Array.isArray(selectorSpecs) || selectorSpecs.length === 0) {
    return [document.body];
  }
  const normalizedSpecs =
    typeof selectorSpecs[0] === 'string' ? [selectorSpecs] : selectorSpecs;
  const found: HTMLElement[] = [];

  for (const spec of normalizedSpecs) {
    if (!Array.isArray(spec)) continue;
    const [kind, values] = spec;
    if (kind === 'ix:class' && Array.isArray(values)) {
      if (values.length === 0) continue;
      const sel = values.map((c: string) => `.${c}`).join('');
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => found.push(el));
    } else if (kind === 'ix:attribute' && typeof values === 'string') {
      document.querySelectorAll<HTMLElement>(values).forEach((el) => found.push(el));
    } else if (kind === 'ix:id' && typeof values === 'string') {
      const el = document.querySelector<HTMLElement>(`[data-anim-id="${values}"], #${values}`);
      if (el) found.push(el);
    }
  }
  return found;
}

function resolveActionTargets(targetSpecs: any, triggerEl: HTMLElement): HTMLElement[] {
  if (!Array.isArray(targetSpecs) || targetSpecs.length === 0) {
    return [];
  }
  const found: HTMLElement[] = [];
  for (const spec of targetSpecs) {
    if (!Array.isArray(spec)) continue;
    const [kind, values, opts] = spec;
    const isWithinTrigger =
      opts &&
      opts.relationship === 'within' &&
      Array.isArray(opts.filterBy) &&
      opts.filterBy[0] === 'ix:trigger-only';

    if (kind === 'ix:trigger-only') {
      if (triggerEl && triggerEl !== document.body) found.push(triggerEl);
    } else if (kind === 'ix:class' && Array.isArray(values)) {
      if (values.length === 0) continue;
      const sel = values.map((c: string) => `.${c}`).join('');
      if (isWithinTrigger && triggerEl && triggerEl !== document.body) {
        if (triggerEl.matches(sel)) found.push(triggerEl);
        triggerEl.querySelectorAll<HTMLElement>(sel).forEach((el) => found.push(el));
      } else {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => found.push(el));
      }
    } else if (kind === 'ix:attribute' && typeof values === 'string') {
      if (isWithinTrigger && triggerEl && triggerEl !== document.body) {
        if (triggerEl.matches(values)) found.push(triggerEl);
        triggerEl.querySelectorAll<HTMLElement>(values).forEach((el) => found.push(el));
      } else {
        document.querySelectorAll<HTMLElement>(values).forEach((el) => found.push(el));
      }
    }
  }
  return found;
}

function getTargetAnimElements(targets: HTMLElement[], splitSpec: any): HTMLElement[] {
  if (!splitSpec || !splitSpec.type) return targets;
  const result: HTMLElement[] = [];
  const splitType = splitSpec.type as 'chars' | 'words' | 'lines';

  for (const el of targets) {
    let instance = (el as any).__ixSplit as SplitType | undefined;
    if (!instance) {
      instance = new SplitType(el, {
        types: splitType === 'lines' ? 'lines' : 'words,chars',
      });
      (el as any).__ixSplit = instance;
      if (splitSpec.mask) {
        el.style.overflow = 'clip';
      }
    }
    const items =
      splitType === 'chars'
        ? instance.chars
        : splitType === 'lines'
          ? instance.lines
          : instance.words;
    if (items && items.length > 0) {
      result.push(...(items as HTMLElement[]));
    } else {
      result.push(el);
    }
  }
  return result;
}

function addActionToTimeline(
  tl: gsap.core.Timeline,
  rawTargets: HTMLElement[],
  action: any,
  isFirstForTarget: boolean
) {
  const animTargets = getTargetAnimElements(rawTargets, action.splitText);
  if (animTargets.length === 0) return;

  const timing = action.timing || {};
  const props = action.properties?.['ix:transform'] || {};
  const fromVars: Record<string, any> = {};
  const toVars: Record<string, any> = {
    duration: timing.duration ?? 0.5,
    ease: resolveEase(timing.ease),
  };

  if (typeof timing.repeat === 'number') {
    toVars.repeat = timing.repeat;
  }
  if (typeof timing.yoyo === 'boolean') {
    toVars.yoyo = timing.yoyo;
  }
  if (timing.stagger && typeof timing.stagger === 'object') {
    const st: Record<string, any> = {};
    if (typeof timing.stagger.amount === 'number') st.amount = timing.stagger.amount;
    if (typeof timing.stagger.each === 'number') st.each = timing.stagger.each;
    if (timing.stagger.from) st.from = timing.stagger.from;
    toVars.stagger = st;
  }

  for (const [propName, valArr] of Object.entries(props)) {
    if (!Array.isArray(valArr)) continue;
    const [fromRaw, toRaw] = valArr;
    const fVal = normalizePropValue(propName, fromRaw);
    const tVal = normalizePropValue(propName, toRaw);
    if (fVal !== undefined) fromVars[propName] = fVal;
    if (tVal !== undefined) toVars[propName] = tVal;
  }

  const pos = timing.position ?? (isFirstForTarget ? 0 : '<');

  if (action.tt === 1) {
    // gsap.from
    tl.from(animTargets, { ...fromVars, duration: toVars.duration, ease: toVars.ease, stagger: toVars.stagger }, pos);
  } else if (action.tt === 0 || !isFirstForTarget) {
    // gsap.to
    tl.to(animTargets, toVars, pos);
  } else {
    // tt === 2: gsap.fromTo
    tl.fromTo(animTargets, fromVars, { ...toVars, immediateRender: true }, pos);
  }
}

function initSliders(cleanups: (() => void)[]) {
  const sliders = document.querySelectorAll<HTMLElement>('.ui-slider');
  sliders.forEach((slider) => {
    const mask = slider.querySelector<HTMLElement>('.ui-slider-mask');
    const nav = slider.querySelector<HTMLElement>('.ui-slider-nav');
    const leftArrow = slider.querySelector<HTMLElement>('.ui-slider-arrow-left');
    const rightArrow = slider.querySelector<HTMLElement>('.ui-slider-arrow-right');
    if (!mask) return;

    const slides = Array.from(mask.querySelectorAll<HTMLElement>(':scope > .ui-slide'));
    if (slides.length === 0) return;

    const animType = slider.getAttribute('data-animation') || 'slide';
    const duration = (parseFloat(slider.getAttribute('data-duration') || '800') || 800) / 1000;
    const spacing = slider.getAttribute('data-nav-spacing') || '3';
    const isNum = nav?.classList.contains('ui-num');

    let currentIdx = 0;

    // Initialize slide positions at index 0
    slides.forEach((slide, idx) => {
      slide.setAttribute('aria-label', `${idx + 1} of ${slides.length}`);
      slide.setAttribute('role', 'group');
      if (animType === 'cross') {
        gsap.set(slide, {
          opacity: idx === 0 ? 1 : 0,
          zIndex: idx === 0 ? 2 : 1,
          xPercent: -100 * idx,
        });
      } else {
        gsap.set(slide, {
          x: 0,
          opacity: 1,
          visibility: 'visible',
        });
      }
    });

    // Populate .ui-slider-nav dots
    const dots: HTMLElement[] = [];
    if (nav) {
      nav.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `ui-slider-dot${idx === 0 ? ' ui-active' : ''}`;
        dot.setAttribute('role', 'button');
        dot.setAttribute('aria-label', `Show slide ${idx + 1} of ${slides.length}`);
        dot.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');
        dot.setAttribute('tabindex', idx === 0 ? '0' : '-1');
        dot.style.marginLeft = `${spacing}px`;
        dot.style.marginRight = `${spacing}px`;
        if (isNum) dot.textContent = String(idx + 1);
        const onDotClick = () => goToSlide(idx);
        dot.addEventListener('click', onDotClick);
        cleanups.push(() => dot.removeEventListener('click', onDotClick));
        nav.appendChild(dot);
        dots.push(dot);
      });
    }

    function goToSlide(nextIdx: number) {
      const targetIdx = ((nextIdx % slides.length) + slides.length) % slides.length;
      if (targetIdx === currentIdx) return;
      const prevIdx = currentIdx;
      currentIdx = targetIdx;

      dots.forEach((d, i) => {
        d.classList.toggle('ui-active', i === currentIdx);
        d.setAttribute('aria-pressed', i === currentIdx ? 'true' : 'false');
        d.setAttribute('tabindex', i === currentIdx ? '0' : '-1');
      });

      if (animType === 'cross') {
        slides.forEach((s, i) => {
          if (i === currentIdx) {
            gsap.to(s, { opacity: 1, zIndex: 2, duration });
          } else if (i === prevIdx) {
            gsap.to(s, { opacity: 0, zIndex: 1, duration });
          } else {
            gsap.set(s, { opacity: 0, zIndex: 1 });
          }
        });
      } else {
        gsap.to(slides, {
          xPercent: -100 * currentIdx,
          duration,
          ease: 'power2.inOut',
        });
      }
    }

    if (leftArrow) {
      const onPrev = () => goToSlide(currentIdx - 1);
      leftArrow.addEventListener('click', onPrev);
      cleanups.push(() => leftArrow.removeEventListener('click', onPrev));
    }
    if (rightArrow) {
      const onNext = () => goToSlide(currentIdx + 1);
      rightArrow.addEventListener('click', onNext);
      cleanups.push(() => rightArrow.removeEventListener('click', onNext));
    }

    const autoplay = slider.getAttribute('data-autoplay') === 'true';
    const delayMs = parseInt(slider.getAttribute('data-delay') || '4000', 10) || 4000;
    if (autoplay && slides.length > 1) {
      const timer = window.setInterval(() => {
        if ((window as any).__PAUSE_SLIDERS) return;
        goToSlide(currentIdx + 1);
      }, delayMs);
      cleanups.push(() => window.clearInterval(timer));
    }
  });
}

export function initStandaloneInteractions(): () => void {
  if (typeof window === 'undefined') return () => {};

  document.documentElement.classList.add('ui-mod-js', 'ui-mod-ix3');

  const cleanups: (() => void)[] = [];
  const ctx = gsap.context(() => {
    const bp = getCurrentBreakpoint();

    const timelineMap = new Map<string, any>();
    for (const tl of INTERACTIONS_DATA.ix3Timelines) {
      if (!tl.deleted) timelineMap.set(tl.id, tl);
    }

    for (const inter of INTERACTIONS_DATA.ix3Interactions) {
      if (inter.deleted) continue;

      const conds = (inter as any).conditionalPlayback || (inter as any).conditions;
      if (Array.isArray(conds)) {
        const blocked = conds.some(
          (c: any) =>
            c.type === 'breakpoint' &&
            c.behavior === 'dont-animate' &&
            Array.isArray(c.breakpoints) &&
            c.breakpoints.includes(bp)
        );
        if (blocked) continue;
      }

      const triggers = (inter.triggers || []) as readonly any[];
      if (triggers.length === 0) continue;

      const firstTriggerType = triggers[0][0];
      const tlIds: readonly string[] = inter.timelineIds || [];

      if (firstTriggerType === 'ix:hover') {
        const selectorSpecs = triggers[0][2];
        const triggerEls = resolveTriggerElements(selectorSpecs);
        if (triggerEls.length === 0) continue;

        for (const tlId of tlIds) {
          const tlDef = timelineMap.get(tlId);
          if (!tlDef) continue;

          triggerEls.forEach((trigEl) => {
            const tl = gsap.timeline({ paused: true });
            const seenTargets = new Set<HTMLElement>();
            for (const action of tlDef.actions || []) {
              const rawTargets = resolveActionTargets(action.targets, trigEl);
              if (rawTargets.length === 0) continue;
              if (rawTargets.some((el) => el.classList.contains('work-img-hover'))) {
                rawTargets.forEach((el) => {
                  el.style.overflow = 'hidden';
                });
              }
              const isFirst = rawTargets.every((el) => !seenTargets.has(el));
              rawTargets.forEach((el) => seenTargets.add(el));
              addActionToTimeline(tl, rawTargets, action, isFirst);
            }
            tl.pause(0);

            const onEnter = () => tl.play();
            const onLeave = () => tl.reverse();
            trigEl.addEventListener('mouseenter', onEnter);
            trigEl.addEventListener('mouseleave', onLeave);
            cleanups.push(() => {
              trigEl.removeEventListener('mouseenter', onEnter);
              trigEl.removeEventListener('mouseleave', onLeave);
            });
          });
        }
      } else if (firstTriggerType === 'ix:click') {
        const selectorSpecs = triggers[0][2];
        const triggerEls = resolveTriggerElements(selectorSpecs);
        if (triggerEls.length === 0) continue;

        for (const tlId of tlIds) {
          const tlDef = timelineMap.get(tlId);
          if (!tlDef) continue;

          triggerEls.forEach((trigEl) => {
            const tl = gsap.timeline({ paused: true });
            const seenTargets = new Set<HTMLElement>();
            for (const action of tlDef.actions || []) {
              const rawTargets = resolveActionTargets(action.targets, trigEl);
              if (rawTargets.length === 0) continue;
              const isFirst = rawTargets.every((el) => !seenTargets.has(el));
              rawTargets.forEach((el) => seenTargets.add(el));
              addActionToTimeline(tl, rawTargets, action, isFirst);
            }
            tl.pause(0);

            let isOpen = false;
            const onClick = () => {
              isOpen = !isOpen;
              if (isOpen) tl.play();
              else tl.reverse();

              if (trigEl.classList.contains('menu-button')) {
                const navbar = trigEl.closest('.navbar');
                const navMenu = navbar?.querySelector<HTMLElement>('.nav-menu, .ui-nav-menu');
                trigEl.classList.toggle('ui--open', isOpen);
                if (navMenu) {
                  if (isOpen) {
                    navMenu.setAttribute('data-nav-menu-open', '');
                    gsap.fromTo(
                      navMenu,
                      { display: 'block', opacity: 0, y: -12 },
                      { display: 'block', opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
                    );
                  } else {
                    gsap.to(navMenu, {
                      opacity: 0,
                      y: -12,
                      duration: 0.25,
                      ease: 'power2.in',
                      onComplete: () => {
                        navMenu.removeAttribute('data-nav-menu-open');
                        navMenu.style.display = '';
                      },
                    });
                  }
                }
              }
            };
            trigEl.addEventListener('click', onClick);
            cleanups.push(() => trigEl.removeEventListener('click', onClick));
          });
        }
      } else if (firstTriggerType === 'ix:load') {
        for (const tlId of tlIds) {
          const tlDef = timelineMap.get(tlId);
          if (!tlDef) continue;

          const tl = gsap.timeline();
          const seenTargets = new Set<HTMLElement>();
          for (const action of tlDef.actions || []) {
            const rawTargets = resolveActionTargets(action.targets, document.body);
            if (rawTargets.length === 0) continue;
            const isFirst = rawTargets.every((el) => !seenTargets.has(el));
            rawTargets.forEach((el) => seenTargets.add(el));
            addActionToTimeline(tl, rawTargets, action, isFirst);
          }
        }
      } else if (firstTriggerType === 'ix:scroll') {
        const config = triggers[0][1] || {};
        const selectorSpecs = triggers[0][2];
        const triggerEls = resolveTriggerElements(selectorSpecs);
        if (triggerEls.length === 0) continue;

        const stConfig = config.scrollTriggerConfig || {};
        const rawStart = stConfig.start || 'top bottom';
        const rawEnd = stConfig.end || 'bottom top';
        const start = stConfig.clamp ? `clamp(${rawStart})` : rawStart;
        const end = stConfig.clamp ? `clamp(${rawEnd})` : rawEnd;
        const scrub = stConfig.scrub ?? false;
        const toggleActions = [
          stConfig.enter || 'none',
          stConfig.leave || 'none',
          stConfig.enterBack || 'none',
          stConfig.leaveBack || 'none',
        ].join(' ');

        for (const tlId of tlIds) {
          const tlDef = timelineMap.get(tlId);
          if (!tlDef) continue;

          triggerEls.forEach((trigEl) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: trigEl,
                start,
                end,
                scrub,
                toggleActions,
              },
            });
            const seenTargets = new Set<HTMLElement>();
            for (const action of tlDef.actions || []) {
              const rawTargets = resolveActionTargets(action.targets, trigEl);
              if (rawTargets.length === 0) continue;
              const isFirst = rawTargets.every((el) => !seenTargets.has(el));
              rawTargets.forEach((el) => seenTargets.add(el));
              addActionToTimeline(tl, rawTargets, action, isFirst);
            }
          });
        }
      }
    }

    initSliders(cleanups);
    ScrollTrigger.refresh();
  });

  return () => {
    cleanups.forEach((fn) => fn());
    ctx.revert();
  };
}
