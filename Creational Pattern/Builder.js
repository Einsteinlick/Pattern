class Profile {

    /* Receives the builder and assigns the values */
    constructor(builder) {
        this.menulocation = builder.menuLocation;
        this.borders = builder.borders;
        this.theme = builder.theme;
        this.coverimage = builder.coverImage;
        this.backgroundcolor = builder.backgroundColor;
        this.menucolor = builder.menuColor;
        this.profilefont = builder.profileFont;
    }
}
class ProfileBuilder {
    constructor(){ }


    setMenu(position) {
        this.menuLocation = position;
        return this;
    }

    setBorders(style) {
        this.borders = style;
        return this;
    }

    setTheme(style) {
        this.theme = style;
        return this;
    }

    setCoverImage(url) {
        this.coverImage = url;
        return this;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
        return this;
    }

    setMenuColor(color) {
        this.menuColor = color;
        return this;
    }

    setProfileFont(fontFamily) {
        this.profileFont = fontFamily;
        return this;
    }

  
    build() {
        return new Profile(this);
    }
}
function main() {
    return new ProfileBuilder()
        .setMenu('top')
        .setBorders('soft')
        .setTheme('dark')
        .setCoverImage('url.jpg')
        .setBackgroundColor('red')
        .setMenuColor('white')
        .setProfileFont('Arial')
        .build();
}

main();
class ProfileDirector {
    /* The director receives the builder */
    constructor(builder) {
        this.builder = builder;
    }


