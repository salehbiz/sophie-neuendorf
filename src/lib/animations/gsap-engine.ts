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
  'power4.inOut',
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

function resolveEase(easeSpec: any): string {
  if (typeof easeSpec === 'number') {
    return EASING_NAMES[easeSpec] || 'power2.out';
  }
  if (Array.isArray(easeSpec) && easeSpec.length === 4) {
    return 'power3.out';
  }
  if (easeSpec && typeof easeSpec === 'object') {
    if (easeSpec.type === 'customWiggle') return 'sine.inOut';
    if (easeSpec.type === 'steps') return `steps(${easeSpec.steps || 1})`;
  }
  if (typeof easeSpec === 'string') {
    const map: Record<string, string> = {
      linear: 'none',
      ease: 'power1.inOut',
      'ease-in': 'power1.in',
      'ease-out': 'power1.out',
      'ease-in-out': 'power1.inOut',
      outQuart: 'power3.out',
      inOutQuart: 'power3.inOut',
      outQuint: 'power4.out',
      outExpo: 'expo.out',
      inOutQuint: 'power4.inOut',
    };
    return map[easeSpec] || 'power2.out';
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

export function initStandaloneInteractions(): () => void {
  if (typeof window === 'undefined') return () => {};

  const cleanups: (() => void)[] = [];
  const ctx = gsap.context(() => {
    const bp = getCurrentBreakpoint();

    // 1. Ensure all inline style="opacity:0" elements are visible or animated in cleanly
    const hiddenEls = document.querySelectorAll<HTMLElement>('[style*="opacity: 0"], [style*="opacity:0"]');
    hiddenEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // 2. Execute IX3 timelines from INTERACTIONS_DATA
    const timelineMap = new Map<string, any>();
    for (const tl of INTERACTIONS_DATA.ix3Timelines) {
      if (!tl.deleted) timelineMap.set(tl.id, tl);
    }

    for (const inter of INTERACTIONS_DATA.ix3Interactions) {
      if (inter.deleted) continue;

      // Check breakpoint condition if present (supports both conditionalPlayback and conditions)
      const conds = (inter as any).conditionalPlayback || (inter as any).conditions;
      if (Array.isArray(conds)) {
        const blocked = conds.some(
          (c) =>
            c.type === 'breakpoint' &&
            c.behavior === 'dont-animate' &&
            Array.isArray(c.breakpoints) &&
            c.breakpoints.includes(bp)
        );
        if (blocked) continue;
      }

      for (const triggerDef of (inter.triggers || []) as readonly any[]) {
        const [triggerType, config, selectorSpecs] = triggerDef;
        const tlIds: readonly string[] = inter.timelineIds || [];

        // Resolve trigger elements
        let triggerEls: HTMLElement[] = [document.body];
        if (Array.isArray(selectorSpecs) && selectorSpecs.length > 0) {
          const found: HTMLElement[] = [];
          const normalizedSpecs =
            typeof selectorSpecs[0] === 'string' ? [selectorSpecs] : selectorSpecs;
          for (const spec of normalizedSpecs) {
            if (!Array.isArray(spec)) continue;
            const [kind, values] = spec;
            if (kind === 'ix:class' && Array.isArray(values)) {
              const sel = values.map((c: string) => `.${c}`).join('');
              document.querySelectorAll<HTMLElement>(sel).forEach((el) => found.push(el));
            } else if (kind === 'ix:id' && typeof values === 'string') {
              const el = document.querySelector<HTMLElement>(`[data-anim-id="${values}"], #${values}`);
              if (el) found.push(el);
            }
          }
          if (found.length > 0) triggerEls = found;
          else continue;
        }

        for (const tlId of tlIds) {
          const tlDef = timelineMap.get(tlId);
          if (!tlDef) continue;

          if (triggerType === 'ix:hover') {
            triggerEls.forEach((trigEl) => {
              const onEnter = () => {
                for (const action of tlDef.actions || []) {
                  const targets = resolveActionTargets(action.targets, trigEl);
                  if (targets.length === 0) continue;
                  runTweenAction(targets, action);
                }
              };
              trigEl.addEventListener('mouseenter', onEnter);
              cleanups.push(() => trigEl.removeEventListener('mouseenter', onEnter));
            });
          } else if (triggerType === 'ix:scroll' || triggerType === 'ix:load') {
            triggerEls.forEach((trigEl) => {
              const stConfig = config?.scrollTriggerConfig;
              const masterTl = gsap.timeline(
                triggerType === 'ix:scroll' && stConfig
                  ? {
                      scrollTrigger: {
                        trigger: trigEl,
                        start: stConfig.start || 'top 85%',
                        end: stConfig.end || 'bottom top',
                        scrub: stConfig.scrub ?? false,
                        toggleActions: stConfig.toggleActions || 'play none none none',
                      },
                    }
                  : {}
              );

              const seenTargets = new Set<HTMLElement>();
              for (const action of tlDef.actions || []) {
                const targets = resolveActionTargets(action.targets, trigEl);
                if (targets.length === 0) continue;
                const isFirstForTargets = targets.every((el) => !seenTargets.has(el));
                targets.forEach((el) => seenTargets.add(el));
                addActionToTimeline(masterTl, targets, action, isFirstForTargets);
              }
            });
          }
        }
      }
    }

    // 3. Interactive UI Widgets:
    // 3a. Mobile Navbar Hamburger Toggle (.menu-nav / .ui-nav-button)
    const navs = document.querySelectorAll<HTMLElement>('.navbar');
    navs.forEach((navbar) => {
      const btn = navbar.querySelector<HTMLElement>('.menu-nav, .ui-nav-button');
      const menu = navbar.querySelector<HTMLElement>('.nav-menu, .ui-nav-menu');
      const topLine = navbar.querySelector<HTMLElement>('.hamburger-line-top');
      const botLine = navbar.querySelector<HTMLElement>('.hamburger-line-bottm');
      if (!btn || !menu) return;

      let isOpen = false;
      const onToggle = () => {
        isOpen = !isOpen;
        btn.classList.toggle('ui--open', isOpen);
        menu.toggleAttribute('data-nav-menu-open', isOpen);
        if (isOpen) {
          gsap.to(menu, { display: 'flex', opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' });
          if (topLine) gsap.to(topLine, { y: 4, rotation: 45, duration: 0.3 });
          if (botLine) gsap.to(botLine, { y: -4, rotation: -45, duration: 0.3 });
        } else {
          gsap.to(menu, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
              menu.style.display = '';
              menu.style.opacity = '';
            },
          });
          if (topLine) gsap.to(topLine, { y: 0, rotation: 0, duration: 0.3 });
          if (botLine) gsap.to(botLine, { y: 0, rotation: 0, duration: 0.3 });
        }
      };
      btn.addEventListener('click', onToggle);
      cleanups.push(() => btn.removeEventListener('click', onToggle));
    });

    // 3b. Navbar Scroll Background (.navbar-scroll-bg)
    const onWindowScroll = () => {
      const scrolled = window.scrollY > 40;
      document.querySelectorAll<HTMLElement>('.navbar-scroll-bg').forEach((bg) => {
        gsap.to(bg, { opacity: scrolled ? 1 : 0, duration: 0.3, overwrite: 'auto' });
      });
    };
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onWindowScroll));

    // 3c. FAQ Accordions (.faq-item / .faq-question / .faq-answer)
    const faqItems = document.querySelectorAll<HTMLElement>('.faq-item, .item-faq, .faq');
    faqItems.forEach((item) => {
      const header =
        item.querySelector<HTMLElement>('.faq-question, .header-faq, .question-faq') ||
        (item.firstElementChild as HTMLElement | null);
      const body =
        item.querySelector<HTMLElement>('.faq-answer, .content-faq, .answer-faq') ||
        (item.children[1] as HTMLElement | null);
      const icon = item.querySelector<HTMLElement>('.icon-faq, .plus-icon, img');

      if (!header || !body || header === body) return;

      const onClick = () => {
        const isClosed = body.offsetHeight === 0 || body.style.height === '0px';
        if (isClosed) {
          gsap.to(body, { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' });
          if (icon) gsap.to(icon, { rotation: 45, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(body, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
          if (icon) gsap.to(icon, { rotation: 0, duration: 0.3, ease: 'power2.inOut' });
        }
      };
      header.style.cursor = 'pointer';
      header.addEventListener('click', onClick);
      cleanups.push(() => header.removeEventListener('click', onClick));
    });

    // 3d. Tabs (.ui-tabs / .ui-tab-menu / .ui-tab-link / .ui-tab-pane) & FAQ / Process Accordion Tabs
    const tabContainers = document.querySelectorAll<HTMLElement>('.ui-tabs');
    tabContainers.forEach((tabs) => {
      const links = Array.from(tabs.querySelectorAll<HTMLElement>('.ui-tab-link'));
      const panes = Array.from(tabs.querySelectorAll<HTMLElement>('.ui-tab-pane'));
      const isAccordionTab =
        tabs.classList.contains('faq-tab') ||
        Boolean(tabs.querySelector('.desc-faq-tab-wrap, .process-desc-wrap'));

      // Apply initial accordion state for FAQ / Process tabs matching IX2 actionLists a-36 / a-41
      if (isAccordionTab) {
        links.forEach((link, i) => {
          const descWrap = link.querySelector<HTMLElement>('.desc-faq-tab-wrap, .process-desc-wrap');
          const plusIcon = link.querySelector<HTMLElement>('.plus-icon._02');
          const isCurrent = link.classList.contains('ui--current') || i === 0;
          if (descWrap) {
            descWrap.style.overflow = 'hidden';
            gsap.set(descWrap, { height: isCurrent ? 'auto' : 0 });
          }
          if (plusIcon) {
            gsap.set(plusIcon, { rotationZ: isCurrent ? 0 : 90 });
          }
        });
      }

      links.forEach((link, idx) => {
        const onClick = (e: Event) => {
          e.preventDefault();
          links.forEach((l, i) => {
            const active = i === idx;
            l.classList.toggle('ui--current', active);
            if (isAccordionTab) {
              const descWrap = l.querySelector<HTMLElement>('.desc-faq-tab-wrap, .process-desc-wrap');
              const plusIcon = l.querySelector<HTMLElement>('.plus-icon._02');
              if (descWrap) {
                gsap.to(descWrap, {
                  height: active ? 'auto' : 0,
                  duration: active ? 0.5 : 0.35,
                  ease: 'power1.inOut',
                });
              }
              if (plusIcon) {
                gsap.to(plusIcon, {
                  rotationZ: active ? 0 : 90,
                  duration: active ? 0.5 : 0.35,
                  ease: 'power1.inOut',
                });
              }
            }
          });
          panes.forEach((p, i) => p.classList.toggle('ui--tab-active', i === idx));
        };
        link.addEventListener('click', onClick);
        cleanups.push(() => link.removeEventListener('click', onClick));
      });
    });

    // 3d-2. Services Accordion Tabs (.services-tabs-collection) matching IX2 e-325 / a-46 (mediaQueries: ["medium", "small"])
    const servicesTabItems = Array.from(
      document.querySelectorAll<HTMLElement>('.services-tabs-collection')
    );
    if (servicesTabItems.length > 0 && (bp === 'medium' || bp === 'small')) {
      servicesTabItems.forEach((item, i) => {
        const isFirst = i === 0 || item.classList.contains('_01');
        item.style.overflow = 'hidden';
        gsap.set(item, { width: '100%', height: isFirst ? 522 : 145 });
        const content = item.querySelector<HTMLElement>('.content-services-tabs');
        if (content) {
          content.style.overflow = 'hidden';
          gsap.set(content, { width: '100%', height: isFirst ? 'auto' : 0 });
        }
        const plusVert = item.querySelector<HTMLElement>('.plus-icon-large.vertical');
        if (plusVert) {
          gsap.set(plusVert, { rotationZ: isFirst ? 0 : 90 });
        }
      });
    }

    // 3d-3. Icon Social Hover (.item-icon-social) matching IX2 actionLists a-62 / a-63
    const socialItems = document.querySelectorAll<HTMLElement>('.item-icon-social');
    socialItems.forEach((item) => {
      const defIcon = item.querySelector<HTMLElement>('.icon-20x20:not(.absolute)');
      const absIcon = item.querySelector<HTMLElement>('.icon-20x20.absolute');
      if (absIcon) gsap.set(absIcon, { scale: 0 });
      const onEnter = () => {
        gsap.to(item, { backgroundColor: '#000000', duration: 0.3, ease: 'power2.out' });
        if (defIcon) gsap.to(defIcon, { scale: 0, duration: 0.3, ease: 'power2.out' });
        if (absIcon) gsap.to(absIcon, { scale: 1, duration: 0.3, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(item, { backgroundColor: 'rgb(242, 242, 242)', duration: 0.3, ease: 'power2.out' });
        if (defIcon) gsap.to(defIcon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        if (absIcon) gsap.to(absIcon, { scale: 0, duration: 0.3, ease: 'power2.out' });
      };
      item.addEventListener('mouseenter', onEnter);
      item.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        item.removeEventListener('mouseenter', onEnter);
        item.removeEventListener('mouseleave', onLeave);
      });
    });

    // 3e. Sliders (.ui-slider)
    const sliders = document.querySelectorAll<HTMLElement>('.ui-slider');
    sliders.forEach((slider) => {
      const slides = Array.from(slider.querySelectorAll<HTMLElement>('.ui-slide'));
      const leftBtn = slider.querySelector<HTMLElement>('.ui-slider-arrow-left');
      const rightBtn = slider.querySelector<HTMLElement>('.ui-slider-arrow-right');
      const dots = Array.from(slider.querySelectorAll<HTMLElement>('.ui-slider-dot'));
      if (slides.length <= 1) return;

      let activeIdx = 0;
      const goTo = (nextIdx: number) => {
        activeIdx = (nextIdx + slides.length) % slides.length;
        slides.forEach((slide) => {
          gsap.to(slide, {
            xPercent: -100 * activeIdx,
            duration: 0.5,
            ease: 'power3.inOut',
          });
        });
        dots.forEach((d, i) => d.classList.toggle('ui-active', i === activeIdx));
      };

      if (leftBtn) {
        const onPrev = () => goTo(activeIdx - 1);
        leftBtn.addEventListener('click', onPrev);
        cleanups.push(() => leftBtn.removeEventListener('click', onPrev));
      }
      if (rightBtn) {
        const onNext = () => goTo(activeIdx + 1);
        rightBtn.addEventListener('click', onNext);
        cleanups.push(() => rightBtn.removeEventListener('click', onNext));
      }
    });

    // 3f-2. Team Member Card Hover (.profile-hide-info-wrapper & .avatar-member-collection) matching IX2 a-52 / a-53
    const memberCards = document.querySelectorAll<HTMLElement>('.item-team-member, .link-member, .team-member-item');
    document.querySelectorAll<HTMLElement>('.profile-hide-info-wrapper').forEach((wrap) => {
      wrap.style.overflow = 'hidden';
      gsap.set(wrap, { height: 0 });
      const card = wrap.parentElement?.parentElement || wrap.parentElement;
      if (!card) return;
      const avatar = card.querySelector<HTMLElement>('.avatar-member-collection');
      const onEnter = () => {
        gsap.to(wrap, { height: 'auto', duration: 0.5, ease: 'power3.out' });
        if (avatar) gsap.to(avatar, { scale: 1.1, duration: 0.5, ease: 'power3.out' });
      };
      const onLeave = () => {
        gsap.to(wrap, { height: 0, duration: 0.5, ease: 'power3.out' });
        if (avatar) gsap.to(avatar, { scale: 1, duration: 0.5, ease: 'power3.out' });
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
      });
    });
    const buttons = document.querySelectorAll<HTMLElement>('.primary-button, .secondar-button');
    buttons.forEach((btn) => {
      const defText = btn.querySelector<HTMLElement>('.layer-default .text-button');
      const hovText = btn.querySelector<HTMLElement>('.layer-hover .text-button');
      const defIcon = btn.querySelector<HTMLElement>('.layer-default .icon-button');
      const hovIcon = btn.querySelector<HTMLElement>('.layer-hover .icon-button');

      const onEnter = () => {
        if (defText && hovText) {
          gsap.to(defText, { yPercent: -100, duration: 0.35, ease: 'power3.out' });
          gsap.fromTo(hovText, { yPercent: 100 }, { yPercent: 0, duration: 0.35, ease: 'power3.out' });
        }
        if (defIcon && hovIcon) {
          gsap.to(defIcon, { xPercent: 100, duration: 0.35, ease: 'power3.out' });
          gsap.fromTo(hovIcon, { xPercent: -100 }, { xPercent: 0, duration: 0.35, ease: 'power3.out' });
        }
      };
      const onLeave = () => {
        if (defText && hovText) {
          gsap.to(defText, { yPercent: 0, duration: 0.35, ease: 'power3.out' });
          gsap.to(hovText, { yPercent: 100, duration: 0.35, ease: 'power3.out' });
        }
        if (defIcon && hovIcon) {
          gsap.to(defIcon, { xPercent: 0, duration: 0.35, ease: 'power3.out' });
          gsap.to(hovIcon, { xPercent: -100, duration: 0.35, ease: 'power3.out' });
        }
      };
      btn.addEventListener('mouseenter', onEnter);
      btn.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('mouseenter', onEnter);
        btn.removeEventListener('mouseleave', onLeave);
      });
    });

    // 4. Formspree Form Submission Handler (.ui-form form)
    const forms = document.querySelectorAll<HTMLFormElement>('.ui-form form');
    forms.forEach((form) => {
      const wrapper = form.closest<HTMLElement>('.ui-form');
      const doneEl = wrapper?.querySelector<HTMLElement>('.ui-form-done');
      const failEl = wrapper?.querySelector<HTMLElement>('.ui-form-fail');

      // Also wire any custom link button inside .button-full-wrap or .button-newsletter-wrap to submit the form
      const proxyBtn = form.querySelector<HTMLAnchorElement>('.button-full-wrap a, .button-newsletter-wrap a');
      const onProxyClick = (e: Event) => {
        e.preventDefault();
        form.requestSubmit();
      };
      if (proxyBtn) {
        proxyBtn.addEventListener('click', onProxyClick);
        cleanups.push(() => proxyBtn.removeEventListener('click', onProxyClick));
      }

      const onSubmit = async (e: Event) => {
        e.preventDefault();
        const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
        const formData = new FormData(form);

        try {
          if (endpoint) {
            const res = await fetch(endpoint, {
              method: 'POST',
              body: formData,
              headers: { Accept: 'application/json' },
            });
            if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
          }
          form.style.display = 'none';
          if (doneEl) doneEl.style.display = 'block';
          if (failEl) failEl.style.display = 'none';
        } catch {
          if (failEl) failEl.style.display = 'block';
        }
      };

      form.addEventListener('submit', onSubmit);
      cleanups.push(() => form.removeEventListener('submit', onSubmit));
    });
  });

  return () => {
    cleanups.forEach((fn) => fn());
    ctx.revert();
  };
}

function resolveActionTargets(targetSpecs: any[], trigEl: HTMLElement): HTMLElement[] {
  const results: HTMLElement[] = [];
  if (!Array.isArray(targetSpecs) || targetSpecs.length === 0) return results;
  const normalizedSpecs =
    typeof targetSpecs[0] === 'string' ? [targetSpecs] : targetSpecs;

  for (const spec of normalizedSpecs) {
    if (!Array.isArray(spec)) continue;
    const [kind, values, opts] = spec;
    if (kind === 'ix:trigger') {
      results.push(trigEl);
    } else if (kind === 'ix:class' && Array.isArray(values)) {
      const sel = values.map((c: string) => `.${c}`).join('');
      const rel = opts?.relationship;
      if (rel === 'within' || rel === 'children' || rel === 'descendants') {
        trigEl.querySelectorAll<HTMLElement>(sel).forEach((el) => results.push(el));
      } else {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => results.push(el));
      }
    } else if (kind === 'ix:id' && typeof values === 'string') {
      const el = document.querySelector<HTMLElement>(`[data-anim-id="${values}"], #${values}`);
      if (el) results.push(el);
    }
  }
  return results;
}

function extractFromToVars(properties: any) {
  const fromVars: Record<string, any> = {};
  const toVars: Record<string, any> = {};
  const group = properties?.['ix:transform'] || properties?.['ix:style'] || {};

  for (const [prop, pair] of Object.entries(group)) {
    if (!Array.isArray(pair)) continue;
    const [fromVal, toVal] = pair;
    const parseVal = (v: any) => {
      if (v === null || v === undefined) return undefined;
      if (prop === 'opacity' && typeof v === 'string' && v.endsWith('%')) {
        return parseFloat(v) / 100;
      }
      if ((prop === 'xPercent' || prop === 'yPercent') && typeof v === 'string' && v.endsWith('%')) {
        return parseFloat(v);
      }
      return v;
    };
    const f = parseVal(fromVal);
    const t = parseVal(toVal);
    if (f !== undefined) fromVars[prop] = f;
    if (t !== undefined) toVars[prop] = t;
    else if (f !== undefined) {
      // Animate from f back to natural value (0 or 1)
      toVars[prop] = prop === 'opacity' || prop === 'scale' ? 1 : 0;
    }
  }

  return { fromVars, toVars };
}

function applySplitIfRequested(targets: HTMLElement[], splitSpec: any): HTMLElement[] {
  if (!splitSpec || !splitSpec.type) return targets;
  const splitTargets: HTMLElement[] = [];
  const targetSelector =
    splitSpec.type === 'chars'
      ? '.gsap_split_char'
      : splitSpec.type === 'lines'
      ? '.gsap_split_line'
      : '.gsap_split_word';
  for (const el of targets) {
    if (el.dataset.splitApplied === 'true') {
      const existing = el.querySelectorAll<HTMLElement>(targetSelector);
      if (existing.length > 0) {
        existing.forEach((item) => splitTargets.push(item));
        continue;
      }
    }
    try {
      const splitTypes = splitSpec.type === 'chars' ? 'words,chars' : splitSpec.type;
      const split = new SplitType(el, {
        types: splitTypes,
        tagName: 'span',
        lineClass: 'gsap_split_line',
        wordClass: 'gsap_split_word',
        charClass: 'gsap_split_char',
      });
      el.dataset.splitApplied = 'true';
      const items =
        splitSpec.type === 'chars'
          ? split.chars
          : splitSpec.type === 'lines'
          ? split.lines
          : split.words;
      if (items && items.length > 0) {
        items.forEach((item) => splitTargets.push(item));
      } else {
        splitTargets.push(el);
      }
    } catch {
      splitTargets.push(el);
    }
  }
  return splitTargets.length > 0 ? splitTargets : targets;
}

function runTweenAction(targets: HTMLElement[], action: any) {
  const animTargets = applySplitIfRequested(targets, action.splitText);
  const { fromVars, toVars } = extractFromToVars(action.properties);
  const timing = action.timing || {};
  const duration = timing.duration ?? 0.4;
  const ease = resolveEase(timing.ease);
  const stagger = timing.stagger?.each ?? 0;

  if (Object.keys(fromVars).length > 0) {
    gsap.fromTo(animTargets, fromVars, {
      ...toVars,
      duration,
      ease,
      stagger,
      overwrite: 'auto',
    });
  } else if (Object.keys(toVars).length > 0) {
    gsap.to(animTargets, {
      ...toVars,
      duration,
      ease,
      stagger,
      overwrite: 'auto',
    });
  }
}

function addActionToTimeline(
  tl: gsap.core.Timeline,
  targets: HTMLElement[],
  action: any,
  isFirstForTargets = true
) {
  const animTargets = applySplitIfRequested(targets, action.splitText);
  const { fromVars, toVars } = extractFromToVars(action.properties);
  const timing = action.timing || {};
  const duration = timing.duration ?? 0.8;
  const ease = resolveEase(timing.ease);
  const stagger = timing.stagger?.each ?? 0;
  const pos = timing.position ?? 0;

  if (timing.repeat === -1 && Object.keys(toVars).length > 0) {
    gsap.to(animTargets, {
      ...toVars,
      duration,
      ease,
      repeat: -1,
      yoyo: Boolean(timing.yoyo),
    });
    return;
  }

  if (Object.keys(fromVars).length > 0) {
    tl.fromTo(
      animTargets,
      fromVars,
      {
        ...toVars,
        duration,
        ease,
        stagger,
        immediateRender: isFirstForTargets,
      },
      pos
    );
  } else if (Object.keys(toVars).length > 0) {
    tl.to(
      animTargets,
      {
        ...toVars,
        duration,
        ease,
        stagger,
      },
      pos
    );
  }
}
