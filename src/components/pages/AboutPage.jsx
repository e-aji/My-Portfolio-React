import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="container pt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
                impedit suscipit sed magnam alias in, repellat expedita hic explicabo
                architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Velit voluptate exercitationem quaerat pariatur
                mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
                nostrum temporibus ad omnis nam rerum eligendi.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
                impedit suscipit sed magnam alias in, repellat expedita hic explicabo
                architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Velit voluptate exercitationem quaerat pariatur
                mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
                nostrum temporibus ad omnis nam rerum eligendi.
            </p>

            <div className="text-center">
                <Link to="/portfolio">See My Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </div>
    );
}