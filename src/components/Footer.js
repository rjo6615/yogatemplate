function Footer() {
    return (       
        <div>
        <footer className="text-center text-black" style={{  backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)'}}>
          <div className="container p-4">
            <section className="mb-4">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-facebook-f"></i></a>
        
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i></a>
        
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i></a>
        
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i></a>
        
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-linkedin-in"></i></a>
    
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-github"></i></a>
            </section>

            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div className="col-md-5 col-12">
                    <div className="form-outline form-black mb-4">
                      <input type="email" id="form5Example21" className="form-control" />
                      <label className="form-label" for="form5Example21">Email address</label>
                    </div>
                  </div>

                  <div className="col-auto">
                    <button type="submit" className="btn btn-outline-dark mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
              </p>
            </section>
 
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-black">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 4</a>
                    </li>
                  </ul>
                </div>
     
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-black">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 4</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-black">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 4</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-black">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2020 Copyright:
            <a className="text-black mx-2" href="/#">Yoga Template</a>
          </div>
        </footer>
        </div>
    )
}

export default Footer;