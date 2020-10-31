import React, { Component } from 'react';
import './App.css'
import { Modal,Image,Row,Container,Col,Button } from 'react-bootstrap';
import Meme from './Meme';
import {Link} from 'react-router-dom'


class Select extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "",
        allMemeImgs: [''],
        showMeme:true
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    // dispMeme(){
    //     console.log("hi");
    //     this.setState({showMeme:false})
    //     this.props.history.push({
    //         pathname: '/meme',
    //         data: this.state.randomImg // your data array of objects
    //       })
    // }

    showGrid(){
        this.setState({showMeme:true});
    }


    render() {
        const images = this.state.allMemeImgs.map(image => {
            return <Link className=" col-md-20 col-sm-3" to={{ 
                pathname: "/meme", 
                state: image.url
               }}><img src={image.url} className="gallery__img" onClick={()=>{ this.setState({randomImg:image.url})}}/>
               </Link>
         });

        //  var screen=this.state.showMeme;

        //  if(screen)
        //  {
    return ( 
        <div className="container">
            <h1>Select a meme template</h1>
        <div className="row gallery">
                       { images }
        </div>
        </div>
       
     );
    // }
    // else{
    //     return(
    //     <Meme image={this.state.randomImg}/>
    //     );
    // }
    }
}
 
export default Select;