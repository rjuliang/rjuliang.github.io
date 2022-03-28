import React, { Component } from "react";
 
class WhereToGo extends Component {
  

  render() {
    var cityStyles= {
      padding: 0,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    }
    return (
      <div>
        <h2>Everywhere to Go</h2>
        <p> Get ready to pack your bags for a long trip because France has so many to offer from these cities:</p>
        <ol style={cityStyles} className="cityListBigWebsite">
          <ItemWithPic city="Paris" img="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004__340.jpg"></ItemWithPic>
          <ItemWithPic city="Nice" img="https://cdn.pixabay.com/photo/2019/11/23/04/58/nice-4646272__340.jpg"></ItemWithPic>
          <ItemWithPic city="Lyon" img="https://cdn.pixabay.com/photo/2019/08/08/11/04/lyon-4392678__340.jpg"></ItemWithPic>
          <ItemWithPic city="Bordeaux" img="https://cdn.pixabay.com/photo/2018/12/15/14/43/bordeaux-3876988__340.jpg"></ItemWithPic>
          <ItemWithPic city="Marseilles" img="https://cdn.pixabay.com/photo/2019/10/26/18/44/france-4580082__340.jpg"></ItemWithPic>
        </ol>
        <ol className="cityListSmallWeb">
          <SingleCity city="Paris"></SingleCity>
          <SingleCity city="Nice"></SingleCity>
          <SingleCity city="Lyon"></SingleCity>
          <SingleCity city="Bordeaux"></SingleCity>
          <SingleCity city="Marseilles"></SingleCity>
        </ol>
      </div>
    );
  }
}

class ItemWithPic extends Component {
  render(){
    var itemStyle ={
      marginRight: "10px",
      backgroundImage: `url(${this.props.img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100px",
      width: "170px",
    }


    return <div style={itemStyle}><SingleCity applyStyle="True" city={this.props.city}></SingleCity></div>
  }

  
}

class SingleCity extends Component{
    render(){
      var listStyle = this.props.applyStyle == 'True' 
      ? {
        listStyleType: "none",
        margin: 0,
        textDecoration: "none",
        height: "100px",
        width: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      } : {}
      return <li style={listStyle}>{this.props.city}</li>
    }
}
 
export default WhereToGo;