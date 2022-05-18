import React from "react";
function Redirect(item) {
  window.location.href =
    "https://ux5z2f.csb.app/ins/?imgurl=" +
    item.strDrinkThumb +
    "&instruction=" +
    item.strInstructions;
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],

      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())

      .then((json) => {
        this.setState({
          items: json.drinks,

          DataisLoaded: true
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1 style={{color:'black'}}> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Hello,Please click on any one of them. </h1>{" "}
        {items.slice(0, 5).map((item) => (
          <h3
            onClick={() => {
              Redirect(item);
            }}
            key={item.strDrinkThumb}
          >
            drink:{item.strDrink}
          </h3>
        ))}
      </div>
    );
  }
}

export default Home;
