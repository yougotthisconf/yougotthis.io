---
title: Making Disagreements at Work Productive
date: 2021-01-15
people: ['claire-knight']
descriptions:
  - short: Disagreement don't have to be toxic, how do we make them a positive and productive experience? 
  - full: Do you want to know how disagreements can be positive? How to be respectful while disagreeing? How to get to mutual understanding through productive discussion, and hopefully to agree on a path forward? Then this workshop could be for you! This workshop will be useful not only for code reviews and team discussions but in day to day life beyond tech. Through hands on exercise, you’ll leave the workshop with some extra tools to apply in a variety of situations, already have tried some of them out, and have further resources to look up if you want to explore this more.
vimeo: 666596336
---

CLAIRE: Lovely. Right, so, as Katie has already introduced, this is about making disagreements at work respectful and productive. I will just get started. Okay, so, a little bit about me. Thank you very much for signing up to this, and thanks, Kevin, for involving me in this. You might want to know why you want to listen to me. Well, I've kind of been in tech for quite a long time now. I've spent something like 20 years in tech. I've been an engineer in all sorts of languages, tech stacks, et cetera. I've been a junior engineer, worked my up to being tech lead, et cetera. So I've come across a bunch and seen how tech has changed in the last 20 years, and whilst sometimes it may not feel we're all that respectful, we're quite a lot better than we used to be, and I would love for us to continue to improve. Giving you tips and tricks, and explaining how you can do some things more is something I'm really keen to do. When I joined GitHub, I actually was an engineer, so I've been involved in code reviews at somewhere like GitHub where there is a very high bar on things, and also as a manager now, I've brought on engineers, and educated them and got them used to communicating in a respectful style, so, hopefully, I can convey some of that to you today.

So, there is an URL here, and unfortunately while I'm presenting it, I can't see the chat, but if somebody could paste that into the chat so it is a clickable link, I would super appreciate it. In here is the information that you will need for the two breakouts. I've added a further reading section which is quite tiny at the minute, and I will probably add to that over time. I will also upload the slides, and you can get on those from this year when we get there. This is the URL that you're going to need.

So, let's get started. How can disagreements be positive? Isn't a disagreement an argument? Isn't it fundamentally two opposing sides with whatever? Well, actually, that's not entirely true. Everybody agreeing constantly is also not particularly healthy. People have resentments, and they simmer, they sit on them, and they don't deal with the problems, and then eventually something happens, and there's a massive explosion of emotion, and that is even more counterproductive than having a more controlled disagreement. Also, in software development - there's a lot of things where disagreements is healthy, it helps us make forward progress. So I'm going to talk about some of these things just for a moment before we talk on other reasons for different communication styles.

So, what are positive outcomes? Learning is a big one. Pull request reviews are a big thing in code. And it isn't just about compliance or isn't just about did this person either hit the functional requirements or performance requirements, whatever you're reviewing it for, whatever set-up your company is, but it's also like you learn ways of solving problems that you might not have thought of. You learn language tips and tricks that you might not know. It can be that there is a PR where you understand why I don't understand what you're doing this, couched in a very curious way, and the person can say, "I'm doing this because ..." and therefore you level each other up, and you're sharing the main knowledge. So that is really positive.
A huge one for tech is improved solutions. Whilst there are some folks who do think they know it all - very few, if anybody - knows all of the things all of the time. So, you know, even with my years of experience, I will forget things. I maybe will not know some context. So having somebody challenge me respectfully, and make me think about something I might not have thought about, or forgotten about, or been too busy to think about some edge cases, that really helps improve what I, or they, or together we deliver to the customer. That is really important. We don't just work programmes write programmes for the sake of it unless you're doing it in your own time, we do it to serve a need, to serve our customers. Those might be other devs if you're working in dev tooling, for example, but they're still customers and we want to give them something that works well for their needs, which is important.
Both of those situations like the learning and the improved solutions by having a positive disagreement, you're collaborating, working with people. And that can actually build up some good relationships. I remember getting into a, over time, the situation where I could have a relatively blunt disagreement with one of my colleagues, which is very unique to know the person well before you can do that kind of thing. But building that level of trust, and getting to that level of collaboration, is really freeing, and empowering, because then you can like have a, "What about this? I don't like that" type of conversation with no fear that you're going to upset your colleague, or your friend, or your partner if you're using these techniques outside of work. And that just kind of leads to better outcomes generally. The respect thing is being able to have those conversations, finish the discussion, whatever the outcome is, whoever may or may not be improved right or wrong, whatever you've chosen as the final route forward, and knowing that you still have the ultimate respect for each other, I think it's really important too.

So all of those things are really positive aspects. There is a lot of possibility for disagreement in software engineering. I'm going to cover some common areas of disagreements. Just to give you a flavour. What we will be doing in the breakouts is cover the first two, really, of these two points because the others are more wide-ranging and more than two hours, and more prep on that one.

Common disagreements, design of the solution. This might be in a pull request, depending on the size of it, it might be an ADR - an architecture decision record. It might be some kind of issue-tracking description, you know, a GitHub issue, a ticket, whatever is appropriate. You've come up with a solution, or somebody else has come up with a solution, and somebody else can disagree with that.

Again, there is good and bad reasons for disagreeing. After the design of the solution, the implementation of the solution, it is, like you agree roughly how you're going to go about doing it, and the direction you take will be these high-level objects and do this, but then where you've written some of the functions or methods, again, language-dependent, somebody disagrees with, or you're doing something that will cause, for example, an Empress 1 query in a database which might not be performant or trip over a live system, that's a valid reason for somebody to say, "We need to rethink this," but also saying, "Hey, I don't like this variable name because I don't like that word and it's not an offensive word, it's not a great thing to pick up on for somebody." Common disagreements are also business and technical goals. This is my manager hat coming on - sorry, folks! I've been an engineer. I want to play with the latest hot shiny thing. I want to build something in a new language, or whatever. If we're not hitting what the business goals are, we're not serving the business. Whilst, you know, we can build what we want in our own time, if we have a job, then, we need to serve the business needs, we need to serve our customers. There is also a long-standing disagreement between product and engineering, when and what things are a technical debt, and what do they need to be solved? There is definitely a lot of tension around that in the industry over the years, and many jobs have been in. That is something else we can get disagreements about.

The final one is team dynamics. I'm not going to cover this particularly other than to mention it, because there's way more on this, and in the third meeting, in the repo, there is some stuff about dealing with team friction. The different personalities, different nationalities, all sorts of things, you know, you may - not everybody likes everybody all of the time. What you need to have is to have a working relationship with somebody. But times of stress, I mean, living in a pandemic, it's kind of a stress, even if you think your team is functioning normally. That can make people have bad days and weeks and that can come out in a less than positive way. Those are the sorts of things we need to think about here.

The other thing that I've kind of learned more as I've progressed in my career and done a lot more people things than pure technical things is that, wow, people are hard. They really are! They're incredibly complex, and there are a lot of reasons for that. I'm not a psychology or sociology student. Presumably, there is an absolute ton of reading in that area. Everything I'm going to talk to you about is tech-related here.. the three areas are "Ask versus Guess", personality and customs, company culture, and they all play a part.

Ask versus guess. This was not something I really understood properly until a few years ago, or at least not this term. But there's a situation, or a cultural norms, and those are not related to nationality necessarily, where it's okay saying, "Can you do this for me?" The other person says, "I can't" and both people walk buy from that and that is a perfectly okay interaction.

For folks who try and avoid that kind of rebuttal, then they're going to try to drop hints. Many of which, if you're not used to that kind of communication, you're not going to pick up on. An ask, as I gave an example, I can ask for anything I like, but I'm also okay with being told no. A guess is you try and get to the point where you think it's going to be a yes, or like 90% certain it's going to be a yes, and, the ideal situation for you is that you don't even make the request, you make enough hints that, says, "Would you like me to do x for you?" You go, "Yes, please", and okay. People are generally one or the other of those kinds of person, and they find the other alien and hard to work with.

There is no right or wrong, but knowing what you are and working out what other people are allows you to communicate better with them. I have some colleagues are very guess orientated, so I will go out of my way, especially if I can't read the signals, to say I'm not sure what you're asking of me here. Can you be more explicit. It's okay to say no. Give them that safety blanket. Guessing requires a lot of shared expectations and experiences, dropping hints, and that is actually a skill in its own right, but, they then find ask folks to be rude, blunt, or aggressive, when you don't think you're being aggressive, you're an ask personality.
Ask folks, and I include myself in this, tend to find guessing people frustrating when they're like hinting at what they want, and you're like, I know they want something, but you can't quite work it out! Again, it just is what it is, and it is just learning to work with that. Generally speaking, Western cultures are more ask and Asian cultures are more guess, what I've read on this, but I've worked with a lot of American colleagues who are guess too, so don't relate it to nationality at all, definitely. Just keep this kind of thing in mind, though.

Next one: personality and customs. That is the type of environment that somebody has been brought up in. There is culture and caregiver norms. British, we are taught to queue from an early age. We don't like queue-jumpers. This is important to us. Queue-jumpers will get a lot of harsh looks and tutting. It seems silly to other nationalities. The fact that we care about queuing, and our response to it, but that's just what our parents did, and what our grandparents did, and people pick up on these things. I definitely am very different to my parents now. I've travelled various countries, learned other things, but, it takes a while to expand your horizons, to think differently.

There are also natural tendencies to ask versus guess. As individuals, what our parents did or didn't do. And they're not necessarily kind of related, I would say my mum is more on the guess side of things. And it is again, we can have much better conversations now as I'm an adult rather than a teenager, and I've got more experience, and communication like that, but there is kind of what we potentially call A-type personalities, go-getters, people wanting to move forward, and there are people who spend most of their time trying not to off fend anybody. They just exist, and we need to be aware of them - no right or wrong.

There is explicit versus implicit in communication. For me, this comes usually from a point of forgetting that you need to share context. I don't think it's malice-driven. So, for example, again, something I was talking about with my team, just before Christmas, and one of my colleagues based in Spain is like, "I don't understand that phrase. Can you give me some background on that?" Using idioms when you're not native English speakers, or idioms in your language and you're with non-native speakers of your language. But there there is also assuming somebody knows something when they don't, other than that, like, can you get this thing to me by the deadline? And they would be like, what deadline? And you know, you haven't been explicit enough about that, for example. Just, again, small things, but, you know, it's amazing how so many tiny things can build up into how we can communicate and disagree.

And then finally, in the section Company Culture, again, this is veering slightly off how you would do communication necessarily like tips and tricks, which we will get on to in the breakouts, and there is a cheat sheet at the end for you, but trust in the team and trust in the company leadership matter, and psychological safety is talked about a lot in engineering leadership, and it's vital, actually, to get to high performant teams, which is what every business wants, because they want the best out of their teams but it can really affect how anyone behaves, whether they speak up about something, or pretend they haven't seen it.
That can come over in not having a disagreement that ought to be a disagreement for code reasons, or safety reasons.
Also, what are the cultural norms on interacting? GitHub has an amazing culture where we are very open about saying, "How do I do this thing?" In Slack channels. Not everybody company has that environment. Asking for advice and being able to learn and collaborate is an important part of our culture. Not every company has that. The way people communicate on pull requests, in some companies, can be antagonistic, I've seen and experienced.
You're going to have to work out what you're comfortable with in terms of what you can tolerate, what your boundaries are, but then if you're okay in the company with those boundaries, then working out how to best communicate in the style that is generally used in that company is probably useful to you. You also, again, learn from that for future jobs and future opportunities.
There is also finally how much of a top-down tell set-up a company has. Is it "Do the things I say or else"? Is it, "Work towards this goal any way you see fit"? How empowering is it? How much autonomy do you have? If folks are really feeling pressure, and they don't have autonomy, then they might react in a not so positive way - not excusing that behaviour, just given you current information that you need to bear in mind depending on experience you're going through, and the environment you find yourself in.

Okay, so let's go on to how we handle things. I want - this is the sort of stuff that is probably remembering when we go into the breakouts. So, curiosity - that's a big one. Ask questions. Don't assume you know it all. Don't assume they've given you all the facts you need. If you have a confusion, or you don't understand why something has been done in some way, don't just say, "I think this is wrong," ask them why they've done it that way so you can get some of that information, get some of that context. And seek to understand why somebody's done something the way they have. Very, very few people again act out of malice, but either in what they're giving to you to review, or hopefully you and reviewing it, but, asking open questions are good ways of doing that.

Another important one is empathy: put yourself in the recipient's shoes. I know I have had feedback on pull requests and documents where I've felt, "That stings", or, "What on earth have they written that for?" Think how you feel if you got the feedback you were about to give somebody. Again, this does tie into cultural norms and everything else, because if you're comfortable with a blunt conversation, that is kind of okay, but try and think about the person you're interacting with too. There are cultural sensitivities. People may or may not have had good experiences in these kinds of conversations at previous jobs, or universities and schools, and so forth. Again, you can't control any of this, but it's just something to be aware of, and something that people can learn, grow, and change if they're willing to do that. I mean, you've got to be ready to learn and ready to share your knowledge and opinion. You're not always going to be right, and the other people are not always going to be right. You might not understand why something has been done, you say, okay, I've learned the thing, they explain you like I don't think in solves x, y, and z, so there are lots of ways you can take things forward.

However, you've got to need your limits. There is time to speak up, and there is time to let things go. In code reviews, I would say a lot of the things that you probably ought to let go are things to be arguing about semicolons, spaces, and tabs and things - have a linter. They're not things to waste energy and capital arguing with somebody on and potentially ruin a working relationship. You also have got to be realistic. There are times we need to build technical solutions that are not academically ideal because we have deadlines and business goals to meet.

Also, the business needs to be a business. It needs to survive. There will be things that you may not agree with in that area. Again, you need to know your own boundaries on that one.

Going into conversations, when you go into that disagreement, or potential disagreement, what is the outcome that you would like to get? If you're going into that to be argumentative - I've met people like this - then maybe don't, but also, like, if you're saying I'm trying to get PR to the best state it is, that can be in the back of your mind, and you can even say to them, "I don't get this, but I want us to deliver a really good solution," and then you can - they can see where you're going, they know where you're going, and they can tell you, and get a good conversation going.

So, this is kind of a really useful thing before we go into the first exercise, that is used, it is good to remember that really you're trying to build relationships. There are humans involved here. It - we're in tech but it isn't all machines and code. Positive disagreements can moving everybody forward and help the business. Also, those relationships grow over time, and they make further communication easier, so there is less thinking involved, and you know you can say certain things to certain people, and you get to learn each other's styles, and so forth.

So keep that in mind along with the kind of empathy and aspects of it as we go into the exercise.