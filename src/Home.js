import React, { Component } from "react";
import mainImage from "./assests/eiffel_tower.jpg";
 
class Home extends Component {
  render() {
    return (
      <div class="homeContent">
        <h2>Allons en France!</h2>
        <p>France is an amazing destination with multiple choices for the every traveler. Navegate our website for more information.</p>
 
        <section class="externalComment">
          <p>According to Lonely Planet France is...</p>
          <blockquote cite="https://www.lonelyplanet.com/france">"France seduces travellers with its unfalteringly familiar culture, woven around cafe terraces, village-square markets and lace-curtained bistros with their plat du jour (dish of the day) chalked on the board."</blockquote>
        </section>
        <figure>
          <img src={mainImage} alt="Afternoon shot of Eiffel Tower"></img>
          <figcaption>Eiffel Tower - Paris, France (From Pixabay.com)</figcaption>
        </figure>
      </div>
    );
  }
}
 
export default Home;