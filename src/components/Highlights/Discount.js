import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ButtonCom from "../Button";

export class Discount extends Component {
  state = {
    discountStart: 0,
    discountStop: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountStop) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart} %</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Registration Ends on some date!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel consectetur erat. Ut luctus egestas turpis, ut rhoncus metus
                eleifend eget. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Vivamus velit sapien,
                placerat quis dolor sed, suscipit consequat magna.
              </p>
              <div>
                <ButtonCom link="http://esaweb.org" target="_blank" />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
