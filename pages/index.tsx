import React from "react";
import type { NextPage } from "next";
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import { Tag } from "../components/Tag/Tag";
import { P } from "../components/P/P";

const Home: NextPage = () => {
    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance="primary" arrow='right'>button</Button>
            <Button appearance="ghost" arrow='right'>button</Button>
            <P>fgfgfg</P>
            <Tag size="m" color="primary">wdwdwd</Tag>
            <Tag size="s" color="ghost">wdwdwd</Tag>
            <Tag size="s" color="green">wdwdwd</Tag>
            <Tag size="s" color="red">wdwdwd</Tag>
        </>
    );
};

export default Home;
