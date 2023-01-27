---
title: Creating Effective On-Call Workflows
date: 2023-01-14T11:10:00.000Z
people:
  - bianca-costache
descriptions:
  short: Discover a sustainable and data-driven on-call framework.
  full: >-
    Being on call can be a tiring and thankless task, and while the on-call
    process depends on each team setup, the on-call pain is the same for
    everyone. Building sustainable practices is critical in keeping your team
    positive and productive. This talk will walk you through a data-driven
    on-call framework that you an apply for your own teams leading to a happier,
    healthier on-call process. We’ll also reflect on how it works in-practice
    over a long period.
type: video
vimeo: 790477107
duration: 29
cover: >-
  https://i.vimeocdn.com/video/1590374443-d187b3fac7a433940908231c0de57a66c96240bd234d99b661436bfd6470ce6f-d
---

Thank you. As Suze is mentioning, I'm here today to discuss about the mental model that my teams and I have used throughout the years helping us to reduce the on-call pain and interactions. Either you are a manager, or a software engineer, or even a student, I do hope and believe that every one of you in the arena gets to learn something and maybe apply later, being inspired from this presentation. 

Now, to make sure we start from the same baseline, first things first, what is on-call? And, for some of you, this makes your mind go immediately to Scrubs, or Grey's Anatomy, let me say you're not that far. Being on call and software engineer meanings making yourself available to be able to tackle any incoming production issues that your team services are encountering, and being able to do this in a timely manner. 

This kind of role is basically second nature for engineering roles at companies that build and run their own products, and they do so with great care and detail of the user experience, so they cannot wait from one day to another to tackle a production issue, but rather make sure that these issues are addressed on a timely manner. 

There are tons of materials and practices that are done by teams in the whole industry, so I invite you to explore, if you haven't done is to, and see how different teams and companies go about that. 

When it comes to Adobe, we have a long history with on-call, and what we call as the unionified engineering culture, meaning that each engineering team, and each engineer in particular gets to be primary on-call for the set services that their team is owning, and running in production. 

This means there is no separation of concern here, regardless of the background that engineer has, more on the development side of things, or testing, or site's reliability engineering, everyone is part of the same journey. 

Since we have so many teams, and such different products in the business domain, it is fair to say that while we do adopt the same framework, there is a diversity of implementation, so if you look at Adobe teams, you can find a diverse set of implementations, starting from the daily schedules that are teams that do this following the sun, meaning that they are just primary on-call and another team from another geography takes over, but there are teams that do this on a 24/7 schedule. Of course, this is constrained according to time frame. 

The common set-up is to have weekly on-call rotations, and the other particularity that might appear from one thing to another is with this respect to the roles and the set of responsibilities that the engineers get to have throughout their on-call, depending on the on-call logged, you might be 100% involved in the action, items that you need to take, so address production issues, or if you have a smoother on-call, you might be able to do other things as well. 

As far as I'm concerned, I would say that I've been in a close relationship with on-call, especially since I started my journey here at Adobe six years ago. As I have been contributing to a diverse set of critical services that are deployed worldwide, and served billions of requests per day to a different set of customers and industries. 

So, from my both roles as a software engineer, and lately as an engineering manager, I got to experience every side of being on call, and I have learned a lot. 

That's why today I want to share a part of that learning journey with you. And that journey that I'm going to show case today through the medium of the story of one of my teams is related to the ways on-call can be painful, and the importance of caring about this, and the eventual impact that it can have on your team members. 

And when I say "on-call pain", basically I refer to the amount of interactions that on-call produces, especially during outside working hours. Be it sleep interactions, movie time, family time, and even doing nothing time, this without being taken care of can negatively impact both your mental and physical health, so that is why at the end of the day no-one can blame people for leaving environments that not only expose them to such a schedule, but also to not empower them to make it better. Before digging into the case study and the mental model, I do want to clarify first what I mean by effective on-call workloads, and what we aim for throughout the past years. 

First I would say what I don't mean by that meaning having teams experimenting a continuous cycle of alerts, triggering especially during the outside hours, piling up with an extreme sense of sleepless hours, anxiety, and what not, and at the end the team experiencing a sense of helplessness, let's say, because this is not getting better. 

What I mean by an effective on-call workflow in my experience is a date-driven and an iterative process that helps the team find the right space for continuous learning and improvement while showcasing itself to reduce the amount of on-call interactions, and also including each team member's part of the process. 

So that they are empowered every time they are primary on-call engineer, they're empowered to be accountable for the issues they are responsible to solve, and also empowered to take action to solve them. 

Throughout the presentations, I'm going to borrow a mental model from the book Start with Why, which gravitates around the idea that every action we take as an individual or group is tightly connected with our internal values, and how we are as people. 

So, for the rest of the slides, I'm going to tell our story, and guide you through how to identify the why and the needs of your team and yourself to go with a new change and a new process, how to go about the implementation and, lastly, how to reflect on the results and what to do next. 

Let's start with why and how this story started to shape two years ago. The case study that I'm presenting today is related to one of the Edge teams at Adobe, and we call them Edge because they are responsible for real time data collection services that are deployed worldwide, are associated with a lot of nights in terms of availability, so everything needs to happen fast, everything needs to be reliable, so that all the services that depend on our capabilities get the right amount of capabilities. 

So it is needless to say for such a team and for such a suite of services, should the production outage occur, all eyes would be on us, and then on-call would start to get involved. With this particular team, there was a special context two years ago, actually, three years ago, since the pandemic has started. 

On-call back then was the hot topic that never ceased to appear in day-to-day discussions, team retrospectives, one-on-ones, and needless to say, there was something there. 

First of all, the beginning of the pandemic made us go completely remote and work from home, and made us adapt the ways we used to collaborate and even solve these on-call issues together. 

Also, the pandemic brought a dramatic increase of the traffic and the number of customers our services needed to serve because most of the companies turning to digital solutions for the digital marketing area, the one that we as a team were part of, speaking of the business domain. Another important aspect back then was the fact that this was also related to the organisation that my team and I were going through. 

We basically became the sole owners of these services suite, so we didn't have another team in a different geography to rely on or follow the sun on-call. We had to do 24/7 on-call. 

And what is more is the fact that part of this reorganisation meant that half of the team members were new. Myself, included, since this was my first team as an engineering manager. So all sets of challenges. 

And if I look at the on-call stats back then, there are a lot of numbers that that we could depict, but the primary one was the amount of, the high amount of sleep interruptions that the team experienced throughout an on-call shift, which was weekly based. 

And the metric we started to look at more carefully was the one that we called the meantime to fall asleep again. With each sleep interruption, some of the team members couldn't experience a healthy amount of sleep.

So by now, you would say, having this context, that, well, we as a team have the right data to take control, and do whatever we needed to do to address these issues. But, this is what I'm, why I'm exactly here for, to showcase when this is actually not that straightforward to tackle. 

I'm going to confirm by a statement which I completely resonated with from one of Charity Majors articles which said that on-call is a social-technical problem, and basically connects to the previous presentation from You Got This. 

We don't only work with systems, software, hardware, we work with people, and, in this context, on-call is being operated by people, and it is highly influenced by them, their values, their emotions, and their needs, and when it comes to our needs, there are two main needs that we as human beings need to have regardless of what action and whatever we engage in.

First is the need of having a sense of security, and this is always threatened by a fear, and the second important need that we need to have fulfilled is having a sense of satisfaction. Which is always enhanced by a sense of inner power. 

In my experience, on-call is quite linked to both. In our team's case, the social part of the problem was hydrated by two main sources of fear. 

The first was lacking in enough for this knowledge, and this happened especially for the newcomers in the team, that had to adapt to the amount of complexity and legacy knowledge that they needed to ramp up on to be effectively contributing to the team set-up, and also the on-call. 

And the other one which is basically related more to the anxiety that being accountable, especially while being primary on-call, for a huge codebase that might turn into an alert every time, maybe even during the night, and having the sense of not having captured enough knowledge in order to be the only one that those how to solve that issue. 

What we experienced back then was also well known as the bus factor which is another term that the previous presentation covered, but as creepy as it may sound, this is also known as the minimum number of people in your team that should they be hit by a bus, your project and your team would be over. 

In our case back then, this number was one for a lot of critical areas of our services. This meant only one engineer knew most of what was being developed there, how it works, and most importantly, what it takes to intervene during that on-call duration. 

This also created a habit of the team, because regardless of who was on call, that specialised engineer, what they call the alert, because in the short run, it seems to fulfil our needs faster. The issue was solved, nothing got hurt in the process, and the alert disappeared. 

However, in the long run, this did nothing but increase the knowledge gap that we had in the team, so it hydrated even more our two main sources of fear which consistently created a sense of insecurity, and anxiety produced by being on-call in this team. 

So, having these conclusions together through a lot of team retrospectives, one-on-ones, and closely analysing what it meant for each team member to be part of the context, we gained the right amount of clarity to understand what we can do next. 

And ultimately, if I look back at all the experiments we've done, because, to be honest, what I'm presenting today is nothing more than the result of multiple iterations, experiments on how to develop an on-call process that works for us, but the constant that we have had along these years is that we've tried along the way to build how the team habits help us take action in the direction that we wanted to go through. 

And when I talk about habits, my mind immediately goes to the Atomic Habits book, and I've been using it a lot in both — the only ones that stick are tied to your identity, what you need, and what are your values. The same thing applies to teams. 

So, we tried to create the four steps of a new habit by the book outlines, which are the following: whenever you want to create a new habit, and make sure that you do what you're saying to do, you need to ensure that it is obvious what you need to do. 

You make it attractive and easy along the way, and at the end, it is satisfying so do that. So, to make it obvious, for us, it was clear that we had a lot of issues, a diverse set of root causes, and a lot of action items that we needed to prioritise. 

To make them obvious and easily identifiable, we created a designated backlog which we called on-duty, and made sure every time we had this in our team role map, regardless of the product, and other things that the team needed to accomplish. 

As James Clear said in his book, the best way to create a new habit is to pair it with an existing one. We basically paired the role of being primary on-call with the role of being the on-duty engineering. 

That means that if you were to be primary on-call in our team, your first priority would still remain to respond to incoming alerts and solve that issue, but if you had time between these interventions, you would get to work on these continuously prioritised and clarified backlog. 

This helped us in the long run to remove the subject matter expert zone, meaning everyone in the team would get to experience a diverse set of problems during the on-call, and rather be guided by the ones that already had the knowledge. 

Ultimately, this helped us to decrease the knowledge gap amongst our team members. To make it attractive, not only did we introduce this on-duty backlog, but also introduced the kind of power moaning that only the team had the right and the complete control to define this backlog, and prioritise it. 

From one on-call week to another, everyone needed to be on top of what are the main sources of pain today, and what we can do as an empowered team can do to solve them further. Of course, we needed some easy ways to do that, and because we had a lot of services to deal with, and a huge amount of knowledge, we started to run on code-review session s at the end of each on-call session. 

After 30 minutes, we have basically spent our time together to clarify what were the main sources of on-call incidents we got to experience, what we can learn from them, and what action items we need to prioritise as part of the on-duty backlogs to reduce the amount of on-call pain and load. 

And because we needed a second brain, we had a lot of information being discussed and decided, we have decided to aggregate an historical on-call log. 

Initially, we started writing on-call mementos, putting them in wikis, or documents, but throughout the iterations, we have discovered that we need a more clever way to do that. 

We need a log that is easily searchable, we can do some computations, statistics, so, as a team, we started with simple tools, like Office tools from using forms to submit data, using spreadsheets to make this analysis and further extraction, but there are also tools like Pager Duty, and others that can do this on behalf of your team. 

So it really depends on what you have access to, while I'm — what I'm telling you is I'm sure there is way for you and the team to accomplish this goal. 

Last but not least, to make it satisfying, well, having this second brain, this historical on-call log, it made us easy from one on-call session to another, to look at how our work and effort invested into making the on-call better was actually showcasing in a decreasing trend of number of incidents for a particular service, or area of services, and this visualisation exercise also helped us to prioritise action items, when we were faced with a lot of them, a lot of them coming from a diverse set services, and we needed a straightforward way to prioritise them without sweating too much about it. 

And, again, you can choose from really simple tools like Excel which is really powerful and with data visualisation and computation, and tools like Pagerduty. In the end, for our team, on-call turned into a strategy video game where being on call meant to be on quest by these lines down, and every time we got to witness a recurring pattern of a line being down, that was a moment to call for celebration in our team. 

If I look back at what we have accomplished together, and tried out throughout the years, I think the valuable step and shift that we've done together as a team was to have this conversation in the first place, and to discuss each of us wise, what are our needs, start together to define what we need to do. 

Now, after years of doing this repeatedly, with different forms and shapes, our on-call review sessions have started to not exceed ten minutes any more. 

I recall a special day when the previous preliminary on-call engineer joined the review session and said is that correct well, this one was rather boring, and I don't have anything special to cover today." For us, that was the moment of celebration because it meant that we have finally arrived where we have set ourselves towards to. 

In our case, most of our problems are related to our team set-up, and our habits to be able to not only to control what we already had control of, but to have habits that help us to take action and not leave us into analysis paralysis state, or even so, feeding our bias, towards action, because, as engineers, we are always tempted to start implementing the solution without really identifying the problem. 

With on-call, this is a subject worth taking the time and analysing with the team. As a final thought, I am sure that this is not a recipe, a process, that can be applied 100% in every team context. Most of the time, this social-technical problems that get to be helped with team processes, don't go exactly by the books. 

That's why you need to take the time to involve the team in this process, whether you're an engineer, or a manager, you cannot go alone and decide just from one single perspective what to do next. 

The constants are really changed, when it comes to engineering teams, to developing and maintaining production services, these systems will always need to evolve, and the same applies to the team and the way you grow as a team. And change is hard, you know? 

In my experience, and every team experience, this is not something that is going to solve by the end of the morrow, it requires a serious amount of curiosity and resilience to experiment with. 

But as a final reflection and food for thought that I would like to pass on to you today is the fact that regardless of the challenging situation in the context, it is always good to start with the data. 

If you don't have the data, then that would be the first step, and then use the data to build healthy habits that help you take action on it, and also help you reflect afterwards. Thank you for having me. And I'm more than happy to connect with you further on this topic. 
