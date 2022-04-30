import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:1,
        tags:[]
        };
      renderTags(){
          if(this.state.tags.length === 0) return <p>Theare is no tags!..</p>;
          return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;


      } 
      incrementTest = product => 
     {
         console.log(product);
    // //       console.log("Increment Clicked",this);
    //     this.state.count++;
        this.setState({count:this.state.count + 1})
    }
    doHandleIncrement = ()=>
    {
        this.incrementTest({id:1})

    }
    //   constructor()
    //   {
    //       super();
    //       this.incrementTest = this.incrementTest.bind(this);
    //   }
    render() 
    {      
        let classes = this.simple();
        return( 
            <div>
                
                 <span className={this.simple()}>{this.formatCount()}</span>
                 <button onClick={() => this.incrementTest({id:1})} className='btn btn-secondary btn-sm'>Increment</button>
            {this.state.tags.length === 0 && 'Plz Create a new tags' }
            {this.renderTags()}
            </div>
            );
    }
    
    simple() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {count} = this.state;
        return count ===0 ? 'zero':count;
    }
}
 
export default Counter;