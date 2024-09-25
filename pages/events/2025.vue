<template>
  <div class="page">
    <div class="wrapper pb-16">
      <div class="close bg-red-800 text-white text-center p-4 mt-4 rounded-md">
        You Got This 2025 has been cancelled. <a class="underline" href="https://lws.io/blog/you-got-this-closing">Read more here.</a>
      </div>
      <div class="intro">
        <img src="/img/2025/logo-byline.svg" alt="You Got This Returns. Core Skills Conference. Berlin. January 18 2025." class="max-w-full my-12">
        <p>You Got This is a one day conference focused on the non-technical core skills needed for a happy, healthy life that are otherwise never taught. We focus on creating an environment that everyone can benefit from with a safe space for important discussion. 2025 marks the return of our flagship conference as an in-person event. <a href="/events" class="underline">See previous events.</a></p>
        <div class="images">
          <img src="https://yougotthisconf.directus.app/assets/1911350d-7462-4420-9967-127b088941b7.jpg" alt="A close-up of Amina Adewusi as she makes a point during her presentation. The tips of her fingers are steepled together to emphasise her point.">
          <img src="https://yougotthisconf.directus.app/assets/7aac56bc-7584-487e-be4c-a154db660767.jpg" alt="A pair of conference attendees are deep in conversation in the foyer. The woman on the left, wearing a black head scarf, is smiling broadly as she listens to her companion, who has flowing braids.">
          <img src="https://yougotthisconf.directus.app/assets/a2070c6b-1dfc-4103-a344-65dcb1101a8c.jpg" alt="You Got This 2020 conference attendees investigate a table filled with promotional conference stickers in the sponsor area.">
          <img src="https://yougotthisconf.directus.app/assets/d3447f1f-3fe8-43c8-8e99-7ba55ad1e01b.jpg" alt="A view from the back of the conference room as Taylor Morrison gives her presentation. She is looking up at the large screen which is filled with images and the title, Self-Care.">
          <img src="https://yougotthisconf.directus.app/assets/a05dd88b-21fc-4275-b1ee-f091b655c9d9.jpg" alt="A close-up of a smiling Scary Boots delivering their conference opening. They wear a white shirt with a dark green cravat and a black waistcoat. Their short styled hair is a fiery red and they wear a silver nose ring.">
          <img src="https://yougotthisconf.directus.app/assets/cc5e68d2-00e5-4775-bbe2-aa336e277a73.jpg" alt="A view along a row of the audience. The audience are paying close attention to Scary's opening monologue. They are smiling broadly as they listen.">
        </div>
        <div class="cards my-12">
          <div class="card">
            <div class="pr-4">
              <img src="/img/2025/speak.png" alt="Microphone icon">
            </div>
            <div>
              <h2>Submit a Talk</h2>
              <p>We welcome 25 minute talks on <b>non-technical topics</b> that are important for people working in tech. We pay speakers €600, but do not directly cover travel and accommodation. We welcome first-time and experienced speakers alike, and offer optional talk planning and feedback sessions.</p>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="/img/2025/sponsor.png" alt="Handshake icon">
            </div>
            <div>
              <h2>Sponsor Event</h2>
              <p>A majority of event costs are covered by sponsoring organizations who want to support core skills education and address our audience of developers who care about the same. We expect 300 attendees to attend the event plus on-demand viewership of content in our library.</p>
            </div>
          </div>
        </div>
        <div class="icon-aside">
          <img src="/img/2025/inclusion.png" alt="Two hands clasped with a heart coming from them">
          <div class="md:mt-3">
            <h2>Inclusion</h2>
            <p>Inclusion is at the heart of our event as we must create an environment that allows people to feel safe in talking about difficult topics often covered as part of You Got This. We are committed to running the event in an accessible venue, communicating and enforcing our <a class="underline" href="/conduct">Code of Conduct</a>, and having spaces to decompress if needed.</p>
            <p class="mt-2">Our team have a track record of creating environments that everyone wants to be part of, and we prioritize the experience of attendees over vanity demographic metrics or the comfort of privileged groups.</p>
            <p class="mt-2">We will also give away a minimum of 25% of our tickets to those who typically get less opportunities in our industry.</p>
          </div>
        </div>
        <div class="icon-aside mt-8 md:mt-12">
          <img src="/img/2025/tickets.png" alt="A ticket">
          <div class="md:mt-2">
            <h2>Tickets</h2>
            <p>Tickets will be available in November and will cost €75. If you are part of an underrepresented group in tech, there will be the opportunity to apply for a ticket at no cost if would otherwise be unable to attend.</p>
            <NewsletterBlock class="newsletter" title="You Got This Newsletter" text="Get (infrequent) news about You Got This, including ticket avilability. Opt-out in one click." />
          </div>
        </div>
        <div class="icon-aside mt-8 m:mt-12">
          <img src="/img/2025/contact.png" alt="A rotary phone">
          <div class="md:mt-4">
            <h2>Contact</h2>
            <p>If you have any questions about any aspect of the event, you can reach out to lead organizer Kevin Lewis via email (<a class="underline" href="mailto:kevin@yougotthis.io">kevin@yougotthis.io</a>) or via Twitter <a class="underline" href="https://twitter.com/_phzn">(@_phzn)</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="wrapper text-right text-base">
         <a class="underline" href="/impressum">Impressum</a>
      </div>
    </footer>
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  layout: 'no-footer',
  head() {
    return {
      ...headFactory({
        title: 'You Got This 2025',
        description: 'A one-day core skills conference in Berlin on January 18 2025.',
        path: '/events/2025',
        image: this.$asset('57633dd5-da54-4155-af68-0d402ea22dc3')
      }),
      bodyAttrs: {
        class: ['event-2025']
      },
      link: [
        { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=averia-libre:400,700' }
      ]
    }
  }
}
</script>

<style>
:root {
  --a: #364050;
  --b: #121928;
  --font: "Averia Libre", sans-serif;
}
body.event-2025 header {
  background: var(--b) !important;
  border-bottom: none;
}
.newsletter {
  background: var(--a) !important;
  text-align: left !important;
  padding: 1rem !important;
  margin-top: 2rem !important;
}
.text-input:focus {
  border-color: var(--b) !important;
}
form {
  justify-content: flex-start !important;
}
</style>

<style scoped>
.page {
  background: linear-gradient(to bottom, var(--a), var(--b));
  color: white;
  font-family: var(--font);
  font-size: 1.25em;
}
.images {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-top: 3rem;
}
.images img {
  border-radius: 6px;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.card {
  background: var(--b);
  display: grid;
  grid-template-columns: 50px auto;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
}
.card > div {
  display: flex;
  flex-direction: column;
}
.card > div > a {
  margin-top: auto;
}
.card h2,
.icon-aside h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.card p {
  margin: 1rem 0;
}
.card a {
  text-decoration: underline;
}
.icon-aside {
  display: grid;
  grid-template-columns: 66px auto;
  gap: 1.5rem;
}
.icon-aside h2 {
  margin-bottom: 1rem;
}
.icon-aside p {
  font-size: 1rem;
}
footer {
  background: var(--a);
  padding: 1rem 0;
}
@media screen and (max-width: 1024px) {
  .images {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .page {
    font-size: 1rem;
  }
  .images {
    grid-template-columns: repeat(2, 1fr);
  }
  .cards {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .card {
    padding: 0;
    background: none;
  }
  .icon-aside {
    grid-template-columns: 50px auto;
  }
}
</style>
