import * as Preact from "preact";


export default class Footer extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);
    }

    public render() {

        return (

            <footer class="footer">
                <div class="content has-text-centered">
                    <p>&copy; Copyright 2021</p>
                    <p>
                    <strong>Testing Preact</strong> by <a href="https://dogtowncs.netlify.com/">CMIV</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>

        );

    }

}