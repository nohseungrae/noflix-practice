import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    console.log(this.state);
    this.state = {
      result: null,
      error: null,
      loading: false,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId));
        console.log(result);
      } else {
        ({ data: result } = await tvApi.tvDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  render() {
    const { result, loading, error } = this.state;
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
      ></DetailPresenter>
    );
  }
}
