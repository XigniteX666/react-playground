import { Component } from "react";
import Page from "../../model/Page";
import axios from "axios";
import { ContentComponent } from "../ContentComponent/ContentComponent";

type Props = {};

type State = {
  pages: Array<Page>;
};

export default class PageServiceComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pages: [],
    };
  }

  componentDidMount(): void {
    this.retrievePages();
  }

  retrievePages() {
    axios
      .create({
        baseURL: "http://192.168.178.133/wordpress/",
        headers: {
          "Content-type": "application/json",
        },
      })
      .get("wp-json/wp/v2/pages")
      .then((response: any) => {
        this.setState({
          pages: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  render() {
    const { pages } = this.state;
    return (
      <>
        <h1>Pages</h1>
        <ul>
          {pages &&
            pages.map((page: Page, index: number) => (
              <li key={index}>
                {page.title.rendered}
                <ContentComponent content={page.content.rendered} />
              </li>
            ))}
        </ul>
      </>
    );
  }
}
