
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/aakash.jpeg"
              alt="Aakash Profile"
              className="shadow-dark"
            />
            <h1>Aakash Decosta</h1>
            <p>Mobile Application Developer</p>
            <div className="social-links">
              <a href="https://twitter.com/aakash_decosta" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.facebook.com/aakash.decosta" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/Light1810" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/aakash-decosta-b67700163/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
