[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/toirant/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/toirant/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
# news-image-20261120

**Sum up 20 November's world news in one image** — make.fun bounty, $250 (top 50 share it), free entry.

A newspaper front page, **"THE WORLD IN ONE DAY — FRIDAY 20 NOVEMBER 2026"**, summing up the day's world news in one 1024×1024 image. Compiled from reports filed across the full day of 20 November 2026 (UTC) — the day's outcomes, not the morning's previews. This is the round-2 full-day refresh of the entry.

## The day's stories

- **Lead:** Trump, Xi and Putin's first summit in Shenzhen ends with a four-point peace declaration — on UN reform, energy supplies, court immunity and nuclear risk — that says nothing of Ukraine, Iran or North Korea.
- **Kyiv:** Russia's massive overnight strike — 400+ drones and 110 missiles, three Kyiv bridges damaged, nine killed — hours after the summit.
- Cyclone Akvan makes landfall near Gopalpur, India, and weakens to a depression; no casualties, 372,000 evacuated.
- A tanker is hit by a projectile off Oman and catches fire; a missile strikes Iran's Qeshm Island.
- US Senate votes 51–48 against curbing Trump's Iran war powers; three Republicans break ranks, but the resolution fails.
- Zelenskyy calls for four-party talks — Ukraine, Europe, the US and Russia together — after Europe wins a seat at the negotiations.
- Israel ends its Gaza ground operation; residents return.
- Anthropic slides ~9% on day two after its record Nasdaq debut, closing near $88, barely above the $83 IPO price.
- COP31 talks overrun with no final deal as the fossil-fuel phase-out is dropped from its text; Kerch Bridge rail traffic resumes on one track.
- Also today: Houthis hit four targets in Saudi Arabia; Somalia expels the UAE ambassador; Meta rethinks its 2030 net-zero goal; US auctions first deep-sea mining leases; UN expert hails the ICJ Myanmar genocide verdict; South Korea orders a retrial of ex-PM Han.

## How it runs

`main.ts` (Node 22, standard library only) copies the finished `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`), checks the PNG magic, dimensions (≤ 1024×1024) and size (≤ 1 MiB), and runs with no network. Both runs write identical bytes.

The page itself was composed with PIL (`compose.py` in the build notes, kept with the build workspace); every panel is drawn, not photographed.

## Validation

```
mkdir -p out out2 && MAKEFUN_OUTPUT_DIR=out node main.ts
                       MAKEFUN_OUTPUT_DIR=out2 node main.ts
```

Two runs byte-identical (`cmp` clean), 1024×1024 PNG, 157,052 bytes — well under 1 MiB.

## Deadline

2026-11-22T00:00:00Z (Saturday 21 November, 7:00 PM EST / Sunday 22 November, 1:00 AM WAT).
