// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "links", "template" ]

  connect() {   
  }

  add_association(event) {
  	event.preventDefault() // prevent link form navigating anywhere

  	// replace 'NEW_RECORD' from _form.html.erb with a timestamp to be used as child_index 
  	var content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime()) 
  	// inserts before data-target="nested-form.links" (last item of h4 in _form.html.erb)
  	this.linksTarget.insertAdjacentHTML('beforebegin', content)

  }

  remove_association(event) {
  	event.preventDefault()

  	// go to parant to find whether it is a new record ('add task' button has been pressed but task has not been saved)
  	let wrapper = event.target.closest(".nested-fields")
  	
  	if (wrapper.dataset.newRecord == "true") {
  		wrapper.remove()
  	}
  	else {
  		// add destroy attribute on page so Rails can delete it
  		wrapper.querySelector("input[name*='_destroy']").value = 1
  		// removes from page
  		wrapper.style.display = 'none'
  	}



  }

}
