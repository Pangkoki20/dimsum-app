import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import "./Banner.css";

const items = [
  {
    src: 'http://f.ptcdn.info/006/035/000/1441040062-22-o.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/62529448_2095674483893053_1235545594366263296_n.jpg?_nc_cat=108&_nc_oc=AQnFob99mb05H-JB2qS97EUDksn2_Nnonc6lVVL6gntoQtjfT14QrNdMg-ie_i0AWLc&_nc_ht=scontent.fbkk13-1.fna&oh=7b9b5adf2339c1b13e796b833a5ae4dc&oe=5D7863A5',
    altText: '',
    caption: ''
  },
  {
    src: 'http://f.ptcdn.info/006/035/000/1441040119-26-o.jpg',
    altText: '',
    caption: ''
  }
];

class Pic extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
            <div className="pic">
                 <img src={item.src} alt={item.altText} />
            </div>
         
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Pic;
