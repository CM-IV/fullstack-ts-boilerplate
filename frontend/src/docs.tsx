import * as Preact from "preact";
import Pagination from "./components/pagination";



const root = document.getElementById('app');


export default class Docs extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);

    }

    public render() {

        return (
    
            <>
                <section>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="is-child box">
                                        <p class="title">Documentation</p>
                                        <p class="subtitle">By CMIV</p>
                                        <div class="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br/>

                <Pagination />
            </>
    
        );
    
    }

}


export class Docs2 extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);

    }

    public render() {

        return (
    
            <>
                <section>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="is-child box">
                                        <p class="title">Documentation Page 2</p>
                                        <p class="subtitle">By CMIV</p>
                                        <div class="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br/>

                <Pagination />
            </>
    
        );
    
    }

}

export class Docs3 extends Preact.Component<any, any> {

    constructor(props: any) {

        super(props);

    }

    public render() {

        return (
    
            <>
                <section>
                    <div class="container">
                        <div class="tile is-ancestor">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="is-child box">
                                        <p class="title">Documentation Page 3</p>
                                        <p class="subtitle">By CMIV</p>
                                        <div class="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. 
                                            Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. 
                                            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. 
                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. 
                                            Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. 
                                            Sed eget varius ligula, at volutpat tortor.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br/>

                <Pagination />
            </>
    
        );
    
    }

}