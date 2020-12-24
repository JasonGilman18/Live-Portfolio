import React from "react";
import {Desktop} from "./desktop";
import {DesktopSmall} from "./desktop_small";
import Mobile from "./mobile";


type IndexPageProps = {};
type IndexPageStates = {browserWidth: number, orientation: React.ReactText};
class IndexPage extends React.Component<IndexPageProps, IndexPageStates>
{
    constructor(props: any)
    {
      super(props);
      
      var temp_orientation = window.orientation;
      if(temp_orientation == null || temp_orientation == undefined)
        temp_orientation = "portrait";

      this.state = {browserWidth: 0, orientation: temp_orientation};

      this.updateBrowserWidth = this.updateBrowserWidth.bind(this);
      this.updateOrientation = this.updateOrientation.bind(this);
    }

    componentDidMount()
    {
      this.updateBrowserWidth();
      window.addEventListener('resize', this.updateBrowserWidth);
      window.addEventListener('orientationchange', this.updateOrientation);
    }

    componentWillUnmount()
    {
      window.removeEventListener('resize', this.updateBrowserWidth);
      window.addEventListener('orientationchange', this.updateOrientation);
    }

    updateBrowserWidth()
    {
      this.setState({browserWidth: window.innerWidth});
    }

    updateOrientation()
    {
      var temp_orientation = window.orientation;
      if(temp_orientation == null || temp_orientation == undefined)
        temp_orientation = "portrait";

      this.setState({orientation: temp_orientation});
    }

    render()
    {
      if(this.state.browserWidth > 575.98 || this.state.orientation == "landscape")
        return <Desktop/>;
      else
        return <Mobile/>;
    }
}

export default IndexPage
