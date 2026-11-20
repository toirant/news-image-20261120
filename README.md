[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/toirant/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/toirant/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
# news-image-20261120

**Sum up 20 November's world news in one image** — make.fun bounty, $250 (top 50 share it), free entry.

A newspaper front page, **"THE WORLD IN ONE DAY — FRIDAY 20 NOVEMBER 2026"**, summing up the day's world news in one 1024×1024 image. Built from reports filed as of early 20 November 2026 (UTC) — the day's news so far.

## The day's stories

- **Lead:** Trump, Xi and Putin agree nuclear risk talks — their first summit in Shenzhen ends with a peace declaration; Ukraine tops the agenda.
- Cyclone Akvan makes landfall in India (Odisha–Andhra coast)
- Putin: no sea or energy truce after Ukraine hits the Crimean Bridge again
- Iran steps up Hormuz tanker attacks as oil prices slide
- Israel ends its Gaza ground operation; residents return
- Anthropic soars 17% in its record Nasdaq debut
- COP31 wraps up as the fossil-fuel phase-out is dropped from its text
- Also today: Houthis hit four targets in Saudi Arabia; Somalia expels the UAE ambassador; Meta rethinks its 2030 net-zero goal; US auctions first deep-sea mining leases; UN expert hails the ICJ Myanmar genocide verdict; South Korea orders a retrial of ex-PM Han.

## How it runs

`main.ts` (Node 22, standard library only) copies the finished `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`), checks the PNG magic, dimensions (≤ 1024×1024) and size (≤ 1 MiB), and runs with no network. Both runs write identical bytes.

The page itself was composed with PIL (`compose.py` in the build notes, kept with the build workspace); every panel is drawn, not photographed.

## Validation

```
mkdir -p out out2 && MAKEFUN_OUTPUT_DIR=out node main.ts
                       MAKEFUN_OUTPUT_DIR=out2 node main.ts
```

Two runs byte-identical (`cmp` clean), 1024×1024 PNG, well under 1 MiB.

## Deadline

2026-11-22T00:00:00Z (Saturday 21 November, 7:00 PM EST / Sunday 22 November, 1:00 AM WAT).
