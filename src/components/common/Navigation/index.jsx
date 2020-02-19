import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.scss";

const CLASS_NAME = "Navigation";

class Navigation extends React.PureComponent {
  menuRef = React.createRef();
  sliderRef = React.createRef();

  componentDidMount() {
    this.moveSlider();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.moveSlider();
  }

  moveSlider() {
    const activeMenuEntry = this.menuRef.current.querySelector(`.${CLASS_NAME}__menu-entry--active`);

    if (!activeMenuEntry) {
      return;
    }

    const menuRec = this.menuRef.current.getBoundingClientRect();
    const activeMenuEntryRec = activeMenuEntry.getBoundingClientRect();
    const distance = activeMenuEntryRec.left - menuRec.left;
    const width = activeMenuEntryRec.width;

    requestAnimationFrame(() => {
      this.sliderRef.current.setAttribute(
        "style",
        `display: block; transform: translate3d(${distance}px, 0, 0); width: ${width}px`
      )
    })

  }

  render() {
    return (
      <div className={CLASS_NAME}>
        <div className={`${CLASS_NAME}__title`}>Awesome Blog</div>
        <div className={`${CLASS_NAME}__menu`} ref={this.menuRef}>
          <NavLink
            to="/"
            className={`${CLASS_NAME}__menu-entry`}
            activeClassName={`${CLASS_NAME}__menu-entry--active`}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/community"
            activeClassName={`${CLASS_NAME}__menu-entry--active`}
            className={`${CLASS_NAME}__menu-entry`}
          >
            Community
          </NavLink>
          <NavLink
            to="/resources"
            activeClassName={`${CLASS_NAME}__menu-entry--active`}
            className={`${CLASS_NAME}__menu-entry`}
          >
            Resources
          </NavLink>
          <div className={`${CLASS_NAME}__menu-button`}>Subscribe</div>
          <div className={`${CLASS_NAME}__menu-slider`} ref={this.sliderRef}/>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation);
