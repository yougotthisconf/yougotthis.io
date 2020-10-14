---
layout: content
permalink: api/
title: You Got This API
---

The You Got This API provides GET endpoints to consume data relating to talks, tags and events.

`The base URL is https://yougotthis.io`

## [/talks.json](/talks.json)

Returns all talks from the talk library.

```
[
    {
        "talk": {
            "title": "...",
            "abstract": "..."
        },
        "speaker": {
            "name": "...",
            "bio": "...",
            "twitter": "...",
            "photo": "https://yougotthis.io/assets/img/people/...jpg"
        },
        "url": "https://yougotthis.io/talks/...",
        "video": "https://stream.mux.com/...m3u8",
        "slug": "...",
        "tags": [..., ..., ...]
    },
    {
        ...
    }
]
```

All fields except `speaker.twitter` will always be returned.

## [/talks/:slug.json](/talks/lending-privilege.json)

Returns a single talk from the talk library, based on the talk's slug.

```
{
    "talk": {
        "title": "...",
        "abstract": "..."
    },
    "speaker": {
        "name": "...",
        "bio": "...",
        "twitter": "...",
        "photo": "https://yougotthis.io/assets/img/people/...jpg"
    },
    "url": "https://yougotthis.io/talks/...",
    "video": "https://stream.mux.com/...m3u8",
    "slug": "...",
    "tags": [..., ..., ...],
    "transcript": "<p>...</p><p>...</p>"
}
```

All fields except `speaker.twitter` and `transcript` will always be returned.

## [/tags.json](/tags.json)

Returns all tags used for talks.

```
[
    ...,
    ...,
    ...
]
```

## [/tags/:tag.json](/tags/self-care.json)

Returns all talks from the talk library which have the provided tag.

```
[
    {
        "talk": {
            "title": "...",
            "abstract": "..."
        },
        "speaker": {
            "name": "...",
            "bio": "...",
            "twitter": "...",
            "photo": "https://yougotthis.io/assets/img/people/...jpg"
        },
        "url": "https://yougotthis.io/talks/...",
        "video": "https://stream.mux.com/...m3u8",
        "slug": "...",
        "tags": [..., ..., ...]
    },
    {
        ...
    }
]
```

All fields except `speaker.twitter` will always be returned.

## [/events.json](/events.json)

Returns all events, past and present.

```
[
    {
        "name": "...",
        "date": "YYYY-MM-DD",
        "location": "...",
        "tag": "...",
        "url": "..."
    },
    {
        ...
    }
]
```

Tag is only present if it is a valid tag used in the talk library. URL is not always present.
