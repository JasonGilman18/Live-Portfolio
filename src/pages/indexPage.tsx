import React from "react";
import {Desktop} from "./desktop";
import {Mobile} from "./mobile";


type IndexPageProps = {};
type IndexPageStates = {browserWidth: number};
class IndexPage extends React.Component<IndexPageProps, IndexPageStates>
{
    constructor(props: any)
    {
      super(props);
      
      this.state = {browserWidth: 0};

      this.updateBrowserWidth = this.updateBrowserWidth.bind(this);
    }

    componentDidMount()
    {
      this.updateBrowserWidth();
      window.addEventListener('resize', this.updateBrowserWidth);
    }

    componentWillUnmount()
    {
      window.removeEventListener('resize', this.updateBrowserWidth);
    }

    updateBrowserWidth()
    {
      this.setState({browserWidth: window.innerWidth});
    }

    render()
    {
      if(this.state.browserWidth > 767.98)
        return <Desktop/>;
      else
        return <Mobile/>;
    }
}

export default IndexPage
