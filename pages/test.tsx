import * as React from 'react';

interface TestProps {}

const Test: React.FunctionComponent<TestProps> = () => {
    const [pos, setPos] = React.useState({ x: 0, y: 0 });
    const _display = (name: string) => {
        alert(`hello ${name}`);
    };
    return (
        <>
            <img onMouseMove={(e) => setPos({ x: e.screenX, y: e.screenY })} src="/asset/images/default-avatar.png" />
            {/* <button className="px-3 py-2 text-white bg-indigo-500 rounded-lg" onClick={() => _display('Duc')}>
                Hello button
            </button> */}
            <h1 className="flex flex-col">
                <div className="">x: {pos.x}</div>
                <div className="">y: {pos.y}</div>
            </h1>
        </>
    );
};
export default Test;
