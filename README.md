# Comet Bingo

This is an old project that i made for fun. It's essentially a highly personal version of https://shit-taste.net/ with a core new feature: A scoring system. In other words, Comet Bingo is a collection of bingo cards which are scored based on the results of a contest from [AnimeBracket](https://animebracket.com/), more specifically, the [Best Girl 8 Contest](https://animebracket.com/best-girl-8-salt-is-war/results). The scoring rules were mostly defined by a dear friend of mine.

Looking back into it, this project was really fun and it's actually a better project than i remember. Yeah, the layout is kind of weird, especially on really large or small breakpoints, but i thought that 2021 me was way worse than that.

If you want to run this project locally... for some reason... here are the envionment variables. I don't know why they're environment variables in the first place so here you go. I don't have access to any other backend environment and the contest url is certainly not a sensitive piece of data, so i'll likely change it to plain constants whenever i feel like doing so.

```env
REACT_APP_CONTEST = best-girl-8-salt-is-war
REACT_APP_BACKEND_URL = https://animebracket.com/api/
```

As for future plans, i don't plan on doing anything special for Best Girl 9, but i might go all the way with Best Girl 10. I'll probably use another library or framework (or, at the very least, something like Next.js instead of create-react-app) and even make a proper backend for it. Maybe i'll make this thing bug free and see if r/anime likes the idea. With that said, for now, this repo is just a piece of legacy code, but a precious one at that.
