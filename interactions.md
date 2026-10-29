# Conax — Complete Interactions & Animation Audit (`interactions.md`)

This document records **every** interaction, trigger, target selector, keyframe, duration, easing curve, stagger, and ScrollTrigger configuration extracted directly from the published bundles of `https://conax.webflow.io/` prior to stripping `data-w-id` and `data-wf-*` attributes.

- **GSAP Engine Version in Original Site:** GSAP `3.15.0` (`gsap.min.js`, `ScrollTrigger.min.js`, `SplitText.min.js`, `CustomEase.min.js`, `CustomWiggle.min.js`)
- **Breakpoints:**
  - `main`: `992px – 10000px`
  - `medium`: `768px – 991px`
  - `small`: `480px – 767px`
  - `tiny`: `0px – 479px`
- **Total Extracted Definitions:**
  - **GSAP / IX3 Interactions:** 66
  - **GSAP / IX3 Timelines:** 63
  - **IX2 Events:** 215
  - **IX2 Action Lists:** 40

---

## Global / Shared Component Interactions

Below are all shared component interactions, followed by page-level & ScrollTrigger interactions.

## Page-Level & ScrollTrigger Interactions (GSAP IX3 Engine)

Below is every GSAP-based interaction (`ix3`) registered in the site, paired with its exact trigger configuration, scope, breakpoint conditions, and full timeline animations (targets, properties, from/to values, `duration`, `ease`, `stagger`, and `splitText` configuration).

### Interaction `i-005978b0` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "control": "pause",
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "image-gallery-marqee-track"
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
      "control": "resume",
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "image-gallery-marqee-track"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ],
  [
    "wf:load",
    {
      "control": "play",
      "controlType": "load"
    }
  ]
]
```
- **Timeline `t-56f09b54`:**
```json
{
  "id": "t-56f09b54",
  "deleted": false,
  "actions": [
    {
      "id": "ta-5cd27032",
      "targets": [
        [
          "wf:class",
          [
            "image-gallery-marqee-track"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 30,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "properties": {
        "wf:transform": {
          "x": [
            null,
            "50%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-02f672ba` (Site-wide (`site`))
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
        "start": "top 120%",
        "end": "bottom 100%",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "list-our-approach"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-a4bce9ac`:**
```json
{
  "id": "t-a4bce9ac",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e549508d",
      "targets": [
        [
          "wf:class",
          [
            "item-our-approach"
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
        "stagger": {
          "each": 0.3
        },
        "ease": 1
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "xPercent": [
            "10%",
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-04d52ba1` (Site-wide (`site`))
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
        "start": "top 85%",
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
        "header-our-approach"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-9ec628ac`:**
```json
{
  "id": "t-9ec628ac",
  "deleted": false,
  "actions": [
    {
      "id": "ta-eebe71da",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "heading-h6"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-7568f7e8",
      "targets": [
        [
          "wf:class",
          [
            "text-body-4"
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
        "position": 0.35,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-07538efc` (Component `73424d6f-137c-a239-364e-c9c592cc8043` (navbar white w-nav))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "text-link-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-b23de82b`:**
```json
{
  "id": "t-b23de82b",
  "deleted": false,
  "actions": [
    {
      "id": "ta-7394c6a9",
      "targets": [
        [
          "wf:class",
          [
            "text-link-nav"
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
        "duration": 0.1,
        "position": 0,
        "stagger": {
          "each": 0.05
        },
        "ease": {
          "type": "customWiggle",
          "wiggles": 2,
          "wiggleType": "easeOut"
        }
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "5%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-d308602f",
      "targets": [
        [
          "wf:class",
          [
            "line-text-link"
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
        "position": 0,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "width": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-07b56330` (Site-wide (`site`))
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
        "start": "top 20%",
        "end": "bottom top",
        "scrub": 0.8,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "tab-services-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-ed1ace4b`:**
```json
{
  "id": "t-ed1ace4b",
  "deleted": false,
  "actions": [
    {
      "id": "ta-63373d1c",
      "targets": [
        [
          "wf:class",
          [
            "services-tabs-collection._01"
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
        "duration": 0.15,
        "position": 0.1,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "522px",
            "142px"
          ]
        }
      }
    },
    {
      "id": "ta-8cc22427",
      "targets": [
        [
          "wf:class",
          [
            "services-tabs-collection._02"
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
        "duration": 0.15,
        "position": 0.1,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "height": [
            "142px",
            "522px"
          ]
        }
      }
    },
    {
      "id": "ta-3576f954",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._01"
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
        "duration": 0.05,
        "position": 0.1,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "10%"
          ]
        }
      }
    },
    {
      "id": "ta-cf5b9a27",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._02"
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
        "duration": 0.05,
        "position": 0.1,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-39f8dc94",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._02"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "sequence-number-services-tabs._03"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "sequence-number-services-tabs._04"
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
        "duration": 0,
        "position": 0
      },
      "properties": {
        "wf:transform": {
          "opacity": [
            "10%",
            "10%"
          ]
        }
      }
    },
    {
      "id": "ta-d4e69934",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._01"
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
        "duration": 0,
        "position": 0,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            "90deg",
            "0deg"
          ]
        }
      }
    },
    {
      "id": "ta-209d9f73",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._01"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.05,
        "position": 0.1,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            null,
            "90deg"
          ]
        }
      }
    },
    {
      "id": "ta-7d160ada",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._02"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.05,
        "position": 0.15,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            null,
            "0deg"
          ]
        }
      }
    },
    {
      "id": "ta-061ad3f4",
      "targets": [
        [
          "wf:class",
          [
            "services-tabs-collection._02"
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
        "duration": 0.15,
        "position": 0.35,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "522px",
            "142px"
          ]
        }
      }
    },
    {
      "id": "ta-d6be1c99",
      "targets": [
        [
          "wf:class",
          [
            "services-tabs-collection._03"
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
        "duration": 0.15,
        "position": 0.35,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "height": [
            "142px",
            "522px"
          ]
        }
      }
    },
    {
      "id": "ta-d9fe7c79",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._02"
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
        "duration": 0.05,
        "position": 0.35,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "10%"
          ]
        }
      }
    },
    {
      "id": "ta-29026896",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._02"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.05,
        "position": 0.35,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            null,
            "90deg"
          ]
        }
      }
    },
    {
      "id": "ta-bb6347d6",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._03"
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
        "duration": 0.05,
        "position": 0.35,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-51b0f193",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._03"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.05,
        "position": 0.4,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            null,
            "0deg"
          ]
        }
      }
    },
    {
      "id": "ta-11924d8f",
      "targets": [
        [
          "wf:class",
          [
            "services-tabs-collection._03"
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
        "duration": 0.15,
        "position": 0.6,
        "ease": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "522px",
            "142px"
          ]
        }
      }
    },
    {
      "id": "ta-83a21974",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._03"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.05,
        "position": 0.6,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            null,
            "90deg"
          ]
        }
      }
    },
    {
      "id": "ta-6e1e368e",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._03"
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
        "duration": 0.05,
        "position": 0.6,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "10%"
          ]
        }
      }
    },
    {
      "id": "ta-b9155a2e",
      "targets": [
        [
          "wf:class",
          [
            "sequence-number-services-tabs._04"
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
        "duration": 0.05,
        "position": 0.6,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-2e0d6dd7",
      "targets": [
        [
          "wf:class",
          [
            "services-tabs-collection._04"
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
        "duration": 0.15,
        "position": 0.6,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "height": [
            "142px",
            "522px"
          ]
        }
      }
    },
    {
      "id": "ta-fed0c01f",
      "targets": [
        [
          "wf:class",
          [
            "plus-icon-large.vertical._04"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.05,
        "position": 0.65,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "rotation": [
            null,
            "0deg"
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-08c0a95a` (Site-wide (`site`))
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
- **Timeline `t-0270332d`:**
```json
{
  "id": "t-0270332d",
  "deleted": false,
  "actions": [
    {
      "id": "ta-ff4975e8",
      "targets": [
        [
          "wf:class",
          [
            "split-content"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "stagger": {
          "each": 0.3
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            -100,
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-1056b39a` (Site-wide (`site`))
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
        "start": "top 80%",
        "end": "bottom -20%",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "our-work-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-01168040`:**
```json
{
  "id": "t-01168040",
  "deleted": false,
  "actions": [
    {
      "id": "ta-389e44a8",
      "targets": [
        [
          "wf:class",
          [
            "images-acess-cover-1"
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
        "stagger": {
          "each": 0.05,
          "ease": 2,
          "from": "start"
        }
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "0%",
            "-100%"
          ]
        }
      }
    },
    {
      "id": "ta-aafbc03c",
      "targets": [
        [
          "wf:class",
          [
            "images-acess-cover-2"
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
        "stagger": {
          "each": 0.05,
          "ease": 2,
          "from": "start"
        }
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "0%",
            "-180%"
          ]
        }
      }
    },
    {
      "id": "ta-3e7b38e2",
      "targets": [
        [
          "wf:class",
          [
            "images-acess-cover-3"
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
        "stagger": {
          "each": 0.05,
          "ease": 2,
          "from": "start"
        }
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "0%",
            "-80%"
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-1a2ec470` (Component `f4d3d936-dd6b-f6fa-47a2-6e7b7e1a7567` (section is-first))
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
- **Timeline `t-8582f887`:**
```json
{
  "id": "t-8582f887",
  "deleted": false,
  "actions": [
    {
      "id": "ta-f9245f7c",
      "targets": [
        [
          "wf:class",
          [
            "label-text"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0,
        "ease": 3
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "xPercent": [
            -100,
            0
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    },
    {
      "id": "ta-3a734fc9",
      "targets": [
        [
          "wf:class",
          [
            "heading-hero-utility"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.3,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    },
    {
      "id": "ta-fa313570",
      "targets": [
        [
          "wf:class",
          [
            "sub-heading-hero-utility"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.6,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "-100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-1ea76f48` (Site-wide (`site`))
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
        "start": "top 85%",
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
        "header-type-2"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-e8847bad`:**
```json
{
  "id": "t-e8847bad",
  "deleted": false,
  "actions": [
    {
      "id": "ta-77c2c34c",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-37909371` (Component `2c138d6a-b095-0676-dc93-0a3c08022737` (footer))
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
        "scrub": 0.8,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "logo-footer"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-5de82c10`:**
```json
{
  "id": "t-5de82c10",
  "deleted": false,
  "actions": [
    {
      "id": "ta-530ebed6",
      "targets": [
        [
          "wf:class",
          [
            "logo-footer"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "stagger": {
          "each": 0.05
        },
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            -100,
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-3c1e8aba` (Component `20c27f4a-860b-cfdc-a244-67a39fc917bb` (navbar black w-nav))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "text-link-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-136867ef`:**
```json
{
  "id": "t-136867ef",
  "deleted": false,
  "actions": [
    {
      "id": "ta-084e0a6f",
      "targets": [
        [
          "wf:class",
          [
            "text-link-nav"
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
        "duration": 0.1,
        "position": 0,
        "stagger": {
          "each": 0.05
        },
        "ease": {
          "type": "customWiggle",
          "wiggles": 2,
          "wiggleType": "easeOut"
        }
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "5%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-c5acf007",
      "targets": [
        [
          "wf:class",
          [
            "line-text-link"
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
        "position": 0,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "width": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-3cd52992` (Component `928b7905-eeb0-2134-5f12-4264290a5ac4` (section is-primary))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 85%",
        "end": "top top",
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
        "header-title-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-9cdabfc8`:**
```json
{
  "id": "t-9cdabfc8",
  "deleted": false,
  "actions": [
    {
      "id": "ta-8f0a8ae6",
      "targets": [
        [
          "wf:class",
          [
            "title-heading-plan"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-3f586f4c` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 80%",
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
        "list-avatar"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-741f3c35`:**
```json
{
  "id": "t-741f3c35",
  "deleted": false,
  "actions": [
    {
      "id": "ta-2672adc3",
      "targets": [
        [
          "wf:class",
          [
            "item-avatar"
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
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-407b8fec` (Site-wide (`site`))
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
      "wf:class",
      [
        "line.color-474747"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-4b6cc819`:**
```json
{
  "id": "t-4b6cc819",
  "deleted": false,
  "actions": [
    {
      "id": "ta-c8a7a0cc",
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
        "position": 0.3
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "width": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-431af191` (Site-wide (`site`))
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
        "start": "top 85%",
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
        "header-grid-2-col"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-b729649f`:**
```json
{
  "id": "t-b729649f",
  "deleted": false,
  "actions": [
    {
      "id": "ta-571e7547",
      "targets": [
        [
          "wf:class",
          [
            "heading-h6"
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
        "position": 0,
        "stagger": {
          "each": 0.1
        },
        "ease": 12
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    },
    {
      "id": "ta-8ec4eab9",
      "targets": [
        [
          "wf:class",
          [
            "text-body-5"
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
        "position": 0.31,
        "stagger": {
          "each": 0.02
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-4f1b6f8b` (Site-wide (`site`))
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
        "start": "top 85%",
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
        "testimonial-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-417d6828`:**
```json
{
  "id": "t-417d6828",
  "deleted": false,
  "actions": [
    {
      "id": "ta-cf4d3218",
      "targets": [
        [
          "wf:class",
          [
            "heading-testimonial-review"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines"
      }
    },
    {
      "id": "ta-3e315146",
      "targets": [
        [
          "wf:class",
          [
            "desc-testimonial-review"
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
        "position": 0.5,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines"
      }
    },
    {
      "id": "ta-f7782713",
      "targets": [
        [
          "wf:class",
          [
            "author-info-wrapper"
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
        "duration": 0.45,
        "position": 0.81
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-54b4f4c0` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "link-blog"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-5ed8c2bf`:**
```json
{
  "id": "t-5ed8c2bf",
  "deleted": false,
  "actions": [
    {
      "id": "ta-156fae46",
      "targets": [
        [
          "wf:class",
          [
            "image-item-blog.xlarge"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog.large"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog.medium"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog.small"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog"
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
          "scale": [
            1.1,
            1
          ]
        }
      }
    },
    {
      "id": "ta-c0e73d3a",
      "targets": [
        [
          "wf:class",
          [
            "text-body-5"
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
        "duration": 0,
        "position": 0
      },
      "tt": 3,
      "properties": {
        "wf:class": {
          "class": {
            "selectors": [
              "underline"
            ],
            "operation": "removeClass"
          }
        },
        "wf:transform": {}
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-583611e6` (Component `73424d6f-137c-a239-364e-c9c592cc8043` (navbar white w-nav))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "text-link-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-f70a0e76`:**
```json
{
  "id": "t-f70a0e76",
  "deleted": false,
  "actions": [
    {
      "id": "ta-28553520",
      "targets": [
        [
          "wf:class",
          [
            "line-text-link"
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
        "position": 0,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "width": [
            "0%",
            "0%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-5d2f8487` (Site-wide (`site`))
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
        "item-awwards"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-ddaf6109`:**
```json
{
  "id": "t-ddaf6109",
  "deleted": false,
  "actions": [
    {
      "id": "ta-af121668",
      "targets": [
        [
          "wf:class",
          [
            "text-body-4.medium.color-white"
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
        "duration": 0.63,
        "position": 0.2,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    },
    {
      "id": "ta-009b2737",
      "targets": [
        [
          "wf:class",
          [
            "archive-project"
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
        "duration": 0.3,
        "position": 0.2,
        "stagger": {
          "each": 0.03
        },
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-a5bea93f",
      "targets": [
        [
          "wf:class",
          [
            "archive-date"
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
        "duration": 0.63,
        "position": 0.2,
        "ease": 29
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "y": [
            "50px",
            null
          ],
          "opacity": [
            "0%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-603d0be5` (Site-wide (`site`))
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
        "start": "top 120%",
        "end": "bottom 100%",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "indicator-content"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-69ac75b5`:**
```json
{
  "id": "t-69ac75b5",
  "deleted": false,
  "actions": [
    {
      "id": "ta-c93b4050",
      "targets": [
        [
          "wf:class",
          [
            "indicator-item"
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
        "stagger": {
          "each": 0.3
        },
        "ease": 1
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "xPercent": [
            "10%",
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-61b770fc` (Component `72dffedf-bec3-68a8-5abc-b72c9622d99e` (section-label-wrap))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
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
        "section-label-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-a9a9332a`:**
```json
{
  "id": "t-a9a9332a",
  "deleted": false,
  "actions": [
    {
      "id": "ta-24a55985",
      "targets": [
        [
          "wf:class",
          [
            "label-text.white"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0,
        "ease": 1
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "xPercent": [
            -100,
            0
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-6992abab` (Component `20c27f4a-860b-cfdc-a244-67a39fc917bb` (navbar black w-nav))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "text-link-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-8583eadb`:**
```json
{
  "id": "t-8583eadb",
  "deleted": false,
  "actions": [
    {
      "id": "ta-8a637e77",
      "targets": [
        [
          "wf:class",
          [
            "line-text-link"
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
        "position": 0,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "width": [
            "0%",
            "0%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-7385a752` (Site-wide (`site`))
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
        "end": "bottom 50%",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "scroll-text-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-54b16c13`:**
```json
{
  "id": "t-54b16c13",
  "deleted": false,
  "actions": [
    {
      "id": "ta-f86bd595",
      "targets": [
        [
          "wf:class",
          [
            "text-scroll"
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
        "duration": 0.1,
        "position": 0,
        "stagger": {
          "each": 0.03
        },
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:style": {
          "color": [
            "var(--black-opacity-30)",
            "var(--neutral-color--black)"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    },
    {
      "id": "ta-1266d16c",
      "targets": [
        [
          "wf:class",
          [
            "text-scroll-2"
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
        "duration": 0.1,
        "position": 0,
        "stagger": {
          "each": 0.03
        },
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:style": {
          "color": [
            "var(--white-opacity-30)",
            "var(--neutral-color--white)"
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-774e8211` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 85%",
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
        "header-wcu"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-76576e37`:**
```json
{
  "id": "t-76576e37",
  "deleted": false,
  "actions": [
    {
      "id": "ta-68f32a2a",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-2321afea",
      "targets": [
        [
          "wf:class",
          [
            "heading-h6.semi-boild"
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
        "position": 0.33,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines"
      }
    },
    {
      "id": "ta-77a4b0b3",
      "targets": [
        [
          "wf:class",
          [
            "single-content-sub"
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
        "position": 0.48,
        "stagger": {
          "each": 0.05
        },
        "ease": 3
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "xPercent": [
            "-20%",
            0
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-80d393db` (Component `12e2c3e5-0946-16d6-8d25-b03ffc62d6c8` (faq))
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
        "start": "top 85%",
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
        "faq"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-79bb184c`:**
```json
{
  "id": "t-79bb184c",
  "deleted": false,
  "actions": [
    {
      "id": "ta-a10900d8",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-8404e27e",
      "targets": [
        [
          "wf:class",
          [
            "faq-tab-link"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0.3,
        "stagger": {
          "each": 0.2
        },
        "ease": 1
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-624dbccd",
      "targets": [
        [
          "wf:class",
          [
            "get-contact"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 1.6,
        "ease": 29
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-82c84a0a` (Site-wide (`site`))
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
        "start": "top 80%",
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
        "newsletter-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-721cae9e`:**
```json
{
  "id": "t-721cae9e",
  "deleted": false,
  "actions": [
    {
      "id": "ta-9881e277",
      "targets": [
        [
          "wf:class",
          [
            "title-newsletter"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    },
    {
      "id": "ta-fb6dbe9a",
      "targets": [
        [
          "wf:class",
          [
            "newsletter-form"
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
        "position": 0.3,
        "ease": 26
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-8882f283` (Site-wide (`site`))
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
        "start": "top 70%",
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
        "our-work-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-b1406237`:**
```json
{
  "id": "t-b1406237",
  "deleted": false,
  "actions": [
    {
      "id": "ta-4ae21cde",
      "targets": [
        [
          "wf:class",
          [
            "icon-decor-our-work._1"
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
        "duration": 1.5,
        "position": 0,
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "rotation": [
            "45deg",
            null
          ],
          "scale": [
            0,
            null
          ]
        }
      }
    },
    {
      "id": "ta-0cda134e",
      "targets": [
        [
          "wf:class",
          [
            "images-acess-cover-1"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "images-acess-cover-2"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "images-acess-cover-3"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0.4
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-5606ce94",
      "targets": [
        [
          "wf:class",
          [
            "tilte-our-work"
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
        "position": 0.4,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    },
    {
      "id": "ta-77cb42da",
      "targets": [
        [
          "wf:class",
          [
            "number-cover-title"
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
        "duration": 0.46,
        "position": 1.1,
        "stagger": {
          "each": 0.1,
          "grid": "auto"
        },
        "ease": 14
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    },
    {
      "id": "ta-0af8bd49",
      "targets": [
        [
          "wf:class",
          [
            "icon-decor-our-work._2"
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
        "duration": 1.5,
        "position": 1.4,
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "rotation": [
            "45deg",
            null
          ],
          "scale": [
            0,
            null
          ]
        }
      }
    },
    {
      "id": "ta-48730166",
      "targets": [
        [
          "wf:class",
          [
            "heading-h6.semi-boild"
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
        "position": 1.8,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-8a6d07e1` (Component `20c27f4a-860b-cfdc-a244-67a39fc917bb` (navbar black w-nav))
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

### Interaction `i-8f08023f` (Site-wide (`site`))
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
        "start": "top 85%",
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
        "header-blog-list"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-2aafa8cc`:**
```json
{
  "id": "t-2aafa8cc",
  "deleted": false,
  "actions": [
    {
      "id": "ta-3de5f401",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-b18d913e` (Site-wide (`site`))
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
- **Timeline `t-fa24a9ff`:**
```json
{
  "id": "t-fa24a9ff",
  "deleted": false,
  "actions": [
    {
      "id": "ta-4aaaec83",
      "targets": [
        [
          "wf:class",
          [
            "title-large"
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
        "stagger": {
          "each": 0.05
        },
        "ease": 5
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "x": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-87f84b3d",
      "targets": [
        [
          "wf:class",
          [
            "image-cover-title-large"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.47,
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            100,
            null
          ]
        }
      }
    },
    {
      "id": "ta-870a586c",
      "targets": [
        [
          "wf:class",
          [
            "links-socials"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.7,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "xPercent": [
            "-100%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-1509bcfb",
      "targets": [
        [
          "wf:class",
          [
            "info-email"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.8,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            -100,
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-b23d0e8d` (Site-wide (`site`))
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
        "start": "top 85%",
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
        "about-us-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-411027bd`:**
```json
{
  "id": "t-411027bd",
  "deleted": false,
  "actions": [
    {
      "id": "ta-b110d49b",
      "targets": [
        [
          "wf:class",
          [
            "heading-h4.text-scroll-2"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines"
      }
    },
    {
      "id": "ta-cab96910",
      "targets": [
        [
          "wf:class",
          [
            "text-body-4.netrual-500.text-align-end"
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
        "position": 0.4,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-b7a6cc4d` (Component `be58a1a5-5852-41cf-9c60-cdf9cd64c366` (section-label-wrap))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 95%",
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
        "section-label-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-a45e18aa`:**
```json
{
  "id": "t-a45e18aa",
  "deleted": false,
  "actions": [
    {
      "id": "ta-924bafef",
      "targets": [
        [
          "wf:class",
          [
            "label-text"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.3,
        "ease": 3
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "xPercent": [
            -100,
            0
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-d5f3343c` (Component `73424d6f-137c-a239-364e-c9c592cc8043` (navbar white w-nav))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:click",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "menu-nav"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-2e4552a0`:**
```json
{
  "id": "t-2e4552a0",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e4b260fd",
      "targets": [
        [
          "wf:class",
          [
            "main-link-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "heading-menu-link"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "parent-menu-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "button-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0,
        "stagger": {
          "each": 0.1
        },
        "ease": 9
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            100,
            null
          ]
        }
      }
    },
    {
      "id": "ta-633aef53",
      "targets": [
        [
          "wf:class",
          [
            "line"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0.6,
        "stagger": {
          "each": 0.05
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "width": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-dace8750` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "link-blog"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-6ed4580d`:**
```json
{
  "id": "t-6ed4580d",
  "deleted": false,
  "actions": [
    {
      "id": "ta-5d132a97",
      "targets": [
        [
          "wf:class",
          [
            "image-item-blog.small"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog.medium"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog.large"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog.xlarge"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "image-item-blog"
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
        "position": 0
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
    },
    {
      "id": "ta-86231d0c",
      "targets": [
        [
          "wf:class",
          [
            "text-body-5"
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
        "duration": 0,
        "position": 0
      },
      "tt": 3,
      "properties": {
        "wf:class": {
          "class": {
            "selectors": [
              "underline"
            ],
            "operation": "addClass"
          }
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-de797ee6` (Site-wide (`site`))
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
        "start": "top 70%",
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
        "work-collection-item-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-9f7566b2`:**
```json
{
  "id": "t-9f7566b2",
  "deleted": false,
  "actions": [
    {
      "id": "ta-da15686f",
      "targets": [
        [
          "wf:class",
          [
            "image-work-collection-item.absolute"
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
        "stagger": {
          "each": 0.2
        },
        "ease": 12
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            1.5,
            1
          ],
          "height": [
            "0%",
            "auto"
          ],
          "width": [
            "100%",
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-83a30180",
      "targets": [
        [
          "wf:class",
          [
            "text-body-4.semibold"
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
        "position": 0.2,
        "stagger": {
          "each": 0.15
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-e78f5d67` (Component `713001ec-fd2a-4e0b-97cb-445ee2bdb561` (annoucement-bar))
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
- **Timeline `t-a0269940`:**
```json
{
  "id": "t-a0269940",
  "deleted": false,
  "actions": [
    {
      "id": "ta-997383d5",
      "targets": [
        [
          "wf:class",
          [
            "title-annoucement"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "text-link-underline"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.3,
        "position": 0,
        "stagger": {
          "each": 0.02,
          "from": "random"
        },
        "ease": 7
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
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
      "id": "ta-45c379a6",
      "targets": [
        [
          "wf:class",
          [
            "dot"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.36,
        "position": 0.5,
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0,
            1
          ]
        }
      }
    },
    {
      "id": "ta-6d16a352",
      "targets": [
        [
          "wf:class",
          [
            "line-under-text"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.31,
        "position": 0.55
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "width": [
            "0px",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-ee86e588` (Component `20c27f4a-860b-cfdc-a244-67a39fc917bb` (navbar black w-nav))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:click",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "menu-nav"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-862f2dc8`:**
```json
{
  "id": "t-862f2dc8",
  "deleted": false,
  "actions": [
    {
      "id": "ta-119f8cf2",
      "targets": [
        [
          "wf:class",
          [
            "main-link-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "heading-menu-link"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "parent-menu-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "button-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0,
        "stagger": {
          "each": 0.1
        },
        "ease": 9
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            100,
            null
          ]
        }
      }
    },
    {
      "id": "ta-d6377fac",
      "targets": [
        [
          "wf:class",
          [
            "line"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0.6,
        "stagger": {
          "each": 0.05
        }
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "width": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-f5fdb4e2` (Site-wide (`site`))
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
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
      "wf:class",
      [
        "blog-list-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-39db6104`:**
```json
{
  "id": "t-39db6104",
  "deleted": false,
  "actions": [
    {
      "id": "ta-fd856df0",
      "targets": [
        [
          "wf:class",
          [
            "image-item-blog.ghost"
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
        "stagger": {
          "each": 0.2
        },
        "ease": 12
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "0px",
            "100%"
          ],
          "width": [
            "100%",
            "100%"
          ],
          "scale": [
            1.5,
            1
          ]
        }
      }
    },
    {
      "id": "ta-88c593ba",
      "targets": [
        [
          "wf:class",
          [
            "text-body-5"
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
        "position": 0.15,
        "stagger": {
          "each": 0.02
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    },
    {
      "id": "ta-27bbd905",
      "targets": [
        [
          "wf:class",
          [
            "author-blog"
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
        "stagger": {
          "each": 0.02
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            -100,
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### Interaction `i-94cdcbf7` (Pages `["6a4724c3bc726c09c0b940fc"]`)
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
        "compare-content"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-99f01e7d`:**
```json
{
  "id": "t-99f01e7d",
  "deleted": false,
  "actions": [
    {
      "id": "ta-110742f1",
      "targets": [
        [
          "wf:class",
          [
            "text-body-4"
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
        "stagger": {
          "each": 0.3
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.1054bcf4.1d3e8a7893a6d35b.js"
}
```

### Interaction `i-f1c6f831` (Pages `["6a4724c3bc726c09c0b940fc"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 85%",
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
        "compare-pricing-title"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-de59b386`:**
```json
{
  "id": "t-de59b386",
  "deleted": false,
  "actions": [
    {
      "id": "ta-564c8d6d",
      "targets": [
        [
          "wf:class",
          [
            "title-compare-pricing"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    }
  ],
  "sourceBundle": "webflow.1054bcf4.1d3e8a7893a6d35b.js"
}
```

### Interaction `i-e0aac7a9` (Pages `["6a5ee86ea4a3c3f3ba9909ab"]`)
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
- **Timeline `t-29fc8552`:**
```json
{
  "id": "t-29fc8552",
  "deleted": false,
  "actions": [
    {
      "id": "ta-7452a463",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1.color-white"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.3,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    }
  ],
  "sourceBundle": "webflow.3419f732.5bf91243c36c9ae8.js"
}
```

### Interaction `i-5fcae23a` (Pages `["6a66dab0e4ed77a63e88f939"]`)
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
- **Timeline `t-0c3b68e2`:**
```json
{
  "id": "t-0c3b68e2",
  "deleted": false,
  "actions": [
    {
      "id": "ta-f41dbebe",
      "targets": [
        [
          "wf:class",
          [
            "name-mamber"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-071f8d5d",
      "targets": [
        [
          "wf:class",
          [
            "text-profile-member-detail"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.41,
        "stagger": {
          "each": 0.005
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            -100,
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    },
    {
      "id": "ta-0859a39a",
      "targets": [
        [
          "wf:class",
          [
            "image-avatar-member"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-e017e4a0",
      "targets": [
        [
          "wf:class",
          [
            "image-profile-cover"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.41,
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0,
            1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.39bd4738.db929548f3453ba0.js"
}
```

### Interaction `i-e7247612` (Pages `["6a57087fa4a725f72a75763f"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "content-services-collection"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-e91d71a5`:**
```json
{
  "id": "t-e91d71a5",
  "deleted": false,
  "actions": [
    {
      "id": "ta-970bdeca",
      "targets": [
        [
          "wf:class",
          [
            "image-single-services"
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
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            1,
            1.2
          ]
        }
      }
    },
    {
      "id": "ta-5133842c",
      "targets": [
        [
          "wf:class",
          [
            "title-services-item"
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
        "duration": 0,
        "position": 0
      },
      "tt": 3,
      "properties": {
        "wf:class": {
          "class": {
            "selectors": [
              "underline"
            ],
            "operation": "addClass"
          }
        }
      }
    }
  ],
  "sourceBundle": "webflow.53e89906.963f66532d2d32d0.js"
}
```

### Interaction `i-f79b46fc` (Pages `["6a57087fa4a725f72a75763f"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 85%",
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
        "scroll-text-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-5a0430ef`:**
```json
{
  "id": "t-5a0430ef",
  "deleted": false,
  "actions": [
    {
      "id": "ta-3803ac8a",
      "targets": [
        [
          "wf:class",
          [
            "scroll-text-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "stagger": {
          "each": 0.01
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "yPercent": [
            "50%",
            null
          ],
          "opacity": [
            "0%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    }
  ],
  "sourceBundle": "webflow.53e89906.963f66532d2d32d0.js"
}
```

### Interaction `i-f9fd495e` (Pages `["6a57087fa4a725f72a75763f"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:hover",
    {
      "controlType": "standard",
      "pluginConfig": {
        "type": "mouseleave",
        "hover": "each"
      }
    },
    [
      "wf:class",
      [
        "content-services-collection"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-90160831`:**
```json
{
  "id": "t-90160831",
  "deleted": false,
  "actions": [
    {
      "id": "ta-54420d0c",
      "targets": [
        [
          "wf:class",
          [
            "image-single-services"
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
        "ease": 26
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "scale": [
            1.2,
            1
          ]
        }
      }
    },
    {
      "id": "ta-f2b429c1",
      "targets": [
        [
          "wf:class",
          [
            "title-services-item"
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
        "duration": 0,
        "position": 0
      },
      "tt": 3,
      "properties": {
        "wf:class": {
          "class": {
            "selectors": [
              "underline"
            ],
            "operation": "removeClass"
          }
        }
      }
    }
  ],
  "sourceBundle": "webflow.53e89906.963f66532d2d32d0.js"
}
```

### Interaction `i-243c0f3a` (Pages `["6a3364cd428b36afdf5f6df3"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:click",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "button-slider"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-ffe498d5`:**
```json
{
  "id": "t-ffe498d5",
  "deleted": false,
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-3f2b483b` (Pages `["6a3364cd428b36afdf5f6df3"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:click",
    {
      "controlType": "standard"
    },
    [
      "wf:class",
      [
        "tabs-link-hero"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-548cb5e9`:**
```json
{
  "id": "t-548cb5e9",
  "deleted": false,
  "actions": [
    {
      "id": "ta-fda91e0c",
      "targets": [
        [
          "wf:class",
          [
            "pane-hero-content"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0,
            1
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-4b0c5004` (Pages `["6a3364cd428b36afdf5f6df3"]`)
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
- **Timeline `t-345c143a`:**
```json
{
  "id": "t-345c143a",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e94188c7",
      "targets": [
        [
          "wf:class",
          [
            "transition-line"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1.8,
        "position": 0,
        "ease": 10
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "height": [
            "0%",
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-e07168ac",
      "targets": [
        [
          "wf:class",
          [
            "wing"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1.2,
        "position": 2.8,
        "ease": 11
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scaleX": [
            0.95,
            0
          ]
        }
      }
    },
    {
      "id": "ta-62e0d4fa",
      "targets": [
        [
          "wf:class",
          [
            "column-mask"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1.2,
        "position": 2.8,
        "ease": 11
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "scaleX": [
            1,
            0
          ]
        }
      }
    },
    {
      "id": "ta-3a70b5f5",
      "targets": [
        [
          "wf:class",
          [
            "transition-line"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0,
        "position": 2.8
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "0%"
          ]
        }
      }
    },
    {
      "id": "ta-891b70a9",
      "targets": [
        [
          "wf:class",
          [
            "logo-page-transition"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.8,
        "position": 0.55,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-266650ee",
      "targets": [
        [
          "wf:class",
          [
            "logo-page-transition"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.8,
        "position": 1.95,
        "stagger": {
          "each": 0.05,
          "from": "end"
        },
        "ease": 11
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "0%"
          ],
          "yPercent": [
            null,
            "-100%"
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-ae7f8f74",
      "targets": [
        [
          "wf:class",
          [
            "title-hero-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.8,
        "position": 3.11,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "60%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars",
        "mask": "chars"
      }
    },
    {
      "id": "ta-51048d48",
      "targets": [
        [
          "wf:class",
          [
            "split-text-hero-absolute"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 3.52,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "xPercent": [
            "10%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-56802bb6",
      "targets": [
        [
          "wf:class",
          [
            "split-text-hero-absolute"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 3,
        "repeat": -1,
        "yoyo": true,
        "position": 5.36,
        "stagger": {
          "each": 1,
          "from": "random"
        }
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "50%"
          ]
        }
      }
    },
    {
      "id": "ta-1a3a1017",
      "targets": [
        [
          "wf:class",
          [
            "tabs-menu-hero"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 3.29,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "xPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    },
    {
      "id": "ta-b3772e73",
      "targets": [
        [
          "wf:class",
          [
            "pane-hero-content"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 3.27,
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0,
            1
          ]
        }
      }
    },
    {
      "id": "ta-5dade3a3",
      "targets": [
        [
          "wf:class",
          [
            "image-hero-home"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 8,
        "repeat": -1,
        "yoyo": true,
        "position": 2.81
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "scale": [
            null,
            1.1
          ]
        }
      }
    },
    {
      "id": "ta-cd1b0086",
      "targets": [
        [
          "wf:class",
          [
            "page-transition-overlay"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0,
        "position": 0
      },
      "tt": 3,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-cb6d1391",
      "targets": [
        [
          "wf:class",
          [
            "page-transition-overlay"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0,
        "position": 4
      },
      "tt": 3,
      "properties": {
        "wf:transform": {
          "opacity": [
            null,
            "0%"
          ]
        }
      }
    },
    {
      "id": "ta-264f0a42",
      "targets": [
        [
          "wf:class",
          [
            "info-email"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "button-hero-home"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 3.45,
        "ease": 29
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-6c605c0e` (Pages `["6a3364cd428b36afdf5f6df3"]`)
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
        "infinite-slide"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-ff698f72`:**
```json
{
  "id": "t-ff698f72",
  "deleted": false,
  "actions": [
    {
      "id": "ta-1a877b9e",
      "targets": [
        [
          "wf:any-element",
          "*",
          {
            "relationship": "direct-child-of",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 15,
        "repeat": -1,
        "yoyo": false,
        "position": 0,
        "ease": 0
      },
      "properties": {
        "wf:transform": {
          "x": [
            null,
            "-100%"
          ]
        }
      }
    }
  ],
  "settings": {
    "repeat": -1,
    "yoyo": false
  },
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-8e315232` (Pages `["6a68107bb9ce9f4acaecbb03","6a3364cd428b36afdf5f6df3"]`)
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
        "start": "top 85%",
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
        "team-member-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-7b5f9eee`:**
```json
{
  "id": "t-7b5f9eee",
  "deleted": false,
  "actions": [
    {
      "id": "ta-065e32d0",
      "targets": [
        [
          "wf:class",
          [
            "title-team-member"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-87fc50bb",
      "targets": [
        [
          "wf:class",
          [
            "sub-title-team"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "text-body-4.medium.netrual-600"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "sub-text-member"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "desc-sub-text-member"
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
        "position": 0.3,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines"
      }
    },
    {
      "id": "ta-c85c2331",
      "targets": [
        [
          "wf:class",
          [
            "item-op-job"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.3,
        "position": 0.41,
        "stagger": {
          "each": 0.05
        },
        "ease": 3
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ],
          "xPercent": [
            "-20%",
            0
          ]
        }
      }
    },
    {
      "id": "ta-977ef9ea",
      "targets": [
        [
          "wf:class",
          [
            "member-collection-single"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "view-more-member"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 1,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "20%",
            null
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-d989fe73` (Pages `["6a3364cd428b36afdf5f6df3"]`)
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
- **Timeline `t-805bf4c1`:**
```json
{
  "id": "t-805bf4c1",
  "deleted": false,
  "actions": [
    {
      "id": "ta-6f098099",
      "targets": [
        [
          "wf:class",
          [
            "transition-line"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 2
      },
      "properties": {
        "wf:transform": {}
      }
    }
  ],
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-fcb80d69` (Pages `["6a3364cd428b36afdf5f6df3"]`)
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
        "end": "bottom 150%",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "section.is-black.no-padding.showreel"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-233a146b`:**
```json
{
  "id": "t-233a146b",
  "deleted": false,
  "actions": [
    {
      "id": "ta-f0003285",
      "targets": [
        [
          "wf:inst",
          [
            "6a3364cd428b36afdf5f6df3",
            "2a29630e-f5b4-eea3-e49a-19775d854c1d"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.29,
        "position": 0.3,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "xPercent": [
            null,
            "-700%"
          ]
        }
      }
    },
    {
      "id": "ta-9f255b3a",
      "targets": [
        [
          "wf:inst",
          [
            "6a3364cd428b36afdf5f6df3",
            "dba84af5-583a-7ef7-eb16-78a40184b6b6"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.29,
        "position": 0.3,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "xPercent": [
            null,
            "700%"
          ]
        }
      }
    },
    {
      "id": "ta-3870a160",
      "targets": [
        [
          "wf:class",
          [
            "section-spin"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.86,
        "position": 0.46,
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "scale": [
            0.3,
            null
          ]
        }
      }
    },
    {
      "id": "ta-00bae90d",
      "targets": [
        [
          "wf:class",
          [
            "brand-info"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "showreel-button"
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
        "duration": 0.07,
        "position": 1.1880000000000002,
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-03091ac3` (Pages `["6a3364cd428b36afdf5f6df3"]`)
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
        "end": "80% top",
        "scrub": 0.8,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "our-approach-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-cbbf274e`:**
```json
{
  "id": "t-cbbf274e",
  "deleted": false,
  "actions": [
    {
      "id": "ta-b19782ed",
      "targets": [
        [
          "wf:class",
          [
            "item-our-approach._1"
          ],
          {
            "relationship": "within",
            "filterBy": [
              "wf:trigger-only",
              ""
            ],
            "firstMatchOnly": false
          }
        ],
        [
          "wf:class",
          [
            "item-our-approach._3"
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
      "tt": 1,
      "properties": {
        "wf:transform": {
          "y": [
            "100%",
            "-10%"
          ]
        }
      }
    },
    {
      "id": "ta-96a21bb7",
      "targets": [
        [
          "wf:class",
          [
            "item-our-approach._2"
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
      "tt": 1,
      "properties": {
        "wf:transform": {
          "y": [
            "-45%",
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-347c3699` (Pages `["6a3364cd428b36afdf5f6df3"]`)
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
        "end": "-20% top",
        "scrub": 0.8,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "indicator-wrapper"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-88c6e5df`:**
```json
{
  "id": "t-88c6e5df",
  "deleted": false,
  "actions": [
    {
      "id": "ta-56b6a38e",
      "targets": [
        [
          "wf:class",
          [
            "indicator-item.zindex-2"
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
      "tt": 1,
      "properties": {
        "wf:transform": {
          "xPercent": [
            "-100%",
            null
          ],
          "scale": [
            0.85,
            null
          ]
        }
      }
    },
    {
      "id": "ta-60a8626c",
      "targets": [
        [
          "wf:class",
          [
            "indicator-item.zindex-1"
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
      "tt": 1,
      "properties": {
        "wf:transform": {
          "xPercent": [
            "-200%",
            null
          ],
          "scale": [
            0.7,
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.71522d85.c7d08b619ce610a2.js"
}
```

### Interaction `i-0122dfc1` (Pages `["6a3b2fee57d36ac89dba0979"]`)
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
- **Timeline `t-d445aab7`:**
```json
{
  "id": "t-d445aab7",
  "deleted": false,
  "actions": [
    {
      "id": "ta-ac112603",
      "targets": [
        [
          "wf:class",
          [
            "title-h0-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 0.3,
        "position": 0,
        "stagger": {
          "each": 0.05,
          "ease": 0,
          "from": "start"
        },
        "ease": 7
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "y": [
            "100%",
            null
          ],
          "opacity": [
            "0%",
            null
          ]
        }
      },
      "splitText": {
        "type": "chars"
      }
    },
    {
      "id": "ta-4ff70f00",
      "targets": [
        [
          "wf:class",
          [
            "title-h0"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 30,
        "repeat": -1,
        "yoyo": true,
        "position": 0.85
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "x": [
            null,
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.77ad3714.8789d2642b8572a1.js"
}
```

### Interaction `i-4e8235f7` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
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
        "end": "80% bottom",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "list-card-feature-about"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-e5e8007b`:**
```json
{
  "id": "t-e5e8007b",
  "deleted": false,
  "actions": [
    {
      "id": "ta-a1d19207",
      "targets": [
        [
          "wf:inst",
          [
            "6a68107bb9ce9f4acaecbb03",
            "2860333a-0889-05c1-5dc4-e46d16de6cc4"
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
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "xPercent": [
            "-100%",
            null
          ],
          "scale": [
            0.85,
            null
          ]
        }
      }
    },
    {
      "id": "ta-99d497fd",
      "targets": [
        [
          "wf:inst",
          [
            "6a68107bb9ce9f4acaecbb03",
            "9b8c30d9-8b41-b0b3-147c-463507539189"
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
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "xPercent": [
            "-200%",
            null
          ],
          "scale": [
            0.7,
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-9d82092a` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
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
        "image-track-scroll-wrap"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-54d1c85d`:**
```json
{
  "id": "t-54d1c85d",
  "deleted": false,
  "actions": [
    {
      "id": "ta-a1f4895b",
      "targets": [
        [
          "wf:class",
          [
            "image-track-scroll"
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
        "duration": 35,
        "repeat": -1,
        "yoyo": false,
        "ease": 0
      },
      "tt": 0,
      "properties": {
        "wf:transform": {
          "x": [
            null,
            "-100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-af84de75` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:custom",
    {
      "controlType": "standard"
    },
    [
      "wf:body",
      ""
    ]
  ]
]
```

### Interaction `i-43921ddc` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
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
        "start": "top 20%",
        "end": "70% top",
        "scrub": 1,
        "enter": "play",
        "leave": "none",
        "enterBack": "none",
        "leaveBack": "none"
      }
    },
    [
      "wf:class",
      [
        "about-new"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-5657cb37`:**
```json
{
  "id": "t-5657cb37",
  "deleted": false,
  "actions": [
    {
      "id": "ta-7fe3274e",
      "targets": [
        [
          "wf:class",
          [
            "indicator-item._01"
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
        "duration": 0.2,
        "position": 0.2,
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-dc1c7119",
      "targets": [
        [
          "wf:class",
          [
            "indicator-item._02"
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
        "duration": 0.2,
        "position": 0.5,
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-b02a2d04",
      "targets": [
        [
          "wf:class",
          [
            "indicator-item-2"
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
        "duration": 0.2,
        "position": 0.8,
        "ease": 0
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "xPercent": [
            "100%",
            null
          ]
        }
      }
    }
  ],
  "canvasDuration": 1,
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-308ffa0a` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
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
        "start": "top 85%",
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
        "content-wcu-2nd"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-c17d6140`:**
```json
{
  "id": "t-c17d6140",
  "deleted": false,
  "actions": [
    {
      "id": "ta-7577c61f",
      "targets": [
        [
          "wf:class",
          [
            "item-wcu-2nd"
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
        "duration": 0.3,
        "stagger": {
          "each": 0.2
        },
        "ease": 29
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    }
  ],
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-38b8d54c` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
- **Deleted:** `false`
- **Triggers:**
```json
[
  [
    "wf:scroll",
    {
      "controlType": "scroll",
      "scrollTriggerConfig": {
        "clamp": false,
        "start": "top 85%",
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
        "header-about-2nd"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-2c3f3774`:**
```json
{
  "id": "t-2c3f3774",
  "deleted": false,
  "actions": [
    {
      "id": "ta-0c760ed4",
      "targets": [
        [
          "wf:class",
          [
            "heading-h3.color-white"
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
        "position": 0,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    },
    {
      "id": "ta-390fa88c",
      "targets": [
        [
          "wf:class",
          [
            "text-body-5.netrual-500"
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
        "position": 0.3,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-2925b226` (Pages `["6a68107bb9ce9f4acaecbb03"]`)
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
        "title-wcu-2nd"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-63e7c6e8`:**
```json
{
  "id": "t-63e7c6e8",
  "deleted": false,
  "actions": [
    {
      "id": "ta-523e0e62",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
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
        "position": 0,
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-7dbc4a1b",
      "targets": [
        [
          "wf:class",
          [
            "sub-title-wcu-2nd"
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
        "position": 0.3,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.956e730b.21187100da45e65a.js"
}
```

### Interaction `i-457e087c` (Pages `["6a5705256fedc8389901bfc3"]`)
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
        "process-heading"
      ],
      {
        "relationship": "none",
        "firstMatchOnly": false
      }
    ]
  ]
]
```
- **Timeline `t-07c27cf0`:**
```json
{
  "id": "t-07c27cf0",
  "deleted": false,
  "actions": [
    {
      "id": "ta-1e9ef0d6",
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
        "stagger": {
          "each": 0.02
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    }
  ],
  "sourceBundle": "webflow.b2fff26c.4b186da136fce871.js"
}
```

### Interaction `i-b4d91ed8` (Pages `["6a5705256fedc8389901bfc3"]`)
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
- **Timeline `t-4542b3f5`:**
```json
{
  "id": "t-4542b3f5",
  "deleted": false,
  "actions": [
    {
      "id": "ta-e8da1f08",
      "targets": [
        [
          "wf:class",
          [
            "heading-h1"
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
        "stagger": {
          "each": 0.1
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "50%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words"
      }
    },
    {
      "id": "ta-7de03085",
      "targets": [
        [
          "wf:class",
          [
            "content-image-detail-services"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0,
        "ease": 2
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-0574d5e0",
      "targets": [
        [
          "wf:class",
          [
            "image-cover-detail-services"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.4,
        "ease": 26
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "scale": [
            0,
            1
          ]
        }
      }
    },
    {
      "id": "ta-368c4923",
      "targets": [
        [
          "wf:class",
          [
            "text-body-6.medium"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.4,
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    },
    {
      "id": "ta-7027dd3d",
      "targets": [
        [
          "wf:class",
          [
            "categories-services-item"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.6,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      }
    },
    {
      "id": "ta-5b785193",
      "targets": [
        [
          "wf:class",
          [
            "info-services._02"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.8,
        "stagger": {
          "each": 0.05
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            -100,
            null
          ]
        }
      },
      "splitText": {
        "type": "lines",
        "mask": "lines"
      }
    }
  ],
  "sourceBundle": "webflow.b2fff26c.4b186da136fce871.js"
}
```

### Interaction `i-bc449382` (Pages `["6a5705256fedc8389901bfc3"]`)
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

### Interaction `i-75959ce1` (Pages `["6a5469d14c8fb6e86901b1d6"]`)
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
- **Timeline `t-93485ae4`:**
```json
{
  "id": "t-93485ae4",
  "deleted": false,
  "actions": [
    {
      "id": "ta-97213123",
      "targets": [
        [
          "wf:class",
          [
            "author-wrap"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "position": 0,
        "ease": 2
      },
      "tt": 2,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            "100%"
          ]
        }
      }
    },
    {
      "id": "ta-bd27aed2",
      "targets": [
        [
          "wf:class",
          [
            "name-blog-post"
          ],
          {
            "relationship": "none",
            "firstMatchOnly": false
          }
        ]
      ],
      "timing": {
        "duration": 1,
        "position": 0.27,
        "stagger": {
          "amount": 0.3
        },
        "ease": 11
      },
      "tt": 1,
      "properties": {
        "wf:transform": {
          "opacity": [
            "0%",
            null
          ],
          "yPercent": [
            "100%",
            null
          ]
        }
      },
      "splitText": {
        "type": "words",
        "mask": "words"
      }
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

---

## Component & Element Hover / Click / Scroll Interactions (IX2 Engine)

### IX2 Action Lists (40 total)

#### Action List `a-2` — "Hover Link Nav In"
```json
{
  "id": "a-2",
  "title": "Hover Link Nav In",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-2-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".title-link",
              "selectorGuids": [
                "6587d1fd-d39c-df78-1923-6dad094621c4"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-2-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".title-link.absolute",
              "selectorGuids": [
                "6587d1fd-d39c-df78-1923-6dad094621c4",
                "d725e133-34e7-ee33-4f46-8bce768821b3"
              ]
            },
            "yValue": 40,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-2-n-7",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-link-nav",
              "selectorGuids": [
                "3f3cb2ee-7ca0-dda8-ee91-1b011af7da8b"
              ]
            },
            "widthValue": 0,
            "heightValue": 0,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-2-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".title-link",
              "selectorGuids": [
                "6587d1fd-d39c-df78-1923-6dad094621c4"
              ]
            },
            "yValue": -140,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-2-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".title-link.absolute",
              "selectorGuids": [
                "6587d1fd-d39c-df78-1923-6dad094621c4",
                "d725e133-34e7-ee33-4f46-8bce768821b3"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-2-n-6",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".number-title",
              "selectorGuids": [
                "8a84e65a-549e-c09e-c093-8c192b8b7066"
              ]
            },
            "globalSwatchId": "--secondary-color",
            "rValue": 17,
            "bValue": 17,
            "gValue": 17,
            "aValue": 1
          }
        },
        {
          "id": "a-2-n-8",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-link-nav",
              "selectorGuids": [
                "3f3cb2ee-7ca0-dda8-ee91-1b011af7da8b"
              ]
            },
            "widthValue": 24,
            "heightValue": 24,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782187647737,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-3` — "Hover Link Nav Out"
```json
{
  "id": "a-3",
  "title": "Hover Link Nav Out",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-3-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".title-link",
              "selectorGuids": [
                "6587d1fd-d39c-df78-1923-6dad094621c4"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-3-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".title-link.absolute",
              "selectorGuids": [
                "6587d1fd-d39c-df78-1923-6dad094621c4",
                "d725e133-34e7-ee33-4f46-8bce768821b3"
              ]
            },
            "yValue": 40,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-3-n-3",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".number-title",
              "selectorGuids": [
                "8a84e65a-549e-c09e-c093-8c192b8b7066"
              ]
            },
            "globalSwatchId": "--neutral-color--neutral-500",
            "rValue": 160,
            "bValue": 160,
            "gValue": 160,
            "aValue": 1
          }
        },
        {
          "id": "a-3-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-link-nav",
              "selectorGuids": [
                "3f3cb2ee-7ca0-dda8-ee91-1b011af7da8b"
              ]
            },
            "widthValue": 0,
            "heightValue": 0,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-3-n-5",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "selector": ".line",
              "selectorGuids": [
                "618e78e9-c46b-9c5e-a687-ac3dde57cb31"
              ]
            },
            "globalSwatchId": "--neutral-color--neutral-500",
            "rValue": 160,
            "bValue": 160,
            "gValue": 160,
            "aValue": 1
          }
        },
        {
          "id": "a-3-n-7",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".heading",
              "selectorGuids": [
                "0f27c179-0409-310a-cb9b-b62d7d5ad5f6"
              ]
            },
            "globalSwatchId": "--neutral-color--neutral-500",
            "rValue": 160,
            "bValue": 160,
            "gValue": 160,
            "aValue": 1
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782187647737,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-5` — "Hover Button In"
```json
{
  "id": "a-5",
  "title": "Hover Button In",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-5-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button.absolute",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953",
                "0e1d9086-17a6-edb7-f9be-56f5db067a85"
              ]
            },
            "yValue": 100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-5-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-button.absolute",
              "selectorGuids": [
                "ed87698d-9eab-0d06-028d-1fb68df17da8",
                "3fc42311-7cbf-78ef-1e12-c67aab068732"
              ]
            },
            "xValue": -100,
            "xUnit": "%",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-5-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".layer-default",
              "selectorGuids": [
                "91f0c3a2-2a6a-5d5f-7639-26a5a7afd9ef"
              ]
            },
            "value": 0,
            "unit": ""
          }
        },
        {
          "id": "a-5-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".layer-hover",
              "selectorGuids": [
                "6b6a4995-e7d3-cd8a-3d4b-9a0accde65f0"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-5-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-5-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button.absolute",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953",
                "0e1d9086-17a6-edb7-f9be-56f5db067a85"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-5-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-button",
              "selectorGuids": [
                "ed87698d-9eab-0d06-028d-1fb68df17da8"
              ]
            },
            "xValue": 100,
            "xUnit": "%",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-5-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-button.absolute",
              "selectorGuids": [
                "ed87698d-9eab-0d06-028d-1fb68df17da8",
                "3fc42311-7cbf-78ef-1e12-c67aab068732"
              ]
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782291408033,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-14` — "Hover Button Out"
```json
{
  "id": "a-14",
  "title": "Hover Button Out",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-14-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".layer-default",
              "selectorGuids": [
                "91f0c3a2-2a6a-5d5f-7639-26a5a7afd9ef"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-14-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".layer-hover",
              "selectorGuids": [
                "6b6a4995-e7d3-cd8a-3d4b-9a0accde65f0"
              ]
            },
            "value": 0,
            "unit": ""
          }
        },
        {
          "id": "a-14-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-14-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button.absolute",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953",
                "0e1d9086-17a6-edb7-f9be-56f5db067a85"
              ]
            },
            "yValue": 100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-14-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-button",
              "selectorGuids": [
                "ed87698d-9eab-0d06-028d-1fb68df17da8"
              ]
            },
            "xValue": 0,
            "xUnit": "%",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-14-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-button.absolute",
              "selectorGuids": [
                "ed87698d-9eab-0d06-028d-1fb68df17da8",
                "3fc42311-7cbf-78ef-1e12-c67aab068732"
              ]
            },
            "xValue": 100,
            "xUnit": "%",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782291408033,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-7` — "Hover Parent Menu"
```json
{
  "id": "a-7",
  "title": "Hover Parent Menu",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-7-n-3",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".heading",
              "selectorGuids": [
                "0f27c179-0409-310a-cb9b-b62d7d5ad5f6"
              ]
            },
            "globalSwatchId": "--neutral-color--neutral-500",
            "rValue": 160,
            "bValue": 160,
            "gValue": 160,
            "aValue": 1
          }
        },
        {
          "id": "a-7-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-link-nav",
              "selectorGuids": [
                "3f3cb2ee-7ca0-dda8-ee91-1b011af7da8b"
              ]
            },
            "widthValue": 0,
            "heightValue": 0,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-7-n-4",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".heading",
              "selectorGuids": [
                "0f27c179-0409-310a-cb9b-b62d7d5ad5f6"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-7-n-6",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-link-nav",
              "selectorGuids": [
                "3f3cb2ee-7ca0-dda8-ee91-1b011af7da8b"
              ]
            },
            "widthValue": 24,
            "heightValue": 24,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782356037084,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-8` — "Open Nav Menu Black"
```json
{
  "id": "a-8",
  "title": "Open Nav Menu Black",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-8-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "heightValue": 1,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-8-n-3",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "heightValue": 1,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-8-n-5",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-9",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-10",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 0,
            "xUnit": "deg",
            "yUnit": "DEG",
            "zUnit": "DEG"
          }
        },
        {
          "id": "a-8-n-11",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "xUnit": "deg",
            "yUnit": "DEG",
            "zUnit": "DEG"
          }
        },
        {
          "id": "a-8-n-19",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".logo-image",
              "selectorGuids": [
                "de4abd84-f76f-11fe-96d0-47e39c38fbcd"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-20",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".split-content",
              "selectorGuids": [
                "f00417d3-ac73-78f3-27cf-74cdc718fe04"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-21",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".text-link-nav",
              "selectorGuids": [
                "37efdb17-c97e-88ec-a63e-558f678e917c"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-22",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".icon-link",
              "selectorGuids": [
                "95e62421-c2b9-65b0-ce6b-7085f2a09ae6"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-50",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".navbar-bg",
              "selectorGuids": [
                "18d5d8f2-f797-7087-90c6-c65774431907"
              ]
            },
            "value": 0,
            "unit": ""
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-8-n-38",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 7,
            "yValue": 2,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-39",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "yValue": 8,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-40",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": null,
            "yValue": null,
            "zValue": 45,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-8-n-41",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": null,
            "zValue": -45,
            "xUnit": "deg",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-8-n-42",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "widthValue": 20,
            "heightValue": 2,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-8-n-43",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "widthValue": 20,
            "heightValue": 2,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-8-n-44",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".logo-image",
              "selectorGuids": [
                "de4abd84-f76f-11fe-96d0-47e39c38fbcd"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-45",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".split-content",
              "selectorGuids": [
                "f00417d3-ac73-78f3-27cf-74cdc718fe04"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-46",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".text-link-nav",
              "selectorGuids": [
                "37efdb17-c97e-88ec-a63e-558f678e917c"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-47",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".icon-link",
              "selectorGuids": [
                "95e62421-c2b9-65b0-ce6b-7085f2a09ae6"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-8-n-48",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-49",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-8-n-51",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".navbar-bg",
              "selectorGuids": [
                "18d5d8f2-f797-7087-90c6-c65774431907"
              ]
            },
            "value": 1,
            "unit": ""
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782186216328,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-9` — "Close Nav Menu Black"
```json
{
  "id": "a-9",
  "title": "Close Nav Menu Black",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-9-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "widthValue": 21,
            "heightValue": 1,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-9-n-2",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-9-n-3",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "widthValue": 14,
            "heightValue": 1,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-9-n-4",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-9-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-9-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-9-n-7",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": null,
            "yValue": null,
            "zValue": 0,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-9-n-8",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": null,
            "yValue": null,
            "zValue": 0,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-9-n-15",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".logo-image",
              "selectorGuids": [
                "de4abd84-f76f-11fe-96d0-47e39c38fbcd"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-9-n-16",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".split-content",
              "selectorGuids": [
                "f00417d3-ac73-78f3-27cf-74cdc718fe04"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-9-n-17",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".icon-link",
              "selectorGuids": [
                "95e62421-c2b9-65b0-ce6b-7085f2a09ae6"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-9-n-18",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".text-link-nav",
              "selectorGuids": [
                "37efdb17-c97e-88ec-a63e-558f678e917c"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-9-n-19",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".navbar-bg",
              "selectorGuids": [
                "18d5d8f2-f797-7087-90c6-c65774431907"
              ]
            },
            "value": 0,
            "unit": ""
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782186216328,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-6` — "Hover Button In White"
```json
{
  "id": "a-6",
  "title": "Hover Button In White",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-6-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button.absolute",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953",
                "0e1d9086-17a6-edb7-f9be-56f5db067a85"
              ]
            },
            "yValue": 100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-6-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".layer-default.white",
              "selectorGuids": [
                "91f0c3a2-2a6a-5d5f-7639-26a5a7afd9ef",
                "59c4fe54-34cd-ae69-1deb-8d9e59050371"
              ]
            },
            "value": 0,
            "unit": ""
          }
        },
        {
          "id": "a-6-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".layer-hover.white",
              "selectorGuids": [
                "6b6a4995-e7d3-cd8a-3d4b-9a0accde65f0",
                "41011bc7-e243-2fb0-3856-d4690c052cdf"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-6-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-6-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-button.absolute",
              "selectorGuids": [
                "a302e374-2937-feb3-95f7-5bf87d7f9953",
                "0e1d9086-17a6-edb7-f9be-56f5db067a85"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782291408033,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-23` — "Close Nav Menu White"
```json
{
  "id": "a-23",
  "title": "Close Nav Menu White",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-23-n-3",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "widthValue": 21,
            "heightValue": 1,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-23-n-4",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-23-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "widthValue": 14,
            "heightValue": 1,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-23-n-6",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-23-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-23-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-23-n-9",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": null,
            "yValue": null,
            "zValue": 0,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-23-n-10",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": null,
            "yValue": null,
            "zValue": 0,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-23-n-11",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".logo-image",
              "selectorGuids": [
                "de4abd84-f76f-11fe-96d0-47e39c38fbcd"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-23-n-12",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".icon-link",
              "selectorGuids": [
                "95e62421-c2b9-65b0-ce6b-7085f2a09ae6"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-23-n-14",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".split-content.white",
              "selectorGuids": [
                "f00417d3-ac73-78f3-27cf-74cdc718fe04",
                "de64bf65-3e87-8d7b-dd1f-b2114a250a97"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-23-n-15",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "selector": ".text-link-nav.white",
              "selectorGuids": [
                "37efdb17-c97e-88ec-a63e-558f678e917c",
                "8796228d-54bd-0e7a-5ecc-99d2e657faca"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-23-n-16",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".navbar-bg",
              "selectorGuids": [
                "18d5d8f2-f797-7087-90c6-c65774431907"
              ]
            },
            "value": 0,
            "unit": ""
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782186216328,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-30` — "Show Line Overlay"
```json
{
  "id": "a-30",
  "title": "Show Line Overlay",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-30-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".line-overlay._01",
              "selectorGuids": [
                "84759dd5-c52e-4000-b959-7e6667995b67",
                "00d911f7-005d-2a8a-9a55-a66a7072d778"
              ]
            },
            "widthValue": 100,
            "heightValue": 0,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-30-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".line-overlay._02",
              "selectorGuids": [
                "84759dd5-c52e-4000-b959-7e6667995b67",
                "f637c306-81a6-5853-25f2-72392852d0d5"
              ]
            },
            "widthValue": 100,
            "heightValue": 0,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-30-n-3",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".line-overlay._03",
              "selectorGuids": [
                "84759dd5-c52e-4000-b959-7e6667995b67",
                "df3c1672-b474-0dd7-c63d-92c52f66f963"
              ]
            },
            "widthValue": 100,
            "heightValue": 0,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-30-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 600,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".line-overlay._01",
              "selectorGuids": [
                "84759dd5-c52e-4000-b959-7e6667995b67",
                "00d911f7-005d-2a8a-9a55-a66a7072d778"
              ]
            },
            "widthValue": 100,
            "heightValue": 100,
            "widthUnit": "%",
            "heightUnit": "%",
            "locked": false
          }
        },
        {
          "id": "a-30-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 600,
            "easing": "ease",
            "duration": 600,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".line-overlay._02",
              "selectorGuids": [
                "84759dd5-c52e-4000-b959-7e6667995b67",
                "f637c306-81a6-5853-25f2-72392852d0d5"
              ]
            },
            "widthValue": 100,
            "heightValue": 100,
            "widthUnit": "%",
            "heightUnit": "%",
            "locked": false
          }
        },
        {
          "id": "a-30-n-6",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 1200,
            "easing": "ease",
            "duration": 600,
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".line-overlay._03",
              "selectorGuids": [
                "84759dd5-c52e-4000-b959-7e6667995b67",
                "df3c1672-b474-0dd7-c63d-92c52f66f963"
              ]
            },
            "widthValue": 100,
            "heightValue": 100,
            "widthUnit": "%",
            "heightUnit": "%",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782787221107,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-16` — "Hover Link Line Under"
```json
{
  "id": "a-16",
  "title": "Hover Link Line Under",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-16-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 10,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".line-under-text",
              "selectorGuids": [
                "6da4ba67-ca94-47aa-f92b-f80ef5722719"
              ]
            },
            "widthValue": 0,
            "widthUnit": "px",
            "heightUnit": "PX",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-16-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-link-underline",
              "selectorGuids": [
                "e25a954c-65b8-503a-6093-e02e016ebc98"
              ]
            },
            "value": 0.7,
            "unit": ""
          }
        },
        {
          "id": "a-16-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".line-under-text",
              "selectorGuids": [
                "6da4ba67-ca94-47aa-f92b-f80ef5722719"
              ]
            },
            "value": 0.7,
            "unit": ""
          }
        },
        {
          "id": "a-16-n-6",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".line-under-text",
              "selectorGuids": [
                "6da4ba67-ca94-47aa-f92b-f80ef5722719"
              ]
            },
            "widthValue": 100,
            "widthUnit": "%",
            "heightUnit": "PX",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782494276272,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-31` — "Hover Link Line Under Out"
```json
{
  "id": "a-31",
  "title": "Hover Link Line Under Out",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-31-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-link-underline",
              "selectorGuids": [
                "e25a954c-65b8-503a-6093-e02e016ebc98"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-31-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".line-under-text",
              "selectorGuids": [
                "6da4ba67-ca94-47aa-f92b-f80ef5722719"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-31-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".line-under-text",
              "selectorGuids": [
                "6da4ba67-ca94-47aa-f92b-f80ef5722719"
              ]
            },
            "widthValue": 100,
            "widthUnit": "%",
            "heightUnit": "PX",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782494276272,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-61` — "Scroll Trans Nav Color Black"
```json
{
  "id": "a-61",
  "title": "Scroll Trans Nav Color Black",
  "continuousParameterGroups": [
    {
      "id": "a-61-p",
      "type": "SCROLL_PROGRESS",
      "parameterLabel": "Scroll",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-61-n",
              "actionTypeId": "STYLE_BACKGROUND_COLOR",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".navbar-scroll-bg.black",
                  "selectorGuids": [
                    "5c875c05-fba0-f237-fa76-2d277a5ff913",
                    "1db6039f-e937-b634-cdb7-930334f2d4ea"
                  ]
                },
                "globalSwatchId": "",
                "rValue": 0,
                "bValue": 0,
                "gValue": 0,
                "aValue": 0
              }
            }
          ]
        },
        {
          "keyframe": 1,
          "actionItems": [
            {
              "id": "a-61-n-2",
              "actionTypeId": "STYLE_BACKGROUND_COLOR",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".navbar-scroll-bg.black",
                  "selectorGuids": [
                    "5c875c05-fba0-f237-fa76-2d277a5ff913",
                    "1db6039f-e937-b634-cdb7-930334f2d4ea"
                  ]
                },
                "globalSwatchId": "--neutral-color--white",
                "rValue": 255,
                "bValue": 255,
                "gValue": 255,
                "aValue": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1787076381493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-60` — "Scroll Trans Nav Color"
```json
{
  "id": "a-60",
  "title": "Scroll Trans Nav Color",
  "continuousParameterGroups": [
    {
      "id": "a-60-p",
      "type": "SCROLL_PROGRESS",
      "parameterLabel": "Scroll",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-60-n",
              "actionTypeId": "STYLE_BACKGROUND_COLOR",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".navbar-scroll-bg",
                  "selectorGuids": [
                    "5c875c05-fba0-f237-fa76-2d277a5ff913"
                  ]
                },
                "globalSwatchId": "",
                "rValue": 0,
                "bValue": 0,
                "gValue": 0,
                "aValue": 0
              }
            }
          ]
        },
        {
          "keyframe": 1,
          "actionItems": [
            {
              "id": "a-60-n-2",
              "actionTypeId": "STYLE_BACKGROUND_COLOR",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".navbar-scroll-bg",
                  "selectorGuids": [
                    "5c875c05-fba0-f237-fa76-2d277a5ff913"
                  ]
                },
                "globalSwatchId": "--neutral-color--black",
                "rValue": 0,
                "bValue": 0,
                "gValue": 0,
                "aValue": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1787076381493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-32` — "Scroll Up Visiable Nav"
```json
{
  "id": "a-32",
  "title": "Scroll Up Visiable Nav",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-32-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 200,
            "target": {
              "selector": ".navbar",
              "selectorGuids": [
                "c7217730-78d8-3e82-e6be-a6941d441296"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782961943152,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-33` — "Scroll Down Hide Nav"
```json
{
  "id": "a-33",
  "title": "Scroll Down Hide Nav",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-33-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".navbar",
              "selectorGuids": [
                "c7217730-78d8-3e82-e6be-a6941d441296"
              ]
            },
            "yValue": -145,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1782961943152,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-34` — "Fade Card"
```json
{
  "id": "a-34",
  "title": "Fade Card",
  "continuousParameterGroups": [
    {
      "id": "a-34-p",
      "type": "SCROLL_PROGRESS",
      "parameterLabel": "Scroll",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-34-n-3",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".card-shadow",
                  "selectorGuids": [
                    "27d7f787-081e-7a01-5c43-00342fc9efc6"
                  ]
                },
                "value": 0,
                "unit": ""
              }
            },
            {
              "id": "a-34-n-6",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".child-plan-box._01",
                  "selectorGuids": [
                    "abd461b3-48a2-117f-ff4d-2b6555c79179",
                    "19f9a8ea-5f4a-af2e-012b-51b2d9674268"
                  ]
                },
                "xValue": 1,
                "yValue": 1,
                "locked": true
              }
            },
            {
              "id": "a-34-n-2",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".child-plan-box._01",
                  "selectorGuids": [
                    "abd461b3-48a2-117f-ff4d-2b6555c79179",
                    "19f9a8ea-5f4a-af2e-012b-51b2d9674268"
                  ]
                },
                "value": 1,
                "unit": ""
              }
            }
          ]
        },
        {
          "keyframe": 1,
          "actionItems": [
            {
              "id": "a-34-n-4",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".card-shadow",
                  "selectorGuids": [
                    "27d7f787-081e-7a01-5c43-00342fc9efc6"
                  ]
                },
                "value": 1,
                "unit": ""
              }
            }
          ]
        },
        {
          "keyframe": 50,
          "actionItems": [
            {
              "id": "a-34-n-5",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".child-plan-box._01",
                  "selectorGuids": [
                    "abd461b3-48a2-117f-ff4d-2b6555c79179",
                    "19f9a8ea-5f4a-af2e-012b-51b2d9674268"
                  ]
                },
                "xValue": 0.95,
                "yValue": 0.95,
                "locked": true
              }
            }
          ]
        },
        {
          "keyframe": 100,
          "actionItems": [
            {
              "id": "a-34-n-7",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".child-plan-box._01",
                  "selectorGuids": [
                    "abd461b3-48a2-117f-ff4d-2b6555c79179",
                    "19f9a8ea-5f4a-af2e-012b-51b2d9674268"
                  ]
                },
                "value": 0.35,
                "unit": ""
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1783477447074,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-36` — "FAQ Tab Open"
```json
{
  "id": "a-36",
  "title": "FAQ Tab Open",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-36-n",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".plus-icon._02",
              "selectorGuids": [
                "28ca7ae2-23be-fd94-9343-a89b0bcc96f8",
                "e419fa72-3aa0-882d-7380-a5c4346318fe"
              ]
            },
            "zValue": 90,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-36-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".desc-faq-tab-wrap",
              "selectorGuids": [
                "2d45556b-8a38-5cbb-e43b-d650ff6190b1"
              ]
            },
            "heightValue": 0,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-36-n-3",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".plus-icon._02",
              "selectorGuids": [
                "28ca7ae2-23be-fd94-9343-a89b0bcc96f8",
                "e419fa72-3aa0-882d-7380-a5c4346318fe"
              ]
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-36-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".desc-faq-tab-wrap",
              "selectorGuids": [
                "2d45556b-8a38-5cbb-e43b-d650ff6190b1"
              ]
            },
            "widthUnit": "px",
            "heightUnit": "AUTO",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1783654554680,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-37` — "FAQ Tab Close"
```json
{
  "id": "a-37",
  "title": "FAQ Tab Close",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-37-n",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".plus-icon._02",
              "selectorGuids": [
                "28ca7ae2-23be-fd94-9343-a89b0bcc96f8",
                "e419fa72-3aa0-882d-7380-a5c4346318fe"
              ]
            },
            "zValue": 90,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-37-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".desc-faq-tab-wrap",
              "selectorGuids": [
                "2d45556b-8a38-5cbb-e43b-d650ff6190b1"
              ]
            },
            "heightValue": 0,
            "widthUnit": "AUTO",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1783654728774,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-39` — "WCU Column"
```json
{
  "id": "a-39",
  "title": "WCU Column",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-39-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._01",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "3a57ab6d-ab6e-93b1-4b4b-b53efa3fa514"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-3",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._02",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "4bff192d-8ca6-b2f5-5806-42f9961ac5a4"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._03",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "0abef7a5-0bd9-f1f6-9495-8af1241ab5a3"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._04",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "694561ff-6e18-4672-1174-b33b0377a750"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-6",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._05",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "9afe5830-5c23-66dc-4939-b5e52bacc786"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-7",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._06",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "dae4f990-3572-3ff8-ca2b-09ca05a71db0"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-8",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._07",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "47121ce5-1fa0-245e-8973-60a8afedc6e3"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-39-n-9",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._01",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "3a57ab6d-ab6e-93b1-4b4b-b53efa3fa514"
              ]
            },
            "heightValue": 69,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-10",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 100,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._02",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "4bff192d-8ca6-b2f5-5806-42f9961ac5a4"
              ]
            },
            "heightValue": 50,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-11",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 200,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._03",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "0abef7a5-0bd9-f1f6-9495-8af1241ab5a3"
              ]
            },
            "heightValue": 75,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-12",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 300,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._04",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "694561ff-6e18-4672-1174-b33b0377a750"
              ]
            },
            "heightValue": 35,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-13",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 400,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._05",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "9afe5830-5c23-66dc-4939-b5e52bacc786"
              ]
            },
            "heightValue": 69,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-14",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 500,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._06",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "dae4f990-3572-3ff8-ca2b-09ca05a71db0"
              ]
            },
            "heightValue": 80,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-39-n-15",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 600,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column.absolute._07",
              "selectorGuids": [
                "cef891ad-b8ac-8873-7593-a8d204f64f35",
                "7bbf95d1-d698-9d22-1736-a7b09bbe7bf6",
                "47121ce5-1fa0-245e-8973-60a8afedc6e3"
              ]
            },
            "heightValue": 50,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1784260901583,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-40` — "WCU Text Chat"
```json
{
  "id": "a-40",
  "title": "WCU Text Chat",
  "continuousParameterGroups": [
    {
      "id": "a-40-p",
      "type": "SCROLL_PROGRESS",
      "parameterLabel": "Scroll",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-40-n",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block._01",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "839f97c5-a42b-95f1-9c9f-18fdc3d017c9"
                  ]
                },
                "widthValue": 0,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            },
            {
              "id": "a-40-n-3",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block.absolute",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "39426293-a345-2ce0-b837-ba1437ef87ba"
                  ]
                },
                "widthValue": 0,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            }
          ]
        },
        {
          "keyframe": 20,
          "actionItems": [
            {
              "id": "a-40-n-2",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block._01",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "839f97c5-a42b-95f1-9c9f-18fdc3d017c9"
                  ]
                },
                "widthValue": 100,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            }
          ]
        },
        {
          "keyframe": 50,
          "actionItems": [
            {
              "id": "a-40-n-7",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block._01",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "839f97c5-a42b-95f1-9c9f-18fdc3d017c9"
                  ]
                },
                "widthValue": 100,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            }
          ]
        },
        {
          "keyframe": 55,
          "actionItems": [
            {
              "id": "a-40-n-5",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block._01",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "839f97c5-a42b-95f1-9c9f-18fdc3d017c9"
                  ]
                },
                "widthValue": 0,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            },
            {
              "id": "a-40-n-6",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block.absolute",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "39426293-a345-2ce0-b837-ba1437ef87ba"
                  ]
                },
                "widthValue": 0,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            }
          ]
        },
        {
          "keyframe": 60,
          "actionItems": [
            {
              "id": "a-40-n-4",
              "actionTypeId": "STYLE_SIZE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".text-child-item-block.absolute",
                  "selectorGuids": [
                    "f9433fb6-8f95-42f1-65a7-bd4f44b278f1",
                    "39426293-a345-2ce0-b837-ba1437ef87ba"
                  ]
                },
                "widthValue": 100,
                "widthUnit": "%",
                "heightUnit": "PX",
                "locked": false
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1784261890255,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-41` — "Process Tab Open"
```json
{
  "id": "a-41",
  "title": "Process Tab Open",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-41-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".process-desc-wrap",
              "selectorGuids": [
                "cbd82f95-fc47-398a-1be4-48990a5c5668"
              ]
            },
            "heightValue": 0,
            "widthUnit": "AUTO",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-41-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".process-desc-wrap",
              "selectorGuids": [
                "cbd82f95-fc47-398a-1be4-48990a5c5668"
              ]
            },
            "widthUnit": "AUTO",
            "heightUnit": "AUTO",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1784570602400,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-42` — "Process Tab Close"
```json
{
  "id": "a-42",
  "title": "Process Tab Close",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-42-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".process-desc-wrap",
              "selectorGuids": [
                "cbd82f95-fc47-398a-1be4-48990a5c5668"
              ]
            },
            "heightValue": 0,
            "widthUnit": "AUTO",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1784571703270,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-43` — "Count Animation"
```json
{
  "id": "a-43",
  "title": "Count Animation",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-43-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".count-down-item._1",
              "selectorGuids": [
                "d60934c3-309c-017f-4609-31c66cfd0a70",
                "fb2cfa47-a74e-ae6a-a198-32d1a1078ab5"
              ]
            },
            "yValue": -90,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-43-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 3000,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".count-down-item._1",
              "selectorGuids": [
                "d60934c3-309c-017f-4609-31c66cfd0a70",
                "fb2cfa47-a74e-ae6a-a198-32d1a1078ab5"
              ]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-43-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 3000,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".count-down-item._2",
              "selectorGuids": [
                "d60934c3-309c-017f-4609-31c66cfd0a70",
                "62f5db44-ffaa-01f2-a7c1-529a4318acc9"
              ]
            },
            "yValue": -88.9,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1784689625386,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-46` — "Open Services Tabs"
```json
{
  "id": "a-46",
  "title": "Open Services Tabs",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-46-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".services-tabs-collection",
              "selectorGuids": [
                "7e5dd0d1-67b9-2877-0d4f-2017c2eb8e7e"
              ]
            },
            "widthValue": 100,
            "heightValue": 145,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-46-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".content-services-tabs",
              "selectorGuids": [
                "f5567d46-282c-12ba-9d29-77e7cd92fb8e"
              ]
            },
            "widthValue": 100,
            "heightValue": 0,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-46-n-3",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".content-services-tabs._1",
              "selectorGuids": [
                "f5567d46-282c-12ba-9d29-77e7cd92fb8e",
                "6fed4cd0-6eca-26d6-a166-326e34c813b0"
              ]
            },
            "widthValue": 100,
            "widthUnit": "%",
            "heightUnit": "AUTO",
            "locked": false
          }
        },
        {
          "id": "a-46-n-4",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".services-tabs-collection._01",
              "selectorGuids": [
                "7e5dd0d1-67b9-2877-0d4f-2017c2eb8e7e",
                "e174c9dc-3637-0885-65a0-300b8961cabf"
              ]
            },
            "widthValue": 100,
            "heightValue": 522,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-46-n-10",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".plus-icon-large.vertical._01",
              "selectorGuids": [
                "dfbd3cee-0653-cb93-4a20-c0efc6759053",
                "24b8f043-d00e-6051-4ac1-d5a70b84a776",
                "16e3697b-73d1-b37b-35c2-e4d3e937feca"
              ]
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-46-n-13",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".sequence-number-services-tabs._01",
              "selectorGuids": [
                "f9eef211-18ee-88ad-7080-c93287cc4dd1",
                "242c9e22-98d2-3c7b-4f34-83c73374a2d6"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-46-n-16",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".sequence-number-services-tabs._01.white",
              "selectorGuids": [
                "f9eef211-18ee-88ad-7080-c93287cc4dd1",
                "242c9e22-98d2-3c7b-4f34-83c73374a2d6",
                "cfcc42f8-ba0a-78c6-8fb6-6295ae1d93cd"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-46-n-19",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".image-tabs-services",
              "selectorGuids": [
                "0bcfdde5-d11b-2055-32ad-31a08c15f0f7"
              ]
            },
            "value": 0,
            "unit": ""
          }
        },
        {
          "id": "a-46-n-20",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-tabs-services._01",
              "selectorGuids": [
                "0bcfdde5-d11b-2055-32ad-31a08c15f0f7",
                "b151bee8-c645-69f8-2750-644edbce0b76"
              ]
            },
            "value": 1,
            "unit": ""
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-46-n-6",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "selector": ".content-services-tabs",
              "selectorGuids": [
                "f5567d46-282c-12ba-9d29-77e7cd92fb8e"
              ]
            },
            "widthValue": 100,
            "heightValue": 0,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-46-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "selector": ".services-tabs-collection",
              "selectorGuids": [
                "7e5dd0d1-67b9-2877-0d4f-2017c2eb8e7e"
              ]
            },
            "widthValue": 100,
            "heightValue": 145,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-46-n-7",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".services-tabs-collection",
              "selectorGuids": [
                "7e5dd0d1-67b9-2877-0d4f-2017c2eb8e7e"
              ]
            },
            "widthValue": 100,
            "heightValue": 522,
            "widthUnit": "%",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-46-n-9",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".content-services-tabs",
              "selectorGuids": [
                "f5567d46-282c-12ba-9d29-77e7cd92fb8e"
              ]
            },
            "widthValue": 100,
            "widthUnit": "%",
            "heightUnit": "AUTO",
            "locked": false
          }
        },
        {
          "id": "a-46-n-11",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "selector": ".plus-icon-large.vertical",
              "selectorGuids": [
                "dfbd3cee-0653-cb93-4a20-c0efc6759053",
                "24b8f043-d00e-6051-4ac1-d5a70b84a776"
              ]
            },
            "zValue": 90,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-46-n-12",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".plus-icon-large.vertical",
              "selectorGuids": [
                "dfbd3cee-0653-cb93-4a20-c0efc6759053",
                "24b8f043-d00e-6051-4ac1-d5a70b84a776"
              ]
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-46-n-14",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "selector": ".sequence-number-services-tabs",
              "selectorGuids": [
                "f9eef211-18ee-88ad-7080-c93287cc4dd1"
              ]
            },
            "globalSwatchId": "--black-opacity-10",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 0.1
          }
        },
        {
          "id": "a-46-n-15",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 400,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".sequence-number-services-tabs",
              "selectorGuids": [
                "f9eef211-18ee-88ad-7080-c93287cc4dd1"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-46-n-17",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "selector": ".sequence-number-services-tabs.white",
              "selectorGuids": [
                "f9eef211-18ee-88ad-7080-c93287cc4dd1",
                "39922d66-afe9-8def-780c-5af03e567e68"
              ]
            },
            "globalSwatchId": "--white-opacity-10",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 0.1
          }
        },
        {
          "id": "a-46-n-18",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".sequence-number-services-tabs.white",
              "selectorGuids": [
                "f9eef211-18ee-88ad-7080-c93287cc4dd1",
                "39922d66-afe9-8def-780c-5af03e567e68"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-46-n-23",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 300,
            "target": {
              "selector": ".image-tabs-services",
              "selectorGuids": [
                "0bcfdde5-d11b-2055-32ad-31a08c15f0f7"
              ]
            },
            "value": 0,
            "unit": ""
          }
        },
        {
          "id": "a-46-n-21",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "inCubic",
            "duration": 700,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-tabs-services.first",
              "selectorGuids": [
                "0bcfdde5-d11b-2055-32ad-31a08c15f0f7",
                "279000e4-4f31-5835-c3f0-af3e8615da5e"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-46-n-22",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "inCubic",
            "duration": 900,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-tabs-services.second",
              "selectorGuids": [
                "0bcfdde5-d11b-2055-32ad-31a08c15f0f7",
                "cbce0ec4-b78b-9a2d-c4b2-bb244960ae71"
              ]
            },
            "value": 1,
            "unit": ""
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1784947099413,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-47` — "Image Scroll Track"
```json
{
  "id": "a-47",
  "title": "Image Scroll Track",
  "continuousParameterGroups": [
    {
      "id": "a-47-p",
      "type": "SCROLL_PROGRESS",
      "parameterLabel": "Scroll",
      "continuousActionGroups": [
        {
          "keyframe": 25,
          "actionItems": [
            {
              "id": "a-47-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".image-track-scroll",
                  "selectorGuids": [
                    "94e4aa93-d02b-e81f-6ee0-52b454b9181a"
                  ]
                },
                "xValue": 0,
                "xUnit": "%",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }
          ]
        },
        {
          "keyframe": 80,
          "actionItems": [
            {
              "id": "a-47-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".image-track-scroll",
                  "selectorGuids": [
                    "94e4aa93-d02b-e81f-6ee0-52b454b9181a"
                  ]
                },
                "xValue": -70,
                "xUnit": "%",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1785383330697,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-48` — "Spin Wheel"
```json
{
  "id": "a-48",
  "title": "Spin Wheel",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-48-n-5",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -16.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-48-n-11",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 7000,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -106.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-48-n-6",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "inOutQuad",
            "duration": 500,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -136.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-48-n-7",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 7000,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -226.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-48-n-8",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "inOutQuad",
            "duration": 500,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -256.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-48-n-9",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 7000,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -346.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-48-n-10",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "inOutQuad",
            "duration": 500,
            "target": {
              "selector": ".wheel",
              "selectorGuids": [
                "07afa6a3-207b-bbc1-eda3-2f3f3fbd1068"
              ]
            },
            "zValue": -376.36,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1785985590346,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-51` — "Section Push"
```json
{
  "id": "a-51",
  "title": "Section Push",
  "continuousParameterGroups": [
    {
      "id": "a-51-p",
      "type": "SCROLL_PROGRESS",
      "parameterLabel": "Scroll",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-51-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".section.hero-home",
                  "selectorGuids": [
                    "20ed3b14-8bf9-2e7a-985b-60b7d09d2403",
                    "8bbadd1c-e998-f9f8-83bf-202b9fbdda43"
                  ]
                },
                "yValue": 0,
                "xUnit": "PX",
                "yUnit": "%",
                "zUnit": "PX"
              }
            }
          ]
        },
        {
          "keyframe": 40,
          "actionItems": [
            {
              "id": "a-51-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "selector": ".section.hero-home",
                  "selectorGuids": [
                    "20ed3b14-8bf9-2e7a-985b-60b7d09d2403",
                    "8bbadd1c-e998-f9f8-83bf-202b9fbdda43"
                  ]
                },
                "yValue": -100,
                "xUnit": "PX",
                "yUnit": "%",
                "zUnit": "PX"
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1786162500487,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-52` — "Hover Item Member"
```json
{
  "id": "a-52",
  "title": "Hover Item Member",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-52-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".profile-hide-info-wrapper",
              "selectorGuids": [
                "ffce2bc4-d3a2-9d90-c33f-93ac7f1a4a2c"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-52-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".profile-hide-info-wrapper",
              "selectorGuids": [
                "ffce2bc4-d3a2-9d90-c33f-93ac7f1a4a2c"
              ]
            },
            "widthUnit": "PX",
            "heightUnit": "AUTO",
            "locked": false
          }
        },
        {
          "id": "a-52-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".avatar-member-collection",
              "selectorGuids": [
                "30869204-3160-3749-e8a7-f592811c80ee"
              ]
            },
            "xValue": 1.1,
            "yValue": 1.1,
            "locked": true
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1786591075313,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-53` — "Hover Item Member Out"
```json
{
  "id": "a-53",
  "title": "Hover Item Member Out",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-53-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".profile-hide-info-wrapper",
              "selectorGuids": [
                "ffce2bc4-d3a2-9d90-c33f-93ac7f1a4a2c"
              ]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-53-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".avatar-member-collection",
              "selectorGuids": [
                "30869204-3160-3749-e8a7-f592811c80ee"
              ]
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1786591255802,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-54` — "Mouse Circle Show"
```json
{
  "id": "a-54",
  "title": "Mouse Circle Show",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-54-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".circle-mouse-cursor",
              "selectorGuids": [
                "019ce6a2-4ff0-6b20-a2d8-8eb2e5e4515a"
              ]
            },
            "value": "none"
          }
        },
        {
          "id": "a-54-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".circle-mouse-cursor",
              "selectorGuids": [
                "019ce6a2-4ff0-6b20-a2d8-8eb2e5e4515a"
              ]
            },
            "value": 0,
            "unit": ""
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-54-n-3",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".circle-mouse-cursor",
              "selectorGuids": [
                "019ce6a2-4ff0-6b20-a2d8-8eb2e5e4515a"
              ]
            },
            "value": "flex"
          }
        },
        {
          "id": "a-54-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".circle-mouse-cursor",
              "selectorGuids": [
                "019ce6a2-4ff0-6b20-a2d8-8eb2e5e4515a"
              ]
            },
            "value": 1,
            "unit": ""
          }
        },
        {
          "id": "a-54-n-6",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-work-collection-item.absolute",
              "selectorGuids": [
                "b1b3a558-8fc4-be03-e827-04a042c5c782",
                "0a33e37c-0a9e-c6cd-e847-1b64c7ced409"
              ]
            },
            "xValue": 1.05,
            "yValue": 1.05,
            "locked": true
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1786670755313,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-55` — "Mouse Circle Hide"
```json
{
  "id": "a-55",
  "title": "Mouse Circle Hide",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-55-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 0,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".circle-mouse-cursor",
              "selectorGuids": [
                "019ce6a2-4ff0-6b20-a2d8-8eb2e5e4515a"
              ]
            },
            "value": 0,
            "unit": ""
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-55-n-2",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".circle-mouse-cursor",
              "selectorGuids": [
                "019ce6a2-4ff0-6b20-a2d8-8eb2e5e4515a"
              ]
            },
            "value": "none"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-55-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-work-collection-item.absolute",
              "selectorGuids": [
                "b1b3a558-8fc4-be03-e827-04a042c5c782",
                "0a33e37c-0a9e-c6cd-e847-1b64c7ced409"
              ]
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1786670854003,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-56` — "Mouse Animation"
```json
{
  "id": "a-56",
  "title": "Mouse Animation",
  "continuousParameterGroups": [
    {
      "id": "a-56-p",
      "type": "MOUSE_X",
      "parameterLabel": "Mouse X",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-56-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".circle-mouse-wrap",
                  "selectorGuids": [
                    "a9555b04-573f-0cfc-fa23-dcf4cc0edd33"
                  ]
                },
                "xValue": -50,
                "xUnit": "%",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }
          ]
        },
        {
          "keyframe": 100,
          "actionItems": [
            {
              "id": "a-56-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".circle-mouse-wrap",
                  "selectorGuids": [
                    "a9555b04-573f-0cfc-fa23-dcf4cc0edd33"
                  ]
                },
                "xValue": 50,
                "xUnit": "%",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "a-56-p-2",
      "type": "MOUSE_Y",
      "parameterLabel": "Mouse Y",
      "continuousActionGroups": [
        {
          "keyframe": 0,
          "actionItems": [
            {
              "id": "a-56-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".circle-mouse-wrap",
                  "selectorGuids": [
                    "a9555b04-573f-0cfc-fa23-dcf4cc0edd33"
                  ]
                },
                "yValue": -50,
                "xUnit": "PX",
                "yUnit": "%",
                "zUnit": "PX"
              }
            }
          ]
        },
        {
          "keyframe": 100,
          "actionItems": [
            {
              "id": "a-56-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".circle-mouse-wrap",
                  "selectorGuids": [
                    "a9555b04-573f-0cfc-fa23-dcf4cc0edd33"
                  ]
                },
                "yValue": 50,
                "xUnit": "PX",
                "yUnit": "%",
                "zUnit": "PX"
              }
            }
          ]
        }
      ]
    }
  ],
  "createdOn": 1786670908652,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-59` — "Open Nav Menu White"
```json
{
  "id": "a-59",
  "title": "Open Nav Menu White",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-59-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "heightValue": 1,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-59-n-2",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-3",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "heightValue": 1,
            "widthUnit": "PX",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-59-n-4",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "globalSwatchId": "--neutral-color--white",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-59-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-59-n-7",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 0,
            "xUnit": "deg",
            "yUnit": "DEG",
            "zUnit": "DEG"
          }
        },
        {
          "id": "a-59-n-8",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "xUnit": "deg",
            "yUnit": "DEG",
            "zUnit": "DEG"
          }
        },
        {
          "id": "a-59-n-48",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".split-content.white",
              "selectorGuids": [
                "f00417d3-ac73-78f3-27cf-74cdc718fe04",
                "de64bf65-3e87-8d7b-dd1f-b2114a250a97"
              ]
            },
            "globalSwatchId": "",
            "rValue": 255,
            "bValue": 255,
            "gValue": 255,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-55",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".navbar-bg",
              "selectorGuids": [
                "18d5d8f2-f797-7087-90c6-c65774431907"
              ]
            },
            "value": 0,
            "unit": ""
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-59-n-36",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": 7,
            "yValue": 2,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-59-n-37",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": 0,
            "yValue": 8,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-59-n-38",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "xValue": null,
            "yValue": null,
            "zValue": 45,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-59-n-39",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "xValue": null,
            "zValue": -45,
            "xUnit": "deg",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        },
        {
          "id": "a-59-n-40",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "widthValue": 20,
            "heightValue": 2,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-59-n-41",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "widthValue": 20,
            "heightValue": 2,
            "widthUnit": "px",
            "heightUnit": "px",
            "locked": false
          }
        },
        {
          "id": "a-59-n-46",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-top",
              "selectorGuids": [
                "aaadb7a1-b0ee-441a-0d92-83ad9bf5fb84"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-47",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".hamburger-line-bottm",
              "selectorGuids": [
                "c4be674c-aff5-d3bb-18a5-b41c3ead8ab9"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-49",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".split-content.white",
              "selectorGuids": [
                "f00417d3-ac73-78f3-27cf-74cdc718fe04",
                "de64bf65-3e87-8d7b-dd1f-b2114a250a97"
              ]
            },
            "globalSwatchId": "",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-52",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".logo-image",
              "selectorGuids": [
                "de4abd84-f76f-11fe-96d0-47e39c38fbcd"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-59-n-53",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "selector": ".icon-link.absolute",
              "selectorGuids": [
                "95e62421-c2b9-65b0-ce6b-7085f2a09ae6",
                "a8d8d600-24fb-c218-e944-4c341624cf8f"
              ]
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "%",
            "zUnit": "PX"
          }
        },
        {
          "id": "a-59-n-54",
          "actionTypeId": "STYLE_TEXT_COLOR",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".text-link-nav.white",
              "selectorGuids": [
                "37efdb17-c97e-88ec-a63e-558f678e917c",
                "8796228d-54bd-0e7a-5ecc-99d2e657faca"
              ]
            },
            "globalSwatchId": "",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-59-n-56",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 350,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".navbar-bg",
              "selectorGuids": [
                "18d5d8f2-f797-7087-90c6-c65774431907"
              ]
            },
            "value": 1,
            "unit": ""
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1782186216328,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-62` — "Icon Social Hover In"
```json
{
  "id": "a-62",
  "title": "Icon Social Hover In",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-62-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-20x20.absolute",
              "selectorGuids": [
                "c57d828f-96dc-081f-598f-574c60e707b1",
                "88278b69-60b7-186b-8b85-55b33234cfd1"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "locked": true
          }
        },
        {
          "id": "a-62-n-2",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".item-icon-social",
              "selectorGuids": [
                "b75768dd-80cb-91e1-d883-1840d1bd519e"
              ]
            },
            "globalSwatchId": ""
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "id": "a-62-n-3",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".item-icon-social",
              "selectorGuids": [
                "b75768dd-80cb-91e1-d883-1840d1bd519e"
              ]
            },
            "globalSwatchId": "--neutral-color--black",
            "rValue": 0,
            "bValue": 0,
            "gValue": 0,
            "aValue": 1
          }
        },
        {
          "id": "a-62-n-5",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-20x20",
              "selectorGuids": [
                "c57d828f-96dc-081f-598f-574c60e707b1"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "locked": true
          }
        },
        {
          "id": "a-62-n-4",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-20x20.absolute",
              "selectorGuids": [
                "c57d828f-96dc-081f-598f-574c60e707b1",
                "88278b69-60b7-186b-8b85-55b33234cfd1"
              ]
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": true,
  "createdOn": 1787109920070,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `a-63` — "Icon Social Hover Out"
```json
{
  "id": "a-63",
  "title": "Icon Social Hover Out",
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "id": "a-63-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".item-icon-social",
              "selectorGuids": [
                "b75768dd-80cb-91e1-d883-1840d1bd519e"
              ]
            },
            "globalSwatchId": "--neutral-color--neutral-200",
            "rValue": 242,
            "bValue": 242,
            "gValue": 242,
            "aValue": 1
          }
        },
        {
          "id": "a-63-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-20x20",
              "selectorGuids": [
                "c57d828f-96dc-081f-598f-574c60e707b1"
              ]
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        },
        {
          "id": "a-63-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outCubic",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".icon-20x20.absolute",
              "selectorGuids": [
                "c57d828f-96dc-081f-598f-574c60e707b1",
                "88278b69-60b7-186b-8b85-55b33234cfd1"
              ]
            },
            "xValue": 0,
            "yValue": 0,
            "locked": true
          }
        }
      ]
    }
  ],
  "useFirstGroupAsInitialState": false,
  "createdOn": 1787110242244,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `slideInBottom` — "Untitled"
```json
{
  "id": "slideInBottom",
  "useFirstGroupAsInitialState": true,
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0,
            "yValue": 100,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        },
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }
      ]
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `fadeIn` — "Untitled"
```json
{
  "id": "fadeIn",
  "useFirstGroupAsInitialState": true,
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }
      ]
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `slideInLeft` — "Untitled"
```json
{
  "id": "slideInLeft",
  "useFirstGroupAsInitialState": true,
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": -100,
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        },
        {
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Action List `slideInRight` — "Untitled"
```json
{
  "id": "slideInRight",
  "useFirstGroupAsInitialState": true,
  "actionItemGroups": [
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 100,
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    },
    {
      "actionItems": [
        {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        },
        {
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }
      ]
    }
  ],
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

### IX2 Events (215 total)

#### Event `e-13` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-13",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-2",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-14"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".main-link-wrap",
    "originalId": "6019a5ca-de27-6779-6fb0-86105d3c6e5e",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".main-link-wrap",
      "originalId": "6019a5ca-de27-6779-6fb0-86105d3c6e5e",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782270641163,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-14` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-14",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-3",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-13"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".main-link-wrap",
    "originalId": "6019a5ca-de27-6779-6fb0-86105d3c6e5e",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".main-link-wrap",
      "originalId": "6019a5ca-de27-6779-6fb0-86105d3c6e5e",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782270641163,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-15` (`MOUSE_OVER` -> ActionList `custom`)
- **DOM Element Match:** `<a class="primary-button w-inline-block">` (appears on: `404, about-us, blog-categories__development, blog-categories__support, blog-categories__web-design, blog, blog__how-ai-is-redefining-the-next-generation-of-user-interfaces, blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions, blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention, blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability, blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography, blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech, contact, index, member__alex-reed, member__aris-thorne, member__chloe-whitmore, member__david-jones, member__elena-moretti, member__julian-frost, member__lily-vance, member__marcus-thorne, member__sarah-jenkins, member__sophia-chen, member__viktor-petrov, pricing, privacy-policy, services, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, terms-of-service, work, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-15",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-5",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-27"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "a0afbb15-fca8-e984-2714-184dea7f07bc",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "a0afbb15-fca8-e984-2714-184dea7f07bc",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-16` (`MOUSE_OUT` -> ActionList `custom`)
- **DOM Element Match:** `<a class="primary-button w-inline-block">` (appears on: `404, about-us, blog-categories__development, blog-categories__support, blog-categories__web-design, blog, blog__how-ai-is-redefining-the-next-generation-of-user-interfaces, blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions, blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention, blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability, blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography, blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech, contact, index, member__alex-reed, member__aris-thorne, member__chloe-whitmore, member__david-jones, member__elena-moretti, member__julian-frost, member__lily-vance, member__marcus-thorne, member__sarah-jenkins, member__sophia-chen, member__viktor-petrov, pricing, privacy-policy, services, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, terms-of-service, work, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-16",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-14",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-26"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "a0afbb15-fca8-e984-2714-184dea7f07bc",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "a0afbb15-fca8-e984-2714-184dea7f07bc",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-17` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-17",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-7",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-18"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".parent-menu-wrap",
    "originalId": "0d5a57cb-ee86-efcd-5411-fef0f0906a6d",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".parent-menu-wrap",
      "originalId": "0d5a57cb-ee86-efcd-5411-fef0f0906a6d",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782302363869,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-18` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-18",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-3",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-17"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".parent-menu-wrap",
    "originalId": "0d5a57cb-ee86-efcd-5411-fef0f0906a6d",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".parent-menu-wrap",
      "originalId": "0d5a57cb-ee86-efcd-5411-fef0f0906a6d",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782302363870,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-19` (`MOUSE_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-19",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-8",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-20"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "93a75bd4-333e-a4a8-37a2-5f2c7550f77f",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "93a75bd4-333e-a4a8-37a2-5f2c7550f77f",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782360673083,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-20` (`MOUSE_SECOND_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-20",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_SECOND_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-9",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-19"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "93a75bd4-333e-a4a8-37a2-5f2c7550f77f",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "93a75bd4-333e-a4a8-37a2-5f2c7550f77f",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782360673083,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-21` (`MOUSE_OVER` -> ActionList `custom`)
- **DOM Element Match:** `<a class="primary-button w-inline-block">` (appears on: `about-us, blog-categories__development, blog-categories__support, blog-categories__web-design, blog, blog__how-ai-is-redefining-the-next-generation-of-user-interfaces, blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions, blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention, blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability, blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography, blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech, contact, index, member__alex-reed, member__aris-thorne, member__chloe-whitmore, member__david-jones, member__elena-moretti, member__julian-frost, member__lily-vance, member__marcus-thorne, member__sarah-jenkins, member__sophia-chen, member__viktor-petrov, pricing, privacy-policy, services, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, terms-of-service, work, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-21",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-6",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-27"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "8434015d-e00d-576b-1e47-1978b4b5cc56",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "8434015d-e00d-576b-1e47-1978b4b5cc56",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-22` (`MOUSE_OUT` -> ActionList `custom`)
- **DOM Element Match:** `<a class="primary-button w-inline-block">` (appears on: `about-us, blog-categories__development, blog-categories__support, blog-categories__web-design, blog, blog__how-ai-is-redefining-the-next-generation-of-user-interfaces, blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions, blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention, blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability, blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography, blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech, contact, index, member__alex-reed, member__aris-thorne, member__chloe-whitmore, member__david-jones, member__elena-moretti, member__julian-frost, member__lily-vance, member__marcus-thorne, member__sarah-jenkins, member__sophia-chen, member__viktor-petrov, pricing, privacy-policy, services, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, terms-of-service, work, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-22",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-14",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-26"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "8434015d-e00d-576b-1e47-1978b4b5cc56",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "8434015d-e00d-576b-1e47-1978b4b5cc56",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-23` (`MOUSE_OVER` -> ActionList `custom`)
- **DOM Element Match:** `<div class="button-newsletter-wrap">` (appears on: `about-us, blog-categories__development, blog-categories__support, blog-categories__web-design, blog, blog__how-ai-is-redefining-the-next-generation-of-user-interfaces, blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions, blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention, blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability, blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography, blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech, contact, index, member__alex-reed, member__aris-thorne, member__chloe-whitmore, member__david-jones, member__elena-moretti, member__julian-frost, member__lily-vance, member__marcus-thorne, member__sarah-jenkins, member__sophia-chen, member__viktor-petrov, pricing, privacy-policy, services, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, terms-of-service, work, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-23",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-6",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-24"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "ad962e88-cbed-2db9-ca9c-8af8883c6095",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "ad962e88-cbed-2db9-ca9c-8af8883c6095",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782386794562,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-24` (`MOUSE_OUT` -> ActionList `custom`)
- **DOM Element Match:** `<div class="button-newsletter-wrap">` (appears on: `about-us, blog-categories__development, blog-categories__support, blog-categories__web-design, blog, blog__how-ai-is-redefining-the-next-generation-of-user-interfaces, blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions, blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention, blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability, blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography, blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech, contact, index, member__alex-reed, member__aris-thorne, member__chloe-whitmore, member__david-jones, member__elena-moretti, member__julian-frost, member__lily-vance, member__marcus-thorne, member__sarah-jenkins, member__sophia-chen, member__viktor-petrov, pricing, privacy-policy, services, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, terms-of-service, work, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-24",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-14",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-23"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "ad962e88-cbed-2db9-ca9c-8af8883c6095",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "ad962e88-cbed-2db9-ca9c-8af8883c6095",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782386794563,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-26` (`MOUSE_OVER` -> ActionList `custom`)
- **DOM Element Match:** `<a class="secondar-button w-inline-block">` (appears on: `404, contact, index, pricing, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-26",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-5",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-27"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "49eed9a4-0689-ef93-8ddd-a57669f209a8",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "49eed9a4-0689-ef93-8ddd-a57669f209a8",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-27` (`MOUSE_OUT` -> ActionList `custom`)
- **DOM Element Match:** `<a class="secondar-button w-inline-block">` (appears on: `404, contact, index, pricing, services__brand-identity, services__digital-strategy, services__ui-ux-design, services__web-development, works__aura-fintech-app, works__luma-health, works__northland-studio-website, works__stellar-saas-dashboard, works__veloce-e-commerce, works__zenith-brand-refresh`)
```json
{
  "id": "e-27",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-14",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-26"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "49eed9a4-0689-ef93-8ddd-a57669f209a8",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "49eed9a4-0689-ef93-8ddd-a57669f209a8",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-28` (`MOUSE_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-28",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "MOUSE_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-8",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-33"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3b2fee57d36ac89dba0979|5b3040f2-fe36-e59f-4c56-a3a360d1b047",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3b2fee57d36ac89dba0979|5b3040f2-fe36-e59f-4c56-a3a360d1b047",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782530717233,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-29` (`MOUSE_SECOND_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-29",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "MOUSE_SECOND_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-9",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-32"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3b2fee57d36ac89dba0979|5b3040f2-fe36-e59f-4c56-a3a360d1b047",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3b2fee57d36ac89dba0979|5b3040f2-fe36-e59f-4c56-a3a360d1b047",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782530717233,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-31` (`MOUSE_SECOND_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-31",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_SECOND_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-23",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-30"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "3c893022-739d-8970-ec2d-5ea7102e8326",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "3c893022-739d-8970-ec2d-5ea7102e8326",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782360673083,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-32` (`MOUSE_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-32",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "MOUSE_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-8",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-33"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "3c893022-739d-8970-ec2d-5ea7102e8341",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "3c893022-739d-8970-ec2d-5ea7102e8341",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782530717233,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-33` (`MOUSE_SECOND_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-33",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "MOUSE_SECOND_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-9",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-32"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "3c893022-739d-8970-ec2d-5ea7102e8341",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "3c893022-739d-8970-ec2d-5ea7102e8341",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782530717233,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-34` (`MOUSE_OVER` -> ActionList `custom`)
- **DOM Element Match:** `<a class="primary-button w-inline-block">` (appears on: `index`)
```json
{
  "id": "e-34",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-5",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-27"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "fa94bad1-84e1-87b9-9ee4-0de76c1bbbdc",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "fa94bad1-84e1-87b9-9ee4-0de76c1bbbdc",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-35` (`MOUSE_OUT` -> ActionList `custom`)
- **DOM Element Match:** `<a class="primary-button w-inline-block">` (appears on: `index`)
```json
{
  "id": "e-35",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-14",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-26"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "fa94bad1-84e1-87b9-9ee4-0de76c1bbbdc",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "fa94bad1-84e1-87b9-9ee4-0de76c1bbbdc",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782291394283,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-36` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-36",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-37"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-family",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d54",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-family",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d54",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786331899,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-38` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-38",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-39"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d57",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d57",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786380748,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-40` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-40",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-41"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".title-font-size",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d5f",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".title-font-size",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d5f",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786472377,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-42` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-42",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-43"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-h1",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d62",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-h1",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d62",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786487639,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-44` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-44",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-45"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-h2",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d65",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-h2",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d65",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786511624,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-46` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-46",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-47"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-h3",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d68",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-h3",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d68",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786532291,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-48` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-48",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-49"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-h4",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d6b",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-h4",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d6b",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786542205,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-50` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-50",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-51"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-h5",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d6e",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-h5",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d6e",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786555093,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-52` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-52",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-53"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-h6",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d71",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-h6",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d71",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786586833,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-54` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-54",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-55"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-body-1",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d78",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-body-1",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d78",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786620151,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-56` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-56",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-57"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-body-2",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d7b",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-body-2",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d7b",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786630101,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-58` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-58",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-59"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-body-3",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d7e",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-body-3",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d7e",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786641297,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-60` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-60",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-61"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-body-4",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d81",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-body-4",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d81",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786652454,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-62` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-62",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-63"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".font-size-body-5",
    "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d84",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".font-size-body-5",
      "originalId": "6a40f6c895fb0b707c703bdf|11f8e904-9115-284c-d8f2-97a388d12d84",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786662885,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-64` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-64",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-65"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".demo-button-primary",
    "originalId": "6a40f6c895fb0b707c703bdf|17b96a1d-c08f-822c-e527-09807974aaa2",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".demo-button-primary",
      "originalId": "6a40f6c895fb0b707c703bdf|17b96a1d-c08f-822c-e527-09807974aaa2",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786687011,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-66` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-66",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-67"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".demo-button-secondary",
    "originalId": "6a40f6c895fb0b707c703bdf|7599b351-5323-d74f-a479-2cc0ed31b34e",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".demo-button-secondary",
      "originalId": "6a40f6c895fb0b707c703bdf|7599b351-5323-d74f-a479-2cc0ed31b34e",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782786698754,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-76` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-76",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-30",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-77"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".line-overlay",
    "originalId": "438be197-114b-8ed4-cd31-280636b2bc58",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".line-overlay",
      "originalId": "438be197-114b-8ed4-cd31-280636b2bc58",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782787193617,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-78` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-78",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-16",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-79"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".link-underline-wrap",
    "originalId": "73af4f45-42f2-f5c4-605f-a3f8a7e9ad24",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".link-underline-wrap",
      "originalId": "73af4f45-42f2-f5c4-605f-a3f8a7e9ad24",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": 0,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1782870085075,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-79` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-79",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-31",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-78"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".link-underline-wrap",
    "originalId": "73af4f45-42f2-f5c4-605f-a3f8a7e9ad24",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".link-underline-wrap",
      "originalId": "73af4f45-42f2-f5c4-605f-a3f8a7e9ad24",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782870085076,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-80` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-80",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-81"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a43334a90442c93582c794c|168b1ab2-5cc7-004e-91cd-1d13b45d458f",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a43334a90442c93582c794c|168b1ab2-5cc7-004e-91cd-1d13b45d458f",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782874386463,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-82` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-82",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-83"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a43334a90442c93582c794c|1250a495-a1b6-4f50-7781-b98793209128",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a43334a90442c93582c794c|1250a495-a1b6-4f50-7781-b98793209128",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782875265990,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-84` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-84",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-85"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a43334a90442c93582c794c|82bdd65f-ccc9-e070-6ba4-efddf6f4b96c",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a43334a90442c93582c794c|82bdd65f-ccc9-e070-6ba4-efddf6f4b96c",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782875286901,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-86` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-86",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-87"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a448657fd2bd8cb87d8ba3b|9376d59d-8997-2558-d64c-a37cf46b8c53",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a448657fd2bd8cb87d8ba3b|9376d59d-8997-2558-d64c-a37cf46b8c53",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782876428950,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-88` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-88",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-89"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a448657fd2bd8cb87d8ba3b|aca69ca3-2a3a-7266-c2f1-e6a16099f1cc",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a448657fd2bd8cb87d8ba3b|aca69ca3-2a3a-7266-c2f1-e6a16099f1cc",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1782876439365,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-90` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-90",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f5cb9ea227a7c2c53dec",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f5cb9ea227a7c2c53dec",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1782880507394,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-91` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-91",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f6c895fb0b707c703bdf",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f6c895fb0b707c703bdf",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1782961102719,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-92` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-92",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a43334a90442c93582c794c",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a43334a90442c93582c794c",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1782961304521,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-93` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-93",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a448657fd2bd8cb87d8ba3b",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a448657fd2bd8cb87d8ba3b",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1782961381863,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-94` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-94",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-95"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a45bcddc4a8c684dfd1b8d6",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a45bcddc4a8c684dfd1b8d6",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782961922399,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-95` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-95",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-94"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a45bcddc4a8c684dfd1b8d6",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a45bcddc4a8c684dfd1b8d6",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782961922400,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-96` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-96",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a45bcddc4a8c684dfd1b8d6",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a45bcddc4a8c684dfd1b8d6",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1782962127811,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-97` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-97",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-98"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f6c895fb0b707c703bdf",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f6c895fb0b707c703bdf",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962164313,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-98` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-98",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-97"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f6c895fb0b707c703bdf",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f6c895fb0b707c703bdf",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962164314,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-99` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-99",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-100"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a43334a90442c93582c794c",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a43334a90442c93582c794c",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962247746,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-100` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-100",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-99"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a43334a90442c93582c794c",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a43334a90442c93582c794c",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962247747,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-101` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-101",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-102"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a448657fd2bd8cb87d8ba3b",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a448657fd2bd8cb87d8ba3b",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962266594,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-102` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-102",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-101"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a448657fd2bd8cb87d8ba3b",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a448657fd2bd8cb87d8ba3b",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962266595,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-103` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-103",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-104"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3b2fee57d36ac89dba0979",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3b2fee57d36ac89dba0979",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962293214,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-104` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-104",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-103"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3b2fee57d36ac89dba0979",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3b2fee57d36ac89dba0979",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1782962293215,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-111` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-111",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-112"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".item-content",
    "originalId": "6a45bcddc4a8c684dfd1b8d6|bc4111c9-ec45-3102-e77c-adfef600a40d",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".item-content",
      "originalId": "6a45bcddc4a8c684dfd1b8d6|bc4111c9-ec45-3102-e77c-adfef600a40d",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1783013587929,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-113` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-113",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-114"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f5cb9ea227a7c2c53dec",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f5cb9ea227a7c2c53dec",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783045413156,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-114` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-114",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-113"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f5cb9ea227a7c2c53dec",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f5cb9ea227a7c2c53dec",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783045413156,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-115` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-115",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-116"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a4724c3bc726c09c0b940fc",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a4724c3bc726c09c0b940fc",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783476636392,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-116` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-116",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-115"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a4724c3bc726c09c0b940fc",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a4724c3bc726c09c0b940fc",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783476636393,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-117` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-117",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a4724c3bc726c09c0b940fc",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a4724c3bc726c09c0b940fc",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1783476657176,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-119` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-119",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-34",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".plan-box",
    "originalId": "928b7905-eeb0-2134-5f12-4264290a5b2f",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".plan-box",
      "originalId": "928b7905-eeb0-2134-5f12-4264290a5b2f",
      "appliesTo": "CLASS"
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-34-p",
      "smoothing": 83,
      "startsEntering": false,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1783478306959,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-134` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-134",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-135"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a4724c3bc726c09c0b940fc|e116e1bb-8fd4-413a-071e-26e0545fb862",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a4724c3bc726c09c0b940fc|e116e1bb-8fd4-413a-071e-26e0545fb862",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1783480634244,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-138` (`TAB_ACTIVE` -> ActionList `custom`)
```json
{
  "id": "e-138",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "TAB_ACTIVE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-36",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-139"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".faq-tab-link",
    "originalId": "3b2f68d7-b65f-a8ad-38d0-1ec63d2cdb8b",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".faq-tab-link",
      "originalId": "3b2f68d7-b65f-a8ad-38d0-1ec63d2cdb8b",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783656199214,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-139` (`TAB_INACTIVE` -> ActionList `custom`)
```json
{
  "id": "e-139",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "TAB_INACTIVE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-37",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-138"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".faq-tab-link",
    "originalId": "3b2f68d7-b65f-a8ad-38d0-1ec63d2cdb8b",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".faq-tab-link",
      "originalId": "3b2f68d7-b65f-a8ad-38d0-1ec63d2cdb8b",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783656199215,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-144` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-144",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-145"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a4724c3bc726c09c0b940fc|7729ad80-82b5-886c-4b40-ddc48d475c03",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a4724c3bc726c09c0b940fc|7729ad80-82b5-886c-4b40-ddc48d475c03",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1783738488613,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-146` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-146",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-147"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a4724c3bc726c09c0b940fc|6caad961-9773-e716-4360-83a4cc7d8f96",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a4724c3bc726c09c0b940fc|6caad961-9773-e716-4360-83a4cc7d8f96",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1783738664569,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-150` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-150",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-151"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "3b2f68d7-b65f-a8ad-38d0-1ec63d2cdb87",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "3b2f68d7-b65f-a8ad-38d0-1ec63d2cdb87",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1783905970848,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-154` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-154",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-155"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9|ffc18d62-9a7c-88ce-5786-92313c8c6051",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9|ffc18d62-9a7c-88ce-5786-92313c8c6051",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1783908921821,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-156` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-156",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-5",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-157"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9|51cb012b-2f19-9b60-959f-97c539e0a9fa",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9|51cb012b-2f19-9b60-959f-97c539e0a9fa",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783909147970,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-157` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-157",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-14",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-156"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9|51cb012b-2f19-9b60-959f-97c539e0a9fa",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9|51cb012b-2f19-9b60-959f-97c539e0a9fa",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783909147970,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-158` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-158",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-159"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9|17b86f0d-e509-10b6-b1c7-0760b5fc8c24",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9|17b86f0d-e509-10b6-b1c7-0760b5fc8c24",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1783914158129,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-160` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-160",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-161"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9|24af389c-9162-59f8-4f6d-cc7b6918f466",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9|24af389c-9162-59f8-4f6d-cc7b6918f466",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1783914218090,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-168` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-168",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1783915018911,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-169` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-169",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-170"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783915068483,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-170` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-170",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-169"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a543f4fbb454fc3214ce0b9",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a543f4fbb454fc3214ce0b9",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1783915068483,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-171` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-171",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-172"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|77d1d0c0-eea9-9b52-be03-059489c6bfaf",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|77d1d0c0-eea9-9b52-be03-059489c6bfaf",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 800,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784002405750,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-173` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-173",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-174"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|16a69588-13cd-d09d-1a2f-114d68447c60",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|16a69588-13cd-d09d-1a2f-114d68447c60",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784002529759,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-175` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-175",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-176"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|7f1f9c1b-7d63-5f95-c67e-b06ea0e4b415",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|7f1f9c1b-7d63-5f95-c67e-b06ea0e4b415",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784002639502,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-177` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-177",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-178"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|2c6a42b8-c1e5-86c5-c635-78eb30986f45",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|2c6a42b8-c1e5-86c5-c635-78eb30986f45",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784002653663,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-179` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-179",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-180"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|628bdaf6-2a46-efd6-74f2-dc24f4c49d9e",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|628bdaf6-2a46-efd6-74f2-dc24f4c49d9e",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784002922394,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-181` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-181",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-182"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|c75c657a-e80a-6d32-ea39-3afec3e7dd7d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|c75c657a-e80a-6d32-ea39-3afec3e7dd7d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784052397493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-183` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-183",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-184"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|cc3272f3-01f3-8db3-138b-22554f024f0d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|cc3272f3-01f3-8db3-138b-22554f024f0d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784052425907,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-185` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-185",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-186"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|aeb23a9a-06cb-a716-c419-05b26923347d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|aeb23a9a-06cb-a716-c419-05b26923347d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784052442122,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-187` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-187",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-188"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6|440ea299-23c6-7a60-b183-981dc5a3a474",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6|440ea299-23c6-7a60-b183-981dc5a3a474",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784052460627,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-189` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-189",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1784057245944,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-190` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-190",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-191"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784057259758,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-191` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-191",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-190"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5469d14c8fb6e86901b1d6",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5469d14c8fb6e86901b1d6",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784057259759,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-198` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-198",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-199"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a56ed1bc252f0ab8d506790|f030eb5e-8560-7dfd-29b7-738c548c214a",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a56ed1bc252f0ab8d506790|f030eb5e-8560-7dfd-29b7-738c548c214a",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784086902001,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-200` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-200",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-201"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a56ed1bc252f0ab8d506790|f030eb5e-8560-7dfd-29b7-738c548c214d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a56ed1bc252f0ab8d506790|f030eb5e-8560-7dfd-29b7-738c548c214d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784086902001,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-202` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-202",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-203"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a56ed1bc252f0ab8d506790|f030eb5e-8560-7dfd-29b7-738c548c2150",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a56ed1bc252f0ab8d506790|f030eb5e-8560-7dfd-29b7-738c548c2150",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 550,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784086902001,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-204` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-204",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-205"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|f24e5b95-d319-c58c-e4d0-7c01bf56190c",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|f24e5b95-d319-c58c-e4d0-7c01bf56190c",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784088721341,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-206` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-206",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-207"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|f24e5b95-d319-c58c-e4d0-7c01bf56190f",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|f24e5b95-d319-c58c-e4d0-7c01bf56190f",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784088721341,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-208` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-208",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-209"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|f24e5b95-d319-c58c-e4d0-7c01bf561912",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|f24e5b95-d319-c58c-e4d0-7c01bf561912",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 550,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784088721341,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-210` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-210",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-211"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "51edbee2-1b37-36d4-6934-14979e3f0f97",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "51edbee2-1b37-36d4-6934-14979e3f0f97",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784089827633,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-212` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-212",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-213"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5502509448c7b3c68a93b1|75cee53d-57bb-c9ff-e449-c803220f7fc9",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5502509448c7b3c68a93b1|75cee53d-57bb-c9ff-e449-c803220f7fc9",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784134491211,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-216` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-216",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-39",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-217"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|da1809e2-adec-c70b-6986-e4df20137339",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|da1809e2-adec-c70b-6986-e4df20137339",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784260882920,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-218` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-218",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-40",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|4ae199c2-7072-87f4-51dc-1872b41b0414",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|4ae199c2-7072-87f4-51dc-1872b41b0414",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-40-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1784261882252,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-219` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-219",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-39",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-220"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1bab",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1bab",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784572588518,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-221` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-221",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-40",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1bee",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1bee",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-40-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1784572588518,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-222` (`TAB_ACTIVE` -> ActionList `custom`)
```json
{
  "id": "e-222",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "TAB_ACTIVE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-41",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-223"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".process-tab-link",
    "originalId": "6a5705256fedc8389901bfc3|c6c83634-333f-9324-c872-191ae7605eb9",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".process-tab-link",
      "originalId": "6a5705256fedc8389901bfc3|c6c83634-333f-9324-c872-191ae7605eb9",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784572943882,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-223` (`TAB_INACTIVE` -> ActionList `custom`)
```json
{
  "id": "e-223",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "TAB_INACTIVE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-42",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-222"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".process-tab-link",
    "originalId": "6a5705256fedc8389901bfc3|c6c83634-333f-9324-c872-191ae7605eb9",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".process-tab-link",
      "originalId": "6a5705256fedc8389901bfc3|c6c83634-333f-9324-c872-191ae7605eb9",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784572943883,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-224` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-224",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-225"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|2d81e224-e6e8-ad46-af06-2c8836224080",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|2d81e224-e6e8-ad46-af06-2c8836224080",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1784597064302,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-226` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-226",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-227"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|2d81e224-e6e8-ad46-af06-2c88362240bc",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|2d81e224-e6e8-ad46-af06-2c88362240bc",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784597064302,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-228` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-228",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-229"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|88068421-7efa-ce1f-a36b-b69a2c53fb6a",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|88068421-7efa-ce1f-a36b-b69a2c53fb6a",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784597625249,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-230` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-230",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1784597871368,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-231` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-231",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-232"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784597881036,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-232` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-232",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-231"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784597881037,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-249` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-249",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-250"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d3b178c0-ef47-4bf8-07bb-952d4c168a9d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d3b178c0-ef47-4bf8-07bb-952d4c168a9d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784598145788,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-251` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-251",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-252"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|e118dba4-8dca-0845-dd6d-8e25b871bc5c",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|e118dba4-8dca-0845-dd6d-8e25b871bc5c",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784598159242,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-253` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-253",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-254"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|52466aac-b34e-769c-37ff-511bfb4d488e",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|52466aac-b34e-769c-37ff-511bfb4d488e",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1784598175991,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-259` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-259",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-260"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c0189c53-ba7a-4a07-ada9-5b80e9773eed",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c0189c53-ba7a-4a07-ada9-5b80e9773eed",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784599900482,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-261` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-261",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-262"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".process-tab-link",
    "originalId": "6a5705256fedc8389901bfc3|c6c83634-333f-9324-c872-191ae7605eb9",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".process-tab-link",
      "originalId": "6a5705256fedc8389901bfc3|c6c83634-333f-9324-c872-191ae7605eb9",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784600056657,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-263` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-263",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-264"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b78",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b78",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784600342565,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-265` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-265",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-266"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b7b",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b7b",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1784600354840,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-267` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-267",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-268"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b81",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b81",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1784600364602,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-269` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-269",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-270"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b87",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b87",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 550,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1784600376544,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-271` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-271",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-272"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b8d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b8d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 550,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1784600391032,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-273` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-273",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-274"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b72",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b72",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784600410443,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-275` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-275",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-276"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b75",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b75",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784600420550,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-277` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-277",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-278"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b94",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1b94",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784600449500,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-279` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-279",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-280"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1bd9",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|c202dc00-7909-36fe-6287-86ec8a2b1bd9",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1784600458492,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-281` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-281",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-282"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|33ab024d-85d1-c089-7c80-6d61953f5aaa",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|33ab024d-85d1-c089-7c80-6d61953f5aaa",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784600652434,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-285` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-285",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1784600744273,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-286` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-286",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-287"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784600757038,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-287` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-287",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-286"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784600757039,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-288` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-288",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-43",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-289"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|7cbfa31e-808c-03df-9cac-6dfe43570449",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|7cbfa31e-808c-03df-9cac-6dfe43570449",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784689618358,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-294` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-294",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-295"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|bd9d502a-54ee-411d-f5fe-fde4923592f1",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|bd9d502a-54ee-411d-f5fe-fde4923592f1",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 200,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784860466321,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-296` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-296",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-297"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|5fdf48f9-884e-cb6f-6ffc-47182ddd16ff",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|5fdf48f9-884e-cb6f-6ffc-47182ddd16ff",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784860478260,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-298` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-298",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-299"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|7a538bf7-7556-8e7e-b745-75a3a507266d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|7a538bf7-7556-8e7e-b745-75a3a507266d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 400,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784860487195,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-300` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-300",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-301"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|94195dd0-28ef-1301-c29a-8882e3fd0faa",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|94195dd0-28ef-1301-c29a-8882e3fd0faa",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 500,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1784860497464,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-302` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-302",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-303"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|a34d203a-73f7-6a95-0375-f7db6152d534",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|a34d203a-73f7-6a95-0375-f7db6152d534",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 400,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784860569511,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-304` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-304",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-305"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|a4410d1a-3fa0-b36d-ce2d-fcb6a3c34520",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|a4410d1a-3fa0-b36d-ce2d-fcb6a3c34520",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784860616620,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-306` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-306",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "FADE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "fadeIn",
      "autoStopEventId": "e-307"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|5c6ee80e-30a8-6a19-ac72-b50bbc43146a",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|5c6ee80e-30a8-6a19-ac72-b50bbc43146a",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": null,
    "effectIn": true
  },
  "createdOn": 1784860631882,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-308` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-308",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-309"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|5c1c8677-ccc4-0666-e17c-97c0154cb212",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|5c1c8677-ccc4-0666-e17c-97c0154cb212",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 200,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784860801878,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-310` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-310",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-311"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|5c1c8677-ccc4-0666-e17c-97c0154cb213",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|5c1c8677-ccc4-0666-e17c-97c0154cb213",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 200,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784860817472,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-312` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-312",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-313"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab|51bd0924-3e98-ae82-8cff-dae2179eead1",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab|51bd0924-3e98-ae82-8cff-dae2179eead1",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 200,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1784860829601,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-314` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-314",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-315"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784942646785,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-315` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-315",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-314"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784942646787,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-325` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-325",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-46",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-326"
    }
  },
  "mediaQueries": [
    "medium",
    "small"
  ],
  "target": {
    "selector": ".services-tabs-collection",
    "originalId": "6a62d15e3a6264f38d605a5b|816ac5b8-51dc-0297-8bdb-10ae389e29bf",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".services-tabs-collection",
      "originalId": "6a62d15e3a6264f38d605a5b|816ac5b8-51dc-0297-8bdb-10ae389e29bf",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1784950643481,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-327` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-327",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a62d15e3a6264f38d605a5b",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a62d15e3a6264f38d605a5b",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1785124395351,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-328` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-328",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-329"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a62d15e3a6264f38d605a5b",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a62d15e3a6264f38d605a5b",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1785124411318,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-329` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-329",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-328"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a62d15e3a6264f38d605a5b",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a62d15e3a6264f38d605a5b",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1785124411320,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-330` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-330",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-47",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main"
  ],
  "target": {
    "id": "6a68107bb9ce9f4acaecbb03|47fe4402-bbab-c92b-5884-26052307d893",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a68107bb9ce9f4acaecbb03|47fe4402-bbab-c92b-5884-26052307d893",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-47-p",
      "smoothing": 95,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1785385002148,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-339` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-339",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-340"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a68107bb9ce9f4acaecbb03",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a68107bb9ce9f4acaecbb03",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1785808946685,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-340` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-340",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-339"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a68107bb9ce9f4acaecbb03",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a68107bb9ce9f4acaecbb03",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1785808946687,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-341` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="child-grid-layout">` (appears on: `index`)
```json
{
  "id": "e-341",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-342"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e2d2",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e2d2",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-343` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="heading-h1">` (appears on: `index`)
```json
{
  "id": "e-343",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-344"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e2d5",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e2d5",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-345` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="heading-h6 semi-boild">` (appears on: `index`)
```json
{
  "id": "e-345",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-346"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e2d8",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e2d8",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-355` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="image-why-choose-us">` (appears on: `index`)
```json
{
  "id": "e-355",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-356"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e2f3",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e2f3",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-357` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="block-image-wrap">` (appears on: `index`)
```json
{
  "id": "e-357",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-358"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e2f4",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e2f4",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-359` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="child-content-cover _03">` (appears on: `index`)
```json
{
  "id": "e-359",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-39",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-360"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e30b",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e30b",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-361` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="block-image-wrap">` (appears on: `index`)
```json
{
  "id": "e-361",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-362"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e339",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e339",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-363` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
- **DOM Element Match:** `<div class="text-hide-run-chat">` (appears on: `index`)
```json
{
  "id": "e-363",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-40",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "e74efa71-38a2-6926-16bf-2bf10993e34e",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "e74efa71-38a2-6926-16bf-2bf10993e34e",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-40-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1785814690891,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-364` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-364",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a68107bb9ce9f4acaecbb03",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a68107bb9ce9f4acaecbb03",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1785901109664,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-371` (`PAGE_START` -> ActionList `custom`)
```json
{
  "id": "e-371",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_START",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-48",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-372"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3364cd428b36afdf5f6df3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3364cd428b36afdf5f6df3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": true,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1785986707488,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-373` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-373",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-43",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-374"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".count-down-size",
    "originalId": "6a3364cd428b36afdf5f6df3|7cbfa31e-808c-03df-9cac-6dfe43570447",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".count-down-size",
      "originalId": "6a3364cd428b36afdf5f6df3|7cbfa31e-808c-03df-9cac-6dfe43570447",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786030318482,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-375` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-375",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-376"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3364cd428b36afdf5f6df3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3364cd428b36afdf5f6df3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786033852992,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-376` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-376",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-375"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3364cd428b36afdf5f6df3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3364cd428b36afdf5f6df3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786033852994,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-378` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-378",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-51",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3364cd428b36afdf5f6df3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3364cd428b36afdf5f6df3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-51-p",
      "smoothing": 75,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1786162497088,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-379` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-379",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-52",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-380"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".member-collection-item",
    "originalId": "6a3364cd428b36afdf5f6df3|67a89337-8635-ac45-fc33-a31e9d60ab19",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".member-collection-item",
      "originalId": "6a3364cd428b36afdf5f6df3|67a89337-8635-ac45-fc33-a31e9d60ab19",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786591060449,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-380` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-380",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-53",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-379"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".member-collection-item",
    "originalId": "6a3364cd428b36afdf5f6df3|67a89337-8635-ac45-fc33-a31e9d60ab19",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".member-collection-item",
      "originalId": "6a3364cd428b36afdf5f6df3|67a89337-8635-ac45-fc33-a31e9d60ab19",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786591060450,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-383` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-383",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-54",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-384"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".work-collection-item-wrap",
    "originalId": "6a62d15e3a6264f38d605a5b|d01b4057-df88-6cfb-bc03-a0fed53ad55d",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".work-collection-item-wrap",
      "originalId": "6a62d15e3a6264f38d605a5b|d01b4057-df88-6cfb-bc03-a0fed53ad55d",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786670738284,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-384` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-384",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-55",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-383"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".work-collection-item-wrap",
    "originalId": "6a62d15e3a6264f38d605a5b|d01b4057-df88-6cfb-bc03-a0fed53ad55d",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".work-collection-item-wrap",
      "originalId": "6a62d15e3a6264f38d605a5b|d01b4057-df88-6cfb-bc03-a0fed53ad55d",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1786670738286,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-385` (`MOUSE_MOVE` -> ActionList `custom`)
```json
{
  "id": "e-385",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_MOVE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-56",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".work-collection-item-wrap",
    "originalId": "6a62d15e3a6264f38d605a5b|d01b4057-df88-6cfb-bc03-a0fed53ad55d",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".work-collection-item-wrap",
      "originalId": "6a62d15e3a6264f38d605a5b|d01b4057-df88-6cfb-bc03-a0fed53ad55d",
      "appliesTo": "CLASS"
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-56-p",
      "selectedAxis": "X_AXIS",
      "basedOn": "ELEMENT",
      "reverse": false,
      "smoothing": 80,
      "restingState": 50
    },
    {
      "continuousParameterGroupId": "a-56-p-2",
      "selectedAxis": "Y_AXIS",
      "basedOn": "ELEMENT",
      "reverse": false,
      "smoothing": 80,
      "restingState": 50
    }
  ],
  "createdOn": 1786670905062,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-386` (`MOUSE_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-386",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-23",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-387"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "846854d4-fe81-80c0-be1a-4805cc159245",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "846854d4-fe81-80c0-be1a-4805cc159245",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787017903161,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-388` (`MOUSE_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-388",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "MOUSE_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-8",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-389"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee7a0c258efe45333e053|dbd4bfad-e43c-4dab-6b08-f9b2c7b5da66",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee7a0c258efe45333e053|dbd4bfad-e43c-4dab-6b08-f9b2c7b5da66",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787020247951,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-389` (`MOUSE_SECOND_CLICK` -> ActionList `custom`)
```json
{
  "id": "e-389",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "MOUSE_SECOND_CLICK",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-9",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-388"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee7a0c258efe45333e053|dbd4bfad-e43c-4dab-6b08-f9b2c7b5da66",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee7a0c258efe45333e053|dbd4bfad-e43c-4dab-6b08-f9b2c7b5da66",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787020247951,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-392` (`NAVBAR_OPEN` -> ActionList `custom`)
```json
{
  "id": "e-392",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "NAVBAR_OPEN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-59",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-393"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".navbar.white",
    "originalId": "73424d6f-137c-a239-364e-c9c592cc8043",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".navbar.white",
      "originalId": "73424d6f-137c-a239-364e-c9c592cc8043",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787051333639,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-393` (`NAVBAR_CLOSE` -> ActionList `custom`)
```json
{
  "id": "e-393",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "NAVBAR_CLOSE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-23",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-392"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".navbar.white",
    "originalId": "73424d6f-137c-a239-364e-c9c592cc8043",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".navbar.white",
      "originalId": "73424d6f-137c-a239-364e-c9c592cc8043",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787051333640,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-394` (`NAVBAR_OPEN` -> ActionList `custom`)
```json
{
  "id": "e-394",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "NAVBAR_OPEN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-8",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-395"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".navbar.black",
    "originalId": "20c27f4a-860b-cfdc-a244-67a39fc917bb",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".navbar.black",
      "originalId": "20c27f4a-860b-cfdc-a244-67a39fc917bb",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787058141996,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-395` (`NAVBAR_CLOSE` -> ActionList `custom`)
```json
{
  "id": "e-395",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "NAVBAR_CLOSE",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-9",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-394"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".navbar.black",
    "originalId": "20c27f4a-860b-cfdc-a244-67a39fc917bb",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".navbar.black",
      "originalId": "20c27f4a-860b-cfdc-a244-67a39fc917bb",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787058141998,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-396` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-396",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a46a12531352562f8d8eb2c",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a46a12531352562f8d8eb2c",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787076666867,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-397` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-397",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-398"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a46a12531352562f8d8eb2c",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a46a12531352562f8d8eb2c",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787076674032,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-398` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-398",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-397"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a46a12531352562f8d8eb2c",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a46a12531352562f8d8eb2c",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787076674034,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-399` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-399",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5ee86ea4a3c3f3ba9909ab",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5ee86ea4a3c3f3ba9909ab",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787081396459,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-400` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-400",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5502509448c7b3c68a93b1",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5502509448c7b3c68a93b1",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787103521399,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-401` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-401",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-402"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5502509448c7b3c68a93b1",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5502509448c7b3c68a93b1",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787103547173,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-402` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-402",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-401"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5502509448c7b3c68a93b1",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5502509448c7b3c68a93b1",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787103547174,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-403` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-403",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3b2fee57d36ac89dba0979",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3b2fee57d36ac89dba0979",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787103790833,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-404` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-404",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-60",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a3364cd428b36afdf5f6df3",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a3364cd428b36afdf5f6df3",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-60-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787106901113,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-405` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-405",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-406"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27b5",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27b5",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-407` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-407",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-408"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27b8",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27b8",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-409` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-409",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-410"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27bb",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27bb",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-411` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-411",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-412"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27d6",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27d6",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-413` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-413",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-414"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27d7",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27d7",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-415` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-415",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-39",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-416"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27ee",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f27ee",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": true,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-417` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-417",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-418"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f281c",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f281c",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-419` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-419",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-40",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f2831",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a57087fa4a725f72a75763f|d0692b34-cbd8-f72a-2e14-0a96fe8f2831",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-40-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787109153493,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-420` (`MOUSE_OVER` -> ActionList `custom`)
```json
{
  "id": "e-420",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OVER",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-62",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-421"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".item-icon-social",
    "originalId": "6a5469d14c8fb6e86901b1d6|317739bb-34c0-9edd-a65f-9b29bf355714",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".item-icon-social",
      "originalId": "6a5469d14c8fb6e86901b1d6|317739bb-34c0-9edd-a65f-9b29bf355714",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787109916771,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-421` (`MOUSE_OUT` -> ActionList `custom`)
```json
{
  "id": "e-421",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "MOUSE_OUT",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-63",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-420"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".item-icon-social",
    "originalId": "6a5469d14c8fb6e86901b1d6|317739bb-34c0-9edd-a65f-9b29bf355714",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".item-icon-social",
      "originalId": "6a5469d14c8fb6e86901b1d6|317739bb-34c0-9edd-a65f-9b29bf355714",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": null,
    "scrollOffsetUnit": null,
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787109916772,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-422` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-422",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a66dab0e4ed77a63e88f939",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a66dab0e4ed77a63e88f939",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787157096450,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-423` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-423",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-424"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a66dab0e4ed77a63e88f939",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a66dab0e4ed77a63e88f939",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787157211325,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-424` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-424",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-423"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a66dab0e4ed77a63e88f939",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a66dab0e4ed77a63e88f939",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787157211327,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-425` (`PAGE_SCROLL_UP` -> ActionList `custom`)
```json
{
  "id": "e-425",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_UP",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-32",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-426"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a56ed1bc252f0ab8d506790",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a56ed1bc252f0ab8d506790",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787188404006,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-426` (`PAGE_SCROLL_DOWN` -> ActionList `custom`)
```json
{
  "id": "e-426",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL_DOWN",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-33",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-425"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a56ed1bc252f0ab8d506790",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a56ed1bc252f0ab8d506790",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787188404008,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-427` (`PAGE_SCROLL` -> ActionList `custom`)
```json
{
  "id": "e-427",
  "name": "",
  "animationType": "custom",
  "eventTypeId": "PAGE_SCROLL",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-61",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a56ed1bc252f0ab8d506790",
    "appliesTo": "PAGE",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a56ed1bc252f0ab8d506790",
      "appliesTo": "PAGE",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-61-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787188415438,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-428` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-428",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-429"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a40f6c895fb0b707c703bdf|79c25fbd-2cdb-9605-ae3b-a6b7e104651d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a40f6c895fb0b707c703bdf|79c25fbd-2cdb-9605-ae3b-a6b7e104651d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 100,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787195922293,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-430` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-430",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-431"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae811",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae811",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 250,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-432` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-432",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-433"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae814",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae814",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-434` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-434",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-435"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae817",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae817",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-436` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-436",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-437"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae832",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae832",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-438` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-438",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInLeft",
      "autoStopEventId": "e-439"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae833",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae833",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "LEFT",
    "effectIn": true
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-440` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-440",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_START_ACTION",
    "config": {
      "delay": 0,
      "easing": "",
      "duration": 0,
      "actionListId": "a-39",
      "affectedElements": {},
      "playInReverse": false,
      "autoStopEventId": "e-441"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae84a",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae84a",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": null,
    "direction": null,
    "effectIn": null
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-442` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-442",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInRight",
      "autoStopEventId": "e-443"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae878",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae878",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 350,
    "direction": "RIGHT",
    "effectIn": true
  },
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-444` (`SCROLLING_IN_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-444",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLLING_IN_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
    "config": {
      "actionListId": "a-40",
      "affectedElements": {},
      "duration": 0
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae88d",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [
    {
      "id": "6a5705256fedc8389901bfc3|1f7dc451-19f1-6ac0-9406-4b5e088ae88d",
      "appliesTo": "ELEMENT",
      "styleBlockIds": []
    }
  ],
  "config": [
    {
      "continuousParameterGroupId": "a-40-p",
      "smoothing": 50,
      "startsEntering": true,
      "addStartOffset": false,
      "addOffsetValue": 50,
      "startsExiting": false,
      "addEndOffset": false,
      "endOffsetValue": 50
    }
  ],
  "createdOn": 1787625438123,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-445` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-445",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-446"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".tab-pane",
    "originalId": "928b7905-eeb0-2134-5f12-4264290a5ad5",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".tab-pane",
      "originalId": "928b7905-eeb0-2134-5f12-4264290a5ad5",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 150,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787714338144,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-447` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-447",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-448"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "selector": ".tab-category-bar",
    "originalId": "928b7905-eeb0-2134-5f12-4264290a5acd",
    "appliesTo": "CLASS"
  },
  "targets": [
    {
      "selector": ".tab-category-bar",
      "originalId": "928b7905-eeb0-2134-5f12-4264290a5acd",
      "appliesTo": "CLASS"
    }
  ],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 0,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1787714567786,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-449` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-449",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-450"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6aa7677e8d303f87566c1396|e37b7345-aa85-b332-e5ce-0155b3101d4e",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 300,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1789355906200,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

#### Event `e-451` (`SCROLL_INTO_VIEW` -> ActionList `custom`)
```json
{
  "id": "e-451",
  "name": "",
  "animationType": "preset",
  "eventTypeId": "SCROLL_INTO_VIEW",
  "action": {
    "id": "",
    "actionTypeId": "SLIDE_EFFECT",
    "instant": false,
    "config": {
      "actionListId": "slideInBottom",
      "autoStopEventId": "e-452"
    }
  },
  "mediaQueries": [
    "main",
    "medium",
    "small",
    "tiny"
  ],
  "target": {
    "id": "6aa7677e8d303f87566c1396|e37b7345-aa85-b332-e5ce-0155b3101d58",
    "appliesTo": "ELEMENT",
    "styleBlockIds": []
  },
  "targets": [],
  "config": {
    "loop": false,
    "playInReverse": false,
    "scrollOffsetValue": 0,
    "scrollOffsetUnit": "%",
    "delay": 450,
    "direction": "BOTTOM",
    "effectIn": true
  },
  "createdOn": 1789355906200,
  "sourceBundle": "webflow.e8ec7806.ead11ce4cfc1b6cc.js"
}
```

