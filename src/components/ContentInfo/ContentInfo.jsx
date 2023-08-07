import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { getNews } from "../../servises/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";

import React from "react";
import { useCustomContext } from "../../Context/Context";

const ContentInfo = ({ searchText }) => {
  const { news, setNews } = useCustomContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   news && setIsLoading(true);
  // }, [news]);

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);
    getNews(searchText)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setNews(data.articles);
        } else return Promise.reject(data.message);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log("news :>> ", news);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, setNews]);

  return (
    <>
      {error && <ErrorCard>{error}</ErrorCard>}
      {isLoading && (
        <ThreeDots
          state={{
            height: "80",
            width: "80",
            radius: "9",
            color: "#0d6efd",
            ariaLabel: "three-dots-loading",
            wrapperClassName: "",
            visible: true,
          }}
        />
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
              <div key={el.url} className="" style={{ width: "24%" }}>
                <div className="card">
                  <img
                    src={el.urlToImage}
                    className="card-img-top"
                    alt={el.description}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: 16 }}>
                      {el.title}
                    </h5>
                    <p className="card-text" style={{ fontSize: 14 }}>
                      {el.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ContentInfo;

// class ContentInfo extends Component {
//   state = {
//     news: null,
//     isLoading: false,
//     error: "",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     // console.log("this.props :>> ", this.props);
//     if (prevProps.searchText !== this.props.searchText) {
//       this.setState({ isLoading: true });
//       getNews(this.props.searchText)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === "ok") {
//             this.setState({ news: data.articles });
//           } else return Promise.reject(data.message);
//         })
//         .catch((error) => {
//           console.log("error :>> ", error);
//           this.setState({ error });
//         })
//         .finally(() => {
//           this.setState({ isLoading: false });
//         });

//       console.log("news :>> ", this.state.news);
//     }
//   }
//   render() {
//     const { news, isLoading, error } = this.state;
//     return (
//       <>
//         {error && <ErrorCard>{this.state.error}</ErrorCard>}
//         {isLoading && (
//           <ThreeDots
//             state={{
//               height: "80",
//               width: "80",
//               radius: "9",
//               color: "#0d6efd",
//               ariaLabel: "three-dots-loading",
//               wrapperClassName: "",
//               visible: true,
//             }}
//           />
//         )}
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: 5,
//           }}
//         >
//           {news &&
//             news.map((el) => {
//               return (
//                 <div key={el.url} className="" style={{ width: "23%" }}>
//                   <div className="card">
//                     <img
//                       src={el.urlToImage}
//                       className="card-img-top"
//                       alt={el.description}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{el.title}</h5>
//                       <p className="card-text">{el.content}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </>
//     );
//   }
// }

// export default ContentInfo;
