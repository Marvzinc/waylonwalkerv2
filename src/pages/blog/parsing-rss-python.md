---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['python']
twitter_announcement: I just dropped a new post check it out.
path: parsing-rss-python
title: 🐍 Parsing RSS feeds with Python
date: 2020-07-13T03:00:00Z
status: published
description: I am looking into a way to replace my google reader experience
    that I had back in 2013 before google took it from us. I am starting by
    learning how to parse feeds with python, and without much previous knowledge
    it proved to be much easier than anticipated thanks to the `feedparser`
    library.
related_post_body: ''
related_post: []
cover: '/static/parsing-rss-python.png'
twitter_cover: '/static/parsing-rss-python.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

I am looking into a way to replace my google reader experience that I had back in 2013 before google took it from us.  I am starting by learning how to parse feeds with python, and without much previous knowledge, it proved to be much easier than anticipated thanks to the `feedparser` library.

## Install

Install the feedparser library.

``` bash
conda create -n reader python=3.8 -y
source activate reader
pip install feedparser
```

## Get the content

```python
import feedparser
feed = feedparser.parse('https://waylonwalker.com/rss.xml')
```

## The feed object

The feed is a feedparser.FeedParserDict.  For all intents and purposes this seems to just behave like a dict with the following `keys()`.

``` python
feed.keys()
['feed', 'entries', 'bozo', 'headers', 'etag', 'href', 'status', 'encoding', 'version', 'namespaces', 'content'])
```

**feed** has some general information about the rss feed, but the meat of the feed is in **entries**.  The rest of the keys weren't all that useful for me at the moment.


## pulling multiple feeds

I grabbed a few popular RSS feeds that I was familiar with to get started.

```python
urls = ['https://waylonwalker.com/rss',
        'https://joelhooks.com/rss.xml',
        'https://swyx.io/rss.xml',
    ]
feeds = [feedparser.parse(url)['entries'] for url in urls]
```

I checked out the keys, all three had the following keys.  Mine also had the full post under `'content'`, this is because I added an extra `custom_element` for publishing to `dev.to` from an RSS feed.

``` python
feeds[1][0].keys()
>>> dict_keys(['title', 'title_detail', 'summary', 'summary_detail', 'links', 'link', 'id', 'guidislink', 'published'
, 'published_parsed'])
```


## NOTE: dev.to/feed

I also pulled the [dev.to/feed](https://dev.to/feed).  Since is it setup for more Authors it had a few extra keys.

``` python
feedparser.parse('https://dev.to/feed')[0].keys()
>>> dict_keys(['title', 'title_detail', 'authors', 'author', 'author_detail', 'published', 'published_parsed', 'links
', 'link', 'id', 'guidislink', 'summary', 'summary_detail', 'tags'])
```


## Combining Feeds

Now that I have a list of feeds, I can create a single feed sorted by date with a list comprehension.  Note I did need to pull in `dateutil.parser` to convert the date strings to datetime objects to be sorted.

``` python
import dateutil.parser

feed = [item for feed in feeds for item in feed]
feed.sort(key=lambda x: dateutil.parser.parse(x['published']), reverse=True)
```

```python
[ins] In [115]: [{'title': i['title'], 'date': i['published'], 'link': i['link']}  for i in feed[:10]]
>>>
[{'title': '🙋\u200d♂️ Can Anyone Explain Twitter Cards to me?',
  'date': 'Sat, 11 Jul 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/blog/explain-twitter-cards/'},
 {'title': 'How I Built My GitHub Profile',
  'date': 'Fri, 10 Jul 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/blog/my-github-profile/'},
 {'title': 'Lessons and Regrets from My $25000 Launch',
  'date': 'Fri, 03 Jul 2020 04:06:47 GMT',
  'link': 'https://swyx.io/writing/coding-career-launch'},
 {'title': 'SLIDES - understanding python *args and **kwargs',
  'date': 'Thu, 02 Jul 2020 05:00:00 GMT',
  'link': 'https://waylonwalker.com/blog/python-args-kwargs-slides/'},
 {'title': 'Launching the Coding Career Handbook!',
  'date': 'Wed, 01 Jul 2020 13:08:37 GMT',
  'link': 'https://swyx.io/writing/launching-coding-career'},
 {'title': 'Gracefully adopt kedro, the catalog',
  'date': 'Mon, 29 Jun 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/blog/graceful-kedro-catalog/'},
 {'title': "🤓 What's on your GitHub Profile",
  'date': 'Mon, 29 Jun 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/blog/whats-on-your-github-profile/'},
 {'title': "Versioned Docs in 30 Seconds with Amplify Console's Branch Subdomains",
  'date': 'Fri, 26 Jun 2020 16:34:09 GMT',
  'link': 'https://swyx.io/writing/amplify-console-branch-subdomains'},
 {'title': "What's New in React",
  'date': 'Wed, 24 Jun 2020 00:00:00 GMT',
  'link': 'https://swyx.io/speaking/react-whats-new'},
 {'title': 'Coding Careers - Vincit',
  'date': 'Wed, 24 Jun 2020 00:00:00 GMT',
  'link': 'https://swyx.io/speaking/coding-careers-vincit'}]
```


## Decentralized Feed

I think the idea of RSS is super cool, and the idea that I can potentially create my own custom platform-agnostic decentralized feed is pretty cool.  I would love to have a google reader like experience back.

This post was super fun to explore.  I used an external library (`feedparser`) to pull in the feeds, but other than that It was all vanilla python 3.8.  In DataScience we tend to get very `DataFrame` heavy and I miss working with vanilla datatypes sometimes.
