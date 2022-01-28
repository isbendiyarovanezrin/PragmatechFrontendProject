import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="content p-4" style={theme}>
      <h1>Cupcake Ipsum</h1>
      <p>
        Caramels biscuit marshmallow sesame snaps cheesecake sweet roll
        fruitcake sweet halvah. Croissant sweet marshmallow marzipan cupcake
        cake. Jujubes sugar plum biscuit jelly-o gingerbread shortbread cupcake
        liquorice sweet roll. Dessert muffin candy canes bonbon marzipan
        brownie. Jujubes tart biscuit donut cupcake. Gummies lollipop jujubes
        fruitcake candy tart. Gummies jujubes marzipan cake cake cookie gummi
        bears powder pastry. Chocolate cake caramels powder macaroon candy.
        Cupcake gummies shortbread pastry liquorice candy canes cupcake candy
        canes tiramisu. Chocolate cake jujubes marshmallow lollipop dessert.
        Candy canes toffee tiramisu oat cake marshmallow. Candy canes gummies
        topping pie cheesecake lemon drops sesame snaps. Apple pie cake carrot
        cake sugar plum candy canes tiramisu candy canes marshmallow carrot
        cake. Donut pudding tootsie roll macaroon jelly pastry. Oat cake jelly
        beans chocolate cake halvah tart caramels. Jujubes shortbread cupcake
        bonbon bonbon dessert gummi bears. Powder gummi bears donut liquorice
        cookie gingerbread carrot cake. Dessert caramels pie halvah pastry
        bonbon bear claw cake. Jelly-o sweet roll sugar plum danish shortbread.
        Ice cream ice cream brownie jelly beans jelly beans shortbread toffee
        cotton candy oat cake. Pastry pie croissant bonbon danish pudding.
        Lollipop jelly carrot cake carrot cake topping dragée lemon drops. Pie
        dessert cotton candy marshmallow brownie carrot cake topping. Toffee
        donut biscuit cupcake topping bonbon pie. Biscuit halvah dessert powder
        pastry dessert cake. Muffin pudding toffee fruitcake ice cream candy
        marzipan cupcake sweet. Gummi bears bear claw icing pastry jujubes cake.
        Bonbon lollipop dragée jelly beans sugar plum danish gummies. Shortbread
        fruitcake bonbon chocolate bar biscuit jelly beans sweet roll candy.
        Jujubes jelly-o lemon drops chupa chups shortbread sugar plum topping
        caramels. Liquorice marzipan gingerbread sesame snaps gingerbread
        gingerbread sweet marzipan. Cake halvah brownie cheesecake cake
        chocolate bar cake cake soufflé. Jelly beans tart pudding lemon drops
        tiramisu. Wafer jelly-o candy apple pie pie cake. Wafer macaroon pastry
        gummies candy biscuit chupa chups ice cream sugar plum. Shortbread
        muffin pudding chocolate bar lemon drops cookie pastry jujubes. Tiramisu
        muffin macaroon dragée jelly jelly tart. Danish carrot cake marshmallow
        croissant tart.
      </p>
    </div>
  );
};

export default Home;
