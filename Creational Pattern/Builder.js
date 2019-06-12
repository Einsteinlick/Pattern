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

    /* Define all the steps needed to create a profile */

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

    /* Could also be called getProfile() */
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

    /* Implements a method to automatically generate a popular profile */
    createPopularProfile() {
        return this.builder
            .setMenu('top')
            .setBorders('soft')
            .setTheme('light')
            .setCoverImage('rain.jpg')
            .setBackgroundColor('black')
            .setMenuColor('blue')
            .setProfileFont('Ubuntu')
            .build();
    }

