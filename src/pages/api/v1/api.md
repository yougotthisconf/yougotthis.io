---
layout: content
permalink: api/
title: You Got This API
---

The You Got This API provides GET endpoints to consume data relating to talks, tags and events.

`The base URL is https://charlie.yougotthis.io`

## [/talks.json](/talks.json)

Returns all talks from the talk library.

```
[
  {
    "talk": {
      "title": "Lending Privilege",
      "abstract": "Diversity and inclusion have become hot topics in technology, but you may not know how you can make a difference. However, this talk will help you understand that, no matter your background, you have privilege and can lend it to underrepresented groups in tech."
    },
    "speakers": [
      {
        "name": "Anjuan Simmons",
        "bio": "Anjuan Simmons is a technologist with a successful track record of delivering technology solutions from the user interface to the database. He is an energetic and informative speaker who presents at conferences, seminars, schools, and community centers around the world on topics including Agile software development, diversity, and leadership. Anjuan has an undergraduate degree in electrical engineering from the University of Texas at Austin and an MBA from Texas A&M University.",
        "twitter": "anjuan",
        "photo": "https://yougotthis.io/assets/img/people/anjuan-simmons.jpg"
      }
    ],
    "url": "https://yougotthis.io/talks/lending-privilege",
    "video": "https://stream.mux.com/wVycZfv2JAhfI01GoeE8SSvUvCPHLyPrreeUwSK02PE4s.m3u8",
    "slug": "lending-privilege",
    "tags": ["you-got-this-2020-from-home", "diversity-accessibility-&-inclusion", "talk"]
  },
  {
    ...
  }
]
```

All fields except `speakers[i].twitter` will always be returned.

## [/talks-flat.json](/talks-flat.json)

Returns all talks from the talk library without nested data. Good for learning.

```
[
  {
    "talk_title": "Lessons Learnt (Hardly) Working From Home",
    "talk_abstract": "The whole world shook when the pandemic took over and completely changed the way we live our lives. Travelling, socialising, working from the office - just basic everyday things stopped dead right in their tracks. Those of us who're able to work from home have been really lucky to do so and to have the support from the companies we work for. This experience is hard, especially for new hires to navigate and that preparation a commute gives us before we start work, gets substituted into a new routine or habit we need to take responsibility for. Our talk offers experiences, lessons and advice in hope that it encourages others and lets them know that even though it feels hard, you got this and you are not alone.",
    "speaker_1_name": "Massi Mapani",
    "speaker_1_bio": "Massi Mapani graduated from the University of the Witwatersrand, Johannesburg, South Africa and currently working at American Express UK. She has an interest in writing, coding and financial technology. Medium writing (@africanmillennialconcepts) articles since August, 2020 on Immigration, Relocation and Fintech to provide content to better financial institutions services for the public.",
    "speaker_1_twitter": "mas_mapani",
    "speaker_1_photo": "https://yougotthis.io/assets/img/people/massi-mapani.jpg",
    "speaker_2_name": "Shivangi Sareen",
    "speaker_2_bio": "Shivangi Sareen graduated in 2019 from Trinity College Dublin and moved to the UK to start at American Express. The experience has facilitated meeting talented people and acquiring knowledge in new technology domains. She writes a technical blog (Medium: @shivangisareen) and recently started blogging on her path to achieving a more sustainable lifestyle (Medium: @the-sustainable-edit). She jumps at the prospect of learning new things.",
    "speaker_2_twitter": "SareenShivangi",
    "speaker_2_photo": "https://yougotthis.io/assets/img/people/shivangi-sareen.jpg"
    "url": "https://yougotthis.io/talks/lessons-learnt-hardly-working-from-home",
    "video": "https://stream.mux.com/qS5a9oqOvRF006492h53oGTrrvqV5BkRKJsW01Fl4IcV8.m3u8",
    "slug": "lessons-learnt-hardly-working-from-home",
    "tags": "you-got-this-from-your-couch,professional-development,talk"
  },
  {
    ...
  }
]
```

All fields except `speakers_i_twitter` will always be returned.

## [/talks/:slug.json](/talks/lending-privilege.json)

Returns a single talk from the talk library, based on the talk's slug.

```
{
  "talk": {
    "title": "Lending Privilege",
    "abstract": "Diversity and inclusion have become hot topics in technology, but you may not know how you can make a difference. However, this talk will help you understand that, no matter your background, you have privilege and can lend it to underrepresented groups in tech."
  },
  "speakers": [
    {
      "name": "Anjuan Simmons",
      "bio": "Anjuan Simmons is a technologist with a successful track record of delivering technology solutions from the user interface to the database. He is an energetic and informative speaker who presents at conferences, seminars, schools, and community centers around the world on topics including Agile software development, diversity, and leadership. Anjuan has an undergraduate degree in electrical engineering from the University of Texas at Austin and an MBA from Texas A&M University.",
      "twitter": "anjuan",
      "photo": "https://yougotthis.io/assets/img/people/anjuan-simmons.jpg"
    }
  ],
  "url": "https://yougotthis.io/talks/lending-privilege",
  "video": "https://stream.mux.com/wVycZfv2JAhfI01GoeE8SSvUvCPHLyPrreeUwSK02PE4s.m3u8",
  "slug": "lending-privilege",
  "tags": ["you-got-this-2020-from-home", "diversity-accessibility-&-inclusion", "talk"]
}
```

All fields except `speakers[i].twitter`, `transcript` and `talk.original_title` will always be returned.

## [/tags.json](/tags.json)

Returns all tags used for talks.

```
[
  "diversity-accessibility-&-inclusion",
  "ethics-in-tech",
  "it-matters-online-2020",
  "managers",
  "professional-development",
  "self-advocacy",
  "self-care",
  "talk",
  "working-with-others",
  "you-got-this-2020-from-home",
  "you-got-this-birmingham-2020",
  "you-got-this-from-your-couch",
  "you-got-this-london-2019"
]
```

## [/tags/:tag.json](/tags/self-care.json)

Returns all talks from the talk library which have the provided tag.

All fields except `speakers[i].twitter` will always be returned.

## [/events.json](/events.json)

Returns all events, past and present.

```
[
  {
    "name": "You Got This From Your Couch",
    "date": "2021-01-15",
    "location": "London, UK ??? Online",
    "url": "https://couch.yougotthis.io",
    "tag": "you-got-this-from-your-couch"
  },
  {
    ...
  }
]
```

Tag is only present if it is a valid tag used in the talk library.
