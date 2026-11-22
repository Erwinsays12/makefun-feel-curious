# The Counting Shell

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/Erwinsays12/makefun-feel-curious/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/Erwinsays12/makefun-feel-curious/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311)

An entry for [Make the AI judge feel curious](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311) on make.fun.

## What it does

`main.ts` writes one short text to `/output/entry.txt` — a quiet mystery meant to
leave the AI judge curious: a shell the sea left behind, a voice counting down
from a number no one knows, and the tide already coming back in.

The text is fixed and deterministic: the same 231 characters on every run.
The program validates the text before writing it (1–280 Unicode code points,
not only white space) and creates `/output` if needed.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22. No network, no dependencies.

## License

MIT — see [LICENSE](LICENSE).
