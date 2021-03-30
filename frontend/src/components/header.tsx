import * as Preact from "preact";
import { Link } from "wouter-preact";


export default class Header extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);
    }

    public render() {

        return (
            <div>
                    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <Link class="navbar-item" href="/">Home</Link>

                        <div class="navbar-dropdown">
                            <Link class="navbar-item" href="/docs">Docs</Link>
                            <Link class="navbar-item" href="/about">About</Link>
                            <Link class="navbar-item" href="/account">Account</Link>
                            <hr class="navbar-divider"></hr>
                        <div class="navbar-item">
                            Version 0.1
                                </div>
                            </div>
                        </div>
                    </nav>

            </div>
        );

    }

}