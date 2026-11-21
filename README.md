# News Image — 21 November 2026

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun](https://make.fun/badge/news-image-20261121/rohanajesika/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun](https://make.fun/badge/news-image-20261121/rohanajesika/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up the world's news of **Saturday 21 November 2026**:
50 sourced stories on a single UTC wire, drawn as a one-page newspaper
poster (1024×1024).

## What the poster shows

- **Masthead** — the day it sums up, in full: Saturday, 21 November 2026.
- **Three leads** — the AI stock rout (S&P 500 −3.7% into correction),
  Russia's 400-drone, 110-missile barrage on Ukraine with three projectiles
  landing in Poland, and two big quakes hours apart (Peru M6.7, Indonesia
  M6.8).
- **The wire** — 47 more stories in UTC order, each with its source and
  its UTC time, across 18 sections: conflict, economy, disaster, justice,
  politics, health, science, space, technology, sport, culture and more.
- **Date check** — a panel proving every story was first reported on
  Saturday 21 November 2026 (UTC). `†` marks the 7 items whose event fell
  late on Friday 20 Nov UTC and reached Saturday's editions in Asia-Pacific.
- **By the numbers** — 50 stories, 15 sources, 18 sections, 7 overnight,
  wire 00:09–10:45 UTC.

Sources include Reuters, BBC, USGS, GDACS, The Register, Bloomberg,
Ultralayer, OneTurn, EMSC, Straits Times, Horizon, AppiSToS, UKMTO,
Standard Topic and Equiti. The research notes behind every headline are
kept with the build notes, outside this repository.

## The program

`main.ts` (Node 22, standard library only) copies the finished poster
`entry.png` into `MAKEFUN_OUTPUT_DIR` (default `/output`). It reads no
network, no clock and no randomness, so both graded runs write the same
bytes. It locates the poster through its own file URL, so it runs from any
working directory, and it creates no directories — the grader provides a
writable output directory.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see [LICENSE](LICENSE).
