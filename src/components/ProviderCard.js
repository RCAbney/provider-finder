import React from "react";

function ProviderCard({ PhotoURL, Name, ID, Specialty, Bio }) {
  let url = `https://provider.stvincent.org/All/details/`;
  function bioText() {
    return { __html: Bio };
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <div className="row">
            <div className="col-sm-3">
              <img
                src={PhotoURL}
                alt={Name}
                className="photo img-responsive img-thumbnail center-block"
              />
            </div>
            <div className="col-sm-9">
              <a href={url + ID} target="_blank" className="providerLink">
                <h3 className="providerName">{Name}</h3>
              </a>
              <hr />
              <h3 className="service-line">{Specialty}</h3>
              <p className="bio" dangerouslySetInnerHTML={bioText()} />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ProviderCard;
