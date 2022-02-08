import Head from "next/head";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Home() {
  const [data, setData] = useState([]);

  const getData = async ({ url }) => {
    const conect = () => fetch(url);

    try {
      const result = await conect();
      const data = await result.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData({
      url: "https://alekaimer-api.herokuapp.com/api/home/?populate=Image,socialLinks",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{data?.data?.attributes?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/alekaimer.png"
        />
      </Head>
      <div className="homeWrapper">
        <div className="ilustration">
          <img src="./images/leaf.jpeg" />
        </div>

        <div className="infos">
          <div className="avatar">
            <img src="https://github.com/alekaimer.png" />
          </div>

          <h1 className="mainTitle">{data?.data?.attributes?.title}</h1>

          <div className="description">
            <ReactMarkdown>{data?.data?.attributes?.description}</ReactMarkdown>
          </div>

          <div className="socialLinks">
            <ul>
              {data?.data?.attributes?.socialLinks?.map((socialLink, index) => (
                <li key={index}>
                  <a
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialLink.social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
