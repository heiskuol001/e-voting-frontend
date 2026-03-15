import React from 'react'

const FooterComponent = () => {
  return (
    <div className='footer-container p-4 bg-gray-200 text-center flex items-center justify-center w-full mt-10'>
          <div className='grid grid-rows-3 gap-4 w-full md:grid-cols-3 md:grid-rows-1'>
              <div>
                  <h1>Logo</h1>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      
                  </ul>
              </div>
              <div>
                  <p>Contact Us</p>
                  <ul>
                      <li>Email:heiskuol001@gmail.com</li>
                      <li>Phone: +256-705-834-443</li>
                      <li>Address: kampala, Kampala, Uganda</li>
                      
                  </ul>
              </div>
              <div>
                  <p>Follow Us</p>
                  <ul>
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                    </ul>
              </div>
          </div>
          <div></div>
    </div>
  )
}

export default FooterComponent
