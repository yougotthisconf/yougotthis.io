<template>
  <div>
    <!-- <div class="nav">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <button 
            class="tab" 
            :aria-current="selected == '2023' ? 'page' : null" 
            @click="selected = 2023">
            2023 <span class="hidden sm:inline">Sponsorships</span>
          </button>
          <button 
            class="tab" 
            :aria-current="selected == '2024' ? 'page' : null" 
            @click="selected = 2024">
            2024 <span class="hidden sm:inline">Sponsorships</span>
          </button>
        </nav>
      </div>
    </div> -->
    <section v-if="selected == 2023">
      <!-- <h3>Schedule</h3>
      <div class="schedule">
        <div class="box"><p>March</p><p>Event</p></div>
        <div class="box"><p>July</p><p>Event</p></div>
        <div class="box"><p>October</p><p>Event</p></div>
        <div class="box"><p>October</p><p>NYC Event</p></div>
        <div class="box"><p>November</p><p>codebar Collab</p></div>
        <div class="box"><p>December</p><p>codebar Collab</p></div>
        <div class="box"><p>December</p><p>General Meetup</p></div>
      </div> -->
      <!-- <h3>Opportunities</h3> -->
      <div class="box mt-4">
        <h3>Quarterly Event Sponsorship</h3>
        <p><b>€600 or €2000</b><span class="ml-2">for all 4 if paid upfront</span></p>
        <ul>
          <li>Your logo on event webpage, on the livestream, and library pages.</li>
          <li>A 5 minute live or pre-recorded talk to be shared as part of the livestream.</li>
          <li>3 Tweets of thanks</li>
        </ul>
      </div>
      <div class="box mt-4">
        <h3>The Path Ahead with codebar</h3>
        <p><b>£1000 or £2500</b><span class="ml-2">for all 3 if paid upfront</span></p>
        <p class="!mt-4">A collaborative three-part event series with <a href="https://codebar.io/">codebar</a>, The Path Ahead will explore the different stages of a developer's career, from getting started to becoming a tech leader.</p>
        <p class="!mt-4">With over 23,000 community members between students and coaches, codebar is a charity that facilitates the growth of a diverse tech community by running free regular programming workshops for minority groups in tech. We expect 400-500 live attendees for each event, with all content made available for free in our content library after.</p>
        <ul>
          <li>Your logo on event webpage, on the livestream, and library pages.</li>
          <li>A 5 minute live or pre-recorded talk to be shared as part of the livestream.</li>
          <li>3 Tweets of thanks.</li>
        </ul>
        <p class="!mt-4">The Path Ahead consists of: </p>
        <ul>
          <li>Thurs 5 Oct 2023: Nailing Your First Job</li>
          <li>Thurs 2 Nov 2023: Navigating Year 1</li>
          <li>Thurs 7 Dec 2023: Year 2 And Beyond</li>
        </ul>
        <p class="!mt-4">For this event, codebar will handle sponsorship as a UK-based charity.</p>
      </div>
    </section>
    <!-- <section v-if="selected == 2024">
      <h3>Schedule</h3>
      <div class="schedule">
        <div class="box"><p>January</p><p>Hybrid Conference</p></div>
        <div class="box"><p>February</p><p>Themed Meetup</p></div>
        <div class="box"><p>March</p><p>General Meetup</p></div>
        <div class="box"><p>April</p><p>Weekly Articles</p></div>
        <div class="box"><p>May</p><p>Themed Meetup</p></div>
        <div class="box"><p>June</p><p>General Meetup</p></div>
        <div class="box"><p>July</p><p>Online Conference</p></div>
        <div class="box"><p>August</p><p>Weekly Articles</p></div>
        <div class="box"><p>September</p><p>General Meetup</p></div>
        <div class="box"><p>October</p><p>Themed Meetup</p></div>
        <div class="box"><p>November</p><p>Weekly Articles</p></div>
        <div class="box"><p>December</p><p>General Meetup</p></div>
      </div>
      <h3>Opportunities</h3>
      <div class="box mt-4">
        <h3>Bronze Partner</h3>
        <p><b>€5,000</b><span class="ml-2">for a 12 month partnership.</span></p>
        <ul>
          <li>Sponsor any 4 meetups or 2 article blocks.</li>
          <li>
            <details>
              <summary>Hybrid Conference Bronze Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo periodically shown on livestream graphics.</li>
                <li>1 tweet of thanks, mention in newsletter.</li>
                <li>Thank you at live events and in livestream.</li>
                <li>1 ticket to event (any location).</li>
                <li>Distribute small item at locations.</li>
              </ul>  
            </details>
          </li>
          <li>
            <details>
              <summary>Online Conference Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo periodically shown on livestream graphics.</li>
                <li>1 tweet of thanks, mention in newsletter.</li>
                <li>Thank you in livestream.</li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="box mt-4">
        <h3>Silver Partner</h3>
        <p><b>€10,000</b><span class="ml-2">for a 12 month partnership.</span></p>
        <ul>
          <li>Sponsor any 6 meetups or 3 article blocks.</li>
          <li>
            <details>
              <summary>Hybrid Conference Silver Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo permanently shown on livestream graphics.</li>
                <li>3 tweet of thanks, mention in newsletter.</li>
                <li>Thank you at live events and in livestream.</li>
                <li>2 tickets to event (any location).</li>
                <li>Sponsor table at one location of your choice.</li>
                <li>Video shown during breaks up to 5'.</li>
                <li>Live talk slot on stage up to 5'.</li>
              </ul>  
            </details>
          </li>
          <li>
            <details>
              <summary>Online Conference Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo periodically shown on livestream graphics.</li>
                <li>1 tweet of thanks, mention in newsletter.</li>
                <li>Thank you in livestream.</li>
              </ul>
            </details>
          </li>
          <li>A thank you with brief call-to-action at each of our events.</li>
        </ul>
      </div>
      <div class="box mt-4">
        <h3>Gold Partner</h3>
        <p><b>€15,000</b><span class="ml-2">for a 12 month partnership.</span></p>
        <ul>
          <li>Sponsor any 6 meetups and 2 article blocks.</li>
          <li>
            <details>
              <summary>Hybrid Conference Silver Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo permanently shown on livestream graphics.</li>
                <li>3 tweet of thanks, mention in newsletter.</li>
                <li>Thank you at live events and in livestream.</li>
                <li>2 tickets to event (any location).</li>
                <li>Sponsor table at one location of your choice.</li>
                <li>Video shown during breaks up to 5'.</li>
                <li>Live talk slot on stage up to 5'.</li>
              </ul>  
            </details>
          </li>
          <li>
            <details>
              <summary>Online Conference Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo periodically shown on livestream graphics.</li>
                <li>1 tweet of thanks, mention in newsletter.</li>
                <li>Thank you in livestream.</li>
              </ul>
            </details>
          </li>
          <li>A thank you with brief call-to-action at each of our events.</li>
          <li>A dedicated takeover event on a core skill that resonates with your organization. Sole sponsor and co-branded.</li>
          <li>1 full-length speaking slot at an event of your choice.</li>
        </ul>
      </div>
      <div class="box mt-4">
        <h3>Platinum Partner</h3>
        <p><b>€20,000</b><span class="ml-2">for a 12 month partnership.</span></p>
        <ul>
          <li>Sponsor any 6 meetups and 2 article blocks.</li>
          <li>
            <details>
              <summary>Hybrid Conference Gold Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo permanently shown on livestream graphics.</li>
                <li>5 tweet of thanks, mention in newsletter.</li>
                <li>Thank you at live events and in livestream.</li>
                <li>2 tickets to event (any location).</li>
                <li>Sponsor table at all locations.</li>
                <li>Video shown during breaks up to 5'.</li>
                <li>Live talk slot on stage up to 5'.</li>
                <li>Full-length live talk in any location.</li>
                <li>Co-brand entire event in all locations.</li>
              </ul>  
            </details>
          </li>
          <li>
            <details>
              <summary>Online Conference Sponsorship.</summary>
              <ul>
                <li>Logo on event page and content recordings.</li>
                <li>Logo periodically shown on livestream graphics.</li>
                <li>1 tweet of thanks, mention in newsletter.</li>
                <li>Thank you in livestream.</li>
              </ul>
            </details>
          </li>
          <li>A thank you with brief call-to-action at each of our events.</li>
          <li>A dedicated takeover event on a core skill that resonates with your organization. Sole sponsor and co-branded.</li>
          <li>3 full-length speaking slot at events of your choice (in addition to the hybrid conference).</li>
        </ul>
      </div>
      <div class="box mt-4">
        <h3>Additional Opportunities</h3>
        <p>Get in touch to learn more about these options.</p>
        <ul>
          <li>One-off event sponsorship.</li>
          <li>Provide live captioning for our in-person and online conferences.</li>
          <li>Provide a meal for our in-person conference location.</li>
          <li>Provide and watermark photography at an in-person conference location.</li>
        </ul>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 2023
    }
  }
}
</script>

<style scoped>
#tabs {
  @apply block w-full rounded-md;
  @apply border-gray-300 focus:border-indigo-500 focus:ring-indigo-500;
}
.tab {
  @apply w-1/2;
  @apply py-4 px-1;
  @apply text-sm font-medium text-center text-gray-500 hover:text-gray-700 no-underline;
  @apply border-b-2 border-transparent hover:border-gray-300;
}
.tab[aria-current="page"] {
  @apply border-theme-main text-theme-main;
}
.schedule {
  @apply mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2;
}
.schedule > div p {
  @apply !m-0;
  @apply leading-tight text-sm first:font-bold first:text-xs;
}
summary {
  cursor: pointer;
}
.box h3, .box p, .box ul {
  @apply m-0;
}
.box li:last-child {
  @apply mb-0;
}
</style>
