import { Component } from "react";
import { getNews } from "../../servises/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";

class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: false,
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("this.props :>> ", this.props);
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      getNews(this.props.searchText)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            this.setState({ news: data.articles });
          } else return Promise.reject(data.message);
        })
        .catch((error) => {
          console.log("error :>> ", error);
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });

      console.log("news :>> ", this.state.news);
    }
  }
  render() {
    const { news, isLoading, error } = this.state;
    return (
      <>
        {error && <ErrorCard>{this.state.error}</ErrorCard>}
        {isLoading && (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
          </button>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {news &&
            news.map((el) => {
              return (
                <div key={el.url} className="" style={{ width: "23%" }}>
                  <div className="card">
                    <img
                      src={el.urlToImage}
                      className="card-img-top"
                      alt={el.description}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{el.title}</h5>
                      <p className="card-text">{el.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default ContentInfo;
