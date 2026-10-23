---
title: Settings
description: The settings page at /flowprobe-screenshot-app/settings for managing account preferences.
docwriter_type: concept
docwriter_audience: end-user
docwriter_role_required: null
docwriter_headings: [Preferences]
docwriter_badges: [Settings]
docwriter_rationale: "Driven by the screen at `/flowprobe-screenshot-app/settings` (headings: Preferences)."
docwriter_confidence: 0.975
docwriter_confidence_terms: ["base:confirmed:0.9", "endpoint_observed:0.02", "flow_recorded:0.02", "screenshots:0.012", "ui_labels:0.008", "api_validated:0.015"]
---

## What it is

The **Preferences** screen shows a form for managing account preferences, with theme, language, notification frequency, two-factor authentication, and display name settings. It is part of the manage account preferences feature.

![The Preferences screen with its form fields](/screenshots/flowprobe-screenshot-app-settings-1/0.png)

## Where to find it

On the **Team Dashboard** screen, click **Settings**. The screen is at `/flowprobe-screenshot-app/settings`.

## Fields

| Field | Type | Required | Options |
| --- | --- | --- | --- |
| **Theme** | radio group | no | Light, Dark, System |
| **Language** | select | no | — |
| **Notification frequency** | select | no | — |
| **Enable two-factor authentication** | checkbox | no | — |
| **Display name** | text | yes | — |

- **Display name**: the placeholder reads "Jane Doe".

## Actions on this screen

- **Save**

## Related

- [Manage account preferences overview](../overviews/manage-account-preferences.md) — the feature this screen belongs to.
