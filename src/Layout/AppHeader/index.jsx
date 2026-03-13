import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";

import { CSSTransition, TransitionGroup } from '../../utils/TransitionWrapper';

import HeaderLogo from "../AppLogo";

const Header = ({
  headerBackgroundColor,
  enableMobileMenuSmall,
  enableHeaderShadow,
}) => {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          appear={true} timeout={1500} enter={false} exit={false}>
          <HeaderLogo />
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
