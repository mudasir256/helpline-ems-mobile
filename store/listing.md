# Helpline Staff — store submission pack

Everything to paste into Google Play Console and App Store Connect. Items marked **TODO** need a value only you have.

| | |
| --- | --- |
| App name | Helpline Staff |
| Android package / iOS bundle ID | `com.helpline.staff` |
| Version | 1.0.0 |
| Category | Business |
| Price | Free |
| Privacy policy URL | **TODO** — host `privacy-policy.md` (e.g. `https://helplinewelfaretrust.org/staff-privacy`) |
| Support URL | **TODO** — e.g. `https://helplinewelfaretrust.org/contact` |
| Support email | **TODO** |

## Listing text

**Short description** (Play, 80 max)

> Check in, check out and send daily reports for Helpline Welfare Trust staff.

**Subtitle** (App Store, 30 max)

> Attendance and daily reports

**Promotional text** (App Store, 170 max)

> The duty clock for Helpline Welfare Trust staff: check in when you arrive, write your daily report, and check out when the day is done.

**Keywords** (App Store, 100 max)

> attendance,staff,check in,daily report,duty,welfare,trust,employee,timesheet,supervisor,ngo

**Full description** (both stores)

> Helpline Staff is the official attendance and daily-reporting app for employees of Helpline Welfare Trust.
>
> Sign in with the work email and password given to you by your administrator, then:
>
> • Check in when you arrive and check out when you leave — your duty clock shows today's times at a glance.
> • Write a daily report for the project you worked on. Checking out asks for today's report, so nothing is missed.
> • See your assigned projects: schools, vocational training centres, orphan care and welfare programmes.
> • Review your history: past check-in and check-out times, hours on duty, and every report you have sent.
> • Supervisors get a Team view showing who is on duty today and what each person reported.
>
> All times are shown in Pakistan time.
>
> This app is for Helpline Welfare Trust staff only. Accounts are created by the Trust's administrators; there is no public sign-up. If you need an account or a password reset, contact your administrator.

**What's new** (version 1.0.0)

> First release.

## Graphics (in this folder)

| Asset | File |
| --- | --- |
| Play icon, 512×512 | `graphics/play-icon-512.png` |
| Play feature graphic, 1024×500 | `graphics/play-feature-graphic-1024x500.png` |
| App Store icon, 1024×1024 | taken from the build automatically (`graphics/app-store-icon-1024.png` for reference) |
| Play phone screenshots, 1080×1920 | `screenshots/play-store/phone-1080x1920/` |
| Play 7-inch tablet, 1200×1920 | `screenshots/play-store/tablet-7in-1200x1920/` |
| Play 10-inch tablet, 1600×2560 | `screenshots/play-store/tablet-10in-1600x2560/` |
| App Store iPhone 6.9", 1320×2868 | `screenshots/app-store/iphone-6.9in-1320x2868/` |
| App Store iPad 13", 2064×2752 | `screenshots/app-store/ipad-13in-2064x2752/` |

Each folder has the same seven screens, numbered in upload order: Today, Daily report, Check-out report, History, Team, Profile, Sign in. They show fictional demo staff, not real employees.

## Google Play Console answers

**App access** — "All or some functionality is restricted". Add the reviewer login below.

**Ads** — No ads.

**Content rating questionnaire** — Category: Utility / Productivity. Answer "No" to every content question (violence, sexuality, language, drugs, gambling, user-to-user communication, location sharing, purchases). Expected rating: Everyone / PEGI 3.

**Target audience** — 18 and over. Not designed for children.

**Data safety**

- Collects or shares user data: **Yes**. Encrypted in transit: **Yes**. Users can request deletion: **Yes** (via the contact in the privacy policy).
- Shared with third parties: **No**.
- Data collected, all "Collected", "Required", purpose **App functionality** and **Account management**:
  - Personal info → Name, Email address, Phone number, User IDs (employee code)
  - App activity → Other user-generated content (daily reports), Other actions (check-in / check-out times)
- Not collected: location, financial info, messages, photos, files, contacts, device IDs, diagnostics.

**Other declarations** — Not a government app, not a financial app, not a health app, not a news app.

## App Store Connect answers

**Age rating** — answer "None" to everything → 4+.

**App Privacy** — Data collected, all "Linked to the user", "Not used for tracking", purpose **App Functionality**:

- Contact Info → Name, Email Address, Phone Number
- Identifiers → User ID (employee code)
- User Content → Other User Content (attendance times and daily reports)

**Export compliance** — already declared in the build (`usesNonExemptEncryption: false`); the app only uses standard HTTPS.

**Content rights** — does not contain third-party content.

## Reviewer access (both stores)

Both stores reject sign-in-only apps without a working test login. The demo login in the README does **not** work on the production server, so create a dedicated account on the admin dashboard first.

- Email: **TODO**
- Password: **TODO**
- Give it the **Supervisor** role and at least one project, so every tab is visible.

**Review notes** (paste into "Notes for review" / "App access instructions")

> Helpline Staff is an internal tool for employees of Helpline Welfare Trust, a registered welfare organisation in Pakistan. Accounts are issued by the Trust's administrators, so there is no in-app registration. Please use the test account above. After signing in: "Check in" starts duty; "Check out" opens a short daily-report form and ends duty once it is sent. The History tab lists past attendance and reports, and the Team tab (supervisors only) shows today's status for staff on the same projects. The app has no purchases, ads, or tracking.

## Build and submit

```bash
npm install -g eas-cli
eas login
eas init                                   # links the project, adds the projectId to app.json

eas build --platform android --profile production   # .aab for Play
eas build --platform ios --profile production       # .ipa for App Store

eas submit --platform ios --profile production      # uploads to App Store Connect / TestFlight
eas submit --platform android --profile production  # needs a Play service-account key; the first .aab must be uploaded by hand in Play Console
```

EAS creates and stores the Android upload keystore and the iOS distribution certificate on the first build. The production profile points the app at `https://ams.helplinewelfaretrust.org` and increments the build number on every build.

## Before you press submit

1. Rotate the database password and JWT secret exposed in `src/env` (see the note in chat), then remove that file from the repository.
2. Host the privacy policy and fill in its contact email.
3. Create the reviewer account and test it against production.
4. Have a Google Play developer account (US$25 once) and an Apple Developer Program membership (US$99/year). Register them in the Trust's name, with its D-U-N-S number, if the Trust should appear as the publisher.
5. A **personal** Play account created after November 2023 must run a closed test with 12 testers for 14 days before it can publish to production. Organisation accounts are exempt.
6. Apple may ask why a staff-only app is on the public store (guideline 3.2). The review notes above answer that; if it is still refused, the alternative is unlisted distribution or Apple Business Manager.
