import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api';
import withLayout from '../components/withLayout';
import { buildImageaArray, getGoogleMapsUrl } from '/components/helpers';

const Lightbox = dynamic(import('react-image-lightbox'));

class TopTen extends React.PureComponent {
  state = {
    photoIndex: 0,
    isOpen: false,
  }

  static async getInitialProps() {
    const posts = await api.posts().order('asc').orderby('menu_order').category(2).embed();
    return { posts };
  }

  componentWillMount() {
    this.setState({
      posts: this.props.posts
    });
  };  

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.WOW = require('wowjs');

      window.wow = new WOW.WOW({
        live: true
      });
      window.wow.init();
    }
  }
  
  componentDidUpdate() {
    if (typeof window !== 'undefined') {
      window.wow.sync();
    }
  }

  initializeLightbox = (post) => {
    window.images = [];
    window.images = buildImageaArray(post);
    this.setState({ isOpen: true });
  }

  render() {
    const { posts, photoIndex, isOpen } = this.state;
    const title = 'Eat This Beef, bruh - The Top Ten';

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'/static/img/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'/static/img/' + posts.map(post => (post.img))[0]} />
        </Head>
        <h1 className={'wow fadeInDown'}>THE TOP TEN</h1>
        <h3 className={'wow fadeInDown'}>The best of the best in Dallas Texas</h3>
        {isOpen && (
          <Lightbox
            mainSrc={window.images[photoIndex].src}
            nextSrc={window.images[(photoIndex + 1) % window.images.length].src}
            prevSrc={window.images[(photoIndex + window.images.length - 1) % window.images.length].src}
            imageTitle={window.images[photoIndex].title}
            animationOnKeyInput={true}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + window.images.length - 1) % window.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % window.images.length,
              })
            }
          />
        )}
        <section className={'restaurant-list'}>
          {
            posts.map(post => (
              <section key={post.id} className={'restaurant wow fadeInUp'} data-wow-duration=".5s" data-wow-offset="10">
                <Link
                  href={{
                    pathname: '/restaurant',
                    query: {
                      slug: post.slug,
                    },
                  }}
                  as={`/restaurant/${post.slug}`}
                >
                  <a>
                    <h2 dangerouslySetInnerHTML={{ __html: post.rank + '. ' + post.title.rendered }} />
                  </a>
                </Link>
                <div className={'address'}>
                  <a href={getGoogleMapsUrl(post)} target="_blank">{post.addressstreet + ', ' + post.addresscity + ', ' + post.addressstate}</a>
                </div>
                <button className={'img-thumb'} onClick={() => this.initializeLightbox(post)}>
                  <img src={'/static/img/' + post.imgthumb}/>
                </button>
                <div className={'copy'}>
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />                
                </div>
              </section>
            ))
          }
        </section>
      </div>
    );
  }
}

export default withLayout(TopTen);
