"use client"
import React from "react";

export default function ClientComp(props: any) {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            count: {count}
            <div onClick={() => setCount(count + 1)}>add count</div>
        </div>
    );
}