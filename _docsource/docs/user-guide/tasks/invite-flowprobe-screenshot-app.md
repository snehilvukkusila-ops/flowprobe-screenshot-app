---
title: Invite a team member
description: "Use the /flowprobe-screenshot-app/invite page to send a teammate an invitation with a role, seat limit, access expiry date, and welcome message."
docwriter_type: task
docwriter_audience: end-user
docwriter_role_required: null
docwriter_headings: [Invite a team member]
docwriter_badges: [Invite Member]
docwriter_rationale: "The heading 'Invite a team member' and the 'Invite Member' badge directly name this user goal."
docwriter_confidence: 0.94
docwriter_confidence_terms: ["base:confirmed:0.9", "flow_recorded:0.02", "screenshots:0.012", "ui_labels:0.008"]
---

## Steps

1. Open `flowprobe-screenshot-app/invite`.
2. Enter your teammate's email address in **Email**.
   ![Invite a team member form with some field values hidden for privacy](/screenshots/flowprobe-screenshot-app-invite-1/0.png)
3. Select a role in **Role**.
4. Click **Invite**.

The other fields (**Send welcome email**, **Access expires**, **Seat limit**) are optional.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| **Email** | email | yes |
| **Role** | select | no |
| **Send welcome email** | checkbox | no |
| **Access expires** | date | no |
| **Seat limit** | number | no |

- **Seat limit**: minimum value 0.
