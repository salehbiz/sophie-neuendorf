# Voyra — Complete Interactions & Animation Audit (`interactions.md`)

This document records **every** interaction, trigger, target selector, keyframe, duration, easing curve, stagger, and ScrollTrigger configuration extracted directly from the published bundles of `https://voyra.webflow.io/` prior to stripping `data-w-id` and `data-wf-*` attributes.

- **GSAP Engine Version in Original Site:** GSAP `3.15.0` (`gsap.min.js`, `ScrollTrigger.min.js`, `SplitText.min.js`, `CustomEase.min.js`, `CustomWiggle.min.js`)
- **Breakpoints:**
  - `main`: `992px – 10000px`
  - `medium`: `768px – 991px`
  - `small`: `480px – 767px`
  - `tiny`: `0px – 479px`
- **Total Extracted Definitions:**
  - **GSAP / IX3 Interactions:** 31
  - **GSAP / IX3 Timelines:** 31
  - **IX2 Events:** 0
  - **IX2 Action Lists:** 0

---

## Global / Shared Component Interactions

Below are all shared component interactions, followed by page-level & ScrollTrigger interactions.

## Page-Level & ScrollTrigger Interactions (GSAP IX3 Engine)

Below is every GSAP-based interaction (`ix3`) registered in the site, paired with its exact trigger configuration, scope, breakpoint conditions, and full timeline animations (targets, properties, from/to values, `duration`, `ease`, `stagger`, and `splitText` configuration).

### Interaction `i-376ad5ee` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:click",
    {
      "control": "togglePlayReverse",
      "controlType": "standard",
      "pluginConfig": {
        "click": "each"
      }
    },
    [
      "wf:class",
      [
        "menu-button"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-e1a8d0d8`:**
```json
{
  "id": "t-e1a8d0d8",
  "deleted": false,
  "actions": [
    {
      "id": "ta-5b6352ca",
      "targets": [
        [
          "wf:class",
          [
            "menu-line-item._01"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.4,
        "ease": 30
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0%",
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-b8f36fa0",
      "targets": [
        [
          "wf:class",
          [
            "menu-line-item._03"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.4,
        "ease": 30
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0%",
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-be4fe2f0` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-93890611`:**
```json
{
  "id": "t-93890611",
  "deleted": false,
  "actions": [
    {
      "id": "ta-5d0d37bd",
      "targets": [
        [
          "wf:class",
          [
            "navbar"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.6,
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "y": [
            "-100%",
            "0px"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-92ac291f` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-fbb72daf`:**
```json
{
  "id": "t-fbb72daf",
  "deleted": false,
  "actions": [
    {
      "id": "ta-24c6ad12",
      "targets": [
        [
          "wf:class",
          [
            "hero-bottom-loop"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 100,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0px",
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-400fa4b1` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-1d28f8da`:**
```json
{
  "id": "t-1d28f8da",
  "deleted": false,
  "actions": [
    {
      "id": "ta-6041f6ab",
      "targets": [
        [
          "wf:class",
          [
            "hero-slider-img"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 4,
        "repeat": -1,
        "yoyo": true,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            1.2,
            1.05
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-42be6612` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "control": "play",
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseenter",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "nav-link"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ],
  [
    "wf:hover",
    {
      "control": "reverse",
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "nav-link"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-7c272bed`:**
```json
{
  "id": "t-7c272bed",
  "deleted": false,
  "actions": [
    {
      "id": "ta-41d642b6",
      "targets": [
        [
          "wf:class",
          [
            "nav-text.meta-normal"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.25,
        "position": 0,
        "stagger": {
          "amount": 0.25,
          "from": "random"
        },
        "ease": 3
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "autoAlpha": [
            "100%",
            "0%"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    },
    {
      "id": "ta-717aae59",
      "targets": [
        [
          "wf:class",
          [
            "nav-text.meta-scramble"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.25,
        "position": 0,
        "stagger": {
          "amount": 0.25,
          "from": "random"
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "autoAlpha": [
            "0%",
            "100%"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    },
    {
      "id": "ta-f1c26fcf",
      "targets": [
        [
          "wf:class",
          [
            "nav-text.meta-normal"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.25,
        "position": 0.5,
        "stagger": {
          "amount": 0.25
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "autoAlpha": [
            "0%",
            "100%"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    },
    {
      "id": "ta-847c261a",
      "targets": [
        [
          "wf:class",
          [
            "nav-text.meta-scramble"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.25,
        "position": 0.5,
        "stagger": {
          "amount": 0.25,
          "from": "random"
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "autoAlpha": [
            "100%",
            "0%"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-126a09f6` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top bottom",
        "end": "bottom top",
        "scrub": null,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[tag-text]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-884198ee`:**
```json
{
  "id": "t-884198ee",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e6071fd4",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "stagger": {
          "amount": 0.5
        },
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "rotationY": [
            "90deg",
            "0deg"
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-33f84c22` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 90%",
        "end": "bottom top",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[summary-text]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-ab7f5214`:**
```json
{
  "id": "t-ab7f5214",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e33b6844",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "stagger": {
          "each": 0.03
        },
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "50%",
            "100%"
          ],
          "x": [
            "10px",
            "0px"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-6e421469` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top bottom",
        "end": "bottom top",
        "scrub": null,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "sub-title"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-605f3400`:**
```json
{
  "id": "t-605f3400",
  "deleted": false,
  "actions": [
    {
      "id": "ta-adb69297",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "stagger": {
          "amount": 0.8
        },
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "rotationY": [
            "90deg",
            "0deg"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-0e73840a` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top bottom",
        "end": "bottom top",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "img-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-567284fa`:**
```json
{
  "id": "t-567284fa",
  "deleted": false,
  "actions": [
    {
      "id": "ta-acc076a7",
      "targets": [
        [
          "wf:attribute",
          "[img-anim]",
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "y": [
            "-5%",
            "5%"
          ],
          "scale": [
            1.05,
            1.08
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-35fef8f8` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseenter",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "work-card"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ],
  [
    "wf:hover",
    {
      "control": "reverse",
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "work-card"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-0efadd89`:**
```json
{
  "id": "t-0efadd89",
  "deleted": false,
  "actions": [
    {
      "id": "ta-2c5fdbbe",
      "targets": [
        [
          "wf:class",
          [
            "work-img-hover"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "0px",
            "auto"
          ]
        }
      }
    },
    {
      "id": "ta-811019ca",
      "targets": [
        [
          "wf:attribute",
          "[hover-img]",
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "skewX": [
            "5deg",
            "0deg"
          ]
        }
      }
    },
    {
      "id": "ta-859d2ae5",
      "targets": [
        [
          "wf:attribute",
          "[hover-img]",
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            1,
            1.05
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-52780b4d` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 50%",
        "end": "top 50%",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[card-rotate]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-44ac41ac`:**
```json
{
  "id": "t-44ac41ac",
  "deleted": false,
  "actions": [
    {
      "id": "ta-5b66bdf4",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0.5,
            1
          ],
          "rotationX": [
            "35deg",
            "0deg"
          ],
          "rotationY": [
            "80deg",
            "0deg"
          ],
          "rotation": [
            "0deg",
            "0deg"
          ],
          "transformPerspective": [
            500,
            500
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-0dc8d28b` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-29db2c52`:**
```json
{
  "id": "t-29db2c52",
  "deleted": false,
  "actions": [
    {
      "id": "ta-696a38b9",
      "targets": [
        [
          "wf:class",
          [
            "circle-img"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 20,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "rotation": [
            "0deg",
            "360deg"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-6d59fa9a` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-9aa936a9`:**
```json
{
  "id": "t-9aa936a9",
  "deleted": false,
  "actions": [
    {
      "id": "ta-97111894",
      "targets": [
        [
          "wf:class",
          [
            "hero-title"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "stagger": {
          "amount": 0.6
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "x": [
            "10px",
            "0px"
          ],
          "rotationY": [
            "90deg",
            "0deg"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-5e21ba94` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 50%",
        "end": "top 50%",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[card-scale]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-4081daca`:**
```json
{
  "id": "t-4081daca",
  "deleted": false,
  "actions": [
    {
      "id": "ta-c9de49af",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0.9,
            1
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-40740b7b` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top top",
        "end": "bottom 170%",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "service-section"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-983d88c9`:**
```json
{
  "id": "t-983d88c9",
  "deleted": false,
  "actions": [
    {
      "id": "ta-bcde2640",
      "targets": [
        [
          "wf:class",
          [
            "service-sticky"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0vh",
            "-300vw"
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-b3ae966c` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseenter",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "frame-overlay"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ],
  [
    "wf:hover",
    {
      "control": "reverse",
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "frame-overlay"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-ca1d096a`:**
```json
{
  "id": "t-ca1d096a",
  "deleted": false,
  "actions": [
    {
      "id": "ta-1ea0cb34",
      "targets": [
        [
          "wf:class",
          [
            "frame"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.6,
        "ease": {
          "type": "back",
          "curve": "out",
          "power": 1.7
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "scale": [
            0.5,
            1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-00f7c21b` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-f939c0af`:**
```json
{
  "id": "t-f939c0af",
  "deleted": false,
  "actions": [
    {
      "id": "ta-d1202d65",
      "targets": [
        [
          "wf:class",
          [
            "photo-loop._01"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 20,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0px",
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-dda2f81e` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-96e0209f`:**
```json
{
  "id": "t-96e0209f",
  "deleted": false,
  "actions": [
    {
      "id": "ta-dfbfd04a",
      "targets": [
        [
          "wf:class",
          [
            "photo-loop._02"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 20,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0px",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-2fa6d379` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 90%",
        "end": "bottom top",
        "scrub": null,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[slide-all]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-f3ab1a40`:**
```json
{
  "id": "t-f3ab1a40",
  "deleted": false,
  "actions": [
    {
      "id": "ta-bebf9218",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "stagger": {
          "each": 0.03
        },
        "ease": 28
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "y": [
            "10px",
            "0px"
          ],
          "scale": [
            0.95,
            1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-0c90bdb8` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 50%",
        "end": "top 50%",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "choose-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-bacd96af`:**
```json
{
  "id": "t-bacd96af",
  "deleted": false,
  "actions": [
    {
      "id": "ta-b8663475",
      "targets": [
        [
          "wf:class",
          [
            "choose-bottom"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "80%",
            "0%"
          ]
        }
      }
    },
    {
      "id": "ta-6f4221ce",
      "targets": [
        [
          "wf:class",
          [
            "frame-01-wrap"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "y": [
            "80%",
            "0%"
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-89632c7d` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 90%",
        "end": "bottom top",
        "scrub": null,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[slide-tab]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-7d377b8e`:**
```json
{
  "id": "t-7d377b8e",
  "deleted": false,
  "actions": [
    {
      "id": "ta-793514f4",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "stagger": {
          "each": 0.03
        },
        "ease": 28
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "y": [
            "10px",
            "0px"
          ],
          "scale": [
            0.95,
            1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-efba39a9` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top bottom",
        "end": "bottom 80%",
        "scrub": null,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[slide-all]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-c20ee821`:**
```json
{
  "id": "t-c20ee821",
  "deleted": false,
  "actions": [
    {
      "id": "ta-1c38fc04",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.6,
        "position": 0.2,
        "stagger": {
          "each": 0.03
        },
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "scale": [
            0.95,
            1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-9246c2e4` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:click",
    {
      "control": "togglePlayReverse",
      "controlType": "standard",
      "pluginConfig": {
        "click": "each"
      }
    },
    [
      "wf:class",
      [
        "faq-iteam"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-b1a5ab72`:**
```json
{
  "id": "t-b1a5ab72",
  "deleted": false,
  "actions": [
    {
      "id": "ta-48a49929",
      "targets": [
        [
          "wf:class",
          [
            "faq-text-wrap"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "0px",
            "auto"
          ]
        }
      }
    },
    {
      "id": "ta-a109a5fa",
      "targets": [
        [
          "wf:class",
          [],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            1,
            0
          ]
        }
      }
    },
    {
      "id": "ta-b15b5085",
      "targets": [
        [
          "wf:class",
          [
            "faq-icon"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "tt": 2,
      "properties": {
        "wf:transform": {
          "rotation": [
            "0deg",
            "45deg"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-e7695e77` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 50%",
        "end": "top 50%",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "footer"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-1b98e7c4`:**
```json
{
  "id": "t-1b98e7c4",
  "deleted": false,
  "actions": [
    {
      "id": "ta-4ced8012",
      "targets": [
        [
          "wf:class",
          [
            "footer-img"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0.9,
            1
          ],
          "transformPerspective": [
            500,
            500
          ],
          "rotationX": [
            "-30deg",
            "0deg"
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-5a66fe7d` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-644b0c22`:**
```json
{
  "id": "t-644b0c22",
  "deleted": false,
  "actions": [
    {
      "id": "ta-ce3a0d14",
      "targets": [
        [
          "wf:class",
          [
            "text-ticker"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 80,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0px",
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-a689d5b5` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 50%",
        "end": "top 50%",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:attribute",
      "[card-rotate-x]",
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-74aff74b`:**
```json
{
  "id": "t-74aff74b",
  "deleted": false,
  "actions": [
    {
      "id": "ta-af92504a",
      "targets": [
        [
          "wf:trigger-only",
          "",
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0.8,
            1
          ],
          "rotationX": [
            "-30deg",
            "0deg"
          ],
          "transformPerspective": [
            500,
            500
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-fcf852a7` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseenter",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "blog-card"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ],
  [
    "wf:hover",
    {
      "control": "reverse",
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "blog-card"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-3c35b23d`:**
```json
{
  "id": "t-3c35b23d",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e938aeb0",
      "targets": [
        [
          "wf:class",
          [
            "blog-img"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            1,
            1.1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-d8c91dd2` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-935b3b57`:**
```json
{
  "id": "t-935b3b57",
  "deleted": false,
  "actions": [
    {
      "id": "ta-bcaeaa6a",
      "targets": [
        [
          "wf:class",
          [
            "about-img-loop"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 20,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "0px",
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.schunk.cd41109ffc4d7fcd.js"
}
```

### Interaction `i-86fd3066` (Pages `["6ab6b0eaf15b2aa3caad66ef"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": true,
        "start": "top 50%",
        "end": "50% top",
        "scrub": 2,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "story-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-c06d925a`:**
```json
{
  "id": "t-c06d925a",
  "deleted": false,
  "actions": [
    {
      "id": "ta-27165d40",
      "targets": [
        [
          "wf:attribute",
          "[story-img]",
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            "-40%",
            "0%"
          ],
          "y": [
            "-40%",
            "0%"
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.df4d301a.6575717d84a183ee.js"
}
```

### Interaction `i-8233667a` (Pages `["6ab6b0eaf15b2aa3caad66e9"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-fd4c7b74`:**
```json
{
  "id": "t-fd4c7b74",
  "deleted": false,
  "actions": [
    {
      "id": "ta-b1ea4f77",
      "targets": [
        [
          "wf:class",
          [],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "rotationY": [
            "180deg",
            "0deg"
          ],
          "skewY": [
            "-10deg",
            "0deg"
          ]
        }
      }
    },
    {
      "id": "ta-59e01d41",
      "targets": [
        [
          "wf:class",
          [],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "y": [
            "100%",
            "0px"
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-c44e97ff",
      "targets": [
        [
          "wf:class",
          [],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "y": [
            "100%",
            "0px"
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-bf4f18d2",
      "targets": [
        [
          "wf:class",
          [],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "y": [
            "100%",
            "0%"
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    },
    {
      "id": "ta-2978d03e",
      "targets": [
        [
          "wf:class",
          [],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.5,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "y": [
            "2rem",
            "0rem"
          ],
          "scale": [
            0.5,
            1
          ]
        }
      }
    },
    {
      "id": "ta-5adf92ca",
      "timing": {
        "duration": 1,
        "position": 1,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "y": [
            "100%",
            "0%"
          ],
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.fe03bf52.ac8a162ed580fa75.js"
}
```

### Interaction `i-774b9e8e` (Pages `["6ab6b0eaf15b2aa3caad66e9"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-95311a0e`:**
```json
{
  "id": "t-95311a0e",
  "deleted": false,
  "actions": [
    {
      "id": "ta-3e7ff573",
      "targets": [
        [
          "wf:class",
          [
            "logo-front"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 1
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "y": [
            null,
            "-100%"
          ],
          "rotationX": [
            null,
            "90deg"
          ]
        }
      }
    },
    {
      "id": "ta-0c656431",
      "targets": [
        [
          "wf:class",
          [
            "logo-back"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0,
        "ease": 1
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "y": [
            null,
            "0%"
          ],
          "rotationX": [
            null,
            "0deg"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.fe03bf52.ac8a162ed580fa75.js"
}
```

---

## Component & Element Hover / Click / Scroll Interactions (IX2 Engine)

### IX2 Action Lists (0 total)

### IX2 Events (0 total)

