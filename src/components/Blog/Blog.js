import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container py-5">
        <h2 className="mb-3 title-cart text-center">Question Answers</h2>
        <div></div>

        <div class="card text-white bg-secondary mb-3">
          <div class="card-header fs-4 text-warning">
            Different Between Authentication and Authorization
          </div>
          <div class="card-body">
            <table class="table table-hover bg-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Authentication</th>
                  <th scope="col">Authorization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    TThe user may see and alter several aspects of
                    authentication.{" "}
                  </td>
                  <td>
                    The user has no visibility into or control over
                    authorization.
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    The first step in a successful identity and access
                    management strategy is authentication.{" "}
                  </td>
                  <td>Authentication is always followed by authorization.</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Authentication confirms the identity of the user.</td>
                  <td>
                    What resources a user has access to is determined by
                    authorization.
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    Passwords, one-time pins, biometric information, and other
                    information given or entered by the user are used for
                    authentication.
                  </td>
                  <td>
                    Authorization is controlled by the organization's settings,
                    which it implements and maintains.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header fs-4 text-warning">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div class="card-body">
            <p class="card-text">
              Without having to comprehend the complexity of developing your own
              authentication system, Firebase Authentication makes it easy to
              get your users signed in. We need to authenticate a user using
              Firebase authentication before we can utilize Firebase Storage.
              Users must be authenticated by default security rules. Firebase
              Storage is a strong and easy object storage that allows you to
              effortlessly store your files.
            </p>
          </div>
        </div>

        <div class="card text-white bg-secondary mb-3">
          <div class="card-header fs-4 text-warning">
            What other services does firebase provide other than authentication
          </div>
          <div class="card-body">
            <p class="card-text">
              Firebase is a complete solution that may help construct mobile or
              web applications faster and more efficiently with less resources.
              Let's take a look at some of the services and how they're used.
              Cloud Firestore Cloud Functions Authentication, Hosting, Cloud
              Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
              Links, Remote Config.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
