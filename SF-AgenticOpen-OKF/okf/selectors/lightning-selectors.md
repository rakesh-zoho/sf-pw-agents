---
type: Selector Map
title: Salesforce Lightning Selectors
description: Complete locator library for SF Lightning UI
tags: [selectors, salesforce, lightning, locators]
status: stable
generated: { by: sf-agentic/2.0, at: 2026-08-03T10:00:00Z }
verified: { by: human:admin, at: 2026-08-03T12:00:00Z }
stale_after: 2026-11-03
---

# Global Navigation

| Element | Selector | Notes |
|---------|----------|-------|
| App Launcher | `[title="App Launcher"]` | First match |
| Setup Gear | `[title="Setup"]` | Lightning only |
| User Menu | `.setupgear` | Profile dropdown |

# Lead Object

| Element | Selector |
|---------|----------|
| First Name | `input[placeholder="First Name"]` |
| Last Name | `input[placeholder="Last Name"]` |
| Company | `input[placeholder="Company"]` |
| Lead Source | Picklist via `selectPicklist('Lead Source', value)` |

# Account Object

| Element | Selector |
|---------|----------|
| Account Name | `input[placeholder="Account Name"]` |
| Phone | `input[placeholder="Phone"]` |
| Website | `input[placeholder="Website"]` |

# Opportunity Object

| Element | Selector |
|---------|----------|
| Opportunity Name | `input[placeholder="Opportunity Name"]` |
| Stage | Picklist via `selectPicklist('Stage', value)` |
| Close Date | `input[placeholder="Close Date"]` |

# Case Object

| Element | Selector |
|---------|----------|
| Subject | `input[placeholder="Subject"]` |
| Status | Picklist via `selectPicklist('Status', value)` |
| Priority | Picklist via `selectPicklist('Priority', value)` |
| Origin | Picklist via `selectPicklist('Case Origin', value)` |

# See Also

- [Page Objects](/patterns/page-objects.md)
- [Framework Rules](/patterns/framework-rules.md)