import React from "react";

function ProviderCard({ photoURL, name, id, specialty, bio }) {
  let url = `https://provider.stvincent.org/details/`;
  function bioText() {
    return { __html: bio };
  }

  return (
    <div className="row provider justify-content-sm-center">
      <div className="col-sm-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <img
                  src={photoURL ? photoURL : `https://placehold.it/125x145`}
                  alt={name}
                  className="photo img-responsive img-thumbnail center-block"
                />
              </div>
              <div className="col-sm-9">
                <a
                  href={url + id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="providerLink"
                >
                  <h3 className="providerName">{name}</h3>
                </a>
                <hr />
                <p>
                  <strong>{specialty}</strong>
                </p>
                <hr />
                <p className="bio" dangerouslySetInnerHTML={bioText()} />
                <a href={url + id} className="btn btn-primary">
                  View Full Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderCard;
