
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
      this.element=element
    
    // Get the custom data attribute on the Link
      this.data=this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
     this.itemElement=document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem= new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    //this.element.addEventListener("click", this.select.bind(this));
    this.element.addEventListener('click',(event=>{
     this.select(event)
    }))
  

  };

  select() {
    let links=document.querySelectorAll('.tabs-link');
    console.log(links);

    Array.from(links).forEach(function(element){
      element.classList.remove('tabs-link-selected');
      console.log(element);

    });
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select()
   
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element=element;
  }

  select(){
    let items=document.querySelectorAll('.tabs-item');
    console.log(items);

    Array.from(items).forEach(function(element){
        element.classList.remove('tabs-item-selected');
        console.log(element)
      })
  this.element.classList.add('tabs-item-selected')
  
   
    

    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

/*let links = document.querySelectorAll('.tabs-link');
links.forEach(function(link){
  return new TabLink(link);
})*/

let links=document.querySelectorAll('.tabs-link');
links.forEach(link=>{
  return new TabLink(link);
})

