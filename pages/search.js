import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api';
import withLayout from '../components/withLayout';
import { DebounceInput } from 'react-debounce-input';
import { buildImageaArray, getGoogleMapsUrl } from '/components/helpers';
import $ from 'jquery';

let results = null;
let isServer = typeof window === 'undefined';
const Lightbox = dynamic(import('react-image-lightbox'));


class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    photoIndex: 0,
    isOpen: false,
    searchTerm: '',
    hasResults: false,
  }

  static async getInitialProps() {
    const posts = await api.posts();
    return { posts };
  }

  async updatePosts() {
    const posts = await api.posts().search(this.state.searchTerm);
    const hasResults = posts.length > 0;
    this.setState({
      posts: posts,
      hasResults: hasResults,
    });
    return { posts };
  }
  
  componentWillMount() {
    this.setState({
      posts: this.props.posts
    });
  };  

  componentDidMount() {
    const node = this.myRef.current;
    results = $(node);

    if (!isServer) {
      window.WOW = require('wowjs');

      window.wow = new WOW.WOW({
        live: true
      });
      window.wow.init();
    }
  }
  
  componentDidUpdate() {
    if (!isServer) {
      window.wow.sync();
    }
  }

  initializeLightbox = (post) => {
    window.images = [];
    window.images = buildImageaArray(post);
    this.setState({ isOpen: true });
  }

  scrollTo = () => {
    let noResults = results.find('.no-results');
    let restaurantList = results.find('.restaurant-list');
    if (noResults) {
      let top = noResults.offset().top - 20;
      if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        window.setTimeout(function() {
          $('html, body').animate({ scrollTop: top });
        }, 0);
      } else {
        $('html, body').animate({ scrollTop: top });
      }
    }
    else if (restaurantList) {
      let top = restaurantList.offset().top - 36;
      if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
        window.setTimeout(function() {
          $('html, body').animate({ scrollTop: top });
        }, 0);
      } else {
        $('html, body').animate({ scrollTop: top});
      }
    }
  }

  handleEvent = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
    if (this.state.searchTerm.length > 0) {
      this.updatePosts();
      this.scrollTo();
    }
  }

  render() {
    const { posts, photoIndex, isOpen, hasResults, searchTerm } = this.state;
    const title = 'Eat This Beef, bruh - Search';

    return (
      <div className="search-page" ref={this.myRef}>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'https://images.eatthisbeef.com/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'https://images.eatthisbeef.com/' + posts.map(post => (post.img))[0]} />
        </Head>
        <h1 className={'wow fadeInDown'}>SEARCH</h1>
        <h3 className={'wow fadeInDown'}>Have we been there? Probably. Search to find out.</h3>
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
        <section className="search">
          <DebounceInput
            className='search-input wow fadeInUp'
            debounceTimeout={300}
            name='etb-input'
            minLength={2}
            onChange={event => this.handleEvent(event)}
            placeholder='Search...'
          />
        </section>
        {!hasResults && searchTerm.length > 0 &&
          <div className='no-results wow fadeInUp'>
            <h1>Your search "{this.state.searchTerm}" did not return any results.</h1>
          </div>
        }
        {hasResults &&
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
                      <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </a>
                  </Link>
                  <div className={'address'}>
                    <a href={getGoogleMapsUrl(post)} target="_blank">{post.addressstreet + ', ' + post.addresscity + ', ' + post.addressstate}</a>
                  </div>
                  <button className={'img-thumb'} onClick={() => this.initializeLightbox(post)}>
                    <img src={'https://images.eatthisbeef.com/zoom.png'} className={'zoom'} />
                    <img src={'https://images.eatthisbeef.com/' + post.imgthumb}/>
                  </button>
                  <div className={'copy'}>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />                
                  </div>
                </section>
              ))
            }
          </section>
        }
      </div>
    );
  }
}

export default withLayout(Search);
