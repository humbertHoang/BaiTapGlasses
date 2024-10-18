import React from "react";
import { useState } from "react";
import "./App.css";
let glasses = [];
async function getGlasses() {
  const res = await fetch("/src/assets/data/dataGlasses.json");
  const data = await res.json();
  return data;
}
try {
  glasses = await getGlasses();
} catch (error) {
  console.log(error);
}

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState({});
  const handleGlasses = (id) => {
    setSelectedGlasses(glasses.find((glasses) => glasses.id === id));
  };
  return (
    <>
      <main className="my-app">
        <h1 className="text-center bg-dark text-white opacity-75 p-4">
          TRY ON GLASSES ONLINE
        </h1>
        <section className="mt-5">
          <div className="container">
            <div className="row justify-content-evenly gy-5">
              <div className="col-3">
                <div className="card text-bg-dark position-relative">
                  <img
                    src="/src/assets/img/model.jpg"
                    className="card-img"
                    alt="model-1"
                  />
                  <img
                    className="d-block glasses-overlay object-fit-cover"
                    src={glasses[0].url}
                    alt="g1"
                  />
                  <div className="my-card-img content-overlay">
                    <h5 className="card-title text-primary">
                      {glasses[0].name}
                    </h5>
                    <p className="card-text">{glasses[0].desc}</p>
                  </div>
                </div>
              </div>
              {/* comment this */}
              <div className="col-3">
                <div className="card text-bg-dark position-relative">
                  <img
                    src="/src/assets/img/model.jpg"
                    className="card-img"
                    alt="model-2"
                  />
                  <img
                    className="d-block glasses-overlay object-fit-cover"
                    src={selectedGlasses.url}
                    alt=""
                  />
                  <div
                    className={`my-card-img content-overlay ${
                      Object.keys(selectedGlasses).length
                        ? ""
                        : "visually-hidden"
                    }`}
                  >
                    <h5 className="card-title text-primary">
                      {selectedGlasses.name}
                    </h5>
                    <p className="card-text">{selectedGlasses.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(1)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g1.jpg"
                            alt="g1-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(2)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g2.jpg"
                            alt="g2-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(3)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g3.jpg"
                            alt="g3-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(4)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g4.jpg"
                            alt="g4-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(5)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g5.jpg"
                            alt="g5-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(6)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g6.jpg"
                            alt="g6-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(7)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g7.jpg"
                            alt="g7-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(8)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g8.jpg"
                            alt="g8-jpg"
                          />
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => handleGlasses(9)}
                        >
                          <img
                            className="object-fit-cover w-75 d-block img-fluid mx-auto"
                            src="/src/assets/img/g9.jpg"
                            alt="g9-jpg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
