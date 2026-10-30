export const INTERACTIONS_DATA = {
  "ix3Interactions": [
    {
      "id": "i-376ad5ee",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:click",
          {
            "control": "togglePlayReverse",
            "controlType": "standard",
            "pluginConfig": {
              "click": "each"
            }
          },
          [
            "ix:class",
            [
              "menu-button"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-e1a8d0d8"
      ],
      "deleted": false,
    },
    {
      "id": "i-be4fe2f0",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-93890611"
      ],
      "deleted": false,
    },
    {
      "id": "i-92ac291f",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-fbb72daf"
      ],
      "deleted": false,
    },
    {
      "id": "i-400fa4b1",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-1d28f8da"
      ],
      "deleted": false,
    },
    {
      "id": "i-42be6612",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:hover",
          {
            "control": "play",
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseenter",
              "hover": "each"
            }
          },
          [
            "ix:class",
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
          "ix:hover",
          {
            "control": "reverse",
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseleave",
              "hover": "each"
            }
          },
          [
            "ix:class",
            [
              "nav-link"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-7c272bed"
      ],
      "conditionalPlayback": [
        {
          "type": "breakpoint",
          "behavior": "dont-animate",
          "breakpoints": [
            "medium",
            "small",
            "tiny"
          ]
        }
      ],
      "deleted": false,
    },
    {
      "id": "i-126a09f6",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[tag-text]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-884198ee"
      ],
      "deleted": false,
    },
    {
      "id": "i-33f84c22",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[summary-text]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-ab7f5214"
      ],
      "deleted": false,
    },
    {
      "id": "i-6e421469",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:class",
            [
              "sub-title"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-605f3400"
      ],
      "deleted": false,
    },
    {
      "id": "i-0e73840a",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:class",
            [
              "img-wrap"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-567284fa"
      ],
      "deleted": false,
    },
    {
      "id": "i-35fef8f8",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:hover",
          {
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseenter",
              "hover": "each"
            }
          },
          [
            "ix:class",
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
          "ix:hover",
          {
            "control": "reverse",
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseleave",
              "hover": "each"
            }
          },
          [
            "ix:class",
            [
              "work-card"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-0efadd89"
      ],
      "deleted": false,
    },
    {
      "id": "i-52780b4d",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
          {
            "controlType": "scroll",
            "scrollTriggerConfig": {
              "clamp": true,
              "start": "top 95%",
              "end": "top 45%",
              "scrub": 1,
              "enter": "play",
              "leave": "none",
              "enterBack": "none",
              "leaveBack": "none"
            }
          },
          [
            "ix:attribute",
            "[card-rotate]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-44ac41ac"
      ],
      "deleted": false,
    },
    {
      "id": "i-0dc8d28b",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-29db2c52"
      ],
      "deleted": false,
    },
    {
      "id": "i-6d59fa9a",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-9aa936a9"
      ],
      "deleted": false,
    },
    {
      "id": "i-5e21ba94",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[card-scale]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-4081daca"
      ],
      "deleted": false,
    },
    {
      "id": "i-40740b7b",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:class",
            [
              "service-section"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-983d88c9"
      ],
      "conditionalPlayback": [
        {
          "type": "breakpoint",
          "behavior": "dont-animate",
          "breakpoints": [
            "medium",
            "small",
            "tiny"
          ]
        }
      ],
      "deleted": false,
    },
    {
      "id": "i-b3ae966c",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:hover",
          {
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseenter",
              "hover": "each"
            }
          },
          [
            "ix:class",
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
          "ix:hover",
          {
            "control": "reverse",
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseleave",
              "hover": "each"
            }
          },
          [
            "ix:class",
            [
              "frame-overlay"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-ca1d096a"
      ],
      "deleted": false,
    },
    {
      "id": "i-00f7c21b",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-f939c0af"
      ],
      "deleted": false,
    },
    {
      "id": "i-dda2f81e",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-96e0209f"
      ],
      "deleted": false,
    },
    {
      "id": "i-2fa6d379",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[slide-all]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-f3ab1a40"
      ],
      "deleted": false,
    },
    {
      "id": "i-0c90bdb8",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:class",
            [
              "choose-wrapper"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-bacd96af"
      ],
      "conditionalPlayback": [
        {
          "type": "breakpoint",
          "behavior": "dont-animate",
          "breakpoints": [
            "medium",
            "small",
            "tiny"
          ]
        }
      ],
      "deleted": false,
    },
    {
      "id": "i-89632c7d",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[slide-tab]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-7d377b8e"
      ],
      "conditionalPlayback": [
        {
          "type": "breakpoint",
          "behavior": "dont-animate",
          "breakpoints": [
            "main"
          ]
        }
      ],
      "deleted": false,
    },
    {
      "id": "i-efba39a9",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[slide-all]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-c20ee821"
      ],
      "deleted": false,
    },
    {
      "id": "i-9246c2e4",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:click",
          {
            "control": "togglePlayReverse",
            "controlType": "standard",
            "pluginConfig": {
              "click": "each"
            }
          },
          [
            "ix:class",
            [
              "faq-iteam"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-b1a5ab72"
      ],
      "deleted": false,
    },
    {
      "id": "i-e7695e77",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:class",
            [
              "footer"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-1b98e7c4"
      ],
      "conditionalPlayback": [
        {
          "type": "breakpoint",
          "behavior": "dont-animate",
          "breakpoints": [
            "medium",
            "small",
            "tiny"
          ]
        }
      ],
      "deleted": false,
    },
    {
      "id": "i-5a66fe7d",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-644b0c22"
      ],
      "deleted": false,
    },
    {
      "id": "i-a689d5b5",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:attribute",
            "[card-rotate-x]",
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-74aff74b"
      ],
      "deleted": false,
    },
    {
      "id": "i-fcf852a7",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:hover",
          {
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseenter",
              "hover": "each"
            }
          },
          [
            "ix:class",
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
          "ix:hover",
          {
            "control": "reverse",
            "controlType": "standard",
            "pluginConfig": {
              "type": "mouseleave",
              "hover": "each"
            }
          },
          [
            "ix:class",
            [
              "blog-card"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-3c35b23d"
      ],
      "deleted": false,
    },
    {
      "id": "i-d8c91dd2",
      "scope": {
        "type": "site"
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-935b3b57"
      ],
      "deleted": false,
    },
    {
      "id": "i-86fd3066",
      "scope": {
        "type": "pages",
        "value": [
          "6ab6b0eaf15b2aa3caad66ef"
        ]
      },
      "triggers": [
        [
          "ix:scroll",
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
            "ix:class",
            [
              "story-wrapper"
            ],
            {
              "relationship": "none",
              "firstMatchOnly": false
            }
          ]
        ]
      ],
      "timelineIds": [
        "t-c06d925a"
      ],
      "conditionalPlayback": [
        {
          "type": "breakpoint",
          "behavior": "dont-animate",
          "breakpoints": [
            "medium",
            "small",
            "tiny"
          ]
        }
      ],
      "deleted": false,
    },
    {
      "id": "i-8233667a",
      "scope": {
        "type": "pages",
        "value": [
          "6ab6b0eaf15b2aa3caad66e9"
        ]
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-fd4c7b74"
      ],
      "deleted": false,
    },
    {
      "id": "i-774b9e8e",
      "scope": {
        "type": "pages",
        "value": [
          "6ab6b0eaf15b2aa3caad66e9"
        ]
      },
      "triggers": [
        [
          "ix:load",
          {
            "control": "play",
            "controlType": "load"
          }
        ]
      ],
      "timelineIds": [
        "t-95311a0e"
      ],
      "deleted": false,
    }
  ],
  "ix3Timelines": [
    {
      "id": "t-e1a8d0d8",
      "deleted": false,
      "actions": [
        {
          "id": "ta-5b6352ca",
          "targets": [
            [
              "ix:class",
              [
                "menu-line-item._01"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:class",
              [
                "menu-line-item._03"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
              "x": [
                "0%",
                "-100%"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-93890611",
      "deleted": false,
      "actions": [
        {
          "id": "ta-5d0d37bd",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "y": [
                "-100%",
                "0px"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-fbb72daf",
      "deleted": false,
      "actions": [
        {
          "id": "ta-24c6ad12",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "x": [
                "0px",
                "-100%"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-1d28f8da",
      // Hero photo zoom loop, switched off per client: the hero image stays still.
      "deleted": true,
      "actions": [
        {
          "id": "ta-6041f6ab",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "scale": [
                1.2,
                1.05
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-7c272bed",
      "deleted": false,
      "actions": [
        {
          "id": "ta-41d642b6",
          "targets": [
            [
              "ix:class",
              [
                "nav-text.meta-normal"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:class",
              [
                "nav-text.meta-scramble"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:class",
              [
                "nav-text.meta-normal"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:class",
              [
                "nav-text.meta-scramble"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-884198ee",
      "deleted": false,
      "actions": [
        {
          "id": "ta-e6071fd4",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-ab7f5214",
      "deleted": false,
      "actions": [
        {
          "id": "ta-e33b6844",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-605f3400",
      "deleted": false,
      "actions": [
        {
          "id": "ta-adb69297",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-567284fa",
      "deleted": false,
      "actions": [
        {
          "id": "ta-acc076a7",
          "targets": [
            [
              "ix:attribute",
              "[img-anim]",
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-0efadd89",
      "deleted": false,
      "actions": [
        {
          "id": "ta-2c5fdbbe",
          "targets": [
            [
              "ix:class",
              [
                "work-img-hover"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:attribute",
              "[hover-img]",
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:attribute",
              "[hover-img]",
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
              "scale": [
                1,
                1.05
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-44ac41ac",
      "deleted": false,
      "actions": [
        {
          "id": "ta-5b66bdf4",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-29db2c52",
      "deleted": false,
      "actions": [
        {
          "id": "ta-696a38b9",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "rotation": [
                "0deg",
                "360deg"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-9aa936a9",
      "deleted": false,
      "actions": [
        {
          "id": "ta-97111894",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
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
    },
    {
      "id": "t-4081daca",
      "deleted": false,
      "actions": [
        {
          "id": "ta-c9de49af",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
              "scale": [
                0.9,
                1
              ]
            }
          }
        }
      ],
      "canvasDuration": 1,
    },
    {
      "id": "t-983d88c9",
      "deleted": false,
      "actions": [
        {
          "id": "ta-bcde2640",
          "targets": [
            [
              "ix:class",
              [
                "service-sticky"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
              "x": [
                "0vh",
                "-300vw"
              ]
            }
          }
        }
      ],
      "canvasDuration": 1,
    },
    {
      "id": "t-ca1d096a",
      "deleted": false,
      "actions": [
        {
          "id": "ta-1ea0cb34",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
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
    },
    {
      "id": "t-f939c0af",
      "deleted": false,
      "actions": [
        {
          "id": "ta-d1202d65",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "x": [
                "0px",
                "-100%"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-96e0209f",
      "deleted": false,
      "actions": [
        {
          "id": "ta-dfbfd04a",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "x": [
                "0px",
                "100%"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-f3ab1a40",
      "deleted": false,
      "actions": [
        {
          "id": "ta-bebf9218",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-bacd96af",
      "deleted": false,
      "actions": [
        {
          "id": "ta-b8663475",
          "targets": [
            [
              "ix:class",
              [
                "choose-bottom"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
              "ix:class",
              [
                "frame-01-wrap"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
              "y": [
                "80%",
                "0%"
              ]
            }
          }
        }
      ],
      "canvasDuration": 1,
    },
    {
      "id": "t-7d377b8e",
      "deleted": false,
      "actions": [
        {
          "id": "ta-793514f4",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-c20ee821",
      "deleted": false,
      "actions": [
        {
          "id": "ta-1c38fc04",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-b1a5ab72",
      "deleted": false,
      "actions": [
        {
          "id": "ta-48a49929",
          "targets": [
            [
              "ix:class",
              [
                "faq-text-wrap"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
                  ""
                ],
                "firstMatchOnly": false
              }
            ]
          ],
          "tt": 2,
          "properties": {
            "ix:transform": {
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
              "ix:class",
              [],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
                  ""
                ],
                "firstMatchOnly": false
              }
            ]
          ],
          "tt": 2,
          "properties": {
            "ix:transform": {
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
              "ix:class",
              [
                "faq-icon"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
                  ""
                ],
                "firstMatchOnly": false
              }
            ]
          ],
          "tt": 2,
          "properties": {
            "ix:transform": {
              "rotation": [
                "0deg",
                "45deg"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-1b98e7c4",
      "deleted": false,
      "actions": [
        {
          "id": "ta-4ced8012",
          "targets": [
            [
              "ix:class",
              [
                "footer-img"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-644b0c22",
      "deleted": false,
      "actions": [
        {
          "id": "ta-ce3a0d14",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "x": [
                "0px",
                "-100%"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-74aff74b",
      "deleted": false,
      "actions": [
        {
          "id": "ta-af92504a",
          "targets": [
            [
              "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-3c35b23d",
      "deleted": false,
      "actions": [
        {
          "id": "ta-e938aeb0",
          "targets": [
            [
              "ix:class",
              [
                "blog-img"
              ],
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
              "scale": [
                1,
                1.1
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-935b3b57",
      "deleted": false,
      "actions": [
        {
          "id": "ta-bcaeaa6a",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
              "x": [
                "0px",
                "-100%"
              ]
            }
          }
        }
      ],
    },
    {
      "id": "t-c06d925a",
      "deleted": false,
      "actions": [
        {
          "id": "ta-27165d40",
          "targets": [
            [
              "ix:attribute",
              "[story-img]",
              {
                "relationship": "within",
                "filterBy": [
                  "ix:trigger-only",
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
            "ix:transform": {
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
    },
    {
      "id": "t-fd4c7b74",
      "deleted": false,
      "actions": [
        {
          "id": "ta-b1ea4f77",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
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
              "ix:class",
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
            "ix:transform": {
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
              "ix:class",
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
            "ix:transform": {
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
              "ix:class",
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
            "ix:transform": {
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
              "ix:class",
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
            "ix:transform": {
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
            "ix:transform": {
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
    },
    {
      "id": "t-95311a0e",
      "deleted": false,
      "actions": [
        {
          "id": "ta-3e7ff573",
          "targets": [
            [
              "ix:class",
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
            "ix:transform": {
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
              "ix:class",
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
            "ix:transform": {
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
    }
  ]
} as const;
