import React from 'react'

const AcountSidebar = () => {
  return (
    <aside id="sidebarContent" className="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
  <div className="u-sidebar__scroller">
    <div className="u-sidebar__container">
      <div className="js-scrollbar u-header-sidebar__footer-offset pb-3">
        {/* Toggle Button */}
        <div className="d-flex align-items-center pt-4 px-7">
          <button type="button" className="close ml-auto" aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent" data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration={500}>
            <i className="ec ec-close-remove" />
          </button>
        </div>
        {/* End Toggle Button */}
        {/* Content */}
        <div className="js-scrollbar u-sidebar__body">
          <div className="u-sidebar__content u-header-sidebar__content">
            <form className="js-validate">
              {/* Login */}
              <div id="login" data-target-group="idForm">
                {/* Title */}
                <header className="text-center mb-7">
                  <h2 className="h4 mb-0">Welcome Back!</h2>
                  <p>Login to manage your account.</p>
                </header>
                {/* End Title */}
                {/* Form Group */}
                <div className="form-group">
                  <div className="js-form-message js-focus-state">
                    <label className="sr-only" htmlFor="signinEmail">Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="signinEmailLabel">
                          <span className="fas fa-user" />
                        </span>
                      </div>
                      <input type="email" className="form-control" name="email" id="signinEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                    </div>
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div className="form-group">
                  <div className="js-form-message js-focus-state">
                    <label className="sr-only" htmlFor="signinPassword">Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="signinPasswordLabel">
                          <span className="fas fa-lock" />
                        </span>
                      </div>
                      <input type="password" className="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" aria-describedby="signinPasswordLabel" required data-msg="Your password is invalid. Please try again." data-error-class="u-has-error" data-success-class="u-has-success" />
                    </div>
                  </div>
                </div>
                {/* End Form Group */}
                <div className="d-flex justify-content-end mb-4">
                  <a className="js-animation-link small link-muted" href="javascript:;" data-target="#forgotPassword" data-link-group="idForm" data-animation-in="slideInUp">Forgot Password?</a>
                </div>
                <div className="mb-2">
                  <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
                </div>
                <div className="text-center mb-4">
                  <span className="small text-muted">Do not have an account?</span>
                  <a className="js-animation-link small text-dark" href="javascript:;" data-target="#signup" data-link-group="idForm" data-animation-in="slideInUp">Signup
                  </a>
                </div>
                <div className="text-center">
                  <span className="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                </div>
                {/* Login Buttons */}
                <div className="d-flex">
                  <a className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                    <span className="fab fa-facebook-square mr-1" />
                    Facebook
                  </a>
                  <a className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                    <span className="fab fa-google mr-1" />
                    Google
                  </a>
                </div>
                {/* End Login Buttons */}
              </div>
              {/* Signup */}
              <div id="signup" style={{display: 'none', opacity: 0}} data-target-group="idForm">
                {/* Title */}
                <header className="text-center mb-7">
                  <h2 className="h4 mb-0">Welcome to Electro.</h2>
                  <p>Fill out the form to get started.</p>
                </header>
                {/* End Title */}
                {/* Form Group */}
                <div className="form-group">
                  <div className="js-form-message js-focus-state">
                    <label className="sr-only" htmlFor="signupEmail">Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="signupEmailLabel">
                          <span className="fas fa-user" />
                        </span>
                      </div>
                      <input type="email" className="form-control" name="email" id="signupEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmailLabel" required data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                    </div>
                  </div>
                </div>
                {/* End Input */}
                {/* Form Group */}
                <div className="form-group">
                  <div className="js-form-message js-focus-state">
                    <label className="sr-only" htmlFor="signupPassword">Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="signupPasswordLabel">
                          <span className="fas fa-lock" />
                        </span>
                      </div>
                      <input type="password" className="form-control" name="password" id="signupPassword" placeholder="Password" aria-label="Password" aria-describedby="signupPasswordLabel" required data-msg="Your password is invalid. Please try again." data-error-class="u-has-error" data-success-class="u-has-success" />
                    </div>
                  </div>
                </div>
                {/* End Input */}
                {/* Form Group */}
                <div className="form-group">
                  <div className="js-form-message js-focus-state">
                    <label className="sr-only" htmlFor="signupConfirmPassword">Confirm Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="signupConfirmPasswordLabel">
                          <span className="fas fa-key" />
                        </span>
                      </div>
                      <input type="password" className="form-control" name="confirmPassword" id="signupConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="signupConfirmPasswordLabel" required data-msg="Password does not match the confirm password." data-error-class="u-has-error" data-success-class="u-has-success" />
                    </div>
                  </div>
                </div>
                {/* End Input */}
                <div className="mb-2">
                  <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                </div>
                <div className="text-center mb-4">
                  <span className="small text-muted">Already have an account?</span>
                  <a className="js-animation-link small text-dark" href="javascript:;" data-target="#login" data-link-group="idForm" data-animation-in="slideInUp">Login
                  </a>
                </div>
                <div className="text-center">
                  <span className="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                </div>
                {/* Login Buttons */}
                <div className="d-flex">
                  <a className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                    <span className="fab fa-facebook-square mr-1" />
                    Facebook
                  </a>
                  <a className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                    <span className="fab fa-google mr-1" />
                    Google
                  </a>
                </div>
                {/* End Login Buttons */}
              </div>
              {/* End Signup */}
              {/* Forgot Password */}
              <div id="forgotPassword" style={{display: 'none', opacity: 0}} data-target-group="idForm">
                {/* Title */}
                <header className="text-center mb-7">
                  <h2 className="h4 mb-0">Recover Password.</h2>
                  <p>Enter your email address and an email with instructions will be sent to you.</p>
                </header>
                {/* End Title */}
                {/* Form Group */}
                <div className="form-group">
                  <div className="js-form-message js-focus-state">
                    <label className="sr-only" htmlFor="recoverEmail">Your email</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="recoverEmailLabel">
                          <span className="fas fa-user" />
                        </span>
                      </div>
                      <input type="email" className="form-control" name="email" id="recoverEmail" placeholder="Your email" aria-label="Your email" aria-describedby="recoverEmailLabel" required data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                    </div>
                  </div>
                </div>
                {/* End Form Group */}
                <div className="mb-2">
                  <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password</button>
                </div>
                <div className="text-center mb-4">
                  <span className="small text-muted">Remember your password?</span>
                  <a className="js-animation-link small" href="javascript:;" data-target="#login" data-link-group="idForm" data-animation-in="slideInUp">Login
                  </a>
                </div>
              </div>
              {/* End Forgot Password */}
            </form>
          </div>
        </div>
        {/* End Content */}
      </div>
    </div>
  </div>
</aside>

  )
}

export default AcountSidebar
