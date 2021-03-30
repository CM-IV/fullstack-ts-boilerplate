import * as Preact from "preact";
import { Link } from "wouter-preact";

export default class Pagination extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);
    }

    public render() {

        return (

            <>
                <section>
                    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                        <ul class="pagination-list">
                            <li>
                                <Link class="pagination-link" aria-current="page" href="/docs">1</Link>
                            </li>
                            <li>
                                <Link class="pagination-link" href="/docs/page2">2</Link>
                            </li>
                            <li>
                                <Link class="pagination-link" href="/docs/page3">3</Link>
                            </li>
                        </ul>
                    </nav>
                </section>

                <br/>

            </>

        );

    }

}