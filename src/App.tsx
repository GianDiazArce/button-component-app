import { Button } from "./components/button";

const App = () => {
    return (
        <div className="flex flex-col gap-8 px-40 pt-28 ">
            <div className="flex justify-center flex-col items-center gap-4">
                <h2>Variants</h2>
                <div className="flex items-center gap-3">
                    <Button variant="default">default</Button>
                    <Button variant="outline">outline</Button>
                    <Button variant="text">text</Button>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-4">
                <h2>Colors</h2>
                <div className="flex items-center gap-3">
                    <Button color="primary">primary</Button>
                    <Button color="secondary">secondary</Button>
                    <Button color="default">default</Button>
                    <Button color="danger">danger</Button>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-4">
                <h2>Sizes</h2>
                <div className="flex items-center gap-3">
                    <Button size="sm">Default sm</Button>
                    <Button size="md">Default md</Button>
                    <Button size="lg">Default lg</Button>
                </div>
            </div>

            <div className="flex justify-center flex-col items-center gap-4">
                <h2>Icons</h2>
                <div className="flex items-center gap-3">
                    <Button startIcon="local_grocery_store">default</Button>
                    <Button endIcon="local_grocery_store" variant="outline">
                        outline
                    </Button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <h2>Disabled</h2>
                <div className="flex flex-wrap gap-8">
                    <h2 className="pr-5">Default</h2>
                    <Button disabled />
                    <Button disabled color="primary" />
                    <Button disabled color="secondary" />
                    <Button disabled color="danger" />
                </div>
                <div className="flex flex-wrap gap-8">
                    <h2 className="pr-5">Outline</h2>
                    <Button variant="outline" disabled />
                    <Button variant="outline" color="primary" disabled />
                    <Button variant="outline" color="secondary" disabled />
                    <Button variant="outline" color="danger" disabled />
                </div>
                <div className="flex flex-wrap gap-8">
                    <h2 className="pr-5">Text</h2>
                    <Button variant="text" disabled />
                    <Button variant="text" color="primary" disabled />
                    <Button variant="text" color="secondary" disabled />
                    <Button variant="text" color="danger" disabled />
                </div>
            </div>
        </div>
    );
};

export default App;
