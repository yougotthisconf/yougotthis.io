## You Got This!

You Got This was an initiative to provide resources and spaces to discuss core skills. While I announced that You Got This is coming to a close, it was important to me that the content was presereved in a way that won't be jeopardized for lack of ongoing funding.

All content has is [linked and categorized here](https://lws.io/you-got-this). Thank you again to all of the contributors to this project over the 5 years it ran.

---

This platform is a Nuxt 2 project with Nuxt Content v1. You will need to know Vue.js to contribute to the platform, but content is written entirely in markdown and does not require knowledge of Vue.js.

## Set Up

The suggested way to get started with contributing to either content or the overall paltform is through using GitPod.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yougotthisconf/yougotthis.io)

You can also manually set up this project locally:

```
# Clone this repo
https://github.com/yougotthisconf/yougotthis.io.git

# Enter the directory
cd yougotthis.io

# Install depdendencies
npm install

# Serve with live reload
npm run dev

# Build for production
npm run generate
```

## Core Concepts

| Concept | Description | Related Files |
| --- | --- | --- |
| People | Speakers at events, attached to library items and EventSession components | `content/people`<br>`pages/people`<br>`components/people`<br>`components/events/EventSession.vue` |
| Events | Event listings and pages | `content/events`<br>`pages/events`<br>`components/events` |
| Library | Articles and videos. Has people. Can have sponsors. | `content/library`<br>`pages/library`<br>`components/library` |
| Collections | Groups of library items. Can have sponsors. | `content/collections`<br>`pages/collections`<br>`components/collections` |
| Sponsors | Orgs that support You Got This | `content/sponsors`<br>`pages/sponsors`<br>`components/sponsors` |
| Merch | Merch listing and pages | `content/merch`<br>`pages/merch`<br>`components/merch` |

## Contributing

We always welcome contributions to further improve the You Got This platform, or to edit/improve content. To participate, you must abide by the [You Got This! Code of Conduct](https://yougotthis.io/conduct).

Before contributing, please take a look at our [contributing guidelines](/.github/CONTRIBUTING.md), which summarizes the different types of contributions we accept.
