import React from 'react';
import Head from 'next/head';
import api from '../api';
import withLayout from '../components/withLayout';

class About extends React.PureComponent {
  static async getInitialProps() {
    const posts = await api.posts().order('asc').orderby('menu_order').perPage(10).category(2).embed();
    return { posts };
  }

  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.WOW = require('wowjs');

      window.wow = new WOW.WOW({
        live: true
      });
      window.wow.init();
    }
  }

  render() {
    const { posts } = this.props;
    const title = 'Eat This Beef, bruh - About';

    return (
      <div>
        <Head>
          <title>{title}</title >
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'/static/img/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'/static/img/' + posts.map(post => (post.img))[0]} />
        </Head>
        <div className={'intro about'}>
          <h1>About</h1>
          <p>Hello there. Top of the website to you. </p>
          <p>I'm Brian Parks and I love to eat burgers. I also love to make computers go beep boop beep. The third and latest version of eat this beef was built from the ground up and is utilizing the newest steamy hotness including but not limited to: the Wordpress REST API (bc super friendly CMS), react, next.js, express, SASS et al. It also renders on both the server and client side, such neat! Much SEO.</p>
          <p>You can check out the <a href="https://github.com/cyrilic" target="blank">source code</a> if you're feelin' saucy, or if you're a shameless nerd.</p>
          <p>And now, a message about burgers:</p>
          <p>"BURGER. The mere mention of the word elicits a Pavlovian salivation from men and women the world over. An easily uttered two syllables used to define a food both beautiful in its pure minimalist pragmatism and fascinating in its immeasurable permutations.</p>
          <p>Bun + Patty + Various Adornments + Bun = Burger.</p>
          <p>An equation as simple but profound as E = MC2. But could it possibly be this simple? Is one bun not a crown, a piece of regal headwear meant to exalt man's greatest achievement? And is the other bun not a foundation, bearing not merely meat, but carrying all the worldly burdens of Atlas himself? And is not all that lies between these starchy sentinels a testament to humanity's ever evolving ingenuity?</p>
          <p>These are questions that burdened mankind for time immemorial. Truly, mankind and the burger have been inexorably linked for as long as civilization itself. Studies of the fossil record show early hominids developed tools and fire in attempts at an early "proto-burger." Archaeology shows that early man descended from the African highlands to the fertile crescent of Mesopotamia, solely to domesticate the grains and beasts for the world's first true burger. Humans would soon populate every corner of the earth, following large game over the Bering land bridge in a quest for the exotic burgers of the American continents. It is reported Aristotle once scoffed, "Ye gods can keep ye nectar and ye ambrosia, for Man has the Burger!"</p>
          <p>For centuries the burger remained the defining force in history. Columbus set sail towards the western horizon, having heard rumors of a new world rich in gold, silver, and delicious burgers. Indeed, the very first conquistadors left behind ship loads of cattle on the wide Texas plains, in hopes that future voyages would return to a land of sufficient burger resources. Henry Ford developed the assembly line to create the world's most efficient burger, only to later realize the process could also be used in the manufacture of cars. And at man's zenith, he would walk on the moon, just to see if any delicious burgers lied beyond earth's surface.</p>
          <p>And so the quest for the perfect burger continues here at Eat This Beef! We will scour the four corners of the earth, leaving no bun unturned. For as there are countless scholars studying the artistry of the Mona Lisa, the rich symbolism of Moby Dick, and the engineering prowess of the Coliseum, Eat This Beef shall be the definitive scholars of the artistry, richness, and engineering might of The Burger. We invite you to join us bite by bite as every burger shall be studied, savored, celebrated, and saluted."</p>
          <p>-- <a href="https://www.facebook.com/anthony.schmeck" target="_blank">Anthony Schmeck</a></p>
        </div>
      </div>
    );
  }
}

export default withLayout(About);
