import React from 'react'

export default function About(props) {
  return (
    <div>
      <div className="accordion w-50 mx-5 my-5 " id="accordionExample">
  <div className={`accordion-item text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About textplay
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>textplay is a text utility service</strong> where user can come and alter his text as he wish. User can get count of number of alphabets, number of words, User can convert text into uppercase and lowercase.User can switch between dark mode and light mode as he wish.
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} >
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Our Team
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Team Members are</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi deserunt officia sint. Provident officia, nobis repellat, quidem necessitatibus facilis tempore, voluptates quibusdam dolore voluptatibus minima ipsum commodi voluptate voluptatum.
      </div>
    </div>
  </div>
  <div className={`accordion-item text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Address
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong> 312 Wellington Street, San Francisco</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti iste rerum dolores nam, accusantium aliquam vel libero! Debitis repudiandae reprehenderit aspernatur iste veniam ducimus. Non repellendus voluptate sed doloribus eum?
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
