const MainField = ({ children, ...otherProps }) => {
  <div {...otherProps}>
    {children}
    <div>
      <picture>
        <source
          srcset="./assets/images/mainField/banana_deskTop_1x_min.png 1x,
            ./assets/images/mainField/banana_deskTop_2x_min.png 2x"
          media="(min-width:1280px)"
        />
        <source
          srcset="./assets/images/mainField/banana_tablet_1x_min.png 1x, 
            ./assets/images/mainField/banana_tablet_2x_min.png 2x"
          media="(min-width:768px)"
        />
        <img
          src="./assets/images/mainField/banana_deskTop_2x_min.png"
          alt="banana"
        />
      </picture>
      {/* <picture>
        <source
          srcset="../../assets/images/mainField/greyZone_deskTop_1x_min.png 1x,
            ../../assets/images/mainField/greyZone_deskTop_2x_min.png 2x"
          media="(min-width:1280px)"
        />
        <source
          srcset="../../assets/images/mainField/greyZone_tablet_1x_min.png 1x, 
            ../../assets/images/mainField/greyZone_tablet_2x_min.png 2x"
          media="(min-width:768px)"
        />
        <img
          src="../../assets/images/mainField/greyZone_deskTop_2x_min.png"
          alt="greyZone"
        />
      </picture>
      <picture>
        <source
          srcset="../../assets/images/mainField/leaves_deskTop_1x_min.png 1x,
            ../../assets/images/mainField/leaves_deskTop_2x_min.png 2x"
          media="(min-width:1280px)"
        />
        <source
          srcset="../../assets/images/mainField/leaves_tablet_1x_min.png 1x, 
            ../../assets/images/mainField/leaves_tablet_2x_min.png 2x"
          media="(min-width:768px)"
        />
        <img
          src="../../assets/images/mainField/leaves_deskTop_2x_min.png 2x"
          alt="leaves"
        />
      </picture>
      <picture>
        <source
          srcset="../../assets/images/mainField/strawberry_descTop_1x_min.png 1x,
            ../../assets/images/mainField/strawberry_deskTop_2x_min.png 2x"
          media="(min-width:1280px)"
        />
        <source
          srcset="../../assets/images/mainField/strawberry_tablet_1x_min.png 1x, 
            ../../assets/images/mainField/strawberry_tablet_2x_min.png 2x"
          media="(min-width:768px)"
        />
        <img
          src="../../assets/images/mainField/strawberry_deskTop_2x_min.png 2x"
          alt="leaves"
        />
      </picture> */}
    </div>
  </div>;
};

export default MainField;
