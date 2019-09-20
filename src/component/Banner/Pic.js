import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  img
} from "reactstrap";
import "./Banner.css";

const items = [
  {
    src:"https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/70743668_2270832493043917_534257037853327360_n.jpg?_nc_cat=109&_nc_oc=AQm-vUf_WSh-LBsQ9lvUDmUfk9sYJVNQPMSc5i5TncAKnBcthDqZ5XZYtTsmHNNkfIs&_nc_ht=scontent.fbkk5-1.fna&oh=7498c81db71b1efe3c4ee75e00d7b352&oe=5DF82486",
    altText: "",
    caption: ""
  },
  {
    src: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/70443361_2270832433043923_3460931672713723904_n.jpg?_nc_cat=109&_nc_oc=AQmSvyeYl4pmGMhRKyRq9ZQcxZRFbQGx4V036odbS2v1J2YnrEhWgHo90pIAgytipEg&_nc_ht=scontent.fbkk5-1.fna&oh=0c798851bd124805303f59ff81283347&oe=5E07432B",
    altText: "",
    caption: ""
  },
  {
    src: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/70415927_2270832319710601_5956073303914315776_n.jpg?_nc_cat=108&_nc_oc=AQnsEb38L4Ikf2-AEkTv1g3KjeUCOao1LbXqoHMm2vVcYCJcHSIBpTFW0mgrh3PSEco&_nc_ht=scontent.fbkk5-7.fna&oh=e1d26c6fda68e95e8d7ad387de73ef20&oe=5DFECF5A",
    altText: "",
    caption: ""
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
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="pic">
            <img src={item.src} alt={item.altText} />
          </div>

          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Pic;
