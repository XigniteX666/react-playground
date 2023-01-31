import { Component, ReactNode } from "react";
import Serie from "../../model/Serie";
import { SerieList } from "../SerieList/SerieList";
import axios from "axios";
type Props = {};

type State = {
  series: Array<Serie>;
};

export default class PageServiceComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      series: [],
    };
  }
  componentDidMount(): void {
    this.retrieveSeries();
  }

  retrieveSeries() {
    axios
      .create({
        baseURL: "http://localhost:8080/",
        headers: {
          "Content-type": "application/json",
        },
      })
      .get("/api/series/my")
      .then((response: any) => {
        this.setState({
          series: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  render(): ReactNode {
    return (
      <>
        <h1>Serie</h1>
        <SerieList series={this.state.series} />
      </>
    );
  }
}
